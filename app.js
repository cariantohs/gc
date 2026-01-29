// Inisialisasi variabel global
let map;
let marker;
let selectedLocation = null;
let selectedUsaha = null;
let completedUsaha = new Set(); // Untuk menyimpan usaha yang sudah selesai
let usahaByKecamatanDesa = {}; // Struktur data untuk filter
let historyData = []; // Data riwayat

// Inisialisasi peta
function initMap() {
    // Pusat peta di Samosir
    map = L.map('map').setView([2.5833, 98.7167], 12);
    
    // Tambahkan tile layer dari OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Event klik pada peta
    map.on('click', function(e) {
        if (!selectedUsaha) {
            alert('Pilih usaha terlebih dahulu!');
            return;
        }
        
        // Hapus marker sebelumnya jika ada
        if (marker) {
            map.removeLayer(marker);
        }
        
        // Tambahkan marker baru
        marker = L.marker(e.latlng).addTo(map)
            .bindPopup(`<b>${selectedUsaha.nama_usaha}</b><br>${selectedUsaha.alamat}`)
            .openPopup();
        
        // Simpan koordinat
        selectedLocation = e.latlng;
        document.getElementById('latInput').value = selectedLocation.lat.toFixed(6);
        document.getElementById('lngInput').value = selectedLocation.lng.toFixed(6);
        
        // Aktifkan tombol simpan jika status sudah dipilih
        checkSaveButton();
    });
}

// Load data yang sudah disimpan dari Google Sheets
async function loadCompletedData() {
    try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=get`);
        if (response.ok) {
            const data = await response.json();
            data.forEach(item => {
                completedUsaha.add(`${item.kecamatan}|${item.desa}|${item.nama_usaha}`);
            });
            updateProgress();
            updateHistory(data.slice(-5)); // Ambil 5 data terakhir
        }
    } catch (error) {
        console.error('Gagal memuat data selesai:', error);
    }
}

// Struktur data untuk filter
function organizeUsahaData() {
    usahaByKecamatanDesa = {};
    
    dataUsaha.forEach(usaha => {
        const key = `${usaha.kecamatan}|${usaha.desa}`;
        if (!usahaByKecamatanDesa[key]) {
            usahaByKecamatanDesa[key] = [];
        }
        usahaByKecamatanDesa[key].push(usaha);
    });
    
    // Update counter total usaha
    document.getElementById('totalUsaha').textContent = dataUsaha.length;
}

// Isi dropdown kecamatan
function populateKecamatanDropdown() {
    const kecamatanSelect = document.getElementById('kecamatanSelect');
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

// Isi dropdown desa berdasarkan kecamatan
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

// Isi dropdown usaha berdasarkan kecamatan dan desa
function populateUsahaDropdown(kecamatan, desa) {
    const usahaSelect = document.getElementById('usahaSelect');
    usahaSelect.innerHTML = '<option value="">Pilih Usaha</option>';
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
        usahaSelect.appendChild(option);
    });
    
    if (filteredUsaha.length === 0) {
        usahaSelect.innerHTML = '<option value="">Semua usaha sudah selesai</option>';
        usahaSelect.disabled = true;
    }
}

// Tampilkan detail usaha
function showUsahaDetail(usaha) {
    const detailDiv = document.getElementById('usahaDetail');
    detailDiv.classList.remove('d-none');
    
    document.getElementById('detailAlamat').textContent = usaha.alamat;
    document.getElementById('detailKecamatan').textContent = usaha.kecamatan;
    document.getElementById('detailDesa').textContent = usaha.desa;
}

// Periksa apakah tombol simpan bisa diaktifkan
function checkSaveButton() {
    const saveBtn = document.getElementById('saveBtn');
    const status = document.getElementById('statusSelect').value;
    
    if (selectedUsaha && selectedLocation && status) {
        saveBtn.disabled = false;
    } else {
        saveBtn.disabled = true;
    }
}

// Update progress
function updateProgress() {
    const total = dataUsaha.length;
    const completed = completedUsaha.size;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress}%`;
    
    // Update counter
    document.getElementById('selesaiCount').textContent = completed;
    document.getElementById('progressText').textContent = 
        `${completed} dari ${total} usaha selesai`;
}

// Update riwayat
function updateHistory(data) {
    historyData = data;
    const historyTable = document.getElementById('historyTable');
    
    if (data.length === 0) {
        historyTable.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">Belum ada data</td>
            </tr>
        `;
        return;
    }
    
    let html = '';
    data.forEach(item => {
        const statusClass = item.status.toLowerCase().replace(' ', '-');
        html += `
            <tr>
                <td>${new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                <td>${item.nama_usaha}</td>
                <td><span class="status-badge status-${statusClass}">${item.status}</span></td>
                <td>${item.lat ? `${parseFloat(item.lat).toFixed(4)}, ${parseFloat(item.lng).toFixed(4)}` : '-'}</td>
            </tr>
        `;
    });
    
    historyTable.innerHTML = html;
}

// Simpan data ke Google Sheets
async function saveData() {
    if (!selectedUsaha || !selectedLocation) return;
    
    const saveBtn = document.getElementById('saveBtn');
    const originalText = saveBtn.innerHTML;
    
    // Tampilkan loading
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Menyimpan...';
    
    // Sembunyikan alert sebelumnya
    document.getElementById('successAlert').style.display = 'none';
    document.getElementById('errorAlert').style.display = 'none';
    
    // Data yang akan dikirim
    const data = {
        nama_usaha: selectedUsaha.nama_usaha,
        alamat: selectedUsaha.alamat,
        kecamatan: selectedUsaha.kecamatan,
        desa: selectedUsaha.desa,
        lat: selectedLocation.lat,
        lng: selectedLocation.lng,
        status: document.getElementById('statusSelect').value,
        keterangan: document.getElementById('keteranganInput').value || ''
    };
    
    try {
        // Kirim data ke Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Mode no-cors untuk mengatasi CORS
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Karena menggunakan no-cors, kita tidak bisa membaca response
        // Tapi kita anggap berhasil jika tidak ada error
        
        // Tampilkan sukses
        const successAlert = document.getElementById('successAlert');
        successAlert.style.display = 'flex';
        document.getElementById('uploadStatus').classList.remove('d-none');
        
        // Tambahkan ke completed
        completedUsaha.add(`${selectedUsaha.kecamatan}|${selectedUsaha.desa}|${selectedUsaha.nama_usaha}`);
        
        // Update progress
        updateProgress();
        
        // Update riwayat lokal
        const newHistory = {
            ...data,
            timestamp: new Date().toISOString()
        };
        historyData.push(newHistory);
        if (historyData.length > 5) historyData.shift();
        updateHistory(historyData);
        
        // Reset form
        resetForm();
        
        // Refresh dropdown usaha
        const kecamatan = document.getElementById('kecamatanSelect').value;
        const desa = document.getElementById('desaSelect').value;
        if (kecamatan && desa) {
            populateUsahaDropdown(kecamatan, desa);
        }
        
    } catch (error) {
        // Tampilkan error
        const errorAlert = document.getElementById('errorAlert');
        document.getElementById('errorMessage').textContent = 
            'Gagal menyimpan data. Periksa koneksi internet Anda.';
        errorAlert.style.display = 'flex';
        document.getElementById('uploadStatus').classList.remove('d-none');
        console.error('Error:', error);
    } finally {
        // Kembalikan tombol ke keadaan semula
        saveBtn.innerHTML = originalText;
        checkSaveButton();
    }
}

// Reset form
function resetForm() {
    // Reset pilihan usaha
    selectedUsaha = null;
    selectedLocation = null;
    
    // Hapus marker
    if (marker) {
        map.removeLayer(marker);
        marker = null;
    }
    
    // Reset input
    document.getElementById('latInput').value = '';
    document.getElementById('lngInput').value = '';
    document.getElementById('statusSelect').value = '';
    document.getElementById('keteranganInput').value = '';
    
    // Sembunyikan detail
    document.getElementById('usahaDetail').classList.add('d-none');
    
    // Nonaktifkan tombol simpan
    document.getElementById('saveBtn').disabled = true;
    
    // Sembunyikan alert
    document.getElementById('successAlert').style.display = 'none';
    document.getElementById('errorAlert').style.display = 'none';
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi peta
    initMap();
    
    // Organisasi data
    organizeUsahaData();
    
    // Isi dropdown kecamatan
    populateKecamatanDropdown();
    
    // Load data yang sudah selesai
    loadCompletedData();
    
    // Event listener untuk dropdown kecamatan
    document.getElementById('kecamatanSelect').addEventListener('change', function() {
        if (this.value) {
            populateDesaDropdown(this.value);
            resetForm();
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
            resetForm();
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
            
            // Cari data usaha
            selectedUsaha = dataUsaha.find(usaha => 
                usaha.kecamatan === kecamatan && 
                usaha.desa === desa && 
                usaha.nama_usaha === namaUsaha
            );
            
            if (selectedUsaha) {
                showUsahaDetail(selectedUsaha);
            }
        } else {
            selectedUsaha = null;
            document.getElementById('usahaDetail').classList.add('d-none');
        }
        checkSaveButton();
    });
    
    // Event listener untuk dropdown status
    document.getElementById('statusSelect').addEventListener('change', checkSaveButton);
    
    // Event listener untuk tombol simpan
    document.getElementById('saveBtn').addEventListener('click', saveData);
    
    // Event listener untuk tombol reset
    document.getElementById('resetBtn').addEventListener('click', resetForm);
    
    // Event listener untuk enter di keterangan
    document.getElementById('keteranganInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!document.getElementById('saveBtn').disabled) {
                saveData();
            }
        }
    });
});
