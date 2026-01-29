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
let fullscreenBtn = null;
let userLocationMarker = null;
let watchId = null;

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
    
    try {
        // Cek data yang diperlukan
        if (!checkRequiredData()) {
            alert('Data usaha tidak ditemukan. Periksa file data.js');
            return;
        }
        
        // Inisialisasi variabel dari localStorage
        initLocalStorage();
        
        // Inisialisasi event listeners
        initEventListeners();
        
        // Inisialisasi dropdown kecamatan
        populateKecamatanDropdown();
        
        // Update progress
        updateProgress();
        
        console.log('Aplikasi siap digunakan');
        
    } catch (error) {
        console.error('Error dalam initApp:', error);
        alert('Terjadi kesalahan saat menginisialisasi aplikasi. Periksa console untuk detail.');
    }
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

// Inisialisasi peta Google Maps (dipanggil oleh callback Google Maps API)
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
        // Buat peta dengan kontrol bawaan Google Maps
        map = new google.maps.Map(document.getElementById("map"), {
            center: samosirLocation,
            zoom: 12,
            mapTypeId: 'hybrid',
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
            gestureHandling: 'greedy',
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]
        });
        
        console.log('Peta berhasil dibuat');
        
        // Inisialisasi tombol fullscreen custom
        initFullscreenButton();
        
        // Tambahkan event listener untuk klik peta
        map.addListener('click', handleMapClick);
        
        // Tambahkan listener untuk tombol ESC
        document.addEventListener('keydown', handleKeyDown);
        
        // Coba dapatkan lokasi pengguna secara otomatis (opsional)
        // tryGetUserLocation(false); // Nonaktifkan dulu, biarkan user yang memilih
        
    } catch (error) {
        console.error('Error saat membuat peta:', error);
        alert('Gagal memuat peta. Periksa koneksi internet dan API key.');
    }
}

// Handle klik pada peta
function handleMapClick(event) {
    console.log('Peta diklik di:', event.latLng.lat(), event.latLng.lng());
    
    if (!selectedUsaha) {
        alert('Pilih usaha terlebih dahulu!');
        return;
    }
    setMarker(event.latLng);
    updateCoordinates(event.latLng);
}

// Handle tombol keyboard
function handleKeyDown(e) {
    if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen();
    }
}

// Inisialisasi tombol fullscreen custom
function initFullscreenButton() {
    fullscreenBtn = document.getElementById('btnFullscreenMap');
    if (!fullscreenBtn) {
        console.error('Tombol fullscreen tidak ditemukan');
        return;
    }
    
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Tambahkan event listener untuk perubahan fullscreen
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
}

// Handle perubahan state fullscreen
function handleFullscreenChange() {
    const isFullscreenNow = !!(document.fullscreenElement || 
                              document.webkitFullscreenElement || 
                              document.mozFullScreenElement || 
                              document.msFullscreenElement);
    
    if (isFullscreenNow !== isFullscreen) {
        isFullscreen = isFullscreenNow;
        updateFullscreenButton();
        toggleFullscreenMode(isFullscreenNow);
    }
}

// Update tampilan tombol fullscreen
function updateFullscreenButton() {
    if (!fullscreenBtn) return;
    
    if (isFullscreen) {
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> Kecilkan Peta';
        fullscreenBtn.title = 'Kecilkan Peta';
    } else {
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Perbesar Peta';
        fullscreenBtn.title = 'Perbesar Peta';
    }
}

// Toggle fullscreen mode
function toggleFullscreen() {
    const mapContainer = document.querySelector('.map-container');
    
    if (!isFullscreen) {
        // Masuk ke mode fullscreen
        if (mapContainer.requestFullscreen) {
            mapContainer.requestFullscreen();
        } else if (mapContainer.webkitRequestFullscreen) {
            mapContainer.webkitRequestFullscreen();
        } else if (mapContainer.mozRequestFullScreen) {
            mapContainer.mozRequestFullScreen();
        } else if (mapContainer.msRequestFullscreen) {
            mapContainer.msRequestFullscreen();
        } else {
            // Fallback ke CSS fullscreen jika browser tidak support
            enterFullscreen();
        }
    } else {
        // Keluar dari mode fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else {
            exitFullscreen();
        }
    }
}

// Toggle fullscreen mode (CSS-based)
function toggleFullscreenMode(enable) {
    const contentWrapper = document.getElementById('contentWrapper');
    const formContainer = document.getElementById('formContainer');
    const notification = document.getElementById('fullscreenNotification');
    
    if (enable) {
        // Masuk mode fullscreen
        document.body.classList.add('fullscreen-mode');
        contentWrapper.classList.add('fullscreen');
        formContainer.style.display = 'none';
        
        // Tampilkan notifikasi
        if (notification) {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        console.log('Mode fullscreen diaktifkan');
    } else {
        // Keluar mode fullscreen
        document.body.classList.remove('fullscreen-mode');
        contentWrapper.classList.remove('fullscreen');
        formContainer.style.display = 'flex';
        
        // Sembunyikan notifikasi
        if (notification) {
            notification.classList.remove('show');
        }
        
        console.log('Mode fullscreen dinonaktifkan');
    }
    
    // Update state
    isFullscreen = enable;
    updateFullscreenButton();
    
    // Resize map setelah transisi
    setTimeout(() => {
        if (map) {
            google.maps.event.trigger(map, 'resize');
            if (selectedLocation) {
                map.panTo(selectedLocation);
            }
        }
    }, 300);
}

// Fungsi untuk masuk ke fullscreen (CSS-based fallback)
function enterFullscreen() {
    console.log('Masuk mode fullscreen (fallback)');
    toggleFullscreenMode(true);
}

// Fungsi untuk keluar dari fullscreen (CSS-based fallback)
function exitFullscreen() {
    console.log('Keluar mode fullscreen (fallback)');
    toggleFullscreenMode(false);
}

// ============================================
// FUNGSI LOKASI PENGGUNA (Seperti Google Maps)
// ============================================

// Fungsi untuk mendapatkan lokasi pengguna
function getUserLocation(useForMarker = true) {
    console.log('Mendapatkan lokasi pengguna...');
    
    if (!navigator.geolocation) {
        alert('Browser tidak mendukung geolocation');
        return;
    }
    
    // Tampilkan loading jika perlu
    showLoading(true, 'Mendapatkan lokasi Anda...');
    
    // Opsi untuk geolocation
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            console.log('Lokasi pengguna ditemukan:', userLocation);
            
            // Hentikan loading
            showLoading(false);
            
            // Pindahkan peta ke lokasi pengguna dengan zoom yang sesuai
            if (map) {
                map.setCenter(userLocation);
                map.setZoom(16); // Zoom yang cukup dekat seperti Google Maps
                
                // Tambahkan atau update marker lokasi pengguna
                updateUserLocationMarker(userLocation);
                
                // Jika useForMarker true dan sudah ada usaha yang dipilih, gunakan lokasi ini sebagai marker
                if (useForMarker && selectedUsaha) {
                    setMarker(userLocation);
                    updateCoordinates(userLocation);
                    
                    // Tampilkan pesan sukses
                    showMarkerInfo(userLocation, 'Lokasi Anda telah digunakan sebagai koordinat usaha');
                } else if (!selectedUsaha) {
                    // Jika belum ada usaha yang dipilih, tampilkan pesan
                    showMarkerInfo(userLocation, 'Lokasi Anda ditemukan. Pilih usaha terlebih dahulu untuk menggunakan lokasi ini.');
                }
            }
        },
        (error) => {
            console.error('Error mendapatkan lokasi:', error);
            showLoading(false);
            
            let errorMessage = 'Tidak dapat mengakses lokasi. ';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage += 'Izin lokasi ditolak. Silakan aktifkan izin lokasi di pengaturan browser.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage += 'Informasi lokasi tidak tersedia.';
                    break;
                case error.TIMEOUT:
                    errorMessage += 'Permintaan lokasi timeout.';
                    break;
                default:
                    errorMessage += 'Terjadi kesalahan yang tidak diketahui.';
                    break;
            }
            
            alert(errorMessage);
        },
        options
    );
}

// Update atau buat marker lokasi pengguna
function updateUserLocationMarker(location) {
    // Hapus marker lama jika ada
    if (userLocationMarker) {
        userLocationMarker.setMap(null);
    }
    
    // Buat marker baru untuk lokasi pengguna
    userLocationMarker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Lokasi Anda",
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4285F4",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
        },
        zIndex: 999
    });
    
    // Tambahkan lingkaran akurasi (opsional)
    const accuracyCircle = new google.maps.Circle({
        map: map,
        center: location,
        radius: 50, // Radius dalam meter (contoh: 50m)
        fillColor: '#4285F4',
        fillOpacity: 0.2,
        strokeColor: '#4285F4',
        strokeOpacity: 0.5,
        strokeWeight: 1
    });
    
    // Set timeout untuk menghapus circle setelah beberapa detik
    setTimeout(() => {
        accuracyCircle.setMap(null);
    }, 5000);
    
    return userLocationMarker;
}

// Coba dapatkan lokasi pengguna (untuk inisialisasi)
function tryGetUserLocation(useForMarker = false) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // Update marker lokasi pengguna
                updateUserLocationMarker(userLocation);
                
                // Jika useForMarker true, gunakan lokasi ini
                if (useForMarker && selectedUsaha) {
                    setMarker(userLocation);
                    updateCoordinates(userLocation);
                }
            },
            (error) => {
                console.log('Lokasi pengguna tidak tersedia:', error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 60000
            }
        );
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
            animation: google.maps.Animation.DROP,
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                scaledSize: new google.maps.Size(40, 40)
            }
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
    showMarkerInfo(location, 'Lokasi usaha dipilih');
}

function updateCoordinates(latlng) {
    selectedLocation = latlng;
    const lat = latlng.lat();
    const lng = latlng.lng();
    
    console.log('Koordinat diperbarui:', lat, lng);
    
    // Update display di form
    const latDisplay = document.getElementById('latDisplay');
    const lngDisplay = document.getElementById('lngDisplay');
    
    if (latDisplay) latDisplay.textContent = lat.toFixed(6);
    if (lngDisplay) lngDisplay.textContent = lng.toFixed(6);
    
    // Update info marker
    const infoLat = document.getElementById('infoLat');
    const infoLng = document.getElementById('infoLng');
    
    if (infoLat) infoLat.textContent = lat.toFixed(6);
    if (infoLng) infoLng.textContent = lng.toFixed(6);
    
    checkSaveButton();
}

function showMarkerInfo(location, message = 'Lokasi dipilih') {
    const markerInfo = document.getElementById('markerInfo');
    if (markerInfo) {
        // Update teks jika ada message
        const title = markerInfo.querySelector('strong');
        if (title && message) {
            title.innerHTML = `<i class="fas fa-map-pin me-1"></i> ${message}`;
        }
        
        markerInfo.style.display = 'block';
        
        // Auto hide setelah 5 detik
        setTimeout(() => {
            markerInfo.style.display = 'none';
        }, 5000);
    }
}

function showLoading(show, text = 'Memuat...') {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    
    if (loadingOverlay && loadingText) {
        if (show) {
            loadingText.textContent = text;
            loadingOverlay.classList.add('show');
        } else {
            loadingOverlay.classList.remove('show');
        }
    }
}

// ============================================
// FUNGSI DROPDOWN DAN DATA
// ============================================

function populateKecamatanDropdown() {
    const kecamatanSelect = document.getElementById('kecamatanSelect');
    
    console.log('Mengisi dropdown kecamatan...');
    
    // Kosongkan dropdown
    if (kecamatanSelect) {
        kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
        
        if (!dataUsaha || dataUsaha.length === 0) {
            console.error('Data usaha kosong');
            return;
        }
        
        const kecamatans = [...new Set(dataUsaha.map(usaha => usaha.kecamatan))].sort();
        
        console.log('Kecamatan ditemukan:', kecamatans.length, 'item');
        
        kecamatans.forEach(kecamatan => {
            const option = document.createElement('option');
            option.value = kecamatan;
            option.textContent = kecamatan;
            kecamatanSelect.appendChild(option);
        });
        
        console.log('Dropdown kecamatan diisi dengan', kecamatans.length, 'item');
    }
}

function populateDesaDropdown(kecamatan) {
    const desaSelect = document.getElementById('desaSelect');
    if (desaSelect) {
        desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
        desaSelect.disabled = false;
        
        console.log('Mengisi dropdown desa untuk kecamatan:', kecamatan);
        
        const desas = [...new Set(
            dataUsaha
                .filter(usaha => usaha.kecamatan === kecamatan)
                .map(usaha => usaha.desa)
        )].sort();
        
        console.log('Desa ditemukan untuk', kecamatan + ':', desas.length, 'item');
        
        desas.forEach(desa => {
            const option = document.createElement('option');
            option.value = desa;
            option.textContent = desa;
            desaSelect.appendChild(option);
        });
        
        console.log('Dropdown desa diisi dengan', desas.length, 'item');
    }
}

function populateUsahaDropdown(kecamatan, desa) {
    const usahaSelect = document.getElementById('usahaSelect');
    if (usahaSelect) {
        usahaSelect.innerHTML = '<option value="">Pilih Nama Usaha</option>';
        usahaSelect.disabled = false;
        
        console.log('Mengisi dropdown usaha untuk:', kecamatan, '-', desa);
        
        // Pastikan completedUsaha sudah diinisialisasi
        if (!completedUsaha) {
            console.log('completedUsaha belum ada, menginisialisasi...');
            completedUsaha = new Set();
        }
        
        // Filter usaha berdasarkan kecamatan dan desa
        const semuaUsahaDiArea = dataUsaha.filter(usaha => 
            usaha.kecamatan === kecamatan && usaha.desa === desa
        );
        
        console.log('Semua usaha di area ini:', semuaUsahaDiArea.length);
        
        // Filter usaha yang belum selesai
        const filteredUsaha = semuaUsahaDiArea.filter(usaha => {
            const key = `${usaha.kecamatan}|${usaha.desa}|${usaha.nama_usaha}`;
            const belumSelesai = !completedUsaha.has(key);
            return belumSelesai;
        }).sort((a, b) => a.nama_usaha.localeCompare(b.nama_usaha));
        
        console.log('Usaha yang belum selesai:', filteredUsaha.length);
        
        // Isi dropdown dengan opsi yang benar
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
            console.log('Semua usaha sudah selesai untuk', desa);
        }
        
        console.log('Dropdown usaha diisi dengan', filteredUsaha.length, 'item');
    }
}

function updateProgress() {
    console.log('Memperbarui progress...');
    
    try {
        const total = dataUsaha ? dataUsaha.length : 0;
        const completed = completedUsaha ? completedUsaha.size : 0;
        const remaining = total - completed;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        console.log('Progress:', completed + '/' + total, '(', percentage, '%)');
        
        // Update counter di header
        const totalUsahaElement = document.getElementById('totalUsaha');
        const selesaiCountElement = document.getElementById('selesaiCount');
        
        if (totalUsahaElement) totalUsahaElement.textContent = total;
        if (selesaiCountElement) selesaiCountElement.textContent = completed;
        
        // Update progress info
        const progressCountElement = document.getElementById('progressCount');
        const remainingCountElement = document.getElementById('remainingCount');
        
        if (progressCountElement) progressCountElement.textContent = `${completed}/${total} (${percentage}%)`;
        if (remainingCountElement) remainingCountElement.textContent = remaining;
        
    } catch (error) {
        console.error('Error dalam updateProgress:', error);
    }
}

function checkSaveButton() {
    const saveBtn = document.getElementById('saveBtn');
    if (!saveBtn) return;
    
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
    
    // Tampilkan loading
    showLoading(true, 'Menyimpan data ke Google Sheets...');
    
    const data = {
        nama_usaha: selectedUsaha.nama_usaha,
        alamat: selectedUsaha.alamat,
        kecamatan: selectedUsaha.kecamatan,
        desa: selectedUsaha.desa,
        lat: selectedLocation.lat(),
        lng: selectedLocation.lng(),
        status: selectedStatus,
        keterangan: document.getElementById('keteranganInput')?.value || '',
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
        
        // Tampilkan pesan sukses
        const successAlert = document.getElementById('successAlert');
        const saveDetails = document.getElementById('saveDetails');
        
        if (successAlert && saveDetails) {
            saveDetails.innerHTML = `
                <strong>${data.nama_usaha}</strong><br>
                ${data.kecamatan}, ${data.desa}<br>
                Status: ${data.status} | ${new Date().toLocaleTimeString('id-ID')}
            `;
            successAlert.classList.add('show');
            
            // Auto hide setelah 5 detik
            setTimeout(() => {
                successAlert.classList.remove('show');
            }, 5000);
        }
        
        // Update progress
        updateProgress();
        
        // Reset form sebagian
        resetFormPartial();
        
        // Refresh dropdown usaha
        const kecamatan = document.getElementById('kecamatanSelect')?.value;
        const desa = document.getElementById('desaSelect')?.value;
        
        console.log('Refresh dropdown usaha untuk:', kecamatan, desa);
        
        if (kecamatan && desa) {
            populateUsahaDropdown(kecamatan, desa);
        }
        
    } catch (error) {
        console.error('Error dalam saveData:', error);
        alert('Gagal menyimpan data ke Google Sheets. Data disimpan sementara di browser.');
        
        // Tetap tampilkan sukses untuk localStorage
        const successAlert = document.getElementById('successAlert');
        const saveDetails = document.getElementById('saveDetails');
        
        if (successAlert && saveDetails && data) {
            saveDetails.innerHTML = `
                <strong>${data.nama_usaha}</strong><br>
                ${data.kecamatan}, ${data.desa}<br>
                Status: ${data.status} | ${new Date().toLocaleTimeString('id-ID')}<br>
                <small><em>(Hanya disimpan di browser)</em></small>
            `;
            successAlert.classList.add('show');
            
            setTimeout(() => {
                successAlert.classList.remove('show');
            }, 5000);
        }
    } finally {
        // Sembunyikan loading
        showLoading(false);
    }
}

// ============================================
// FUNGSI RESET DAN EXPORT
// ============================================

function resetFormPartial() {
    console.log('Reset form sebagian');
    
    try {
        document.getElementById('alamatInput').value = '';
        document.getElementById('keteranganInput').value = '';
        
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        selectedStatus = "";
        
        const statusInput = document.getElementById('statusInput');
        if (statusInput) statusInput.value = "";
        
        document.getElementById('latDisplay').textContent = '-';
        document.getElementById('lngDisplay').textContent = '-';
        
        selectedUsaha = null;
        selectedLocation = null;
        
        document.getElementById('saveBtn').disabled = true;
        
        // Reset dropdown usaha TAPI jangan nonaktifkan jika sudah ada pilihan desa
        const desa = document.getElementById('desaSelect')?.value;
        const usahaSelect = document.getElementById('usahaSelect');
        
        if (usahaSelect) {
            if (!desa) {
                usahaSelect.value = '';
                usahaSelect.disabled = true;
            } else {
                usahaSelect.value = '';
            }
        }
    } catch (error) {
        console.error('Error dalam resetFormPartial:', error);
    }
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
// EVENT LISTENERS
// ============================================

function initEventListeners() {
    console.log('Menginisialisasi event listeners...');
    
    try {
        // 1. Event listener untuk dropdown kecamatan
        const kecamatanSelect = document.getElementById('kecamatanSelect');
        if (kecamatanSelect) {
            kecamatanSelect.addEventListener('change', function() {
                console.log('Kecamatan dipilih:', this.value);
                
                if (this.value) {
                    populateDesaDropdown(this.value);
                    resetFormPartial();
                } else {
                    const desaSelect = document.getElementById('desaSelect');
                    if (desaSelect) {
                        desaSelect.disabled = true;
                        desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
                    }
                    const usahaSelect = document.getElementById('usahaSelect');
                    if (usahaSelect) {
                        usahaSelect.disabled = true;
                        usahaSelect.innerHTML = '<option value="">Pilih Nama Usaha</option>';
                    }
                }
            });
        }
        
        // 2. Event listener untuk dropdown desa
        const desaSelect = document.getElementById('desaSelect');
        if (desaSelect) {
            desaSelect.addEventListener('change', function() {
                console.log('Desa dipilih:', this.value);
                
                if (this.value) {
                    const kecamatan = document.getElementById('kecamatanSelect')?.value;
                    if (kecamatan) {
                        console.log('Memuat usaha untuk:', kecamatan, this.value);
                        populateUsahaDropdown(kecamatan, this.value);
                        resetFormPartial();
                    }
                } else {
                    const usahaSelect = document.getElementById('usahaSelect');
                    if (usahaSelect) {
                        usahaSelect.disabled = true;
                        usahaSelect.innerHTML = '<option value="">Pilih Nama Usaha</option>';
                    }
                }
            });
        }
        
        // 3. Event listener untuk dropdown usaha
        const usahaSelect = document.getElementById('usahaSelect');
        if (usahaSelect) {
            usahaSelect.addEventListener('change', function() {
                console.log('====== DROPDOWN USAHA CHANGE EVENT ======');
                console.log('Nilai yang dipilih:', this.value);
                
                if (this.value && this.value !== "") {
                    const kecamatan = document.getElementById('kecamatanSelect')?.value;
                    const desa = document.getElementById('desaSelect')?.value;
                    const namaUsaha = this.value;
                    
                    console.log('Mencari data usaha:', { kecamatan, desa, namaUsaha });
                    
                    // Cari data usaha
                    selectedUsaha = dataUsaha.find(usaha => 
                        usaha.kecamatan === kecamatan && 
                        usaha.desa === desa && 
                        usaha.nama_usaha === namaUsaha
                    );
                    
                    if (selectedUsaha) {
                        console.log('Data usaha ditemukan:', selectedUsaha);
                        document.getElementById('alamatInput').value = selectedUsaha.alamat || '';
                    } else {
                        console.error('Usaha tidak ditemukan dalam dataUsaha:', namaUsaha);
                        alert('Data usaha tidak ditemukan! Silakan pilih ulang.');
                        this.value = ""; // Reset dropdown
                        return;
                    }
                } else {
                    console.log('Tidak ada usaha yang dipilih atau nilai kosong');
                    selectedUsaha = null;
                    document.getElementById('alamatInput').value = '';
                }
                
                checkSaveButton();
            });
        }
        
        // 4. Status buttons
        document.querySelectorAll('.status-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const status = this.dataset.status;
                console.log('Status dipilih:', status);
                
                document.querySelectorAll('.status-btn').forEach(b => {
                    b.classList.remove('active');
                });
                
                this.classList.add('active');
                selectedStatus = status;
                
                const statusInput = document.getElementById('statusInput');
                if (statusInput) statusInput.value = selectedStatus;
                
                checkSaveButton();
            });
        });
        
        // 5. Save button
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', saveData);
        }
        
        // 6. Reset button
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetForm);
        }
        
        // 7. Export button
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', exportData);
        }
        
        // 8. Tombol "Lokasi Saya" - DIPERBAIKI SEPERTI GOOGLE MAPS
        const btnMyLocation = document.getElementById('btnMyLocation');
        if (btnMyLocation) {
            btnMyLocation.addEventListener('click', () => {
                console.log('Tombol "Lokasi Saya" diklik');
                getUserLocation(true); // Gunakan lokasi untuk marker
            });
        }
        
        // 9. Reset marker button
        const btnResetMarker = document.getElementById('btnResetMarker');
        if (btnResetMarker) {
            btnResetMarker.addEventListener('click', () => {
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
        }
        
        // 10. Enter key in textarea
        const keteranganInput = document.getElementById('keteranganInput');
        if (keteranganInput) {
            keteranganInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const saveBtn = document.getElementById('saveBtn');
                    if (saveBtn && !saveBtn.disabled) {
                        saveData();
                    }
                }
            });
        }
        
        console.log('Event listeners berhasil diinisialisasi');
        
    } catch (error) {
        console.error('Error dalam initEventListeners:', error);
    }
}

// ============================================
// EKSPOS FUNGSI KE WINDOW
// ============================================

window.initApp = initApp;
window.initMap = initMap;
window.enterFullscreen = enterFullscreen;
window.exitFullscreen = exitFullscreen;

console.log('app.js berhasil dimuat');
