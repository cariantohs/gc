// Konfigurasi Supabase
const SUPABASE_URL = 'https://rpioeforxngiooswpijv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-kpfMOhsIr4i5ObsKpp8YQ_qsQsaojL';

// Inisialisasi Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Variabel global
let map;
let marker;
let currentLocation = { lat: 2.6249, lng: 98.7127 }; // Koordinat Pangururan
let selectedUsaha = null;
let usahaData = [];
let filteredUsaha = [];

// Elemen DOM
const kecamatanSelect = document.getElementById('kecamatan');
const desaSelect = document.getElementById('desa');
const usahaSelect = document.getElementById('usaha');
const statusSelect = document.getElementById('status');
const keteranganTextarea = document.getElementById('keterangan');
const btnSimpan = document.getElementById('btn-simpan');
const btnReset = document.getElementById('btn-reset');
const btnRefresh = document.getElementById('btn-refresh');
const btnLocate = document.getElementById('btn-locate');
const btnClearMarker = document.getElementById('btn-clear-marker');

// Stats elements
const totalDataSpan = document.getElementById('total-data');
const remainingDataSpan = document.getElementById('remaining-data');
const completedDataSpan = document.getElementById('completed-data');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');

// Display elements
const selectedNama = document.getElementById('selected-nama');
const selectedAlamat = document.getElementById('selected-alamat');
const selectedKecamatan = document.getElementById('selected-kecamatan');
const selectedDesa = document.getElementById('selected-desa');
const coordinatesSpan = document.getElementById('coordinates');
const activityLog = document.getElementById('activity-log');

// Modals
const loadingModal = document.getElementById('loading-modal');
const successModal = document.getElementById('success-modal');

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', async () => {
    await initApp();
    initEventListeners();
});

async function initApp() {
    showLoading();
    
    try {
        // Load data dari Supabase
        await loadDataFromSupabase();
        
        // Inisialisasi peta
        initMap();
        
        // Update statistik
        updateStats();
        
        // Load aktivitas terbaru
        await loadRecentActivity();
        
        hideLoading();
    } catch (error) {
        console.error('Error initializing app:', error);
        alert('Terjadi kesalahan saat memuat data. Silakan refresh halaman.');
        hideLoading();
    }
}

function initMap() {
    const mapOptions = {
        center: currentLocation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#444444" }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{ "color": "#f2f2f2" }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{ "visibility": "simplified" }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{ "color": "#3498db" }, { "visibility": "on" }]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Event listener untuk klik pada peta
    map.addListener('click', (event) => {
        placeMarker(event.latLng);
    });

    // Coba dapatkan lokasi pengguna
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(currentLocation);
                map.setZoom(15);
            },
            () => {
                console.log('Tidak dapat mendapatkan lokasi pengguna');
            }
        );
    }
}

function placeMarker(location) {
    if (marker) {
        marker.setMap(null);
    }

    marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    // Update koordinat display
    const lat = location.lat().toFixed(6);
    const lng = location.lng().toFixed(6);
    coordinatesSpan.textContent = `${lat}, ${lng}`;
    
    // Update button state
    updateSimpanButtonState();

    // Event listener untuk drag marker
    marker.addListener('dragend', (event) => {
        const newLat = event.latLng.lat().toFixed(6);
        const newLng = event.latLng.lng().toFixed(6);
        coordinatesSpan.textContent = `${newLat}, ${newLng}`;
    });
}

async function loadDataFromSupabase() {
    try {
        // Ambil data usaha yang belum di-geotag
        const { data, error } = await supabase
            .from('usaha_geotag')
            .select('*')
            .eq('is_geotagged', false)
            .order('kecamatan', { ascending: true });

        if (error) throw error;

        usahaData = data || [];
        
        // Populate dropdown kecamatan
        populateKecamatanDropdown();
        
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}

function populateKecamatanDropdown() {
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    const kecamatans = [...new Set(usahaData.map(item => item.kecamatan))];
    
    kecamatans.forEach(kecamatan => {
        const option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect.appendChild(option);
    });
}

function filterByKecamatan(kecamatan) {
    desaSelect.disabled = !kecamatan;
    desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
    
    if (!kecamatan) {
        usahaSelect.disabled = true;
        usahaSelect.innerHTML = '<option value="">Pilih Usaha</option>';
        clearUsahaInfo();
        return;
    }
    
    filteredUsaha = usahaData.filter(item => item.kecamatan === kecamatan);
    const desas = [...new Set(filteredUsaha.map(item => item.desa))];
    
    desas.forEach(desa => {
        const option = document.createElement('option');
        option.value = desa;
        option.textContent = desa;
        desaSelect.appendChild(option);
    });
}

function filterByDesa(desa) {
    usahaSelect.disabled = !desa;
    usahaSelect.innerHTML = '<option value="">Pilih Usaha</option>';
    
    if (!desa) {
        clearUsahaInfo();
        return;
    }
    
    const filtered = filteredUsaha.filter(item => item.desa === desa);
    
    filtered.forEach(usaha => {
        const option = document.createElement('option');
        option.value = usaha.id;
        option.textContent = usaha.nama_usaha;
        usahaSelect.appendChild(option);
    });
}

function selectUsaha(usahaId) {
    if (!usahaId) {
        clearUsahaInfo();
        return;
    }
    
    const usaha = filteredUsaha.find(item => item.id == usahaId);
    if (!usaha) return;
    
    selectedUsaha = usaha;
    
    // Update display
    selectedNama.textContent = usaha.nama_usaha;
    selectedAlamat.textContent = usaha.alamat || '-';
    selectedKecamatan.textContent = usaha.kecamatan;
    selectedDesa.textContent = usaha.desa;
    
    // Coba cari lokasi berdasarkan alamat
    if (usaha.alamat) {
        geocodeAddress(usaha.alamat + ', ' + usaha.desa + ', ' + usaha.kecamatan);
    }
    
    // Update button state
    updateSimpanButtonState();
}

async function geocodeAddress(address) {
    const geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;
            map.setCenter(location);
            map.setZoom(15);
            
            // Tambahkan marker info
            if (marker) {
                marker.setMap(null);
            }
            
            marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: {
                    url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    scaledSize: new google.maps.Size(40, 40)
                },
                title: selectedUsaha.nama_usaha
            });
            
            const lat = location.lat().toFixed(6);
            const lng = location.lng().toFixed(6);
            coordinatesSpan.textContent = `${lat}, ${lng} (dari geocoding)`;
        }
    });
}

function updateSimpanButtonState() {
    const isUsahaSelected = selectedUsaha !== null;
    const isMarkerPlaced = marker !== null;
    const isStatusSelected = statusSelect.value !== '';
    
    btnSimpan.disabled = !(isUsahaSelected && isMarkerPlaced && isStatusSelected);
}

async function saveGeotag() {
    if (!selectedUsaha || !marker || !statusSelect.value) {
        alert('Harap lengkapi semua data sebelum menyimpan!');
        return;
    }
    
    showLoading();
    
    try {
        const position = marker.getPosition();
        const lat = position.lat();
        const lng = position.lng();
        const status = statusSelect.value;
        const keterangan = keteranganTextarea.value.trim();
        
        // Update data di Supabase
        const { error } = await supabase
            .from('usaha_geotag')
            .update({
                lat: lat,
                lng: lng,
                status: status,
                keterangan: keterangan || null,
                is_geotagged: true,
                updated_at: new Date().toISOString()
            })
            .eq('id', selectedUsaha.id);
        
        if (error) throw error;
        
        // Tambahkan ke activity log
        addActivityLog(selectedUsaha.nama_usaha, status);
        
        // Update statistik
        updateStats();
        
        // Hapus dari dropdown
        removeUsahaFromDropdown(selectedUsaha.id);
        
        // Reset form
        resetForm();
        
        // Show success modal
        hideLoading();
        showSuccessModal();
        
    } catch (error) {
        console.error('Error saving geotag:', error);
        alert('Gagal menyimpan data. Silakan coba lagi.');
        hideLoading();
    }
}

function removeUsahaFromDropdown(usahaId) {
    // Hapus dari array data
    usahaData = usahaData.filter(item => item.id !== usahaId);
    filteredUsaha = filteredUsaha.filter(item => item.id !== usahaId);
    
    // Hapus dari dropdown
    const optionToRemove = Array.from(usahaSelect.options)
        .find(option => option.value == usahaId);
    
    if (optionToRemove) {
        usahaSelect.removeChild(optionToRemove);
    }
    
    // Jika dropdown kosong, reset ke step sebelumnya
    if (usahaSelect.options.length === 1) { // hanya option default
        usahaSelect.disabled = true;
        
        // Cek apakah ada desa lain
        const remainingDesas = [...new Set(filteredUsaha.map(item => item.desa))];
        if (remainingDesas.length === 0) {
            desaSelect.disabled = true;
            desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
        }
    }
}

function resetForm() {
    // Reset dropdowns
    usahaSelect.value = '';
    statusSelect.value = '';
    keteranganTextarea.value = '';
    
    // Clear marker
    if (marker) {
        marker.setMap(null);
        marker = null;
    }
    
    // Clear coordinates
    coordinatesSpan.textContent = 'Klik pada peta untuk menandai lokasi';
    
    // Clear usaha info
    clearUsahaInfo();
    
    // Reset selected usaha
    selectedUsaha = null;
    
    // Update button state
    updateSimpanButtonState();
}

function clearUsahaInfo() {
    selectedNama.textContent = '-';
    selectedAlamat.textContent = '-';
    selectedKecamatan.textContent = '-';
    selectedDesa.textContent = '-';
}

function updateStats() {
    const total = usahaData.length + await getCompletedCount();
    const remaining = usahaData.length;
    const completed = await getCompletedCount();
    
    totalDataSpan.textContent = total;
    remainingDataSpan.textContent = remaining;
    completedDataSpan.textContent = completed;
    
    // Update progress bar
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    progressPercent.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;
}

async function getCompletedCount() {
    try {
        const { count, error } = await supabase
            .from('usaha_geotag')
            .select('*', { count: 'exact', head: true })
            .eq('is_geotagged', true);
        
        if (error) throw error;
        return count || 0;
    } catch (error) {
        console.error('Error getting completed count:', error);
        return 0;
    }
}

async function loadRecentActivity() {
    try {
        const { data, error } = await supabase
            .from('usaha_geotag')
            .select('*')
            .eq('is_geotagged', true)
            .order('updated_at', { ascending: false })
            .limit(10);
        
        if (error) throw error;
        
        activityLog.innerHTML = '';
        
        if (data && data.length > 0) {
            data.forEach(item => {
                const activityItem = document.createElement('div');
                activityItem.className = `activity-item ${getStatusClass(item.status)}`;
                
                const timeAgo = getTimeAgo(item.updated_at);
                activityItem.innerHTML = `
                    <strong>${item.nama_usaha}</strong><br>
                    <small>${item.status} • ${timeAgo}</small>
                `;
                
                activityLog.appendChild(activityItem);
            });
        } else {
            activityLog.innerHTML = '<p class="text-muted">Belum ada aktivitas</p>';
        }
        
    } catch (error) {
        console.error('Error loading activity:', error);
    }
}

function addActivityLog(namaUsaha, status) {
    const activityItem = document.createElement('div');
    activityItem.className = `activity-item ${getStatusClass(status)}`;
    
    activityItem.innerHTML = `
        <strong>${namaUsaha}</strong><br>
        <small>${status} • Baru saja</small>
    `;
    
    activityLog.insertBefore(activityItem, activityLog.firstChild);
    
    // Batasi jumlah aktivitas
    if (activityLog.children.length > 10) {
        activityLog.removeChild(activityLog.lastChild);
    }
}

function getStatusClass(status) {
    switch(status) {
        case 'Ditemukan': return 'success';
        case 'Tutup': return 'warning';
        case 'Tidak Ditemukan': return 'danger';
        case 'Pindah': return 'warning';
        default: return '';
    }
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Baru saja';
    if (diffMins < 60) return `${diffMins} menit yang lalu`;
    if (diffHours < 24) return `${diffHours} jam yang lalu`;
    if (diffDays < 7) return `${diffDays} hari yang lalu`;
    
    return date.toLocaleDateString('id-ID');
}

function initEventListeners() {
    // Dropdown events
    kecamatanSelect.addEventListener('change', (e) => {
        filterByKecamatan(e.target.value);
        resetForm();
    });
    
    desaSelect.addEventListener('change', (e) => {
        filterByDesa(e.target.value);
        resetForm();
    });
    
    usahaSelect.addEventListener('change', (e) => {
        selectUsaha(e.target.value);
    });
    
    statusSelect.addEventListener('change', updateSimpanButtonState);
    keteranganTextarea.addEventListener('input', updateSimpanButtonState);
    
    // Button events
    btnSimpan.addEventListener('click', saveGeotag);
    
    btnReset.addEventListener('click', () => {
        if (confirm('Reset semua pilihan?')) {
            kecamatanSelect.value = '';
            desaSelect.value = '';
            resetForm();
            filterByKecamatan('');
        }
    });
    
    btnRefresh.addEventListener('click', async () => {
        await initApp();
    });
    
    btnLocate.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(userLocation);
                    map.setZoom(15);
                    
                    // Place marker at user location
                    placeMarker(new google.maps.LatLng(userLocation.lat, userLocation.lng));
                },
                (error) => {
                    alert('Tidak dapat mendapatkan lokasi Anda. Pastikan GPS aktif.');
                }
            );
        }
    });
    
    btnClearMarker.addEventListener('click', () => {
        if (marker) {
            marker.setMap(null);
            marker = null;
            coordinatesSpan.textContent = 'Klik pada peta untuk menandai lokasi';
            updateSimpanButtonState();
        }
    });
    
    // Modal events
    document.getElementById('btn-close-success').addEventListener('click', () => {
        successModal.style.display = 'none';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loadingModal || e.target === successModal) {
            loadingModal.style.display = 'none';
            successModal.style.display = 'none';
        }
    });
}

// Utility functions
function showLoading() {
    loadingModal.style.display = 'flex';
}

function hideLoading() {
    loadingModal.style.display = 'none';
}

function showSuccessModal() {
    successModal.style.display = 'flex';
    
    // Auto close after 3 seconds
    setTimeout(() => {
        successModal.style.display = 'none';
    }, 3000);
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// Offline detection
window.addEventListener('online', () => {
    console.log('Online');
});

window.addEventListener('offline', () => {
    alert('Anda sedang offline. Beberapa fitur mungkin tidak berfungsi.');
});
