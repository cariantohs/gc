// ============================================
// GEOTAGGING APP - KABUPATEN SAMOSIR
// ============================================

// Deklarasi variabel global dengan pengecekan
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
    if (typeof dataUsaha === 'undefined') {
        console.error('ERROR: dataUsaha tidak ditemukan. Pastikan data.js dimuat dengan benar.');
        return false;
    }
    
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
    
    // Update progress
    updateProgress();
    
    console.log('Aplikasi siap digunakan');
}

// Inisialisasi data dari localStorage
function initLocalStorage() {
    savedData = JSON.parse(localStorage.getItem('geotagDataSamosir') || '[]');
    completedUsaha = new Set(savedData.map(item => `${item.kecamatan}|${item.desa}|${item.nama_usaha}`));
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
            fullscreenControl: false, // Nonaktifkan kontrol fullscreen bawaan
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
            if (!selectedUsaha) {
                alert('Pilih usaha terlebih dahulu!');
                return;
            }
            setMarker(event.latLng);
            updateCoordinates(event.latLng);
        });
        
        // Inisialisasi dropdown
        populateKecamatanDropdown();
        
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
    
    // Kosongkan dropdown
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    if (!dataUsaha || dataUsaha.length === 0) {
        console.error('Data usaha kosong');
        return;
    }
    
    const kecamatans = [...new Set(dataUsaha.map(usaha => usaha.kecamatan))].sort();
    
    kecamatans.forEach(kecamatan => {
        const option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect.appendChild(option);
    });
}

function populateDesaDropdown(kecamatan) {
    const desaSelect = document.getElementById('desaSelect');
    desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
    desaSelect.disabled = false;
    
    const desas = [...new Set(
        dataUsaha
            .filter(usaha => usaha.kecamatan === kecamatan)
            .map(usaha => usaha.desa)
    )].sort();
    
    desas.forEach(desa => {
        const option = document.createElement('option');
        option.value = desa;
        option.textContent = desa;
        desaSelect.appendChild(option);
    });
}

function populateUsahaDropdown(kecamatan, desa) {
    const usahaSelect = document.getElementById('usahaSelect');
    usahaSelect.innerHTML = '<option value="">Pilih Nama Usaha</option>';
    usahaSelect.disabled = false;
    
    // Filter usaha yang belum selesai
    const filteredUsaha = dataUsaha.filter(usaha => 
        usaha.kecamatan === kecamatan && 
        usaha.desa === desa &&
        !completedUsaha.has(`${usaha.kecamatan}|${usaha.desa}|${usaha.nama_usaha}`)
    ).sort((a, b) => a.nama_usaha.localeCompare(b.nama_usaha));
    
    filteredUsaha.forEach(usaha => {
        const option = document.createElement('option');
        option.value = usaha.nama_usaha;
        option.textContent = usaha.nama_usaha;
        option.dataset.alamat = usaha.alamat;
        usahaSelect.appendChild(option);
    });
    
    if (filteredUsaha.length === 0) {
        usahaSelect.innerHTML = '<option value="">Semua usaha sudah selesai</option>';
        usahaSelect.disabled = true;
    }
}

function updateProgress() {
    const total = dataUsaha.length;
    const completed = completedUsaha.size;
    const remaining = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
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
    saveBtn.disabled = !(selectedUsaha && selectedLocation && selectedStatus);
}

// ============================================
// FUNGSI SIMPAN DATA
// ============================================

async function saveData() {
    if (!selectedUsaha || !selectedLocation || !selectedStatus) return;
    
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
    
    try {
        // Simpan ke localStorage
        savedData.push(data);
        localStorage.setItem('geotagDataSamosir', JSON.stringify(savedData));
        completedUsaha.add(`${data.kecamatan}|${data.desa}|${data.nama_usaha}`);
        
        // Coba kirim ke Google Sheets jika URL tersedia
        if (GOOGLE_SCRIPT_URL) {
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                console.log('Data dikirim ke Google Sheets');
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
    }
}

function exportData() {
    if (savedData.length === 0) {
        alert('Belum ada data yang disimpan');
        return;
    }
    
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
    // Dropdown kecamatan
    document.getElementById('kecamatanSelect').addEventListener('change', function() {
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
        if (this.value) {
            const kecamatan = document.getElementById('kecamatanSelect').value;
            populateUsahaDropdown(kecamatan, this.value);
            resetFormPartial();
        } else {
            document.getElementById('usahaSelect').disabled = true;
        }
    });
    
    // Dropdown usaha
    document.getElementById('usahaSelect').addEventListener('change', function() {
        if (this.value) {
            const kecamatan = document.getElementById('kecamatanSelect').value;
            const desa = document.getElementById('desaSelect').value;
            const namaUsaha = this.value;
            const selectedOption = this.options[this.selectedIndex];
            
            selectedUsaha = dataUsaha.find(usaha => 
                usaha.kecamatan === kecamatan && 
                usaha.desa === desa && 
                usaha.nama_usaha === namaUsaha
            );
            
            if (selectedUsaha) {
                document.getElementById('alamatInput').value = selectedUsaha.alamat;
            }
        } else {
            selectedUsaha = null;
            document.getElementById('alamatInput').value = '';
        }
        checkSaveButton();
    });
    
    // Status buttons
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.status-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            this.classList.add('active');
            selectedStatus = this.dataset.status;
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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    
                    if (selectedUsaha) {
                        setMarker(userLocation);
                        updateCoordinates(userLocation);
                        map.setZoom(16);
                    } else {
                        alert('Pilih usaha terlebih dahulu!');
                    }
                },
                (error) => {
                    alert('Tidak dapat mengakses lokasi. Pastikan izin lokasi diaktifkan.');
                }
            );
        } else {
            alert('Browser tidak mendukung geolocation');
        }
    });
    
    // Reset marker button
    document.getElementById('btnResetMarker').addEventListener('click', () => {
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
}

// ============================================
// EKSPOS FUNGSI KE WINDOW (untuk debugging)
// ============================================

window.initApp = initApp;
window.enterFullscreen = enterFullscreen;
window.exitFullscreen = exitFullscreen;

console.log('app.js loaded successfully');
