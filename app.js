// ============================================
// GEOTAGGING APP - KABUPATEN SAMOSIR
// ============================================

// Deklarasi variabel global
let map = null;
let marker = null;
let selectedLocation = null;
let selectedUsaha = null;
let selectedStatus = "";
let completedUsaha = null;
let savedData = null;
let isFullscreen = false;

// Pengecekan apakah variabel dari data.js sudah tersedia
function checkRequiredData() {
    console.log('Mengecek data yang diperlukan...');
    
    if (typeof dataUsaha === 'undefined') {
        console.error('ERROR: dataUsaha tidak ditemukan. Pastikan data.js dimuat dengan benar.');
        return false;
    }
    
    console.log('Data usaha ditemukan, total:', dataUsaha.length, 'usaha');
    
    if (typeof GOOGLE_SCRIPT_URL === 'undefined') {
        console.warn('WARNING: GOOGLE_SCRIPT_URL tidak ditemukan. Data hanya akan disimpan di localStorage.');
    }
    
    return true;
}

// Inisialisasi aplikasi utama
function initApp() {
    console.log('Memulai aplikasi Geotagging Samosir...');
    
    // Cek data yang diperlukan
    if (!checkRequiredData()) {
        alert('Data usaha tidak ditemukan. Periksa file data.js');
        return;
    }
    
    // Inisialisasi variabel dari localStorage
    initLocalStorage();
    
    // Inisialisasi peta
    initMap();
    
    // Inisialisasi event listeners
    initEventListeners();
    
    // Inisialisasi dropdown kecamatan
    populateKecamatanDropdown();
    
    // Update progress
    updateProgress();
    
    console.log('Aplikasi siap digunakan');
}

// Inisialisasi data dari localStorage
function initLocalStorage() {
    const saved = localStorage.getItem('geotagDataSamosir');
    console.log('Data dari localStorage:', saved ? 'ada' : 'tidak ada');
    
    savedData = JSON.parse(saved || '[]');
    console.log('Data tersimpan:', savedData.length, 'item');
    
    completedUsaha = new Set();
    savedData.forEach(item => {
        const key = `${item.kecamatan}|${item.desa}|${item.nama_usaha}`;
        completedUsaha.add(key);
    });
    
    console.log('Usaha yang sudah selesai:', completedUsaha.size);
}

// Inisialisasi peta Google Maps
function initMap() {
    console.log('Menginisialisasi peta...');
    
    // Cek apakah Google Maps API sudah dimuat
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('Google Maps API belum dimuat');
        setTimeout(initMap, 500);
        return;
    }
    
    // Lokasi default: Samosir
    const samosirLocation = { lat: 2.5833, lng: 98.7167 };
    
    try {
        // Buat peta
        map = new google.maps.Map(document.getElementById("map"), {
            center: samosirLocation,
            zoom: 12,
            mapTypeId: 'hybrid',
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
            gestureHandling: 'greedy',
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]
        });
        
        console.log('Peta berhasil dibuat');
        
        // Tambahkan event listener untuk klik peta
        map.addListener('click', (event) => {
            console.log('Peta diklik di:', event.latLng.lat(), event.latLng.lng());
            
            if (!selectedUsaha) {
                alert('Pilih usaha terlebih dahulu!');
                return;
            }
            setMarker(event.latLng);
            updateCoordinates(event.latLng);
        });
        
        // Tambahkan listener untuk tombol ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isFullscreen) {
                exitFullscreen();
            }
        });
        
    } catch (error) {
        console.error('Error saat membuat peta:', error);
        alert('Gagal memuat peta. Periksa koneksi internet dan API key.');
    }
}

// ============================================
// FUNGSI PETA DAN MARKER
// ============================================

function setMarker(location) {
    console.log('Menempatkan marker di:', location.lat(), location.lng());
    
    if (marker) {
        marker.setPosition(location);
    } else {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true,
            title: "Lokasi usaha",
            animation: google.maps.Animation.DROP
        });
        
        // Event ketika marker didrag
        marker.addListener('dragend', () => {
            console.log('Marker dipindahkan ke:', marker.getPosition().lat(), marker.getPosition().lng());
            updateCoordinates(marker.getPosition());
        });
    }
    
    // Center map ke marker
    map.panTo(location);
    
    // Tampilkan info marker
    showMarkerInfo(location);
}

function updateCoordinates(latlng) {
    selectedLocation = latlng;
    const lat = latlng.lat();
    const lng = latlng.lng();
    
    console.log('Koordinat diperbarui:', lat, lng);
    
    document.getElementById('latDisplay').textContent = lat.toFixed(6);
    document.getElementById('lngDisplay').textContent = lng.toFixed(6);
    
    document.getElementById('infoLat').textContent = lat.toFixed(6);
    document.getElementById('infoLng').textContent = lng.toFixed(6);
    
    checkSaveButton();
}

function showMarkerInfo(location) {
    const markerInfo = document.getElementById('markerInfo');
    markerInfo.style.display = 'block';
    
    setTimeout(() => {
        markerInfo.style.display = 'none';
    }, 3000);
}

// ============================================
// FUNGSI DROPDOWN DAN DATA
// ============================================

function populateKecamatanDropdown() {
    const kecamatanSelect = document.getElementById('kecamatanSelect');
    
    console.log('Mengisi dropdown kecamatan...');
    
    // Kosongkan dropdown
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    if (!dataUsaha || dataUsaha.length === 0) {
        console.error('Data usaha kosong');
        return;
    }
    
    // Ambil kecamatan unik
    const kecamatans = [...new Set(dataUsaha.map(usaha => usaha.kecamatan))].sort();
    
    console.log('Kecamatan ditemukan:', kecamatans);
    
    kecamatans.forEach(kecamatan => {
        const option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect.appendChild(option);
    });
    
    console.log('Dropdown kecamatan diisi dengan', kecamatans.length, 'item');
}

function populateDesaDropdown(kecamatan) {
    const desaSelect = document.getElementById('desaSelect');
    desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
    desaSelect.disabled = false;
    
    console.log('Mengisi dropdown desa untuk kecamatan:', kecamatan);
    
    // Filter desa berdasarkan kecamatan
    const desas = [...new Set(
        dataUsaha
            .filter(usaha => usaha.kecamatan === kecamatan)
            .map(usaha => usaha.desa)
    )].sort();
    
    console.log('Desa ditemukan untuk', kecamatan + ':', desas);
    
    desas.forEach(desa => {
        const option = document.createElement('option');
        option.value = desa;
        option.textContent = desa;
        desaSelect.appendChild(option);
    });
    
    console.log('Dropdown desa diisi dengan', desas.length, 'item');
}

function populateUsahaDropdown(kecamatan, desa) {
    const usahaSelect = document.getElementById('usahaSelect');
    usahaSelect.innerHTML = '<option value="">Pilih Nama Usaha</option>';
    usahaSelect.disabled = false;
    
    console.log('Mengisi dropdown usaha untuk:', kecamatan, '-', desa);
    
    // Cek apakah completedUsaha sudah diinisialisasi
    if (!completedUsaha) {
        console.error('completedUsaha belum diinisialisasi');
        completedUsaha = new Set();
    }
    
    // Debug: Tampilkan semua data untuk kecamatan dan desa ini
    const allUsahaForArea = dataUsaha.filter(usaha => 
        usaha.kecamatan === kecamatan && usaha.desa === desa
    );
    
    console.log('Semua usaha di area ini:', allUsahaForArea);
    console.log('Total usaha di area ini:', allUsahaForArea.length);
    console.log('completedUsaha saat ini:', completedUsaha);
    
    // Filter usaha yang belum selesai
    const filteredUsaha = dataUsaha.filter(usaha => {
        const matchArea = usaha.kecamatan === kecamatan && usaha.desa === desa;
        if (!matchArea) return false;
        
        const key = `${usaha.kecamatan}|${usaha.desa}|${usaha.nama_usaha}`;
        const belumSelesai = !completedUsaha.has(key);
        
        if (!belumSelesai) {
            console.log('Usaha sudah selesai:', usaha.nama_usaha);
        }
        
        return belumSelesai;
    }).sort((a, b) => a.nama_usaha.localeCompare(b.nama_usaha));
    
    console.log('Usaha yang belum selesai:', filteredUsaha);
    console.log('Jumlah usaha yang belum selesai:', filteredUsaha.length);
    
    // Isi dropdown
    filteredUsaha.forEach(usaha => {
        const option = document.createElement('option');
        option.value = usaha.nama_usaha;
        option.textContent = usaha.nama_usaha;
        option.dataset.alamat = usaha.alamat;
        usahaSelect.appendChild(option);
    });
    
    if (filteredUsaha.length === 0) {
        const option = document.createElement('option');
        option.value = "";
        option.textContent = "Semua usaha sudah selesai";
        usahaSelect.appendChild(option);
        usahaSelect.disabled = true;
        console.log('Semua usaha sudah selesai untuk', desa);
    }
    
    console.log('Dropdown usaha diisi dengan', filteredUsaha.length, 'item');
}

function updateProgress() {
    const total = dataUsaha.length;
    const completed = completedUsaha ? completedUsaha.size : 0;
    const remaining = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    console.log('Progress:', completed + '/' + total, '(', percentage, '%)');
    
    // Update counter
    document.getElementById('totalUsaha').textContent = total;
    document.getElementById('selesaiCount').textContent = completed;
    document.getElementById('progressCount').textContent = `${completed}/${total}`;
    document.getElementById('remainingCount').textContent = remaining;
    
    // Update progress info
    const progressInfo = document.getElementById('progressInfo');
    progressInfo.innerHTML = `
        <i class="fas fa-chart-line me-2"></i> 
        <strong>Progress: ${completed}/${total} (${percentage}%)</strong>
        <div class="mt-1">
            <small><span class="text-primary">${remaining}</span> data belum digeotag</small>
        </div>
    `;
}

function checkSaveButton() {
    const saveBtn = document.getElementById('saveBtn');
    const isReady = selectedUsaha && selectedLocation && selectedStatus;
    
    console.log('Cek tombol simpan:', {
        selectedUsaha: !!selectedUsaha,
        selectedLocation: !!selectedLocation,
        selectedStatus: !!selectedStatus,
        isReady: isReady
    });
    
    saveBtn.disabled = !isReady;
}

// ============================================
// FUNGSI SIMPAN DATA
// ============================================

async function saveData() {
    if (!selectedUsaha || !selectedLocation || !selectedStatus) {
        alert('Harap lengkapi semua data terlebih dahulu!');
        return;
    }
    
    console.log('Menyimpan data untuk:', selectedUsaha.nama_usaha);
    
    showLoading(true, 'Menyimpan data ke Google Sheets...');
    
    const data = {
        nama_usaha: selectedUsaha.nama_usaha,
        alamat: selectedUsaha.alamat,
        kecamatan: selectedUsaha.kecamatan,
        desa: selectedUsaha.desa,
        lat: selectedLocation.lat(),
        lng: selectedLocation.lng(),
        status: selectedStatus,
        keterangan: document.getElementById('keteranganInput').value || '',
        timestamp: new Date().toISOString()
    };
    
    console.log('Data yang akan disimpan:', data);
    
    try {
        // Simpan ke localStorage
        if (!savedData) savedData = [];
        savedData.push(data);
        localStorage.setItem('geotagDataSamosir', JSON.stringify(savedData));
        
        // Tambah ke completedUsaha
        const key = `${data.kecamatan}|${data.desa}|${data.nama_usaha}`;
        completedUsaha.add(key);
        
        console.log('Data disimpan ke localStorage, key:', key);
        
        // Coba kirim ke Google Sheets jika URL tersedia
        if (GOOGLE_SCRIPT_URL) {
            try {
                console.log('Mengirim data ke Google Sheets...');
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                console.log('Data berhasil dikirim ke Google Sheets');
            } catch (fetchError) {
                console.warn('Gagal mengirim ke Google Sheets:', fetchError);
            }
        }
        
        showSuccessMessage(data);
        updateProgress();
        resetFormPartial();
        
        // Refresh dropdown usaha
        const kecamatan = document.getElementById('kecamatanSelect').value;
        const desa = document.getElementById('desaSelect').value;
        
        console.log('Refresh dropdown usaha untuk:', kecamatan, desa);
        
        if (kecamatan && desa) {
            populateUsahaDropdown(kecamatan, desa);
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal menyimpan data ke Google Sheets. Data disimpan sementara di browser.');
        showSuccessMessage(data);
    } finally {
        showLoading(false);
    }
}

function showSuccessMessage(data) {
    const successAlert = document.getElementById('successAlert');
    const saveDetails = document.getElementById('saveDetails');
    
    saveDetails.innerHTML = `
        <strong>${data.nama_usaha}</strong><br>
        ${data.kecamatan}, ${data.desa}<br>
        Status: ${data.status} | ${new Date().toLocaleTimeString('id-ID')}
    `;
    
    successAlert.classList.add('show');
    
    setTimeout(() => {
        successAlert.classList.remove('show');
    }, 5000);
}

function showLoading(show, text = 'Menyimpan data...') {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    
    if (show) {
        loadingText.textContent = text;
        loadingOverlay.classList.add('show');
    } else {
        loadingOverlay.classList.remove('show');
    }
}

// ============================================
// FUNGSI RESET DAN EXPORT
// ============================================

function resetFormPartial() {
    console.log('Reset form sebagian');
    
    document.getElementById('alamatInput').value = '';
    document.getElementById('keteranganInput').value = '';
    
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    selectedStatus = "";
    document.getElementById('statusInput').value = "";
    
    document.getElementById('latDisplay').textContent = '-';
    document.getElementById('lngDisplay').textContent = '-';
    
    selectedUsaha = null;
    selectedLocation = null;
    
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('usahaSelect').value = '';
    document.getElementById('usahaSelect').disabled = true;
}

function resetForm() {
    if (confirm('Reset form ke kondisi awal? Data yang sudah diisi akan hilang.')) {
        console.log('Reset form lengkap');
        
        document.getElementById('kecamatanSelect').value = '';
        document.getElementById('desaSelect').value = '';
        document.getElementById('desaSelect').disabled = true;
        document.getElementById('usahaSelect').value = '';
        document.getElementById('usahaSelect').disabled = true;
        
        resetFormPartial();
        
        if (marker) {
            marker.setMap(null);
            marker = null;
        }
        
        if (map) {
            const defaultLocation = { lat: 2.5833, lng: 98.7167 };
            map.panTo(defaultLocation);
            map.setZoom(12);
        }
        
        document.getElementById('successAlert').classList.remove('show');
        
        // Refresh dropdown kecamatan
        populateKecamatanDropdown();
    }
}

function exportData() {
    if (!savedData || savedData.length === 0) {
        alert('Belum ada data yang disimpan');
        return;
    }
    
    console.log('Export data, total:', savedData.length);
    
    const headers = ['Nama Usaha', 'Alamat', 'Kecamatan', 'Desa', 'Latitude', 'Longitude', 'Status', 'Keterangan', 'Timestamp'];
    const csvRows = [headers.join(',')];
    
    savedData.forEach(item => {
        const row = [
            `"${item.nama_usaha}"`,
            `"${item.alamat}"`,
            `"${item.kecamatan}"`,
            `"${item.desa}"`,
            item.lat,
            item.lng,
            `"${item.status}"`,
            `"${item.keterangan}"`,
            `"${new Date(item.timestamp).toLocaleString('id-ID')}"`
        ];
        csvRows.push(row.join(','));
    });
    
    const csvString = csvRows.join('\n');
    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = `geotag_samosir_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    
    URL.revokeObjectURL(url);
}

// ============================================
// FUNGSI FULLSCREEN
// ============================================

function enterFullscreen() {
    console.log('Masuk mode fullscreen');
    
    isFullscreen = true;
    
    document.body.classList.add('fullscreen-mode');
    document.getElementById('contentWrapper').classList.add('fullscreen');
    
    const notification = document.getElementById('fullscreenNotification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    
    document.getElementById('btnFullscreen').style.display = 'none';
    document.getElementById('btnExitFullscreen').style.display = 'flex';
    
    // Resize map
    setTimeout(() => {
        if (map) {
            google.maps.event.trigger(map, 'resize');
            if (selectedLocation) {
                map.panTo(selectedLocation);
            }
        }
    }, 300);
}

function exitFullscreen() {
    console.log('Keluar mode fullscreen');
    
    isFullscreen = false;
    
    document.body.classList.remove('fullscreen-mode');
    document.getElementById('contentWrapper').classList.remove('fullscreen');
    document.getElementById('fullscreenNotification').classList.remove('show');
    
    document.getElementById('btnFullscreen').style.display = 'flex';
    document.getElementById('btnExitFullscreen').style.display = 'none';
    
    // Resize map
    setTimeout(() => {
        if (map) {
            google.maps.event.trigger(map, 'resize');
            if (selectedLocation) {
                map.panTo(selectedLocation);
            }
        }
    }, 300);
}

// ============================================
// EVENT LISTENERS
// ============================================

function initEventListeners() {
    console.log('Menginisialisasi event listeners...');
    
    // Dropdown kecamatan
    document.getElementById('kecamatanSelect').addEventListener('change', function() {
        console.log('Kecamatan dipilih:', this.value);
        
        if (this.value) {
            populateDesaDropdown(this.value);
            resetFormPartial();
        } else {
            document.getElementById('desaSelect').disabled = true;
            document.getElementById('usahaSelect').disabled = true;
        }
    });
    
    // Dropdown desa
    document.getElementById('desaSelect').addEventListener('change', function() {
        console.log('Desa dipilih:', this.value);
        
        if (this.value) {
            const kecamatan = document.getElementById('kecamatanSelect').value;
            console.log('Memuat usaha untuk:', kecamatan, this.value);
            populateUsahaDropdown(kecamatan, this.value);
            resetFormPartial();
        } else {
            document.getElementById('usahaSelect').disabled = true;
        }
    });
    
    // Dropdown usaha
    document.getElementById('usahaSelect').addEventListener('change', function() {
        console.log('Usaha dipilih:', this.value);
        
        if (this.value) {
            const kecamatan = document.getElementById('kecamatanSelect').value;
            const desa = document.getElementById('desaSelect').value;
            const namaUsaha = this.value;
            const selectedOption = this.options[this.selectedIndex];
            
            console.log('Mencari data usaha:', { kecamatan, desa, namaUsaha });
            
            // Cari data usaha
            selectedUsaha = dataUsaha.find(usaha => 
                usaha.kecamatan === kecamatan && 
                usaha.desa === desa && 
                usaha.nama_usaha === namaUsaha
            );
            
            if (selectedUsaha) {
                console.log('Usaha ditemukan:', selectedUsaha);
                document.getElementById('alamatInput').value = selectedUsaha.alamat;
            } else {
                console.error('Usaha tidak ditemukan dalam dataUsaha');
                alert('Data usaha tidak ditemukan!');
            }
        } else {
            console.log('Usaha tidak dipilih');
            selectedUsaha = null;
            document.getElementById('alamatInput').value = '';
        }
        checkSaveButton();
    });
    
    // Status buttons
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const status = this.dataset.status;
            console.log('Status dipilih:', status);
            
            document.querySelectorAll('.status-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            this.classList.add('active');
            selectedStatus = status;
            document.getElementById('statusInput').value = selectedStatus;
            
            checkSaveButton();
        });
    });
    
    // Save button
    document.getElementById('saveBtn').addEventListener('click', saveData);
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetForm);
    
    // Export button
    document.getElementById('exportBtn').addEventListener('click', exportData);
    
    // My location button
    document.getElementById('btnMyLocation').addEventListener('click', () => {
        console.log('Tombol lokasi saya diklik');
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    
                    console.log('Lokasi pengguna:', userLocation);
                    
                    if (selectedUsaha) {
                        setMarker(userLocation);
                        updateCoordinates(userLocation);
                        map.setZoom(16);
                    } else {
                        alert('Pilih usaha terlebih dahulu!');
                    }
                },
                (error) => {
                    console.error('Error geolocation:', error);
                    alert('Tidak dapat mengakses lokasi. Pastikan izin lokasi diaktifkan.');
                }
            );
        } else {
            alert('Browser tidak mendukung geolocation');
        }
    });
    
    // Reset marker button
    document.getElementById('btnResetMarker').addEventListener('click', () => {
        console.log('Tombol reset marker diklik');
        
        if (marker) {
            marker.setMap(null);
            marker = null;
            selectedLocation = null;
            document.getElementById('latDisplay').textContent = '-';
            document.getElementById('lngDisplay').textContent = '-';
            checkSaveButton();
        }
    });
    
    // Fullscreen buttons
    document.getElementById('btnFullscreen').addEventListener('click', enterFullscreen);
    document.getElementById('btnExitFullscreen').addEventListener('click', exitFullscreen);
    
    // Enter key in textarea
    document.getElementById('keteranganInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!document.getElementById('saveBtn').disabled) {
                saveData();
            }
        }
    });
    
    console.log('Event listeners berhasil diinisialisasi');
}

// ============================================
// EKSPOS FUNGSI KE WINDOW
// ============================================

window.initApp = initApp;
window.enterFullscreen = enterFullscreen;
window.exitFullscreen = exitFullscreen;

console.log('app.js berhasil dimuat');
