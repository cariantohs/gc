// Variabel global
let map;
let marker;
let selectedLocation = null;
let selectedUsaha = null;
let selectedStatus = "";
let completedUsaha = new Set();
let savedData = [];

// Pastikan dataUsaha tersedia
if (typeof dataUsaha === 'undefined') {
    console.error('dataUsaha tidak ditemukan. Pastikan data.js dimuat dengan benar.');
    // Fallback ke array kosong
    var dataUsaha = [];
}

// Pastikan GOOGLE_SCRIPT_URL tersedia
if (typeof GOOGLE_SCRIPT_URL === 'undefined') {
    console.warn('GOOGLE_SCRIPT_URL tidak ditemukan. Data hanya akan disimpan di localStorage.');
    var GOOGLE_SCRIPT_URL = null;
}

// Inisialisasi peta Google Maps
function initMap() {
    console.log('initMap dipanggil');
    
    // Cek apakah Google Maps API sudah dimuat
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('Google Maps API belum dimuat');
        setTimeout(initMap, 100);
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
            fullscreenControl: true,
            zoomControl: true,
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
        
        // Load data yang sudah disimpan
        loadSavedData();
        
        // Inisialisasi dropdown
        populateKecamatanDropdown();
        updateProgress();
        
        // Inisialisasi event listeners
        initEventListeners();
        
    } catch (error) {
        console.error('Error saat membuat peta:', error);
        alert('Gagal memuat peta. Periksa koneksi internet dan API key.');
    }
}

// Set marker di peta
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

// Update koordinat display
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

// Tampilkan info marker
function showMarkerInfo(location) {
    const markerInfo = document.getElementById('markerInfo');
    markerInfo.style.display = 'block';
    
    // Auto hide setelah 3 detik
    setTimeout(() => {
        markerInfo.style.display = 'none';
    }, 3000);
}

// Load data yang sudah disimpan
function loadSavedData() {
    savedData = JSON.parse(localStorage.getItem('geotagDataSamosir') || '[]');
    completedUsaha = new Set(savedData.map(item => `${item.kecamatan}|${item.desa}|${item.nama_usaha}`));
}

// Simpan data ke localStorage (sementara)
function saveToLocalStorage(data) {
    savedData.push(data);
    localStorage.setItem('geotagDataSamosir', JSON.stringify(savedData));
    completedUsaha.add(`${data.kecamatan}|${data.desa}|${data.nama_usaha}`);
}

// Populate dropdown kecamatan
function populateKecamatanDropdown() {
    const kecamatanSelect = document.getElementById('kecamatanSelect');
    
    // Kosongkan dropdown
    kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    if (!dataUsaha || dataUsaha.length === 0) {
        console.error('Data usaha kosong');
        return;
    }
    
    const kecamatans = new Set(dataUsaha.map(usaha => usaha.kecamatan));
    
    // Urutkan berdasarkan abjad
    const sortedKecamatans = Array.from(kecamatans).sort();
    
    sortedKecamatans.forEach(kecamatan => {
        const option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect.appendChild(option);
    });
}

// Populate dropdown desa
function populateDesaDropdown(kecamatan) {
    const desaSelect = document.getElementById('desaSelect');
    desaSelect.innerHTML = '<option value="">Pilih Desa</option>';
    desaSelect.disabled = false;
    
    const desas = new Set(
        dataUsaha
            .filter(usaha => usaha.kecamatan === kecamatan)
            .map(usaha => usaha.desa)
    );
    
    // Urutkan berdasarkan abjad
    const sortedDesas = Array.from(desas).sort();
    
    sortedDesas.forEach(desa => {
        const option = document.createElement('option');
        option.value = desa;
        option.textContent = desa;
        desaSelect.appendChild(option);
    });
}

// Populate dropdown usaha
function populateUsahaDropdown(kecamatan, desa) {
    const usahaSelect = document.getElementById('usahaSelect');
    usahaSelect.innerHTML = '<option value="">Pilih Nama Usaha</option>';
    usahaSelect.disabled = false;
    
    // Filter usaha yang belum selesai
    const filteredUsaha = dataUsaha.filter(usaha => 
        usaha.kecamatan === kecamatan && 
        usaha.desa === desa &&
        !completedUsaha.has(`${usaha.kecamatan}|${usaha.desa}|${usaha.nama_usaha}`)
    );
    
    // Urutkan berdasarkan nama
    const sortedUsaha = filteredUsaha.sort((a, b) => 
        a.nama_usaha.localeCompare(b.nama_usaha)
    );
    
    sortedUsaha.forEach(usaha => {
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

// Update progress
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

// Check save button
function checkSaveButton() {
    const saveBtn = document.getElementById('saveBtn');
    
    if (selectedUsaha && selectedLocation && selectedStatus) {
        saveBtn.disabled = false;
    } else {
        saveBtn.disabled = true;
    }
}

// Simpan data ke Google Sheets
async function saveData() {
    if (!selectedUsaha || !selectedLocation || !selectedStatus) return;
    
    // Tampilkan loading
    showLoading(true, 'Menyimpan data ke Google Sheets...');
    
    // Data yang akan dikirim
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
        // Simpan ke localStorage terlebih dahulu
        saveToLocalStorage(data);
        
        // Coba kirim ke Google Sheets jika URL tersedia
        if (GOOGLE_SCRIPT_URL) {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            // Karena no-cors, kita anggap selalu berhasil
            console.log('Data dikirim ke Google Sheets');
        } else {
            console.log('GOOGLE_SCRIPT_URL tidak tersedia, data hanya disimpan di localStorage');
        }
        
        showSuccessMessage(data);
        
        // Update progress
        updateProgress();
        
        // Reset form sebagian
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
        showSuccessMessage(data); // Tetap tampilkan sukses untuk localStorage
    } finally {
        showLoading(false);
    }
}

// Tampilkan pesan sukses
function showSuccessMessage(data) {
    const successAlert = document.getElementById('successAlert');
    const saveDetails = document.getElementById('saveDetails');
    
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

// Tampilkan/sembunyikan loading
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

// Reset form sebagian
function resetFormPartial() {
    // Reset hanya field yang perlu
    document.getElementById('alamatInput').value = '';
    document.getElementById('keteranganInput').value = '';
    
    // Reset status
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    selectedStatus = "";
    document.getElementById('statusInput').value = "";
    
    // Reset koordinat
    document.getElementById('latDisplay').textContent = '-';
    document.getElementById('lngDisplay').textContent = '-';
    
    // Reset selected data
    selectedUsaha = null;
    selectedLocation = null;
    
    // Nonaktifkan tombol simpan
    document.getElementById('saveBtn').disabled = true;
    
    // Reset dropdown usaha
    document.getElementById('usahaSelect').value = '';
    document.getElementById('usahaSelect').disabled = true;
}

// Reset form lengkap
function resetForm() {
    if (confirm('Reset form ke kondisi awal? Data yang sudah diisi akan hilang.')) {
        // Reset semua dropdown
        document.getElementById('kecamatanSelect').value = '';
        document.getElementById('desaSelect').value = '';
        document.getElementById('desaSelect').disabled = true;
        document.getElementById('usahaSelect').value = '';
        document.getElementById('usahaSelect').disabled = true;
        
        // Reset form fields
        resetFormPartial();
        
        // Hapus marker dari peta
        if (marker) {
            marker.setMap(null);
            marker = null;
        }
        
        // Reset ke lokasi default
        if (map) {
            const defaultLocation = { lat: 2.5833, lng: 98.7167 };
            map.panTo(defaultLocation);
            map.setZoom(12);
        }
        
        // Sembunyikan alert sukses
        document.getElementById('successAlert').classList.remove('show');
    }
}

// Export data ke CSV
function exportData() {
    if (savedData.length === 0) {
        alert('Belum ada data yang disimpan');
        return;
    }
    
    // Konversi ke CSV
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

// Inisialisasi event listeners
function initEventListeners() {
    // Event listener untuk dropdown kecamatan
    document.getElementById('kecamatanSelect').addEventListener('change', function() {
        if (this.value) {
            populateDesaDropdown(this.value);
            resetFormPartial();
        } else {
            document.getElementById('desaSelect').disabled = true;
            document.getElementById('usahaSelect').disabled = true;
        }
    });
    
    // Event listener untuk dropdown desa
    document.getElementById('desaSelect').addEventListener('change', function() {
        if (this.value) {
            const kecamatan = document.getElementById('kecamatanSelect').value;
            populateUsahaDropdown(kecamatan, this.value);
            resetFormPartial();
        } else {
            document.getElementById('usahaSelect').disabled = true;
        }
    });
    
    // Event listener untuk dropdown usaha
    document.getElementById('usahaSelect').addEventListener('change', function() {
        if (this.value) {
            const kecamatan = document.getElementById('kecamatanSelect').value;
            const desa = document.getElementById('desaSelect').value;
            const namaUsaha = this.value;
            const selectedOption = this.options[this.selectedIndex];
            
            // Cari data usaha
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
    
    // Event listener untuk tombol status
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Hapus active class dari semua tombol
            document.querySelectorAll('.status-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Tambah active class ke tombol yang diklik
            this.classList.add('active');
            
            // Set status
            selectedStatus = this.dataset.status;
            document.getElementById('statusInput').value = selectedStatus;
            
            checkSaveButton();
        });
    });
    
    // Event listener untuk tombol simpan
    document.getElementById('saveBtn').addEventListener('click', saveData);
    
    // Event listener untuk tombol reset
    document.getElementById('resetBtn').addEventListener('click', resetForm);
    
    // Event listener untuk tombol export
    document.getElementById('exportBtn').addEventListener('click', exportData);
    
    // Event listener untuk tombol lokasi saya
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
    
    // Event listener untuk tombol reset marker
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
    
    // Event listener untuk enter di textarea
    document.getElementById('keteranganInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!document.getElementById('saveBtn').disabled) {
                saveData();
            }
        }
    });
}

// Expose initMap ke window
window.initMap = initMap;

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM siap, menunggu Google Maps API...');
    // Event listeners akan diinisialisasi di initMap
});
