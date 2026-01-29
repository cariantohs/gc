// Data usaha dalam format JSON
const dataUsaha = [
  {
    "nama_usaha": "KEPLER PONSEL",
    "alamat": "JL KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POLINDES <SANTI>",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "WARUNG KOPI<AKDEN>",
    "alamat": "PINTU BATU DESA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "CU.SATAHI",
    "alamat": "JL USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI KOPI <NAUDUR>",
    "alamat": "SIMPANG 4 DUSUN 3 PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "DEPOT ISI ULANG AIR VED WATER",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SMA ADVENT",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "LOKET LISTRIK (BETTY)",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PAUD BONA PASOGIT SIPIRA",
    "alamat": "HUTAGODANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "JODHA, UD",
    "alamat": "LUMBANHARO DESA SIBO NOR OMPURATUS",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "TOKO OBAT PARSITABU",
    "alamat": "JL DI PANDJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <RIO>",
    "alamat": "KAMENTE DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "TABO RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SMK N 1 NAINGGOLAN",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "TUKTUK TIMBUL BUNGALOWS",
    "alamat": "JL LINGKAR TUKTUK SIA LLAGAN PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PUSTU SABUNGAN NIHUTA",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "LOUNDRY MANUAL <NUR>",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "VANESHA HOTEL",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "BENGKEL CINTA KAWAN",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD N 25",
    "alamat": "JLN INPRES TUKTUK SI ADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "VILLA SITIOTIO",
    "alamat": "JALAN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SMP N 3 LONTUNG",
    "alamat": "PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "SMK KARYA JAYA",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BATU BATA LIBERA",
    "alamat": "KAMENDETE DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SAMOSIR RESTAURANT",
    "alamat": "JLN LINGKAR TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "BAGUS BAY hoME sTAY",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MS, UD",
    "alamat": "KIOS NO 4-5 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LEKJON RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PAUD TUNAS BANGS A",
    "alamat": "LUMBAN TONGA TONGA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "HK BAKMIE (SAUT)",
    "alamat": "JL.DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA FOTOCOPY <ERNA>",
    "alamat": "JL SIMANINDO DUSUN 3 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PUSKESDES <MEY>",
    "alamat": "LUMBAN SIDAURUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PAUD HONEY KIDS",
    "alamat": "JL LINGKAR TUKTUK PIN DARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "KILANG PADI OP EVA",
    "alamat": "LONDUT DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "TOKO OBAT SEHATI <TOGA>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TOKO DEVOSIONAL",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOTEL DAINANG",
    "alamat": "JL. PUTRI LOPIAN PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RUMAH SAKIT HKBP",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "LOKET PEMBAYARAN <AMOR>",
    "alamat": "ALNGIT LUMBAN PASIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "PANGLONG PARMAN ARTHA",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOTEL CAHAYA",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CU ST JOSEP",
    "alamat": "PONDOK BULU",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "YAYASAN SANTO PETRUS",
    "alamat": "SIBATUARA DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU PARDOMUAN",
    "alamat": "PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "USAHA ROTI PARSAORAN 1",
    "alamat": "SITANGGAN BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PENJAHIT CACA (ADEL)",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PRIMA HOTEL",
    "alamat": "LUMBAN BOLAK",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "UD.HARIS",
    "alamat": "JL.DI. PANDJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KLINIK <HOTNIDA>",
    "alamat": "JL SIMANINDO DSN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "HORAS FAMILY SPEDBOAT",
    "alamat": "JLN LINGKAR TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "KILANG PADI (NARIS)",
    "alamat": "SITANGGANG BAU DSN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "CAROLINA RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "APOTEK NASIONAL",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO SEMBAKO (TEMSI)",
    "alamat": "JALAN AEK RANGAT HUTA PARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SD SW. ADVENT LIMBONG",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "KILANG PADI (PITTA RAJA)",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "PAUD DESA ONAN RUNGGU",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "STERA SALON",
    "alamat": "JL DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENGINAPAN KENCANA",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FAJAR JAYA, UD",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DEPOT WATER PARSAULIAN (ATHMEN)",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SETIA JAYA MOTOR",
    "alamat": "JL SAMPE HORAS",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "USAHA JUAL KUE PESANAN <JUNITA>",
    "alamat": "LUMBAN NAINGGOLAN DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SANGGAR SENI PAGABE",
    "alamat": "DESA LUMBAN BAGAS",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "KONTRAKTOR SILALAHI",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LAUNDRY PAKAIAN <SOSDA>",
    "alamat": "JALAN DR FL TOBING PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB CEMERLANG",
    "alamat": "SOSOR PARDOMUAN NAULI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "JUAL TAS ONLINE <IDA>",
    "alamat": "SITANGGANG BAU DSN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SD NEG 16 PARMONANGAN",
    "alamat": "PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "WARUNG KOPI <TOMU LASMA>",
    "alamat": "SIBAGANDING",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "ASRAMA SANTA MARIA PALIPI",
    "alamat": "SOSOR NAING GOLAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "SD N II SIMBOLON",
    "alamat": "SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "AGEN PRUDENTIAL <LAMTIUR>",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "INDUSTRI BAHAN PDP",
    "alamat": "KOMPLEK GEREJA BHETEL",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SOPO TOBA HOTEL",
    "alamat": "UNJUR AMBARITA, DESA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "TOLEDO INN",
    "alamat": "Jl. RING ROAD",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SILINTONG HOTEL",
    "alamat": "Jl. RING ROAD",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARTUA RONA ULI, PT",
    "alamat": "Jl. Pasar Nainggolan",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "GORGA DUMA SARI, PT",
    "alamat": "Dusun Hariarapintu, Desa Partungkunaginjang, Harian",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "PUSUK BUHIT LESTARI, PT",
    "alamat": "JL.SIMANINDO KILOMETER 4",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "LELUHUR PERSADA MARGA, PT",
    "alamat": "Jl. Raya Rianiate Desa Hutanamora",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PT BPR BUMIASIH NBP 9",
    "alamat": "JL DI PANJAITAN NO 72B",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SDN 32 HUTATINGGI",
    "alamat": "HUTATINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "SDN 173693 HARIAN",
    "alamat": "Harian",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "SD NEGERI 37 PARDOMUAN NAULI",
    "alamat": "Lbn. Naganjang",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "SDN 178225 JUNJUNGAN",
    "alamat": "Junjungan",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SD NEGERI 17 SAORNAULI HATOGUAN",
    "alamat": "Hatoguan",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "SDN 175837 TOLPING",
    "alamat": "Tolping",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SDN 173755 PARMONANGAN",
    "alamat": "Parmonangan",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SDN 176383 SAITNIHUTA",
    "alamat": "Saitnihuta",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "SD NEGERI 16 PASARAN I",
    "alamat": "PASARAN 1",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "SD NEGERI 7 GAROGA",
    "alamat": "Garoga",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "SD NEGERI 19 PANANGGANGAN",
    "alamat": "Aek Nahombar",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "SD NEGERI 3 PAKPAHAN",
    "alamat": "PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "SDN 175825 GINOLAT",
    "alamat": "Ginolat",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SDN 173694 HUTA RIHIT",
    "alamat": "Huta Rihit",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "SDN 177083 PARSAORAN I",
    "alamat": "Parsaoran I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SDN 174599 TAMBA",
    "alamat": "Tamba",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SDN 173736 SIMBOLON",
    "alamat": "Simbolon",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "SDN 173762 AEK NAULI",
    "alamat": "Aek Nauli",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "SD NEGERI 18 SITAMIANG",
    "alamat": "Sitamiang",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "SD NEGERI 22 SIGAOL MARBUN",
    "alamat": "Simbolon",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SDN 175834 HAS LONTUNG",
    "alamat": "Lontung",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SDN 173754 RIANIATE",
    "alamat": "Rianiate",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SD NEGERI 6 HARIARAPOHAN",
    "alamat": "Sihotang",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "SD NEGERI 26 HATOGUAN",
    "alamat": "Hatoguan",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "SDN 174596 SUNGKEAN",
    "alamat": "Sungkean",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "SDN 12 PINTUSONA",
    "alamat": "JLN. HADRIANUS SINAGA KEL PINTUSONA KEC PANGURURAN KAB SAMOSIR SUMATERA UTARA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SD Negeri 20 Hasinggaan",
    "alamat": "Binangara",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SD Negeri Kecil Sitatar",
    "alamat": "Sitatar",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "PT Adira Dinamika Multi Finance Tbk, Kantor Representative Office Sumatera",
    "alamat": "Jl Farel Lumban Tobing",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD NEGERI 16 URAT TIMUR",
    "alamat": "DESA URAT TIMUR",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "SD NEGERI 8 TUKTUK SIADONG",
    "alamat": "Sibolopian",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SDN 173814 TANJUNGAN",
    "alamat": "Tanjungan",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "SDN 13 PARMONANGAN",
    "alamat": "JL RAYA LONTUNG, DESA PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SD NEGERI 5 PARTUNGKONAGINJANG",
    "alamat": "Baneara",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SD NEGERI 20 TOGUAN GALUNG",
    "alamat": "Sipangko",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "SD NEGERI 14 PANGALOAN",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SD NEGERI 13 PALLOMBUAN",
    "alamat": "Palipi",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "SMPN 2 PALIPI",
    "alamat": "Sitiotio",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "SMPN 3 PALIPI",
    "alamat": "Sitiotio",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "SMP Negeri 1 Simanindo",
    "alamat": "Simanindo",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "SMPN 2 PANGURURAN",
    "alamat": "Desa parsaoran 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SD NEGERI 12 RONGGURNIHUTA",
    "alamat": "Nadeak Bariba",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "SDN 177683 SIBOSA",
    "alamat": "Sibosa",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SD NEGERI 20 LUMBAN SUHISUHI DOLOK",
    "alamat": "Harapohan Dusun 1",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "SD NEGERI 2 TURPUK SIHOTANG",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "SD NEGERI 3 SOSOR DOLOK",
    "alamat": "Sosor Dolok",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "KAPAL KAYU PENUMPANG <ROMAULI>",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SUPER STAR, CV",
    "alamat": "TERUSAN TANO PONGGOL DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SUPIR ANGKUTAN <JUNI>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "ANGKUTAN DANAU <POLTAK SAGALA>",
    "alamat": "KOMPLEK SDN 6 SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "LINDAS GUEST HOUSE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TUMBA DISKOTIK",
    "alamat": "JALAN PENDIDIKAN TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "JUAL LPG <SANTO>",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "ANKY PONSEL",
    "alamat": "J L RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RODEARNI, CV",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "UD.KARINA",
    "alamat": "SALAN RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KELONTONG (HELEN)",
    "alamat": "DESA GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "GOKHON GUEST HOUSE",
    "alamat": "JALAN LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KM FELIX",
    "alamat": "JALAN LING KAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA JET SKY <DONAL>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENJUAL SAYURAN <JAIT>",
    "alamat": "PASAR TRADISIONAL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SANGGAM BEACH HOTEL",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "SUMBER PULO MAS HOTEL",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RIZAL GLEN MOSES, CV",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ELI SABET, UD <JALAKMAN SIPAKKAR>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "POSKESDES JANJI MATOGU",
    "alamat": "JANJI MATOGU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "SUPIR ANGKOT <JONSAIDEN>",
    "alamat": "DESA SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "MIDUK UD",
    "alamat": "SIJURJUR DESA PASARAN PARSAORAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "SUPIR ANGKUTAN DESA <RUBIANTO>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PUSTU PARDOMUAN",
    "alamat": "SIBUTAR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "SUMBER SARI CV",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JUAL PUPUK <ARDON >",
    "alamat": "DES A SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "CV MISLA KONSTRUKSI",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TENUN ULOS (RENI)",
    "alamat": "DUSUN 3 LUMBAN SIMARMATA",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "BENGKEL LAS CV ASIDO",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KAPAL PENUMPANG <FRANS>",
    "alamat": "KOMPLEK LOPO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TOBA BEACH HOTEL",
    "alamat": "JL. PANGAMBATAN TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TOKO BRR",
    "alamat": "JLFL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "pangkalan GAS ELPIJI sibatuara",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "SMP SWASTA KATHOLIK bintang samosir",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "CV PUTRA LOBUTUA",
    "alamat": "SIMBOLON DUSU 2",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "SD NEGERI 9 CINTA MAJU",
    "alamat": "TAMRA NAGODANG",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "CU SAROHA SIARSAM",
    "alamat": "SIARSAM DESA HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "KINGS GUEST HOUSE",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "SD NEGERI 2 MARTOBA",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "AEK SIPITUDAI",
    "alamat": "LUMBAN NAEK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "TOKO POLO",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POLINDES <DESI>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "SD SANTO MIKHAEL",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NARIK BECAK (BERTON)",
    "alamat": "DUSUN 1 HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "POSKESDES AEKLAND",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "TOKO OBAT PARSAORAN",
    "alamat": "LUMBAN GAOL DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "SMP SW BHAKTI MULIA ONAN RUNGGU",
    "alamat": "ONAN RUNG G U",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "RAYA JAYA TANI, CV",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SD NEGERI 2 NAINGGOLAN",
    "alamat": "DESA NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "CV BOY MAS <GORGA>",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ATK (UD RISARDO)",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SHORUM MOTOR (GLOBAL/COY)",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BANK MANDIRI PERSERO, PT",
    "alamat": "JALAN DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PONDOK NET (ANDREY)",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PUSTU JLN BESAR TOMOK",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "SUMATERA BOROBUDUR <AYU>",
    "alamat": "TOLPING MARTOBA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "PUSTU SIMANINDO <ASINA>",
    "alamat": "BOLO BOLONI",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PUSTU SIOGUNGOGUNG",
    "alamat": "JALAN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "UD FAJAR REKLAME <MARTOGI>",
    "alamat": "JLN SIMANINDO <SAITNI HUTA>",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PEDAGANG OBAT (SINAGA)",
    "alamat": "LOS PASAR ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "RUMAH MAKAN FAMILY (RM FAMILY)",
    "alamat": "JALAN PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "RM SIALAPIT <WALTER>",
    "alamat": "SIALAPIT",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "WARNET DIDIDA",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KILANG PADI (AMAN)",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "TAHI SUMURUNG CV",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SMAK ST THOMAS",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "SD  ADVENSIGAOL SIMBOLON",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "JUAL MINYAK ECERAN <JOSUA>",
    "alamat": "LUMBAN GAOL DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "TOKO BOLA LAMPU HIAS (LAMSIHAR)",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SAZAS RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PAUD PELITA KASIH",
    "alamat": "DES A PARMON GAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "LINSA (RUDI), CV",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TOKO OBAT <ROTUA>",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "HORAS RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PGOS WATER SPORT",
    "alamat": "JLN LINGAKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "USAHA BANANA BOAT <JOSEN>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA FOTOCOPY <POLTAK>",
    "alamat": "KOMPLEK SMPN 1 AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NARIK BECAK <IWAN>",
    "alamat": "LUMBAN BOLAK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "NARIK BECAK <POLMA>",
    "alamat": "SITUNGKIR 1 DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "MORA DOLOK, CV",
    "alamat": "JALAN AEK RANGAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SRM (SUAURMA LAURA), CV",
    "alamat": "HUTAGALUNG DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "KM LAMHOTMA <ASDIN>",
    "alamat": "BOLO BOLONI",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "ALYSSA RESTAURANT",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN MANDIRI (MERLY)",
    "alamat": "DESA SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <RIWAN>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KM ROMLAN",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "UD MAHARIA <JOSMAR>",
    "alamat": "LUMBAN RIHIT",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "CV SAROHA JAYA (ATK)",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TUKANG BECAK <OSNER>",
    "alamat": "NABAHO URUK",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SAULINA RESORT",
    "alamat": "JALAN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "INDUSTRI BATU BATA (BENNY)",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "CV BEENVENIOOS AMIGOS",
    "alamat": "JL.DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SD NEGERI 6 ONAN RUNGGU",
    "alamat": "JL PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "WARUNG KELONTONG MIRANDA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD NEGERI 5 PAMUTARAN",
    "alamat": "PAMUTARAN",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "SD NEGERI 13 PALLOMBUAN",
    "alamat": "KOMPLEK SD NEGERI 13 PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "UD MARULITUA",
    "alamat": "JL DIPAN JAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RUMAH MAKAN SITANGGANG",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BALAI PENGOBATAN SWASTA PARLINDUNGAN",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PANGLONG <TORANG>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "TUKANG JAHIT <SINURAT>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "TOKO OBAT (DAUD/MARTA)",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "UKM KARYA TERAMPIL",
    "alamat": "KOMPLEK RS HKBP",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "TOKO MADUMA <KASTORO>",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "POLINDES",
    "alamat": "HUTAGINJANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "MARS, UD (PUPUK DAN INSEKTISIDA)",
    "alamat": "SIAUGA",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "TOKO EMAS RASOKI SIREGAR",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PARTAKKE CV",
    "alamat": "SITANGGANG BAU DSN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "CV ABC MARS",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SMP BUDI MULIA",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOHAN MAS PUPUK",
    "alamat": "JALAN USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "IVANA MOTOR,UD",
    "alamat": "JL DR HADRIANUS SINAG A",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POLINDES",
    "alamat": "BANJAR DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "RIS ULI SITINJAK, CV",
    "alamat": "SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "JUDITA COTTAGE",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "AGEN GAS LPG KECIL <RIAOLO>",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PERSEWAAN BANANA BOAT <HENRI>",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA JET SKY <RIAN>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "BAGUS BAY HOME STAY",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ANGKUTAN PENUMPANG <LAMHOT>",
    "alamat": "HABEAHAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "TRANSPORTASI AIR KM MARTAULI",
    "alamat": "LUMBAN PASIR PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "COTNEY RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NARIK BECAK <SIMON>",
    "alamat": "DUSUN 1 MANDA PASAR",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "RESTAURAN (PINNA)",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TUKANG BECAK <SURUNG>",
    "alamat": "NAIBAHO URUK",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SD RK SANTO PAULUS ONAN RUNGGU",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "HISAR PENGINAPAN",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KARYA BONGGAR CV",
    "alamat": "LUMBAN NAINGGOLAN DSN 2",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KEDAI KOPI (EIRENE)",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JUAL AMPAS TERNAK <SIMANJUNTAK>",
    "alamat": "LORONG 3 PARLUASAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "DOOR SMEER PARDONA (MARDI)",
    "alamat": "JALAN DR FL TOBING I",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB OBERHAUSEN HKBP",
    "alamat": "JALAN GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "USAHA BECAK MOTOR <OCENG>",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JUAL TOKEN LISTRIK <IRMA>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SMA KARYA JAYA PANGURURAN",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "POLINDES",
    "alamat": "AEK TUMPAHAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "SD NEGERI 5 RONGGURNIHUTA",
    "alamat": "CENTRAL",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "SEKOLAH PAUD",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <MEDANG>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <URUK>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <SEIAN>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "YAYASAN SARI ASIH NUSANTARA",
    "alamat": "JL TERMINAL MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "PANDU LIKESIDE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGINAPAN ROGANDA",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "JUAL BARANG KELONTONG SITANGGANG",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "USAHA BECAK MOTOR <FREDDY>",
    "alamat": "DEKAT TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <PERNIJAN>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "PIZZERIA",
    "alamat": "JLN LINGKAR TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PUTRA REJEKI TANI UD",
    "alamat": "PARDOMUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENGANGKUTAN UMUM",
    "alamat": "J L TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO MAS  SURABAYA",
    "alamat": "JL DI PANJAITAN NO 83",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CV JOSUA",
    "alamat": "SITOHANG",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <PARULIAN>",
    "alamat": "PINTU BATU DESA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ASRAMA PUTRI",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROGATE BEACH HOTEL, CV",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "USAHA KILANG PADI <RUDOL>",
    "alamat": "SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "TOKO JOY",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BUDIARTI, UD",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ROMLAN NET",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SPBU <PT KARUNIA PUTRI SEJATI>",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD NEGERI 14 TANJUNGAN",
    "alamat": "JALAN BESAR TANJUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "CHARLES MUSIK",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "VARIA BARU (BINTER), UD",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO OBAT YANTI",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SUMBA TAYLOR <MANAHARA>",
    "alamat": "JL SISINGAMANGARAJA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RUMAH MAKAN MINUM (ROMUAL)",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KARYA NAULI, CV",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD NEGERI 6 SALAON TOBA",
    "alamat": "SALAON TOBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "GARDU PLN ONAN RUNGGU",
    "alamat": "SIBORONG BORONG",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PAUD BERKAT",
    "alamat": "NAINGGOLAN PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "SMK NEGERI 1 MALIN",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "SD NEGERI 12 PAKPAHAN",
    "alamat": "PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "TRANSPORTASI <MUARA S>",
    "alamat": "LBN SIMANIHURUK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TOKO SEMBAKO <TUAN BOS>",
    "alamat": "JALAN DANAU TOBA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LOKET SAMPRI <SUDUNG>",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "USAHA BANANA BOAT <BUNGHOT>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "CV PERDANA MOTOR",
    "alamat": "JL DI PANJAITAN (depan bank bri)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TIOMART",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TK SWASTA TUNAS HARAPAN AMBARITA",
    "alamat": "JL ASPOL",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PENGANGKUTAN <SIDABUTAR>",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "APOTEK CARLOS",
    "alamat": "JL.DI.PAND JAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENGANGKUTAN <MIKJEN>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "SMA NEGERI 1 PANGURURAN",
    "alamat": "KOMPLEK SMA NEGERI 1 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SD NEGERI 21 SIMANINDO",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "KSU KOZERO <KC BATAM>",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "LINGGOM, UD",
    "alamat": "JALAN SIMANINDO HARIARA 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "UD SABAR SUMURUNG (MANIUR)",
    "alamat": "JL SISINGA MANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SMA SWASTA HKBP",
    "alamat": "JL GEREJA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SD NEGERI 5",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "PANGKALAN ELPIJI GAS (MARSIUS)",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PERKASA UTAMA CV",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "KANTIN SEKOLAH <CANDRA>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HOTEL SONDANG DAINANG",
    "alamat": "J L PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MIE GORENG IRDIOUS",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ELSE PERABOT",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CV SUMBER KASIH SEJAHTERA <KAMPAK>",
    "alamat": "TELE DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "TRANSPORTASI AIR <MARULAK SIMBOLON>",
    "alamat": "LUMBAN PASIR PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU RIANIATE",
    "alamat": "DESA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TELKOM, PT",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JURNI GROUP, PT",
    "alamat": "JL. NAHUM SITUMORANG NO. 14",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TRANSPORTASI BECA <RAMPA>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "KANTOR KONSULTAN TOBA BUDI SMART KARYA",
    "alamat": "JL PUTRI LOPIAN GANG BERSAMA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "VILLA LYLA CAFE RESTO",
    "alamat": "PASIR PULO TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "SUPIR ANGKUTAN <RUDOLF>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "TYESZA HOTEL",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "SUPIR ANGKUTAN <FERI>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "FRANGKY RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "VANDU KARAOKE",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ANJU COTTAGE",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TOLEDO INN 2",
    "alamat": "JL RINGROAD TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TOKO RAHEL KELONTONG",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MOBIL RENTAL <MULADIN>",
    "alamat": "JALAN RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PT WAHANA PUTRA YUDHA <TDC>",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO OBAT <SITIO>",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "KILANG PADI <KAMRIN>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "USAHA JUAL GAS <PANTRI>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JUAL DAGING <SOPAN>",
    "alamat": "LOS PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "POSYANDU",
    "alamat": "SILITONG SIGAOL SIMBOLON DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SD NEGERI 6 PANGALOAN",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SAKKAMADEHA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FAEL, CV <JAMOSDEN>",
    "alamat": "DESA SARIMARRIHIT, SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "KONTRAKTOR (RONNY CV)",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "TIMBUL, UD",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "CV ADVEN",
    "alamat": "JLN NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CV BINTANG SAMOSIR (TOMMY)",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "INDOMARET <MANSYAPUTRA>",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DANAMON, PT",
    "alamat": "J L DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DORULI CV",
    "alamat": "PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "JUAL PAKAIAN JADI <NASIONAL>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "RUMAH MAKAN IRDIOUS",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PULTAK PAGAR CV",
    "alamat": "TANAH LAPANG SIPINGGAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG MAKAN MINUM <HENDRIK>",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "NARIK BECAK <OLOP>",
    "alamat": "DUSUN I MANDA HUTA",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "PEMBAWA BECAK <HERMAN>",
    "alamat": "BUTAR RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TOKO MANHATTAN",
    "alamat": "JL DI PANJAITAN (dekat terminal)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HARRIS, UD",
    "alamat": "jln hadrianus sinaga (PARJONGGI)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BENYAMIN TONGAM, CV",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA BATU BATA (SINURAT)",
    "alamat": "SIGIRO",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "DEPOT AIR ISIULANG <MALAKA>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "MC 2001 ENTERTAINMENT",
    "alamat": "JL PUTRI LOPIAN GG BERSAMA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "STUDIO PHOTO GRACIA",
    "alamat": "JALAN PUSUK BUHIT DSN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "JO PARLAMBASAN, CV",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DISTRIBUTOR UD GEMILANG <UNILEVER>",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PUPUK KIMIA (LUKMAN), UD",
    "alamat": "ONAN SIBAGANDING",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "SDN 2 SABUNGAN NIHUTA",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "SPAREPART SEPEDA MOTOR <MARIHOT>",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KM ANUGRAH",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "DAGING BABI <JOSDI SWANTO>",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BINTANG, UD <HELENA>",
    "alamat": "JL DR FL TOBING pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARNET <NAPITU>",
    "alamat": "JLN LING KAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <EPI>",
    "alamat": "JL HORAS",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SD NEGERI 24 CINTA DAME",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "TOKO OBAT <VISTRO>",
    "alamat": "PASAR UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "SAUDARA UD",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "PARNA, UD",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "ANJU KARAOKE",
    "alamat": "JL LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SAMOSIR COTTAGEs",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PAUD SITOBU KIDS",
    "alamat": "JL SITOBU NO 12",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ROMLAN ACCOMODATION",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARYSCA ART SHOP",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "DUMASARI HOTEL, CV",
    "alamat": "J L LING KAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "D`POS GUEST HOUSE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "SARTIKA CATERING",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PANGLONG <DEDI>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "TOKO ORLANDO",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "UD RIDHO SERVICE",
    "alamat": "JALAN PUSUK BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "AMBAROBA HOTEL",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "CAHAYA CV (ROBET)",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LAURANA SANJAYA, CV",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CV RUHUT (MAR)",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BECAK (BENAYA)",
    "alamat": "JL SIANJUR MULA MULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <ZEBUA>",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "TOKO PUPUK <ROMMEL>",
    "alamat": "PASAR NAINGGOLAN, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "KEVIN MART",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "REGGAE GUEST HOUSE",
    "alamat": "JLN LINGKAR TUKTUK PANDAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ORARI RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "MEXICO FURNITURE",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SDN 8 PARDOMUAN",
    "alamat": "SITALASEAK",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "PAUD CHYRE ELEIZON",
    "alamat": "JALAN PUSUK BUHIT DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <LITAR>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RM MUSLIM SAPRIA",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KB WELIPA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "ANGKUTAN UMUM<TIGOR>",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB CINTA KASIH",
    "alamat": "DESA SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PANGLONG SINAGA MARS",
    "alamat": "JL D I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEKOLAH SMA SANTO MIKHAEL",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PUTRA PEALAGE CV",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PENARIK BECAK <SANRO>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BEENVENIOOS AMIGOS, CV",
    "alamat": "JALAN DR HADRIANUS PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "WARUNG KOPI (MARIA)",
    "alamat": "JL. KANTOR CAMAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <DANGKIT>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "EDO GOLD STAR CV",
    "alamat": "SIPINGGAN LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "POLINDES SITUNGKIR <WINRA>",
    "alamat": "LUMBAN BOLAK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "SEDAR GROUP, CV",
    "alamat": "PASAR NAINGOOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "BECAK MOTOR <ROBIN>",
    "alamat": "SIAHAAN BARLIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SD NEGERI 23 SIOGUNGOGUNG",
    "alamat": "JALAN AIR PANAS",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PAUD AGAPE",
    "alamat": "SITANGGANG BAU DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KLINIK <RATIO>",
    "alamat": "JALAN SIMANINDO GUMBA",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PT MEGA AUTO CENTRAL <ELRICO>",
    "alamat": "JALAN RAYA TELE",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "REPARASI SEPEDA MOTOR MANGIRING",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PENGINAPAN IRDIYOSPANDE",
    "alamat": "JALAN PUSUK BUHIT DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SENANG TANI <ALSUDIN>",
    "alamat": "SOSOR BULU",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "BRANDOS BAR",
    "alamat": "JL LINGKAR TUKTUK SI ADONG",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "PENYEWAAN KAMAR JEGEES",
    "alamat": "JL PUSUK BUHIT DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SD SWASTA KATHOLIK palipi",
    "alamat": "SIBABIAT",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "TOKO BUDIMAN CV",
    "alamat": "JL DI PANJAITAN NO 94",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAROHA JAYA, CV",
    "alamat": "JL HANUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG MIE <HERBET>",
    "alamat": "JALAN RAYA MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "GLOBAL PAYMENT, CV",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PANGKALAN LPG <JOSUA>",
    "alamat": "LUMBAN GAOL DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "USAHA FOTOCOPY <SALMON>",
    "alamat": "JL KANTOR CAMAT RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "TOKO HANDPHONE SINTA MARDONGAN <MAYA>",
    "alamat": "jalan DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK CU DAME<DULMAN>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SUTAN, UD",
    "alamat": "SIARUNG ARUNG PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "NARIK BECAK <ABNER>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BECAK MOTOR <LAMASI>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PNM ULAMM, PT",
    "alamat": "JALAN DR HADRIANUS",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA KILANG PADI <JORTANA>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "SD NEGERI 15 BUNTU MAULI",
    "alamat": "BUNTU MAULI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "NARIK BECAK <RENHARD>",
    "alamat": "SABUNGAN NIHUTA DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "PERSEWAAN BANANA BOAT <RIWAN>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KARYA VANY KONSTRUKSI, PT",
    "alamat": "Sosor I Desa Sigaol Marbun, Kec. Palipi",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SD NEGERI 11 TAMBA DOLOK",
    "alamat": "SIMPANG IMPRES",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SAMUEL LPG",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SAMPRI, PT",
    "alamat": "SIAHAAN BAGASAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HARIARA GUEST HOUSE",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARUBA RESTAURANT",
    "alamat": "J L LING KAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RUMAH MAKAN HORAS (RAMLI)",
    "alamat": "JLN SINGAMANBARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RUMAH NABOLON, CV",
    "alamat": "DESA SARIMARRIHIT SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "TOMMY, UD",
    "alamat": "HUTAGALUNG DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "SDN 10 HUTA GURGUR",
    "alamat": "JANJI MATOGU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "KLINIK SANTO LUKAS",
    "alamat": "SOSOR DALAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENJUAL SEMBAKO <BOSMA>",
    "alamat": "KIOS NO 91 PEKAN INPR ES PANG URURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO KELONTONG <KUMPUL>",
    "alamat": "Desa parsaoran 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TOKO SAHAT <NICO>",
    "alamat": "JL SISINGAMANGARAJA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KANTOR POS",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MANTAP, CV (ALAT ALAT PESTA)",
    "alamat": "JALAN BESAR TANJUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SUPIR ANGKUTAN <LEO>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "TOKO MAS SURABAYA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RUMAH BERSALIN ST.ELISABETH",
    "alamat": "KOMPLEKS SUSTERAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SIHAR MOTOR",
    "alamat": "JLDRHADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NOTARIS <RITA DYAH>",
    "alamat": "JL PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO 12 BERSAUDARA",
    "alamat": "J L.DI.PAND JAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "INDUSTRI PEMBUATAN KOSEN <SABAR>",
    "alamat": "SIRIMBANG PASIR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SUPIR ANGKOT <BILIN>",
    "alamat": "UPA SUHUT",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "SDN 18 BONAN DOLOK (MORINA)",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "UD POLTEN",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJAHIT SONDANG",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TRANSPORTASI BECA <HARTONO>",
    "alamat": "PANGAMBATAN DESA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "MARTOGI, CV",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BRATAMA ENGINEERING CV",
    "alamat": "JALAN BARU SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PARHONBANAN, CV",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ARIBEDIDIDA CV",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG BECAK <SALOMO>",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENDIDIKAN GANESHA OPERATION, PT",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KSU SAMOSIR MANDIRI",
    "alamat": "JALAN KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SALON BINTANG <BASARIA>",
    "alamat": "MALAU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "SDN 3 PASAR PANGURURAN",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KSP MAKMUR MANDIRI",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KM NAINGGOLAN 8",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "ANGKUTAN UMUM (MANAOR)",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ANGKUTAN UMUM UNTUK PENUMPANG",
    "alamat": "SI ARUNG ARUNG",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SANLIHO KOPI",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "UD.LAMBOK",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KLINIK",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "KING MOTOR SERVICE",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JASA ANGKUTAN",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TRANSPORTASI AIR <RENGSI>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "YANTI MOTOR CV",
    "alamat": "JALAN SIMANINDO GUMBA",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "RO REJEKI USAHA DAGANG",
    "alamat": "SOSOR SIBABIAT ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "CV BATU BOLON",
    "alamat": "JALAN TELE SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ANGKUTAN SUMBER SARI",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "DAMERO ONE MUSIK <RENANDO>",
    "alamat": "DESA LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "CHRISTY, CV",
    "alamat": "ALNGIT DUSUN 3 PARSAO RAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "SD NEGERI 20 SIMBOLON PURBA",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "TOKO OBAT BERIJIN SERASI",
    "alamat": "JL D I PANJAITAN (dekat bri onan baru)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PUSKESMAS LONTUNG",
    "alamat": "DES A PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "EIRENE CV",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "CAMELIA FRISKA, CV",
    "alamat": "JALAN TELE PINDA",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TUKANG PANGKAS <CANDRA>",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO EVA",
    "alamat": "JALAN GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "IDA <SALON>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "JUAL DAGING BABI ECERAN <LIAN>",
    "alamat": "SIMPANG 4 DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TOKO BANGUNAN MADUMA <MATRIAL>",
    "alamat": "DUSUN 2 SITUNGKIR LON DUT PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "TOKO KELONTONG <LEO>",
    "alamat": "JALAN DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "CU KATOLIK ONAN RUNGGU",
    "alamat": "JALAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "SD NEGERI 14 JANJI MARIA",
    "alamat": "JANJI MARIA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "STEVEN SARAH CV (PASTI)",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "KILANG PADI <MARINGAN>",
    "alamat": "LUMBAN RIHIT",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "KOPERASI CITRA M LESTARI",
    "alamat": "MALAU TONGA TONGA",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "YAYASAN BIMA",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO OBAT <NURHAIDA>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "LOUIS, CV",
    "alamat": "JL GREJA TUKTUK SI ADONG",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "BUNI BUNI PUB",
    "alamat": "JL RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POLINDES HUTA GINJANG",
    "alamat": "HUTA GINJANG DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "WARUNG KITA BUAH ALAM <SANUR>",
    "alamat": "JL PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "CV SEVEN BROTHER",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SMA NEGERI 1 ONAN RUNGGU",
    "alamat": "PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "UD TAMBUN",
    "alamat": "J L PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD NEGERI 30 SAITNIHUTA",
    "alamat": "DESA SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "GUDANG PT INDOMARCO",
    "alamat": "JL DR HADRIANUS S I NAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KANTOR PURNA KARYA,CV",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KIOS PUPUK SUBSIDI <JOSUA>",
    "alamat": "LUMBAN GAOL",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "TRANSPORTASI DARAT(RAJA)",
    "alamat": "PARMONANGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "POLINDES MATAHARI DESA PARADUAN",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "USAHA BILLIARD <DINAR>",
    "alamat": "JALAN LING KAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "POLINDES TAMBUN SUNGKEAN",
    "alamat": "TAMBUN",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "APOTIK BERSAMA",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "POLINDES SAKURA",
    "alamat": "AEKNAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "ANGKUTAN PENUMPANG <HEBER>",
    "alamat": "LUMBAN GOLONGAN TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SEMBAKO (MERLIYANA)",
    "alamat": "DESA SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "LINTONG, CV",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEWA MOBIL <RISSAN>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "METRO, CV",
    "alamat": "JL.hadrianus sinaga,",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TB HONGKONG LAMGANDA, CV",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "IKA CIPTA PERDANA",
    "alamat": "DUSUN 2 SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "CV HONGKONG LAMGANDA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PISANG <DOSLEN SIMBOLON>",
    "alamat": "JALAN DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ANJU MANGASI, CV",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KB CITRA NAINGGOLAN",
    "alamat": "DOLOK MARTAHAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "KB KASIH",
    "alamat": "SIMPANG IMPRES",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "RIMMA ALDO, CV",
    "alamat": "HUTALUNG DUSUN 3",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "PUSKESMAS SITIO TIO",
    "alamat": "SITIOTIO",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "SD NEGERI 6 SIMARMATA",
    "alamat": "SIDAJI DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <RISDA>",
    "alamat": "JL HORAS",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <ROLEN>",
    "alamat": "JL SIGALE GALE",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "DERMAGA ONAN RUNGGU",
    "alamat": "PELABUHAN ONAN RUGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "GARDU INDUK PLN TELE",
    "alamat": "GARDU DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PENJUAL BENSIN <SIDABUTAR>",
    "alamat": "JL BESAR TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TERAS BRI UNIT AMBARITA",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <NASTI>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TOKO ALAT LISTRIK <IRMA SIANTURI>",
    "alamat": "JL SIANJUR MULAMULA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ud marihot",
    "alamat": "JL DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO HARIANJA <MARDOT>",
    "alamat": "JL D I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BECAK MOTOR <SINAGA>",
    "alamat": "SIMANAMPANG TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROSITA GUEST HOUSE",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "LEMBAGA PENDIDIKAN SETIA ROHANA-SALON",
    "alamat": "sudah pindah",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PAUD WISATA SAMOSIR",
    "alamat": "DUSUN 2 LUMBAN TONGATONGA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "JIMMY, UD",
    "alamat": "JL SITOB U",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "UD GUNAWAN LS",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BECAK MOTOR pak ani naibaho",
    "alamat": "jln tanah lapang",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SAMPURAN CV",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "LOKET PEMBAYARAN LISTRIK <GOK LIFE>",
    "alamat": "DESA PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "ECERAN PUPUK (SUDIANTO)",
    "alamat": "PASAR SIANJUR MULAMUL A",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "BIDAN DESA (ROMARTA)",
    "alamat": "SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "KANTOR POS HARIANBOHO",
    "alamat": "JL. JANJI MARTAHAN NO. 1 HARIANBOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "ANJU RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PAUD TAMAN FIRDAUS",
    "alamat": "JL LINGKAR TUKTUK SI ADONG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PONDOK BULU RESTAURANT",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "KM CAROLINA",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TARIAN COFFE SHOP",
    "alamat": "JL LINGKAR TUKT U K",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "BERNAD  GUEST HOUSE",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ANGKUTAN PENUMPANG <ROBIN>",
    "alamat": "KOMPLEK SMPN 4",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARSIURUPAN SIMANINDO, CV",
    "alamat": "JALAN LINTAS SAMOSIR DES A CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TOKO OBAT <GEBI>",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN (LAMRIA)",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "LEO`S RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "UPAR KONSTRUKSI SEJAHTERA CV",
    "alamat": "JALAN SIMANINDO SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "SMK SWASTA HKBP",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO PARSAORAN",
    "alamat": "JLN SIMANINDO DSN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MOBIL ANGKUTAN SEWA <PURIDIN>",
    "alamat": "SITANGGANG BAU DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "NEW SEMANGAT CV",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "USAHA MONIKA",
    "alamat": "JL PUTRILOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POLINDES SINAGA URUK PANDIANGAN",
    "alamat": "NASUMANDAR",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "MENJUAL GAS 3KG <UD TIMBUL>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SAMOSIR JAYA, CV",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PERKASA UTAMA CV",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "NARIK BECAK <MARTUA>",
    "alamat": "LUMBAN BOLAK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "NARIK BECAK (MARLON)",
    "alamat": "DUSUN 1 MANDA HUTA",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "CV PARTOPI DOLOK",
    "alamat": "JL RONGGUR NIHUTA Pasar silengge",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "GROSIR <NELUCON>",
    "alamat": "SIARUNG WARUNG PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "TRANSPORTASI KAPAL KM HOTNIEL <MARINGAN>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "REGGAE RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK PANDAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ASRAMA PUTRA BUDI MULIA",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "UD SIMARSOIT",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO OBAT TOMMY",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JENNYS RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN MOREN DERMAWAN NADEAK",
    "alamat": "GANG PARJONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LIBERTA GUEST HOUSE",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGEPUL HASIL TANI <ROMANTO>",
    "alamat": "RAUTBOSI",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "LASRITA,UD",
    "alamat": "Jl Diponegoro (Terminal Bawah)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER GIGI <NETTY>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SIBIGO GUEST HOUSE",
    "alamat": "J L N LING KAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SD NEGERI 13 PARMONANGAN",
    "alamat": "DES A PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "ROYS PUB",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGINAPAN ELSINA",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BENGKEL <RISSAN>",
    "alamat": "LUMBAN PASI R",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "HISAR WATER",
    "alamat": "JL. LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "USAHA DAGANG <IDRUS>",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "MARCOPOLO COFFE SHOP",
    "alamat": "JL TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NANGA INFORMATION",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "RODEO ACCOMODATION",
    "alamat": "JL LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <BONA>",
    "alamat": "J L HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KM TABO COTTAGE",
    "alamat": "JL PELABUHAN SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <ROGERSON>",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <MORITA>",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TOKE HASIL TANI <RADEN>",
    "alamat": "LUMBAN BATU",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SUPIR <MANGUN>",
    "alamat": "PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PT BANK RAKYAT INDONESIA <PERSERO>",
    "alamat": "JL PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "CV ASIDO STAR (DERMAWAN)",
    "alamat": "JL DR FL LUMBANTOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SD NEGERI 20 SIPIRA",
    "alamat": "JUNJUNGAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "DAUD MULIA CV",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "TOKO EMAS HARAHAP",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SD N SIGAOL S IMBOLON",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "WARUNG MAKAN MINUM <HOTNIDA>",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PAUD FRANSISKUS",
    "alamat": "JALAN LINTAS SAMOSIR DESA CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "KANTOR POS MOGANG",
    "alamat": "JALAN RAYA OGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "TOKO MAS SURABAYA",
    "alamat": "JL PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "ECERAN PUPUK (ANTONIUS)",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "GILBERT PERMATA",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TRANSPORTASI <WAHYUDIN>",
    "alamat": "SIARUNG ARUNG",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <TIBAL>",
    "alamat": "SOSOR GANDA PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TRANSPORTASI BECAK <ROBIN>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SALON KECANTIKAN DELI (WANTI)",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RAJA NAEK BROTHERS CV",
    "alamat": "SITANGGANG BAU DSN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "DEPOT AIR <JALAKMAN>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <SAUDUR>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "UD VALENTINA (ROMAULI)",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SEKOLAH TK",
    "alamat": "PASTORAN PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "CV. PINTALAN GROUP",
    "alamat": "AEK LIANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "PEMBORONG <ELON>",
    "alamat": "SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "PANTUN JAYA CV",
    "alamat": "SILINJUAN AEK SIPITU DAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SD NEGERI NO 6 HARIARA POHAN",
    "alamat": "DESA HARIARA POHAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "TUKANG BECAK <TOGU>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "SMK NEGERI HARIAN 1",
    "alamat": "KOMPLEK SMK NEGERI I HARIAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "SOUVENIR SHOP <EVEDINA>",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "KM HARIAN TRASPOT NAINGGOLAN",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "TAMIANG CV",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "UNIT BRI LIMBONG",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "KOPERASI KARYA MARSIURUPAN PALIPI",
    "alamat": "SOSOR NAINGGOLAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "PENJUAL BAHAN BANGUNAN <HORAS>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "MERLYN GUST HOUSE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PAUD GEMBI RA",
    "alamat": "JL TANAH LAPANG AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <RINDANG>",
    "alamat": "PELABUHAN PARIWISATA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "USAHA JET SKI <POLDO>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JOH SURYA MAKMUR CV",
    "alamat": "PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "JUAL GAS",
    "alamat": "SIAUGA",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "AKOMODASI ANGKUTAN <LUKMAN>",
    "alamat": "ONAN SIBAGANDING",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "BECAK MOTOR <RAMSES>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "UD SINAR RAYA",
    "alamat": "JL KOLONEL LIBERTY MALAU PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO MARULAK",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "CU DAME",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <BUNGHOT>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "LEKJON COTTAGES",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RUMAH MAKAN MARIHOT",
    "alamat": "SIMPANG 4 DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PEDAGANG PENGUMPUL <UD INDRA>",
    "alamat": "PANANGGANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "PERSEWAAN JET SKY <AUGUS>",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "KILANG PADI <MUARA>",
    "alamat": "SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "PAUD CLARET ONAN RUNGGU",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "SOPIR ANGKUTAN <GORDON>",
    "alamat": "MALAU TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENARIK BECAK <ADAR>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUAL OBAT <RICAT>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KOPERASI HUTA TINGGI",
    "alamat": "KOMPLEK SD HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "TOKO OBAT <DOSROHA>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "KASIH, CV",
    "alamat": "JL TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "ANGKUTAN KAPAL TORANG",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "HAPPY UD",
    "alamat": "J L DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GITA ULI CONTAGE",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "BECAK MOTOR <SAUT>",
    "alamat": "TANO HUDON",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "MENJUAL ATK <SAMOSIR JAYA>",
    "alamat": "KOMPLEK HKBP NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PENGINAPAN SINAR SAMOSIR",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PT Pos Indonesia Nainggolan",
    "alamat": "JL. MERDEKA NO. 4 NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "KILANG PADI",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "PAUD GUNUNG HERMON <HAMONANGAN>",
    "alamat": "HARIARAPINTU DUSUN 3 PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MANOGER MINYAK",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "PLN BOHO",
    "alamat": "DUSUN 2 DESA BOHO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "KILANG PADI <HIRAS>",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KANTOR NOTARIS <MARLON>",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BRI UNIT AMBARITA",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "KAPAL MOTOR (DORULI)",
    "alamat": "PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "GROSIR S.S",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SHAEK MUAL CV",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "BONA SIALLAGAN CV",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SUPIR ANGKOT <GUNTUR>",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "POS INDONESIA KANTOR CABANG AMBARITA, PT",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "MARINA COTTAGE, PT",
    "alamat": "JALAN TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "BARBARA GUEST HOUSE",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "ANGKUTAN KAPAL DOSROHA",
    "alamat": "JALAN PELABUHAN",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "YAYASAN S A NUSANTARA",
    "alamat": "JALAN KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO OBAT (NASIONAL)",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "MUAL NATIO, CV",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "AEK TINJO CAHAYA CV",
    "alamat": "JALAN BARU SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "INDAH TAYLOR",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PANDU MITRA MOTOR, CV",
    "alamat": "JL FL TOBING pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO FOTOCOPY <ROBET/CAHAYA>",
    "alamat": "JL DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "POS PERHUBUNGAN",
    "alamat": "PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SAROHA.CU",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SERVICE MOBIL HOTASI CV",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SAMARTA PONSEL",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "LOIS, CV",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PARSINTAULIKARYA.PT",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "CV VALDES",
    "alamat": "ONAN LAMA PANGURURAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "MARIPPOLA, CV",
    "alamat": "JALAN SIMANINDO PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "NEW GLOBAL KOPERASI",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KM NAINGGOLAN I",
    "alamat": "LORONG 2",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "JTS HOTEL",
    "alamat": "BONA BONA DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "NIRMA, UD",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "HORAS JAYA, ud",
    "alamat": "JL DI PANJAITAN NO 91 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PALITO AUTO SERVICE",
    "alamat": "JALAN DR FL LUMBANTOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOTEL TIGA BESAR",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NASIONAL MARKET <LAMBOK>",
    "alamat": "JL KOLONEL LIBERTY",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CAROLINA COTTAGE",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BRATA NET, UD",
    "alamat": "JALAN BARU SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TOKO ABC MAS ATK",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEKOLAH TK SANTO MIKHAEL",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEKOLAH LANJUTAN TINGKAT PERTAMA ADVENT",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "PAUD VAN WI RO",
    "alamat": "AEKNAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "POLINDES KEMBANG 1001",
    "alamat": "HUTA HOTANG",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "JASA ANGKUTAN AKOMODASI BECAK (HENRO)",
    "alamat": "DUSUN 2 DESA BOHO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "INDAH TAYLOR",
    "alamat": "KOMPLEK SMA NEGERI 1 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PERSEWAAN KIOS <ROHANDI>",
    "alamat": "PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "POLINDES KELURAHAN PASAR",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO SISKA",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "CINTA KAWAN 2 <MANATAN>",
    "alamat": "IM.LANDRFITOB.ING I",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KOPERASI GURU SMP N 1",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PAUD GRACE PAKPAHAN",
    "alamat": "PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "JOSUA IN HOTEL",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CREDIT UNION ABADI",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "TANJUNG GAS UD",
    "alamat": "JALAN HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HENDRA GLOBE",
    "alamat": "SIMPANG 4 DUSUN 3 PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "JUAL PECAH BELAH <IDA>",
    "alamat": "JLN SIMANINDO DSN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "BPJS KESEHATAN",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SAHAT TUA, UD",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "TOURIST INFORMATION <JHON>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PENGUMPUL HASIL BUMI (BARITA)",
    "alamat": "SITANGGANG BAU DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SAMOSIR RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "HORAS FAMILY HOME",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SEKOLAH MENENGAH PERTAMA N 1 RONGGURNIHUTA",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PAUD SYLVATARI",
    "alamat": "JL DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SD NEGERI 23 URAT II",
    "alamat": "URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "SD NEGERI 21 HASINGGAAN",
    "alamat": "DUSUN PINAL DESA HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "AMURA KARATEDO <HOLMES>",
    "alamat": "SIGURGUR",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KOPERASI DNS KESEHATAN",
    "alamat": "PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "HOTEL DAINANG",
    "alamat": "JALAN SAGALA AEK RAN GAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SD N 23 SIOGUNGOGUNG (ALTUR)",
    "alamat": "SIOGUNGOGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ORLANDO, UD",
    "alamat": "JL KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERSEWAAN ALAT MUSIK (MARBUN)",
    "alamat": "JL KAMENTE DUSUN I SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "PUSKESMAS MOGANG",
    "alamat": "JL PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "APOTIK BERSAMA PARMA",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BATU PORPOR PANORAMA NAULI",
    "alamat": "JALAN AEK RANGAT BATU PORPOR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "KOPERASI STM SMK N 1",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "HMH, UD",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL ONLINE BAJU <IDA>",
    "alamat": "JLN SIMANINDO DSN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TABO COTTAGE",
    "alamat": "JL LINGKAR TUKTUK SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SD NEGERI 12 HUTA GINJANG",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "MENYEWAKAN MOBIL ANGKUTAN <DOMPAK>",
    "alamat": "SI IGAR IGAR PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ANGKUTAN PENUMPANG <TOGA>",
    "alamat": "LUMBAN BULU",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "PUSKESMAS LIMBONG",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "TOKO KELONTONG RAJAGUKGUK",
    "alamat": "KOMPLEK INPRES",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SAMOSIR VILLA RESORT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "AC MILAN, UD",
    "alamat": "JL DI PANDJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RADIO SAMOSIR GREEN",
    "alamat": "BUNTU PANGALOAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "TK MAS RINGO",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KOPI <SILALAHI>",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SAHABAT, UD",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PDAM DESA SIALLAGAN",
    "alamat": "BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "CU katolik palipi",
    "alamat": "PASTORAN PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "UD BOHO",
    "alamat": "JL KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO DAGVALTO",
    "alamat": "JL D I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL SEMBAKO (HERMAN)",
    "alamat": "PASAR SIANJUR MULAMUL A",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "PUSTU HARIARAPINTU",
    "alamat": "HARIARAPINTU DUSUN 3 PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "WARUNG NEKAD <ROBY>",
    "alamat": "JALAN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SD N 11 SIPARMAHAN",
    "alamat": "SIPARMAHAN DUSUN 1",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "PAUD BINA KASIH",
    "alamat": "DESA PASARAN I",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "DIPPOS WATER ISI ULANG <ROBERT>",
    "alamat": "JL TELE SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BAWA BECAK <SORJANI>",
    "alamat": "SITANGGANG BAU DSN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "HOTEL WISATA",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PUSKESMAS RONGGURNIHUTA",
    "alamat": "LUMBAN MALAU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "POSKESDES HARIAN",
    "alamat": "DESA SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "HOMESTAYHUTATINGGI",
    "alamat": "DESA LUMBAN BAGAS",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "CU MARSIURUPAN ONAN RUNGGU",
    "alamat": "JALAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PAUD MARSADA",
    "alamat": "LUMBAN SIMBOLON DUSUN II",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "PAUD DESA SIPARMAHAN",
    "alamat": "LONDUT DESA SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "AGEN BRILINK <RIZKY>",
    "alamat": "ONAN RUNG GU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "ASPEKINDO",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PEDAGANG PAKAIAN <RONALD>",
    "alamat": "PASAR TRADISIONAL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TENUN <ROINIM>",
    "alamat": "LUMBAN TONGA TONGA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PArMAN ARTA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GUNA PHOTO <GUALLAN>",
    "alamat": "JL TANAH LAPANG PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BENGKEL LAS SINAGA",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PAUD DOSROHA",
    "alamat": "RONGGUR SIHOTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "CHRISTINE TOYS, UD",
    "alamat": "JL KOLONEL LIBERTY",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KB MATAHARI",
    "alamat": "AEK LIANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "MUSEUM HUTA BOLON",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "RUMAH MAKAN <SIMALANGO>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Warung MIE GORENG <MIDA>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "OBJEK DESA WISATA SIGALE GALE",
    "alamat": "JL. MAKAM RAJA SIDABUTAR",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "USAHA JET SKY <LASTON SIALLAGAN>",
    "alamat": "JL. LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA JET SKY <ROBET MANIK>",
    "alamat": "JL. LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA JET SKY <OKIE MANURUNG>",
    "alamat": "JL. LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HORAS SUGARI HOMESTAY RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HOTEL HOLONG MARSANGAP",
    "alamat": "DESA HUTANAMORA PANGIURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PENGINAPAN EDIYS DAYANTO",
    "alamat": "JL. AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "HOTEL GORAT",
    "alamat": "JL. RINGROAD SAMOSIR KEC PALIPI GORAT PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "PENGINAPAN SOLO",
    "alamat": "DESA HUTA BOLON PARBABA KEC.PANGURURAN KAB.SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "MARISKA PENGINAPAN",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RAMOS INN",
    "alamat": "DUSUN 2 SIMPANG SOSOR NANGKA DESA DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "DUMASARI HOTEL",
    "alamat": "JL. RING ROAD TUK-TUK  KELURAHAN TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HOTEL ANUGERAH",
    "alamat": "DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "MRW HOMESTAY",
    "alamat": "SIMANINDO PANGURURAN KM 10 GG PRIMA HOTEL",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "ROYAL TOBA inn",
    "alamat": "BESAR TOMOK DESA TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "JEGEES LASSIO",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "UPTD Kebun Raya Samosir dan Arboretum Aek Natonang",
    "alamat": "Jalan Raya Tomok Onan Runggu Desa Tanjungan Kecamatan Simanindo Kode Pos 22395",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BUKIT/GUNUNG SIPATUNGAN",
    "alamat": "SIPATUNGAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "BLESS HOMESTAY",
    "alamat": "PARBABA SIMARAEK",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "HOTEL WISATA",
    "alamat": "SIMPANG BUNDARAN PASAR PANGURURAN/ JL KEJAKSAAN 42",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HOTEL AEK RANGAT",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "wisata PANTAI PASIR PUTIH PANDUA",
    "alamat": "JL. OP. TARA TUNGGAL NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SOPO GURU TATEA BULAN",
    "alamat": "SIANJUR MULAMULA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "BATU SAWAN",
    "alamat": "BATU SAWAN PARIK SABUNGAN DUSUN 3 DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "AIR TERJUN HADABUAN NAISOGOP",
    "alamat": "SOSSOK DUSUN 1 SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "VANTAS HOTEL",
    "alamat": "SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "DERMAGA JETTY",
    "alamat": "DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "LEMBAGA ADAT DALIHAN NATOLU OMPU BATU GINJANG RAJA SIALLAGAN",
    "alamat": "BATU PARSIDANGAN HUTA SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "P3A HOLBUNG",
    "alamat": "PEGE-PEGE",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "BERKAT",
    "alamat": "JALAN D.I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KELOMPOK TANI SITOLU HUTA",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BORU HASIAN NAULI",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ROGANDA MULTI JAYA",
    "alamat": "JLN RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "HONGKONG MANDIRI",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KARYA UTAMA",
    "alamat": "BINANGARON",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "BERJAYA MULTI KREATIF",
    "alamat": "LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PARBABA",
    "alamat": "SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) SIDAURUK SIHOLE",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "MADUMA SURYA PERDANA, PT",
    "alamat": "JALAN DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "PALITO",
    "alamat": "JALAN DR F.L. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "P3A SEJATI",
    "alamat": "DI DESA HARIARAPOHAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "TRIMITRA BANEARA",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SOPOTOBA ENERGI INDONESIA",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "KOPERASI PRODUSEN SAMOSIR MANDIRI SEJAHTERA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "P3A MARTABE",
    "alamat": "SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "KELOMPOK TANI SIRIAON",
    "alamat": "PARDOMUAN SIBUTAR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "KELEMBAGAAN TEKNOPARK SAMOSIR",
    "alamat": "JALAN RAYA RIANIATE KM 5,5",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SINAR SAHABAT",
    "alamat": "PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KELOMPOK TANI HUTAN <MARSADA ROHA>",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "LGS",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "toko panglong (BOY ALDO SINAGA)",
    "alamat": "dusun LUMBAN HARIARA",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "GLOBAL SARANA SERVICES",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KELOMPOK TANI MADUMA RIANIATE",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ASIDO STAR HOTEL",
    "alamat": "JL. FERDINAN L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SMP SWASTA BUDI MULIA",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PATIO JAYA",
    "alamat": "LUMBAN SIRIHIT",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "BUMDES HUTA GINJANG DOSNIROHA",
    "alamat": "DESA HUTAGINJANG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BAJA SILO",
    "alamat": "LUMBAN SILO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KELOMPOK TANI MARSIURUPAN",
    "alamat": "TURPUK LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "REJEKI SUMBER JAYA",
    "alamat": "JL.KEJAKSAAN NO.33 RT. 000 RW. 000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ANUGERAH",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "HORAS BALIAN SIDABUTAR",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "KELOMPOK TANI SUKA TANI",
    "alamat": "DS SIHUSAPI",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KELOMPOK TANI SAROHA SIAMBALO",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "KELOMPOK TANI HASADAON",
    "alamat": "SARIMARIHIT",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SUMBER KARYA SAKTI",
    "alamat": "DESA SITAMIANG LAPOGANJANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "SIGURGUR BEACH",
    "alamat": "JALAN RAYA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "SIPAKKAR BROTHER",
    "alamat": "LUMBAN SITUMORANG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HOTEL AMBAROBA RESORT",
    "alamat": "JALAN TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KELOMPOK TANI NAMORA TANI II",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PATRICIA RAMBU, CV",
    "alamat": "SABASABA",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "HOLY KIDS",
    "alamat": "BOTI-BOTI DUSUN II (DUA) SIMANAMPANG",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "SANTU PETRUS",
    "alamat": "DESA URAT TIMUR RT.000 RW.000",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "NARODO",
    "alamat": "HUTAGALUNG PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "GADING MULIA",
    "alamat": "HUTA DOLOK MARTAHAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "PEDULI BANGSA",
    "alamat": "KOMP PERKANTORAN PARBABA DINAS PERUMAHAN RAKYAT",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "HASIANNA",
    "alamat": "JALAN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MANGASA",
    "alamat": "SIGURUNG-GURUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "GLENN SMART",
    "alamat": "SIMARMATA RT.0 RW.0",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KELOMPOK TANI SIPADI",
    "alamat": "TURPUK LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "KB TABERNAKEL",
    "alamat": "RAUT BOSI",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "DHITARI",
    "alamat": "JALAN SIAEK MUAL",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN (KOBER) BERKAT KASIH",
    "alamat": "HUTA SOSOR",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "HUBOL'S",
    "alamat": "HUTA BOLON",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "KELOMPOK TANI GABE",
    "alamat": "JANJIMARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "SITORU ARGA",
    "alamat": "SITURU RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BUNGA TANJUNG",
    "alamat": "JL SM. RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KELOMPOK TANI MARSIURUPAN",
    "alamat": "DS JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "RIZKY ATMA MULYA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "KELOMPOK TANI DOSROHA BUNTU PASIR",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "TAPAR MANDIRI SEJAHTERA",
    "alamat": "JLN.RAYA TANJUNGAN DUSUN SOSOR DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "TAMAN BACAAN MASYARAKAT",
    "alamat": "JL. RAYA RIANIATE KM 5,7",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "12 BERSAUDARA",
    "alamat": "JALAN PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DEXA TAMA CONSULTANT",
    "alamat": "DESA BOHO PANGGUL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "NAGA STAR",
    "alamat": "JALAN JAMBU",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "AGATA INTI MULIA",
    "alamat": "KOMP. PERKANTORAN PARBABAB",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KELOMPOK TANI NAMORA TANI I",
    "alamat": "LINTAS SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "DEBATARAJA SOLUTION",
    "alamat": "JL. RONGGUR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOBASTA",
    "alamat": "DR. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SWADAYA MASYARAKAT PEMBELA KEMERDEKAAN RAKYAT PAKAR",
    "alamat": "JL. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "CITRA SAUR",
    "alamat": "JL. PELABUHAN NO. 16 KOMPLEKS POLSEK AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SMP SWASTA BULUGOK",
    "alamat": "LINTONGNIHUTA",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "TAPIAN PARSUANGAN",
    "alamat": "JALAN SIUMPAT",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR ( P3A ) SITONUNG-TONUNG",
    "alamat": "HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "BUMDES SABULAN",
    "alamat": "JL.LINGKAR LUAR DANAU TOBA",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "KINANTI JAYA",
    "alamat": "JALAN LUMBAN SIHOLE",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "ALFA PRIMADANI  ANUGRAH",
    "alamat": "KOMPLEKS PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KARUNIA PUTERI SEJATI",
    "alamat": "DR. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MITRA SINAR HUBAN",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TRIANGULA PARBABA KORIDOR",
    "alamat": "JL RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "GERAKAN PRAMUKA KWARTIR CABANG SAMOSIR",
    "alamat": "RAYA RIANIATE KM 5,5 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "P3A PAGAR BATU",
    "alamat": "URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "FERASER",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "MISI",
    "alamat": "KOMPLEKS PERKANTORAN DINAS PARIWISATA SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "DNS",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARIANNA RESORT",
    "alamat": "JL. PUD",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JASA MANDIRI KONSTRUKSI",
    "alamat": "SIAHAAN BAGASAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TORGAN BALALAIKA",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "AGUNG PERKASA",
    "alamat": "JL. SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SAHABAT DAKWAH PEDULI MUSLIM DAERAH SAMOSIR",
    "alamat": "DESA HARIARA POHAN KEC. HARIAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "BUMDES MUAL SITARSA",
    "alamat": "DS SALAON DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "GARUDA NUSANTARA",
    "alamat": "JL. SIMANINDO (DINAS PEKERJAAN UMUM)",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "NABILA",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "ORLANDO TUNGGAL PUTRA",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "MIDO",
    "alamat": "JALAN HUTA LUMBAN TARUAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "PEGEHEYSHA",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BINTANG JAYA",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "LOZITECH UTAMA",
    "alamat": "JALAN PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "PULO SAMOSIR NAULI, PT",
    "alamat": "JL. SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB KARYA KASIH",
    "alamat": "Desa Tambun Sukkean",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "BINTANG FAJAR LESTARI",
    "alamat": "DESA SARI MARIHIT",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TANGGA BATU",
    "alamat": "DESA PARHORASAN",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "GANDA TUA PRIMA",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PUTRA NOFRIST",
    "alamat": "KOMP. PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "SILUMBALUMBA BINTANG SEMPURNA",
    "alamat": "AN DINAS PU SAMOSIR JALAN RINIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "YAYASAN PENDIDIKAN TUNAS JAYA AMBARITA",
    "alamat": "ASPOL NOMOR 1",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "CALISTA PUTRI MANDIRI",
    "alamat": "KOMPLEK PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TOHAP SASNADER BERSAUDARA",
    "alamat": "JALAN LINTAS DOLOKSANGGUL - SIDIKALANG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "JEEGEES LASSIO",
    "alamat": "JL. AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "GUNUNG TABOR",
    "alamat": "JALAN DINAS PU KAB SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "KB GIHON",
    "alamat": "SIAMBALO, HUTANAMORA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "DMANIX MULTI KARYA",
    "alamat": "JLN PANDULANGAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KARYA BENTENG PERKASA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "MARIA TERANG",
    "alamat": "DINAS PEKERJAAN UMUM SAMOSIR, JL.SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "BUMDES BOHO NAULI",
    "alamat": "JL RAYA TRANS TELE",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "TAMBUN",
    "alamat": "JL. PELABUHAN ONAN BARU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROREZKI",
    "alamat": "DINAS PENDIDIKAN SAMOSIR KOMP. PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "BUMDES HAROAN NAULI",
    "alamat": "DS SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TAO TOBA NAULI",
    "alamat": "JALAN DESA PARSAORAN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "CEVREITTA KENCANA",
    "alamat": "DESA SOSOR  NAINGGOLAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "MEDIA INDONESIA",
    "alamat": "KOMPLEKS PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "ROREZKI",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAMJAYA MANDIRI",
    "alamat": "DOLOK MARTAHAN",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "KB TUNAS MAJU",
    "alamat": "JALAN RINGROAD SAMOSIR",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "MIDO ARTHA SARI",
    "alamat": "JL. NAHUM SITUMORANG, PEMBANGUNAN PASAR RAKYAT",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GAPEKSINDO HUTAMA KONTRINDO",
    "alamat": "JALAN SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TAMAN KANAK-KANAK MIRACLE",
    "alamat": "SIMPANG TUKTUK PANGALOAN",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "REZKY DHIA ELEKTRINDO",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "HIMPUNAN PEMUDA PEKERJA PENGUSAHA PARBABA SEKITARNYA (HP4S)",
    "alamat": "PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "RHEMA ABADI",
    "alamat": "JALAN ADRIANUS SINAGA (DINAS KESEHATAN SAMOSIR)",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "GALINDO INTI PERSADA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PUTRA NUSANTARA ABADI",
    "alamat": "DESA PANGAMBATAN",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) MARLAMBOK ROHA",
    "alamat": "DESA SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "KELOMPOK PEMBUDIDAYA IKAN (POKDAKAN) RAP TARULI",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ZARA KEMILAU",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "LINTAS ASAHAN MULTIMEDIA",
    "alamat": "JALAN DR HADRIANUS",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ALAHTA",
    "alamat": "DS SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "SANGGAR SENI BUDAYA TOBA ART'S KABUPATEN SAMOSIR",
    "alamat": "JALAN DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENDIDIKAN ANAK USIA DINI (PAUD) GEMBIRA",
    "alamat": "JALAN LAPANGAN BOLA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PUTERA TANDARABUN JAYA, CV",
    "alamat": "TANDA RABUN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RO REZEKI",
    "alamat": "NAHOMPUL",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "PUSAKA AGUNG JAYAKARYA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "BUMDES SEMPURNA",
    "alamat": "KANTOR DESA LAMA DUSUN III",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "VICPA",
    "alamat": "JALAN SIMANINDO DESA SIANTING-ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PARSAORAN MEMBANGUN",
    "alamat": "JALAN RAYA RIANATE KM 5,5",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "HAFIZ PRATAMA",
    "alamat": "KOMPLEKS PERKANTORAN PARBABA DESA SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "DUTA UNGGUL SARANA",
    "alamat": "DESA TAMBUN SUNGKEAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "RAKSA CIPTA SENTOSA",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "HOLONG NI ROHA",
    "alamat": 0,
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "KELOMPOK TANI MARSIURUPAN",
    "alamat": "DUSUN I BONAN DOLOK",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "RALIS DWI PUTRI",
    "alamat": "JALAN KOMPLEK PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SOPOHITA",
    "alamat": "JLN.DR.FL.TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KELOMPOK TANI SUBUR TANI",
    "alamat": "PASARAN PARSAORAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "ORLANDO TUNGGAL PUTRA",
    "alamat": "DESA LUMBAN SIRIHIT",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "TIBU JAYA",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "MANEL STAR",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "DRAGON WEST",
    "alamat": "DESA HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "DATAR",
    "alamat": "JALAN SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "SAMOSIR SKY",
    "alamat": "JALAN TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "SOADUON JAYA",
    "alamat": "JALAN RINGROAD TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "ALIRAN HIDUP JAYA",
    "alamat": "DS PASARAN PARSAORAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN RATU ROSARI",
    "alamat": "DUSUN SIPOLLUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "SANGGAR SENI BUDAYA MAWAR KASIH",
    "alamat": "JL. TUKTUK ONAN TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "DAME CIPTA MANDIRI",
    "alamat": "JALAN KOMPLEKS PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "DODY TRISTAN ATHALAYA",
    "alamat": "DESA PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) DAERAH IRIGASI SIDEAK",
    "alamat": "DESA SIDEAK",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "SIPINGGAN MITRA JAYA (SMJ)",
    "alamat": "JALAN PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "KB AYAHANDA",
    "alamat": "JANJI MATOGU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "RACHEL MANDIRI",
    "alamat": "JL TOMOK-PANGURURAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "DITO RAJA SEJAHTERA",
    "alamat": "JL. SIMANINDO, SIANTINGANTING",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "REQUEL HFS",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PUTRA LUMBAN PEA",
    "alamat": "JALAN DUSUN BATU-BATU",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "NAGA TANI",
    "alamat": "PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "GLOBAL NUSANTARA",
    "alamat": "DS SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "TAKETAMA",
    "alamat": "JLN.PEMATANG SIANTAR KM.2 LUMBAN ATAS TAMPUBOLON, BALIGE",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN TERANG",
    "alamat": "DUSUN 1",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "HABINSARAN",
    "alamat": "JALAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "TRYA LUMBAN LINTONG,PT",
    "alamat": "JALAN PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN SITOBU KID'S",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "ROULI",
    "alamat": "JL. DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LUMBAN",
    "alamat": "JALAN OP RAJA NAULI",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "cv SOSOR TIKKA NAULI",
    "alamat": "DESA SIBONOR OMPURATUS RT.00 RW.00",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "TRI HENRY",
    "alamat": "JALAN DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KARYA VANY KONSTRUKSI",
    "alamat": "JALAN SOSOR I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JORDAN",
    "alamat": "JALAN DOLOK SANGGUL SIDIKALANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "JUARA MARTHALENTA PRAKARSA",
    "alamat": "JALAN D. I. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MUARA KASIH",
    "alamat": "JL RIANIATE DINAS PU SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ADHI BINA PERSADA",
    "alamat": "JL. HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "BANGUN KREATIFITAS NUSAKARYA",
    "alamat": "JALAN RAYA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "SAMOSIR KASIH SINERGI",
    "alamat": "JLN LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HANURAMA",
    "alamat": "JALAN LUMBAN LOBU-LOBU",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "MARADEK JAYA",
    "alamat": "JALAN D.I.PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RENDO ABADI",
    "alamat": "JALAN PELABUHAN ONAN RUNGGU DUSUN I",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "DORULI",
    "alamat": "JL LUMBAN HOLBUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "KELOMPOK TANI MARTUMBUR",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "ARISTA",
    "alamat": "DESA TURPUK LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "BENJAMIN TONGAM",
    "alamat": "JL.TANAH LAPANG RT.0 RW.0",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ERA KARYA JAYA",
    "alamat": "DUSUN SOSOR PANGGABEAN",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "MURNI JUPITA",
    "alamat": "JALAN KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SARDOSAHATTUA",
    "alamat": "JL.BESAR PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "DAGVALTO",
    "alamat": "JALAN RAYA SIMPANG SMA N 2 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SINAR CAHAYA ANUGRAH",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PUTRA ABADI KARYA",
    "alamat": "JL. SISINGAMANGARAJA NO. 6 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "NAROTAMA SUKSES MANDIRI",
    "alamat": "KOMPLEKS PERKANTORAN PARBABA PANGURURAN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PAUD HONEY KIDS",
    "alamat": "SIALLAGAN PINDA RAYA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) HAIRI GORAT",
    "alamat": "GORAT",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "JASA MANDIRI BERSAMA",
    "alamat": "OPPU RATUS",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "RIANBOH",
    "alamat": "JALAN SIHUSAPI",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PARIS TUA",
    "alamat": "DUSUN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SAPLYN",
    "alamat": "JL. TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KB MELATI",
    "alamat": "SINAGA URUK PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "CV.TUJUH BERSAMA",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PANTUN JAYA",
    "alamat": "JALAN SOSOR SILINJUANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PERMATA INDAH",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BETARIANDI",
    "alamat": "PASARAN PARSAORAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "CATERINE LEWALEN ABADI",
    "alamat": "SIGALINGGING",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BERMAIN KELOMPOK",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "LOIS CO-CA ABADI, PT",
    "alamat": "JALAN KOI LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEMANGAT",
    "alamat": "DESA SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PURBA BERSAUDARA",
    "alamat": "RONGGUR NIHUTA RT.0 RW.0",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "P3A DOSROHA",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "JOY LESTARY",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "SASTA JAYA MULIA, CV",
    "alamat": "DR.FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GOLANG MAS",
    "alamat": "DS SIANJUR MULA MULA",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "HASIAN BINTANG PERSADA",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MORCO",
    "alamat": "RONGGUR NIHUTA RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB TUNAS BANGSA JUNJUNGAN",
    "alamat": "DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SUBUR RUMAH MIDUK",
    "alamat": "JALAN DESA PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SEJAHTERA UTAMA",
    "alamat": "JALAN PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BUHASARI",
    "alamat": "JL USKUP SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BIRAMOS CONSULTANT",
    "alamat": "KOMPLEKS PERKANTORAN DINAS TARUKIM K&P SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SUMBER ENERGY",
    "alamat": "DINAS TARUKIM K&P",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TAHI SUMURUNG",
    "alamat": "JALAN TANAH LAPANG NO. 41 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DAME PINTU BATU NAULI",
    "alamat": "JL. DR. HADRIANUS SINAGA HANDANG HUDA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TIMBAS",
    "alamat": "JALAN HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "CASA DI MANURUNG",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SAMUEL PUTRA HUBOLS",
    "alamat": "JL.HUTABOLON RT.000 RW.000",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "CV. TRUST (rikson sitanggang)",
    "alamat": "JALAN RAYA PALIPI-MOGANG",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "AGATHA MANDIRI KONSTRUKSI",
    "alamat": "DESA PARHORASAN",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "KB TALITAKUM",
    "alamat": "JALAN RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "ANGGI COTTAGE, CV",
    "alamat": "PEA KOMPLEK JALAN GEREJA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TUMPAK",
    "alamat": "JALAN USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAROHA SEVEN BROTHERS",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "GABE MAKMUR UTAMA",
    "alamat": "JALAN HUTA GALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MORA DOLOK",
    "alamat": "AIR PANAS RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TAMIANG",
    "alamat": "JALAN SINAGA URUK II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "JOSUA",
    "alamat": "SABULAN RT.000 RW.000",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "LSM CINTA DAMAI",
    "alamat": "SINAGA URUK",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "R O N N Y",
    "alamat": "JALAN BESAR DESA URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "INDAH MIKANA",
    "alamat": "JALAN DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PARHOMBANAN",
    "alamat": "JALAN SOSOR I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "ALUS",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RAJA SONDANG SIMARMATA",
    "alamat": "JALAN BESAR SIMANINDO KM 6.5",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ABANG ADEK GROUP",
    "alamat": "JALAN HUTA GALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KB PELANGI INDAH",
    "alamat": "PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "LEWIS PEA ABADI",
    "alamat": "JALAN NASIONAL SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "PAUD TERPADU RAJAWALI",
    "alamat": "DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TULUS ANDIKA SAPUTRA TAMBA",
    "alamat": "JALAN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "RODEARNI",
    "alamat": "JL. DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ANJU MANGASI",
    "alamat": "JALAN DR. F. LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARTUNAS NAULI",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PANALAKSAK",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB GLOBAL KIDS",
    "alamat": "DUSUN II",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "MARSIOLOAN",
    "alamat": "URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "ROLAND",
    "alamat": "JALAN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "CAHAYA AURORA",
    "alamat": "JL.RAYA RINGROOD",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "ARIBE DIDIDA",
    "alamat": "JALAN KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "FOKPMAS",
    "alamat": "SIMBOLON PANAHATAN RT.000 RW.000",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "LOIS",
    "alamat": "JALAN KOLONEL LIBERRTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) DAERAH IRIGASI SUALAN",
    "alamat": "SILIMAPULU",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "HOTTIS JAYA PERSADA",
    "alamat": "JALAN JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "SURIA",
    "alamat": "DS HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "HARA",
    "alamat": "DS LIMBONG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KELOMPOK TANI MAWAR",
    "alamat": "JL.RAUT BOSI",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) SIGUMBANG",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "HITA DO HITA",
    "alamat": "JALAN BESAR SIMANINDO KM 6.5",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TRIRAMA AGUNG",
    "alamat": "JALAN SIDALU-DALU",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HAIRI ARTHA UTAMA",
    "alamat": "JL.HAIRI NO.01",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "YAYASAN RAJA PANUALANG SIDAURUK",
    "alamat": "DS HUTABOLON",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "ROMA ULI",
    "alamat": "JL. KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "cv VOLTAMAS",
    "alamat": "JL. RAYA LINGKAR SAMOSIR RT.00 RW.00",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "LAMRO TIO",
    "alamat": "JALAN SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MITRA PRIMA GRAHA",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "KELOMPOK PEMBUDIDAYA IKAN (POKDAKAN) DOSROHA",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PANDU INTERNATIONAL",
    "alamat": "LINGKAR",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PARTAI HATI NURANI RAKYAT",
    "alamat": "SIMANINDO KM I",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PENDIDIKAN ANAK USIA DINI (PAUD) ANAK CERDAS",
    "alamat": "DESA SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN (KOBER) BINTANG MARLUMBA",
    "alamat": "DESA MARLUMBA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MIGAVIA",
    "alamat": "SIGURUNG-GURUNG DUSUN I",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "KB SEJAHTERA",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "KB FLOWERS",
    "alamat": "DESA SALAON TONGA-TONGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "KELOMPOK USAHA BERSAMA (KUB) SAROHA",
    "alamat": "DESA HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "ROSARINA",
    "alamat": "SITALAMETANG RT.0 RW.0",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "GOR",
    "alamat": "GORAT DUSUN III",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "kb MAWAR MEKAR",
    "alamat": "DUSUN III PARRAUAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "KB HELLO KIDS",
    "alamat": "DS JANJIRAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "PAUD BINA KASIH",
    "alamat": "DOLOK MARTAHAN",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "KB IMMANUEL",
    "alamat": "DS HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "TAKE TAMA GRUP",
    "alamat": "JALAN RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PAUD TERPADU BUNDA MARIA",
    "alamat": "DUSUN III HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "KARYA BONGGAR",
    "alamat": "DESA PARSAORAN",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "P3A SATAHI",
    "alamat": "KANTOR DESA SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "SMA SWASTA ADVENT SIMBOLON",
    "alamat": "JL BESAR PALIPI RT.0 RW.0",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "KASIH KIDS",
    "alamat": "SIBARA-BARA JALAN JANJI TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "ALIRAN HIDUP",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "LEMBAGA PENDIDIKAN LITTLE EINSTEIN",
    "alamat": "KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DAINANG TRANS TRAVEL",
    "alamat": "JALAN PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOGURO, CV",
    "alamat": "DESA PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "KB Ekklesia Victory",
    "alamat": "DS LOBU TUA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "KB JANJI MATOGU",
    "alamat": "MARIA RAJA",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "LEMBAGA PENDIDIKAN AGAPE KIDS",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KB BERKAT",
    "alamat": "DESA SINAGA URUK PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "SEPAKAT",
    "alamat": "LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "GOLAN GRAFIKA",
    "alamat": "JL.FL TOBING ,PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BONA JATI MUTIARA",
    "alamat": "JALAN SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "CURAHAN BATU GUNUNG",
    "alamat": "JALAN DESA SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "DUMA SARI",
    "alamat": "DESA TUK-TUK SONAK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "NEW RO MIAN ARTHA, CV",
    "alamat": "JALAN PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "THEO PUTRA PARDOMUAN",
    "alamat": "DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KB ANGEL GONTING",
    "alamat": "DUSUN GONTING",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "P3A RAP TAMA",
    "alamat": "JLN LUMBAN GAMBIRI DUSUN III",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "PAUD MASRIDA",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "DOSROHA JEEGEES HABONARAN",
    "alamat": "DESA PUSUK BUHIT TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "BERKAT ANUGERAH",
    "alamat": "PANGALOAN DUSUN II",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "KELOMPOK TANI MAKMUR JAYA",
    "alamat": "JL.PELABUHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "BUKIT AMBALA INDAH",
    "alamat": "SITAMIANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "KB Bina Iman HKBP Hatoguan",
    "alamat": "JALAN SAORNAULI HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "KELOMPOK TANI TARULI",
    "alamat": "TURPUK LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "LINTONG MANDIRI",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "SEHAT TANI",
    "alamat": "PARMONANGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "PAUD BETARIA",
    "alamat": "SIBATU BATU RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PAUD VIA SOFIA",
    "alamat": "DUSUN II",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "CAROLINA COTTAGE",
    "alamat": "JL  CAROLINA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARUDUT ROREJEKI",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "SANOP KREASI",
    "alamat": "JALAN RONGGURNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KB JANJI MARIA",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "LINTONG",
    "alamat": "JALAN DR. F.L. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DAINANG",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MARTOGI",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PEDULI BALITA INDONESIA",
    "alamat": "JALAN RAJAWALI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KB SAYANG ANAK SAMOSIR",
    "alamat": "DS SIBONOR OMPURATUS",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "PERMATA SABUNGAN",
    "alamat": "JALAN SIMANINDO PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "RUMON'S, UD",
    "alamat": "HARIAN BOHO, TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PANGIHUTAN JAYA",
    "alamat": "JALAN JANJI MARIA SITIOTIO",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SIMALUNGUN ENGINEERING PERKASA",
    "alamat": "KOMPLEK PERKANTORAN DESA SIOPAT SOSOR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KELOMPOK TANI PARDAMEAN PINTUBATU",
    "alamat": "PINTUBATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "MERDI SIHOMBING",
    "alamat": "LUMBAN NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "P3A USAHA TANI",
    "alamat": "PARHUSIP III",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "PEDRO DBS",
    "alamat": "HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) D.I SIGULUAN",
    "alamat": "SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "PERKUMPULAN PUSAT STUDI GEOPARK INDONESIA",
    "alamat": "DESA LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "DPD PPDI KABUPATEN SAMOSIR",
    "alamat": "HUTA BARU DUSUN II, DESA LUMBAN SUHI SUHI TORUAN KECAMATAN PANGURURAN KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "REYHAN GEMILANG",
    "alamat": "LIMBONG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PASADA UTAMA",
    "alamat": "JALAN DIPONEGORO 170 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB BINA KASIH",
    "alamat": "DESA PASARAN I",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "P3A SIBALUHAT",
    "alamat": 0,
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "KELOMPOK TANI RAP HITA",
    "alamat": "DESA SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "KELOMPOK TANI KARYA SUBUR JAYA",
    "alamat": "PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "LIDANG COY",
    "alamat": "BANGUN PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "PUTRA SALEH ANUGERAH",
    "alamat": "JALAN SIPULO-PULO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "KELOMPOK SEPAKAT",
    "alamat": "SINGKAM, DESA SINGKAM, KECAMATAN SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Singkam"
  },
  {
    "nama_usaha": "KELOMPOK TANI MITRA BERMAKNA",
    "alamat": "DESA SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "YAYASAN BONA HASAPI SITAMIANG OPERA BATAK",
    "alamat": "DESA TAMIANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "KELOMPOK TANI SAURMA",
    "alamat": "JANJI NAULI",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "LUMBAN PANDE",
    "alamat": "JALAN SIANJUR MULA-MULA DUSUN SITANGKAREAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PENDIDIKAN ANAK USIA DINI (PAUD) IMMANUEL KID'S",
    "alamat": "GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "SITOBU JAYA, CV",
    "alamat": "JALAN PASAR SITOBU NO. 1 RT.00 RW.00",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "MARTOBA SOLU BOLON CLUB",
    "alamat": "DUSUN HOLANG HOLANG",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "PORLAK PARSAMEAN",
    "alamat": "SOSOR BOLAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "MIDUK, cv",
    "alamat": "JL PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "APOTEK RIANIATE",
    "alamat": "JALAN RAYA RIANIATE KM 5.5",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "SAURDOT. CV",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SIARANG-ARANG",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PUTRA PEALAGE",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "MULA KONSTRUKSI",
    "alamat": "JALAN F.L. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "toko BUDIMAN",
    "alamat": "JL. DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KASIH",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MARTUNAS DOA GENERASI",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "KELOMPOK TANI PRIMA JAYA",
    "alamat": "DESA MADUMA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MEDAN HOPE NUSANTARA",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SINAR BARU",
    "alamat": "PUTRI LOPIAN RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LASRO PERMATA",
    "alamat": "SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "NIRMAYANTO GROUP",
    "alamat": "JALAN DR F.L. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FRANSDILO",
    "alamat": "JALAN RAYA SIMBOLON KM 10",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "PRATAMA INTI KOMPUTER",
    "alamat": "jl kolonel liberty malau",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SIAGA SENADA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "BOY MAS",
    "alamat": "JALAN SM RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JOH SURYA MAKMUR",
    "alamat": "JALAN SMU NEGERI 1 PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "SUBUR SITANGGANG",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "88 MART",
    "alamat": "DS SIMARAEK DUSUN II",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LEMBAGA PENGEMBANGAN TILAWATIL QUR'AN (LPTQ) KAB. SMAOSIR",
    "alamat": "JL. RAYA RIANIATE KM 5,5 (KANTOR KEMENTERIAN AGAMA)",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "LAMS",
    "alamat": "JALAN TERMINAL PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TAMARA GITABASTANTA",
    "alamat": "JL HORAS TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SARTIKA S",
    "alamat": "JL. RAYA NO.15 RT.000 RW.000",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KARYA PARHORASAN",
    "alamat": "JL. PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "GLADYS",
    "alamat": "JL. NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RAYA JAYA TANI",
    "alamat": "JALAN PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SWADAYA MASYARAKAT (LSM) PIKIRAN RAKYAT",
    "alamat": "DS II AMBARITA RT.0 RW.0",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "KELOMPOK TANI DOLOK MARGUNA",
    "alamat": "DESA MADUMA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KB VAN WIRO",
    "alamat": "AEK NAULI RT. 000 RW. 000",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "KB TERANG II",
    "alamat": "PANGUMPATAN",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "KELOMPOK TANI SADA NI ROHA DANG LUPA",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU SAWAN",
    "alamat": "JALAN TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "BUMDESMA KAWASAN PERDESAAN PANTAI PASIR PUTIH PARBABA",
    "alamat": "JL PINTU I PASIR PUTIH PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "KELOMPOK TANI DOSTANI",
    "alamat": "BONAN DOLOK",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KELOMPOK TANI TUMPANG SARI",
    "alamat": "JALAN SANTU PETRUS URAT",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "KELOMPOK TANI SAUDURAN",
    "alamat": "BATU-BATU SITABO-TABO",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "ANAK TAO",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KELOMPOK TANI SAURDOT",
    "alamat": "DS SAMPUR TOBA",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "DOSTAHI SUKSES JAYA",
    "alamat": "D.I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KB SOLI DEO HKBP",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "PANIARAN NAULI NALAGU",
    "alamat": "JALAN LAGUNDI, HUDA MARIA DUSUN 2, DESA ONAN RUNGGU, ONAN RUNGGU, SAMOSIR",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "KELOMPOK TANI SATOLOP",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN LORENZA",
    "alamat": "DESA SALAON TOBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "CIPTA LESTARI UTAMA",
    "alamat": "LUMBAN SIHOMBING",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "KB SABULAN KIDS",
    "alamat": "ONAN SIBAGANDING",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "PUTRA",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KELOMPOK TANI SAIT NIHUTA",
    "alamat": "DESA SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "TAMAN KANAK-KANAK (TK) RAJAWALI",
    "alamat": "JALAN DR HANDRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BONA SAUR, CV",
    "alamat": "JL. RAYA TOMOK PANGURURAN HUTA TOLPING RT.000 RW.000",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TIGA PUTRA BERSAUDARA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "KELOMPOK USAHA BERSAMA (KUB) MARSIANJUAN",
    "alamat": "PASARAN PARSAORAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "TK JEREMIA KIDS",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "KB ASIDO",
    "alamat": "DESA SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "MARULI TUA",
    "alamat": "DS MOGANG",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "KB SMART KIDS",
    "alamat": "DESA PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "KB SIPANGKO",
    "alamat": "JL.SIPAKKO",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "KELOMPOK TANI SINUR GABE",
    "alamat": "DUSUN II PANANGINANGIAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "SIMPAN PINJAM KARYA SAROHA SIARSAM",
    "alamat": "DS HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "SAMSIDAR COY",
    "alamat": "DESA ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "KB AYU ARTA",
    "alamat": "PASAR DAME",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "KB SION KIDS",
    "alamat": "JL. TOMOK LONTUNG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "BERKAT TONER 7",
    "alamat": "JL. DOKTOR HADRIANUS SINAGA RT. 00 RW. 00",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KOPERASI SIMPAN PINJAM MANDIRI RAKYAT SAMOSIR, CV",
    "alamat": "JL. SIMPANG TAMBA, DESA SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KB CERDAS",
    "alamat": "JL. TOMOK LONTUNG",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "KB BINA KASIH",
    "alamat": "RANSANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "YAYASAN PENDIDIKAN KEVIKEPAN ST.THOMAS RASUL",
    "alamat": "TUKTUK ONAN RT. 000 RW. 000",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "LINGKAR DANAU TOBA INSTITUTE",
    "alamat": "PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "HORIS JAYA MANDIRI, CV",
    "alamat": "DESA GAROGA RT. 000 RW. 000",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PEGAWAI REPUBLIK INDONESIA AMAL KASIH",
    "alamat": "JL. RAYA RIANIATE KOMPLEKS KANTOR BUPATI RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "MADUMA",
    "alamat": "SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "ALIRAN HIDUP",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TIMBUL SIRINGORINGO",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "TANDARABUN JAYA",
    "alamat": "SIDOLONDOLON",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "YAYASAN AMAZING AREA GROUP",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "POSBAKUMADIN SAMOSIR",
    "alamat": "JL. KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "VIKARIAT EPISKOPAL ST. THOMAS RASUL PANGURURAN SAMOSIR",
    "alamat": "JALAN PASAR PANGURURAN RT.0 RW.0",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN SITOBU KID'S",
    "alamat": "SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PARSAORAN",
    "alamat": "JALAN KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KELOMPOK TANI MELATI",
    "alamat": "DUSUN III",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "RAJA NA TANG",
    "alamat": "JALAN RIANIATE SIMP.GEREJA KATOLIK SANTO FRANSISKUS ASISI RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "GIRO GROUP",
    "alamat": "DESA HUTAGINJANG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "BONTOR PARULIAN",
    "alamat": "JL RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR P3A GINOLAT",
    "alamat": "DESA GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "POLTEN SINAR AGATHA",
    "alamat": "JALAN DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RUDI HARTONO SITUNGKIR",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SAMOSIR NAULI BERKAT",
    "alamat": "JALAN RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "KELOMPOK TANI HUTAN <SATAHI SAOLOAN>",
    "alamat": "PINAGAR",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "MANOTI JAYA MAKMUR",
    "alamat": "JALAN PELAJAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "SIHOL MARITO",
    "alamat": "DSN SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "LEMBAGA PENDIDIKAN HARAPAN RAYA",
    "alamat": "LINTONGNIHUTA",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KELOMPOK USAHA BERSAMA SENTOSA",
    "alamat": "LUMBAN HOLBUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "RIDHO PRATAMA",
    "alamat": "KOMPLEK PERKANTORAN DESA SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PT BANK PEMBANGUNAN DAERAH SUMATERA UTARA",
    "alamat": "JL. SISINGAMANGARAJA NO.53",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KOPERASI SIMPAN PINJAM PERSATUAN WREDATAMA REPUBLIK INDONESIA, CV",
    "alamat": "JL DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RAJA PAMUNGKAS",
    "alamat": "DSN LUMBAN JABI-JABI",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "ROJAYA MANDIRI",
    "alamat": "JALAN DR F. L. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PURNA KARYA",
    "alamat": "JALAN NAHUM SITUMORANG NO. 5",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PERGURUAN KATOLIK ST. LAURENSIUS",
    "alamat": "JALAN SLTP RK BINTANG SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "PERMATA HIJAU GASINDO",
    "alamat": "JALAN BATU NAPAL",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "RANDOS JG",
    "alamat": "DUSUN III PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN ANAGKAZO",
    "alamat": "ONAN RIHIT",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "CV. LAMTORANG",
    "alamat": "JALAN ALNGIT",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "HONGKONG LAMGANDA",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KB ANGGREK BULAN",
    "alamat": "JL. SIJALU-JALU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "KB HOLONG",
    "alamat": "DS BONAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "RUMAH NABOLON",
    "alamat": "JALAN LIMBONG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PARTOPI DOLOK",
    "alamat": "JALAN PASAR SILENGGE",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "KELOMPOK TANI MARSIANJUAN",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "KB HEAVEN KIDS",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) D.I SISOGOT",
    "alamat": "SIMPANG PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KB SETIA",
    "alamat": "JL. DOLOK SANGGUL SIMPANG SMP N 3 HARIAN",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "WARREN RAJA, CV",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "MADIARTI, CV",
    "alamat": "SIANBALO",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SOLI JUNIOR",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "BATU BOLON",
    "alamat": "JALAN TELE",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "CHAMPION DANAU TOBA",
    "alamat": "SUKKEAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "PERMATA MANDIRI",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PUTRA RABOS GROUP, PT",
    "alamat": "RAUTBOSI",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "MUAL",
    "alamat": "JALAN SIMANINDO GUMBA DUSUN III",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KB VINI VIDI VICI",
    "alamat": "DESA PALIPI DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "BUMDES MARSADA DESA TANJUNGAN",
    "alamat": "JL RINGROAD SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KELOMPOK PEMBUDIDAYA IKAN (POKDAKAN) SIPINGGAN NAULI",
    "alamat": "JALAN MARIARAJA",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "DOGELIO ABADI",
    "alamat": "PARRAUAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "OLAND DITA",
    "alamat": "JALAN KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PAUD CERDAS",
    "alamat": "DESA PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "PAUD MATA TIMUR",
    "alamat": "PARHORASAN",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "KELOMPOK TANI SETIA KERJA",
    "alamat": "SIANJUR MULA MULA",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "HORAS HITA JAYA",
    "alamat": "SIMANINDO-SIRION-BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PERKUMPULAN PARSADAAN POMPARAN OMPU TUAN NABINUR, ANAK, BORU, BERE DAN IBEBERE SEDUNIA",
    "alamat": "RIANIATE LUMBAN NAIBAHO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "TK DOSROHA",
    "alamat": "RONGGURNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "IMELDA",
    "alamat": "JL HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "TUNAS MUDA",
    "alamat": "JALAN PEKAN ONAN BARU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "BADAN USAHA MILIK DESA GAROGA SEJAHTERA",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KLINIK PAULI",
    "alamat": "DESA PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "JNJ",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BIENVENIDOS AMIGOS",
    "alamat": "JL HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "POS PARIWISATA",
    "alamat": "F.L. TOBING 18 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CINTA MAJU",
    "alamat": "SITANDOBA",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "SIMPAN PINJAM CREDIT UNION PARSAORAN SIMBOLON",
    "alamat": "DESA SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KB HARAPAN RAYA",
    "alamat": "DS LINTONG NIHUTA",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "HAUMA SEJATINYA RASA",
    "alamat": "JL RAJAWALI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PANJI JAYA",
    "alamat": "JALAN HT GALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "ABC MAS",
    "alamat": "JALAN DR FERDINAN LUMBANTOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENDIDIKAN ANAK USIA DINI (PAUD) BONZAI",
    "alamat": "HUTABOLON RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "KONI KABUPATEN SAMOSIR",
    "alamat": "JL. DR FL TOBING NO.32 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KB KASIH BUNDA KIDS",
    "alamat": "DESA PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SMAK ST THOMAS RASUL SAMOSIR",
    "alamat": "JL. TARA BUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KELOMPOK TANI PARPASIR",
    "alamat": "DUSUN PARPASIR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "DIODA RENEWABLE ENERGY",
    "alamat": "JL. RAJAWALI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KELOMPOK TANI HUTAN TUSAM MANDIRI DOT COM",
    "alamat": "DESA SALAON DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "PAUD KASIH",
    "alamat": "TAMBADOLOK, IMPRES",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "KSP CREDIT UNION MARSIURUPAN SIMANINDO",
    "alamat": "JALAN SIRUNDI",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RAJA NAEK BROTHER",
    "alamat": "JL. SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PUTRA TAPIAN, CV",
    "alamat": "JL.TAPIAN NAULI DESA PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "INDAH MULA JAYA",
    "alamat": "PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KB INDAH",
    "alamat": "DUSUN 3",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "TAMAN PENITIPAN ANAK (TPA) SITOBU KIDS",
    "alamat": "JALAN SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "TORANG MANDIRI",
    "alamat": "JALAN RAYA PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "SOLO TAILOR",
    "alamat": "JALAN TERMINAL (TERMINAL)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BINTANG TERANG KONSULINDO",
    "alamat": "DINAS TARUKIM K&P",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "NEWS 2010",
    "alamat": "LINTONG NIHUTA RT.0 RW.0",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PAUD PEDULI RAKYAT",
    "alamat": "BATU BOLON RT.0 RW.0",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "ARGHA GRACIA SAROHA, CV",
    "alamat": "JL. RAYA RIANIATE RT. --- RW. ---",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "NAGA MC 2001",
    "alamat": "JALAN PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TEAM CORE CONSULTANT",
    "alamat": "LUMBAN SIHOLE AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SABAR SINAGA",
    "alamat": "DUSUN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "VARO MORADO GUL",
    "alamat": "JALAN GEREJA NOMOR 55",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TRYA, CV",
    "alamat": "JALAN SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "RAPIMA",
    "alamat": "JL. SIMANINDO DESA SIANTING-ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "INDONESIAN CORRUPTION WATCH SUMATERA UTARA",
    "alamat": "JL RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SINDANG JAYA",
    "alamat": "JALAN RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KB GUMBA",
    "alamat": "DESA TOGUAN GALUNG",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "CAHAYA PETRUS",
    "alamat": "JALAN PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MUAL ASI JAYA UTAMA",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "SOSOR SITIO-TIO",
    "alamat": "DS HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "SAMOSIR JAYAMULIA GASINDO",
    "alamat": "DESA MARTOBA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN (KB). SABULAN KIDS",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "LAMTAMA JAYA KONSTRUKSI, CV",
    "alamat": "JUNGAK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PAROHON",
    "alamat": "JL. DR. HADRIANUS SINAGA KM 55 DESA SISANGKIL",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "EDUKASI JULIANUS  MAEMUNAH",
    "alamat": "JALAN RAJAWALI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI AIR (P3A) PARHORASAN",
    "alamat": "KANTOR DESA SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "YAYASAN BAHANA SEJAHTERA BANGSA",
    "alamat": "DUSUN SITALAMETANG DUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PAUD MATAHARI",
    "alamat": "AEK LIANG RT.000 RW.000",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "SAMOSIR JAYA",
    "alamat": "JALAN PARLUATAN LORONG III",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "ATHALIA JURO",
    "alamat": "JL HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "AEK RAJA",
    "alamat": "SIHOLI-HOLI",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "LEMBAGA TURPUK BONA NI DOLOK",
    "alamat": "JL. AIR PANAS",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PAROMPUAN NAULI",
    "alamat": "KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SUMBER KASIH SEJAHTERA",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SYARIF MAJU KARYA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "KB BONA PASOGIT",
    "alamat": "DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SANGGAR SENI BUDAYA PARSAORAN NAULI",
    "alamat": "JL. SIUPAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "REH KENA SILANGIT",
    "alamat": "JALAN DR.HANDRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "P3A PARDOMUAN OR",
    "alamat": "DESA PARDOMUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "PT SUMATERA HARAPAN NIAGA",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "PAUD EFFRATA",
    "alamat": "DESA SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "BOIMA PARNA JAYA",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "P3A SAROHA",
    "alamat": "DUSUN III SIMANAMPANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "ARTA BERSAMA",
    "alamat": "DS PINTUSONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KELOMPOK TANI SATAHI SAOLOAN",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "PAUD PARADISO",
    "alamat": "PARLUASAN RT. 000 RW. 000",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "P3A SUMBER SEJAHTERA",
    "alamat": "JALAN BONAN DOLOK DUSUN I",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "P3A PALIPI",
    "alamat": "SOSOR NAINGGOLAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "TRI PUTRA JAYA",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "TAMAN PENITIPAN ANAK (TPA) RAJAWALI",
    "alamat": "JALAN DR HANDRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PAUD TERANG",
    "alamat": "TANJUNGAN RT.0 RW.0",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "KELOMPOK TANI MANTAB",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "GORGA DUMA SARI",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "YATRAINDO CONSULTANT",
    "alamat": "DINAS PEKERJAAN UMUM KAB. SAMOSIR - JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "SIHOTANG JAYA",
    "alamat": "JALAN DR HARDIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "URAT RAYA MANDIRI",
    "alamat": "DESA URAT TIMUR",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "P3A SIPINGGAN LUMBANSIANTAR",
    "alamat": "SIPINGGAN LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "TK VICTORY KIDS",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "TAMBA ENGINEER CONSTRUCTION, CV",
    "alamat": "DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KELOMPOK TANI SEDERHANA",
    "alamat": "TURPUK MALAU",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "CIPTA KARYA SAMOSIR",
    "alamat": "SIOGUNG OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "AJITO NAULI GROUP",
    "alamat": "PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "LEMBAGA RAJA BAJUR SINAGA SIGURIGURI SIHILOHILO",
    "alamat": "SIGURI GURI",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "SIBIO-BIO",
    "alamat": "JALAN RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FELICIA",
    "alamat": "DS SIHUSAPI",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HALOMOAN",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KELOMPOK PEMBUDIDAYA IKAN RAP IKAHA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "NINNA SUARA TOROP",
    "alamat": "GANG BERSAMA NOMOR : 3 HUTA BONABONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KELOMPOK TANI SANDANG PANGAN",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "BEGABE, CV",
    "alamat": "JL HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TAPANULI MANDIRI",
    "alamat": "JL. TANAH PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "DMO RECORD",
    "alamat": "LUMBAN TONGA-TONGA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "SUCI APRILIA",
    "alamat": "JL. SIMANINDO 8 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PERKUMPULAN IKATAN DOKTER INDONESIA",
    "alamat": "JL SIMANINDO KM 2 BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "MELIANA",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MALONA TOTAMA",
    "alamat": "SIBUTAR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "LEMBAGA PENDIDIKAN KURSUS SETIA ROHANA",
    "alamat": "JL.DR.FL.TOBING RT. 000 RW. 000",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NARODO BASA NAULI",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PUTRI GREACE",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ALBERTA MEDIASARANA BONAPASOGIT, CV",
    "alamat": "JALAN PUSUK BUHIT NOMOR 9 TANO PONGGOL LINGKUNGAN I",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "HARA ITO",
    "alamat": "JALAN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "SMP SWASTA HKBP AMBARITA",
    "alamat": "JL. RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PARBUNBUNAN",
    "alamat": "JL. GEREJA NO. 14 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MUAL ASI JAYA BARU",
    "alamat": "HUTA GALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PAUD HKBP LIMBONG",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "KELOMPOK TANI BANTENG",
    "alamat": "DS PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "KELOMPOK TANI SABAR",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "LORENZO",
    "alamat": "JL.TOMOK LONTUNG",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ALVARO",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "BANGUN JAYA",
    "alamat": "BANGUN PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "PERDANA KARYA",
    "alamat": "JL. DI. PANJAITAN NO. 88 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RIMMA ALDO S",
    "alamat": "JALAN SIDIKALANG, HUTAGALUNG HARIAN",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MARTUA RONA ULI",
    "alamat": "DESA RUMAH HOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SAROHA JAYA",
    "alamat": "JALAN NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SIAEKMUAL",
    "alamat": "DESA PARSAORAN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PKBM KARYA MURNI",
    "alamat": "DESA LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "DOLOK MARTAHAN, cv",
    "alamat": "JALAN PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "THERESA CONSULTANT",
    "alamat": "JL. RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "P3A GENERASI",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "KELOMPOK TANI GENERASI",
    "alamat": "HUTA BAGAS",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "RIZAL GLEN MOSES",
    "alamat": "JALAN TANAH LAPANG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BINTANG GENERASI INTERNASIONAL",
    "alamat": "JL. RONGGUR NIHUTA, DUSUN I PARLIMUTAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "KB ANAK NI RAJA",
    "alamat": "SINABULAN RT.0 RW.0",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "SURYA BINTANG",
    "alamat": "JALAN SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ASIDO",
    "alamat": "JL. DR. F LUMBANTOBING RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SIBIGO AMBORA",
    "alamat": "JALAN HANDRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TELE PERMATA",
    "alamat": "JALAN TELE",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "GLOBAL INDO PASOGIT",
    "alamat": "JALAN DESA PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KB HARIARA PINTU",
    "alamat": "JL. SIDIKALANG-DOLOKSANGGUL, HARIAN PINTU",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "BONGGAS HABANGSA",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "toko panglong <ROTAMA NATIAR>",
    "alamat": "DUSUN LUMBANBARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "FORUM BATAK INTELEKTUAL",
    "alamat": "JALAN PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "EMORA ENERGI TOMOK RAYA",
    "alamat": "JALAN RAYA TOMOK KOMPLEK PELABUHAN FERRY",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "KOPERASI SIMPAN PINJAM MITRA SAMOSIR CIPTA PERDANA (MSCP)",
    "alamat": "SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "DIGO JAYA",
    "alamat": "DESA URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "RAMOS MANDIRI",
    "alamat": "DINAS PU KABUPATEN SAMOSIR, SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PARRIHIT BROTHER'S",
    "alamat": "LUMBAN SARIHIT",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "SIDIHONI BANGUN JAYA",
    "alamat": "SISIMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "GIBRAN",
    "alamat": "JALAN DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SUNGGAL JAYA PERKASA",
    "alamat": "BANJAR SIANTAR",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "PODASARI",
    "alamat": "GORAT DUSUN III",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "OSAKA",
    "alamat": "DSN TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "JOGIRAMA BATU PERKASA",
    "alamat": "JALAN DOLOK SANGGUL - SIDIKALANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SINAR ELGA SMART",
    "alamat": "JALAN DS SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "RISCO",
    "alamat": "DUSUN HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "DAGVALTO",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROLASMA",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "PRIMA",
    "alamat": "SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "RNN",
    "alamat": "LUMBAN SANGKALAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "STEVEN SARAH",
    "alamat": "AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "UNEDO, CV",
    "alamat": "JL TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PAGAR BATU",
    "alamat": "JALAN PAGAR BATU",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SANGGAR SENI BUDAYA SARI ULI SAMOSIR",
    "alamat": "SALAON TOBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "PARLINDUNGAN NAULI",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "LOUIS",
    "alamat": "JALAN DESA TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "UPAHODA",
    "alamat": "DESA UPAHODA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "VANCHA",
    "alamat": "SIRUMA HOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "MENANTI VARIASI",
    "alamat": "JL. DR. HADRIANUS",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROGATE BEACH",
    "alamat": "JL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) TARULI",
    "alamat": "TURPUK LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "TPA SERGIO JAYA",
    "alamat": "JALAN RIANI ATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ADHIKARYA TEKNIK PERKASA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "UNGGUL PERDANA MULYA",
    "alamat": "PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KELOMPOK TANI MADUMA",
    "alamat": "DESA BONAN DOLOK",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "P3A AEK MATIO",
    "alamat": "DUSUN 1 TURPUK MALAU",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "PARTAKKE",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MASRO",
    "alamat": "SOSOR MANGADAR",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "MANATAP",
    "alamat": "JALAN DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ROBASA KIDS",
    "alamat": "SI AEK AEK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "PERKUMPULAN PETANI PEMAKAI AIR (P3A) HUTA URAT HUTA BALIAN",
    "alamat": "HUTA URAT",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MANULLANG JAYA SERVICE",
    "alamat": "HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "FEBE PRODUCTION",
    "alamat": "JALAN RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BADAN USAHA MILIK DESA (BUMDES) DOSROHA",
    "alamat": "DS SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "KELOMPOK TANI",
    "alamat": "JL. HARIARA POHAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "KELOMPOK TANI ANGGREK",
    "alamat": "JL. SIDIKALANG-DOLOK SANGGUL DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KELOMPOK TANI BERKARYA",
    "alamat": "JALAN PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "PENDIDIKAN TUNAS HARAPAN",
    "alamat": "JALAN ASPOL",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "NADA KARYA BANGUN PERSADA",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "KELOMPOK USAHA BERSAMA (KUB) LANCANG KUNING",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "EDY JAYA",
    "alamat": "JALAN PASAR DAME",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "PKG CERI",
    "alamat": "LINTONG NIHUTA RT. 0 RW. 0",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "SIBARGOT NAULI",
    "alamat": "SALAON DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KELOMPOK TANI AEK MUAL",
    "alamat": "SINGKAM",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Singkam"
  },
  {
    "nama_usaha": "PULO SAMOSIR NAULI",
    "alamat": "JALAN SM RAJA NO 32",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RAGIEL JAYA",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "SUPERSTAR",
    "alamat": "TERUSAN PUSUK BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "NAGA BONAR",
    "alamat": "SINAGA URUK PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "MANGARERAK",
    "alamat": "JALAN PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "INTICOM",
    "alamat": "JL. USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CIPTA GABE",
    "alamat": "JALAN PARJONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "P3A ROMUAL",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "ADELIA IGNATA",
    "alamat": "JL. PUTRI LOPIAN NO  08",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FORUM KERUKUNAN UMAT BERAGAMA (FKUB) KAB. SAMOSIR",
    "alamat": "JL.AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MEGA MARS",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SAUR DO NAULI",
    "alamat": "JALAN SIALAPIT",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KARYA NAULI",
    "alamat": "DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERKUMPULAN NAHDLATUL ULAMA",
    "alamat": "JALAN DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HONGKONG",
    "alamat": "JALAN NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LEMBAGA SANGGAR PARUDE MUSIK BASADA",
    "alamat": "DUSUN 3 HUTABOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "BERE NI SIRINGORINGO",
    "alamat": "hatoguan-jalan ring road samosir",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "WISMA OMPU RIMDO",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "CHIKA NBH",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PAUD MADUMA",
    "alamat": "HABEAHAN NABURAHAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SINAR SAHABAT TARIHORAN",
    "alamat": "JALAN PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LEMBAGA BUDAYA BATAK SAMOSIR INDONESIA (LABASARI)",
    "alamat": "SIMANINDO KM. 1",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "HAHOMION",
    "alamat": "SIPULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "BINSAR JAYA",
    "alamat": "JL. KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LEMBAGA DESA ADAT MARLUGA",
    "alamat": "DUSUN III, LUMBAN NADEAK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "P3A TULPANG",
    "alamat": "PANGUMBILAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "LEMBAGA BUDAYA ADAT BATAK GABEMA",
    "alamat": "DUSUN III",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "CAPISTRANO",
    "alamat": "ONAN BARU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "PARADE NATAMA",
    "alamat": "GONTING",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "KARYA MANDIRI KONSTRUKSI",
    "alamat": "JL.RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "TIARA",
    "alamat": "SIMPANG TIGA",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "KELOMPOK TANI GRANOLA",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KELOMPOK TANI SUKA MAJU",
    "alamat": "DESA BONAN DOLOK",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SAMOSIR ANUGRAH",
    "alamat": "JL. SIMANINDO KM. 2 RT.000 RW.000",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "RADIO SAMOSIR GREEN FERTI",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "KELOMPOK TANI SAURDOT",
    "alamat": "SARI MARRIHIT",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KELOMPOK TANI PASORBA",
    "alamat": "PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MITRA PARHORASAN",
    "alamat": "JALAN PELABUHAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PARSADAAN POMPARAN RAJA SONANG SEDUNIA",
    "alamat": "PARDOMUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "OZORA",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "KRISTIAN MOTOR",
    "alamat": "JL. RAYA AMBARITA 29 RT.000 RW.000",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KELOMPOK TANI SEJATI",
    "alamat": "JL. SIDIKALANG-DOLOK SANGGUL DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PUTRI MUARA NABURJU",
    "alamat": "DSN SOSOR SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KELOMPOK TANI KARYA BERSAMA",
    "alamat": "SOSOR TALA DUSUN II",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "SITANGGOR NAULI",
    "alamat": "JALAN PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BALAI BENIH IKAN",
    "alamat": "DUSUN 2 SIGANJANGM DESA JANJI MARTAHAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PERTANIAN SEJAHTERA SAMOSIR,PT",
    "alamat": "DESA SIALANGUAN, KECAMATAN PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KELOMPOK TANI SITOLUHUTA",
    "alamat": "JL HADRIANUS SINAGA",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PENGGALIAN PASIR <MARTOGI>",
    "alamat": "PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR <TINORMA>",
    "alamat": "SIBABIAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR<ROBINSON>",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR<PARDOMUUAN>",
    "alamat": "SIBABIAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR<RUSMMULI>",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR <SADIMAN>",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR<YOSAFAT>",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR <MANGINAR>",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGGALIAN PASIR <LENI>",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "USAHA PENGGALIAN PASIR <AGNES>",
    "alamat": "PARHAPURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENGUMPUL BATU PADAS <SARIMPOL>",
    "alamat": "JALAN TELE PINDA",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "KILANG PADI <HOTMARIA>",
    "alamat": "AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PEMBUAT PETI MATI <ANTON>",
    "alamat": "DES A GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "KILANG PADI<KELOMPOK>",
    "alamat": "LBN BOHONG DUSUN 1",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "KILANG PADI <TORMAULI>",
    "alamat": "HUTA PARSAKTIAN",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "TUKANG JAHIT <RITA>",
    "alamat": "PASIR BUNTU MAULI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "TUKANG PERAHU <OLOAN>",
    "alamat": "RAPUSAN",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "KILANG PADI BERJALAN",
    "alamat": "SIARSAM DESA HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "PENDERES TUAK <GILBERT>",
    "alamat": "GILBERT",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "PENJUAL GORENGAN <DIANA>",
    "alamat": "JL ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "TUKANG LAS <SADARMA>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENDERES TUAK <RAMLAN>",
    "alamat": "GORAT",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "KILANG PADI <MARSELLUS>",
    "alamat": "SANGKAR NIHUTA",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENDERES TUAK <SARI>",
    "alamat": "SIBORONG BORONG",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENDERES TUAK <MANGARATUA>",
    "alamat": "GORAT",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "KILANG PADI <LAGUBOTI>",
    "alamat": "SITAHUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Rinabolak"
  },
  {
    "nama_usaha": "TUKANG JAHIT <LASTIAR>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PANDE BESI <TAMBUNAN>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "KILANG PADI SINUR",
    "alamat": "AEK NATONANG",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "TENUN ULOS <SIBOLANG>",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "TENUN ULOS <LAMHOT>",
    "alamat": "LUMBAN SIHOMBING DUSUN 3",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "INDUSTRI PENGOLAHAN BATU BATA <MASMAN>",
    "alamat": "LUMBAN BUNTU DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "TUKANG LAS<BEBAS>",
    "alamat": "SIMPANG TAMBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KILANG PADI <RICCAT>",
    "alamat": "IPANTIL DUS UN 2",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "INDUSTRI BATU BATA 1",
    "alamat": "SIAEK MUAL",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "BATU BATA <TIURMA>",
    "alamat": "SIULAK HOSA DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <PULO>",
    "alamat": "PAHODA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <JOSMAN>",
    "alamat": "SIMARHALIANG DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <USTAN>",
    "alamat": "PAHODA DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <APRISKO>",
    "alamat": "KAMENTE DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <PRIKDES>",
    "alamat": "SOSOR SILANGIT DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <KENAIR>",
    "alamat": "KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "TUKANG FOTO SITUMORANG <Ambang situmorang>",
    "alamat": "JL PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "PENJAHIT (SABAR)",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "KILANG PADI<SAUT>",
    "alamat": "PEA LINGGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "TUKANG JAHIT <LESTON>",
    "alamat": "JL.KANTOR CAMAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PEMBUAT PETI MATI <TAMMAT>",
    "alamat": "SIPULOPULO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "INDUSTRI BATU BATA <HOTLEN>",
    "alamat": "SIPULOPULO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR <VERO>",
    "alamat": "NABAHO URUK",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PAVING BLOK <NAKEL>",
    "alamat": "PARORING",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR<BERTA>",
    "alamat": "MALAU TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR <SONTA>",
    "alamat": "NADEAKTORUAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR<TIURMA>",
    "alamat": "SIMARO",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR <ROSMA>",
    "alamat": "SITANGGANG TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENYADAP TUAK<ROMMEL>",
    "alamat": "PASSUR PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "BENGKEL LAS  <JAN ERWIN>",
    "alamat": "PASSUR PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "TUKANG SOL SEPATU <MARIHOT>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU BATA <SUNARDI>",
    "alamat": "JALAN SIAMBALO PARADUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU BATA <TAGOR>",
    "alamat": "JALAN SIAMBALO PARADUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PENJUAL BUMBU <JALINTON>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU BATA <LUNGKI>",
    "alamat": "JALAN SIAMBALO PARADUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU BATA <BAKTIAR>",
    "alamat": "JALAN SIAMBALO PARADUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PENJAHIT PAKAIAN <MOSTER>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "RIZKY ART PRODUCTION",
    "alamat": "JL RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BENGKEL LAS",
    "alamat": "JL RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU BATA <ROSPITA>",
    "alamat": "BATU PURUN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "INDUSTRI BATU BATA <HOTDI>",
    "alamat": "BATU PURUN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATU BATA <KORES>",
    "alamat": "JL BATU PURUN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "SONA ART",
    "alamat": "JL.DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR",
    "alamat": "LUMBAN URUK",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SABLON DAN PERCETAKAN",
    "alamat": "NAGATIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TUKANG JAHIT SAKTI",
    "alamat": "LUMBAN TINGGIR",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR PANDAN",
    "alamat": "SOSOR HOLANG-HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENGUPAS KEMIRI <BERTA>",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MENJUAL GORENGAN<MELKY>",
    "alamat": "LUMBAN URUK",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TUKANG JAHIT <MANIK>",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENYADAP AREN<SIKKAT>",
    "alamat": "SIMANDEGE",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "INDUSTRI BATU BATA <SINURAT>",
    "alamat": "DESA HUTA TINGGI KEC PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA AIR MINUM <BISTOK>",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TUKANG JAHIT <SINAGA>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FLORA FLORIST <LETGIONO>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA KUE DONAT IBU DORLAN",
    "alamat": "IL USKUP AGUNG MEDAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HENDRA STIKER",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERDANA ETALASE",
    "alamat": "TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJAHIT UNI",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARS, UD",
    "alamat": "JL NAHUM SITUMORANG NO 98 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOUVITO TAYLOR",
    "alamat": "JL KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAIDA TAYLOR",
    "alamat": "KIOS NO 34 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DINAMO WAYAR SITUMORANG",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JAKDIS TAYLOR",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJAHITAN PAKAIAN <ELVI>",
    "alamat": "TERMINAL PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL BUMBU GILING <JUSTINA>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BRICK FLORIST",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PEMBUAT OPAK UBI <TERMINA>",
    "alamat": "SI MANAMPANG TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "FORTUNA GALERI",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TENUNAN ULOS <DENGSI>",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "OSBIN TAYLOR",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SUSU KEDELE MERLIN>",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG PATRI<NADEAK>",
    "alamat": "DUSUN 2TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "USAHA BUNDA PAPAN <RINTO>",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "DEKORASI PESTA <PAHALA>",
    "alamat": "JL PUSUK BUHIT DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TUKANG JAHIT<MAYA>",
    "alamat": "JALAN SIMANINDO NO 98",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "BERTENUN<TIOLO>",
    "alamat": "LUMBAN NAINGGOLAN DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "CETAK STEMPEL  <LAM>",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "JUAL GORENGAN <ESLI>",
    "alamat": "JALAN SIMANINDO SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "DISTRO BOS <DENMENRA>",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "BERTENUN ULOS <NUR>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "PENYADAP AREN <DAHLAN>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "PENYADAP AREN <JUDIMAN>",
    "alamat": "LUMBAN PINGDOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "TENUN ULOS <RAULINA>",
    "alamat": "PAMODILAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TENUN ULOS <REHULINA>",
    "alamat": "SILUNDAK",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PENGRAJIN TAMPI <JUANA>",
    "alamat": "AEK RIHIT",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PENGRAJIN TAMPI IMARULAKS",
    "alamat": "PEA TIKKO",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "TENUN ULOS <RILLIN>",
    "alamat": "BUNTU PANGALOAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "TENUN ULOS <DEWI>",
    "alamat": "LUMBAN SINURAT",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <HENTI>",
    "alamat": "BUNTU PANGALOAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "TENUN ULOS <MAGDA>",
    "alamat": "LUMBAN SINURAT",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "TENUN ULOS <RELITA>",
    "alamat": "BUNTU PANGALOAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "TENUN <PITARIA>",
    "alamat": "LUMBAN MALAU",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PENYADAP AREN",
    "alamat": "PARSOPOAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "TENUN <PORMAULI>",
    "alamat": "PARSOPOAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "TENUN <ROHANI>",
    "alamat": "LUMBAN PINASO",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "TENUN ULOS <ROSMAULI>",
    "alamat": "LBN TONGA TONGA DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <NURSAIDE>",
    "alamat": "LBN TONGA TONGA DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <BUNGASIH>",
    "alamat": "LBN NADEAK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <DORLA>",
    "alamat": "LBN DAGAL DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <DIANA S>",
    "alamat": "AEK BOLON DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <NURHAYATI S>",
    "alamat": "SIGIL LOMBU 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS<ANITA>",
    "alamat": "SIMARAEK",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PENJUALAN TEMPE <IRMA>",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "INDUSTRI MABLE<LAMBOK>",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "GABY FLORIST",
    "alamat": "BONA BONA DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "BERTENUN ULOS <SAHALA>",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "TUKANG JAHIT <ELVI>",
    "alamat": "DUSUN 2 LUMBAN PASIR",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "TENUN ULOS <ASLI>",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TENUN ULOS<MARNI>",
    "alamat": "LUMBAN GAOL",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TENUN ULOS <NURTA>",
    "alamat": "L BN SINURAT",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "PENGGERGAJI KAYU <BUE>",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TENUN ULOS <REMINTA>",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TENUN ULOS<LISTA S>",
    "alamat": "LBN LAIT LAIT DUSUN2",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TENUN ULOS<RUMIN S>",
    "alamat": "LBN BUNTU DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TENUN ULOS<MELINDA S>",
    "alamat": "BATU BOLON DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TENUN ULOS<RIOLO T>",
    "alamat": "LBN SINABARIBA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TENUN ULOS<PERONIKA S>",
    "alamat": "TALUN NABOLAK <DUSUN 2>",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TENUN ULOS <DEMI>",
    "alamat": "LUMBAN MANIK TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS<TIANUR>",
    "alamat": "ALNGIT LUMBAN SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <TIODOR>",
    "alamat": "DUSUN 2 LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <LASMAULI>",
    "alamat": "HUTARAJA DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <RIAMINTA>",
    "alamat": "DUSUN 2 LUMBAN SINABANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ATBM KASUKSAK <DEWI>",
    "alamat": "DUSUN 2 LUMBAN TONGATONGA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <ROHANI>",
    "alamat": "HUTARAJA DUSUN 2 PARDOMUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <TAPMARIA>",
    "alamat": "DUSUN 2 LUMBAN PASIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <RIANTI>",
    "alamat": "DUSUN 1 SITORANGNABOLON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <ODOR>",
    "alamat": "DUSUN 1 LUMBAN NAINGG OLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS < MEDIAN >",
    "alamat": "DUSUN 1 LUMBAN NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <RIAMA>",
    "alamat": "DUSUN 1 LUMBANHARIARA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <ANNA>",
    "alamat": "DUSUN 3 HUTADOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "USAHA UKIR <MARIANUS>",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "JUAL UMPAN <SARMOLINA>",
    "alamat": "KOMPLEK PELABUHAN LOPO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "PENJAHIT <RUSPITA>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGRAJIN SOUVENIR <TONI>",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "BENGKEL FURNITURE <RUDY>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "LOUIS WATER",
    "alamat": "JL LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "ROMA ART SHOP",
    "alamat": "JL LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "NDK TAILOR",
    "alamat": "JLN GREJA TUKTUK SI ADONG",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ANNE MIKE ART SHOP",
    "alamat": "JL LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MELIDA FLORIST",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA PERCETAKAN <AUGUS>",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA PAPAN BUNGA <AUGUS>",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "TUKANG LAS <OMSER>",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "USAHA MENJAHIT <LASTI>",
    "alamat": "SIPINGGAN",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "USAHA TENUN <KOSTARIA>",
    "alamat": "SIGUGUR TONGA TONGA",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "USAHA BENGKEL LAS <PARIS>",
    "alamat": "JL.TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "USAHA PAPAN BUNGA <GULTOM>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PENGRAJIN KAYU <TOGA>",
    "alamat": "SOUVENIRSHOP KAWASAN WISATA BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "BONGGAS SOUVENIR SHOP",
    "alamat": "SOUVENIR SHOP KAWASAN WISATA BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "PENGRAJIN KAYU <HENDRA>",
    "alamat": "HUTA PARHAPURAN",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "USAHA PAPAN BUNGA < ROMA >",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "USAHA PAPAN BUNGA <IAN >",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PENGANYAM TIKAR <ROLIA>",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA KERIPIK <RISTAULI>",
    "alamat": "SOSOR SIAHAAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MENJUAL GORENGAN K5 <SURYANI>",
    "alamat": "PARHAPURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA KUE AUREL",
    "alamat": "SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MC BAKERY",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DENNY TAYLOR",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL KUE <ANITA>",
    "alamat": "JALAN TELE SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TENUN ULOS <RISMA SITOHANG>",
    "alamat": "DUSUN 2 LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <KATARINA>",
    "alamat": "DUSUN 2 LUMBANHARIARA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS < ERISDA >",
    "alamat": "DUSUN 1 BINANGBORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "KILANG PADI BERJALAN <SINAGA>",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "OGY PUTRA PENJAHIT",
    "alamat": "HASAHATAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TENUN ULOS <KISDA >",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "LOKET PEMBAYARAN REKENING LISTRIK <HENRI>",
    "alamat": "JL PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "LOKET PEMBAYARAN LISTRIK <LASIMA>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "LOKET PEMBAYARAN REKENING LISTRIK ESTER",
    "alamat": "LUMBAN GAOL",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "AGEN PEMBAYARAN LISTRIK METERAN",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LOKET PEMBAYARAN PLN",
    "alamat": "JL D I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARCOPOLO ADVERTISING",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TRANSPORTASI AIR <RANBO>",
    "alamat": "RINITE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENYEDIA AIR BERSIH <SALMON>",
    "alamat": "DES A SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PEMBORONG <PASTI>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PEMBORONG<PURIDIN>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "BENGKEL LAS <PANDU>",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "KONSTRUKSI PERORANGAN <HETBIN>",
    "alamat": "HUTA HOTANG",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "INSTALASI LISTRIK <PARNINGOTAN>",
    "alamat": "SITOHANG DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "JASA INSTALASI LISTRIK <SAMSON>",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "INSTALASI LISTRIK",
    "alamat": "JL DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PEMASANGAN INSTALASI LISTRIK",
    "alamat": "SITANGGANG BAU DSN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TUKANG <PUNGUAN>",
    "alamat": "LUMBAN BARINGIN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TUKANG BANGUNAN <MARKUS>",
    "alamat": "SIBATU DUSUN I",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "PEMBORONG BANGUNAN <GANDA>",
    "alamat": "JLN LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PEMBORONG BANGUNAN <JUNI>",
    "alamat": "SOSOR MAMUNGKA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "JASA INSTALASI LISTRIK <RICARDO>",
    "alamat": "JL TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "PEDAGANG PISANG <DOSLEN>",
    "alamat": "JL. DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PEDAGANG PENGEPUL HASIL TANI <ROMANTO>",
    "alamat": "RAUT BOSI",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "JUAL BENSIN <JERMAN>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "JUAL IKAN ASIN <RUSMA>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <ROIHANTOR>",
    "alamat": "AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "JUAL GAS ELPIJI <DARWIN>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "BENGKEL MOTOR <JAMSER>",
    "alamat": "DESA SARIMARIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "PENGUMPUL DAN MENJUAL BERAS <ANITA NAINGGOLAN>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <SASTRA>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "PENGUMPUL BERAS <SARLINA>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "PENGUMPUL KOPI <LINDA>",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "KELONTONG<LESNI>",
    "alamat": "PANJAITAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "PENGUMPUL BERAS<LENNI>",
    "alamat": "SIBORO PANJAITAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "JUAL KAIN SOVENIR <DARNA>",
    "alamat": "MENARA PANDANG TELE DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "WARUNG <RENTI>",
    "alamat": "PAGAR BOLAK",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "PEDAGANG PENGUMPUL <PARIDA>",
    "alamat": "LUMBAN TONGA TONGA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "USAHA PERABOTAN RUMAH TANGGA <HOTJON>",
    "alamat": "HUTA SIMARMATA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "WARUNG MAKANAN <TIARMA>",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "TOKE KOPI <SAUDIN>",
    "alamat": "BAHAL",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "BENGKEL <ADARMAN>",
    "alamat": "LUMBAN PANDE",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <JENTINA>",
    "alamat": "AMBULASANGGE",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "JUAL BENSIN ECERAN <JUPPA>",
    "alamat": "HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "BENGKEL <PARULIAN>",
    "alamat": "SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "BENGKEL MOTOR <PARDO>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PEDAGANG BAJU <RAMLIANA>",
    "alamat": "PASAR ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PEDAGANG MIE <TUTI>",
    "alamat": "LOS PASAR ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PEDAGANG SAYUR <TIO>",
    "alamat": "JL PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <ROMA>",
    "alamat": "SIMPANG EMPAT ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO <NURDIN>",
    "alamat": "SIMOTUNG DUSUN I",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO <ALBON>",
    "alamat": "JUNGJUNGAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "jual JAJANAN KERUPUK <RUSTI>",
    "alamat": "SIBAGANDING",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "JUAL JAHE <TIMORLAN>",
    "alamat": "LUMBAN MARBUN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "BENGKEL SEPEDA MOTOR <NOFRI>",
    "alamat": "NASUMANDAR",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "PERDAGANGAN ECERAN SEMBAKO <DARWIN>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PEDAGANG ECERAN <SILAEN>",
    "alamat": "LOS PASAR",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "MENJUAL SEPATU DAN SANDAL <DELIANA>",
    "alamat": "LOS PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JUAL PAKAIAN JADI <RAIDIN>",
    "alamat": "LOS PASAR",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PEDAGANG IKAN ASIN <NURSALITA>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JUAL ULOS <MUTIARA>",
    "alamat": "LOS PASAR",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "MENJUAL ATK <HENDRA>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PENGUMPUL HASIL PERTANIAN <HEWIN>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PENGUMPUL HASIL TANI <SOLO>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PENGUMPUL HASIL TANI <JAPIN>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "TAMBAL BAN <BINDUARA LUMBANRAJA>",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "PEDAGANG SAYURAN KAKI LIMA <Delima purba>",
    "alamat": "LUMBAN GAOL DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "PENJUAL KERUPUK <HOT>",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "PEDAGANG TERNAK KERBAU EL MADAM",
    "alamat": "SINAGA URUK",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "toko rempah <OP DEBORA>",
    "alamat": "URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "MINYAK BENSIN ECERAN <ROSPITA>",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "KELONTONG <RAINIM>",
    "alamat": "LUMBAN SIHOMBING DUSUN 3",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "ECERAN KERUPUK <HAMONANGAN>",
    "alamat": "SIMPANG TAMBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "BENGKEL MOTOR<DANIEL>",
    "alamat": "SIAEK MUAK",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "TOKO OBAT<MARGANDA>",
    "alamat": "BARIBA BINAGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KELONTONG <JUSTAMA>",
    "alamat": "DUGUL SIGAOL SIMBOLON DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SPAREPART SEPEPA MOTOR <TOHOM>",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "BENGKEL MOTOR<DIRGAN>",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "PEDAGANG TUAK <BANTU>",
    "alamat": "KOBUN MANIK",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "WARUNG MAKANAN RINGAN <ERINA>",
    "alamat": "SIHUNIK",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "PENJUAL PAKAIAN MANULLANG <OLwin simanullang>",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "KIOS PUPUK DAN PESTISIDA LAMBAS <DARNA BR SITUMORANG>",
    "alamat": "TERMINAL MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "JUALAN KELONTONG",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "JUAL PAKAIAN HERNITA",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "JUAL BURJER BORU MARPAUNG",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "TOKO MAS (RAMLI)",
    "alamat": "JL PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "PEDAGANG PENGUMPUL HASIL PERTANIAN<SAUT>",
    "alamat": "PEA LINGGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "AGEN KOPI <SARIAMAN>",
    "alamat": "AEK LIANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "AGEN BIJI KOPI <PUNGUANA>",
    "alamat": "KOMPLEK SMP RONGGURNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "WARUNG JAJANAN ANAK ANAK <RESMI>",
    "alamat": "SIRIMBANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "WARUNG KERUPUK <MASLAN>",
    "alamat": "CENTRAL",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PENGECER IKAN<POLLO>",
    "alamat": "SITANGGANG TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENGECER KOPI <LUHUT>",
    "alamat": "BUTAR RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "MENJUAL ULOS<LUNDA>",
    "alamat": "MALAU TONGA TONGA",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TAMBAL BAN<WALMAN>",
    "alamat": "PARORING",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "WARUNG KERUPUK<NENNI>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PEDAGANG SAYUR <JAHOTLER>",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "KIOS SEMBAKO <SAMARIA>",
    "alamat": "JALAN SIAMBALO PARADUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BENGKEL NAIBAHO",
    "alamat": "JALAN DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "DAGANG KERBAU <JUANDA>",
    "alamat": "SOSOR SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KEDAI RABOL SIMBOLON",
    "alamat": "KOMPLEKS SMA NEGERI 1 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA MENJUAL BABI CELENG (DIRMANTO)",
    "alamat": "SIAEK MUAL",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MENJUAL SAYUR-SAYURAN <SINAGA>",
    "alamat": "LBN URUK",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "DOORSMER DAN TEMPEL BAN",
    "alamat": "HOLANG-HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "DAGANG JAGUNG <HERMIN>",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENJUAL PISANG <ROSMAIDA>",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENJUAL KERUPUK <ROMAIDA>",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <ANTONIUS>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA MENJUAL IKAN ASIN<MENTINA>",
    "alamat": "HUTA SILALAHI JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <MASDI SIMBOLON>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL ANAK BABI <SILALAHI>",
    "alamat": "HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SERVICE MOBIL BERSATU",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL IKAN JAHIR <SITUMORANG>",
    "alamat": "SIMONONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA DOORSMER <LAMLAM>",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AAN SERVICE MOTOR",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROSSARI COLLECTION",
    "alamat": "JL DI PANJAITAN pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG SITANGGANG",
    "alamat": "TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MENJUAL SATUR MATUR <RUDOLF>",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ECERAN SAYUR <JUWITA>",
    "alamat": "LOS PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ECERAN SAYUR<TIOLAM>",
    "alamat": "LOS PEKAN INPRES PANG URURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PERABOT <HELENA>",
    "alamat": "LOS PEKAN INPRES PANG U RURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KIOS TIKAR <KOLORIA>",
    "alamat": "KIOS NO 55 - 56 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PEDAGANG SAYUR <LISMAWATI>",
    "alamat": "KIOS NO 166 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SIMAMORA KAIN",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PAKAL AN <SIMAMORA>",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PERABOT RUMAH <TAGOR>",
    "alamat": "KIOS PEKAN INPRES NO 92,93",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO SEPATU <IRPAN>",
    "alamat": "LOS PEKAN INPRES PANG URURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL PAKAIAN<LASNI>",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL ALAS KAKI <OLOTUA>",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL PAKAIAN <SIBU RIAN>",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SELLA GORDEN",
    "alamat": "KIOS NO 53 - 54 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL PERABOT <MARNI>",
    "alamat": "KIOS NO 121-122 PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PECAH BELAH",
    "alamat": "KIOS NO.94.95 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO HORAS",
    "alamat": "J L.DI.PANDIAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL ACESORIS <LINDA>",
    "alamat": "KIOS NO 113 PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DAGING SAPI <HANSITTON>",
    "alamat": "LOS PEKAN INPRES PANG URURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL IKAN ASIN <RONAL>",
    "alamat": "LOS PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL PAKAIAN<HOTDI>",
    "alamat": "LOS PEKAN INPRES PANG URURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL TAS <DAME>/ PRABOT",
    "alamat": "LOS PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUALTIKAR JULIANA",
    "alamat": "LOS PEKAN PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJUAL KELONTONG LIMANUEL >",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "YOGI SHOES",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO CINDI",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AGEN BIJI KOPI",
    "alamat": "TERMINAL PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOKO KELONTONG DEAR",
    "alamat": "JALAN HADRIAN U S S INAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KELONTONG<DIRMAN>",
    "alamat": "TER MINAL PANG U R U RAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUALAN JAJANAN <PIOMARULI>",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PEDAGANG GAS ELPIJI",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "USAHA JUAL BELI KEMIRI <MINNARIA>",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO HOTJON",
    "alamat": "JL SIANJUR MULAMULA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KANTIN SEKOLAH HKBP",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ECERAN SAYUR MAYUR <LASTRI>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PRETTI SHOP",
    "alamat": "JL TANAH LAPANG PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PENJUAL SEMBAKO KELILING <GUNAWAN> nadeak",
    "alamat": "SIAHAAN BAGASAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BENGKEL SETEL JARI SEPEDA MOTOR <JAGAR>",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG DANAU TOBA WISATA",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BENGKEL MOBIL <ASBIN>",
    "alamat": "JALAN PUSUK BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JUAL SAYURAN K5 <PUNGKA>",
    "alamat": "DUSUN 2 TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <MONANGLAN>",
    "alamat": "TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PENJUAL IKAN <INTALIA>",
    "alamat": "JALAN TELE SIMANGONDI NG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PENJUAL SAYURAN <TIORISMA>",
    "alamat": "PANAHATAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUAL BAJU <HAPFY>",
    "alamat": "JALAN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PEDAGANG PENGUMPUL <TIOMAS>",
    "alamat": "JALAN AEK RANGAT HUTAPARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MENGECER BIBIT BAWANG <MARIATI>",
    "alamat": "SIGUNG OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PEDAGANG PENGUMPUL <SANGKOT>",
    "alamat": "JALAN AEK RANGAT HUTA PARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "KARONINA ALL SHOP ONLINE",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "JUAL SELIMUT DAN BAJU <HELEN>",
    "alamat": "JALAN BARU HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <NURMA>",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "BENEKEL SERVIS <SALIM>",
    "alamat": "DESA SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "BABI <MARTUNAS>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <MANGARA>",
    "alamat": "AEK OUGUL",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO <LABURA>",
    "alamat": "AE KNAUL I",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <HALOMOAN>",
    "alamat": "SINABORNO pangururan",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "PEDAGANG KOPI <RELI>",
    "alamat": "NAGATIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "WARUNG <MAROLOAN>",
    "alamat": "LBN PEA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TOKE KOPI <MARULAM>",
    "alamat": "DUSUN 3 lumban sinaga",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "WARUNG ROKOK <BERLIANA>",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <NIAN>",
    "alamat": "KOMPLEK PELABUHAN LOPO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "DOOR SMEER <DOYOK>",
    "alamat": "JALAN PERLUASAN TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENJUAL SAYURAN <SIJABAT>",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TOKO KELONTONG <SINAGA>",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TOKO SPAREPART <DAPOT>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MONANG SOUVENIR SHOP",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <RENITA>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUNIOR SOUVENIR SHOP",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "WARUNG SIDABUTAR <UDIN>",
    "alamat": "JL LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <EVI>",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "IAN SERVICE",
    "alamat": "JALAN INPRES TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SAMUEL SOUVENIR SHOP",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SHOP ART BENRI",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO <GABRIEL>",
    "alamat": "JL LINGKAR TUKTU K",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENJUAL IKAN <SIMBOLON>",
    "alamat": "PASAR TRADISIONAL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUAL MINYAK ECERAN <ITA>",
    "alamat": "JL RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUAL SEPATU <SITOHANG>",
    "alamat": "PASAR TRADISIONAL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "JUAL ULOS <NAPITU>",
    "alamat": "PASAR TRADISIONAL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "PENJUAL IKAN <RENITA>",
    "alamat": "PASAR TRADISIONAL AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PEDAGANG KELILING <EZRA>",
    "alamat": "LUMBAN PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "JUAL TIKAR <TIARMAN>",
    "alamat": "LUMBAN SIDAURUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "MENJUAL TIKAR <DOGLAS>",
    "alamat": "SIGURGUR",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PEDAGANG KELILING <ERNA>",
    "alamat": "KOMPLEK SM P N 4",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "JUAL KELONTONG <MANIHURUK>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <DEMIANA>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <LINCE>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <BERLIANA>",
    "alamat": "JL TOMOK PARSAORAN <PELABUHAN FERY>",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <ROHANI>",
    "alamat": "JL PELABUHAN PARIWISATA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TOKO PAKAIAN <GINA>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS JAJANAN <KARMIDEN>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <LESTI>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUAL JAJANAN K5 <ARTIA>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <HELTI>",
    "alamat": "JL TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENER <LAMTARIDA>",
    "alamat": "JL HORAS",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "AGEN HASIL TANI <ENITA>",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "TOKO SOUVENIR <JUNIAR>",
    "alamat": "SOUVENIRSHOP KAWASAN WISATA BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <ODOR>",
    "alamat": "SOUVENIRSHOP PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <MELDA>",
    "alamat": "SOUVENIRSHOP PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <POSTER>",
    "alamat": "SOUVENIRSHO KAWASAN WISATA BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <ARNI>",
    "alamat": "SOUVENIRSHO PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <MARIJO>",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "TASYA SOUVENIR SHOP",
    "alamat": "SOUVER SHOP KAWASAN WISATA BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "KIOS MINUMAN <BUDIMAN>",
    "alamat": "SOUVENIRSHOP PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KIOS SOUVENER<RASMI>",
    "alamat": "HUTA PARHAPURAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "KIOS SOUVENIR <ROMSELINA>",
    "alamat": "SOUVENIRSHOP PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUALAN PISANG <BESLINA>",
    "alamat": "URUNG SITIO",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "JUAL TIKAR <HOTNI>",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "PENGEPUL HASIL TANI <GAYUS>",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "JUAL KELONTONG <JAKDIS>",
    "alamat": "PASAR SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "JUAL PAKAIAN <RISMAYA>",
    "alamat": "PASAR SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "JUAL SAYURAN <ANTONIUS>",
    "alamat": "PASAR SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "JUAL PAKAIAN <KAMIANNA>",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO <JERMAN>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "JUAL BUMBU <ROIDA>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "GROSIR <HOTMARIA>",
    "alamat": "HUTAGALUNG TPL DUSUN 3",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "JUAL BERAS <ERI>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PEDAGANG BUAH <LUMINA>",
    "alamat": "PASAR IMPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "MENJUAL IKAN <JEKSON>",
    "alamat": "PARLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MONZA SILALAHI",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "OPTIK PUTRIKA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ALAT TANI NALBAHO",
    "alamat": "LOS PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PAKAIAN JADI <RUGUNSILAEN>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG <DUNGGAR>",
    "alamat": "AEKLAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PENGUMPUL IKAN <JOY>",
    "alamat": "DUSUN 2 LUMBAN SINABANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "JUAL TIKAR <AGUS>",
    "alamat": "DES A SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "WARUNG SEMBAKO <ANGGIAT>",
    "alamat": "DUSUN 2 BOHO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "WARUNG <SITOR>",
    "alamat": "TAMBA GODANG",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "AKOMODASI ANGKUTAN KAPAL <KARDIMAN>",
    "alamat": "BAHAL",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "AKOMODASI ANGKUTAN <BUHA>",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "AKOMODASI ANGKUTAN <PATAR>",
    "alamat": "PAGAR ONAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "TUKANG BECAK SAUT",
    "alamat": "JL PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "KAPAL MOTOR LARISMA",
    "alamat": "SUKKEAN",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "ANGKUTAN PENUMPANG <ARJUNA>",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "BECAK MOTOR <HOTMAN>",
    "alamat": "PURMA DOLOK",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "BECAK MOTOR <RIOMAS>",
    "alamat": "SITOHANG DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "ANGKUTAN PEDESAAN <BUDIMAN>",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "PENARIK BECAK <INFIAN>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BECAK MOTOR <BAIK>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "RENTAL MOBIL <ANGGIAT>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BECAK MOTOR",
    "alamat": "NAGA TIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BECAK MISA",
    "alamat": "SOSOR SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SUPIR MOBIL",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BECA MOTOR DIAN",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA BECAK <HENDRI>",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MENARIK BECAK MOTOR <KONI>",
    "alamat": "HUTA SILALAHI JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BECA KELILING",
    "alamat": "TERMINAL PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AKOMODASI DARAT <GAJIAN>",
    "alamat": "JALAN TELE PINDA",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ANGKUTAN BECAK",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ANGKUTAN BECAK <JISMAN>",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ANGKUTAN BECAK <CULES>",
    "alamat": "SITANGGANG BAU DSN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ANGKUTAN BECAK <NASIB>",
    "alamat": "GUSAR",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "JASA ANGKUTAN <KALDIN>",
    "alamat": "SIGURGUR",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "TUKANG BECAK <MARADI>",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA BECAK MESIN <BELJON>",
    "alamat": "PARHAPURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DUMTRUK <HAMONANGAN>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "RUMAH MAKAN KRINA <DINGOT GALAKSI LIMBONG>",
    "alamat": "DESA BOHO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "KEDAI KOPI <DEMINA>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "JUAL MIE",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "KEDAI KOPI<SUDOMO>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "WARUNG KOPI<SANGGAM>",
    "alamat": "TULAS",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "WARUNG KOPI<JALAGA>",
    "alamat": "SIBORO TULAS",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "WARUNG MAKAN <RUSLAN>",
    "alamat": "TELE DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "WARUNG MAKAN <TARULI>",
    "alamat": "TELE DUSUN 2",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KEDAI TUAK <BERES>",
    "alamat": "LUMBAN SORGANIMUSU",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <RINDU>",
    "alamat": "HUTAGALUNG DUSUN 1",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "WARUNG MAKAN <ROMASI>",
    "alamat": "HUTAGALUNG TPL DUSUN 3",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "LAPO TUAK DUKSI",
    "alamat": "LONDUT",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "WARUNG KOPI <REMANJUR>",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "WARUNG MINUM MAKAN <JUNI>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PEDAGANG ROTI <ASTUTI>",
    "alamat": "BANJAR DOLOK",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "WARUNG TUAK <SABAM>",
    "alamat": "PANGARAPUSAN",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "WARUNG TUAK <JAHARNA>",
    "alamat": "SITIO TIO DUSUN I",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "WARUNG MIE GOMAK <HANNA>",
    "alamat": "PASARAN I",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "JUAL PECAL<ROSMIDA>",
    "alamat": "SITUATUA",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "WARUNG KOPI <BUHA>",
    "alamat": "PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "WARUNG KOPI <WILLY>",
    "alamat": "PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "MENJUAL MI SOUP <SAMSUDIN SARAGIH>",
    "alamat": "LOS PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "CATERING PANGARIBUAN",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SEWA RUMAH <SINAGA>",
    "alamat": "LORONG 3 PARLUASAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "JUALAN MIE GOMAK<RACHEL>",
    "alamat": "JALAN PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "WARUNG KOPI <HOTMAN>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "JUAL BUBUR KACANG IJO bentoni hutabalian <K5>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PENGINAPAN MIHAT",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "RUMAH MAKAN <SAMOSIR>",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "KANTIN <JUNIKI>",
    "alamat": "SIBANE BANE",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "WARUNG TUAK BORISAN",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "WARUNG KOPI <IWAN>",
    "alamat": "SIBALANJANG",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "WARUNG KOPI <DANIEL>",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "WARUNG KOPI <POLMAR>",
    "alamat": "URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "KEDAI TUAK JURIS",
    "alamat": "LUMBAN DAME",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "WARUNG KOPI <ISDON>",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "WARUNG KOPI <PINO>",
    "alamat": "SOSOR MARDOMPAK DUS UN 2",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KEDAI KOPI RISKI",
    "alamat": "JL KAMENTE  DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KEDAI KOPI <DULSIMAR>",
    "alamat": "JL. LINTAS SAMOSIR DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "PEDAGANG ES LILIN <MARDAULINA>",
    "alamat": "SIHUNIK",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "JUALAN MIE SOP (RIANA)",
    "alamat": "PEKAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "KANTIN PAK JUNTAK",
    "alamat": "KOMPLEK SMK NEGERI I PALIPI",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "WARUNG KOPI <LESMI>",
    "alamat": "JL.KANTOR CAMAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KEDAI KOPI <AGUAN>",
    "alamat": "DESA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PENJUAL MIE <GOLDEN>",
    "alamat": "SIBIGO",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "WARUNG KOPI<SAIDIN>",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "WARUNG KOPI <USDEN>",
    "alamat": "LUMBAN PASIR PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "WARUNG JAJANAN <FERA>",
    "alamat": "AEK RANGAT PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "KEDAI NASI <SURIP>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "KEDAI KOPI <PARTAHI>",
    "alamat": "JALAN RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "MENJUAL BUBUR <SRI>",
    "alamat": "PARLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "GUNA OBOS 3, UD",
    "alamat": "JALAN DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENYEWAAN KAMAR KOS",
    "alamat": "JL.DR.HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KEDAI TUAK <MARUDUT>",
    "alamat": "SOSOR SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA KOST KOSTAN <SIMBOLON)",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA MENJUAL MIE GORENG",
    "alamat": "KOMPLEKS GEREJA HKBP",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KEDAI TUAK <MARIZEN>",
    "alamat": "SOSOR HOLANG-HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KEDAI KOPI <SIMBOLON>",
    "alamat": "JL RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "WARUNG NASI <SRI>",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI NASI <FARIDA>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA KOSTKOSTAN",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI TUAK SIRAMBUT",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI KOPI<DORMINTA>",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI BERMAN",
    "alamat": "JL D I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL MAKANAN <WAGINEM>",
    "alamat": "LOS PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI NASI <MAGDA>",
    "alamat": "KIOS NO.32 PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG MAKAN <SARMAULI>",
    "alamat": "KIOS NO 137 PEKAN INPRES PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG MAKAN DAN KEDAI KOPI ESRALINA",
    "alamat": "JL KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KODE NAIBAHO",
    "alamat": "JL DR HADRIANUS S INAG A",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG MAKAN NURIPAH",
    "alamat": "TERMINAL",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PEDAGANG GORENGAN",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KOST KOSTAN",
    "alamat": "TERMINAL PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KOPI <MARLINA>",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG KOPI <DANI >",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RM PONDOK BAMBU <UNI>",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROTI BAKAR <RIAMA>",
    "alamat": "JALAN SIANJUR MULA MULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PENJUAL LONTONG <NURMITA>",
    "alamat": "JL SIANJUR MULA-MULA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG KOPI <DENI>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "USAHA RUMAH KOST <LUSI>",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG NASI GORENG <PESTA>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG MIE<MERIANA>",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SEWA KAMAR KOS <NIUR>",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SATE PADANG <NASRUL>",
    "alamat": "JALAN PUSUK BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARUNG KOPI <KODOK>",
    "alamat": "DUSUN 2 DESA TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "WARUNG MAKAN MINUM PATRIOT<TIURMAULI>",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "WARUNG KOPI <FELIN>",
    "alamat": "JALAN AEK RANGAT HUTAPARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PENJUAL ESTRIANTI>",
    "alamat": "JALAN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUAL CENDOL <TONI>",
    "alamat": "JALAN SIMANINDO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "WARUNG GORENGAN <HENDRA>",
    "alamat": "SIMPANG EMPAT DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PERSEWAAN KAMAR <CAROL>",
    "alamat": "JALAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "JUAL AYAM PENYET <ARYA>",
    "alamat": "LUMBAN SILO DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KEDAI TUAK <MELATI>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "WARUNG TUAK <SUMIATI>",
    "alamat": "JALAN SALAON PANGALUHUT LUHUTAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "WARUNG KOPI DAN TEH <KAROLINA PURBA>",
    "alamat": "LUMBAN NADEAK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "KONTRAKAN RUMAH<BOSMAN>",
    "alamat": "BONA BONA DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "WARUNG MIE BORPAK",
    "alamat": "SI MARTUANG HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "KEDAI KOPI <BELMAN SIMARMATA>",
    "alamat": "LUMBAN BOLAK DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "KEDAI TUAK <RABENNA>",
    "alamat": "DISUN 2 SITUNGKIR LONDUT PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "KEDAI TUAK <FRENGKI>",
    "alamat": "LUMBAN MANIK TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MIE SOP ZULKARNAEN",
    "alamat": "DUSUN 2 LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "KEDAI KOPI <SAHAT>",
    "alamat": "DUSUN 3 PARHORASAN",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "WARUNG MI SOP <ANATASYA>",
    "alamat": "DES A PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "WARUNG KOPI <DELFI>",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "RUMAH MAKAN <ROBEMA>",
    "alamat": "JALAN BESAR TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARUNG KOPI <ROSITA>",
    "alamat": "LUMBAN SIJABAT",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "WARUNG NASI <REMIN>",
    "alamat": "JL SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "AMAN GUEST HOUSE",
    "alamat": "JLN LINGAKAR TUKTUK PANDAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SAMUEL RESTAURANT",
    "alamat": "JLN LINGKAR TUKTUK LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "EMMANUEL GUEST HOUSE",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "CHINESE RESTAURANT",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TODAY CAFE",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "WARUNG MIESOP <LASTINA>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "COFFEE 2GO",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "EPY GUEST HOUSE",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARUNG ALOY",
    "alamat": "JL PELABUHAN AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "WARUNG KOPI <PURBA>",
    "alamat": "JLN RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "WARUNG KOPI <TIURLAN>",
    "alamat": "PARTULAAN",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "WARUNG KOPI <ROMAULINA>",
    "alamat": "SOSOR SIBUTTUON",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "WARUNG <TABITA>",
    "alamat": "SIMPANG SOSOR NANGKA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "JUAL SATE KELILING <RAMADEN>",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "WARUNG MAKAN <TIURMA>",
    "alamat": "PELABUHAN FERY TOMOK PARSAORAN>",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KEDAI KOPI <LASMA>",
    "alamat": "JL PELABUHAN FERY TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "JESS FRANS CAFE",
    "alamat": "JL LINGKAR TUKTUK PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "WARUNG MAKAN <DINARTO>",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "WARUNG MAKAN <HERAWATI>",
    "alamat": "HARIARAPINTU DUSUN 3 PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "WARUNG KOPI <BURTON>",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KANTIN SEKOLAH <EMY>",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RM MINANG MAIMBAU",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RUJAK<RIZAL>",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG MAKAN SAMTO <SINTA >",
    "alamat": "A E K RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUAL ESKRIM KELILING <SUJANTO>",
    "alamat": "JL TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "WARUNG MAKAN <MATUEL>",
    "alamat": "PASAR SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "KEDAI MINUMAN <AILEND>",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "WARNET<FIRDAUS>",
    "alamat": "AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "JUAL PULSA <WALPIAN LIMBONG>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "PULSA<ANDO>",
    "alamat": "TULAS",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "JUAL PULSA <ROSLIN>",
    "alamat": "SIPAPAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "JUAL PULSA <MASDA>",
    "alamat": "BAHAL",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "JUAL PULSA <JT>",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JUAL PULSA<NASIONAL>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "WARNET RISTA",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HONG KONG MALONA PONSEL",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PULSA <ANDREY>",
    "alamat": "JALAN PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "WARNET PLANET",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JUAL PULSA DAN GAS <RATNA>",
    "alamat": "SITANGGANG BAU DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ROMLAN PULSA",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "WARNET <RADEN>",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "COUNTER <RANTO>",
    "alamat": "JLFL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA WARNET <NAIBAHO>",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PULSA DAN ASSESORIS",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "AGEN PRUDENSIAL <ALLER LIMBONG>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "AGENT ASURANSI <YUSNI>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "AGEN PRUDENTIAL <LIDIA>",
    "alamat": "LUMBAN HABINSARAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PARKOPERASI <RETNO>",
    "alamat": "DESA NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "KOPERASI DHARMA WANITA",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "CU PARSAORAN TARABUNGA DUSUN 2",
    "alamat": "SIMBOLON DUSUN 2 RT:  RW:  KODEPOS: 22392",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "UANG CEPAT <LIOT>",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KONTRAK RUMAH <TIARMA>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PENYEWAAN RUMAH",
    "alamat": "JALAN DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KONTRAKAN <MELI>",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEWA RUMAH <SILALAHI>",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KONTRAKAN SIRAIT",
    "alamat": "JL D I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERSEWAAN RUMAH <MINAN>",
    "alamat": "JL KOLONEL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENYEWAAN RUMAH <JOY SIANAGA>",
    "alamat": "JL RONGGER NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEWA RUMAH <ONES>",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KONTRAKAN <DEHLORIS>",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FOTO KELILING <ALLER>",
    "alamat": "DESA SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "JASA VIDEO DAN FOTOGRAFI",
    "alamat": "KOMPLEK SD INPRES",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "KONSULTAN BANGUNAN <MARBUN>",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PENGACARA <POLTAK>",
    "alamat": "JL KOL LIBERTY MALAU NO 8",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KONSULTAN <BENNI>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "USAHA FOTO KELILING <ANY>",
    "alamat": "DESA WISATA BATU KURSI",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SEWA DAMTRUK <PASTI>",
    "alamat": "AEK SIPITUDAI DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SEWA TENDA <ROMMEL>",
    "alamat": "AEK SIPITUDAI DUSUN I",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "FOTO COPI <JONNER>",
    "alamat": "ONAN LIMBONG, DESA AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "FOTOCOPY DAN ATK <RIZKY>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "RENTAL MOBIL <SABAS>",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SEWA TENDA DAN KURSI <MANULLANG>",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JASA FOTO COPY <CALVIN>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SEWA ALAT MUSIK",
    "alamat": "SOSOR NAINGGOLAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "PERSEWAAN TENDA <LASRIA>",
    "alamat": "UPAJOLO",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "MARULI TUA, UD",
    "alamat": "JALAN RAYA MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "UD.BENRO FOTOCOPY",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MARVEL MUSIC",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BATARAN MOTOR BIKE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "VIONA SEPEDA",
    "alamat": "JLN LINGKAR TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUNIOR MOTOR BIKE",
    "alamat": "JALAN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "PRIMA'S MOTOR BIKE",
    "alamat": "JALAN LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "USAHA FOTOCOPY <LINDU>",
    "alamat": "LUMBAN BALU",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JASA PENUMPANG <DOHAR>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "SEWA SEPEDA MOTOR <GULTOM>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "USAHA PEMANDU WISATA <ROHANDI>",
    "alamat": "PELABUHAN WISATA",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "ROXY <LEYDER>",
    "alamat": "TANAH LAPANG 40",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PERSEWAAN MOBIL <SAMPANG>",
    "alamat": "JL TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SD NEGERI 19 PANANGGANGAN",
    "alamat": "AEK NAHOMBAR DESA PANANGGANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "SD NEGERI 8 SAORNAULI HATOGUAN",
    "alamat": "LOBUTUA DUSUN 2",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "KB PEDULI KASIH",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "SD INPRES RIANIATE",
    "alamat": "KOMPLEK SD INPRES",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "TEMPAT PENITIPAN ANAK",
    "alamat": "HUTA SILALAHI JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LES BAHASA INGGRIS <HELEN>",
    "alamat": "JALAN BARU HARIARA 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TEMPAT PENITIPAN ANAK <NUR>",
    "alamat": "SITEA TEA DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KB BONZAI",
    "alamat": "HUTA BOLON LUMBAN SIPAKKAR",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "TUKANG URUT <RAMSES>",
    "alamat": "AEK TUMPAHAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN <HERTA>",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "JUAL OBAT <NETTY>",
    "alamat": "JALAN RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "POSKESDES <ROHMA SARAGIH>",
    "alamat": "SIPASSA DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN <MONI>",
    "alamat": "PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "PLAYSTATION 2/sevice henpon <JANETA>",
    "alamat": "SINAGA URUK URAT 2",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "MEJA BILIARD <JONSON>",
    "alamat": "PAMUTARAN",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "USAHA PERTUNJUKAN SIGALE GALE <DAVID>",
    "alamat": "JL PELABUHAN PARIWISATA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SALON JUAN<LERMI>",
    "alamat": "AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "USAHA SALON<RISMA>",
    "alamat": "LUMBAN NAHOR",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "JASA URUT <SERTI>",
    "alamat": "SIBAGANDING",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "DERBY PONSEL",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "NAGA PANGKAS",
    "alamat": "DESA NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SALON TIARA",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SERVIS ELEKTRONIK <RUBEN>",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "TUKANG SOLDER KELILING",
    "alamat": "LUMBAN SIHOMBING DSN 3",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "TUKANG PIJAT <SITINJAK>",
    "alamat": "DUSUN I SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "LUSI SALON",
    "alamat": "JL PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "SERVIS KOMPUTER<FEHRIN>",
    "alamat": "JL PELABUHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "INA SALON <INA>",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PENGUPAS KEMIRI <RESEMINA>",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SURYA ELEKTRONIK",
    "alamat": "JLN FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JENIUS SINAGA ELEKTRONIK",
    "alamat": "JL RONSGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TUKANG PANGKAS JAI (NIAS PANGKAS)",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SALON SANTI AINO",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENJAHIT SEPATU <BERTO>",
    "alamat": "JL USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SETIA ROHANA PANG KAS",
    "alamat": "JALAN HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MONA CHARBY SALON",
    "alamat": "TERMINAL PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SERVICE ALAT ELEKTRONIK <MANAT>",
    "alamat": "DUSUN 2 DESA TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "TUKANG PIJAT <KARTINI>",
    "alamat": "JALAN TELE SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MENIMBANG BAWANG <ENIA>",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SERVICE HP",
    "alamat": "JALAN PUSUK BUHIT DUSUN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TUKANG CUCI KELILING <YANTI>",
    "alamat": "DESA PARSAORAN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TUKANG KUSUT <SARTUMI>",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "BINTANG SERVIS <SAMPE>",
    "alamat": "DUSUN 2 SITUNGKIR LON DUT",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "JUY SALON",
    "alamat": "DUSUN 2 LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TUKANG BANGUNAN <PARDI>",
    "alamat": "DUSUN 2 LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MALAU MASSAGE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "FRENZI SALON",
    "alamat": "JL IMPRES TUKTUK SI ADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PADOT MASSAGE",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "LOVELY SALON <NAIBAHO>",
    "alamat": "JL TANAH LAPANG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "USAHA PARKIR SEPEDA MOTOR <JANY>",
    "alamat": "JL HORAS TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "BILLY PANGKAS",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BENGKEL LAS <ALEXANDER>",
    "alamat": "DUSUN 3 PARSAORAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TOKO MAS SURABAYA \"FREDDI",
    "alamat": "JL. DI. PANJAITAN SIMPANG 3 ONAN BARU",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "UD. TAMBOK JAYA",
    "alamat": "JL. D.I PANJAITAN BAWAH",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "UD. TUMPAK",
    "alamat": "JL. SUGIO PRONOTO ONAN BARU PANGURURAN KODEPOS 22392",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "LAKE TOBA NET, UD",
    "alamat": "SILIMALOMBU",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "USAHA DESA WISATA GADING BATU KURSI",
    "alamat": "Jl Raya Pindaraya Huta Siallagan Rt. -  Rw. -  Kode Pos 22395",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ANNAS PENGINAPAN",
    "alamat": "LINGKAR TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGINAPAN YOGI PUTRA JAYA",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PENGINAPAN SABAS",
    "alamat": "JL PELABUHAN NAINGGOLAN NO 50",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PENGINAPAN KOTA SIMULLOP",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PT BENGET",
    "alamat": "SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "LAKE TOBA GIVEN TOUR",
    "alamat": "JL. LINGKAR TUKTUK SIADONG SIMANINDO 22395",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KOPERASI SIMPAN PINJAM PERSATUAN WREDATAMA REPUBLIK INDONESIA",
    "alamat": "JL SIANJUR MULAMULA, PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MARSIURUPAN, CU",
    "alamat": "JL. LINTAS PANGURURAN - TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "KOPERASI SERBA USAHA DALIHAN NATOLU DNT",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "KSP CREDIT UNION DAME",
    "alamat": "JL. RONGGURNIHUTA DESA PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERIKANAN TANGKAP <LISKEN SAMOSIR>",
    "alamat": "MORJA, DESA ONAN RUNGGU, KEC. ONAN RUNGGU, KAB. SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "UD. FAJAR REKLAME",
    "alamat": "DESA SAITNIHUTA, KEC. PANGURURAN, KAB.SAMOSIR/082276920501",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "RUMAH MAKAN FAMILY",
    "alamat": "DESA PARSAORAN I, KEC. PANGURURAN, KAB.SAMOSIR/085370461156",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "UD PARSAORAN",
    "alamat": "JL. PANGURURAN SIMANINDO, DESA PARSAORAN I, KEC. PANGURURAN, KAB.SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PEMBUAT BATU BATA <BARINGIN SITANGGANG>",
    "alamat": "DESA PANAMPANGAN, KEC. PANGURURAN, KAB. SAMOSIR/085361336306",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SAULINA RESORT HOTEL",
    "alamat": "JL. AEK RANGAT, KELURAHAN SIOGUNG-OGUNG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PENJUAL PAKAIAN <POSMELITA SINAGA>",
    "alamat": "PEKAN INPRES BALERONG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TENUN ULOS (FERIANTI)",
    "alamat": "DESA SIOPAT SOSOR, DUSUN III, KEC. PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "USAHA 3T",
    "alamat": "PARJONGGI, DESA PARDOMUAN I, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PARTOPI DOLOK, CV",
    "alamat": "DESA HUTA TINGGI, KEC. PANGURURAN, KAB.SAMOSIR/082168504349",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PENGGILINGAN PADI <PIRHOT SILALAHI>",
    "alamat": "TAO SIDIHONI, DESA LINTONG NIHUTA, KEC. RONGGUR NIHUTA, SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TRIA, CV",
    "alamat": "DESA SIPINGGAN, KEC.NAINGGOLAN,KAB.SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TENUN SONGKET (TARULI)",
    "alamat": "SITAKARAEN, DESA PARDOMUAN I, KEC.PANGURURAN,KAB.SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "DORULI, CV",
    "alamat": "JL. PELABUHAN ONAN RUNGGU, DESA ONAN RUNGGU, KEC.ONAN RUNGGU, KAB.SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TRYA LUMBAN LINTONG, PT",
    "alamat": "JL. PELABUHAN ONAN RUNGGU, DESA ONAN RUNGGU, KEC.ONAN RUNGGU, KAB.SAMOSIR",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "MONA SALON (MONA SITEPU)",
    "alamat": "JL. DIPONEGORO DARDOMUANI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KLINIK SANTA ELIZABETH",
    "alamat": "JL. SUGIOPRANOTO NO I PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MELANI LAUNDRY EKSPRESS",
    "alamat": "JL. DIPONEGORO (SAMPING GERBANG IV PAJAK INPRES, PARDOMUAN1, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA BUMBU Mak Fredy",
    "alamat": "JL. USKUP AGUNG SUGIO PRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA TAHU TEMPE BAPAK ADE ROHIYAT",
    "alamat": "PARJONGGI DESA PARDAMLIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERWAKILAN P.O SAMPRI EKSEKUTIF",
    "alamat": "KELURAHAN PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RM. MINANG RIDHO",
    "alamat": "JL. SISINGAMANGARAJA DEPAN INDOMARET ONAN LAMA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RM. BPK RONI MALAU",
    "alamat": "JL. PANGURURAN SIMANINDO, DESA PARSAORAN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "LAS WATER <HETNIDAH TURNIP>",
    "alamat": "JL.KOMPLEK PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "USAHA JAHIT TETTY",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "BATU BATA <MARTOGI>",
    "alamat": "SIAEK MUAL",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "BATU BATA <SARI>",
    "alamat": "BATU LANDIT",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "KILANG PADI <POLMEN>",
    "alamat": "TORU DOLOK",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "GORENGAN <DEDI>",
    "alamat": "UPAJOLO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "GORENGAN <HIRIM>",
    "alamat": "UPAJOLO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "BENGKEL LAS <RISTON NAIBAHO/JAKSAN GULTOM>",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG JAHIT <MERDIANA SINAGA>",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG JAHIT<DEBORA SIGALINGGING>",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG JAHIT <MANUTUR SINURAT>",
    "alamat": "JL GEREJE",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG JAHIT <SABAR MALAU>",
    "alamat": "JL SIANJUR MULA\"MULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PARSAULIAN WATER <ATMEN NAIBAHO>",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PENJAHIT KEBAYA <NURHAYATI SILALAHI>",
    "alamat": "JL GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KILANG PADI <MARSELIUS>",
    "alamat": "SAKKAR NIHUTA",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <HOTNEL>",
    "alamat": "GORAT, DESA ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <BINTER>",
    "alamat": "SOSOR PARHORASAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <GAJAMADA>",
    "alamat": "SOSOR BUNTU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <MANGADA>",
    "alamat": "SOSOR BUNTU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PAPAN BUNGA <AGUSTINUS>",
    "alamat": "GORAT",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <MANGADAT>",
    "alamat": "SOSOR PARHORASAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <KARTO>",
    "alamat": "SOSOR PARHORASAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <WIRO>",
    "alamat": "SOSOR PARHORASAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <LASRON>",
    "alamat": "LUMBAN HABINSARAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <SARI TUA SAMOSIR>",
    "alamat": "SIBORONG BORONG, DESA ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <MANOTAR SAMOSIR>",
    "alamat": "SIBORONG BORONG",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <TONNY>",
    "alamat": "SIBORONG BORONG DESA ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "LAPPET <NIKIA/JUITA>",
    "alamat": "PELBUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <RAMLAN>",
    "alamat": "GORAT, DESA ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <SARI/MANGARA>",
    "alamat": "GORAT, DESA ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PENYADAP AREN <HOTLEN/GUSMAN>",
    "alamat": "GORAT",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "TENUN ULOS <MESRANTI MALAU>",
    "alamat": "LUMBAN MALAU",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <ESLIDA>",
    "alamat": "SINTA NAULI",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <PIRMAULI>",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PENYADAP AREN <MARDIONO>",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PENYADAP AREN <SARUDIN>",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <BERTA>",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PENYADAP AREN <TOGAR>",
    "alamat": "LUMBAN TONGA-TONGA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <KESIANNA>",
    "alamat": "LUMBAN TONGA-TONGA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PEMBUAT BATU BATA <BARINGIN>",
    "alamat": "LUMBAN TONGA-TONGA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "INDUSTRI BATU BATA",
    "alamat": "DUSUN 2 SITINDO",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <RAWATI>",
    "alamat": "DUSUN 2 LB DAGAL",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <TIO>",
    "alamat": "DUSUN 2 DARAT",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <MESRAN>",
    "alamat": "DUSUN 2 LB SIMATANI ARI",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "TENUN ULOS <KENTINA>",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <HOTMAULI>",
    "alamat": "SITORANG NABOLON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <JUIDER>",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <TIANUR SIMARMATA>",
    "alamat": "LUMBAN BALUBU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <DAMARIA>",
    "alamat": "LUMBAN BINANGA BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "PENJAHIT KEBAYA <RIA TURNIP>",
    "alamat": "LUMBAN TURNIP DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TENUN ULOS <TERINA>",
    "alamat": "SIGURGUR DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "TENUN ULOS <KOSTARIA>",
    "alamat": "SIGURGUR DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TENUN ULOS <TIUR>",
    "alamat": "JL LINGKAR TUK-TUK SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "HERTAWATI LUMBANGAOL",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "STAR BATAK ARTSHOP",
    "alamat": "JL LINGKAR TUK TUK SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "EMMANUEL ARTSHOP",
    "alamat": "JL. LINGKAR TUK TUK SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "IWAN SOUVENIR SHOP",
    "alamat": "JL LINGKAR TUK TUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "ANNE MIKE SHOP",
    "alamat": "JL LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "MARYSKA ARTSHOP",
    "alamat": "TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "CENTRAL HANDCRAFT",
    "alamat": "TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TUKANG JAHIT <PUPUNG>",
    "alamat": "TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "BATU BATA <NELSON>",
    "alamat": "DUSUN I DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <BINDER>",
    "alamat": "KAMNETE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <RESSON SIREGAR>",
    "alamat": "DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <FERNANDO>",
    "alamat": "SILANGIT SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <JOKKY>",
    "alamat": "LUMBANJULU",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <MILTON SIHOMBING>",
    "alamat": "KAMENTE DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <TAHAN>",
    "alamat": "DESA SIGAOL MARBUN DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <REINAL>",
    "alamat": "KAMENTE DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <GUSAR>",
    "alamat": "DESA SIGAOL MARBUN DUSUN 1 KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA DIANA",
    "alamat": "HAPOTAN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <JOSPEN>",
    "alamat": "AEKNAULI, SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <RANTO>",
    "alamat": "SOSOR SILANGIT DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <PONTIUS>",
    "alamat": "AEKNAULI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <SIHAR>",
    "alamat": "AEK NAULI DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <ROY>",
    "alamat": "SIGAOL MARRBUN DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "PENYADAP AREN <ALBERTUS SIMBOLON>",
    "alamat": "SIMARHALIANG DESA SIGAOL MARBUN DUSUN 1",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <NASIB>",
    "alamat": "SABALANGIT SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <USTAN>",
    "alamat": "UPAHODA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <JUANDA>",
    "alamat": "AEK NAULI DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <OJAHAN>",
    "alamat": "DESA SIGAOL MARBUN DUSUN 1 KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <RAHMAT>",
    "alamat": "SIPOHOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "TUKANG LAS <HOLONG>",
    "alamat": "SAMPEHORAS",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <ANJUS>",
    "alamat": "SAMPEHORAS",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <PULO>",
    "alamat": "AEKNAULI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <NURDIN>",
    "alamat": "SAMPE HORAS, DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BENGKEL LAS <LINDUNG>",
    "alamat": "BANJARMARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <DAPOT>",
    "alamat": "BANJARMARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KILANG PADI <MARULI>",
    "alamat": "BANJARMARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU BATA <FRISKO>",
    "alamat": "KAMENTE SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KILANG PADI <BINDER>",
    "alamat": "KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MEMBUAT KUE <MAINNA SARAH>",
    "alamat": "DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "BENGKEL LAS <ERIKSON>",
    "alamat": "DUSUN 2 TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "BAKERY DAN COOK <ARITONANG>",
    "alamat": "DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "TUKANG JAHIT <DORKAS>",
    "alamat": "DUSUN 2",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "TUKANG KUE <JULIKA>",
    "alamat": "KOMP SMP NEGERI 1 PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TOKO CITRA <PARLIN>",
    "alamat": "JL DR.FL TOBING PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PENJAHIT <SITANGGANG>",
    "alamat": "JL SISIMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "INDAH TAYLOR <MELIDA SIDABUKKE>",
    "alamat": "JL SISIMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PENJAHIT <RIANA>",
    "alamat": "JL TANAH LAPANG PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KUE KETAWA <NADEAK>",
    "alamat": "SIAHAAN BAGASAN PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "USAHA KUE <DIANA>",
    "alamat": "SAIGIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <PESTA SIJABAT>",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <JULIANA TURNIP>",
    "alamat": "SIMARAEK DUSUN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <LASMAROHA NAINGGOLAN>",
    "alamat": "SIMARAEK DUSUN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PEMBUAT TEMPE <IRMA> CV",
    "alamat": "DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <LASMARIA SIHALOHO>",
    "alamat": "SIMARAEK DUSUN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KASUKSAK <YESI SILALAHI>",
    "alamat": "LUMBAN GANDA DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PEMBUAT STELENG <TONI>",
    "alamat": "TOMOK PARSAORAN DUSUN 2",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "USAHA PEMBUAT ROTI <SYAHRUL>",
    "alamat": "TOMOK PARSAROAN DUSUN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PENJAHIT <ANSARI>",
    "alamat": "TOMOK PARSAORAN DUSUN 2",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGASIN IKAN <ANTON>",
    "alamat": "TOMOK PARSAORAN BULU DURI DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "PENGASIN IKAN <RUSMALA>",
    "alamat": "TOMOK PARSAORAN DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "PENGASIN IKAN <DORMAN>",
    "alamat": "TOMOK PARSAORAN DUSUN 3",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "BERTENUN <SUNNI>",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MENYADAP AREN <FRENGKI>",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <ARNIM>",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <MEGA>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BERTENUN ULOS <DENNI>",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BENGKEL LAS <TUMPAL>",
    "alamat": "DUSUN 3 PARSAROAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "DINAS PERHUBUNGAN",
    "alamat": "JL. PUTRI LOPIAN, DESA PARDOMUAN I, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KANTOR SAMSAT PANGURURAN",
    "alamat": "JL. PANGURURAN SIMANINDO, DESA PARSAORAN I, KEC. PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "DINAS PENANAMAN MODAL DAN PELAYANAN PERIZINAN TERPADU SATU PINTU",
    "alamat": "KOMPLEK PERKANTORAN RIANIATE KM 6, DESA RIANIATE",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "DINAS PERTANIAN (HORTIKULTURA)",
    "alamat": "KOMPLEK PERKANTORAN PEMKAB SAMOSIR, DESA SIOPAT SOSOR, KEC. PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "DINAS PERTANIAN (PERKEBUNAN)",
    "alamat": "KOMPLEK PERKANTORAN PEMKAB SAMOSIR, DESA SIOPAT SOSOR, KEC. PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "DINAS PERTANIAN (HEWAN)",
    "alamat": "KOMPLEK PERKANTORAN PEMKAB SAMOSIR, DESA SIOPAT SOSOR, KEC. PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "BADAN PENGELOLAAN KEUANGAN DAN ASET DAERAH (BPKAD)",
    "alamat": "JL. RIANIATE KM 5,5 KEC. PANGURURAN-22392",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "BAWANG MERAH ELLIS NAIBAH0",
    "alamat": "DESA AEK SIPITUDAI, SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "KOPI MARJON SAGALA",
    "alamat": "DESA HUTAGINJANG, SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "BAWANG MERAH JAMINTON NAIBAHO",
    "alamat": "LIMBONG, DESA AEK SIPITUDAI",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "KOPI DORMAULI SIHOLE",
    "alamat": "JL. TELE MEDAN, DESA TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "APOTEK MARULI",
    "alamat": "JL.KOL.LIBERTY MALAU ( DEPAN MC BAKERY) PARDOMUAN 1, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "APOTEK PANGONDIAN <SIHOTANG>",
    "alamat": "JL. HADRIANUS SINAGA, KELURAHAN PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RUMAH NABOLON, CV",
    "alamat": "DUSUN 1",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "JOSUA, CV",
    "alamat": "SITOHANG",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "DORULI, CV",
    "alamat": "JL PELABUHAN ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "EDO GOLD STAR, CV",
    "alamat": "SIPINGGAN LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "TAMIANG, CV",
    "alamat": "JL BESAR SINAGA URUK URAT 2 PALIPI",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "VALDES, CV",
    "alamat": "ONAN LAMA PANGURURAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "ANJU MANGASI, CV",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAROHA JAYA, CV",
    "alamat": "JL HANUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LINTONG, CV",
    "alamat": "JL USKUP AGUNG, LUMBAN LINTONG, PARDOMUAN 1, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BOY MAS, CV",
    "alamat": "JL S M RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KANTOR PURNA KARYA, CV",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PANALAKSAK, CV",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "CAHAYA, CV",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MARTOGI, CV",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PULTAK PAGAR, CV",
    "alamat": "TANAH LAPANG SIPINGGAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MORA DOLOK, CV",
    "alamat": "JL AEK RANGAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BATU BOLON, CV",
    "alamat": "JL TELE NO 16 KEL. SIOGUNGOGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SUPER STAR, CV",
    "alamat": "TERUSAN TANO PONGGOL DSN 3",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "UPAR KONSTRUKSI SEJAHTERA, CV",
    "alamat": "JL SIMANINDO SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PUTRA PEALAGE, CV",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "MANGIDO TUA, CV",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "OPPUNG NABURJU, CV",
    "alamat": "LIMBONG AEK TINTIN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PALTI, UD",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "RUMAH BOLON, CV",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "GOLANG MAS, CV",
    "alamat": "HUTA URAT KEL. SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "SAUD BOY PRATAMA, UD",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "ROGANDA PRIMA, CV",
    "alamat": "SIBORO, SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "EVALDO, CV",
    "alamat": "BAHAL-BAHAL KEC. SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SAUDARANTA, CV",
    "alamat": "HASINGGAAN, SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "HISAR, CV",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PUTRA SIANJUR, CV",
    "alamat": "aek sipitudai, sianjur mula mula",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "HARAPAN MAJU, CV",
    "alamat": "SIPARMAHAN, HARIAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "IWAN, CV",
    "alamat": "SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "HOTTIS JAYA PERSADA, CV",
    "alamat": "JANJI MARTAHAN, HARIAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "GUNUNG MULIA PRATAMA, CV",
    "alamat": "TURPUK LOMBONG, HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "PAGAR BATU, CV",
    "alamat": "TAMBA DOLOK, SITIOTIO",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "INDRAMEDO, CV",
    "alamat": "JL PROTOKOL",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "MARTABE PERSADA, CV",
    "alamat": "#NAME?",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "SINAR ANUGRAH PRATAMA, CV",
    "alamat": "sitinjak",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "VOLTAMAS, CV",
    "alamat": "JL RAYA LINKAR SAMOSIR KEC. NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "GITA PRATAMA, CV",
    "alamat": "SINAGA URUK, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "RISSARDO, UD",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "TANIA, CV",
    "alamat": "Nainggolan, Sipinggan Lumbansiantar",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "MAKNA KARIA PERSADA, CV",
    "alamat": "SIRUMA HOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "REFLIN, CV",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "DAUD MULIA, CV",
    "alamat": "SIPINGGAN LUMBAN SIANTAR, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "MARRIARAJA JAYA, CV",
    "alamat": "SIPINGGAN LUMBAN SIANTAR, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "SIDAURUK CITY, CV",
    "alamat": "SIPINGGAN LUMBAN SIANTAR, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "SIPINGGAN NAULI, CV",
    "alamat": "NAINGGOLAN SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "FRANSDILO, CV",
    "alamat": "JL RAYA SIMBOLON KM. 10",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "MAX DONALD, CV",
    "alamat": "GORAT PALLOMBUAN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "MAROLO, CV",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "CIPTA LESTARI UTAMA, CV",
    "alamat": "HATOGUAN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "FOKPMAS, CV",
    "alamat": "PEKAN PANAHATTAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "HATOGUAN LESTARI, CV",
    "alamat": "PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "GEMASIKA, CV",
    "alamat": "SIGAOL MARBUN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "RM, CV",
    "alamat": "DSN SOSOR 2 KEL. SIGAOL MARBUN PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BONA JAYA, CV",
    "alamat": "BUNTUMAULI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "NEWS 2010, CV",
    "alamat": "RONNGURNIHIUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "AEK TAOAR, CV",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "BATIS PUTRA, CV",
    "alamat": "LUMBAN DUGUL, KEC. RONGGURNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "CANTIK, CV",
    "alamat": "LUMBAN DUGUL",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PARDUGUL, CV",
    "alamat": "LUMBAN DUGUL",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "RIRIS, CV",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "ARI NAULI SABUNGAN, CV",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "BONAULI SABUNGAN, CV",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "MUNAWWARAH, CV",
    "alamat": "JL PERINTIS KEMERDEKAAN DSN I SERDANG BEDAGAI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PUTRA SALEH ANUGERAH, CV",
    "alamat": "SIPULO-PULO KEL. SABUNGAN NIHUTA RONGGUR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "PARULIAN, CV",
    "alamat": "JL GEREJA NO 09",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "MARSADA, CV",
    "alamat": "JL RAYA RIANIATE KM. 7",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PANCA PUTRA, CV",
    "alamat": "RIANIATE, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "RIANBOH, CV",
    "alamat": "JALAN SIHUSAPI",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ANUGERAH ABADI SEJAHTERA, CV",
    "alamat": "JL HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "FRIDO LBR, CV",
    "alamat": "JL RAYA RIANIATE KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "HITADISONN, CV",
    "alamat": "SIAMBALO KEL. HUTA NAMORA KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "INDAH NATAMA, CV",
    "alamat": "JL RIANIATE KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "LOBUAN, CV",
    "alamat": "hutanamora, pangururan",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "NATAMA GROUP, CV",
    "alamat": "JL RIANIATE - PANGURURAN HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "POPMAS, CV",
    "alamat": "JL RAYA RIANIATE -",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "RIDHO KARYA NATAMA, CV",
    "alamat": "JL RAYA RIANIATE DS.HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BANJAR, CV",
    "alamat": "JL DR. HADRIANUS SINAGA KEL. PINTUSONA KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BEGABE, CV",
    "alamat": "pintusona, pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KARYA SIMPAR FUSO LINSA, CV",
    "alamat": "JL DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "LINSA, CV",
    "alamat": "pintusona",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "LINSA, UD",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MANATAP, CV",
    "alamat": "JALAN DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SEJAHTERA UTAMA, CV",
    "alamat": "JL PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SIBIGO AMBORA, CV",
    "alamat": "JL DR. HADRIANUS",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ULUAN BOLON, CV",
    "alamat": "JL HADRIANUS SINAGA PINTU SONA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TIMBUL, CV",
    "alamat": "huta tinggi",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "7 NAGA MARS, CV",
    "alamat": "JL NAHUM SITUMORANG KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ACI BIBIN, CV",
    "alamat": "JL USKUP AGUNG SUGIO PRANOTO PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ATN, CV",
    "alamat": "JL DI. PANJAITAN PARDOMUAN I PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BANJAR NAULI, CV",
    "alamat": "JL DIPONEGORO PARDOMUAN I PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DELTA, CV",
    "alamat": "JL HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JAYA AGUNG, CV",
    "alamat": "JL DR. FERDINAN LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LAMS, CV",
    "alamat": "JL PEKAN IMPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARADEK JAYA, CV",
    "alamat": "JL D.I. PANJAITAN NO 221/222, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MIDUK AEK NAMARPARBUE, CV",
    "alamat": "JL D.I. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MULTI NIYARTA, CV",
    "alamat": "JL DI. PANJAITAN NO 209 PARDOMUAN I PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PARMAN ARTHA, UD",
    "alamat": "JL USKUP AGUNG S.PRANOTO NO 46",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERDANA KARYA, CV",
    "alamat": "JL NAHUM SITUMORANG, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERMATA INDAH, CV",
    "alamat": "LUMBAN RAJA, KEL. PARDOMUAN I, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PURNA KARYA, CV",
    "alamat": "JL NAHUM SITUMORANG NO 5, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RAJA HINOMA, CV",
    "alamat": "JL DR. F.L. TOBING NO 12, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROSARI YONASA, CV",
    "alamat": "JL D.I. PANJAITAN NO 222",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SEJAHTERA, UD",
    "alamat": "JL DIPONEGORO PARDOMUAN I PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TRI HENRY, CV",
    "alamat": "JL HADRIANUS SINAGA PARDOMUAN 1 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ULU TAUN, CV",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ALINGAN, CV",
    "alamat": "JL TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ARIONDORO, CV",
    "alamat": "JL KEJAKSAAN NO 10, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BUNGA TANJUNG (MDS), CV",
    "alamat": "SISINGAMARAJA NO.43,",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DWIGOLF, CV",
    "alamat": "DSN HATOGUAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "GALORI CITRA LESTARI, CV",
    "alamat": "JL KEJAKSAAN NO 33",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HOTANG JAYA PERKASA, CV",
    "alamat": "JL SISINGAMANGARAJA NO 11 PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MANGARERAK, CV",
    "alamat": "JL PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MURNI JUPITA, CV",
    "alamat": "JL KEJAKSAAN NO.14, KEL. PASAR PANGURURAN, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PARDOMUAN, CV",
    "alamat": "JL SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RATNA, UD",
    "alamat": "JL PULO SAMOSIR NO 6, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROMUAL, CV",
    "alamat": "JL KEJAKSAAN NO.19",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RUHUT, CV",
    "alamat": "JL SISINGAMANGARAJA NO 15",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SAUT MARULAK, CV",
    "alamat": "JL SISINGAMANGARAJA NO 32",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SITANGGOR NAULI, CV",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SUMBER SARI, CV",
    "alamat": "JL KEJAKSAAN NO 33",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HARRIS, CV",
    "alamat": "JL TELE TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "TIGOR JAYA, CV",
    "alamat": "tanjung bunga, pangururan",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "HOT SPRING, CV",
    "alamat": "JL AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SAMPURAN, CV",
    "alamat": "JL AEK RANGAT KEL. SIOGUNG- OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BATU SOKKAL, CV",
    "alamat": "JL SIMANINDO NO 122 PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PARKA MENTA, CV",
    "alamat": "SITANGGANG BAU, KEL. PARSAORAN I, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SANALUM, CV",
    "alamat": "JL SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SIAEK MUAL, CV",
    "alamat": "JL HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TAO TOBA NAULI, CV",
    "alamat": "JL SIMANINDO NO 22",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TUMPAK RAJA, CV",
    "alamat": "JL KOL. LIBERTI MALAU NO 31",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "NUNUT, CV",
    "alamat": "JL PANGURURAN - SIMANINDO KM. 1",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "SEMANGAT, CV",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "STIKA, CV",
    "alamat": "JL SIMANINDO - SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "TADIAN RONATAMA, CV",
    "alamat": "JL PANGURURAN - SIMANINDO SIDABAGAS NO 57, SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "HUSIMA JAYA, CV",
    "alamat": "JL SIMANINDO KM. 4 NO 61, KEL. SITOLUHUTA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "IMPIAN INDAH, CV",
    "alamat": "SITOLUHUTA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "LOUIS, CV",
    "alamat": "JL SIMANINDO KM. 9 PARBABA KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "MULA KONSTRUKSI, CV",
    "alamat": "JL DR, HADRIANUS SINGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PARNA GOK, CV",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PINTU BATU, CV",
    "alamat": "JL SOSOR GALUNG, KEL. TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "RONDANG NAULI, CV",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "UNEDO, CV",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SITOBU JAYA, CV",
    "alamat": "JL RYA SITOBU NO.1 GAROGA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "MARTOHONAN, CV",
    "alamat": "BESAR SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SINAR ELGA SMART, CV",
    "alamat": "JALAN DS SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "TORANG MANDIRI, CV",
    "alamat": "JL TOMOK KEC. SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ADINA, CV",
    "alamat": "JL SIANJUR MULA-MULA NO 31, PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MONAMAS JAYA, CV",
    "alamat": "JL SIANJUR MULA-MULA NO 31, PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MONANG JAYA, CV",
    "alamat": "JL SIANJUR MULA-MULA PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MUFAKAT, CV",
    "alamat": "DESA PON KEC SEI BAMBAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PEMBANGUNAN SAMOSIR, CV",
    "alamat": "JL SIMANINDO KM. 7 PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SIGULUAN, CV",
    "alamat": "JL SIMPANG PANAHATAN KEC. PALIPI",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TOTAMA GROUP, CV",
    "alamat": "JL PATUAN ANGGI DESA PASAR SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TUNAS, CV",
    "alamat": "JL SIAHAAN BALIAN NO 1 PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "BANGUN JAYA, CV",
    "alamat": "BANGUN PURBA KEL. SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "TRIRAMA AGUNG, CV",
    "alamat": "SIDALUDALU DSN 2",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "TIMBAS, CV",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "SIBIO BIO, CV",
    "alamat": "JL RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAUR DO NAULI, CV",
    "alamat": "SILAPIT",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NIRMAYANTO GROUP, CV",
    "alamat": "DR. F. L. TOBING NO 26, DS. PARDOMUAN 1, KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARANATHA, CV",
    "alamat": "JL GEREJA NO 8",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LOIS, CV",
    "alamat": "JL KOL. LIBERTY MALAU NO 143, DS. PARDOMUAN 1, KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DOSROHA JEEGEES HABONARAN, CV",
    "alamat": "JL PUSUK BUHIT TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TRUST, CV",
    "alamat": "JL RAYA PALIPI MOGANG",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "KARYA VANY KONSTRUKSI, PT",
    "alamat": "SOSOR I",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JURNI GROUP, PT",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HAIRI ARTHA UTAMA, PT",
    "alamat": "JL HAIRI NO 1",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "LOIS CO-CA ABADI, PT",
    "alamat": "JL KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TRYA LUMBAN LINTONG, PT",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "Abadi Protesa Mata Medan",
    "alamat": "Jalan Lingkar Tuktuk",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KILANG PADI <Daniel T.a. Sagala>",
    "alamat": "Ginolat",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "Geneng Sirimbang, UD",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RM, CV",
    "alamat": "sosor II desa sigaol marbun. kec palipi. kab. samosir",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "PINTALAN GROUP, CV",
    "alamat": "Desa Paraduan Kec.Ronggur Nihuta Kab.Samosir",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "Bangun dongoran persada",
    "alamat": "Sosor silinjuang",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "TOKO EMAS DAN BERLIAN GILBERT",
    "alamat": "JL. FL. TOBING PANGURURAN",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "RITA PARBORAS",
    "alamat": "Pardomuan I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "VINA TOUR DAN TRAVEL, PT",
    "alamat": "JL. DR HADRIANUS SINAGA, ONAN BARU PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KARAOKE RUMAH HOLI",
    "alamat": "JL. AEK RANGAT",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "ENI SALON",
    "alamat": "DESA LUMBAN SUHI SUHI TORUAN DUSUN 2",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KILANG PADI JAHIM",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "KILANG PADI DIRMAN",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "MEMBUAT KUSEN <ADON>",
    "alamat": "SIBUTAR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "MENYADAP AREN <POLDYAMAN>",
    "alamat": "SITALASEAK",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "MENYADAP AREN <GABE>",
    "alamat": "SOSOR MATIO",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "MENYADAP AREN <PERUBAHAN>",
    "alamat": "SOSOR MATIO",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "MENYADAP AREN <CHARLES>",
    "alamat": "SIRIAON",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "MENYADAP AREN<DAMSON>",
    "alamat": "SIRIAON",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "MEMBUAT KUE<MERI>",
    "alamat": "PARDOMUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "USAHA TIKAR PANDAN ROSLINA SIMATUPANG",
    "alamat": "GALUNG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS KARO MONIKA SIMBOLON",
    "alamat": "GALUNG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA ISI ULANG BERTUAH WATER",
    "alamat": "GALUNG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TIKAR PANDAN ERNATA NAIBAHO",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TIKAR PANDAN HOTNI SIMBOLON",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA JAHIT EVI RAJAGUKGUK",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA  BATU BATA OLOAN SIMBOLON",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA LAMBOK SIMBOLON",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA KARTOLO SIMBOLON",
    "alamat": "SOSOR TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TIKAR PANDAN LENTI AMBARITA",
    "alamat": "SOSOR MABARITA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA JADOSTON SIMBOLON",
    "alamat": "PARSIHORAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA TONGGI SIMBOLON",
    "alamat": "DOLOK NADUA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA ROBERTO SIMBOLON",
    "alamat": "DOLOK NADUA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA FIRMAN WAO",
    "alamat": "DOLOK NADUA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA BATU BATA RIANTO SILABAN",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS KARO DAMERIA SITANGGANG",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS KARO ITA PURNAMA MALAU",
    "alamat": "HUTABARU",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TIKAR PANDAN ESRIANA SINAGA",
    "alamat": "SITIOTIO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USAHA TIKAR PANDAN MASNUR MANIK",
    "alamat": "SITIOTIO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "USHA KUE DONAT RESENDI SIMBOLON",
    "alamat": "TANO HUDON",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "TIKAR PANDAN RUMINTA SIMBOLON",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TENUN KASUSSAK SETIA ARNIELLI NDRAHA",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TENUN KASUSSAK LESNA SIMANIHURUK",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "USAHA JAHIT NOVIA PRETTY SIMBOLON",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TIKAR PANDAN NURLIDA SINAGA",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "TENUN LASMARIA",
    "alamat": "LUMBAN URUK URUK",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LAS TUA DIMAN",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JAHIT HUDDEN",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TENUN ULOS KARO MELIADA",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GODUNG, CV",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENYADAP AREN PARDAMENTA",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENYADAP AREN SIKKAT",
    "alamat": "SIMANDEGE",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PENYADAP AREN SUBUR",
    "alamat": "SIMANDEGE",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DEPOT JONNER",
    "alamat": "SIRIMBANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TUKANG JAHIT <MELI>",
    "alamat": "SIAGIAN PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WILLI ART, CV",
    "alamat": "SIAGIAN SD 1 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ABC MAS CV",
    "alamat": "JL. FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA JAHIT PAKAIAN ROSPITA",
    "alamat": "JL RONGGUR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA MEBEL VEROFIFEN",
    "alamat": "JALAN RONGGUR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JONSON SOFA",
    "alamat": "JL. PELABUHAN ONAN BARU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LASTI JAHIT",
    "alamat": "GG BERSAMA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TIARASI SIMBOLON",
    "alamat": "GG BERSAMA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NASO ANGKAT KUE",
    "alamat": "GG BERSAMA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "THAMRIN ETALASE",
    "alamat": "TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MEMBUAT KUE BASAH",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MEMBUAT KUE BASAH SIMBOLON",
    "alamat": "PANAHATAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "DIPPOS WATER",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SOALA GOGO SERASI",
    "alamat": "PANAHATAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TUKANG JAHIT PAKAIAN",
    "alamat": "TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TENUN ULOS",
    "alamat": "TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TENUN ULOS",
    "alamat": "TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MEMBUAT KUE",
    "alamat": "TANO PONGGOL",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JAHIT PAKAIAN WANITA <CINDY>",
    "alamat": "BATU BOLON",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PENGRAJIN TAMPI <TIKKOS>",
    "alamat": "ANDALIMAN",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <ASNITA>",
    "alamat": "SITUMBIAK",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PENGRAJIN TAMPI <POSMARIA>",
    "alamat": "SIBANGI DUGUL BELAKANG SD",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PENGRAJIN TAMPI <DORLA>",
    "alamat": "RARAMBEAN",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <LASMINI>",
    "alamat": "SAORNAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PENYADAP AREN <MANIUR>",
    "alamat": "AEK DUGUL",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PENGRAJIN TAMPI <DORMAULI>",
    "alamat": "KOMPLEK HKBP",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "TENUN ULOS KARO <MURNI>",
    "alamat": "KOMPLEK SD AEK NAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <SARTIKA MALAU>",
    "alamat": "LUMBAN SITANGGANG",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <ANITA SINURAT>",
    "alamat": "LUMBAN SINURAT",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <ROSMAULI MANIK>",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <LASTARIA SITANGGANG>",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA ANYAMAN TIKAR <ROSINTA SITANGGANG>",
    "alamat": "NAGA TIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA ANYAMAN TIKAR <RELI SIMARMATA>",
    "alamat": "NAGA TIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA JAHIT PAKAIAN <MAROLOAN NAINGGOLAN>",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <HOTMAULI SINURAT>",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <EMI HUTAPEA>",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <GOK RIA MANIK>",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS <SINTEN SIMARMATA>",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TENUN <RONITA>",
    "alamat": "HUTA RAJA, DUSUN 2 DESA LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN UDURMA",
    "alamat": "JALAN HARAPOHAN, DUSUN 2 DESA LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN <MARLINA>",
    "alamat": "SINAPITU DUSUN 2 DESA LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN <TUTI>",
    "alamat": "SINAPITU DUSUN 2 DESA LUMAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TABITA TAYLOR",
    "alamat": "SITOBU, DUSUN 2 DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "PENJAHIT <NIRMAWATI>",
    "alamat": "PASAR SITOBU NO. 12, DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "Pedagang pupuk (jestron nainggolan)",
    "alamat": "Sari Marihit",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "Kampak Silaban (Pedagang pengumpul kentang)",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Toko gordyn onan baru",
    "alamat": "Pardomuan I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KM SABAR TANI",
    "alamat": "PELABUHAN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ADI BARERA, UD",
    "alamat": "PARJONGGI DESA PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PERWAKILAN P.O SAMPRI ROYAL CLASS",
    "alamat": "pardomuan satu",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "USAHA JAHIT SARAH",
    "alamat": "JL. DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TEMPAT WISATA  Pantai Batu Hoda",
    "alamat": "JL tomok-pangururan, desa cinta dame",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "CITRA VAN TITIPAN KILAT PANGURURAN, PT",
    "alamat": "JL. D.I PANJAITAN NO.66 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "J&T EXPRESS PANGURURAN",
    "alamat": "JL. PANTUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "SAP EXPRESS",
    "alamat": "JL. RONGGUR NIIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ID EXPRESS",
    "alamat": "JL. USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TRI PUTRA JAYA",
    "alamat": "JLN RING ROAD SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RIAN TUMORA",
    "alamat": "JL BARISAN GEREJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "BINTANG BIRU DILANGIT, PT",
    "alamat": "KEL. SEI PELUNGGUT",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "PODA SARI",
    "alamat": "GORAT DUSUN 3",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "PUTRA RABOS GRUP, PT",
    "alamat": "JL. RAYA SIMANINDO DESA CINTA DAME RAUT BOSI",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "BUMDES SAPPINUR BUNGA",
    "alamat": "BANEARA DESA PARTUKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "WATER FRONT PANGURURAN",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KAMPUNG ULOS HUTARAJA PARDAMEAN",
    "alamat": "JL. RAYA SIMANINDO DESA LUMBAN SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "Pembuatan Tampi <Mida Sitorus>",
    "alamat": "Desa Sinabulan, Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "Rumah kontrakan \"Junedi Sihaloho",
    "alamat": "Dusun 3 Desa Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Roti Ketawa Bakri",
    "alamat": "Jalan Perkantoran Pemkab Samosir, Dusun 3 , Desa Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Usaha becak Kiel",
    "alamat": "Dusun 3 Desa Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Rumah makan Family (khas Padang)",
    "alamat": "Desa Pardomuan I, Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Instalasi listrik \"Lamprison Sitinjak",
    "alamat": "Desa Huta Tinggi, Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "Usaha Instalasi listrik <Irsan situmorang>",
    "alamat": "Dusun 2 Desa Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Prakter Dokter Umum <Joice H Nainggolan>",
    "alamat": "Sait Nihuta",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "JNE EXPRESS",
    "alamat": "Jalan SM Raja No. 27 Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Okla Cinematografy",
    "alamat": "Jalan Ronggur, Dusun 2, Pardomuan I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Sampri, PT",
    "alamat": "Kelurahan Pasar Pangururan, Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SHE BOSTON LAUNDRY",
    "alamat": "Jln. DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SIHOLE PARADISE INN PARBABA",
    "alamat": "JLN. PANGURURAN SIMANINDO DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "TIO BOLON HOMESTAY",
    "alamat": "DUSUN I, SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SARI HOMESTAY",
    "alamat": "JL. RAYA SIMANINDO DESA SIOPAT SOSOR DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "D'FLO HOMESTAY",
    "alamat": "Jl. RAYA SIMANINDO DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "ANTONY HOMESTAY",
    "alamat": "JALAN RAYA SIMANINDO DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "ABADI COTTAGE",
    "alamat": "JL. LINGKAR TUKTUK, KELURAHAN TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SITIOTIO RESORT",
    "alamat": "AEK RANGAT NO 71 KEL.SIOGUNG-OGUNG KEC.PANGURURAN KAB.SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PENGINAPAN MARROAN 2",
    "alamat": "Jln.Lingkar Tuktuk Siadong, Kelurahan Tuktuk Siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARINA HOTEL SAMOSIR",
    "alamat": "DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "SAMUEL HOMESTAY",
    "alamat": "JALAN RAYA SIMANINDO PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "NABASA RD HOTEL",
    "alamat": "PANTAI INDAH SITUNGKIR DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "PENGINAPAN PAGAR BATU",
    "alamat": "Sibara bara, Desa Turpuk Sihotang, SIBEA bea",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PENGINAPAN HETISILING",
    "alamat": "HARIAN BOHO, DESA TURPUK SIHOTANG KECAMATAN HARIAN, KABUPATEN SAMOSIR",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "EBIKEL PENGINAPAN",
    "alamat": "Jl.Lingkar Tuktuk Siadong Kelurahan Tuktuk Siadong Kecamatan Simanindo Kabupaten Samosir",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUMA COTTAGES",
    "alamat": "JLN GEREJA TUKTUL SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BETA MARTABE RESORT",
    "alamat": "JL. HARIAN BOHO, DESA TURPUK SIHOTANG, KECAMATAN HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PENGINAPAN PUTRI MALAU",
    "alamat": "Harian boho-Desa Turpuk Sihotang kecamatan harian kabupaten Samosir",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "NYIUR MELAMBAI HOME STAY",
    "alamat": "JL. RAYA SIMANINDO, DESA SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "BAGAS PENGINAPAN",
    "alamat": "Sibara bara Desa Turpuk Sihotang kecamatan harian, kabupaten Samosir",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PENGINAPAN GRAND SIPAYUNG",
    "alamat": "JL. RAYA SIMANINDO PASIR PUTIH",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "PENGINAPAN MANIHURUK",
    "alamat": "PINTU UTAMA PASIR PUTIH PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "LABERSA HOTEL & CONVENTION CENTER",
    "alamat": "JALAN RAYA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "TUK TUK TIMBUL BUNGALOW DAN RESTAURAN",
    "alamat": "Pindaraya",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PENGINAPAN SIBEA-BEA",
    "alamat": "HARIAN BOHO-TURPUK SIHOTANG, KABUPATEN SAMOSIR",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "VANDUS GUEST HOUSE",
    "alamat": "Jl.Lingkar Tuktuk Siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HOMESTAY NAGARATUS",
    "alamat": "Lape, Aek Sipitu Dai, Kecamatan Sianjur mula mula, Kabupaten Samosir",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SURABAYA RESSORT",
    "alamat": "AEK RANGAT KEL. SIOGUNG OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PARTONDUNGAN HOMESTAY",
    "alamat": "DESA SITOLU HUTA",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "MONICA HOMESTAY",
    "alamat": "JL. RAYA SIMANINDO DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PENGINAPAN SHELA 88",
    "alamat": "JLN RAYA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "GUEST HOUSE /PENGINAPAN HKBP DISTRIK VII",
    "alamat": "PROVINSI SUMATERA UTARA KAB/KOTA SAMOSIR KECAMATAN PANGURURAN KEL/DESA PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MANIK RAJA HOMESTAY",
    "alamat": "KOMPLEK PERKANTORAN PEMKAB SAMOSIR, DIDEPAN GEDUNG DPRD KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SPPG SAMOSIR PANGURURAN LUMBAN SS TORUA",
    "alamat": "JALAN RAYA SIMANINDO, DESA LUMBAN SUHI-SUHI, KEC. PANGURURAN, KAB. SAMOSIR, PROV. SUMATERA UTARA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "Cabang Rutan Pangururan",
    "alamat": "Jl.Kejaksaan No.18 Pangururan",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "USAHA WARUNG JAJANAN <ROSNA SIGIRO>",
    "alamat": "PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "USAHA TENUN ULOS KARO (ESLINA SITUMORANG)  <ESLINA SITUMORANG>",
    "alamat": "PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "Bertenun Ulos <Friska> <Friska Yanti Sinaga >",
    "alamat": "Naga Timbul",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "UD. DOS NI ROHA <SAUT MAROLOP LUMBANRAJA>",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "Usaha tenun <Risnauli manik>",
    "alamat": "Lumban lait lait",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "Bertenun Ulos <Marni> <Marni Sinurat >",
    "alamat": "Naga Timbul",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "Bertenun Ulos <Marni> <Marni Sinurat >",
    "alamat": "Naga Timbul",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "Bertenun Ulos <Diana > <Diana Sitanggang>",
    "alamat": "Lumban Sinurat",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "KEDAI TUAK <BESLIN  MIKAEL SITANGGANG>",
    "alamat": "LUMBAN PANSUR",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "Pengumpulan Cabe, Bawang,Kopi,Kemiri <Resman Situmorang >",
    "alamat": "Sinaga Uruk Pandiangan",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "Bertenun Ulos <Dewi> <Dewi sagala>",
    "alamat": "Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "INTICOM, PERCETAKAN  <LAMMIAN NAIBAHO>",
    "alamat": "Jl Kolonel Liberty Malau",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Salon Jonathan <Winda Silalahi>",
    "alamat": "Desa Boho",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "Tenun( hotma simanihuruk) <Hotma simanihuruk>",
    "alamat": "Silenduk",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "Bertenun Ulos <Mery> <Mery Clirent Sitanggang>",
    "alamat": "Naga Timbul",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "Bertenun Ulos <Reminta> <Reminta Manik>",
    "alamat": "Lumban Simbolon",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "DAKA MEGAPERKASA",
    "alamat": "PARTUNGKO NAGINJANG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "BANGUN MITRA ABADI",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KEDAI NASI CAMPUR(TIMORIA PASARIBU) <TIMORIA PASARIBU>",
    "alamat": "JL D PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RONNY, CV",
    "alamat": "JL. BESAR DESA URAT II KEC PALIPI",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "LINTAS JARINGAN NUSANTARA",
    "alamat": "JL. Sitanggang Bau No.69, RT.000 RW.000, Parsaroan I, Kec. Pangururan, Kab. Samosir, Provinsi Sumatera Utara",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "ARGATEK TORSADA GUNA",
    "alamat": "Desa Rianiate Kecmatan Pangururan",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MARIANNA RESORT INTERNATIONAL, PT",
    "alamat": "JL. PUD KELURAHAN TUKTUK SIADONG, SIMANINDO, SAMOSIR",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "BANEARA HOTEL",
    "alamat": "BANEARA DESA PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MAFIR RESTAURANT DAN PENGINAPAN",
    "alamat": "JL. LINGKAR TUK TUK, KELURAHAN TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PARNAS PENGINAPAN",
    "alamat": "JLN RING ROAD TUK TUK SIBOLOPIAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ANARA VILLA SAMOSIR",
    "alamat": "JL. LINTAS SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "HAMIDAH PENGINAPAN",
    "alamat": "JLN BESAR TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "DPOS HOMESTAY",
    "alamat": "JLN LINGKAR TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MANIK GARDEN INN",
    "alamat": "PARBABA DESA HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "SIBAYAK HOMESTAY",
    "alamat": "JL LINGKAR TUK TUK, KELURAHAN TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PENGINAPAN PERMATA",
    "alamat": "PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SHARON HOMESTAY",
    "alamat": "JLN SAITNIHHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PENGINAPAN BETA MARTABE",
    "alamat": "JLN AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "KASIH HOMESTAY",
    "alamat": "JLN PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KB KASIH BUNDA",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "KB HARAPAN IBU",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "KB GREGORIUS",
    "alamat": "SITATAR, PARDOMUAN NAULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "KB MUAL TAMBA",
    "alamat": "TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "Kelompok bermain FRIENDLY",
    "alamat": "Jl. Nainggolan-Onanrunggu Pangaloan",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "KB KASIH ANUGRAH",
    "alamat": "PANANGGANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "SD NEGERI 18 PARHUSIP III",
    "alamat": "PARHORASAN",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "KB KASIH",
    "alamat": "SISANGKIL",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "SD NEGERI 13 PARSAORAN",
    "alamat": "PARSAORAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "SD NEGERI 7 SIANJUR MULAMULA",
    "alamat": "SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "POLINDES DESA SAMPUR TOBA",
    "alamat": "DESA SAMPUR TOBA",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "POSKESDES BATU BOLON",
    "alamat": "DESA HUTAGURGUR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "PUSTU SIPIRA",
    "alamat": "DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "POSKESDES SARIMARRIHIT",
    "alamat": "Sarimarrihit",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "POLINDES HARIAN",
    "alamat": "DESA HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU PARMONANGAN",
    "alamat": "DESA PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "POLINDES LUMBAN SUHI SUHI DOLOK",
    "alamat": "LUMBAN SUHI SUHI DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "POLINDES UNJUR",
    "alamat": "DESA UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "POSKESDES TARABUNGA SIMBOLON PURBA",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "SMP SW. KARYA MURNI SIDIHONI",
    "alamat": "DESA SIJAMBUR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "PRAKTIK BIDAN KATARINA SIAGIAN",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "POSKESDES DESA SIGAOL MARBUN",
    "alamat": "DESA SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "POLINDES DESA JANJIMATOGU",
    "alamat": "DESA JANJIMATOGU",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "PUSTU SIDIHONI",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "APOTIK ANUGRAH",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "POLINDES TOGUAN GALUNG",
    "alamat": "DESA TOGUAN GALUNG",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "POSKESDES DESA SITINJAK",
    "alamat": "DESA SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "POLINDES LUMBAN SUHI SUHI",
    "alamat": "LUMBAN SUHI SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "POLINDES DESA PALIPI",
    "alamat": "DESA PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "POLINDES LONTUNG",
    "alamat": "DESA PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU DESA TANJUNG BUNGA",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "PUSTU BOLOBOLO",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "POLINDES HATOGUAN",
    "alamat": "DESA HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "POLINDES SIRURITURI",
    "alamat": "DESA HUTA RIHIT",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "POSKESDES DESA HUTAGINJANG",
    "alamat": "DESA HUTAGINJANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "POLINDES MARTOBA",
    "alamat": "DESA MARTOBA",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "TK AGAPE",
    "alamat": "RAYA MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "KB MAJU BERSAMA",
    "alamat": "HUTA HOTANG",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "SD NEGERI 3 NAINGGOLAN",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SD NEGERI 10 SIGAOL SIMBOLON",
    "alamat": "SIGAOL SIIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SD NEGERI 8 SAMPURTOBA",
    "alamat": "SAMPUR TOBA",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "POSKESDES DESA BONANDOLOK",
    "alamat": "DESA BONANDOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "PUSTU SABULAN",
    "alamat": "DESA SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "POSKESDES DESA BOHO",
    "alamat": "DESA BOHO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "POSKESDES DESA SIANJUR MULAMULA",
    "alamat": "DESA SIANJUR MULAMULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "BIDAN BR NAIBAHO",
    "alamat": "DESA AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "POSKESDES JANJI RAJA",
    "alamat": "DESA JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "POSKESDES AEKNAULI",
    "alamat": "AEKNAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "PUSTU DESA HARIAN",
    "alamat": "DESA HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "PUSTU CINTA DAME",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "POLINDES SALAON DOLOK",
    "alamat": "SALAON DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "POLINDES DESA PANAMPANGAN",
    "alamat": "DESA PANAMPANGAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "POLINDES MARLUMBA",
    "alamat": "DESA MARLUMBA",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "POLINDES DESA SIANTING ANTING",
    "alamat": "DESA SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PUSKESMAS MOGANG",
    "alamat": "DESA PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER UMUM DR. SAUT SINABUTAR",
    "alamat": "LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "POLINDES SIGAOL MARBUN",
    "alamat": "SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BATU SOKKAL GROUP, CV",
    "alamat": "Jl. Kol. Liberty Malau, Pangururan",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "KB LAMTAMA",
    "alamat": "URAT TIMUR",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "KB BONA NIPINASA",
    "alamat": "HARIAN, DESA TURPUKN LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "KB MELATI",
    "alamat": "TAMBA, CINTA MAJU",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "TK SWASTA ASSISI",
    "alamat": "Tomok Kecamatan Simanindo",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KB KAWAN CERIA",
    "alamat": "PARBALOHAN",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "SD NEGERI 21 PASARAN PARSAORAN",
    "alamat": "DOLOK MARISI",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "SMP SW. ADVENT SIMBOLON",
    "alamat": "SIGAOL SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SD NEGERI 13 HASINGGAAN",
    "alamat": "BAHAL-BAHAL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SD NEGERI 4 JANJI RAJA",
    "alamat": "JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU PARTUNGKONAGINJANG",
    "alamat": "DESA  PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "POSKESDES DESA SINGKAM",
    "alamat": "DESA SINGKAM",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Singkam"
  },
  {
    "nama_usaha": "SD NEGERI 9 SIJAMBUR",
    "alamat": "DESA SIJAMBUR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "PUSTU CINTA MAJU",
    "alamat": "DESA CINTA MAJU",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "POSKESDES MADUMA",
    "alamat": "DESA MADUMA",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "PUSKESMAS SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "POSKESDES SITOLUHUTA",
    "alamat": "SITOLUHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "POSKESDES PARHORASAN",
    "alamat": "PARHORASAN",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "POSKESDES SIMANINDO SANGKAL",
    "alamat": "SIMANINDO SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "POLINDES PASARAN PARSAORAN",
    "alamat": "PASARAN PARSAORAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "PUSKESMAS SITIOTIO",
    "alamat": "DESA SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "KB LOGOS",
    "alamat": "JL. BESAR DOLOK SANGGUL - SIDIKALANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KB GAPURA",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "KB SOLAGRATIA HKBP",
    "alamat": "SIGAOL SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "KB CHYRIE ELLEIZON",
    "alamat": "SIMANGONDNING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TPA MITERA SPITI INDONESIA",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BIDAN SARIATI SITINJAK",
    "alamat": "Sarimarrihit",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "SD NEGERI 7 SALAON DOLOK",
    "alamat": "SALAON DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "PUSTU GINOLAT",
    "alamat": "DESA GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "POSKESDES SOSORDOLOK",
    "alamat": "DESA SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "POSKESDES SIBORAS",
    "alamat": "DESA GORAT PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "APOTIK BONITA",
    "alamat": "DESA PARTUNGKO NAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER UMUM DR.BILMAR D SIDABUTAR",
    "alamat": "DESA Partungko Naginjang",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "POLINDES URAT II",
    "alamat": "DESA URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN TETTY M PANJAITAN",
    "alamat": "DESA HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "POSKESDES SIHUSAPI",
    "alamat": "DESA SIHUSAPI",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "POLINDES HUTAGALUNG",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "POLINDES TOMOK",
    "alamat": "DESA TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "APOTEK GABE",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PUSTU DESA SITAMIANG",
    "alamat": "DESA SITAMIANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "POLINDES SIMANINDO",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "PUSTU SIMBOLON PURBA",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "POLINDES AMBARITA",
    "alamat": "DESA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER BUHA PURBA",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KB DELIMA",
    "alamat": "PARDOMUAN",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "KB SITIO-TIO",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KB NORLAN",
    "alamat": "Lumban Siantar, Nainggolan",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "KB LESTARI",
    "alamat": "PANANGGANGAN II",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "KB MUTIARA",
    "alamat": "HUTA RIHIT",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "KB AGAVE",
    "alamat": "SIHUSAPI",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "SD NEGERI 15 SIGAOL SIMBOLON",
    "alamat": "SIGAOL SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SD NEGERI 5 AEK SIPITUDAI",
    "alamat": "SOSOR NANGKA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Habeahan Naburahan"
  },
  {
    "nama_usaha": "PUSTU TAMBA DOLOK",
    "alamat": "DESA TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "POLINDES DESA JANJI MARTAHAN",
    "alamat": "DESA JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "POLINDES BIDAN P.BR.MALAU",
    "alamat": "PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "POSKESDES DESA PARDOMUAN NAULI",
    "alamat": "DESA PARDOMUAN NAULI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "POLINDES BONSAI HUTABOLON",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "POLINDES HUTAGINJANG",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU HUTAGALUNG",
    "alamat": "DESA HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "POSKESDES DESA SIBORO",
    "alamat": "DESA SIBORO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "POSKESDES DESA SIDEAK",
    "alamat": "DESA SIDEAK",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "PUSTU SIHOBON TOGUAN GALUNG",
    "alamat": "SIHOBON TOGUAN GALUNG",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "POSKESDES HUTA DAME",
    "alamat": "HUTA DAME",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN BENTA",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "POSKESDES TANJUNGAN",
    "alamat": "TANJUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "POSKESDES DESA PANGALOAN",
    "alamat": "DESA PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "PUSKESMAS SIRAIT",
    "alamat": "DESA SIRAIT",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "POLINDES JANJI MARIA",
    "alamat": "JANJI MARIA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "BIDAN GINOLAT",
    "alamat": "DESA GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "POLINDES SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "POLINDES PANANGGANGAN",
    "alamat": "PANANGGANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "PUSKEAMAS HARIAN",
    "alamat": "DESA TURPUK LIMBONG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "KB MARJULU",
    "alamat": "HAMENTE, SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KB BUAH KASIH",
    "alamat": "SAOR NAULI",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "KB KASIH BUNDA",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "POLINDES HARIARAPINTU",
    "alamat": "DESA HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "POLINDES SIPIRA",
    "alamat": "DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "POSKESDES DESA HASINGGAAN",
    "alamat": "DESA HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "KLINIK PRATAMA SANTO LUKAS",
    "alamat": "DESA ONANRUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "PUSTU DESA PAKPAHAN",
    "alamat": "DESA PAKPAHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "POLINDES PARSAORAN 1",
    "alamat": "PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER DR. JACOB",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "POSKESDES SITONGGI TONGGI",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "POSKESDES DESA JANJI MARAPOT",
    "alamat": "DESA JANJI MARAPOT",
    "kecamatan": "Nainggolan",
    "desa": "Janji Marapot"
  },
  {
    "nama_usaha": "POSKESDES DESA PARBALOHAN",
    "alamat": "DESA PARBALOHAN",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER TOGATOROP",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "POLINDES PALLOMBUAN",
    "alamat": "DESA PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "POLINDES SINAGA URUK PANDIANGAN",
    "alamat": "SINAGA URUK PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "POSKESDES TOGUAN GALUNG",
    "alamat": "TOGUAN GALUNG",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "PUSTU HUTA RIHIT",
    "alamat": "HUTA RIHIT",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "Pondok Bersalin Desa (POLINDES) PARHUSIP  III",
    "alamat": "PARHUSIP 3",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "KB ANUGRAH KID",
    "alamat": "PALIPI, DESA HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "KB SILIMALOMBU",
    "alamat": "SILIMALOMBU",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "KB SEHATI",
    "alamat": "JANJI MARIA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "KB SIHOBON",
    "alamat": "HASAHATAN",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "SD NEGERI 24 TANJUNG BUNGA",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "POSKESDES DESA DOLOK RAJA",
    "alamat": "DESA DOLOK RAJA",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "POSKESDES PEABANG DESA AEK SIPITUDAI",
    "alamat": "DESA AEK SIPITUDAI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "POLINDES HARIARA POHAN",
    "alamat": "DESA HARIARA POHAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "POSKESDES TURPUK SIHOTANG",
    "alamat": "DESA TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PRAKTER BIDAN ROSLIA SITINJAK",
    "alamat": "PANAMPANGAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "POSKESDES URAT TIMUR",
    "alamat": "URAT TIMUR",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "POSKESDES SIPORHAS",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER UMUM DR. MANGGALA GULTOM",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "PUSTU DESA SIDEAK",
    "alamat": "DESA SIDEAK",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "POLINDES SIALLAGAN",
    "alamat": "SIALLAGAN PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "POLINDES DESA SITOLUHUTA",
    "alamat": "DESA SITOLUHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN FIARE MANURUNG",
    "alamat": "DESA PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PUSKESMAS BUHIT",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER UMUM DR. LABORA SAMOSIR",
    "alamat": "LUMBAN SUHI-SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "POSKESDES HUTANAMORA",
    "alamat": "DESA HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "POLINDES PANANGGANGAN 2",
    "alamat": "PANANGGANGAN 2",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "POLINDES PARTUNGKONAGINJANG",
    "alamat": "PARTUNGKONAGINJANG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN M. SIANIPAR",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "TK NEGERI 1 SIANJUR MULA-MULA",
    "alamat": "Limbong, Desa Sarimarrihit",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "KB PRIMA KIDS",
    "alamat": "DESA SINGKAM",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Singkam"
  },
  {
    "nama_usaha": "KB NATHANIA",
    "alamat": "Pasaran Parsaoran",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "KB ELSADAI",
    "alamat": "JANJI MARAPOT",
    "kecamatan": "Nainggolan",
    "desa": "Janji Marapot"
  },
  {
    "nama_usaha": "KB EBEN HAEZER",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SD NEGERI 5 HUTAHOTANG",
    "alamat": "BARINGIN",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "TPA SARAH",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SMP SATU ATAP NEGERI 2 ONANRUNGGU",
    "alamat": "DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SD NEGERI 10 SALAON TONGA-TONGA",
    "alamat": "SALAON TONGA-TONGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "POSKESDES PARSAORAN",
    "alamat": "DESA PARSAORAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "POSKESDES BUNTU MAULI",
    "alamat": "DESA BUNTU MAULI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN MELI ANTI SIPIRA",
    "alamat": "DESA SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "POSKESDES DESA HOLBUNG",
    "alamat": "DESA HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "KLINIK PRATAMA DR.MASNUR RAJAGUKGUK",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "POSKESDES DESA SAMPUR TOBA",
    "alamat": "DESA SAMPUR TOBA",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "POLINDES DESA SITUNGKIR",
    "alamat": "DESA SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "PRAKTEK BERSAMA DOKTER SPESIALIS DAN UMUM PANGONDIAN",
    "alamat": "DESA PINTUSONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "POSKESDES PARBABA DOLOK",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "POSKESDES PARSAORAN URAT",
    "alamat": "PARSAORAN URAT",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU LINTONG NIHUTA",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN NOVA PINTUBATU",
    "alamat": "PARDOMUAN 1 (parhapuran)",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POSKESDES DESA GAROGA",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "POSKESDES JAMBU DESA SIPINGGAN",
    "alamat": "DESA SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "PRAKTIK BIDAN ERITA PURBA",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "POLINDES PAMUTARAN",
    "alamat": "DESA PAMUTARAN",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "POSKESDES DESA PASARAN 1",
    "alamat": "DESA PASARAN 1",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "KB SYALOM",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "SD NEGERI 17 SIPIRA",
    "alamat": "SIPIRA TORUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SD NEGERI 9 SIGAOL SIMBOLON",
    "alamat": "SIIGAOL SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SD SW. ADVENT SIMBOLON",
    "alamat": "SIGAOL SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SD NEGERI 18 URAT II",
    "alamat": "DESA URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "SD NEGERI 6 PARSAORAN",
    "alamat": "PARSAORAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "POSKESDES DESA SIPARMAHAN",
    "alamat": "DESA SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "POLINDES SAITNIHUTA",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU SALAON TONGA TONGA",
    "alamat": "SALAON TONGA TONGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "PRAKTEK DOKTER GIGI LASRINA TAMBUN",
    "alamat": "PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "POLINDES PARDOMUAN 1",
    "alamat": "DESA PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POSKESDES SIBORAS",
    "alamat": "GORAT PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "APOTEK DAUD",
    "alamat": "SINAGA URUK PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "PRAKTEK BIDAN MINARDA GURNING",
    "alamat": "PARDOMUAN 1",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PUSKESMAS KECAMATAN ONAN RUNGGU",
    "alamat": "DESA ONANRUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "POSKESDES DESA HABEAHAN NABURAHAN",
    "alamat": "DESA HABEAHAN NABURAHAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Habeahan Naburahan"
  },
  {
    "nama_usaha": "POSKESDES SIJABAT III",
    "alamat": "DESA DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "POLINDES PARBABA DOLOK",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "POSKESDES SINABULAN",
    "alamat": "DESA SINABULAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "PRAKTIK DR.NABILLA",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "POLINDES DESA SIALANGUAN",
    "alamat": "DESA SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "PUSKESMAS PEMBANTU SIJAMBUR",
    "alamat": "DESA SIJAMBUR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "APOTEK SIBORO FARMA",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KB JAYA",
    "alamat": "PALIPI, SIDEAK",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "TK NEGERI 1 NAINGGOLAN",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "KB LESTARI",
    "alamat": "PARADUAN, RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "SD NEGERI 7 SIPARMAHAN",
    "alamat": "SIPARMAHAN",
    "kecamatan": "Harian",
    "desa": "Siparmahan"
  },
  {
    "nama_usaha": "POSKESDES RINA BOLAK",
    "alamat": "DESA RINA BOLAK",
    "kecamatan": "Onan Runggu",
    "desa": "Rinabolak"
  },
  {
    "nama_usaha": "POSKESDES DUSUN 3 PEABANG",
    "alamat": "DESA BOHO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "PUSTU MATAHARI DUA",
    "alamat": "SALAON TOBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "POSKESDES PARDOMUAN NAULI",
    "alamat": "PARDOMUAN NAULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "POLINDES SIGAOL SIMBOLON",
    "alamat": "SIGAOL SIMBOLON",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "POSKESDES IKAN MERAH",
    "alamat": "SILIMA LOMBU",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "PUSTU DESA SAORNAULI HATOGUAN",
    "alamat": "SAORNAULI HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "BIDAN MANDIRI NURISWATI NADEAK",
    "alamat": "SARIMARIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "ROMAULI, CV",
    "alamat": "JL. KOL. LIBERTY MALAU",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "ALUS, CV",
    "alamat": "Jl.Sisingamanagaraja No.28 Pasar Pangururan Kab.Samosir",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "HERLINAWATY ARITONANG",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "ANTONIUS SINAGA",
    "alamat": "TAPIAN NAULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "PIRONIKA SIHOMBING",
    "alamat": "TURPUK SIHOTANG, TURPUK SIHOTANG, HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "SARAH SIDAURUK",
    "alamat": "TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PETRA LIDWINA NAINGGOLAN",
    "alamat": "TAPIAN NAULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MANATAP SIHOMBING",
    "alamat": "JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "INDUSTRI IKAN PANGGANG <RETIMA SIMARMATA>",
    "alamat": "TANO PONGGOL SIOGUNG OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <JABALOS SIMBOLON>",
    "alamat": "SI TABO TABO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "ROTUA SIHOTANG",
    "alamat": "BATU BOLON DESA HUTAGURGUR KECAMATAN SIANJUR MULA-MULA KAB.SAMOSIR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "PEBRINTINA HERAWATI FRANSISKA SIMARMATA",
    "alamat": "JL. PERKANTORAN PARBABA SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "APOTEK NASIONAL <EVAYANTI MEILIANA SAGALA>",
    "alamat": "HUTA RAJA, DUSUN I RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "KEDAI MINUM <TIMUR MARUBA SIMBOLON>",
    "alamat": "PINTU SONA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "INDUSTRI KUE <DIANCE HUTAURUK>",
    "alamat": "HOLANG - HOLANG PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "PARNINGOTAN LUBIS",
    "alamat": "tuktuk PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "Erniwanti simbolon",
    "alamat": "Tappak Dua",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "JUAL JAGUNG <LABORA SITUMORANG>",
    "alamat": "SIGUNANI LOMBU",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "HOTRITA SILALAHI",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "LINDA LUDOVIKA SIMANIHURUK",
    "alamat": "HABEAHAN NABURAHAN, HABEAHAN NABURAHAN, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Habeahan Naburahan"
  },
  {
    "nama_usaha": "DESIMA SITOMPUL",
    "alamat": "MARIA RAJA DUSUN III",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "MERLINA SINURAT",
    "alamat": "SIGUMBANG",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "ROY WIJAYA MANIK",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "CLARENSIA MENDE SIMALANGO",
    "alamat": "LUMBAN POKKI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "MANGOLOI MANURUNG",
    "alamat": "TUKTUK LBN. MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JUAL JAGUNG <LAMRIA SAMOSIR>",
    "alamat": "SITAPONGAN RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HITRAN SILALAHI",
    "alamat": "SIBUNTUON II",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ULIIDA MARBUN",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEDAI MAKANAN <BERLIN SIMBOLON>",
    "alamat": "PASAR SIMBOLON, PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "TENUN ULOS <RISMAYA SITUMORANG>",
    "alamat": "BALIAN JANJI PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "PUTRA SATRIA RIZCI SINAGA",
    "alamat": "SIMENAHENAK",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "ERISMA LUMBANRAJA",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "ABDI FRANCISCO NADAPDAP",
    "alamat": "LUMBAN HARAMBIR, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SADAR ROBINSON GURNING",
    "alamat": "SIBANE BANE",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "ROPENDI SITUMORANG",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "LORISTA H. LIMBONG",
    "alamat": "SINGKAM",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Singkam"
  },
  {
    "nama_usaha": "HOTMIAN SINAGA",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "IMMANUEL TAMBA",
    "alamat": "SIAJAMBUR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "WARUNG MAKAN <NINA EFRIANTI MALAU>",
    "alamat": "JL. RIANIATE PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HOMESTAY ALBINUS SIMANIHURUK",
    "alamat": "LUMBAN GANDA SIOPAT SOSOR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "INDUSTRI TENUN ULOS <ANTONIUS WARUWU>",
    "alamat": "TIGA BODAI LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ROHAYA SITANGGANG",
    "alamat": "DUGUL SIANTAR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "JUAL HASIL TANI <NURHATINA>",
    "alamat": "BUNTU MAULI PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "RIJEN HASIHOLAN SILALAHI",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "TRINAWATI SITUMORANG",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "HOTMAN PASARIBU",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "TOGAR SIMARMATA",
    "alamat": "JL. H. TOBING, PASAR PANGURURAN, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BONDAN SURADI",
    "alamat": "MARTOBA",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "JURI POLA SIMBOLON",
    "alamat": "LUMBAN DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "PENJAHIT <DESI SASTIKA SIREGAR>",
    "alamat": "PINTU SONA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MAYA R. SIDABUTAR",
    "alamat": "JL. LURUS SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "HAHOLONGAN SIRINGORINGO",
    "alamat": "LANGGE",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "JAHADIN TAMBA",
    "alamat": "LUMBAN TAMBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "INDUSTRI KOSMETIK <DUMARISMA SIMBOLON>",
    "alamat": "UPA HODA, HUTA NAMORA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "DELPIKA SIMAMORA",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "JUAL BUAH <MARTOGI MALAU>",
    "alamat": "JL. PATUAN ANGGI PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROMUAL P. SIMARMATA",
    "alamat": "UPAGORDANG, TURPUK LIMBONG, HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "ROMA SIALLAGAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PAUD AGAVE",
    "alamat": "Sihusapi",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "RISTAWAN SIGIRO",
    "alamat": "AEK NAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "JELITA HABEAHAN",
    "alamat": "SIDEAK TORUAN",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "RINTO TAMBA",
    "alamat": "KOMPLEK HUTABOLON, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "SAORTUA SINURAT",
    "alamat": "AEK NAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "KONSTRUKSI <TUNGGUL SITANGGANG>",
    "alamat": "JL DR HADRIANUS SINAGA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ERPINA NAINGGOLAN",
    "alamat": "BATU PORHIS",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "JUAL GAS ELPIJI <ROMASTA ULI NAIBAHO>",
    "alamat": "JL. DANAU TOBA, KELURAHAN PASAR PANGURURAN, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MASRIA HUTASOIT",
    "alamat": "SIBANDOL",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "SUMANDO MARBUN",
    "alamat": "SIDOLGI-DOLGI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "RIVY SARDIARTHA SITUMORANG",
    "alamat": "TELE",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "WANDA GIOVANI SIDABUTAR",
    "alamat": "GURNING, TOMOK PARSAORAN, SIMANINDO, SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "INDUSTRI PINTU <FADLY FASE MALAU>",
    "alamat": "SIANTING-ANTING PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "JUAL FURNITUR <VALENTINUS NAINGGOLAN>",
    "alamat": "SAIT NIHUTA SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "SASMARITA PURBA",
    "alamat": "TIMBUL NAULI",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "ANNA MARIA HT HAEAN",
    "alamat": "RANSANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "FARIANTO SIREGAR",
    "alamat": "JL.HORAS GG DANAU TOBA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KEDAI MAKAN <FLORA SINURAT>",
    "alamat": "TIGA URAT PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "DONNA MANALU",
    "alamat": "BAHAL BAHAL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "TENUN ULOS <DERMAWATI ELFRIDA TAMBUNAN>",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "JUSRI MARBUN",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "JUAL BAKSO <NORIN VIVI F. NADEAK>",
    "alamat": "PARDOMUAN I PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "INRA TENTRA POLRA",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "INTAN OKTAVIANA MARBUN",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "JUAL JAGUNG <Betnaria simanjuntak>",
    "alamat": "Pardugul PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "Rosta sinaga",
    "alamat": "Hariara Pintu",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "SALON <ARNI IRIANTI TIRMAWATI LAOLI>",
    "alamat": "DUSUN III TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "JUAL ELEKTRONIK <DANI DEWENTIN PASARIBU>",
    "alamat": "SIHOLI HOLI HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUSMAN BUTARBUTAR",
    "alamat": "GALUNG GINJANG",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "ROYMAN VAHALA SITUMEANG",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "JUAL OBAT <AGRY JULIDA BATUBARA>",
    "alamat": "SITOLU HUTA, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "ROTI KETAWA <HOSNARIA SILITONGA>",
    "alamat": "TANJUNG BUNGA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ANDREAS NANANG KURNIAWAN",
    "alamat": "PASAR BARU",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "MHD HENDRA SAKTI",
    "alamat": "PINDARAYA DUSUN III",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "RUMAH MAKAN <JAHOT NAIBAHO>",
    "alamat": "AEK RANGAT SIOGUNG OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUAL PUPUK <KORLI NAIBAHO>",
    "alamat": "JL. USKUP AGUNG PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KRISMAN SIDABUTAR",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "HOMESTAY <F. BOYAN WARMAN SITOHANG>",
    "alamat": "LUMBAN SITOHANG, LUMBAN SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BONATUA MANURUNG",
    "alamat": "LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TETTY MARICE SIDABALOK",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "SONIA DEVITASARI SITUMORANG",
    "alamat": "LUMBAN GAOL, PARSAORAN URAT, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "ROSDIANA AMBARITA",
    "alamat": "SOSOR GALUNG TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BIMA TOGAR MARPAUNG",
    "alamat": "TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PULUAN SINAGA",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "RONI PANGIHUTAN SIBORO",
    "alamat": "PANJAITAN,SIBORO,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "FERNANDO SITANGGANG",
    "alamat": "PULO PULO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "HANDA SIPAYUNG",
    "alamat": "GINOLAT, GINOLAT, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "BOSTON MARBUN",
    "alamat": "SIULAK HOSA, SIGAOL MARBUN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "ROMA LIMBONG",
    "alamat": "HARIAN BOHO,TURPUK SIHOTANG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "ELFRIDA IRMA SURIANI NAIBAHO",
    "alamat": "SOSOR MAMUNGKA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "HARVAY LINGGOMOYO SIHALOHO",
    "alamat": "Lumban batu cinta dame",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "EDWARD PANDIANGAN",
    "alamat": "LUMBAN PANDE, HUTADAME, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "SARI SIGALINGGING",
    "alamat": "BATU LANDIT",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "LAMBIAK A SAMOSIR",
    "alamat": "SIMARDALIHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "JUAL HP DAN AKSESORIS <ARLIN SITANGGANG>",
    "alamat": "PASAR SILENGGE HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "RAHMAT GRATIANUS SITANGGANG",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "EROS JORAT MARBUN",
    "alamat": "SIULAK HOSA, SIGAOL MARBUN, KECAMATAN PALIPI, KAB. SAMOSIR, SUMUT",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SOPIA LOREN RAMAIDA SIBORO",
    "alamat": "SOSORNA BOLAK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "LASDA SIRAIT",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "PERONIKA EPARIAMA PAKPAHAN",
    "alamat": "SOSOR SILO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "NARLITUA SINAGA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "OSBAL SITANGGANG",
    "alamat": "HUTABARAT DESA SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "ROMA SITORUS",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "INDUSTRI ROTAN <YOUSHIN MAROLOAN SIMBOLON>",
    "alamat": "HUTA NAMORA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "TENUN ULOS <JENI MARLINA MANIK>",
    "alamat": "PANAMPANGAN PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "KEDAI MINUM <MARTUA HALOMOAN SIHALOHO>",
    "alamat": "SIOPAT SOSOR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "INDUSTRI PINTU DAN JENDELA <BINSAR NAIBAHO>",
    "alamat": "JLN. DR. HADRIANUS SINAGA PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Minke siboro",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "JUAL PLASTIK <SIMSON HITLER SINAGA>",
    "alamat": "JL. DR.HADRIANUS SINAGA PINTUSONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RUMAH MAKAN <MELLI ELIDA LABA RIA SIHITE>",
    "alamat": "JL. FL. TOBING PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PANAHATAN SITINJAK",
    "alamat": "SIMOTUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SARAH FEBRIANA NAIBAHO",
    "alamat": "JLN INPRES NO. 3",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "DIMHOT SITUMORANG",
    "alamat": "SIBAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "JUAL ELEKTRONIK <MAKDIN NADEAK>",
    "alamat": "JALAN DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ANRI FITRIANI NAIBAHO",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "jual pakaian <PUJIANNA SIMBOLON>",
    "alamat": "SAITNIHUTA, pangururan",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "LASTIAR DONA MARISI",
    "alamat": "HUTA GURGUR",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SAUT LIMBONG",
    "alamat": "LUMBAN SIHOLE",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "salon <Rosmawaty habeahan>",
    "alamat": "Jl.ronggurnihuta pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROGES HISKIA NADEAK",
    "alamat": "RONGGUR NI HUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "JUAL GAS ELPIJI <MIDUK SIREGAR>",
    "alamat": "TERMINAL PARDOMUAN I, KEC. PANGURURAN KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "REGINA OSHIN MANURUNG",
    "alamat": "SIOPAT SOSOR, KEL/DESA SIOPAT SOSOR, KEC. PANGURURAN, KAB, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MARIHOT LOKKOT SIMBOLON",
    "alamat": "JLN. DR. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL KELONTONG <ARPEN MARTUA SIMARMATA>",
    "alamat": "LUMBAN BALUBU, LUMBAN SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TUMPAL SITUMORANG",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "REYNAL SINAGA",
    "alamat": "KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MARUDUT MARTINUS SIMBOLON",
    "alamat": "SINABULAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "HENGSON NAINGGOLAN",
    "alamat": "JL. LIMBONG SAGALA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "SUHANTO SITANGGANG",
    "alamat": "SIMPANG TAMBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "RUMAH MAKAN <RANTONIUS LAOLI>",
    "alamat": "Jl. Dr. Hadrianus Sinaga PINTUSONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RUMAH MAKAN <NURMERITA SITORUS>",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "RUSTI SINAGA",
    "alamat": "LUMBAN PANDE",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "BERTON SITUMORANG",
    "alamat": "JL, HUTA IMBARU",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "VALENTINO JAO MANIK",
    "alamat": "JANJI MARIA",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "MIKAEL GEREGORIUS TINDAON",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "WULAN SINAGA",
    "alamat": "SIRIMBANG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JUAL HP <GIDEON M. TUA SITANGGANG>",
    "alamat": "SITANGGANG BAU, PARSAORAN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "INDUSTRI KACANG <JUDIKA HERAWATI SIMBOLON>",
    "alamat": "LUMBAN HARIARA, PARDOMUAN I, KECAMATAN PANGURURAN, KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RESMI JUNITA SIHOMBING",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "TOKO KELONTONG <MENDANG VIKALIN SITUNGKIR>",
    "alamat": "JL PULO SAMOSIR PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "INDUSTRI FURNITUR <JUNIOR SINAGA>",
    "alamat": "PARJONGGI, PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ALVINA L.R SIALLAGAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "INDUSTRI ROTI <ASNARIA SINAGA>",
    "alamat": "TANJUNG BUNGA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "RUMAH MAKAN <NURITA SIBUEA>",
    "alamat": "HUTA NAMORA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "INDUSTRI MAKANAN <Dermawan hutagaol>",
    "alamat": "Jl.putri Lopian PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL MAKANAN <OBERTON NAIBAHO>",
    "alamat": "JL. DR. FL TOBING PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MESRA P SIPAYUNG",
    "alamat": "SIHUSAPI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SURUNG SINURAT",
    "alamat": "AEK NAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "JATOGU SINAGA",
    "alamat": "PARDENGKEAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "ERISKO TAMBA",
    "alamat": "PANGOMBILAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "DANTON SITINJAK",
    "alamat": "SITAHURU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "DAHLAN SIJABAT",
    "alamat": "SIBUNTUON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "JUMENDI SAMOSIR",
    "alamat": "SITAHURU",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "TAMAN PENITIPAN ANAK SARAH",
    "alamat": "pintusona",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RANAP SAGALA",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SURANTA SINAGA",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "DIAN NOVITA BR PERANGIN ANGIN",
    "alamat": "Parlondut",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "BELLY BOYKING SIHALOHO",
    "alamat": "DESA HUTABOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "BUHA MASLIV BETRO PURBA",
    "alamat": "JL. PASAR BARU",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "ENRY VIGHTOR MARULI SIAHAAN",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "ROSDINA K. SIDABUTAR",
    "alamat": "TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BONIFASIA C.A TAMBA",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MARULAM GULTOM",
    "alamat": "SITAMIANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "BINA BONITA SINAGA",
    "alamat": "JLN. DR. HADRIANUS SINAGA GG. A",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RUDI GOKSAN SINAGA",
    "alamat": "SIHARBANGAN DESA TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "BAHTRA PERWIRA",
    "alamat": "PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LUSKER SILALAHI",
    "alamat": "SIMPANG LANGGE DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "TANGGUH D TAMBA",
    "alamat": "PEGE-PEGE",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "LAMTARIDA HUTASOIT",
    "alamat": "JL HORAS GG DANAU TOBA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "EVINELIS",
    "alamat": "PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "ERISDA SIHALOHO",
    "alamat": "BINANGA BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ARISTON SINABARIBA",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "KARDIMAN N SITANGGANG",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "pengolahan kue basah <EFRIDA SULASTRI SILALAHI>",
    "alamat": "LUMBAN BARAGAS DESA PANGALOAN KEC. NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "PISTA A SITANGGANG",
    "alamat": "SIPONGGOL TANDUK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "SUNDAY MARANAP SINAGA",
    "alamat": "SINAGA URUK/tangga batu",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "SIBORU TOBA NABASA",
    "alamat": "Kompleks SD 5 Lumban Pinggol",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "NORTA SINAGA",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "HERNAULI SIMANJORANG",
    "alamat": "lbn simanihuruk",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "SINANGGA",
    "alamat": "JALAN DR. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ARSUCANTA H.A. SINAGA",
    "alamat": "sagala",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "HOLMES PARSAORAN NAIBAHO",
    "alamat": "HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "T. H. DUMA FRIDAYANTI SITANGGANG",
    "alamat": "DUSUN 3",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "LENNY RUMAHORBO",
    "alamat": "DUSUN II AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "HOKKOP DERMAWATI SIDABUTAR",
    "alamat": "DS II AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "MARLINANG PANJAITAN",
    "alamat": "AEK LIANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "DERMAWAN FRANSISKA SIMBOLON",
    "alamat": "HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ANNERI SITOHANG",
    "alamat": "BARISAN GEREJA",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "JULITA LUMBAN RAJA",
    "alamat": "SIPEGE",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "RICHARDO SIALLAGAN",
    "alamat": "SIALLAGAN PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "ENITA SIMBOLON",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DUROMA OKTAFIA  NAIBAHO",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "LINCE GULTOM",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "DIANA SIMARMATA",
    "alamat": "HUTA RAJA DUSUN II",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TENUN ULOS <DORMAULI NAINGGOLAN>",
    "alamat": "LUMBAN NAINGGOLAN, LUMBAN SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "DIAN ANGELYN SEPTIARA SIBURIAN",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "EDINA TAMPUBOLON",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "YULINA TAFONAO",
    "alamat": "BATU BATU",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "LUMAR GUZIKA KORITSI, CV",
    "alamat": "SIDABAGAS",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "RIJON NASIP LADIOPTA SIMANGUNSONG",
    "alamat": "SUHUT NIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "GENSIUS SIHOMBING",
    "alamat": "JALAN DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HENRA.SRF.SIALLAGAN",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "WISATA PANTAI <Felix Pernando Sitanggang>",
    "alamat": "Jln. Simanindo Km. 4 SITOLUHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "JUSRIADI SINAGA",
    "alamat": "HARIANBOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "CATERING <NOVITA DEWI PURBA>",
    "alamat": "HUTA NAMORA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "FRIENDCIUS NAINGGOLAN",
    "alamat": "PAMUTARAN",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "PAULA NIRMALA SIMBOLON",
    "alamat": "HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUNIAR SIBATUARA",
    "alamat": "JL. USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOSUA SITUMORANG",
    "alamat": "PANJOMURAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "PAGIEL S LUMBAN RAJA",
    "alamat": "ONAN SIRAIT",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "LEO VOLDO SITANGGANG",
    "alamat": "JAGANIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "MEDALIN DUHA",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "FINA ANSISFA PANGGABEAN",
    "alamat": "JL. PASAR BARU",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "HOT PAIAN SIJABAT",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "HAPOSAN BUTAR BUTAR",
    "alamat": "JL RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SARMAIDA RUMAHORBO",
    "alamat": "PANGALOAN",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "BUNGA SOFIANA",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "TOTOAN SITUMORANG",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "DINGOT MALAU",
    "alamat": "LBN SINAPITU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "DARNA NAIBAHO",
    "alamat": "SOSOR HOLANG-HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KIRISMAN SINAGA",
    "alamat": "SIGIRAGIRA SAORNAULI HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "MESDA MALAU",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ELISA ROMAYANTI SINAGA",
    "alamat": "SIGEDUK",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "YUSTINUR SIMANIHURUK",
    "alamat": "SITORANG NABOLON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "SINTIA METHALOYA NAINGGOLAN",
    "alamat": "Panjaitan",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "RENTINA RUMAPEA",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SANRO MARBUN",
    "alamat": "NAIBAHO",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "HASAN",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "KIMSON SIDABUTAR",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PARDAMEAN SIDABALOK",
    "alamat": "LUMBAN SARAGITUA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "BERNAD TAMBA",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "DIEN G. SIDABUTAR",
    "alamat": "PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "JEKSON SIMBOLON",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "LORIDA LIMBONG",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "MAROJAHAN MARIANUS NAIBAHO",
    "alamat": "PASAR BENGKOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "NURSELINA SIRINGORINGO",
    "alamat": "GONTING",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "HERVIDA SITANGGANG",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "Hotdiana  sitohang",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Chanro Pahalatua Situmorang",
    "alamat": "Pamutaran",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "HAIZAH HUTASOIT",
    "alamat": "HUTA napuran",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Habeahan Naburahan"
  },
  {
    "nama_usaha": "LASMAIDA TAMPUBOLON",
    "alamat": "RIANIATE",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "ROSMARIANA PAKPAHAN",
    "alamat": "TIGA BODAI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RICCI KARDO SINAGA",
    "alamat": "MOGANG, PALLOMBUAN, PALIPI, ,",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "YESSY GUSTI SINAGA",
    "alamat": "PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "DEVI DITA XAFERIA SIREGAR",
    "alamat": "SITAHUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "Nina br situmeang",
    "alamat": "Harihara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "RADUMA S. HABEAHAN",
    "alamat": "DUSUN II",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "ROBINTANG PAGAR BOLAK",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "EMMA NATALIA NAIBAHO",
    "alamat": "AEK HELA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "TUMPAL SIMBOLON",
    "alamat": "PARSEWAAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "REMIKA MANIK - KEDAI KOPI",
    "alamat": "PEATABU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "TRIVOR SINAGA",
    "alamat": "LBN SINAGA, PALIPI, PALIPI, ,",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "Adelina kaloko",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "RIBKA KRISTIANA SARAGIH",
    "alamat": "SIBANDOL",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "RANTO AFDOL PANGARIBUAN",
    "alamat": "GUSAR",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "YELITHA DP MANIK",
    "alamat": "TURPUK MALAU,TURPUK MALAU,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "MARIAULI SITUMORANG",
    "alamat": "DUGUL NANGKA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "PARIAMA SINAGA",
    "alamat": "SIULOK",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "DEWI H.R. SIDAURUK",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "MANAN SIMANJORANG",
    "alamat": "SITONGGI-TONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "LIAN SAHAT HORAS SITOHANG",
    "alamat": "SIAEK MUAL",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "RAMELAN SITUMORANG",
    "alamat": "DOLOK MARTAHAN",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "MARCELLINA SITANGGANG",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SURYA SAPUTRA ALOSIUS SITUMORANG",
    "alamat": "HUTA GURGUR LONTUNG",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "ANTONIUS NAIBAHO",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "KAMJUIN SINAGA",
    "alamat": "PAGAR BATU, URAT II, PALIPI, SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "NELSON NAIBAHO",
    "alamat": "PANAHATAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JULISMEN TAMBA",
    "alamat": "LUMBAN HASAHATAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "MIDUK MIKAEL LUMBANSIANTAR",
    "alamat": "SIALAMAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "AHMAD NAIBAHO",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "HILDA CLARITA MANURUNG",
    "alamat": "LBN. MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HARRIS TORAS PANGIDOAN SIDABUTAR",
    "alamat": "JL. TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "WANDRI GULTOM",
    "alamat": "PSR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "DIANA MARETTA PARDOSI",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BIMBINAN LIMBONG",
    "alamat": "JL. KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MASLAN LUMBANTOBING",
    "alamat": "BATU JAGAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "ALMERIA GULTOM",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "FARIA DANDA SAGALA",
    "alamat": "DESA GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SWANDI SINAGA",
    "alamat": "BARISAN GEREJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "JUMAN SINAGA",
    "alamat": "SIMENAHEAK",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "YOKA ANGGI FEBRIANTO MANIK",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "Tetty darmawita naibaho",
    "alamat": "Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HERMINDA GULTOM",
    "alamat": "HUTAPARIK, KEL. SIOGUNGOGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUSMIANY MANURUNG",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RIPPU ROSELINA SIPANGKAR",
    "alamat": "SIBATU-BATU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "ROSMAULI SIAHAAN",
    "alamat": "PAGAR BATU, URAT II, PALIPI, SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "RUSLINA SINURAT",
    "alamat": "PAMINGGIRAN",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN MELATI",
    "alamat": "sialaman",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HEPPI SIMBOLON",
    "alamat": "MALAU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "DIEN SAN SANDY NAINGGOLAN",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "Hot Lestari Pieterson",
    "alamat": "Huta Hotang",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "HERDI ANTONIUS MARBUN",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "LISMAWATI LUMBANTOBING",
    "alamat": "SITAHUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "JHON FRETDY SAMOSIR",
    "alamat": "SOSORPEA",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "SONIAR JESICA LESTARI TAMBUNAN",
    "alamat": "JL. PERBATASAN KEL. HARIARA PINTU KEC. HARIAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "HARLIN SITUMORANG",
    "alamat": "LONDUT SINGKAM",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "YOHANES PAULUS POSLAN RIANTONIS MALAU",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "INTEN SIBORO",
    "alamat": "BANJAR SIBORO DESA BONANDOLOK KECAMATAN SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "ELMINA NAIBAHO",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SAMPETUA PANDIANGAN",
    "alamat": "SIANTAR ANTAR PANDIANGAN",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "MARITONA LUMBANRAJA",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ROYJONRI ARITONANG",
    "alamat": "JL. DIPONEGORO TERMINAL ONAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARIANA SINAGA",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ISPAYER NAINGGOLAN",
    "alamat": "SOSOR PEA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "HUNTAL TP. HUTAJULU",
    "alamat": "PELABUHAN PARIWISATA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "DELI MELINTON SIANTURI",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "J. LEONARDUS NAINGGOLAN",
    "alamat": "PEASOMAILA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "BINSAR SITUNGKIR",
    "alamat": "SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "KEDAI MAKAN <MELATI SIHALOHO>",
    "alamat": "situngkir",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "ROBERTUS SINURAT - KELONTONG",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "BENGET ROJAYA GROUP",
    "alamat": "Pantai Indah Situngkir (PIS) Dusun II",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "ANJUS SITANGGANG",
    "alamat": "SAMPE HORAS",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "BEATRICE MORA ULIDYA SILALAHI",
    "alamat": "JL. SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "LOGITO SITINJAK",
    "alamat": "SOSOR BARU",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "PAROHON SIMARMATA",
    "alamat": "LUMBAN BATU",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "SEPENIA OCTALERIA SIMBOLON",
    "alamat": "TANGGA BATU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "LIGAT MARBUN",
    "alamat": "SOSOR II",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JOSTINO SITANGGANG",
    "alamat": "LORONG SIGUTI GUTI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "MEMBANGUN",
    "alamat": "Huta Parik Lingkungan II",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "HELLY FRISKA SIJABAT",
    "alamat": "SIAMPIK-AMPIK",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "FERDINAN SIMBOLON",
    "alamat": "MALAU, SIMBOLON PURBA, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ASIMA TONDANG NADEAK",
    "alamat": "HAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MICHAEL R. SIDABUTAR",
    "alamat": "HUTA IRNGA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARISTON MANIK",
    "alamat": "SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "BRINHAT PURBA",
    "alamat": "LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "ELISABETH LIANAR NAINGGOLAN",
    "alamat": "SITABOTABO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "YOHANA NATALIA SITANGGANG",
    "alamat": "BUNTU BOSAR",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "HAMONANGAN SITANGGANG",
    "alamat": "ONAN TUNGKUP",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "SOGIT NABOLAK SIDABUTAR",
    "alamat": "KOMPLEK SIPARIMA, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "ANDI F. SIJABAT",
    "alamat": "PARHUDONAN, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "GODLIF TAMPUBOLON",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "MARINA MAGDALENA BR MANIK",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "JULIMAN HUTABALIAN",
    "alamat": "HUTAGODANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "JANRY SIGALINGGING",
    "alamat": "SIGALINGGING",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "TONO SINABARIBA",
    "alamat": "PARDOMUAN NAULI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "CARRINTO LIMBONG",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "MAROLOP SIADARI",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "RUMISTEN SIBATUARA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "INRAWATI  MALAU",
    "alamat": "SIBORONG BORONG",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "HENGKY ELEASAR SIRINGO-RINGO",
    "alamat": "HOTA GODANG",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "JUSMAN SINAGA",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "JUFRI ANDI ERIANTO",
    "alamat": "DUSUN I BONG-BONG",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Rusiani tampubolon bintu tuppak tampubolon",
    "alamat": "Hariara",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "UNDO SITUMORANG",
    "alamat": "RASANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "RAMADIA, CV",
    "alamat": "Jalan Lingkar Tuktuk",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "ANTONIUS HASIBUAN",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "DARIMANTO LUMBANRAJA",
    "alamat": "DESA PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "RODEAR GIRANATA SINAGA",
    "alamat": "JL. HANDRIANUS KM. 4 HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "DINA SITUMORANG",
    "alamat": "SITAPONGAN",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "FERNANDO SITINJAK",
    "alamat": "HUTAGALUNG,HUTAGALUNG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ROMA SINTA PARHUSIP",
    "alamat": "TINGGI TINGGI, NAINGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PENJAHIT <LAMRINA LUMBANSIANTAR>",
    "alamat": "PARLUASAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "SARMAULI MANIHURUK",
    "alamat": "BINANGA BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "AYEN NAINGGOLAN",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "REYNOLD SIMBOLON",
    "alamat": "JL FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RIADA SINAGA",
    "alamat": "SIDEAK",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "DUMA SINAGA",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "HALASAN SITUMORANG",
    "alamat": "LUMBAN HOLBUNG",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "SOSDA HAYANY EVINATALYA NAIBAHO",
    "alamat": "JL. DR. F. LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LUSIANA HETTY SANDRA DEWI SILALAHI",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "MARIATUN SITUMORANG",
    "alamat": "JL. KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "H FRANS JEKSON SINAGA",
    "alamat": "PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "ORAVAL C MALAU",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "WESLY BARETTA SIAHAAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "RASBEN SITANGGANG",
    "alamat": "JLN. DIPONEGORO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LASMA ROHANA MARBUN",
    "alamat": "PANDULANGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "ARDONASA",
    "alamat": "Jalan Dr. Hadrianus Sinaga",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ELVIANA TURNIP",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ROTUA TURNIP",
    "alamat": "LUMBAN BOLAK",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "PARNO LUMBANTUNGKUP",
    "alamat": "SIRUMAHOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "RATNA SRI BUNGA PURBA",
    "alamat": "PEKAN SIMANINDO, DESA SIMANINDO, KEC SIMANINDO, KAB SAMOSIR, SUMATERA UTARA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "RENIA SIMALANGO",
    "alamat": "JL. RONGGUR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "OSBON SIRINGORINGO",
    "alamat": "SITANGGANGBAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "HERDINA SITIO",
    "alamat": "URUNG SITIO SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "MEI WIRA MATHILDA SIJABAT",
    "alamat": "SIDOLON-DOLON",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "MAITEN SINAGA",
    "alamat": "SOSOR SINAGA",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "GIRA ANDRY SUPRIANTO SIRINGORINGO",
    "alamat": "SIGIRAGIRA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "FREDDY TUA SINABUTAR",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MARES SITUMORANG",
    "alamat": "ONAN TINDANG",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "RAHMAD MANIK",
    "alamat": "TANGGA BATU",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "RANI KEMBARITA SINURAT",
    "alamat": "SOSOR SINURAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "FRANS IMMANUEL SIMORANGKIR",
    "alamat": "PANAMPANGAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "FREDDY TULUS LUMBANTUNGKUP",
    "alamat": "DAGAL BARU",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "RIPANJI NAIBAHO",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "YOGOGANKANA TAMBA",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "SENTINA PASARIBU",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "RINTO ALBERT MANURUNG",
    "alamat": "LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HELMINA NAIBAHO",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "JUNITA SIRINGORINGO",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "RASMITA",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "ROMARIO SIHOMBING",
    "alamat": "HATOGUAN, HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "AYU ARTA SARI NAIBAHO",
    "alamat": "PASAR BENGKOK, SIJAMBUR, RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "PRANATA PASURANTA GURNING",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "NAHOT PARDAMEAN SIMATUPANG",
    "alamat": "TIGAURAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "Romauli nainggolan",
    "alamat": "Tanjung Bunga",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "HOTMIAN NAINGGOLAN",
    "alamat": "JANJI MALASANG",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "DIANA SIAGIAN",
    "alamat": "Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SARTIAN DANIELLA SIHOMBING",
    "alamat": "SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JULIANTO SIMARMATA",
    "alamat": "SIOGUNG-OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "FERONIKA SIHOTANG",
    "alamat": "GINOLAT, GINOLAT, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "HERLINA SIMARMATA",
    "alamat": "BORNO, HUTA  GINJANG, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "JASPIN SIMBOLON",
    "alamat": "DR. F. L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROMAULI LUMBANTUNGKUP",
    "alamat": "LUMBANTUNGKUP",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "WINDY SAGALA",
    "alamat": "BALIAN GULUNG, SIANJUR MULAMULA, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "HELEN PASARIBU",
    "alamat": "BINANGA BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MAULINA MANURUNG",
    "alamat": "BATU BOLON",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "DURANI SANTI DEWI",
    "alamat": "JL.DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RIANTI RENIKA MARBUN",
    "alamat": "UPAHODA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KRISNAWATI SIMBOLON",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "ELI MARLINA SAGALA",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROYAN JAMES SIMBOLON",
    "alamat": "JL. DANAU TOBA NO. 13",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MARIANI MARTHA MANURUNG",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "JUAL PISANG <RISTAWATY SIMBOLON>",
    "alamat": "JL SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MERI TAMBUNAN",
    "alamat": "DUSUN II AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "Sariani munte",
    "alamat": "Lintong Tele",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "KAROLINA PURBA",
    "alamat": "Lumban Darat",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "JUNE PRIMA SINAGA",
    "alamat": "GONTING",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "DIRGANTO AGUSTOMAN SIMBOLON",
    "alamat": "UPAMANUK",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "MURNI ASIMA SITANGGANG",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MURNI M MALAU",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "DENGSI SIMAMORA",
    "alamat": "SITAPONGAN",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "ANTONIUS LAIA",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "BERTO TRISANDY BAKKARA",
    "alamat": "AMBARITA, AMBARITA, SIMANINDO SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ASINI ROHANA",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Yanti hutauruk",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LEONARDUS SITUMORANG",
    "alamat": "SIJURJUR",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "KARTINI RESMAWATI MUNTHE",
    "alamat": "Penampangan",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "PULO HOTMA MOSIR SIMBOLON",
    "alamat": "SAMPE HORAS",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "HARAPAN BAKKARA",
    "alamat": "TUKTUK LUMBAN BAKARA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SOLHOTMAN SINURAT",
    "alamat": "SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "SANTIEPE NAIBAHO",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ARISTON LAURES NAIBAHO",
    "alamat": "JL. SISINGAMANGARAJA PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TETAP JAKOBUS SIMBOLON",
    "alamat": "AEK SOMAON",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUAL HASIL TANI <BINTON SINAGA>",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "BENRI NAIBAHO",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "Togi Simarmata",
    "alamat": "Simarmata",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "MARTUPADO SIRUMAPEA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "SUNGGU OMPUSUNGGU",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "RIMPUANNA SIMARMATA",
    "alamat": "PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "RAMLI H. SIMARMATA",
    "alamat": "GALUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "RELANTI OSVERRY SIBUEA",
    "alamat": "PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "RUDI HARTONO SITUNGKIR",
    "alamat": "SOSOR NANGKA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "MANUMPAK LIMBONG",
    "alamat": "JL. SM RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Poltak Fernandus Sihaloho",
    "alamat": "Sialanguan",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "HARA",
    "alamat": "ARSAM",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "LUSIANA BAKKARA",
    "alamat": "TOMOK BOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "ERISKA ERIKA SIREGAR",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ARISMAN LASE",
    "alamat": "Huta Saitnihuta",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TIMBUL SIMBOLON",
    "alamat": "JL, SIBUNGA BUNGA",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "NURCAHAYA VERONIKA SILALAHI",
    "alamat": "JL PUSUK BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HELNIATI SIHOTANG",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "RONSAULYNA A GULTOM",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "ROMA ULI PANGGABEAN",
    "alamat": "LUMBAN TURNIP",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "W. RAMBI SIBORO",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "SEIAN MARDONGAN SIMBOLON",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ENNI PRIMA LUMBANRAJA",
    "alamat": "HARIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "RENHARD SIDABUTAR",
    "alamat": "PARLUASAN TOMOK NO 75",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "LAMTIAR BR SILITONGA",
    "alamat": "UGAN UGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "LAMBOK SIJABAT",
    "alamat": "GINOLAT,GINOLAT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "ROSIDA HUTABALIAN",
    "alamat": "NAHORNOP",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "LAMHOT MANOGAR NAIBAHO",
    "alamat": "JL. TANAH LAPANG, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JAMES SITUMORANG",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "SAUT ENDRA PUTRA SIHALOHO",
    "alamat": "PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "DEMINA SIMBOLON",
    "alamat": "PARHAPURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MASNIKA WATI TURNIP",
    "alamat": "SIOPAT SOSOR, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Irma ittywati siregar",
    "alamat": "Dusun L Bongbong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MANSURI SIREGAR",
    "alamat": "PARLUASAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "RIDA SINAGA",
    "alamat": "SIPAPAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "DELIMA SIANIPAR",
    "alamat": "TAMPAHAN",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "ALVOKA SIALLAGAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "Serdika silaban",
    "alamat": "Sei Rebut Ll",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "HELMINA SILABAN",
    "alamat": "LBN NAINGGOLAN, LUMBAN SUHI SUHI TORUAN, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "FRINIKUS SITUMORANG",
    "alamat": "PEA TOLONG",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "BERESTON SIALLAGAN",
    "alamat": "JL. INPRES",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PARROHA MARSINTA NABABAN",
    "alamat": "PARDOMUAN SIBUTAR KEL.TAMBUN SUNGKEAN KEC.ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "ADE MARIA KRISTIN GULTOM",
    "alamat": "JL. DR. F. LBN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NIMROD MARCELINUS NAIBAHO",
    "alamat": "TANJUNG BUNGA, TANJUNG BUNGA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "MANUTUR SINAGA",
    "alamat": "SUHUT NIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "ELLY SIHOTANG",
    "alamat": "SIRUMA HOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "HOTDIMAN BUTAR BUTAR",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AMRIN SIMARMATA",
    "alamat": "BAHAL-BAHAL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "DOISI SITUMORANG - PESAN MAKANAN KUE AYAM",
    "alamat": "SIMANAMPANG TORUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "DEWI SARTIKA FITRI YANI",
    "alamat": "LUMBANG SINAGA, HUTA GINJANG,SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "JONDANIEL SITUMORANG",
    "alamat": "SIDEAK",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "RIRIS HASIBUAN",
    "alamat": "HUTABOLON",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "BINTARA NAIBAHO",
    "alamat": "LUMBAN NABOLAK",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "WAREN SIBORO",
    "alamat": "PANAHATAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ARIFIN SITINJAK",
    "alamat": "TANDING",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "YENNI FARIDAWATI GURNING",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "Janter Malau",
    "alamat": "Si batu-batu",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "WR NALUMRA, CV",
    "alamat": "Panjaitan Dusun 1",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "ROSPITA SIANTURI",
    "alamat": "JL. LANGGE",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "KELVIN SAMOSIR",
    "alamat": "GALUNGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "RUSMA TURNIP",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LAMBOK MIKAEL NADEAK",
    "alamat": "JL. DR. HADRIANUS SINAGA, DESA PARDOMUAN I KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NANNI HUTAPEA",
    "alamat": "PINTU BATU RTO00/ RW000",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ROULI OCTRIANA SIMBOLON",
    "alamat": "SOSOR SILO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "LUGUR SAGALA",
    "alamat": "GINOLAT,GINOLAT,SIANJAR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "FERRY SINAGA",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "MARTO SITUMORANG",
    "alamat": "SITIO TIO",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "Berli sitanggang",
    "alamat": "Pardugul",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "Feriyanti silaban",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "DESIANA NATALINA",
    "alamat": "Simanampang",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "MONEYZON UJUNG",
    "alamat": "PEABANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "DEFROSA NAIBAHO",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "JUAL KERUPUK <EMMAWATI SITORUS>",
    "alamat": "SILULU",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "Sepra newlana girsang",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ERNAWATI SITUMORANG",
    "alamat": "SIPULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "DELIMA R HUTABALIAN",
    "alamat": "PANGIRINGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "JUMALAN TAMBA",
    "alamat": "TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "DORLAN SIMANGUNSONG",
    "alamat": "SIMANGABANG",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "Ramean pasaribu",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "EDWARD SIMATUPANG",
    "alamat": "JLN.KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BUHA SIRINGORINGO",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "HANA KRISTINE HUTABALIAN",
    "alamat": "SIBOROTAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HOTMIAN SIALLAGAN",
    "alamat": "TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "GUNAWAN SAMOSIR",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "SAHAT ROTUA LUMBANRAJA",
    "alamat": "SILULU",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "ALEX WEDO MALAU",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "CHARLES PETRUS JULIAN SIMBOLON",
    "alamat": "JL. KOL LIBERTI MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PESTARIA PANDIANGAN",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "DORLAN TIODORA SITANGGANG",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BUHAMAN MAROLOP SITINJAK",
    "alamat": "SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "FERONIKA PANJAITAN",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RIWIDA AMELYA NAIBAHO",
    "alamat": "JL. SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HALOMOAN SIMBOLON",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "TIARMA PANDIANGAN",
    "alamat": "SITATAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "SOPAN SOVIAN SINAGA",
    "alamat": "SIBATU-BATU",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "EMMA TRESY SILALAHI",
    "alamat": "GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "Siti khadijah",
    "alamat": "Siambalian",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOGAR SIMBOLON",
    "alamat": "JL. RAYA RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "SHETHREE AYU SINAGA",
    "alamat": "TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROYANI SINAGA",
    "alamat": "SOSOR PANSUR",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HOTMAN SIDABUTAR",
    "alamat": "HOLANG-HOLANG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "HOLMES SINABARIBA",
    "alamat": "JL. SIGURGUR",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ZULPAN TAMBA",
    "alamat": "GORAT, GORAT PALLOMBUAN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "JAHOMBANG SINAGA",
    "alamat": "LUMBAN BUTTU",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SYAHIRAN SITOHANG",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "TINGKOS SIMBOLON",
    "alamat": "HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ESTEN SINAGA",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "SABORANG NAINGGOLAN",
    "alamat": "JL. SIMANINDO NO 22",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "HOTMAN PARULIAN SIJABAT",
    "alamat": "JL, LUMBAN NALAS",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "KRISTINA SIHOMBING",
    "alamat": "SANGGAR NALANTANG",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "NENNI ERLIN PAKPAHAN",
    "alamat": "LUMBAN JABIJABI DESA PAKPAHAN KECAMATAN ONANRUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "YUDIANI HUTAGAOL",
    "alamat": "JL. RAYA RIANIATE KM 5.5",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "HERNAWATY BUTARBUTAR",
    "alamat": "SIANJIR-ANJIR",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "FITO ANDREAS NAIBAHO",
    "alamat": "LUMBAN NABOLAK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MONANG NAINGGOLAN",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "PETRICK PRANATA SIDABUTAR",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SARMA E. SIMALANGO",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RISTA SIRAIT",
    "alamat": "HOLANG-HOLANG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "Murnia ningsih",
    "alamat": "Pasar Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ESI RATNA SARI SITANGGANG",
    "alamat": "LUMBAN NABOLAK",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "DITO SIBORO",
    "alamat": "PARMONANGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "JULIANA TURNIP",
    "alamat": "SIMARAEK, SIOPAT SOSOR, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ISHAK RIYANTO PARULIAN RINGO RINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "pengepul hasil pertanian DESAR JUNTAK",
    "alamat": "Pangaloan",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "WIDIWATY F GULTOM-ketring",
    "alamat": "SINAGA URUK DESA URAT II KEC PALIPI KABUPATEN SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "RUNGGU CITRA BARU",
    "alamat": "Sirihit-Rihit Dusun III",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "SOPI NABABAN",
    "alamat": "JL. DR. L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HERBET MANURUNG",
    "alamat": "JL DR HARDIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HERMANTO SINAGA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "EMIRAT NAIBAHO",
    "alamat": "UPA HODA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "IMRAN MARBUN",
    "alamat": "PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "NOPIDA PANDIANGAN",
    "alamat": "PARRANDEAN DESA SALAON TONGA-TONGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "RESTAULI SIMBOLON",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "RISMAULI SITUMORANG",
    "alamat": "LUMBAN SITANGGANG",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "TUFANY THERESITA SITANGGANG",
    "alamat": "SIGALINGGING",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "FREDDI SIMARMATA",
    "alamat": "DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "MANARTA SIMBOLON",
    "alamat": "SITALAMETANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ETTA MALAU",
    "alamat": "SIBIGO",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "DELVITA TRYSNA TERECYAMITHA S",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JONNI SIJABAT",
    "alamat": "LUMBAN SIJABAT",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "ISABELLA SIMBOLON",
    "alamat": "JL. PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JANDRY PASTI M LIMBONG",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SESILIA M. NADEAK",
    "alamat": "JL. RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "IRMA NOVIANTY",
    "alamat": "BINAGA SISA",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TITIR MARITO LUMBANRAJA",
    "alamat": "LUMBAN SINAGA DOLOK",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "LEXANDRO A TAMBA",
    "alamat": "KOMPLEK SMP SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SITOLU HAE HORBO",
    "alamat": "JL. KEJAKSAAN NO. 33",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MANUMPAK SIBORO",
    "alamat": "LUMBAN TALA",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "MARIA CITRA SINABUTAR",
    "alamat": "SIOPAT SOSOR, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MANGATUR GULTOM",
    "alamat": "SIMPANG TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "JONTA RUDIANTO SIHALOHO",
    "alamat": "JL. DR. F. LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "REIN FERNANDES SIREGAR",
    "alamat": "JL. DR. F. LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "OKTAVIANI MALAU",
    "alamat": "KOMPLEK SUMBER SARI",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MINARMA ROULIKA SILABAN",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ENI PANDIANGAN",
    "alamat": "HASAHATAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "TIUR MAIDA HOTMAULI",
    "alamat": "SIBALANJA",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "Purnama wanti",
    "alamat": "Pasar Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ONANTI NURBAYA SAMOSIR",
    "alamat": "JANJI MARIA",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "RENTAULINA SINABARIB",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "RUDI DONNI SAMOSIR",
    "alamat": "SIPOLLUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "RIBKA, CV",
    "alamat": "JALAN RAYA PANGURURAN - SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "LAMHOT SINAGA",
    "alamat": "BARISAN GEREJA, SAOR NAULI HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "LAMHOT",
    "alamat": "PASAR PANGUNGURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JUNELSI N. PARDEDE",
    "alamat": "PEATOLONG",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "JUAL JAGUNG <JALABE SIJABAT>",
    "alamat": "BATU MANUMBUN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "LASMARTOGI",
    "alamat": "SITANDUK",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PANRO TAMBA",
    "alamat": "HUTARAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "JULIANTO HOTTUA SILALAHI",
    "alamat": "LUMBAN DOLOK",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "HENRY SAMOSIR",
    "alamat": "JL. DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROPERJA SITANGGANG",
    "alamat": "PARDOMUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "RIJON RINALDI SIHOMBING",
    "alamat": "LUMBAN SIHOMBIONG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "LAMSA WATI SITANGGANG",
    "alamat": "JAJIMARAPOT",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "ALEP APRIANTO SAGALA",
    "alamat": "JANJI MATOGU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "RENI JULINDRA SAGALA",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "HIRAS HARJONO SIMBOLON",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "YANTI",
    "alamat": "LIMBAN RIHIT",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "ROULINA GURNING",
    "alamat": "JL PULO SAMOSIR NO.13",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROMASI BURJU SILALAHI",
    "alamat": "JL. D.I.PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LILIS SIMBOLON",
    "alamat": "PANDUMAAN,SOSOR DOLOK,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "HUTAGALUNG BONA PASOGIT",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "LYNA R. HUTABALIAN",
    "alamat": "PAMUTARAN",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "HOTMEI MANULLANG",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ADI SATRIMUDA TAMBUNAN",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "ESRA DIANA SITANGGANG",
    "alamat": "SIRIAON",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "IGNATIUS SITANGGANG",
    "alamat": "JL.KOL.LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KOSMAS ELEVEN NADEAK",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "JULIO BAMBANG PURBA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "LASROULINA SITUMORANG",
    "alamat": "SINABULAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "TUMPAL PARULIAN SIPAYUNG",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "LIMBONG TONAMIDO",
    "alamat": "Pardomuan I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SARON P.T. SINAGA",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "RISWANDY NAINGGOLAN",
    "alamat": "SIANDOR",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "Dosmaria sijabat",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "PANDAPOTAN SIMBOLON",
    "alamat": "JL. DR. F. LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SOTAR SIMBOLON",
    "alamat": "JL. DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LUSTER LIMBONG",
    "alamat": "LIMBONG,,SARI MARIHIT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "WERIFSON SIALLAGAN",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "MARINGAN SITANGGANG",
    "alamat": "JLN. NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAMUEL JEREMIA SIHOMBING",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "SALOMO SIJABAT",
    "alamat": "LUMBAN SOIT",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "OJAK MARTUA SINAGA",
    "alamat": "SIGILOMBU, SITOLUHUTA, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "BARINGIN SITANGGANG",
    "alamat": "PANAMPANGAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "ROBINSON SIMBOLON",
    "alamat": "SIGUMBANG",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "TANI ELISMAN SILALAHI",
    "alamat": "SITENGGAL-TENGGAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "RISTAN SIMBOLON",
    "alamat": "KOMPLEK HKBP",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "NOVITA P.D. BATUBARA",
    "alamat": "PANJAITAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "PANTUN SITUMORANG",
    "alamat": "ONAN SIBAGANDING",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "HERMAN KABAN",
    "alamat": "SINABULAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "DONNAL FRANSISKUS NAIBAHO",
    "alamat": "JLN. DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Dewi susanti",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ELEVEN MANGADAR NAINGGOLAN",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ARTAMA TAMBA",
    "alamat": "TURPUK MALAU",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "ROSMARIA SURYANI MARPAUNG",
    "alamat": "SOSOR MAMUKKA",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "RONALD SIPAKKAR",
    "alamat": "DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "HOTNAULI LUMBANRAJA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "BEKMAN SITANGGANG",
    "alamat": "LUMBAN NABOLAK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "DONNI ERIK PUTRA SITUMORANG",
    "alamat": "UPA SUHUT",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "SAROHA SIMARMATA",
    "alamat": "Hutaraja",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RITA NOVITA MANURUNG",
    "alamat": "LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SANTI SIMANIHURUK",
    "alamat": "BINANGA BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "VILU SUKANO SINAGA",
    "alamat": "SITIO-TIO",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "LUKARTINA GULTOM",
    "alamat": "PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "JUITA ANGELINA SIBORO",
    "alamat": "SIBORO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "KRISTIANUS TINAMBUNAN",
    "alamat": "DESA TOMOK KEC SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "FORCENLY SINAGA",
    "alamat": "SINAGA URUK",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "MOYTA SITOHANG",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "ELIZON LUPER SINAGA",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "MARILAM SIPAYUNG",
    "alamat": "JANJI MATOGU,HUTA GURGUR,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "JANPERSON SITANGGANG",
    "alamat": "BUNTU GAMBIRI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "HATOGUAN MALAU",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOJOR FRETTY GULTOM",
    "alamat": "SIBUTAR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "HETTY SITINJAK",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MARISSA KARTIKA SARI SIRINGORINGO",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "HOTTUA SINAGA",
    "alamat": "DUSUN I",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "NENCI LUMBAN RAJA",
    "alamat": "LUMBAN DOLOK",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "PANGIHUTAN WANPOR HONLES SIMBOLON",
    "alamat": "GUDANG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BANTI SIMBOLON",
    "alamat": "LBN PANDE",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "MULA TIMBUL NAPITU",
    "alamat": "MARLUMBA",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "LARIANTI SITANGGANG",
    "alamat": "SITANGGANG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "LENA SINAGA",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "ELIDA ERIKA SIHOMBING",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "MANGARA SIMBOLON",
    "alamat": "LUMBAN RAJA I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FRANSISKA SIHOMBING",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "Henni simatupang",
    "alamat": "Rianiate",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HENRY D P NAIBAHO",
    "alamat": "JL PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LIDIA GREACE SIRINGORINGO",
    "alamat": "SITOHANG DESA PARSAORAN URAT",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "MARULAM TARAUL INSPIRASIKU",
    "alamat": "Jalan Soburan",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "THEODORA SITANGGANG",
    "alamat": "SIARUNG-ARUNG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "YANTI GULTOM",
    "alamat": "BUNTU MAULI",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "LUSIANA V. LIMBONG",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "PALENTINA TAMBA",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "HENRY HALOMOAN NAPITUPULU",
    "alamat": "PARLUASAN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "PARMONANGAN SAGALA",
    "alamat": "HUTA BAGAS, GINOLAT, SIANJUR MULA MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "RIDWANTO SIALLAGAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "AGRIDA SARMA CINTA SIHOLE",
    "alamat": "PARPASIR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "NANTO SITOHANG",
    "alamat": "TAMPAHAN MOGANG",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "VICY SIHOL MARITO SIMAMORA",
    "alamat": "LABUHAN AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "HELENA E C SINAGA",
    "alamat": "SAMOSIR SIALANGGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "OLIVER SITINJAK",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "TIARMA SITUMORANG",
    "alamat": "HUTA GINJANG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "SEDISSON SILALAHI",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "RIWANTI SIBATUARA",
    "alamat": "PEA NABOLAK DUSUN 1,",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "JHOLKARNAEN SIHOMBING",
    "alamat": "LUMBAN BUNTU II",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "FRISKA SINURAT",
    "alamat": "LUMBAN NATINJO, PARDUGUL, PENGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "BILINTON SITUMORANG",
    "alamat": "UPA SUHUT",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "DENGSI SAGALA",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "SWANDI MARBUN",
    "alamat": "NAIBAHO 2",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN WELIPA",
    "alamat": "hutanagodang",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "RENTINA SIHALOHO",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "OLMI MANIK",
    "alamat": "SINABULAN URUK",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "OMIKA TETRA TERESIA NAIBAHO",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Merlianda sinaga",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "PATRICIA CHRISTIN SITANGGANG",
    "alamat": "LORONG SIGUTI GUTI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "MARGANDA SINAGA",
    "alamat": "PETAK",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "JAKKODI SITUMORANG",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MASTIAR DENNI PARDEDE",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "SOPENLI TAMBA",
    "alamat": "TAMBA NAGODANG",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "SOGIT IRPANSIAH SIMANIHURUK",
    "alamat": "LUMBAN TOBING",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "IPIRONAULI SINAGA",
    "alamat": "SIULAK HOSA, DESA SIGAOL MARBUN, KEC. PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "KORNEL SIALLAGAN",
    "alamat": "TUKTUK TIMBUL",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "RUMINDANG SAUR SIDABUTAR",
    "alamat": "PELABUHAN PARIWISATA",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "ERNAULI GULTOM",
    "alamat": "SIBALA",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "MARULI MANAT SITUMORANG",
    "alamat": "LOPAK LOPAK",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "JAINAL DEDE TAMPUBOLON",
    "alamat": "JLN. TANAH LAPANG, PASAR PANGURUPAN, PANGURUPAN,",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DIGOHI ASIDO GROUP",
    "alamat": "Baribabinanga",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "LAMSEHAT PASARIBU",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "AMON JUDI TAMBA",
    "alamat": "JL, HUTA URUK",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "ANGGI SIMON ALEXANDER SIHALOHO",
    "alamat": "PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "TIURLAN BERUTU",
    "alamat": "LUMBAN GAOL, PARSAORAN URAT, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "ROTUA N.A SILALAHI",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "HENNI MARIANI SAGALA",
    "alamat": "LUMBAN SUHI SUI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "NURLELA SILALAHI",
    "alamat": "SIJAMBUR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "DODYGIO HARYONO SIREGAR",
    "alamat": "SITAHUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "KUAS MERAH BERKARYA",
    "alamat": "JLN. DR. F Lumban Tobing",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SIMON ALEXANDER MARBUN",
    "alamat": "SIULAK HOSA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SOVIANTI MANIK",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "EBEN J. PINTUBATU",
    "alamat": "JL. RAYA AMBARITA, AMBARITA, SIMANINDO, SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "NURMAYA NAIBAHO",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "ENGSU SUKMAWATY MALAU",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ANDAS MENAK SINAGA",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "JIMRON HASIHOLAN NAINGGOLAN",
    "alamat": "LBN NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "WOOSLY SIMBOLON",
    "alamat": "BUNTU MAULI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "DOR ASIANS",
    "alamat": "LBN SIHOMBING",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "NURITA SIALLAGAN",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MARLINA SITUMORANG",
    "alamat": "PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "JENNY LAM-LAM SIHALOHO",
    "alamat": "LUMBAN SIHALOHO",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "LAMHOT SITANGGANG",
    "alamat": "PEABORAS",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "MARDIANA PARHUSIP",
    "alamat": "SIBUTAR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "ASMINA SANTI PANDIANGAN",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SUMIATI NAINGGOLAN",
    "alamat": "LUMBAN NAINGGOLAN",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "RHEKA ASTRI GURNING",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "YOSSIE DEWI MARGA SARI SAMOSIR",
    "alamat": "SIDABALOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "NADIA NAINGGOLAN",
    "alamat": "PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "ELAN PATRIANA SITANGGANG",
    "alamat": "DUSUN II HUTABOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "LASNI RIWANTA SINAGA",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SERI NOVIANTI SEMBIRING",
    "alamat": "JL. DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARISDA RETNOWATI SITANGGANG",
    "alamat": "PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "RANTO LUMBANTUNGKUP",
    "alamat": "SITURI-TURI",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "RASMIA PASARIBU",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "Lasmi herlince sitinjak",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "HETDINAH TURNIP",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LAMHOT SIJABAT",
    "alamat": "SIBUNTUON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "PETRIKA SITUMORANG",
    "alamat": "BATU GORDANG, KEL. PINTU SONA, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "OCTAVIANI SIHALOHO",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "VANNY CRISTIN MARSELINA SINAGA",
    "alamat": "SITATAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "DEVY CHRISTIANY ZEGA",
    "alamat": "PANDAN TUKTUK SIADONG SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "LESNA SIMANIHURUK",
    "alamat": "JLN KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KIMSON SINAGA",
    "alamat": "PARHORASAN",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "ROBET BRONSON SIMANJUNTAK",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MERTOKIPSI LIMBONG",
    "alamat": "LUMBAN SITINJAK, AEK SIPITUDAI, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "PELITA TAMBA",
    "alamat": "PARENDEAN TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "Pidamalinda pasaribu",
    "alamat": "Hariara",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "RONAULI SIMBOLON",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "NOPERIA SITANGGANG",
    "alamat": "BUHIT PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "ANA MARIA BR SIHALOHO",
    "alamat": "JL. SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SERPINA SIRINGO RINGO",
    "alamat": "SAOR NAULI HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "LUMIAN SINURAT",
    "alamat": "GONTING",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "FIRMAN NAZARA",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "IWAN PM SINAGA",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "LAMRIANA SITOHANG",
    "alamat": "AEK HELA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "BENTUR SINAGA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "JOSUA EXPALDO LIMBONG",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "PARINGAN LIMBONG",
    "alamat": "JL. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUNIKA",
    "alamat": "LUMBANSAORNAULI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "MASRI K.RUMAHORBO",
    "alamat": "SIMARAEK, SIOPAT SOSOR, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SOLINA HUTAGALUNG",
    "alamat": "Tiga Urat",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "HENDRIKO L LIMBONG",
    "alamat": "LIMBONG,SARI MARIHIT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "WINDA MILIANTI PAKPAHAN",
    "alamat": "Sosor Pasir",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "FRANSISKUS JOSHUA BAKKARA",
    "alamat": "Lumban Bakkara, Tuktuk Siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TUJUH BERSAMA",
    "alamat": "HUTA GALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "SIMAN SIALLAGAN",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "ERNATHA BUDIANA SIAGIAN",
    "alamat": "BARISAN GEREJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "ARIKSON SAGALA",
    "alamat": "GINOLAT,GINOLAT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "KISTAN ROBINHOT MALAU",
    "alamat": "KOMPLEKS PERKANTORAN BUPATI",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ROYON OLOAN DAGOBERT SINAGA",
    "alamat": "PANGALOAN",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "ABE BORIS SIDABUTAR",
    "alamat": "GURNING",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SERIATI SIAHAAN",
    "alamat": "PASAR AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "RAYA SITUMORANG",
    "alamat": "HOLBUNG",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "PRIMA KYO D. SIAHAAN",
    "alamat": "TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JIMMY ROMARYO SIHALOHO",
    "alamat": "HUTABOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "ROTUA SINAGA",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "SULASTRI SIMARMATA",
    "alamat": "Huta Bolon",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "RISBEN SITUMORANG",
    "alamat": "SITONGGI-TONGGI",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "MAWAR SIMATUPANG",
    "alamat": "PASAR DAME",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "TUMPAL EDYSON MANGIDOTUA",
    "alamat": "TERMINAL ONAN BARU, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MESINA SINURAT",
    "alamat": "JL. DR. F. LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KEVIN LAMBOK MANULLANG",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "Ruspita s sinaga",
    "alamat": "Baneara",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "ARIEL PASARIBU",
    "alamat": "PALIPI, RT.0, RW.0",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "EZRA ULINA NADEAK",
    "alamat": "TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "BARITA SIMANIHURUK",
    "alamat": "DESA HUTABOLON, 22392",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "ELLA DRIVANI SURBAKTI",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ELMARIA BARUTU",
    "alamat": "BATU MOMO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "DIANA SITORUS",
    "alamat": "JL. RONGGURIHUTA DESA PARDOMUAN 1",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LAMHOT NAIBAHO",
    "alamat": "JL. GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "EDISON TAMBA",
    "alamat": "SIJAGAR JAGAR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "JUNITA SARIATY TOBING",
    "alamat": "Sosor Naboratan",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "EKO PUTRA BUNGSU SITUMORANG",
    "alamat": "PASAR LUMBAN SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "SRI ASI HAHOLONGAN MARBUN",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LAMPOS SINAGA",
    "alamat": "LUMBAN LINTONG, URAT II, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "NOFIANTI RISMA INDAH HUTAJULU",
    "alamat": "KOMPLEKS SD INPRES DESA RIANIATE, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ROBEN NAIBAHO",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "LASTIUR GULTOM",
    "alamat": "MARIA RAJA",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "AGUS SALIM SIMAMORA",
    "alamat": "HUTARIHIT",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "DANIEL SIMBOLON",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "BINSAR BU HARIANTO ARBI SINURAT",
    "alamat": "SIHARBANGAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "TORRY HIA",
    "alamat": "AEK BOLON",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "ROSMERI LUMBAN RAJA",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "WASINTHON SAGALA",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "EXAUDI RC",
    "alamat": "DESA DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "BINDUARA LUMBAN RAJA",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "TONI GULTOM",
    "alamat": "PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "KARTIO MARBUN",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "DARWIN SAGALA",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SABAR HOTMARNINGOT SAGALA",
    "alamat": "LUMBAN TONGA TONGA, LUMBAN SUHI SUHI TORUAN, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "POLMER TAMBA",
    "alamat": "LUMBAN SUHI SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "LINNER SIGALINGGING",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "ROSIDA LIMBONG",
    "alamat": "LBN GAMBIRI,TURPUK LIMBONG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "HENNI SUSANTI SITANGGANG",
    "alamat": "PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "RENGSI SAMOSIR",
    "alamat": "SOSOR BULU",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "RUMUNGGU SITINJAK",
    "alamat": "SABA SABA",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "LIANA BR SIMANJUNTAK",
    "alamat": "SIPOLLUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "TIURMAULI MALAU",
    "alamat": "AEK RANGAT, SIOGUNG OGUNG, PANGURUPAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SOFIAN FERNANDO NAIBAHO",
    "alamat": "SIAHAAN BALIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JOSTON SITANGGANG",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "ROSPITA NADEAK",
    "alamat": "JL RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AGUS FERNANDO SIMBOLON",
    "alamat": "PINTUSONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "NOPIANTI SIDAURUK",
    "alamat": "KOMPLEK SMPN 4 SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "MIMI FADILLAH SIMALANGO",
    "alamat": "Huta Gorat",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "LEONARDUS SINAGA",
    "alamat": "ONAN SIBAGANDING",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "Riskawan lumban batu",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ELYS RICARDO SIDABUTAR",
    "alamat": "GURNING, TOMOK PARSAORAN, SIMANINDO, SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SAUT GIOT PRAMADA SITINJAK",
    "alamat": "SIHOLI-HOLI",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "ARTA ROSIANA SITUMEANG",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "THERESIA NURSAIDA SALOHOT",
    "alamat": "SITUNJANG",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "Windah simatupang",
    "alamat": "Jl Raya Simanindo",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "kedai tuak/kopi (TANGGUH PANDAPOTAN SIRINGORINGO)",
    "alamat": "URAT TIMUR",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "MARIA GULTOM",
    "alamat": "SIBUNTUON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "ROYENTUA MALAU",
    "alamat": "BALIAN JANJI",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "LASMA SIMARMATA",
    "alamat": "NAGA TIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "HERTATI SINAGA",
    "alamat": "TAMBA",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "FRENKI NAIBAHO",
    "alamat": "PASAR SILENGGE DUSUN II,HUTA TINGGI,PANGURURUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "SUPRIANDI SINAGA",
    "alamat": "PARBALOHAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "ASNI ALIDA SIMANJUNTAK",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "BINAHOTMAS NAINGGOLAN",
    "alamat": "LBN NAINGGOLAN",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "RUDYANTO AMBARITA",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "Nurbayati",
    "alamat": "Lumban Pinggol",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "KABAR CENTER MULTIMEDIA",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "EDY SITUMORANG",
    "alamat": "SOBURAN",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "MARULAM SITUMORANG",
    "alamat": "JL.KEJAKSAAN NO.25",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DOTDI SINAGA",
    "alamat": "NAINGGOLAN,",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "KALDIN SINABARIBA",
    "alamat": "SIGURGUR",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "HERNITA NAIBAHO",
    "alamat": "JL. SIMANINDO NO.22",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MASDA SAMOSIR",
    "alamat": "GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "LINHEN RAWATY SINAGA",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "GRADA SAUTAN MARBUN",
    "alamat": "LUMBAN DOLOK, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "FREDDY HUTAJULU",
    "alamat": "JL. SISINGAMANGARAJA NO.27",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MANDRA",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "RINAYANTI",
    "alamat": "LUMBAN SITANGGANG",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "DATA SIMBOLON",
    "alamat": "PARMANUHAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "GRACE YOPELA TURNIP",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "ROI CANRA SARAGI",
    "alamat": "NAHORNOP",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "LUNDU VIGILIUS SIMBOLON",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "HENRY SP.SILABAN",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "ESRON EDWEN SIDABALOK",
    "alamat": "SANGKALNIULAHAN",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "JONNER SITANGGANG",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "MARITEN SITUMORANG",
    "alamat": "SIBUNTUON",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "INDUSTRI KOPI <LYDIA GIRSANG>",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MELIANTI SIAGIAN",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "JAMES FELEMON SITANGGANG",
    "alamat": "DUSUN II",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "MIDA LUSINA SITANGGANG",
    "alamat": "JL. RONGGUR NI HUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RAYA BELLA LBN TOBING",
    "alamat": "PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ELSA DAMAYANTI P",
    "alamat": "BANEARA KEL/DESA PARTUNGKONAGINJANG KECAMATAN HARIAN KABUPATEN SAMOSIR",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "JADDY SITANGGANG",
    "alamat": "JALAN USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SARMI PURBA",
    "alamat": "LONDUT",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "DONI AMRI HASOLOAN TAMBUNAN",
    "alamat": "SIJORO-JORO",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RUMAH MAKAN <BRANDO STEPANUS SINURAT>",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SARMA RIANITA SITUMORANG",
    "alamat": "LUMBAN SITIO - TIO",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "LAMRIA BRIGITA SINABUTAR",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "DIANTO MANIK",
    "alamat": "KOMPLEKS POLISI",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "MARIA CANDRA NAINGGOLAN",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "SURIANI TAMBA",
    "alamat": "PALIPII, KECAMATAN PALIPI, KODE POS 22393",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "RICO SIHOTANG",
    "alamat": "JALAN DR. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RONNY APRIADI SYAHPUTRA GALINGGING",
    "alamat": "PANATAPAN PARA LAYANG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "MARSUDIN LUMBANTUNGKUP",
    "alamat": "JL. MERDEKA NO. 10",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PERIS SANDO SINAGA",
    "alamat": "PALLOMBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "ALFENCIUS MULATUA MALAU",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ASLINA TUMANGGOR",
    "alamat": "LUMBAN SUHI SUHI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "Hotdo laura parida sitanggang",
    "alamat": "Dusun Lll Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "HIKLER SIPANGKAR",
    "alamat": "LUMBAN SIPANGKAR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "FIRMA SINAGA",
    "alamat": "TAMBUN",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "ARMA SITUMORANG",
    "alamat": "SINAGA URUK",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "HERMINA MARIA GULTOM",
    "alamat": "JL. SIMANINDO KM. 1 NO. 15",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "MARANGIN M SAMOSIR",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "MARTIANNA NAPITUPULU",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "PARANKLIN S SIMBOLON",
    "alamat": "PANDUMPASAN 000/000",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ELIDAIDE SILALAHI",
    "alamat": "LAGUNDI",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "IRAWATI GULTOM",
    "alamat": "AMBULA, SALIMA LOMBU, ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "MARDIARUS PURBA",
    "alamat": "GANJANG NAMORA,TURPUK LIMBONG,HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "VALENTINO P GURNING",
    "alamat": "SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PANDER SIDABUTAR",
    "alamat": "TUKTUK PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TINA AGUSTINA PANJAITAN",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "PARMAN",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "BOY LUISFIGO SINAGA",
    "alamat": "SIHUSAPI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "MARTIN PAULUS SITANGGANG",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ARTO AMBARITA",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "JUAL ATK <PASINTU YES RAJAGUKGUK>",
    "alamat": "JL. NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AMRET MANURUNG",
    "alamat": "KOMPLEKS PUSKESMAS",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "DITA TAMARA SINAGA",
    "alamat": "PEAJOLO",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "YENNI Y.C. SITUMORANG",
    "alamat": "HUTA GURGUR",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "RINA MARHAYATI",
    "alamat": "SITIO-TIO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "Natalia pardosi",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ENOS SINAGA /boru nadeak",
    "alamat": "TAHUNAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MANIMPAN SITOMPUL",
    "alamat": "LUMBAN HARO, SIBONOR OMPURATUS, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "DOSMARIA MALAU",
    "alamat": "PARPASIR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "PURNAMA SAGALA",
    "alamat": "LBN GALUNG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "RIKARDO SIMBOLON",
    "alamat": "AEK NAULI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "FERDINAN APRIYANTO SITUMORANG",
    "alamat": "AMBARITA, AMBARITA, SIMANINDO SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ROIANTY MARBUN",
    "alamat": "TURPUK LIMBONG, TURPUK LIMBONG, HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "SAHALA BANUA RAJA",
    "alamat": "Pagar Onan",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "Ledis simbolon",
    "alamat": "Bongbong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "SALMON HUTASOIT",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PETRIKA SITUMORANG",
    "alamat": "BATU GORDANG, KEL. PINTU SONA, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "LAMTAMA HAMONANGAN SIBORO",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ROFENTI SIRINGORINGO",
    "alamat": "SIMARANDUHURAN",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "NELLY INGRID SONIA SILALAHI",
    "alamat": "SOSOR GLUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TIARMIN GULTOM",
    "alamat": "HUTA HOTANG",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "SRI RAHAYU SITANGGANG",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TUMIUR TOGATOROP",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "NURHAFNI NAINGGOLAN",
    "alamat": "JL. LAPANGAN BOLA NO 11, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN FLOWER",
    "alamat": "PEA TAMBOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "GOLLIP LUMBANSIANTAR",
    "alamat": "LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "RONY SIMBOLON",
    "alamat": "AMBAROBA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NOVA ELLEN NATALIA",
    "alamat": "LUMBAN TONGA TONGA",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "TOBA DREAM PROJECT",
    "alamat": "Lumban Napitu",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "DARIAMAN SIAHAAN",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "ERBIN SITUMORANG",
    "alamat": "SINABULAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "ESMEIDA PARHUSIP",
    "alamat": "BUNTUARA",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "BISNER SINURAT",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "DENTIANA SIMARMATA",
    "alamat": "SINABULAN URUK",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "PATIARAJA SIHOTANG",
    "alamat": "KOMP PENGAIRAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "Lasro limbong",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROMINDA SIMBOLON",
    "alamat": "AEK NAULI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "OSWALD GULTOM",
    "alamat": "HOLANG-HOLANG",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "PRABOWO RIVALDO IMMANUEL L TOBING",
    "alamat": "PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MARTONI SINAGA",
    "alamat": "TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "MARUDUT ROREJEKI",
    "alamat": "DUSUN I",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ROMA YANA SITANGGANG",
    "alamat": "LUMBAN BAGAS",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "ERPANTO TAMBA",
    "alamat": "GORAT, GORAT PALLOMBUAN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "RYANTO NADEAK",
    "alamat": "LINTONGNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "MURNI TAMPUBOLON",
    "alamat": "LUMBAN NAINGGOLAN",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "LAHAT SIHOTANG",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "RUDOLF SITUMORANG",
    "alamat": "LONTUNG NAGODANG",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "PARNINGOTAN SANDO SINAGA",
    "alamat": "PANGALOAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "UKKIL SAMOSIR",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ASTON SINURAT",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "HERMAN",
    "alamat": "LUMBAN TURNIP , DESA :SIOPAT SOSOR, KECAMATAN PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MERIKA SITUMORANG",
    "alamat": "JL. PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MARLAS MARBUN",
    "alamat": "SITANGGANG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "PILIPUS PANDIANGAN",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PILAR BORASPATI",
    "alamat": "Toras, Dusun III Desa Nainggolan, Kecamatan Nainggolan, Kabupaten Samosir, Provinsi Sumatera Utara",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "ANDIKA LEO SAPUTRA TARIGAN",
    "alamat": "LUMBAN SOIT",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ELIDA IPANNA SITOMPUL",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "Y JULIANA SIDABUTAR",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TORMAULI SIRINGORINGO",
    "alamat": "HUTA BALIAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "MERI GULTOM",
    "alamat": "LUMBAN SOSOR",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "ZARWAN SITUMORANG",
    "alamat": "PURBA DOLOK",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "AGNES VERONIKA NAIBAHO",
    "alamat": "TANJUNG BUNGA DUSUN. I",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "BETA PAULINA SINURAT",
    "alamat": "SOSOR NANGKA",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "JASVIN NADEAK",
    "alamat": "SITAO-TAO, TANJUNG BUNGA, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "JONRI PARLINDUNGAN SIMALANGO",
    "alamat": "LUMBAN SIMALANGO",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "HOTMAWATY SIMARMATA",
    "alamat": "SIDUMA DUMA JANJI MARIA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "BERNADETTUS SITANGGANG",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "MANOGU SINAGA",
    "alamat": "BANJAR GUNUNG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "RETNA SIHOMBING",
    "alamat": "SITATAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MANGASI SIHOTANG",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "DEMAK SITANGGANG",
    "alamat": "GUMBA",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "Rusma sinaga",
    "alamat": "Hariarapintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MENTINA PASARIBU",
    "alamat": "TIGA BODAI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "HASMAR SITUMORANG",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "Magdalena limbong",
    "alamat": "Peabang",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "penjahit <HOTSUMITA MASLIANA PARHUSIP.",
    "alamat": "HUTARAJA",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "MARHAMA ROHIMIN",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RUMONDANG SIMANJORANG",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "LOTAR LAMRIKO SILALAHI",
    "alamat": "JL.JANJI MARIA SIGAOL",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "MARTAULI SIHOTANG",
    "alamat": "SOSOR MANGADAR",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "CANDRO SITANGGANG",
    "alamat": "LBN TONGA-TONGA",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "YUDI SONAKTUA PARDEDE",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "PINTA RIA NAULI NAINGGOLAN",
    "alamat": "JL. LUMBAN BONA-BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MARUKKIL HOTTUA SITUMORANG",
    "alamat": "ONAN SIBAGANDING",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "SIMSON SINAGA",
    "alamat": "SIBARITA",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HETTI NAIBAHO",
    "alamat": "LBN SITUMORANG DESA HUTA TINGGI KEC.PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "JOHANNES EFENDI SITANGGANG",
    "alamat": "JL. SIARUNG - ARUNG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "ANITA PUTRI SARI SITANGGANG",
    "alamat": "ONAN TUNGKUP",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "Masdelina pasaribu",
    "alamat": "Dusun Lll",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "AMAN SIMBOLON",
    "alamat": "SITOLUHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "RAMBO SIMBOLON",
    "alamat": "SUHUT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ANCEL SINAGA",
    "alamat": "TAMBAK DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "Nurhaya haulina warkuliana nadeak",
    "alamat": "Tanjung Bunga",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "DIGO OR SIHOTANG",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "HARJONO BERNARDUS GULTOM",
    "alamat": "JL AEK RAJA",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "Dumanris Turnip",
    "alamat": "Sialapit Ds Cinta Dame",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ABDONAL SINAGA",
    "alamat": "OPPURATUS",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "DEWI PRANSISKA SIMARMATA",
    "alamat": "SIGANJANG",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "MUHAMMAD INDRA SINAGA",
    "alamat": "PARSIGIRAN",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "HOTLI SINAGA",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "SYAHRUN",
    "alamat": "LUMBAN SIDABUTAR",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MARALAM GULTOM",
    "alamat": "JANJI MATOGU",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "RAMBANG SUNAWAR SIMBOLON",
    "alamat": "JL. BARISAN GEREJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "MUSTAR SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "ENDANG SIJABAT",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "KASMIN NAIBAHO",
    "alamat": "PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "RIDWANTO SIRINGORINGO",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SANNY SILALAHI",
    "alamat": "HUTA URAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "PURNAMA SIDABUTAR",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "WENNI NADEAK",
    "alamat": "SITAHUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "SRIAYU TAMBA",
    "alamat": "JL DANAU TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RATNA MANIHURUK",
    "alamat": "TIGA BODAI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "DEWI SAGALA",
    "alamat": "SIMARAEK",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "JUAL AYAM <PARDOMUAN LASMA ROHANI NAIBAHO>",
    "alamat": "JL  SIAHAAN BAGASAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PINTAMA MANIK",
    "alamat": "DUSUN II",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "ALEXSANDER AMBARITA",
    "alamat": "pea namalum",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "KB NORA DELIMA SINAGA",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "HOMESTAY <JAWARIS SITOHANG>",
    "alamat": "JL. SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN FRIENDLY",
    "alamat": "pangaloan",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "NELLY SIMANULLANG",
    "alamat": "PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PASTIADA M SIMBOLON",
    "alamat": "SIGUMBANG ,",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "MASTON SUHIRMAN SIMBOLON",
    "alamat": "HUTA GODANG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "JAYA SITUMORANG",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "LAMHOT RUMAHORBO",
    "alamat": "SIDOLON DOLON, DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "ROBEKKA SIMALANGO - PEMBUATAN KERUPUK PISANG",
    "alamat": "SIMARHULANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "HANSEN SITANGGANG",
    "alamat": "Sampe Horas",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "PARLINDUNGAN SITANGGANG",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "DEDI HERMANTO TAMPUBOLON",
    "alamat": "LBN. BANGUN-BANGUN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "WESLY REZEKY SITIO",
    "alamat": "JALAN BESAR AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SANTI ROSANA SIMAMORA",
    "alamat": "LUMBAN BUTAR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ARTHA YULINAR SITANGGANG",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MANGIRING SIMANJORANG",
    "alamat": "BINANGARA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "FEBRI MARDONGAN NADEAK",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "PUTRA JAYA SIMBOLON",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RAPIDO SITANGGANG",
    "alamat": "AEK LAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "PARULIAN SIMARMATA",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "TIOPAN SILALAHI",
    "alamat": "PANDAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "CONGLI SITINJAK",
    "alamat": "SABA-SABA",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "HOT JAYA SINAGA",
    "alamat": "JL, HUTA BOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "REHMALEMTA BERU KARO",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "Masni sihombing",
    "alamat": "Harihara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "TATAR P PASARIBU - JUALAN OBAT OBATAN",
    "alamat": "SITONGGI TONGGI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "SUMPER EDWARD HALOMOAN SIMANJUNTAK",
    "alamat": "JL. SISINGAMANGARAJA NO. 77",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JONGER SIMBOLON",
    "alamat": "BARISAN TORUAN DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "LINDA ELPINA SIMBOLON",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ALPENSUS RUMAPEA",
    "alamat": "SITAPEAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "JAKIMIN LUMBAN RAJA",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "TOGA SINAGA",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "DEARMA HITAULI SARAGIH",
    "alamat": "SIHUSAPI",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "TUTUR SIDABUTAR",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MANUTUR SITUMORANG",
    "alamat": "DOLOK MARTAHAN",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "SEFANIA SAGALA",
    "alamat": "SIMANAMPANG, GINOLAT, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "LANDO HARIANJA",
    "alamat": "TOMOK BOLON, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "YAN PUTRA SIMARMATA",
    "alamat": "PEABANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "DORMAULI PARNINGOTAN SITANGGANG",
    "alamat": "SIDOLON DOLON",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "JUPEN SITINJAK",
    "alamat": "TANDING",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "JONNI TULUS NABABAN",
    "alamat": "HUTA SITANGGANG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "LAURA SARTIKA M. SITANGGANG",
    "alamat": "KOMP FERRY TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PASTIMA DAMANIK",
    "alamat": "KOMPLEK FERRY",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "Hotmian sigalingging",
    "alamat": "Peabang",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "SIHOL NAIBAHO",
    "alamat": "PASAR SILENGGE",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "MARADONA SITUMORANG",
    "alamat": "SIANDOR",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "RADOT SITUMORANG",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "SUNDUR SILALAHI",
    "alamat": "PARRIPEAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "RYONOSALEH SITANGGANG",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "ERLINDO ELENA NAIBAHO",
    "alamat": "DUSUN II",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "FRANSISCA ULINA N",
    "alamat": "SIJALIMAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUNIANTO KLARUS FIDELIS TAMBA",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ARTIMAWAN HUTAPEA",
    "alamat": "Lumban Sitohang",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "NERLIKA SITOHANG",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "Hotni nainggolan",
    "alamat": "Parbaba",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RENNI NADEAK",
    "alamat": "LUMBAN SIHOLE",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "BUDI HARTONO SIALLAGAN",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "MANATAP RAJAGUKGUK",
    "alamat": "LUMBAN HARO",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "HENRYCO SARI MARTUA SIHOTANG",
    "alamat": "TURPUK SIHOTANG,TURPUK SIHOTANG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "Bonifasius Simbolon",
    "alamat": "Lumban Hasahatan",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "ANDREW SUTANDI L GAOL",
    "alamat": "JL. BATUBOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "MANIUR SINAGA",
    "alamat": "NAHORNOP, SINAGA URUK PANDIAGAN, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "DARWIN DAHLAN SINAGA",
    "alamat": "PARMONANGAN",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "VERAWATY NOVALINA SIMANJUNTAK",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BISMAN NAIBAHO",
    "alamat": "SIOPAT SOSOR, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MARLINA",
    "alamat": "PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "JUDIMAN SIALLAGAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "MARIA DAFROSA SITINJAK",
    "alamat": "PARMONANGAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "DICKY RICARDO GULTOM",
    "alamat": "SITAMIANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "AGUSTINUS SIGIRO",
    "alamat": "SITOLUNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "ELVIRIDA SIMBOLON",
    "alamat": "PARJONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROPENDA MALAU",
    "alamat": "SISONGKUR",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "PINASAOR. V. SAMOSIR",
    "alamat": "TOMOK PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "RISMA WATI BR. MALAU",
    "alamat": "LUMBAN NAHOT",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "AMPERA SAGALA",
    "alamat": "SOSOR NABOLAK,BONAN DOLOK,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "JOEL DANIEL SIMATUPANG",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MIANDA NAIBAHO",
    "alamat": "SIANTAR ANTAR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "GREIS NATHALYA SIMALANGO",
    "alamat": "SIPULO PULO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "ELPRIDA SUSANTI TAMBA",
    "alamat": "LUMBAN PEA SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "IMMANUEL BAKARA",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "Dame r silaban",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ALLEN SINURAT",
    "alamat": "AEK RANGAT",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "NIA FARANCISKA SITUMORANG",
    "alamat": "LUMBAN PANDE",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "RANI THERESIA MUNTHE",
    "alamat": "JL.TELE PINDA,SIOGUNG-OGUNG",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ELPANSHA URIP.S.SIANIPAR",
    "alamat": "TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "JULYANA HUTABARAT",
    "alamat": "LUMBAN SIAHAAN",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "COSLAS HETTY EVALIN MALAU",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "RIVALDO FRANS ONY LIMBONG",
    "alamat": "JL.PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "YUTIUR AGRINA SAMOSIR",
    "alamat": "JL. PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PUTRA VAMILY SIMBOLON",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "POLMER SIMBOLON",
    "alamat": "PANDUMPASAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "RISNA MANIK",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "LEFRIN MANIK",
    "alamat": "BATU PORHIS",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "RINI OKTARIA TINDAON",
    "alamat": "LUMBAN GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "JONNER TAMBA",
    "alamat": "PEARUNG",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "RITSON SILABAN",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "TOMSON SIMANIHURUK",
    "alamat": "LUMBAN MADUMA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "BANUARA SINAGA",
    "alamat": "LUMBAN BONA-BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ALPYAN JULIYANTO S",
    "alamat": "TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "HUMALATUA LUMBANRAJA",
    "alamat": "Mogang",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "Mesrika manihuruk",
    "alamat": "Jl.ronggur Nihuta",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HUTAPARIK",
    "alamat": "KOMPLEKS HUTAPARIK LAND NO.7",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "HERBIN SITUMORANG",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "SRI DAYA MALAU",
    "alamat": "HUTANAMORA, HUTA NAMORA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "LAURINA PERAWATI SINURAT",
    "alamat": "LUMBAN DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "ELSION SABDA TURNIP",
    "alamat": "BAT-BATU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "ARTHA CONSULTANT",
    "alamat": "JALAN SISANGKIL PARADUAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "HERMAN SAPUTRA NAINGGOLAN",
    "alamat": "TIGA BUDAI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "HOTDON NAIBAHO",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JON FRICKLES LAMHOT MANURUNG",
    "alamat": "LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "DISKO SITANGGANG",
    "alamat": "SIBARGOT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "JARUSDIN NAIBAHO",
    "alamat": "SIJAMBUR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MANAT AMBARITA",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "LASNI ROSINTA SINAGA",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "LASNIDA MALAU",
    "alamat": "SIPINGGAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "MANGADU SINAGA",
    "alamat": "PARHOLIAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "PELITA HATI",
    "alamat": "sosor dolok",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "STELLA ANGELICA L GAOL",
    "alamat": "BATU BOLON, DESA HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "Trisno Sitanggang",
    "alamat": "Simangonding",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "HASIHOLAN SIRINGORINGO",
    "alamat": "PARIMBUSAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "ROLIKA MANIK",
    "alamat": "HUTABARU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MARULI SIDABUTAR",
    "alamat": "JL, PANDE NABOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "ALFONSUS LIGUORI MANGARAJA MANALU",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "DAHLAN NAINGGOLAN",
    "alamat": "HUTA GODANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "CANDRA ARUAN",
    "alamat": "LUMBAN PANSUR",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "CANDRO WIDODO SIDABUTAR",
    "alamat": "LBN GALUNG, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TOHAP WANDI SUPRATMAN SINAGA",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "SITI AMSIH SIMARMATA",
    "alamat": "LBN TONGA-TONGA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "TIPO SANTRINO MARBUN",
    "alamat": "JLN. DIPONEGORO NO.57",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DOMSON SITANGGANG",
    "alamat": "PAMINGGIRAN",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "MANGIRING SIMARMATA",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "Ormaika siboro",
    "alamat": "Panjaitan",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "KAROLINA SITINJAK",
    "alamat": "LUMBAN BARINGIN",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "ARISMAN JULIVEN SITUMORANG",
    "alamat": "JL, SABUNGAN NI HUTA II",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "BASARIA SURYANI NADEAK",
    "alamat": "BATU BOLON, HUTA GINJANG, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "Erlina mustika purba",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "RUSMEY TOGATOROP",
    "alamat": "TATAR BUNGA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "RONI NURHASANAH LUBIS",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "MELANI PURBA",
    "alamat": "LUMBAN BUNTU DUSUN II",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "DEWANTARA SITANGGANG",
    "alamat": "SIRIAON",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "EDISON SIJABAT",
    "alamat": "SOSOR PANGASEAN",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "NURHAIRANI MANURUNG",
    "alamat": "JL. RAYA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ROSITAULI SITUMORANG",
    "alamat": "JL.PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "OSIN HAMONANGAN PURBA",
    "alamat": "JL PERLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "NIRMA ASTRI SIHOTANG",
    "alamat": "SILINTONG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "YOSANTO MULIA NAIBAHO",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "NORA SINAGA",
    "alamat": "PARENDEAN",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "ROMASI RENILDIS SITANGGANG",
    "alamat": "PARHORASAN",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "FRANS RIVALDO MANUTUR SITINJAK",
    "alamat": "JL. PELABUHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "SARHOCHEL MARTOPOLO TAMBA",
    "alamat": "SITONGGOR",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "TENUN ULOS <MELIANA SAGALA>",
    "alamat": "SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "LAMBOK MALAU GRUP, CV",
    "alamat": "GUDANG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ASEP TAMBA",
    "alamat": "PEGE PEGE DESA PARSAORAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "TRISNAWATY NAINGGOLAN",
    "alamat": "LUMBAN RIHIT",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ERMAN SIMANJORANG",
    "alamat": "SITONGGI-TONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MOLISTA SAGALA",
    "alamat": "ALNGIT, LUMBAN SUHI SUHI TORUAN, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "LAMTAMA",
    "alamat": "URAT TIMUR",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "DEWI NATI SITANGGANG",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "JONIATOR TAMBA",
    "alamat": "RANSANG BOSI, BUNTU MAULI, SITIO-TIO,",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "JOHN SINAGA",
    "alamat": "BARISAN GEREJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "ARIKO SITANGGANG",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "SITI NUR AINI",
    "alamat": "SINUAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "HUMOSA",
    "alamat": "sirimbang",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "RODO GRUP MARSADA",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "SAUDIMAN SITUMORANG",
    "alamat": "TINGGI",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "RAMOS FRANS SWAMITRAN SITANGGANG",
    "alamat": "LUMBAN IHUR",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "IRFAN KRISTIAN SINURAT",
    "alamat": "LUMBAN TONGA TONGA",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "FITRIANI LASMAIDA SIMARMATA",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "YUNITA SIHITE",
    "alamat": "SIOPAT SOSOR, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ROMA MALAU",
    "alamat": "TURPUK MALAU,TURPUK MALAU,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Malau"
  },
  {
    "nama_usaha": "MELVA SIRINGORINGO",
    "alamat": "HAIRI",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "TUALAN SINAGA",
    "alamat": "SONARNIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "I. LESTARI P. SAMOSIR",
    "alamat": "JANJI MARAPOT",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "BISTOK SIMBOLON",
    "alamat": "HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "DAUD RIO ISKANDAR SIRINGORINGO",
    "alamat": "SInaga Uruk Pandiangan",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "JONNER J. LIMBONG",
    "alamat": "GANJANG NAMORA",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "NATANAEL NADEAK",
    "alamat": "JL. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MICHAEL WENO MANIK",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "HETTI SINAGA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "ERDINAWATI NADEAK",
    "alamat": "JL.USKUP AGUNG SUGIOPRANOTO",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL JAGUNG <MANGUJI ROBERTUS SINABARIBA>",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MANDAPOT SITUMORANG",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "RATAMA GULTOM",
    "alamat": "JANJIMARIA",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "SAULI MANGARA TUA GULTOM",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "SUSANTI WAHYUNI TAMPUBOLON",
    "alamat": "JL. SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "HERI SUSANTO SIMANJUNTAK",
    "alamat": "JL, TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SUDARMONO SINAGA",
    "alamat": "SIPAPAN, PANAGGANGAN, NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "ESTY RUSMAWATY SIMARMATA",
    "alamat": "SIBORO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "NOVA ANGGRAINI PARHUSIP",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "RONAULI SIMBOLON",
    "alamat": "SIPULI",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "RIRI PURBA",
    "alamat": "HUTARAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MANGATUR LUMBANRAJA",
    "alamat": "SILULU",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "LUMEN NAIBAHO",
    "alamat": "JL. PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "EVILA THRESIA SIHALOHO",
    "alamat": "BATU MOMO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "RAHEL SIMARMATA",
    "alamat": "JL. KOL LIBERTI MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RIZAL SITINDAON",
    "alamat": "PASARAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "ROSLIN SIHOMBING",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "ROTUA TURNIP",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "Ristawani sinurat",
    "alamat": "Jl Simanindo",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "RENDRA NURMAYANI SIMANJUNTAK",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "DIONISIUS GUNAWAN SIMBOLON",
    "alamat": "SITIO TIO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "BENNY CHRISTOPER SITUMORANG",
    "alamat": "PASARAN I DUSUN III",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "PESTARIA SITANGGANG",
    "alamat": "PEA TAMBOK SALAON TONGATONGA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "WINNA OKTANTIA NAINGGOLAN",
    "alamat": "SIHOLING",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SARMA MALAU",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Fitryani",
    "alamat": "Pasar Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "VICTOR SITUMORANG",
    "alamat": "hatoguan",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "BENNI SINAGA",
    "alamat": "SOSOR DAME",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "SESRIANI SIJABAT",
    "alamat": "HARIARAPOHAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "MARULITUA PASARIBU",
    "alamat": "PARMOANGAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "ANGEL PRETTY SILALAHI",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PANOPARAJA SITUMORANG",
    "alamat": "SIDEAK DOLOK",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "MUSTIKA SITUMORANG",
    "alamat": "HOLBUNG",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "TUMPU SIBORO",
    "alamat": "BANJAR SIBORO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <NURDIN SARAGIH>",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LUHUT SINAGA",
    "alamat": "UGAN-UGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "HARTO P. SIMANJUNTAK",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN (KB) SITIO-TIO",
    "alamat": "SIMPANG TAMBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ELI PARMAN SIMARMATA",
    "alamat": "SIDUMA-DUMA",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "MASTHA HERNAWATI SILALAHI",
    "alamat": "JLN. SM RAJA 71",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HERLINA SITANGGANG",
    "alamat": "Huta raja",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RISMA SIMBOLON",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KAWAN SITINDAON",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "FERNANDO NAIBAHO",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "NATHAN MARTOGUAN SINAGA",
    "alamat": "BARISAN GEREJA, SAOR NAULI HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "Herte sipayung",
    "alamat": "Pardugul",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "KARJO LIBRA H. SIMBOLON",
    "alamat": "KOMPLEK SMA NEGEERI 1",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "KATARINA RINTA SINAGA",
    "alamat": "PANGAMBATAN, TOMOK SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "ARTA GUMIRAH SIREGAR",
    "alamat": "HUTA BOLON",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "JUAL JAMU <JULIANA SITINJAK>",
    "alamat": "HUTA URAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "EDINTA SITANGGANG",
    "alamat": "GAYA BARU",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "TIONA SITOHANG",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUFRIANTO SIMBOLON",
    "alamat": "LUMBAN JABI JABI",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "NOVAYANTI SITOHANG",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "TAMIO IMMANUELA SIPAHUTAR",
    "alamat": "JANJI MARIA",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "MANSA SIHOTANG",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "ADA TUA SIMBOLON",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "OBBYE MARKHE SIDABUTAR",
    "alamat": "LUMBAN MANURUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MANGALAM SORI SITOHANG",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "JAPANTAS SINAGA",
    "alamat": "SIPONGGOK",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "UMAR NAIBAHO",
    "alamat": "SIMONONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WINA KARLEHA SILALAHI",
    "alamat": "PARDOMUAN I, KEL/DESA PARDOMUAN I, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "IGNASIUS NURMALA SARI SINAGA",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "RUSMAULI SITANGGANG",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ELFRIDA SITOHANG",
    "alamat": "UPAGORDANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "ROBERT SIDABUTAR",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ASPI ROSDIANA",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "EFRIDA SIDABUTAR",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "ESTON SIALLAGAN",
    "alamat": "JALAN INPRES TUKTUK SIADONG,",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BOSTON ANESLI MANUNTUN NAIBAHO",
    "alamat": "JLN SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "KRISTINA SITANGGANG",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUNAWATI SIDABUTAR",
    "alamat": "TUKTUK SIADONG,",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ELIAS NADEAK",
    "alamat": "TAHUAN, KEL/DESA PARDOMUAN I, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARITO RAHMA SATIA MALAU",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "PERIS MIKAEL SIALLAGAN",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MUSLINA BR GINTING",
    "alamat": "HUTA BONA BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "BERNAWATI NAINGGOLAN",
    "alamat": "SINABULAN URUK",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "WINDA LUMBAN RAJA",
    "alamat": "GALA GALA",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "PARDINGOTAN ONESIMUS SAGALA",
    "alamat": "DUSUN I SIPINGGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "TENUN ULOS <WANTIMER SIMBOLON>",
    "alamat": "LUMBAN SUHI, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ROSPITA SIBAGARIANG",
    "alamat": "JLN TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BAKTIAR SITANGGANG",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "LARASWATI SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "ROMESTA SINAGA",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "JAMOT HABEAHAN",
    "alamat": "HABEAHAN, HABEAHAN NABURAHAN, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Habeahan Naburahan"
  },
  {
    "nama_usaha": "PAULIHON BARIMBING",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "PARNINGOTAN SINAGA",
    "alamat": "JL. PELABUHAN ONAN BARU PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL PERABOT <JHONSON NAIBAHO>",
    "alamat": "JL. DR. F. LBN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "PASKAH VALERIUS SAGALA",
    "alamat": "SITABU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "ANFAL SAMOSIR",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "HENLIANA MALAU",
    "alamat": "SITALAMETANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SI UTTE BOLON",
    "alamat": "Lumban Suhi-suhi Dolok",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "EVI MAGDALENA MALAU",
    "alamat": "HOLANG HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RENTELINA HASIBUAN",
    "alamat": "SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "NASIB NAIBAHO",
    "alamat": "HUTAPARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BOYN FRENKY ARDO SILALAHI",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HERMAN WANTO LBN SIANTAR",
    "alamat": "SITAHURU",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "ROBEKKA SIMALANGO",
    "alamat": "LUMBAN SIMALANGO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "MASRO SIJABAT",
    "alamat": "LUMBAN TONGA TONGA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "LIBERT MANURUNG",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "FRISDA EVAYANTI IMMANUELLA SIMARMATA",
    "alamat": "JL. PASTOR RADBOUD WATERAUS",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARDINGOT SITANGGANG",
    "alamat": "JLN SIANJUR MULA MULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BATU SAGALA",
    "alamat": "SIMANAMPANG,HUTA GURGUR,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "Penggilingan Padi Dan Penyosohan Beras <BONGGIT RUMAPEA>",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SANTRIKA R SINAGA",
    "alamat": "OPPURATUS",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "SAMPE SINAGA",
    "alamat": "RASANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "GABRIEL SIMALANGO",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NOPITA SIMBOLON",
    "alamat": "DUSUN III PANGUMPATAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "LOBER NAIBAHO",
    "alamat": "JL. DR. F.L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN CERIA",
    "alamat": "GALA-GALA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "DANIEL JUAN SITINJAK",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "MIKA NELVIRIDA SIHOMBING",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "NELLA GURNING",
    "alamat": "JL. KEJAKSAAN NO.36",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SUPRIANTO SIBATUARA",
    "alamat": "TORAS",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "SURYA DHARMA M. SIMANJORANG",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ALBINUS SIANIPAR",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ROYNALDO NAINGGOLAN",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "FELIK VOLTA TABOR SIREGAR",
    "alamat": "JL. NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ADONG TUA MALAU",
    "alamat": "Jl.Simanindo No.20 A",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "KARLY KRISPINUS SIMBOLON",
    "alamat": "SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "ENROYH VOLTA SAMOSIR",
    "alamat": "JL. F. L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ALBOIN SITANGGANG",
    "alamat": "JL.PUSUK BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RUGUN R NAIBAHO",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "HOTDIANA SIMBOLON",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "FORONIKA SINAGA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "SANTI TAMBA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "DWI HARDO NAINGGOLAN",
    "alamat": "Lumban simanihuruk",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "AGNES TERESIA MALAU",
    "alamat": "SIMPANG PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "PUTRI PURNAMA SIHALOHO",
    "alamat": "LUMBAN GANDA, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PIO MARIONO SIRINGORINGO",
    "alamat": "SIGIRA-GIRA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "Paramita sagala",
    "alamat": "Harihara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "APPRI MERIBA SINAGA",
    "alamat": "TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "SARDAYAN ROHANSEN NADEAK",
    "alamat": "TANJUNG BUNGA, TANJUNG BUNGA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ZEHNS DARWIN SITANGGANG",
    "alamat": "JL. PARTUNGKOAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "JETRO SITANGGANG",
    "alamat": "SIDIHONI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "TIKNO SIGALINGGING",
    "alamat": "AEK BARINGIN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "YETTY SINAGA",
    "alamat": "SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "SAMSIDER SIMBOLON",
    "alamat": "TANJUNG BUNGA, TANJUNG BUNGA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ARDIANTO SINAGA",
    "alamat": "PALLOMBUAN, PALLOMBUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "KISRA ERNAWATI SINAGA",
    "alamat": "SILOMBU",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "CASTRO ALEXANDER SINURAT",
    "alamat": "JL. USKUP AGUNG SUGIOPRANOTO NO. 2",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Elisabet rona uli sidabutar",
    "alamat": "Onanrunggu",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "ASDA SITANGGANG",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "WINDA SILALAHI",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "LISNA SITUMORANG",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "JEMMI PERNANDO SIMBOLON",
    "alamat": "DESA HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "SANGGAR SENI RAMBU NAULI",
    "alamat": "Sigaol Simbolon",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "MARLINA NAIBAHO",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "NURI RAHMADANI NASUTION",
    "alamat": "TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "JUJUR RICKY PARHUSIP",
    "alamat": "LUMBANG BARINGIN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "RINA PUTRI",
    "alamat": "JL. RONGGUR NI HUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TONNY ADELA",
    "alamat": "LUMBAN BONA BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MULIADIN",
    "alamat": "SIGUMBANG",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "DESMA NAINGGOLAN",
    "alamat": "JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "ROSITA HOTNIIDA SITUMORANG",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "WAHYU RISMA ULINA PANJAITAN",
    "alamat": "PARJONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "OSMAR SIALLAGAN",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NOVEN TAMBA",
    "alamat": "LUMBAN TAMBA, URAT II, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "INDAH UDUR SIHOTANG",
    "alamat": "SILULU",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "ESRAMA SIPRIANA SIHALOHO",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "MARUDA MANIK",
    "alamat": "JL, TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "RENALDI NAIBAHO",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ESLINA MANULLANG",
    "alamat": "PARMANUHAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "JURLIMAN SAGALA",
    "alamat": "SIPINGGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "RIDUAN SITUMORANG",
    "alamat": "PARADUAN",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "ARMENIA PASKAULINA SAGALA",
    "alamat": "LUMBAN SINABANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "NORIKI LUMBANSIANTAR",
    "alamat": "SIPINGGAN LUMBANSIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "Dahlia sinaga",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "PANTUN STEFANUS SITANGGANG",
    "alamat": "UPA SUHUT",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JUANDA LIMBONG",
    "alamat": "JL. PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NAHLAN NAIBAHO",
    "alamat": "SIAGIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "NITA NEMESIA SIMANJORANG",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SAPPULUH - bukit hijau",
    "alamat": "JLN RINGROAD SAMOSIR/gorat",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "MARISOL SIMBOLON",
    "alamat": "LUMBAN DOLOK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "Dina rogantina tamba",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "JOANNE ANGEL PARHUSIP",
    "alamat": "JANJIMARIA",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "YUSPITA NAINGGOLAN",
    "alamat": "HARAPOHAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "LIDYA FRANSISCA BR. SITUMORANG",
    "alamat": "SITANGGANG BAU, DESA PARSAORAN I, KECAMATAN PANGURURAN, KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "RADOT F MANIK",
    "alamat": "BUNTU MAULI",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "PARSAORAN SIMALANGO",
    "alamat": "SIMARHULANG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "HENRY DUNANT SIMBOLON",
    "alamat": "SABA LANGIT",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SARI TAMBA",
    "alamat": "HUTA TAMBA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "EVI SUSANTI BANJARNAHOR",
    "alamat": "PARDUGUL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "JUAL SARAPAN <JULIKA SITANGGANG>",
    "alamat": "JL. PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "RIDUAN SITUMORANG",
    "alamat": "SOSOR TALA",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "JUAL KUE <ANITA BR. SAGALA>",
    "alamat": "LUMBAN SUHI, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ENITA SINAGA",
    "alamat": "SITALAMETANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "EVI SIMANJUNTAK",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ARLIANI SINAGA",
    "alamat": "SITORNONG",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "ABAR SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "Rohanca sitohang",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "Herlina budiarta",
    "alamat": "Peabang",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "VERAWATI SILALAHI",
    "alamat": "RIANIATE PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "EWISDIAN SIRINGORINGO",
    "alamat": "SIMARANDUHURAN",
    "kecamatan": "Nainggolan",
    "desa": "Huta Rihit"
  },
  {
    "nama_usaha": "JOLLIN JOSEP SIMBOLON",
    "alamat": "SIGORAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "ADI SIMBOLON",
    "alamat": "SIANTAR-ANTAR",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "ABED PAPAR RIVANO SITANGGANG",
    "alamat": "JALAN SISIMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Flora debi rita",
    "alamat": "Lumban Manik",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MANGALAP TUA GURNING",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "MARJONO SITANGGANG",
    "alamat": "TIGA RUNGGU, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "OKKY PRIMA ISWARA",
    "alamat": "JLN. KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ERLAND DOMIANUS TAMBA",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROSMAULI",
    "alamat": "HUTANAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PIDELINA SITANGGANG",
    "alamat": "LUMBAN BONA BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "HERDI MARUBA TAMPUBOLON",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "HERICAT PURBA",
    "alamat": "SOSOR MAMUKKA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "NURILAM SAMOSIR",
    "alamat": "SOSOR DALAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "NOVEMBRINA HEXANA SINAGA",
    "alamat": "JL. RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HORAS MT. TAMBA",
    "alamat": "LBN SIANTAR",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "MARIANUS SIMANIHURUK",
    "alamat": "HUTARAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "YUNITA ROLAND SITANGGANG",
    "alamat": "JL. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ERIBAH TEGUH MANDIRI",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "SAHATMAN GULTOM",
    "alamat": "HUTA GINJANG DESA PARDOMUAN KECAMATAN ONAN RUNGGU KABUPATEN SAMOSIR",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "TOM BROS ALL BASIR",
    "alamat": "SIGURUNG GURUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "SETIAWATI BR SITORUS",
    "alamat": "DESA BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "JHONNER SIHOTANG",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "Dormauli sihotang",
    "alamat": "Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "BERTINA BAKKARA",
    "alamat": "DUSUN 2, AMBARITA, SIMANINDO SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "DHESLAND PAUL CHRISTIAN SIBARANI",
    "alamat": "PARJONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Rosindah sinaga",
    "alamat": "Dusun Ll Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROJAYA PASADA GROUP",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "KERJON SITUMORANG",
    "alamat": "GALUNGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "Door semer jesika (SENDU.T. SITUMORANG)",
    "alamat": "Bondar nagok",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "ESTER MAHULAE",
    "alamat": "LUMBAN IHUR",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "AGUSTINA MARIANITA LESTARI SILABAN",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "DENNI SINAGA",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "INDAH SARI SIGIRO",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "INDRA FATMAWATI",
    "alamat": "PASAR DOLOK",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "SARDION SIMBOLON",
    "alamat": "GUMBA HOLBUNG",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "HIMRO PRONOKUS SINURAT",
    "alamat": "LUMBAN RIHIT",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "INDAH HASTUTI S",
    "alamat": "DESA GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SAHATA PARULIAN BUTAR BUTAR",
    "alamat": "HATOGUAN, HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "RIATI SINAGA",
    "alamat": "UGAN UGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "LIDYA LUMBANRAJA",
    "alamat": "NANTINDANG",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "TUA SIMARMATA",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "EDWARD SIMATUPANG",
    "alamat": "JLN.KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HASUDUNGAN PANDIANGAN",
    "alamat": "PANDIANGAN, HUTADAME, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "JUAL KUE <ASNITA ERA ARIESTA SINAGA>",
    "alamat": "JL.N.SISINGAMANGARAJA NO.44,",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "INDUSTRI BAMBU <MANGOLOI SITANGGANG>",
    "alamat": "LUMBAN SIPANSA",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "JANAHOT BLASIUS SIHALOHO",
    "alamat": "SIOPATSOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LARIS H. MALAU",
    "alamat": "SOOSR MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RIMMA SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "SEKIN AGNES MALAU",
    "alamat": "PARMONANGAN",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "Fatra Krisdiansa Simamora",
    "alamat": "Mogang",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "SARMIDA LASMARIA SITANGGANG",
    "alamat": "PARSAORAN I",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "VERONICA TUMANGGOR",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "VIKTOR SITANGGANG",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TOMSON ERUWIN NADEAK",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "EDI RAHMAN RUMAHORBO",
    "alamat": "JL, LANGGE",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "Mariani haloho",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "BUDI APRIANTO",
    "alamat": "SIPONGGOL TANDUK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "FENNI R. TURNIP",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "DODI ANDIKA PUTRA LUMBAN RAJA",
    "alamat": "HARIARATOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN KASIH ANUGRAH",
    "alamat": "PARGODUNGAN",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "BONA SINAGA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "ANOI MARTOGI PANGIHUTAN SIMANJUNTAK",
    "alamat": "JL SOSOR TOLONG",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "SURYATI PASARIBU",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "CRISTOFEL HONDO",
    "alamat": "UPA HODA, HUTA NAMORA, PANGURURAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BINTANG NOVRIADI SIBARANI",
    "alamat": "JL RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "Yunita mariana naibaho",
    "alamat": "Lumban Silalahi",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AGUSTINUS SIJABAT",
    "alamat": "DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "YESSI VAN CARMELIA SIMBOLON",
    "alamat": "JL. DI. PANJAITAN NO. 61",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DEDI DOLES SILALAHI",
    "alamat": "PASAR SILENGGE",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "TIGOR P NAIBAHO",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MARLINA HUTAGALUNG",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LENNY PANJAITAN",
    "alamat": "KOMPLEK PUSKESMAS ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "DARWIN SIHALOHO",
    "alamat": "SIMANINDO SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "Martauli",
    "alamat": "Sitanggang Bau Ll",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "RENATHA SIHOMBING",
    "alamat": "DS HATOGUAN KEC PALIPI SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "MARTHA JULIANA SIMARMATA",
    "alamat": "GALA-GALA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "DAHLAN BUKTI SIMBOLON",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "RIDAWATI LUMBANBATU",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "DESPON SIHOTANG",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "DEWI SIMANULLANG",
    "alamat": "ONAN BARU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "HENDIRI ATCE PUTRO SIMARMATA",
    "alamat": "JANJI TOBA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "SUGITO SUTANTO NAINGGOLAN",
    "alamat": "SIPIRA",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "SAUNUR SITUMORANG",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "LAHI LASMARIA BR SITUMORANG",
    "alamat": "JL. RONGGUR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LAMBOK LAMHOT LEROY MALAU",
    "alamat": "GUDANG",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BENNI NAIBAHO",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "RISMA BR MARMATA",
    "alamat": "LUMBAN SIMARMATA, DESA: HARIARA POHAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "NATALIA KRISTINA SIMBOLON",
    "alamat": "LUMBAN SIBASO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JAINGAT SIHALOHO",
    "alamat": "SIMPANG PARKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Rika nopriani",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "L. TIOMINAR SITORUS",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "SIBOLEBOLE",
    "alamat": "Sait Nihuta",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "RISTA SIHOTANG",
    "alamat": "Alngit",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ROSIANA NAINGGOLAN",
    "alamat": "SIUPAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "JONSON HASIHOLAN SINAGA",
    "alamat": "BATU LUNAK",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "HEDDI PURBA",
    "alamat": "SIALAPIT",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "BATAHAN PAKPAHAN",
    "alamat": "LUMBAN JABI-JABI",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "TRIVENA BEREKHYA SITANGGANG",
    "alamat": "LUMBAN JANJI",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SINTONG PANJAITAN",
    "alamat": "SINARBORNO, HUTA BOLON, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "RESTA RAJAGUKGUK",
    "alamat": "JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "MARSAULINA BR BUTAR BUTAR",
    "alamat": "JL. PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LASMARIA SINAGA",
    "alamat": "SIHADUKKA",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "JOY JEKSION SINAGA",
    "alamat": "TOMOK, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "IKA ROLINA SAMOSIR",
    "alamat": "JL. D.I PANJAITAN NO.63",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOTMAN SIDABUTAR",
    "alamat": "PELABUHAN TOMOK TOUR",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "RENATA SAULINA PANDIANGAN",
    "alamat": "NASUMANDOR",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HAJORAN, CV",
    "alamat": "HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "ARGHA",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "JONGAR SINAGA",
    "alamat": "BARISAN GEREJA, SAOR NAULI HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "MONATUA SIMBOLON",
    "alamat": "PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "GUNTUR SIDABUTAR",
    "alamat": "JL, GURNING",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "HENRY HILLARIA ESTER MARIA SITANGGANG",
    "alamat": "LUMBAN LONDUT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "SARLINA SIMBOLON",
    "alamat": "PARJONGGI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FRISKA MARISI SIBARANI",
    "alamat": "TOMOK, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "AGNES R. NAINGGOLAN",
    "alamat": "Situngkir",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "RONNY BENEDIKTUS SIRINGORINGO",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "RIDUANNA SINAGA",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "RONAL ALEKSANDER NAPITU",
    "alamat": "BATU BATU",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "MARLINA MANURUNG",
    "alamat": "MARIARAJA",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "IWAN SITUMORANG",
    "alamat": "SIBALANJA",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "LIDYA TUTI",
    "alamat": "BATU-BATU",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "CANDONI PARULIAN SITUMORANG",
    "alamat": "SIDEAK, SIDEAK, PALIPI, SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "ROMAULINA NAIBAHO",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "HARAPAN NAIBAHO",
    "alamat": "JALAN PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SAUT PARADE TUA",
    "alamat": "JL. PELABUHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "HELWIDA LISNAWATI SAMOSIR",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "ARMAN NAINGGOLAN",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "KAPRO SIDABUTAR",
    "alamat": "PASAR BARU",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "LEDIS RAMAYANA SIMBOLON",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "LAMRIA SAGALA",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "MARADEN SAGALA",
    "alamat": "PINAL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "ENNY CAROLINA SINURAT",
    "alamat": "JL.DR.FL.TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GORNALI ALVIAN MALAU",
    "alamat": "HUTA URAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "SEBET LARMA SINAGA",
    "alamat": "AEK RANGAT RT/RW 000/000 DESA SIGAOL SIMBOLON KEC PALIPI KAB SAMOSIR",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "SURYADI SIHOMBING",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SAULINA AGNES NAIBAHO",
    "alamat": "SIGORAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "RISTAWATI BR. LUBIS",
    "alamat": "DUSUN1",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "ELISPARNO TAMBA",
    "alamat": "SIDALU DALU, PALIPI, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "TETTY NOVA RAJAGUKGUK",
    "alamat": "SIOPAT SOSOR, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "NATAL PANDEANGAN",
    "alamat": "HUTA DAME, HUTADAME, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "SAKKAMADEHA KREASI SEMESTA",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "USDEN MALAU",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HEPI HENNI MALAU",
    "alamat": "JL PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUSTIANUS SINAGA",
    "alamat": "PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "Jones BAKKARA",
    "alamat": "Siallagan",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "JESRIN SIMANIHURUK",
    "alamat": "SIDABAGAS",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PARDOMUAN HALOHO",
    "alamat": "JLN. DR. F.L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ANRI JOSUA MALAU",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "PONIMIN SIBORO",
    "alamat": "LUMBAN SIBORO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "KRISTINA HUTAGAOL",
    "alamat": "LUMBAN JIOR",
    "kecamatan": "Nainggolan",
    "desa": "Janji Marapot"
  },
  {
    "nama_usaha": "YOSE ANDRE SIDABUTAR",
    "alamat": "DUSUN I BONGBONG",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MANGARIS SIHALOHO",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "RENGSI MATHILDE SIMBOLON - JUAL JAJAMNAN",
    "alamat": "SITONGGI-TONGGI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "Nursani tambunan",
    "alamat": "Jl.dr.f.l Tobing",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BARBARA GULTOM",
    "alamat": "JL. DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JACKSON SUARDO SILALAHI",
    "alamat": "JL. EL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SITI OLO RUPINA SIANTURI",
    "alamat": "SIPINGGAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "TIODOR SINAGA",
    "alamat": "HUTAMARIA",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "JAHOLONG SIRAIT",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "HOTMAN SIMBOLON",
    "alamat": "SIGORAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "ERNIDAWATI SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "SEPNIKE TAMBA",
    "alamat": "PARSAORAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "JUDIMAN",
    "alamat": "HUTAURUK-URUK",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUNIOR JECKSON",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "GRESIA ADELINA PARHUSIP",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "BESLI SAGALA",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "NARDO PANDIANGAN",
    "alamat": "PANDIANGAN, HUTADAME, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "ERNENTUS SITANGGANG",
    "alamat": "SUKARAME",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MANUTUR SINURAT",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MARIANITA GULTOM",
    "alamat": "DUSUN III SITAIM",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "HOTMAN SILALAHI",
    "alamat": "SIALLAGAN-PANDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "AGUS TANDA SITANGGANG",
    "alamat": "LUMBAN SIPANSA",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "EVA KUSENDANG MARLINA",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "JUAL HP <OLYMPAS SITORUS>",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "YOSRI OLIVIA NAIBAHO",
    "alamat": "JL. DR. FL. TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TARULI LASTARINA SIMBOLON",
    "alamat": "SITANGKARAEN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "OCTO SIDABUTAR",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WESLI NAIBAHO",
    "alamat": "AEKHELA, SIMBOLON PURBA, KEC. PALIPI, KAB. SAMOSIR, PROV. SUMATERA UTARA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "Mariyati zendrato",
    "alamat": "Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROMESTI MANIHURUK",
    "alamat": "ANDALIMAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "SABAR MENDERITA MANIK",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "HERLEDIS SINAGA",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "ROSENDI MARIANA E.P SITOHANG",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "MARUDUT P. Y. SILITONGA",
    "alamat": "ONANBARU SITINJAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "LUKAS MANGARATUA SINAGA",
    "alamat": "JL HADRIANUS SINAGA DUSUN III",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LIFZEN SITANGGANG",
    "alamat": "SISANGKALAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "Reliska nainggolan bunti bilson nainggolan",
    "alamat": "Dusun Perbatsan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Renni br simbolon",
    "alamat": "Lumban Simbolon",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "COSMAS SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "ANNA M SIDABUTAR",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "JOKO MANIK",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "LISNA BR. SINURAT",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "SINUR AMBARITA",
    "alamat": "LBN SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BOY ALDO SINAGA",
    "alamat": "Lumbanhariara",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "LINCE SIMBOLON",
    "alamat": "PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "NAGATUA SIMANJORANG",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "TARIDA TAMPUBOLON",
    "alamat": "OPPURATUS",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "PARNINGOTAN SIHALOHO",
    "alamat": "SUHUT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "JANSON NAIBAHO",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SAUT MARTUA TAMBA",
    "alamat": "TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "TOURISMA SIMBOLON",
    "alamat": "TAMBANGAN",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "IDAYANTI SINAGA",
    "alamat": "HARIAN BOHO, TURPUK LIMBONG, HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "ADVENTUS SINAGA",
    "alamat": "Sosor Pasir",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "HUMISAR SIDABUTAR",
    "alamat": "tuktuk PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JULITA SARI EVALYNA SINAGA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "PARULIAN ULUAN ROMAULI",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "RONAULI GULTOM",
    "alamat": "BANJAR SELAMAT",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "LENSIKA SIAHAAN",
    "alamat": "LUMBAN SIAHAAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "LILI JUNIANTO",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "JOHANNES GALANG TARIHORAN",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Ida sipayung",
    "alamat": "Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "INDUSTRI LOGAM <ESDIN TUMANGGOR>",
    "alamat": "SAITNIHUTA, SAITNIHUTA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "ZAINAL AMBRI",
    "alamat": "PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HELIDA SILALAHI",
    "alamat": "BATO BOLON",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "POPDI SEMELANDU LUMBANRAJA",
    "alamat": "LUMBAN SIRIHIT",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "PUTRI ELISABETH SITANGGANG",
    "alamat": "SIIGAR-IGAR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "JUWITA MARDIANA NAIBAHO",
    "alamat": "SIPARLE-ALE",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RAMA DANI",
    "alamat": "JL RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Betti j habeahan",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "POSMA R. SITOHANG",
    "alamat": "LUMBAN PASIR, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "RATNA SARI",
    "alamat": "PARSAORAN 1",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "POLMA HASEHATON GURNING",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "MASTARIA SIMARMATA",
    "alamat": "SUKA RAMAI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MAWAN MARBUN",
    "alamat": "SABA LANGIT",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "NAMARBAJU <RISKI VANNI SIMBOLON>",
    "alamat": "JALAN DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CHARLES BACTIAR SIDABUTAR",
    "alamat": "LUMBAN PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "SRI SARI REJEKI SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "MIAN SITANGGANG",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "JUAL AYAM <MAX DONALD SITUMORANG>",
    "alamat": "SOSOR DAME",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "TOGAR SIBORO",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "IPAN PAKPAHAN",
    "alamat": "SOSOR MATIO",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "SRI KARTIKA TAMBA",
    "alamat": "AEK DOLOK",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "ROSMAIDA RUMAHORBO",
    "alamat": "SIULAK HOSA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "HASNA HENRI MAITO SIHOTANG",
    "alamat": "Labuhan Raut Bosi",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "WASHINTON SITUMORANG",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "MIKAEL NAIBAHO",
    "alamat": "SIBUNTUON",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "NOVIYANTILUSIANA SIMANJUNTAK",
    "alamat": "HUTA SITALLAK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "Hefti sinaga",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "TIKKOS NAIBAHO",
    "alamat": "AEK NAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "Mariska romauli simarmata",
    "alamat": "Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ALPEN SIMBOLON",
    "alamat": "SAMPE HORAS",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MISKAEL MARULI SAMOSIR",
    "alamat": "JL. INPRES",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "ROMBIONO SINAGA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "IRMA SITANGGANG",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ERIK SANDO SILALAHI",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "APRINO BR SINAGA",
    "alamat": "SIMANJORANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "AGUSTIANI SITIO",
    "alamat": "JALAN SILIMATALI",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "OLOAN SINAGA",
    "alamat": "PALLOMBUAN, PALLOMBUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "RESTU ANANTA BERLAN",
    "alamat": "Sisonak II Desa Turpuk Limbong, Kecamatan Harian, Kabupaten Samosir Provinsi Sumatera Utara",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "DAVID SILABAN",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "RUDDIMAN SIBATUARA",
    "alamat": "PEA BINTANG",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "YOHANA ULANDARI SINAGA",
    "alamat": "Lumban Sinaga",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BOSLEN SIBORO",
    "alamat": "GINOLAT,GINOLAT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SIMON SINURAT",
    "alamat": "SIBARGOT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "JAIMAN PANDIANGAN",
    "alamat": "LUMBAN PANDE, HUTADAME, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "HOTNA PASARIBU",
    "alamat": "JANJIMARTAHAN,JANJIMARTAHAN,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "GRESIA FINDRIANY SIHOTANG",
    "alamat": "SOSOR BULU, CINTA DAME,SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "DHARMAWAN ASMARA SOFIAN",
    "alamat": "JL. SIMANINDO LUMBAN SI BABIAT",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "YANI PUTRI SIMBOLON",
    "alamat": "HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "GOKSARI NADEAK - MISOP",
    "alamat": "LINTONGNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "ERIKA HUTASOIT",
    "alamat": "SUMATERA UTARA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "DEDI HARIANTO SIREGAR",
    "alamat": "SITAHUAN",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "RONAULI SIMANIHURUK",
    "alamat": "LUMBAN BOLON",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "ESRON SIHOTANG",
    "alamat": "SIBARA-BARA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "JALENTAR TAMBA",
    "alamat": "PARSAORAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "MISGIANTO PARHUSIP",
    "alamat": "MARIARAJA, SIBONOR OMPU RATUS",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "PARHORASAN SIMBOLON",
    "alamat": "LUMBAN URUK",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ALEX CORPORASI MULTIFUNGSI",
    "alamat": "Jl. Sisingamangaraja No. 65",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Novalina situmorang",
    "alamat": "Sitalametang",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "GEMBIRA SINAGA",
    "alamat": "JL. HUTABOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "TIERNAWI NAINGGOLAN",
    "alamat": "SITIO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "VERAWATY",
    "alamat": "PETAK",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "SOFIAN BERTUA SIMBOLON",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "DARMA SITUMORANG",
    "alamat": "BUNTU MAULI",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "NOMI INDRA SITINJAK",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "PUTRI SINAGA",
    "alamat": "LUMBAN TONGA-TONGA",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "JOSMAR DANIEL SINAGA",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MIKHA ETHEREAL, CV",
    "alamat": "JALAN HADRIUANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MANIRU PETRUS PANDIANGAN",
    "alamat": "LUMBAN PANDIANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "PARGAULAN MANALU",
    "alamat": "HUTAGALUNG DESA DOSROHA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "BULAT HASIHOLAN HADRIANUS SIHOLE",
    "alamat": "PARPASIR,BOHO,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "SANRO ELI MULYADI SITANGGANG",
    "alamat": "JL SIMANINDO GUMBA DUSUN III",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ELSE BR SITANGGANG",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BERLIANA PASARIBU",
    "alamat": "GONTING",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "DEDI SIPAKKAR",
    "alamat": "LUMBAN SITUMORANG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "DEDDY SIMANJORANG",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PARLINDUNGAN SAMOSIR",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "HOTNEL SIALLAGAN",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MESTIKA DEWI SIHOTANG",
    "alamat": "SISONAK",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "MARTA SILALAHI",
    "alamat": "SOSOR BULU",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "EDI PUTRA SITUMORANG",
    "alamat": "PANGKUALA",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "LAMTIAR NAIBAHO",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ERIKA LUMBANTUNGKUP",
    "alamat": "PEA NABOLAK",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "DAMAYANTI",
    "alamat": "KAMPUNG ULOS HUTARAJA DUSUN 2 NO 157, DESA LUMBAN SUHI-SUHI TORUAN, HUTARAJA, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BOI FASIUS SIMARMATA",
    "alamat": "SOSOR HUTA URUK",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "WIDI YANTO LIMBONG",
    "alamat": "PEABANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "HERTA ULI SAGALA",
    "alamat": "JL GEREJA NO 14 RT 000 RW 000",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HOTRYA NURHAYATY SIMBOLON",
    "alamat": "SINABULAN",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "TAMAN KANAK-KANAK AGAPE",
    "alamat": "mogang",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "DINER SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "AWI DANIEL SIMAMORA",
    "alamat": "JL. KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TUMBUR JAKOBET SINURAT",
    "alamat": "SOSOR GAMBIRI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "LASMARIA SITANGGANG",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JELITA TAMBUNAN",
    "alamat": "SOSOR MATIO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "JANNEN SIGALINGGING",
    "alamat": "BATO BOLON",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "VERAWATY MALAU",
    "alamat": "SIMANINDO, DESA SIMANINDO, KEC SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "MARINGANTUA TAMBA",
    "alamat": "LUMBAN TAMBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "FERRY RUDI HARTONO SINAGA",
    "alamat": "HUTA LUMBAN LINTONG, URAT II, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "GOKLAS HUTABALIAN",
    "alamat": "SITAMIANG",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "RUGUN NARMA SIMBOLON",
    "alamat": "JL NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FEBRIANI MONITA SITANGGANG",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "LAMBOK SIMBOLON",
    "alamat": "SITALAMETANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SURYANI DALIMUNTE",
    "alamat": "LUMBAN BATU PASAR",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SIMON GULTOM",
    "alamat": "SIAMPANG",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "JHON PITER PASARIBU",
    "alamat": "JL.PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOTNAULI SINURAT",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "RAFIKA YOSTANI F. SIMARMATA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "PRISKA SIMANIHURUK",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "RULLI AFRIDA TURNIP",
    "alamat": "LUMBAN MARINGAN",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ELMA NOVASARI HIA",
    "alamat": "GURNING",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "HARKARTO NAINGGOLAN",
    "alamat": "SIBORO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "KONTA SIBATUARA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "ASNI NOMI GULTOM",
    "alamat": "GALUNG DUSUN 1",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ELIAS CANSERIO SINURAYA",
    "alamat": "JL. DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ERIJON MARHAPOSAN SINAGA",
    "alamat": "JL. KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FRI WAHYU SINURAT",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "BOLE NAIBAHO",
    "alamat": "PANDUMPASAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HASIHOLAN SINAGA",
    "alamat": "SITATAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "PESTARIA RUMAPEA",
    "alamat": "UPA SUHUT",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "Lomoria sitinjak",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "NURPINA SIMARMATA",
    "alamat": "LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "AYU HARIANJA",
    "alamat": "BUNTU PASIR",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "MONIKA SITUMORANG",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "UDURAN II SINAGA",
    "alamat": "SUHUT NIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "DEDI HENDRAMANTO SIAHAAN",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RISNAULI SINAGA",
    "alamat": "TANJUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "POLTAK SARITUA SAGALA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "HENDI NAIBAHO",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "KARISMAWATY SINURAYA",
    "alamat": "HUTA SIPAKKAR NO.132",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "SAUT LAMHOT M HUTABALIAN",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "HITLER SILALAHI",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "NETTY HANDAYANI LIMBONG",
    "alamat": "SITALAMETANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "DAVID SINURAT",
    "alamat": "SOSOR SINURAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "DONAL ALMANTO SINAGA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "RISMA SIHALOHO",
    "alamat": "LUMBAN SARAGIH",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TONNY PILIANG",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HOTMAN SINAGA",
    "alamat": "BARISAN GEREJA, SAOR NAULI HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "NENSI LURI ANDO SINAGA",
    "alamat": "SOSOR SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "RUMAH MAKAN <HADRIANA SITUMORANG>",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUSPENDI LUMBAN RAJA",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "HOTMAN LUMBAN TUNGKUP",
    "alamat": "PARLUASAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "WILLIAM FERDINAN SIMBOLON",
    "alamat": "Tigaurat",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "JUSTINA BR TARIGAN",
    "alamat": "LUMBAN BONA-BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "BUHA PARULIAN MALAU",
    "alamat": "MALAU",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "MANATAR SINAGA",
    "alamat": "OMPURATUS",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "Tiru Tarsisia Ambarita",
    "alamat": "Tuktuk Siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KIENNEDY SITANGGANG",
    "alamat": "JL. F.L TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WALDEMAN SILALAHI",
    "alamat": "SITENGGAL-TENGGAL",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "RAYMUNDUS MANIK",
    "alamat": "SAOR NAULI HUTAGUAN, SAOR NAULI HUTAGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "KADIM SINAGA",
    "alamat": "SIBAGANDING",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "PARDOMUAN SIAHAAN",
    "alamat": "LBN. SIAHAAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "NIKO SAPUTRA SIHOTANG",
    "alamat": "KOMP PENGAIRAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "HELGA ERIKA SIMBOLON",
    "alamat": "LBN.SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "PAHALA PARULIAN SIMBOLON",
    "alamat": "JLN. SISINGAMANGARAJA NO. 41",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BERLIANA NADEAK",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MG EINSTEIN RUMAHORBO",
    "alamat": "SOSOR GAMBIR",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "ESTHER PURNAMA RIA SIHOMBING",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "YOHAN PASSARIANDO",
    "alamat": "HUTA BOLON, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "NURHAIDA RAJAGUKGUK",
    "alamat": "SOSOR NAHORNOP",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "RANI MANURUNG",
    "alamat": "AMBULA",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "PANGIHUTAN SIHOTANG",
    "alamat": "HOLANG HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "SENTRA IKM KOPI SAMOSIR",
    "alamat": "SARIMARRIHIT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "NOPRIN GEOPANI MALAU",
    "alamat": "JLSIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "RENUVI ARITONANG",
    "alamat": "LUMBAN PANSUR",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "JANNES PANDIANGAN",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "SESILIA SINAGA",
    "alamat": "Sitare tareon",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "EVI JULIANTI NAPITUPULU",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "PERONIKA SIPAYUNG",
    "alamat": "Raut Bosi",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "PATAR  SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "LIASRI HERTIKA F SITANGGANG",
    "alamat": "GOLAT BARAT",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "TIARULI NADEAK",
    "alamat": "TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DORNA CITRA MARITO LUMBANSIANTAR",
    "alamat": "LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "NURLIANA M. SAGALA",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "TOMBUS LUMBANTORUAN",
    "alamat": "LUMBAN SINABANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RESTARINA SITANGGANG",
    "alamat": "DUGUL SIANTAR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "BILSON SIDABUTAR",
    "alamat": "PANGAMBATAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "JONDIHER WALTERUS TURNIP",
    "alamat": "BATU PORHIS",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "RANTO LEOPOLISA HUTABARAT",
    "alamat": "simbalo,hutanamora",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "KRISTIN FLORENSIA SINAGA",
    "alamat": "SINABULAN URUK",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "BARINGIN GURNING - PENGEPUL HASIL PERTANIAN",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "JUAL FURNITUR <FEBRY ANDRYAN TAMBUNAN>",
    "alamat": "LUMBAN BARAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SAUDARA SITINJAK",
    "alamat": "SOSORTALA",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "ALJUN P. SILALAHI",
    "alamat": "TARABUNGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ROSMA SIDABUTAR",
    "alamat": "SOSOR BATU",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "JINAR SITUMORANG",
    "alamat": "Huta Tinggi jln Ronggur Nihuta",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "Nelli marlina sianturi",
    "alamat": "Harihara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Risda naibaho",
    "alamat": "Siyanggang Bau",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "BUNGANA SINAGA",
    "alamat": "HATOGUAN,",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "NURHAYATI SINAGA",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PARDON MEPATIOROHA LUMBANRAJA",
    "alamat": "BANJAR TONGA",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "JINTAR SITUMORANG",
    "alamat": "PEATOLONG",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "JUMALATUA SILALAHI",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "JEMERLIN SIHOTANG",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "WINDA APRILLIA SARI SITANGGANG",
    "alamat": "LONTUNG",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "SUMONDANG TABITA NAINGGOLAN",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "TIMBUL SIHOTANG",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "DESMI SIRAIT",
    "alamat": "BUNTU PEA",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "ROY PETRUS SILALAHI",
    "alamat": "JALAN RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "VERONICA HERNAWATY SIBURIAN",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "RIKKY SASTRY NAIBAHO",
    "alamat": "SILOBUON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "GERMAN HENRIKUS SITANGGANG",
    "alamat": "LUMBAN DOLOK, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "LIBERTUS SIMANIHURUK",
    "alamat": "LUMBAN GANDA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "JHONTER SINAGA",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PATHRESIA WILDA SITANGGANG",
    "alamat": "PARDUGUL, PARDUGUL, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "ANJU SINAGA",
    "alamat": "SIUNTE GODANG",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "PARNINGOTAN LIMBONG",
    "alamat": "JL. KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SUMURUNG SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "PIERMEN ESTERIUS SITANGGANG",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "JUNI FRISKA SIAGIAN",
    "alamat": "TANJUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "SIHOR SITUMORANG",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "TOMU JUNITA HUTASOIT",
    "alamat": "Malau",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ANJELINA MARGARETHA SITINJAK",
    "alamat": "SIPINGGAN,PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BUDI BINTANG L SIMBOLON",
    "alamat": "JL. DR.HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SWANDO SINAGA",
    "alamat": "JL, LUMBAN SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PAHALA SIRAIT",
    "alamat": "JL. SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "TIOMINAR SINAGA",
    "alamat": "SITUNGKIR",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "KOMBI SINAGA",
    "alamat": "LBN SINAGA",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "MANGOLOI SIHALOHO",
    "alamat": "LUMBAN SINAPITU",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "SAURMA SIMBOLON",
    "alamat": "JL. PULO SAMOSIR NO. 5",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "SUFRIANTO SINAGA",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MARTIN PAHOTAN SIAHAAN",
    "alamat": "GALA GALA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "ADE RUHIAT",
    "alamat": "PARJONGGI, KECAMATAN PANGURURAN, DESA PARDOMUAN I, KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BERESMAN SIHOLE",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SEVRY YANRI MARBUN",
    "alamat": "SABULAN",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "CORRYA JANE SIHOMBING - TAMBAL BAN",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "POLTAK SITANGGANG",
    "alamat": "PAHODA",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "KASMAN NAIBAHO",
    "alamat": "PASAR DAME",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "MARIDEN LIMBONG",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "JANNUS LUMBAN RAJA",
    "alamat": "GUMBA",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "STEPANUS RAHMAT MERDEKA SITUMORANG",
    "alamat": "RANSANGBOSI, BUNTUMAULI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "ERNY LIJAH SITUMORANG",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "Marlina lumban gaol",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Estalia anjelina naibaho",
    "alamat": "Sitanggang Bau",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "MARADUH LIMBONG",
    "alamat": "AEK MATANA",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "MURNI SIADARI",
    "alamat": "PANDAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "TORKIS JOEL SIMBOLON",
    "alamat": "JL KOL LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "UPAR SITUMORANG",
    "alamat": "SITAHURU",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN (KB) EKKLESIA VICTORY",
    "alamat": "LOBUTUA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "SAHAT RONI SINAGA",
    "alamat": "BANEARA,PARTUNGKONAGINJANG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "MARBETA SAUDUR SIANIPAR",
    "alamat": "PINTUSONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RAFLES SINURAT",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "KARAOKE <HERMANTO T SIHOTANG>",
    "alamat": "NAGA TIMBUL",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "Johanris Rapael Gultom",
    "alamat": "Baringin",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "HOTNA SIDAURUK",
    "alamat": "DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "Desina uli manalu",
    "alamat": "Huta Simbolon",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "BADATAR JANNES NAIBAHO",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ALDEN SIHOTANG",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "ROBBY P.L. SITORUS",
    "alamat": "MARIARAJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "ROLIANNA SEMBIRING",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "RONNI SITOMPUL",
    "alamat": "SIPINGGAN LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "HENRI H SAMOSIR",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "GERHAD NADEAK",
    "alamat": "SIOPAT SOSOR, PANGURURAN KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MANOGAR NADEAK",
    "alamat": "JALAN RONNGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DERLINA SIHOTANG",
    "alamat": "DUSUN III",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "SORMIDA SIMAIBANG",
    "alamat": "DUSUN II LBN. TONGA-TONGA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "LUSIANA NAIBAHO",
    "alamat": "KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "JULYO REDONDO NAIBAHO",
    "alamat": "JL. TELE",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "DEDY SUGIANTO NAIBAHO",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "EFINDO PARNINGOTAN SIMBOLON",
    "alamat": "JL, HUTA GINJANG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "RAJASONANG",
    "alamat": "Sijaliman Dusun II",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "NAOMI FRISKILA NAIBAHO",
    "alamat": "TURPUK LIMBONG, TURPUK LIMBONG, HARIAN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "MARTA LISE PUNG",
    "alamat": "JL PUTRI LOPIAN KELURAHAN PARDOMUAN I KECAMATAN PANGURUAN KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "DEDDY HERMAN SIDABUTAR",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "NURITA SIMBOLON",
    "alamat": "UPA HODA",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "MIKAEL SINAGA",
    "alamat": "PARRAUAN",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "BARITA SIMBOLON",
    "alamat": "JABI-JABI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "Rosinta kristina sinaga",
    "alamat": "Peabang",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Boho"
  },
  {
    "nama_usaha": "TIARMIN NADEAK",
    "alamat": "HASINGGAAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "warung kelontong tamba (SUKANDA TAMBA)",
    "alamat": "SITOHANG",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "RAPMA SITANGGANG",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "HENGKY SIHOMBING",
    "alamat": "OMPURATUS",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "TOMSON SIMBOLON",
    "alamat": "JLN. DR. F LBN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Elvrida neheimia  girsang",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LASBEN AMBARITA",
    "alamat": "LUMBAN SINAGA, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "SAHAT PARULIAN MARPAUNG",
    "alamat": "TUK TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "GLORIA KALITYA SINAGA",
    "alamat": "SIMANUK MANUK",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "CANDI MULIADI SITUMORANG",
    "alamat": "PINAL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "LAMBOK SIRINGORINGO",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "Sumiaty sianipar",
    "alamat": "Kamente",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "ROLDYES SIMBOLON",
    "alamat": "SAMPEAN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "ELSHA T.A. SIMBOLON",
    "alamat": "PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NASIB RUDI M.T.SIGALINGGING",
    "alamat": "LUMBAN SILO",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SAKLUM NOVENTUS SIMALANGO",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "REFEL SIDABUTAR",
    "alamat": "TOMOK BOLON, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "DELVI SAGALA",
    "alamat": "URUK HUTA",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "DAMERIA TERESIA NADEAK",
    "alamat": "LUMBAN BARINGIN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "JENYEVRA SINAGA",
    "alamat": "JL. RONGGUR NI HUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUNIATY LUMBANTOBING",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "ELIEZER LEONARDO SINAGA",
    "alamat": "SIALAMAN, SINAGA URUK PANDIANGAN, NAINGGOLAN, SAMOSIR",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "AJAI K SITANGGANG",
    "alamat": "LUMBAN SANGKALAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "TUTUR MALINDA NAINGGOLAN",
    "alamat": "PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "GERMAN MANURUNG",
    "alamat": "DUSUN II AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "WILTER HUTASOIT",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JYMMY LOYS SILALAHI",
    "alamat": "SAIT NIHUTA, SAITNIHUTA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "Zainab",
    "alamat": "Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ESRA E SINAGA",
    "alamat": "SAGALA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "ADRIANUS A.J. NADEAK",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ERNITA SINURAT",
    "alamat": "LUMBAN SINURAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "JADIAMAN SIBATUARA",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "JUDENTUA MANIK",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "POLTAK SAMRON NAIBAHO",
    "alamat": "UPAH HODA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "HOTMAULI MARTUA SIMBOLON",
    "alamat": "KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SAUT LIMBONG",
    "alamat": "SOSOR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "ERIKA KABENNI SIHOMBING",
    "alamat": "GORAT OP.RATUS",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "Bunga sirait",
    "alamat": "Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "PETRUS SUGIYANTO NAINGGOLAN",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KIMROBEL HUTABALIAN",
    "alamat": "PAGAR SINONDI",
    "kecamatan": "Nainggolan",
    "desa": "Toguan Galung"
  },
  {
    "nama_usaha": "LAMRIA MALAU",
    "alamat": "SIMANINDO, DESA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "BERNO SANDO SILALAHI",
    "alamat": "SIBUNTUON II",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "FIRDAUS AHMAD SIALLAGAN",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "NATALIA KRISTINA MALAU",
    "alamat": "JL. RONGGUR NI HUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SOFYAN",
    "alamat": "upahoda",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FORMEN SITUMORANG",
    "alamat": "SOSOR TALA, KEL. PANANGGANAN II, KEC. NAINGGOLAN,",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "SUSYANA LUMBANRAJA",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "HERLIDYA PANDIANGAN",
    "alamat": "LUMBAN PASIR",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "NOVITA KRISTIYANI SAGALA",
    "alamat": "LUMBAN JANJI, GINOLAT, SIANJAR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "PARLUASAN PLINIUS SITUMORANG",
    "alamat": "RANGSANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "Maslan sihombing",
    "alamat": "Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MANOGA ULI SINAGA",
    "alamat": "JL. NAHUM SITUMORANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TJIPTA DJAJA",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "FITRI DEWI GINTING",
    "alamat": "BELAKANG TERMINAL ONAN BARU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOHN FRENKI SITINJAK",
    "alamat": "JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "SENDE RENALDUS SINAGA",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "FRISKA SIMANJUNTAK",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "M MAYANDARI",
    "alamat": "DUSUN I DESA PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "SIMON PRAJA HOT PARULIAN PASARIBU",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "ERNITA SINAGA",
    "alamat": "PARLUASAN RT. 000 RW. 000",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SERIGANDA NAIBAHO",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "FYRIDA FETRO NELLA NAIBAHO",
    "alamat": "LUMBAN NADEAK, DESA SITOLUHUTA KEC. PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "CHRISTINE TOGU ULI SIMANIHURUK",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "MARULAK RUMAHORBO",
    "alamat": "PANGALOAN",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "SUDUT SAMOSIR",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "NIMROT MAROJAK MANALU",
    "alamat": "PARBALOHAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "RIDWAN JANTER NADEAK",
    "alamat": "SITUMPOL",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "MERRY SURYANI",
    "alamat": "SOSOR",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "ERI PARDAMEAN SIHITE",
    "alamat": "SIOPAT SOSOR, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "YULIVER SIDABALOK",
    "alamat": "SIMANINDO SANGKAL, SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "NURSI SITINJAK",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "DENITA",
    "alamat": "BINANGA BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "Cahaya sihombing",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Evi silva p sitanggang",
    "alamat": "Dusun Ii Desa Parlondut",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "HALASSON SIDABUTAR",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "BETTY VITRIANI SIMBOLON",
    "alamat": "LUMBAN SIMBOLON",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "RONATAL SINAGA",
    "alamat": "JL SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "LATIF SINABUTAR",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RAJAMIN PETRUS SINABARIBA",
    "alamat": "SUKA RAMAI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "Nursinta simbolon",
    "alamat": "Harihara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "DELMAN SITUMORANG",
    "alamat": "LONTUNG",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "ROBBY NICO SIMBOLON",
    "alamat": "JLN DR F LBN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "CANRA SITUMORANG",
    "alamat": "JL, SAIT NIHUTA",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "HIPRON ANWAR MARBUN",
    "alamat": "GINOLAT",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "ZICO MARDO HARIANJA",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RISMAULI MALAU",
    "alamat": "MADUMA",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "LAMSON SITANGGANG",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TURMAN PANDEANGAN",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "Emiliana sitinjak",
    "alamat": "Harihara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LENNI MANURUNG",
    "alamat": "SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ROSALIN P MANULLANG",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "MARET LIMBONG",
    "alamat": "ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "RINA NAIBAHO",
    "alamat": "JL. TANAH LAPANG, PASAR PANGURURAN, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JONNY SINAGA",
    "alamat": "SIGARANGGARANG",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "Hotni helena sinaga",
    "alamat": "Dusun Lll Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LAMSON SINAGA",
    "alamat": "SIUPAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MARSIHA SIMBOLON",
    "alamat": "HARANGGASAN",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "GARUDA SIMANDALAHI",
    "alamat": "HASINGGAHAN",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "SOTAR SIADARI",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "JUAL JAGUNG <Hotria lusiana tamba>",
    "alamat": "Silalahi",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MAGDALENA CINDY APERINA TURNIP",
    "alamat": "KAMPUNG KRISTEN",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "DUMASI SINAGA",
    "alamat": "PASARAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "MANIBUN MARPAUNG",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "HERIANTO SINABUTAR",
    "alamat": "PANJAITAN,SIBORO,SIANJAR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "INDAH SITUMORANG",
    "alamat": "SIMULLOP DUSUN.LINGK.11",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "BINNER HABEAHAN",
    "alamat": "HABEAHAN NABURAHAN, HABEAHAN NABURAHAN, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Habeahan Naburahan"
  },
  {
    "nama_usaha": "SANLY SINAGA",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "NURHAYATI",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "FITRI ENJELINA SITINJAK",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "PEREN SITUMORANG",
    "alamat": "SOSOR SIBADAR",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "Tiamin sagala",
    "alamat": "Harian",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "SANTIKA BR SIHALOHO",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "PIRDO WANTO SITANGGANG",
    "alamat": "SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "HOTDINA PARHUSIP",
    "alamat": "SIMANGAMBONG",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "RANTIMA SINURAT",
    "alamat": "JL. LURUS",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "ABORSON SIMBOLON",
    "alamat": "PARMANUHAN",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SORTA SIPAYUNG",
    "alamat": "ONAN TUNGKUP, HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "RIANTO R SITANGGANG",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "SABAR TOMI SUSANTO PARDEDE",
    "alamat": "JL. PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MEI SIMALANGO",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ABDUL KARIM",
    "alamat": "JL.SIANTAR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LUBOYAFRANSISKA SITUMORANG",
    "alamat": "SIMPANG LITONG",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "ALEXANDO SIMBOLON",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PUTRI NOVITA SARI",
    "alamat": "PINDARAYA,",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "RIDHO ANGGRENI NAIBAHO",
    "alamat": "JL DR. HADRIANUS SINAGA, PINTU SONA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "NOVIA SIRINGORINGO",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "JAUTIR SIMBOLON",
    "alamat": "JL. USKUP AGUNG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROTUA NADEAK",
    "alamat": "RONGGGURNIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "WATER SPORT KELURAHAN TUKTUK SIADONG, PT",
    "alamat": "GEDUNG TIC (TOURIST INFORMATION CENTER)",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RISTA MARBUN",
    "alamat": "SAIT NIHUTA",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "ROLAS PANDAPOTAN MANURUNG",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "GABRIEL MANDIRI SEJAHTERA",
    "alamat": "Sitio-tio",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "MASRUN SINAGA",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "MANGIHUT MARULITUA HALOMOAN MALAU",
    "alamat": "SOSOR BULU",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ROSMERY ESTERLINA BANGUN",
    "alamat": "Jl. Ronggur nihuta",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MELY YANTI SINURAT",
    "alamat": "HARAPOHAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "CINDY AGUS PURNAMA MUNTHE",
    "alamat": "BUNTU RAJA",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "SAMSIR SITANGGANG",
    "alamat": "PASAR SILENGGE",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "MARASIL PASARIBU",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "SUSANTI WAHYUNI TAMPUBOLON",
    "alamat": "LUMBAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "ROSTIKA GULTOM",
    "alamat": "SIMANAMPANG, SIDEAK, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "Ruminta sitanggang",
    "alamat": "Paaar Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROMASI AMBARITA",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "Cerlista pintubatu",
    "alamat": "Dusun Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "JANAMPE SIMANJORANG",
    "alamat": "BAHAL BAHAL",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Hasinggahan"
  },
  {
    "nama_usaha": "BERLINA NATARIA PARDOSI",
    "alamat": "SITORNONG",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "RR BOLEUSON PANGONDIAN SIHOTANG",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "SABAM MARHANSIT LUMBANRAJA",
    "alamat": "SILULU",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SANRIKO SINAGA",
    "alamat": "JL.DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JERNITA SINAGA",
    "alamat": "LBN TANDING",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "JANNUS SIHOTANG",
    "alamat": "TELE",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "TOROP SITANGGANG",
    "alamat": "PARLONDUT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "KENROTUA PANDIANGAN",
    "alamat": "SIDEAK GODANG",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "FEBRYS RUMAHORBO",
    "alamat": "AMBARITA, AMBARITA, SIMANINDO SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "Herlida simarmata",
    "alamat": "2,17E+17",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "DOLLY SILALAHI",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "FANDRYAL LUMBANRAJA",
    "alamat": "BANJAR TONGA",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "SINTONG SIMARMATA",
    "alamat": "SITINDORAS",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "HOTMIDA SIHOMBING",
    "alamat": "HARIAN BOHO,TURPUK LIMBONG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "LAURENTIUS SILALAHI",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOSE A.P SAMOSIR",
    "alamat": "PARDOMUAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "KARNITA LUMBANRAJA",
    "alamat": "PAMGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "GUNAWAN",
    "alamat": "SIGUKGUK",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "LASMIDA SIMBOLON",
    "alamat": "JL. HUTA NAMORA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "MULA MARBUN",
    "alamat": "SIGALINGGING",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MASRI SITANGGANG",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "SWARDIMAN SITUMORANG",
    "alamat": "SIBAGAS",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "BANI UHUR SITIO",
    "alamat": "KOMPLEKS PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KOMMI OGIANIS SINURAT",
    "alamat": "SOSOR NANGKA",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "AMBOLAS SITANGGANG",
    "alamat": "DUGUL SIANTAR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "ALPINBER SILALAHI",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "KORMA AULIA SIHOMBING",
    "alamat": "Lumban Tonga Tonga",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "KRISMAN SITUMORANG",
    "alamat": "SIPOLTONGAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "JOSEP MARNAEK GURNING",
    "alamat": "JL. DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TIORO SIRINGORINGO",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "ALPON SIHOTANG",
    "alamat": "HARIARA POHAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "LAMLAM SIMBOLON",
    "alamat": "JALAN DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ICCA JENIFER NAIBAHO",
    "alamat": "PANAHATAN",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "CHRISTINA HERSISKA AMBARITA",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NENNA R MALAU",
    "alamat": "SOSOR MAMUNGKA",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SABAR SAGALA",
    "alamat": "GINOLAT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "POSMELITA SINAGA",
    "alamat": "KOMPLEX SMA HKBP",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "UDUR H.U. SITUMORANG",
    "alamat": "PARMONANGAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "LABATUA TAMBA",
    "alamat": "TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "EVITA SRY NAINGGOLAN",
    "alamat": "SOSOR DOLOK",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "RUMINTA RUMAPEA",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "RIFENNY CORNELIA NAIBAHO",
    "alamat": "TANJUNG BUNGA, TANJUNG BUNGA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "RIANI RIGOBERTA SITANGGANG",
    "alamat": "JANJI MARTAHAN,JANJI MARTAHAN,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "ESTER SIREGAR",
    "alamat": "JL. BESAR DUSUN II",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "NURYATI SITUMORANG",
    "alamat": "SIHOLI-HOLI",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PAHALA LAMBAS TRIPUTRI SINAGA, PT",
    "alamat": "PARTUNGKONAGINJANG",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "MARTOGI SINAGA",
    "alamat": "SIBAGANDING",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "SIBUHA BUHA",
    "alamat": "Cinta Maju",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "YOSAPAT JONRI SITANGGANG - PENGANGKUTAN EKSPEDISI HASIL BUMI",
    "alamat": "PEA NABOLAK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "KATARINA SITANGGANG",
    "alamat": "JL.DR.HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "SANTI MALAU",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "OLO MANGIHUT SITUMORANG",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "RUMINA SITOHANG",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "KARYA MAWATI SINAGA",
    "alamat": "JL, SILIMA TALI",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "MANSIUR LUMBAN SIANTAR",
    "alamat": "LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "DARWAN PURBA",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "USMAN LUMBAN RAJA",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "RIDUANTO SITUMORANG",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "RISRO LEORANDO SILALAHI",
    "alamat": "SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "VETER HANJIAN SIMBOLON",
    "alamat": "SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "MELINTON SIRINGO",
    "alamat": "SAOR NAULI HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "TOMY SIHOTANG",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "Cinta sinaga",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROSPITA NAIBAHO",
    "alamat": "HAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "Linda sitanggang",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "PANTAS ALASIM SIMARMATA",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "SANTO SINAGA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "TOKO MATERIAL <BENNY JONNIES MARULITUA SIRINGORINGO>",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "Rosdeliani sinurat",
    "alamat": "Huta Galung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "CHINTIA MARIOKY NAIBAHO",
    "alamat": "SOSOR SIAHAAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ASRI SIMANJUNTAK",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MANGAPUL SITINJAK",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "SAUT MAROLOP LUMBANRAJA",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "NURHAIDA LAMRUMIRIS SITUMORANG",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "ANDI SIMBOLON",
    "alamat": "HARANGGASAN",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "SONTIARA NAIBAHO",
    "alamat": "JLN.SISINGAMANGARAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JHON RIZKI OKTOMI PURBA",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "ULI ARTA NAIBAHO",
    "alamat": "JLN.DR.F LBN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ERIKSON BAHARIJAYA MANIK",
    "alamat": "JLN.GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LIDYA DEWI ANGRAINI SINAGA",
    "alamat": "JL. DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "REZINA MASLY SIMANJORANG",
    "alamat": "SIAMBALO",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ESRON HASIHOLAN SIHALOHO",
    "alamat": "BONAN DOLOK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "RISSIE A. MANIK",
    "alamat": "ONAN RIHIT",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "HUNTAL WIRO SAGALA",
    "alamat": "SITABU",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "RUSPINDO SITUMORANG",
    "alamat": "PANJOMURAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "BUNNAWATI NAINGGOLAN",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "HOTNA SITANGGANG",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "RIWANTO SUPRIADI SINAGA",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "INDRIANY MAGDALENA SIHOTANG",
    "alamat": "JL.SIMANINDO KM 30",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "IMEL SIMBOLON",
    "alamat": "LUMBAN JANJI, GINOLAT, SIANJAR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SOIMAN NAINGGOLAN",
    "alamat": "HUTAPARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "KATARINA EFRIYANI MANURUNG",
    "alamat": "AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "HOTMIANNA SITANGGANG",
    "alamat": "DUGUL SIANTAR",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "MINDA SANI TAMARA GULTOM",
    "alamat": "UNJUR, SIMANINDO, SAMOSIR, SUMATERA UTARS",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "ERLINAWATY SINAGA",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "ROI ANDONG HUTAGAOL",
    "alamat": "SIPINGGAN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "BENGKEL <ADIL ADAMS>",
    "alamat": "JL. D.I PANJAITAN NOMOR 95",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FERONIKA MARWANI NAINGGOLAN",
    "alamat": "JANJIMALASANG, MARLUMBA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Marlumba"
  },
  {
    "nama_usaha": "SETINA ESTERINA SIMANIHURUK",
    "alamat": "HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "O MARITO SINURAT",
    "alamat": "PARRUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "YOSUA PARLINDUNGAN SITANGGANG",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "INDAH MIKANA SIMBOLON",
    "alamat": "JL DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "HERMINA SITUMORANG",
    "alamat": "SIALAMAN, SINAGA URUK PANDIANGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sinaga Uruk Pandiangan"
  },
  {
    "nama_usaha": "LORENZO",
    "alamat": "Samosir",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "JUJUR BASAR ALBINER HUTAGAOL",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "RUGUN",
    "alamat": "PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MELKI MARBUN",
    "alamat": "JLN. DR. HARDIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MANOTAR SAMOSIR",
    "alamat": "UMAGING",
    "kecamatan": "Onan Runggu",
    "desa": "Tambun Sungkean"
  },
  {
    "nama_usaha": "EFFENDI SIDABUTAR",
    "alamat": "JL. PASAR BARU",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "OKY BOYNARE GURNING - PENGEMPUL HASIL PERTANIAN",
    "alamat": "PARADUAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "BUDIMAN POHAN",
    "alamat": "LIMBAN NADEAK",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "SHANTY",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <AMINUDIN YOSEP>",
    "alamat": "JALAN RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TAMPERAJA SITUMORANG",
    "alamat": "PEATOLONG",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "HENRISON TURNIP",
    "alamat": "BONAN DOLO",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "JUNITA ROSONDANG ROMAULI NAINGGOLAN",
    "alamat": "LUMBAN NAINGGOLAN",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "MELINSUI SITUMORANG",
    "alamat": "HUTAPARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MEY RC SIDABUKKE",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "AGUS SITOHANG",
    "alamat": "SIANTARANTAR",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "ASTRI ELIDA RAMBE",
    "alamat": "SIMARMATA, SIMARMATA, SIMANINDO, SAMOSIR",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "MANOGER SINAGA",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ROIDA SITUMORANG",
    "alamat": "RANGSANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "HALOMOAN SINAGA",
    "alamat": "HUTA BOLON, TOMOK, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "SRINELLY HEPPY PASARIBU",
    "alamat": "JL PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SRI MELIN MANURUNG",
    "alamat": "SIGAMAL",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "ROULINA SINAGA",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "EDIMAWAN SINAGA",
    "alamat": "DUSUN I BONGBONG",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "TUMPAK GULTOM",
    "alamat": "PARBULANAN",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "DAMSON GULTOM",
    "alamat": "GONTING",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "BOYAN SIRINGORINGO",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "DEWI EPRIANI BUTARBUTAR",
    "alamat": "SIIGAR IGAR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "HENRIANA SINURAT",
    "alamat": "PASAR SILENGGE",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "MARIANI SINAGA",
    "alamat": "LUMBAN SITIO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "BARIS SIREGAR",
    "alamat": "JANJIRAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Raja"
  },
  {
    "nama_usaha": "DAULAT AMBARITA",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "ROBBY BINUR",
    "alamat": "JL BARU SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "NOVITA TIARASI AMBARITA",
    "alamat": "UNJUR DUSUN III",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "RATNA MANIK",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "REINHEART TAMBA",
    "alamat": "TAMBA DOLOK",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "MANURIA ERNAWATI PAKPAHAN",
    "alamat": "HUTARAJA",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "SUDIARTO SAGALA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "SANDONAL SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "OKTO DEDI GUNAWAN SINAGA",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "SELFI SIRAIT",
    "alamat": "SIUNTEGODANG",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "TINA MALAU",
    "alamat": "KOMP. PENGAIRAN",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "TENTIANA MALAU",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "USMAN SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "ELVINA WATI SIMBOLON",
    "alamat": "SIRIHIT-RIHIT",
    "kecamatan": "Pangururan",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "LEFRIN MANIK",
    "alamat": "BATU PORHIS",
    "kecamatan": "Simanindo",
    "desa": "Maduma"
  },
  {
    "nama_usaha": "JINDAR LUMBAN BATU",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "RIHA F. SITANGGANG",
    "alamat": "DUSUN SOSOR NABOLAK",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "ROBINSON SIMBOLON",
    "alamat": "JANJI MARIA DUSUN III DESA SIGAOL SIMBOLON KECAMATAN PALIPI KABUPATEN SAMOSIR PROVINSI SUMATERA UTARA",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "RICHARDSON SIMBOLON",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "REYNELDA RUMAPEA",
    "alamat": "PETAK",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "Ati pasaribu",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROMA SITANGGANG",
    "alamat": "LUMBAN SINURAT",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "OKTARIKA BERLINA SITANGGANG",
    "alamat": "PARDUGUL",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "WINDRA YATI",
    "alamat": "JL.RONGGUR NI HUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BRONSON TM. SIALLAGAN",
    "alamat": "DS. III. SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "PARNASIB ETNIK",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "Desy nurita nainggolan",
    "alamat": "Lumban Bona Bona",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "PATAR SIMBOLON",
    "alamat": "SITIO TIO",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "jeger (TUA HOTDISON SITUMORANG)",
    "alamat": "soburan",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "LOITA SITANGGANG",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MARUDIN JULIAN PAET NADEAK",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "DAPOT SIALLAGAN",
    "alamat": "JL. PASAR SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "RIANA SIMBOLON",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "CARLES SIREGAR",
    "alamat": "PERBATASAN",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "PARLINDUNGAN SINAGA",
    "alamat": "SABA SABA, PALIPI, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "BIG STONE",
    "alamat": "BATU BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "ROBEKKA SINAGA",
    "alamat": "LUMBAN SIHOMBING",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "JADOHOT MANIK",
    "alamat": "HARAPOHAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "AMINA SITUMORANG",
    "alamat": "JL. AEK RANGAT, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "POSMARIA MANURUNG",
    "alamat": "LUMBAN SIPANSA",
    "kecamatan": "Pangururan",
    "desa": "Sinabulan"
  },
  {
    "nama_usaha": "DOLLY MARDELINA SITUMORANG",
    "alamat": "LONTUNG HASAHATAN",
    "kecamatan": "Simanindo",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "JONI ARGA SIBORO",
    "alamat": "SIHUDON",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Huta Gurgur"
  },
  {
    "nama_usaha": "DORMASI SIMBOLON",
    "alamat": "BANEARA",
    "kecamatan": "Harian",
    "desa": "Partungko Naginjang"
  },
  {
    "nama_usaha": "NURMAYA SINAGA",
    "alamat": "SOSOR II",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "SAMPANG SELTIAL SAGALA",
    "alamat": "LUMBAN TONGA TONGA, AEK SIPITUDAI, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "HARDIANTO SILALAHI",
    "alamat": "SILINTONG",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "BASA JULIANTI VERONICA",
    "alamat": "JL.DR.HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROMIAN SIAHAAN",
    "alamat": "PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "RIKA NOVA WILIS SITUMORANG",
    "alamat": "LUMBAN SITUMORANG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "PARTOGI SIMBOLON",
    "alamat": "KOMPLEK KANTOR BUPATI",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "Endawati",
    "alamat": "Raut Bosi",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "ESTER RAWATI",
    "alamat": "BATU PURUN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "ASTRI SUMARNI SILITONGA",
    "alamat": "HUTA BARU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RABEKKA AMBARITA",
    "alamat": "AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "ENI SUSANTI",
    "alamat": "SITOLU HUTA",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "SARMAN H NAIBAHO",
    "alamat": "JL. DR HANDRIANUS SINAGA NO 196",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "NELSON MANURUNG",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "Anita sidauruk",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "BUDIMAN",
    "alamat": "Hutabolon",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "SHANAYA AAP",
    "alamat": "URAT II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "ASAS NADEAK",
    "alamat": "PALLOMBUAN, PALLOMBUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "MARLEN DESIMA SILALAHI",
    "alamat": "Lumban Lipan",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "ROSERNA SM MANIHURUK",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "DENHOUSE M.S",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "EKSAN SITUMORANG",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "LASMA SITANGGANG",
    "alamat": "JL.SISINGAMANGARAJA NO 32",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "BLASMAN SEPTA SITANGGANG",
    "alamat": "SAITNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "PANTUN SETIA ADI SIAMBATON",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "NELLIDA SIRINGORINGO",
    "alamat": "BARISAN GEREJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "NIKO S.P. SITUMORANG",
    "alamat": "PARADUAN, SIDEAK, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "RIANA PANDIANGAN",
    "alamat": "JANJI SAHATA",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "MANGATAR GULTOM",
    "alamat": "RASANG BOSI",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "MARBEN  NAIBAHO",
    "alamat": "HUTA RAJA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ENIK MUSTIKAWATI",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "RUSMAN SIGIRO",
    "alamat": "PANAMPANGAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "MARSADA KREASI",
    "alamat": "Sosor Batu",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "DAYANTI SUCAPRINA MALAU",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "HOTJON SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "DEFIMARLINA SINABUTAR",
    "alamat": "SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SABAR SILALAHI",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "POLTAK M NAIBAHO",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "RINA GULTOM",
    "alamat": "LUMBAN TONGA-TONGA",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "HENNI S LBN TUNGKUP",
    "alamat": "HUTA GODANG",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "INDUSTRI KUE <MADUR SIMBOLON>",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "HARLEN SINURAT",
    "alamat": "PARRANDEAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KASIAN L SIMARMATA",
    "alamat": "LIMBONG,SIMARIHIT,SIANJAR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "JUNI RAYA SIMBOLON",
    "alamat": "JL. DR. FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RALIWATY TAMBA",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ROMAULI SINURAT",
    "alamat": "LUMBAN SINURAT",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "INGRID RABECCA DAMAYANI NAIBAHO",
    "alamat": "JL. PATUAN ANGGI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "ROLIKA SITANGGANG",
    "alamat": "PANAMPANGAN",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "ELFRIYANTI VERONIKA SITUMORANG",
    "alamat": "LUMBAN NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "HERLINA YANI NABABAN",
    "alamat": "SIALLLANGAN PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <LUAT ANDREAS NADEAK>",
    "alamat": "JALAN PELABUHAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ESMI SITUMORANG",
    "alamat": "BATU JAGAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "ROSLIN EVA YANTI",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "Roslinda  pandianggan",
    "alamat": "Dusun L Bong Bong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Rintaulina naibaho",
    "alamat": "Siriaon",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "RISMA PANJAITAN",
    "alamat": "SIPINGGAN",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "LAURA ADELINA LUBIS",
    "alamat": "HUTA SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ADY IRAWAN HERMANTO HUTAGALUNG",
    "alamat": "JL KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JENTI MANURUNG",
    "alamat": "Panampangan",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "TUA LAURENSIUS SAGALA",
    "alamat": "SIJAGAR-JAGAR DUSUN III",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Bonan Dolok"
  },
  {
    "nama_usaha": "FERNANDO PARHUSIP",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Nainggolan",
    "desa": "Nainggolan"
  },
  {
    "nama_usaha": "TRISHA PATRECIA PANGGABEAN",
    "alamat": "JALAN RAYA PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "RUKERTINA SAGALA",
    "alamat": "BINANGAN BORTA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ALFRADI NAIBAHO",
    "alamat": "Sitaotao",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "IRMA YOSELIN GULTOM",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "SRI AYU GULTOM",
    "alamat": "BANJAR SEALAMAT",
    "kecamatan": "Onan Runggu",
    "desa": "Huta Hotang"
  },
  {
    "nama_usaha": "HASIHOLAN PARASIAN MARBUN",
    "alamat": "SOSOR III, SIGAOL MARBUN, PALIPI",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "EMA HUTASOIT",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "LANNI SIMBOLON",
    "alamat": "HARIAN BOHO,TURPUK LIMBONG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "DEMINTA MANALU",
    "alamat": "LBN.PASIR",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "ROBBY CHANDRA SILALAHI",
    "alamat": "KOMPLEK TERMINAL",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "OCTISARAH SIMANIHURUK",
    "alamat": "BAGAS LEMBONG, SIANJUR MULAMULA, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sianjur Mula Mula"
  },
  {
    "nama_usaha": "YESI Y SITUNGKIR",
    "alamat": "JUNGAK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "FRISKA BAKKARA",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SAHALATUA SIBORO",
    "alamat": "PANJAITAN,SIBORO,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN RATU SORASI",
    "alamat": "sitamiang",
    "kecamatan": "Onan Runggu",
    "desa": "Sitamiang"
  },
  {
    "nama_usaha": "ARNI TIURMA SIBARANI",
    "alamat": "SITANGGANG BAU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "FEROLIKA BR SINURAT",
    "alamat": "SIMANAMPANG, SIOPAT SOSOR, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "LUKAS A. SIDABUTAR",
    "alamat": "TUKTUK PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PUTIR SINAGA",
    "alamat": "PALIPI",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "SAHAT NAIBAHO",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "AMOS HARIANJA",
    "alamat": "SITAPONGAN, DESA SIPIRA KEC. ONANRUNGGU KAB. SAMOSIR",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "TULUS GUNAWAN P. SINAGA",
    "alamat": "SIBONOR OMPURATUS,",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "NEVENNI PARHUSIP",
    "alamat": "SOSOR DAGAL",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "WARGO SITANGGANG",
    "alamat": "RUMAH HOLI",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "JUMADI D. SINAGA",
    "alamat": "SIHILAP, URAT II, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "HOTDIMAN SITUMORANG",
    "alamat": "SIMBOLON PURBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "ROSIDA SITINJAK",
    "alamat": "TANDING",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "WANIFA SIPANGKAR",
    "alamat": "SOBURAN",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "DENNI SITUMORANG",
    "alamat": "HUTARAJA LUMBAN SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "NELLI MEGAWATI",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "SAMRI SAMUEL SIHOMBING",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PRIWANTO SIMBOLON",
    "alamat": "SITIO TIO",
    "kecamatan": "Palipi",
    "desa": "Huta Ginjang"
  },
  {
    "nama_usaha": "PINITTA HAULIAN SIMBOLON",
    "alamat": "PULO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PEVI CINTIA SIALLAGAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "WARDI JAMIL SINAGA",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "GINTON SINAGA",
    "alamat": "SIBAGANDING",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "GOKSAN SIMBOLON",
    "alamat": "JL. SAMPEAN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "IRVAN E. LUBIS",
    "alamat": "PARBALOHAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "NATALIA TIOLINA SIMARMATA",
    "alamat": "LUMBAN BONA-BONA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TIAMARNUR SIMBOLON",
    "alamat": "LUMBAN SINAGA",
    "kecamatan": "Simanindo",
    "desa": "Parbalohan"
  },
  {
    "nama_usaha": "DOLIAMIN SITUMORANG",
    "alamat": "SIMENGGAR",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "TIANUR SINAGA",
    "alamat": "PARBALOHAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "MASNA SINAGA",
    "alamat": "JL. RONGGUR NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JOSRIANDO HARO",
    "alamat": "ONAN RIHIT",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "TONGGO RIMBUN SIMBOLON",
    "alamat": "SIRIMBANG URUK",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "PRANCIS SIRINGORINGO",
    "alamat": "BARISAN GERAJA",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "TUKANG JAHIT <CINDI CLAUDIA SIDAURUK>",
    "alamat": "AEK NAULI",
    "kecamatan": "Pangururan",
    "desa": "Aek Nauli"
  },
  {
    "nama_usaha": "JUASNAR MANURUNG",
    "alamat": "CINTA DAME",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "TIPAN SIMALANGO",
    "alamat": "SASGIAN",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <ROULI NAIBAHO>",
    "alamat": "PEGE-PEGE, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "pengumpul hasil bumi <reni purba>",
    "alamat": "Tamba Nagodang",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "WARUNG KOPI <SUTRIANTI RAJAGUKGUK>",
    "alamat": "DESA JANJI RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "TUA HOTDISON SITUMORANG",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "DIAN NOVITA BR PERANGIN ANGIN",
    "alamat": "Parlondut",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "KARYA MURNI SIDIHONI",
    "alamat": "JL. RONGGURNIHUTA-SIDIHONI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "HOTBIN NADEAK",
    "alamat": "JL. TANAH LAPANG",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "EVEN RUDDIN LUMBAN GAOL",
    "alamat": "PAGAR BATU",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "YULI MARTHA SINAGA",
    "alamat": "SIBARA-BARA",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "DOOR DUISTERNISTOT L SIAHAAN",
    "alamat": "JANJI MARAPOT",
    "kecamatan": "Nainggolan",
    "desa": "Janji Marapot"
  },
  {
    "nama_usaha": "WINDA IANRI SINURAT",
    "alamat": "LUMBAN SUHI-SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "SERINAREWATY SINURAT",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "HERMANTO BASILIUS SIHOMBING",
    "alamat": "SIRIMBANG PASIR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "ANDRIADI RP SIMBOLON",
    "alamat": "SITALAMETANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ENITA MANIK",
    "alamat": "UNJUR",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "SUCI CAHAYATY SINAGA",
    "alamat": "LUMBAN BUKKARA",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "DONNY ERIKSON MALAU",
    "alamat": "HARIARA TOLU PARSAORAN 1 PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "FRANS DONAL GULTOM",
    "alamat": "KOMPLEKS GKPI BUHIT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "FARIJON SIHOMBING",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "HOTMA  MALAU",
    "alamat": "sibatu -batu",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Toba"
  },
  {
    "nama_usaha": "TIARMA ULI LUMBANTORUAN",
    "alamat": "LBN. GANDA",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "PENJUAL IKAN <RINDU GULTOM>",
    "alamat": "PARRAUAN, DUSUN 3",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Tigan Bakery",
    "alamat": "Jl Simanindo Raya, Desa Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "KANG BANDREK",
    "alamat": "JL. GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Warung Jajanan <Santa Ida Tamba>",
    "alamat": "Tamba Nagodang",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "ROSMERY ESTERLINA BANGUN",
    "alamat": "Jl. Ronggur nihuta",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "GUNAWAN SAMOSIR",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "JETRO SITANGGANG",
    "alamat": "SIDIHONI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "JOHN WILTER NAINGGOLAN",
    "alamat": "HUTA BOLON",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "HENDRA JOHAN SINAGA",
    "alamat": "SIALANGUAN",
    "kecamatan": "Pangururan",
    "desa": "Sialanguan"
  },
  {
    "nama_usaha": "JOHANRI GULTOM",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "VIKBON H SIMBOLON",
    "alamat": "LBN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "NGOTMA LIMBONG",
    "alamat": "SOSOR SILINJUANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "SITANGGANG FRENGKY YUSUP",
    "alamat": "JL. PUSUK BUHIT SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "ROMANI SIMANIHURUK",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "FRANSISCA LIMBONG",
    "alamat": "LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Sarimarrihit"
  },
  {
    "nama_usaha": "JIMSON SIRINGORINGO",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "RIANTO SITANGGANG",
    "alamat": "JLN.KEJAKSAAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HADZEN SIMBOLON",
    "alamat": "BATU BOLON",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "NIMHOT SINAGA",
    "alamat": "SIDALU-DALU, PALIPI, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "HAOLOAN BONAR HALOHO",
    "alamat": "DUSUN III SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "REMSI SILALAHI",
    "alamat": "PINDA RAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "WARUNG KOPI <ENRIA GULTOM>",
    "alamat": "PARRAUAN, DUSUN 3",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "BPK RUMA BOLON",
    "alamat": "DESA SAIT NIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "TOKO SEMBAKO JAYA",
    "alamat": "DESA TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "VIKBON H SIMBOLON",
    "alamat": "LBN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ERIKSON BAHARIJAYA MANIK",
    "alamat": "JLN.GEREJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "HARVAY LINGGOMOYO SIHALOHO",
    "alamat": "Lumban batu cinta dame",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "MORA JOSEPHINE SIJABAT, CV",
    "alamat": "Jalan Pardomuan Nauli Dusun I Sitare-tareon",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "SANDOR PRAWATI LUMBANRAJA",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "RUSSEL BERINGIN JAYA SIHOTANG",
    "alamat": "JL. DI. PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ASDONG SIRAIT",
    "alamat": "SANGKAL",
    "kecamatan": "Simanindo",
    "desa": "Simanindo Sangkal"
  },
  {
    "nama_usaha": "MARTUNAS SINAGA",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "CHARLES W. SITUNGKIR",
    "alamat": "SOSOR NANGKA",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <MANGIRING M. NAIBAHO>",
    "alamat": "JL. DR. HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "JUANTO SIMARMATA",
    "alamat": "LUMBAN BUTAR",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PAJAR SINAGA",
    "alamat": "PALLOBUAN",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "DEWI SERTIKA PURBA",
    "alamat": "LUMBAN SAGALA,TURPUK SAGALA,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "BENARIS HUTABALIAN",
    "alamat": "SIMOTUNG",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "JUAL KOSMETIK <ELLY SABET NAPITUPULU>",
    "alamat": "TAHUAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "RESTI SINAGA",
    "alamat": "GUSAR, SAITNIHUTA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Sait Ni Huta"
  },
  {
    "nama_usaha": "EFATI LASE",
    "alamat": "UPAHODA",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "POLORIDA SITANGGANG",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "PANGKAS RAMBUT <LOGITO SITINJAK>",
    "alamat": "PITTOLON, DUSUN 1",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Jual Mainan Anak <Leonardo Tamba>",
    "alamat": "Cinta Maju",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "ZIKRI BURGER",
    "alamat": "JL GEREJA KELURAHAN PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "Warung Jajanan <Only Silaban>",
    "alamat": "Tamba Nagodang",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "ERNIDAWATI SIMARMATA",
    "alamat": "SIMARMATA",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "MARLEN DESIMA SILALAHI",
    "alamat": "Lumban Lipan",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "RANTONIUS LAOLI",
    "alamat": "Jl.Komplek Perkantoran Parbaba,Kec.Pangururan,Kab.Samosir,Kel.Siopat Sosor,Sumatera Utara",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "TANIA SINAGA",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "VETRA ROBERTA SINAGA",
    "alamat": "SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "ROMAULI SINURAT",
    "alamat": "SIRIAON",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "LAMRIA SINAGA",
    "alamat": "TANAH LAPANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "RIFKA YOHANA SINAGA",
    "alamat": "DOLOK SOHALIAPAN",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "NASIB MARBUN",
    "alamat": "NAIBAHO",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "TIAR SITANGGANG",
    "alamat": "LUMBAN MANIK",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RUSTA SINAGA",
    "alamat": "LUMBAN TORUAN",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "JUJUR SAMOSIR",
    "alamat": "JL. PELABUHAN",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "OLOAN NAIBAHO",
    "alamat": "JL PELABUHAN ONANBARU PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SANTO MANGARIS SITUMORANG",
    "alamat": "ONAN BARU",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "HOTLIN SINAGA",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan I"
  },
  {
    "nama_usaha": "PEMRO NAIBAHO",
    "alamat": "SIMPANG TAMBA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "WILMAN D MARPAUNG",
    "alamat": "TUK-TUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "WARUNG KOPI <HORAS TAMBA>",
    "alamat": "PANGUMBILAN, DUSUN 1",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Warung Ester <Esterios Op Sunggu>",
    "alamat": "Cinta Maju",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "PENJAHIT MARLINA SIHOTANG",
    "alamat": "DESA JANJI MARIA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "PERONIKA SIPAYUNG",
    "alamat": "Raut Bosi",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "RONAL ALEKSANDER NAPITU",
    "alamat": "Batu batu",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MARINA HOTEL SAMOSIR, PT",
    "alamat": "JALAN RAYA SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "SANGGAM RIANTO OBERLIN NAINGGOLAN",
    "alamat": "JL. PELABUHAN NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "HIRAS GURNING",
    "alamat": "UPAR",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "RONY MUCTAR P.HABEAHAN",
    "alamat": "DUSUN III",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "DEMARIS TURNIP",
    "alamat": "BOLOBOLO",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "EFDIZON SIMARMATA",
    "alamat": "TURPUK SIHOTANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "JETENDRA SINAGA",
    "alamat": "KOMPLEK PUSKESMAS ONAN LIMBONG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Aek Sipitudai"
  },
  {
    "nama_usaha": "AGUSTINA MARIATI SILALAHI",
    "alamat": "GORAT",
    "kecamatan": "Palipi",
    "desa": "Gorat Pallombuan"
  },
  {
    "nama_usaha": "DANIEL NAIBAHO",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "REHULINA MALAU",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "ROLAMBOK LUMBANRAJA",
    "alamat": "TANO RAJA",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "MARYANI BR REGAR",
    "alamat": "LUMBAN JABIJABI KEL.PAKPAHAN KEC.ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Pakpahan"
  },
  {
    "nama_usaha": "JONHSON NAPITUPULU",
    "alamat": "JL. D.I PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MASRIA BR MARBUN",
    "alamat": "SIBANDOL",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan"
  },
  {
    "nama_usaha": "AMSAR SIMEON NAIBAHO",
    "alamat": "PARSEWAAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <PARASIAN SITINJAK>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Pengumpul Hasil Bumi <Liston Tamba>",
    "alamat": "Tamba Nagodang",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "KILANG PADI <HONNI SINURAT>",
    "alamat": "DESA JANJI MARIA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "SAHAT PARULIAN MARPAUNG",
    "alamat": "Tuk tuk siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MIMI FADILLAH SIMALANGO",
    "alamat": "Jl. Pangururan - Simanindo",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "PERSADA SAMOSIR VILLA, CV",
    "alamat": "Jalan Lingkar Tuktuk",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "BERNAT ASIDO NAINGGOLAN",
    "alamat": "SIALAPIT",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "UD Maruli Tua (MUDA OKTAVIANUS LUMBANRAJA)",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "HOTMASI SINAGA",
    "alamat": "MOGANG",
    "kecamatan": "Palipi",
    "desa": "Pallombuan"
  },
  {
    "nama_usaha": "ELFRIDA SINAGA",
    "alamat": "PARDEKKEAN",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "LAMRIS LIMBONG",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "Nurhaida silalahi",
    "alamat": "Dusun Lll Perbatasan",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "tempel ban jesika (DEWI LUMBANSIANTAR)",
    "alamat": "bondar nagok",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "YONA FEDRA MARPAUNG",
    "alamat": "PINDA RAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "MARUSAHA ESTOMIHI EVIKTOR TAMBUNAN",
    "alamat": "JALAN PALIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "GAPAR IAN PARHUSIP",
    "alamat": "LUMBAN SIANTAR",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "KRISTINA LASTIKA",
    "alamat": "Komplek SD Negeri No.28 Parlondut Dusun III",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "HARISMA L.P. SIMBOLON",
    "alamat": "PARDOMUAN I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "YOHANA SITINJAK",
    "alamat": "JL.SIANJUR MULAMULA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TUKANG JAHIT <HOTLINA SIMBOLON>",
    "alamat": "TERMINAL",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <SAMMERTUA TAMBA>",
    "alamat": "PEGE-PEGE, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "RUMAH MAKAN CAHAYA",
    "alamat": "Dusun 1 Siopat Sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <GENTA MARBUN>",
    "alamat": "DESA CINTA MAJU",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "TOKO SEMBAKO HUTASOIT",
    "alamat": "DESA TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "MAYA R. SIDABUTAR",
    "alamat": "JL LURUS SITOBU",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "ELVIRIDA SIMBOLON",
    "alamat": "Pardomuan I",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "TOMU JUNITA HUTASOIT",
    "alamat": "Malau",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "SERE NAULI, CV",
    "alamat": "Jalan Sisingamangaraja",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JASON DAMANIK",
    "alamat": "LOPO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "SWANDY RUMAHORBO",
    "alamat": "SILIMATALI",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "ELIDA NAIBAHO",
    "alamat": "SIMANGONDING",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "PUNGUANNA NAIBAHO",
    "alamat": "AEK RANGAT",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "TIORIDA SINAGA",
    "alamat": "SILIMA TALI",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "JON LUTER SINURAT",
    "alamat": "JLN RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "SANTI SIHOTANG",
    "alamat": "GINOLAT, GINOLAT, SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "SANDRO SITUMORANG",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "HENTI PRISKA NDRAHA",
    "alamat": "SITANGGANG SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "SANO SINAGA",
    "alamat": "SIDALU DALU",
    "kecamatan": "Palipi",
    "desa": "Palipi"
  },
  {
    "nama_usaha": "WILSON SIBURIAN",
    "alamat": "KOMPLEK PERKANTORAN PARBABA",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "SITI NURMA QOMAH SIMANULLANG",
    "alamat": "JL. PUTRI LOPIAN, KEL. PARDOMUAN 1, KEC. PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <RAMLAN TAMBA>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "WARUNG KOPI <LIKA SITINJAK>",
    "alamat": "SITINJAK, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Warung Makan <Ayu Sari Turnip>",
    "alamat": "Siopat Sosor, Pangururan",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SULASTRI SIMARMATA",
    "alamat": "Huta Bolon",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "RUSMAULI SITANGGANG",
    "alamat": "HARIARA TOLU",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "FLORA SINURAT",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN OBERHAUSEN HKBP DISTRIK VII SAMOSIR",
    "alamat": "JALAN GEREJA NOMOR 9 A",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JANSEN SITUMORANG",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Nainggolan",
    "desa": "Pananggangan II"
  },
  {
    "nama_usaha": "DEWI SIMBOLON",
    "alamat": "JL. DR HADRIANUS  SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "JONSON SIMBOLON",
    "alamat": "RONGGUR NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "ROMULUS NADEAK",
    "alamat": "LINTONG NIHUTA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Lintong Ni Huta"
  },
  {
    "nama_usaha": "JUAL SARAPAN <JULI ROMA ASI NADEAK>",
    "alamat": "JL. SIANJUR MULA MULA LUMBAN PEA KELURAHAN PASAR PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JANUARINTO LIMBONG",
    "alamat": "SIRIAON",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "DANA E.L SIMAMORA",
    "alamat": "TURPUK SAGALA",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "Rominda sinaga",
    "alamat": "Sigaol Marbun",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MARIHUT NAINGGOLAN",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "LUHUT SAHATA PARDOMUAN SIRAIT",
    "alamat": "JL. D.I. PANJAITAN NO.91",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FRANSISCUS KRISNADI SIJABAT",
    "alamat": "GALUNGAN",
    "kecamatan": "Simanindo",
    "desa": "Simarmata"
  },
  {
    "nama_usaha": "HASUDUNGAN ZENDRATO",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HERNI PURNAMA SAGALA",
    "alamat": "TIGA BODAI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "ROSPITA SAGALA",
    "alamat": "PARBABA DOLOK",
    "kecamatan": "Pangururan",
    "desa": "Parbaba Dolok"
  },
  {
    "nama_usaha": "PIANDUS SINAGA",
    "alamat": "HUTA BOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "JORAT SIAHAAN",
    "alamat": "LUMBAN SIAHAAN",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "IRA DIANTINI NAIBAHO",
    "alamat": "JL. PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MUARA PUTIH SATU",
    "alamat": "Pangaloan",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SAHAT TUA NAIBAHO",
    "alamat": "HUTA PARIK",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "MARIATI SINABUTAR",
    "alamat": "LUMBAN SITOHANG",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BAGINDO PUTRA SITUMORANG",
    "alamat": "SOSOR SITEDAK, PARMONANGAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "LAMBOK SINAGA",
    "alamat": "SIGARANG GARANG",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "HIPAS",
    "alamat": "Jalan Putri Lopian",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "BOI JENRI HUTABALIAN",
    "alamat": "LUMBAN BUNTU",
    "kecamatan": "Onan Runggu",
    "desa": "Sipira"
  },
  {
    "nama_usaha": "jhon TUA SIALLAGAN",
    "alamat": "TOLPING",
    "kecamatan": "Simanindo",
    "desa": "Martoba"
  },
  {
    "nama_usaha": "LAMBUTAN IRWANTO SINURAT",
    "alamat": "SIANTAR MATIO",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "BERIANTON NATALIS SIMBOLON",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KIONTER SITUMORANG",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Palipi",
    "desa": "Suhut Nihuta Pardomuan"
  },
  {
    "nama_usaha": "RENTHIKA HASIBUAN",
    "alamat": "LUMBAN SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "JAKMAR SINAGA",
    "alamat": "TORUDOLOK",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "RAMBO CISLER NADEAK",
    "alamat": "NADEAK BARIBA",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Ronggur Ni Huta"
  },
  {
    "nama_usaha": "TOTA MANGANTA SUKSES",
    "alamat": "Dusun III",
    "kecamatan": "Sitio-tio",
    "desa": "Tamba Dolok"
  },
  {
    "nama_usaha": "ADIL SIMBOLON",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "IRMA SURIANI",
    "alamat": "TUKTUK BARINGIN DESA SILIMALOMBU,KECAMATAN ONANRUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "JUNITA OCTAVIA SIDABUKKE",
    "alamat": "DUSUN II AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "DIATOR SIMBOLON",
    "alamat": "BATU GRAGA",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "DONNI ELKANA MANIK",
    "alamat": "desa siopat sosor  (gang limbong grosir)",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "ENDANG EKIM",
    "alamat": "JL. RAYA SIMANINDO",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "HOTMATUA SITOHANG",
    "alamat": "SIMANAMPANG",
    "kecamatan": "Palipi",
    "desa": "Sideak"
  },
  {
    "nama_usaha": "ROMA HENE L. SIALLAGAN",
    "alamat": "SIALLAGAN - PINDARAYA DESA SIALLAGAN - PINDARAYA",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "ROHANI PANJAITAN",
    "alamat": "SAMPEAN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Simbolon"
  },
  {
    "nama_usaha": "JUNIAR ARITONANG",
    "alamat": "HOLBUNG",
    "kecamatan": "Sitio-tio",
    "desa": "Holbung"
  },
  {
    "nama_usaha": "EKO RICHARDO",
    "alamat": "Sialapit",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "JOHN MARUDUT SITUMORANG",
    "alamat": "SABUNGAN NIHUTA",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "SUYETNO SILALAHI",
    "alamat": "JL.DR HADRIANUS SINAGA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KRISDO SIHALOHO",
    "alamat": "TOMOK",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "Nurasal sabila sihotang",
    "alamat": "Hatoguan",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "SANDRO JULIUS SIHOMBING",
    "alamat": "PINTU BATU",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "DOHARNI SIHOTANG",
    "alamat": "SIPAPAN,TURPUK SIHOTANG,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "PENJUAL KUE <YISPAN RUMAPEA>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <BOIMAN GULTOM>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Fotokopi Ondo",
    "alamat": "Dusun 1  siopat sosor",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Warung Mardiaman Tamba <Mardiaman Tamba>",
    "alamat": "Sibuha Buha",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "BUDIMAN",
    "alamat": "Hutabolon",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "JENTI MANURUNG",
    "alamat": "Panampangan",
    "kecamatan": "Pangururan",
    "desa": "Panampangan"
  },
  {
    "nama_usaha": "ARTA GUMIRAH SIREGAR",
    "alamat": "Jl. lintas Samosir",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "YAYASAN PENDIDIKAN TUNAS HARAPAN",
    "alamat": "DESA GAROGA",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "Ida ulima sihombing",
    "alamat": "Perbatasan Harpit",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "NANDO ALIMANTON SITANGGANG",
    "alamat": "PARDOMUAN NAULI",
    "kecamatan": "Harian",
    "desa": "Sampur Toba"
  },
  {
    "nama_usaha": "BERNATUA SIMBOLON",
    "alamat": "LUMBAN LINTONG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SUARNO SIMBOLON",
    "alamat": "RIANIATE",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "JOROTTA MAROJAHAN LUMBAN GAOL",
    "alamat": "LUMBAN RIHIT",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "AWALUDDIN PASARIBU",
    "alamat": "JANJI MARTAHAN",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "HASIHOLAN SINAGA",
    "alamat": "DOLOK MARTAHAN, BUNTU MAULI, SITIO-TIO",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "ARBONANSA SITUMORANG",
    "alamat": "TANGGA BATU",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "MURNI NADEAK",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "SEPTIAN PUTRA SIMBOLON",
    "alamat": "JL. PUTRI LOPIAN",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KARTOMO SIMARMATA",
    "alamat": "SOSOR SIBOROTAN",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "ROLINA PASARIBU",
    "alamat": "BATU BARBANE, KEL. SIOGUNG OGUNG, KEC. PANGURURAN.",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "DOORSMER <ENRIRO SITINJAK>",
    "alamat": "PITTOLON, DUSUN 1",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "KILANG PADI <MIKAEL SINAGA>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "WARUNG MAKAN PARBABA VIEW",
    "alamat": "DESA SIOPAT SOSOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Warung Jajanan <Mardahai Sinaga>",
    "alamat": "Tamba Nagodang",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "WIDIWATY F GULTOM",
    "alamat": "WFC Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LAURA SARTIKA M. SITANGGANG",
    "alamat": "DUSUN II",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "RUSMEY TOGATOROP",
    "alamat": "TATAR BUNGA",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "RELASI MAKMUR SAMOSIR, PT",
    "alamat": "DUSUN III",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "BATARA SAPUTRA",
    "alamat": "HATOGUAN",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "USAHA CATERING <JUMELPRI J. NABABAN>",
    "alamat": "JLN. DL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "KORMA ROSA DELIMA NADEAK",
    "alamat": "JL DR FL TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "USAHA CATERING <ALBERTUS CHRISTIAN BATISTUTA SIMANJUNTAK>",
    "alamat": "JL SM RAJA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "pedagang pengumpul hasil pertanuian (DORMASI SITUMORANG)",
    "alamat": "SOSOR MANGADAR",
    "kecamatan": "Palipi",
    "desa": "Pamutaran"
  },
  {
    "nama_usaha": "YEGES YOSUA SIDABUTAR",
    "alamat": "TOMOK, TOMOK PARSAORAN, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "RISDEN SIMARMATA",
    "alamat": "SIARSAM",
    "kecamatan": "Onan Runggu",
    "desa": "Harian"
  },
  {
    "nama_usaha": "ESTER SIMARMATA",
    "alamat": "SOSOR HUTA URUK",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "SION PANOGARI SIMATUPANG",
    "alamat": "KOMP. inpres DSN 1 HUTA TINGGI",
    "kecamatan": "Pangururan",
    "desa": "Huta Tinggi"
  },
  {
    "nama_usaha": "ELFRIDA SIDAURUK",
    "alamat": "SIMPANG TUKTUK",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "HADONO SITUMORANG",
    "alamat": "PARHORIAN",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "HERIANTO SINAGA",
    "alamat": "RANSANG BOSI, BUNTU MAULI, SITIO-TIO,",
    "kecamatan": "Sitio-tio",
    "desa": "Buntu Mauli"
  },
  {
    "nama_usaha": "NOVELITA BUTAR BUTAR",
    "alamat": "KP. BATU GORDANG",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "WARUNG KOPI <RAFLIN SIHOMBING>",
    "alamat": "PEGE-PEGE, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <PASTER TAMBA>",
    "alamat": "PARRAUAN, DUSUN 3",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "TOKO OBAT DEBORA",
    "alamat": "DESA SIOPAT SOSOR KEC PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Warung Sembako <Elpi Tamba>",
    "alamat": "Cinta Maju",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "HOTNA SITANGGANG",
    "alamat": "TIGA URAT",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "BIMA TOGAR MARPAUNG",
    "alamat": "tuk tuk siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PARDOMUAN HALOHO",
    "alamat": "JlN RIANIATE KM.6",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN BONA NIPINASA",
    "alamat": "desa turpuk limbong",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "MARLINE SITUMORANG",
    "alamat": "PASARAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "SUDIN SIMBOLON",
    "alamat": "Jl.FL.Tobing",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "PANGIHUTAN MARBUN",
    "alamat": "BARISAN GEREJA, SAOR NAULI HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "Rosmita hasibuan",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "ERNAHOT SARAGI",
    "alamat": "LUMBAN SARAGI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "PESTARIA SIREGAR",
    "alamat": "PANJOMURAN",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  },
  {
    "nama_usaha": "FRANDO NAINGGOLAN",
    "alamat": "HUTAGALUNG",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "DERIANTO SITINDAON",
    "alamat": "PASARAN I",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran I"
  },
  {
    "nama_usaha": "KOPI <HENRIKA>",
    "alamat": "SIANTING-ANTING",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "DEDE DORISDAY SINAGA",
    "alamat": "HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "FRISKA NAIBAHO",
    "alamat": "JL. RONGGUR NIHUTA simpang terminal",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SENTI SUSILAWATI SIRINGORINGO",
    "alamat": "SIGARANTUNG DESA HUTAGINJANG KEC. SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "ALLAND SITUMORANG",
    "alamat": "JL DI PANJAITAN",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ROLEN SIJABAT",
    "alamat": "PARLUASAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "PENJUAL IKAN <ELDO SILALAHI>",
    "alamat": "SIDAURUK, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Hans Ponsel",
    "alamat": "Desa Pardomuan I, dekat SPBU Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Menjual Bahan Bangunan <Aryo Tamba>",
    "alamat": "Sibuha Buha",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <BILMAR NAIBAHO>",
    "alamat": "DESA JANJI MARIA",
    "kecamatan": "Sitio-tio",
    "desa": "Janji Maria"
  },
  {
    "nama_usaha": "HABIBILLAH RUHULLAH",
    "alamat": "Jl Lintas Sosor Bulu",
    "kecamatan": "Simanindo",
    "desa": "Cinta Dame"
  },
  {
    "nama_usaha": "WILMAN D MARPAUNG",
    "alamat": "jl. lingkar Tuk Tuk",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "HEPI HENNI MALAU",
    "alamat": "Jl Pelabuhan",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "ANJU PARASIAN NAIBAHO - T",
    "alamat": "PEANABOLAK",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "BENDAHARA PASARIBU",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "ERIKA SIJABAT",
    "alamat": "LUMBAN SITUMORANG",
    "kecamatan": "Simanindo",
    "desa": "Dosroha"
  },
  {
    "nama_usaha": "RANDY JHONS K. SITIO",
    "alamat": "SILIMATALI",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "HENSANYA SIDABUTAR",
    "alamat": "TOMOK PARSAORAN",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "ALAM SEMESTA JAYA",
    "alamat": "Tomok Pangambatan",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "MARDIMAN SITANGGANG",
    "alamat": "AEK NATOLU",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "ARON MORIANTO SIMBOLON",
    "alamat": "JL. RONGGUR NI HUTA, PARDOMUAN I, PANGURUAN, SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "JUAL AIR <COSMAS PRABOWO NAIBAHO>",
    "alamat": "SILALAHI",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "JALOHOT DOMIANUS SITUMORANG",
    "alamat": "LUMBAN SITIO",
    "kecamatan": "Simanindo",
    "desa": "Simanindo"
  },
  {
    "nama_usaha": "ERIKSON NAIBAHO",
    "alamat": "LUMBAN SITAKKARAEN",
    "kecamatan": "Harian",
    "desa": "Turpuk Limbong"
  },
  {
    "nama_usaha": "SARTIKA SIMAMORA",
    "alamat": "TIMBUL NAULI",
    "kecamatan": "Pangururan",
    "desa": "Parhorasan"
  },
  {
    "nama_usaha": "GEMARINA HOTNIAWAN SINAGA",
    "alamat": "GALA GALA",
    "kecamatan": "Harian",
    "desa": "Hariara Pohan"
  },
  {
    "nama_usaha": "SONDANG PITRI SITUMORANG",
    "alamat": "SOSOR PASIR",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "MELINDA A NAINGGOLAN",
    "alamat": "situngkir",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "MANGARA SAGALA",
    "alamat": "TIGA BUDAI",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <DESI SITINJAK.",
    "alamat": "PITTOLON, DUSUN 1",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Coffee Shop <Gohima>",
    "alamat": "Siopat Sosor, Pangururan",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "Yabes Homestay",
    "alamat": "Jl. Putri Lopian",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "Warung Jajanan Anak <Pelita Tamba>",
    "alamat": "Tamba Nagodang",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "TOLEDO TUKTUK SAMOSIR",
    "alamat": "Jln. Lingkar Tuktuk Siadong",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "RUSMA TURNIP",
    "alamat": "SIOPAT SOSOOR",
    "kecamatan": "Pangururan",
    "desa": "Siopat Sosor"
  },
  {
    "nama_usaha": "MIRACLE INSTING TECHNOLOGY",
    "alamat": "Jalan Pulo Samosir",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "APRIANTO MANULLANG",
    "alamat": "SIANTING ANTING",
    "kecamatan": "Pangururan",
    "desa": "Sianting - Anting"
  },
  {
    "nama_usaha": "ALBOIN NAINGGOLAN",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "JOSUA HAHOLONGAN SIHOMBING",
    "alamat": "HATOGUAN, HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Hatoguan"
  },
  {
    "nama_usaha": "HOTMARITA MANURUNG",
    "alamat": "KOMPLEK LOPO",
    "kecamatan": "Simanindo",
    "desa": "Tomok"
  },
  {
    "nama_usaha": "RHENE SIDAURUK",
    "alamat": "TUKTUK SIADONG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "PERDI SITOHANG",
    "alamat": "TAMPAHAN",
    "kecamatan": "Simanindo",
    "desa": "Tanjungan"
  },
  {
    "nama_usaha": "HERBET KRISTOPEL SITANGGANG",
    "alamat": "SOSOR SILO",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Paraduan"
  },
  {
    "nama_usaha": "BELAMAN HUTAGALUNG",
    "alamat": "JL DR LUMBAN TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "MANUNGGU ASI SITINJAK",
    "alamat": "HUTABARAT",
    "kecamatan": "Onan Runggu",
    "desa": "Sitinjak"
  },
  {
    "nama_usaha": "MURNI SITINJAK",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "KEDAI MAKAN <MARINTAN SITUMORANG>",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "LASON TURNIP",
    "alamat": "SITORANG NABOLON",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "MANSEN MANIK",
    "alamat": "SIARSAM",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "ROLIKA LINA SIMBOLON",
    "alamat": "BANJAR, HUTA NAMORA, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "PETTY  VERA PANDIANGAN",
    "alamat": "PARDUGUL, PARDUGUL, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Pardugul"
  },
  {
    "nama_usaha": "RUHUTDO NAULI LUMBANSIANTAR",
    "alamat": "Nainggolan, Sipinggan Lumbansiantar",
    "kecamatan": "Nainggolan",
    "desa": "Sipinggan Lumban Siantar"
  },
  {
    "nama_usaha": "Dewi Sartika",
    "alamat": "Lbn Ganda,",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "ERNIST SINURAT",
    "alamat": "JL FL TOBING, HUTA GODANG",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KORDINAT LUMBAN TUNGKUP",
    "alamat": "SIRUMA HOMBAR",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "PENIEL PARHUSIP",
    "alamat": "NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "Meldawati sinurat",
    "alamat": "Simangonding",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "WILLIAM ZEFANYA NADEAK",
    "alamat": "TANJUNG BUNGA",
    "kecamatan": "Pangururan",
    "desa": "Tanjung Bunga"
  },
  {
    "nama_usaha": "RUDIANRY SITANGGANG",
    "alamat": "JL. KOL. LIBERTY MALAU",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "SADARTUA GULTOM",
    "alamat": "PANDIANGAN , HUTADAME, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "Susi idawati",
    "alamat": "Tele",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "MELINAR MARGARETA LUMBANTOBING",
    "alamat": "JL KEJAKSAAN NO.23 KELURAHAN PASAR LAMA KEC.PANGURURAN, KAB. SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "DEBBIE MELIANA MALAU",
    "alamat": "LUMBAN HOLANG-HOLANG",
    "kecamatan": "Pangururan",
    "desa": "Sitolu Huta"
  },
  {
    "nama_usaha": "BUDIMAN TURNIP",
    "alamat": "SIMAIBANG",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "XL PARULIAN GROUP",
    "alamat": "Soburan Dusun I",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "ANDREY GRENMAX SIREGAR",
    "alamat": "JLN. SM. RAJA 71",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "warung kopi BIHER LUMBANRAJA",
    "alamat": "PANGALOAN",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "SERMINA TAMBA",
    "alamat": "BATU JAGAR",
    "kecamatan": "Palipi",
    "desa": "Pardomuan Nauli"
  },
  {
    "nama_usaha": "ZANI RONALDGEN MARBUN",
    "alamat": "JL. RONGGURNIHUTA",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "MELVA ULI SITUMORANG",
    "alamat": "HUTA GUR GUR",
    "kecamatan": "Simanindo",
    "desa": "Parmonangan"
  },
  {
    "nama_usaha": "KANTIAR SIMARMATA",
    "alamat": "TAMBANGAN",
    "kecamatan": "Harian",
    "desa": "Sosor Dolok"
  },
  {
    "nama_usaha": "ELIDA ORAWATI SIRUMAPEA",
    "alamat": "JANJI MARTAHAN,JANJI MARTAHAN,HARIAN,",
    "kecamatan": "Harian",
    "desa": "Janji Martahan"
  },
  {
    "nama_usaha": "DEWI BUNGA VERA SARI PURBA",
    "alamat": "PARMANUK",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "JONES PASARIBU",
    "alamat": "SIHOLING,",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "DAME ROMASIH SITANGGANG",
    "alamat": "PALLIMUTAN",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "Fitriani saragih",
    "alamat": "Hutagalung",
    "kecamatan": "Harian",
    "desa": "Hutagalung"
  },
  {
    "nama_usaha": "VERONIKA SIMBOLON ALIAS NURHAYATI SIMBOLON",
    "alamat": "PINTU SONA",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "Ita situmorang",
    "alamat": "Bongbong",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LISDE BERNA DONNA SIHOMBING",
    "alamat": "LUMBAN GAOL",
    "kecamatan": "Palipi",
    "desa": "Parsaoran Urat"
  },
  {
    "nama_usaha": "BUDIRMAN LUMBAN RAJA",
    "alamat": "LUMBAN HARIARA",
    "kecamatan": "Nainggolan",
    "desa": "Pangaloan"
  },
  {
    "nama_usaha": "BINSAR BAHCTIAR SIBORO",
    "alamat": "SIBORO",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Siboro"
  },
  {
    "nama_usaha": "NENGSIH ELFRIDA HARYANI SAGALA",
    "alamat": "TURPUK SAGALA,TURPUK SAGALA,HARIAN ,",
    "kecamatan": "Harian",
    "desa": "Turpuk Sagala"
  },
  {
    "nama_usaha": "JIMMI CARTER SITUMORANG",
    "alamat": "HUTA RAJA",
    "kecamatan": "Sitio-tio",
    "desa": "Cinta Maju"
  },
  {
    "nama_usaha": "ROPENDY SAHAT TUA SIDABUTAR",
    "alamat": "JL, TOMOK BOLON",
    "kecamatan": "Simanindo",
    "desa": "Tomok Parsaoran"
  },
  {
    "nama_usaha": "YULIATI NAINGGOLAN",
    "alamat": "LUMBAN NAINGGOLAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "LULU ARTA NABASA, CV",
    "alamat": "Panahatan",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "KELOMPOK BERMAIN SILIMALOMBU",
    "alamat": "SILIMA LOMBU",
    "kecamatan": "Onan Runggu",
    "desa": "Silima Lombu"
  },
  {
    "nama_usaha": "SANRO SIHOTANG",
    "alamat": "HARIARA PINTU",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "Tarti simbolon",
    "alamat": "Harian",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <EVENTUSTAMBA>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <HERTATI SINAGA>",
    "alamat": "PITTOLON, DUSUN 1",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Mie Balap Sidabukke",
    "alamat": "Jl. Putri Lopian",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "WARUNG SAYUR KASIH",
    "alamat": "DESA AMBARITA",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "KORMA AULIA SIHOMBING",
    "alamat": "Lumban Tonga Tonga",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "PARULIAN BARUTU",
    "alamat": "Jl. Raya Pangururan Tomok (Parbaba)",
    "kecamatan": "Pangururan",
    "desa": "Huta Bolon"
  },
  {
    "nama_usaha": "MAWAR SIMATUPANG",
    "alamat": "PASAR DAME",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sijambur"
  },
  {
    "nama_usaha": "AIDO MITRA TAMA, UD",
    "alamat": "JL, Pulau Samosir",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "TISON SAGALA",
    "alamat": "GINOLAT,GINOLAT,SIANJUR MULA-MULA",
    "kecamatan": "Sianjur Mulamula",
    "desa": "Ginolat"
  },
  {
    "nama_usaha": "OBERNANDO MALAU",
    "alamat": "DOLOK SOHALIAPAN",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "JAINAL SIMBOLON",
    "alamat": "PARMANUHAN, DESA RIANIATE, KECAMATAN PANGURURAN, KABUPATEN SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Rianiate"
  },
  {
    "nama_usaha": "RYNTO SIMBOLON",
    "alamat": "JL. SIGIRING-GIRING",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "BINSAR SIJABAT",
    "alamat": "DUGUL NANGKA, LUMBAH SUHI SUHI DOLOK, PANGURURAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Dolok"
  },
  {
    "nama_usaha": "JESRINTO SIRINGORINGO",
    "alamat": "HUTA GODANG, SAOR NAULI HATOGUAN, PALIPI,",
    "kecamatan": "Palipi",
    "desa": "Saornauli Hatoguan"
  },
  {
    "nama_usaha": "SETINA SAMOSIR",
    "alamat": "SOSOR MANGADAR DUSUN I",
    "kecamatan": "Onan Runggu",
    "desa": "Janji Matogu"
  },
  {
    "nama_usaha": "ARIFIN SIREGAR",
    "alamat": "SIBUALBUAL",
    "kecamatan": "Onan Runggu",
    "desa": "Pardomuan"
  },
  {
    "nama_usaha": "Martha purba",
    "alamat": "Simandege",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KARNIUS NAINGGOLAN",
    "alamat": "situngkir",
    "kecamatan": "Pangururan",
    "desa": "Situngkir"
  },
  {
    "nama_usaha": "JAIRING SAMOSIR",
    "alamat": "SIARSAM",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Tonga Tonga"
  },
  {
    "nama_usaha": "ENING SUMIYATUN",
    "alamat": "AMBARITA, AMBARITA, SIMANINDO",
    "kecamatan": "Simanindo",
    "desa": "Ambarita"
  },
  {
    "nama_usaha": "DOHARRIS BEBESTINA MALAU",
    "alamat": "KAMENTE",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "ROLUMBANG TIOMA SIMBOLON",
    "alamat": "PANAHATAN",
    "kecamatan": "Palipi",
    "desa": "Simbolon Purba"
  },
  {
    "nama_usaha": "WIDIARTO SINAGA",
    "alamat": "urat II",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "ERNA SITUMORANG",
    "alamat": "SIBATUARA",
    "kecamatan": "Palipi",
    "desa": "Urat Timur"
  },
  {
    "nama_usaha": "YULIANA SITUMORANG",
    "alamat": "SOSOR PARAPAT",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "DEWI FRANSISCA SINABUTAR",
    "alamat": "LUMBAN SUHI SUHI TORUAN",
    "kecamatan": "Pangururan",
    "desa": "Lumban Suhi Suhi Toruan"
  },
  {
    "nama_usaha": "RONAL SITOHANG - TA",
    "alamat": "SIDIHONI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Sabungan Ni Huta"
  },
  {
    "nama_usaha": "RYKARDO MANURUNG",
    "alamat": "LUMBAN PINGGOL",
    "kecamatan": "Pangururan",
    "desa": "Lumban Pinggol"
  },
  {
    "nama_usaha": "JEPERSON SITOHANG",
    "alamat": "SOSOR TANGGA",
    "kecamatan": "Palipi",
    "desa": "Urat II"
  },
  {
    "nama_usaha": "NOVAYANTI SILALAHI",
    "alamat": "PANDAN",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "MAY LESTRI VIFIYANTI MARBUN",
    "alamat": "LUMBAN PEA",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "FIKRI MARSANGAP TUA SIADARI",
    "alamat": "DUSUN 1 SIBURAK BURAK",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "Jeremia kristina pakpahan",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "LESNIDA SIHOTANG",
    "alamat": "LUMBAN RAJA",
    "kecamatan": "Harian",
    "desa": "Dolok Raja"
  },
  {
    "nama_usaha": "RELASI NAGA MAKMUR, PT",
    "alamat": "DUSUN III",
    "kecamatan": "Pangururan",
    "desa": "Huta Namora"
  },
  {
    "nama_usaha": "JUAL BANDREK <JUANG OKTAVIANUS SIMANJUNTAK>",
    "alamat": "JL. PULO SAMOSIR",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "LASRIA PANGIHUTAN SIHOTANG",
    "alamat": "BUTTU MAULI",
    "kecamatan": "Ronggur Nihuta",
    "desa": "Salaon Dolok"
  },
  {
    "nama_usaha": "Tio riska naibaho",
    "alamat": "Pintu Sona",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "HUDDEN SILALAHI",
    "alamat": "JLN.DR.FL.TOBING",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "KARO SITANGGANG",
    "alamat": "SIMULLOP",
    "kecamatan": "Pangururan",
    "desa": "Siogung - Ogung"
  },
  {
    "nama_usaha": "LASNIA SIMBOLON",
    "alamat": "KOMPLEK SD NEGERI",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "HAMDAH SIMBOLON",
    "alamat": "HARIAN BOHO",
    "kecamatan": "Harian",
    "desa": "Turpuk Sihotang"
  },
  {
    "nama_usaha": "JUNI FERAWATI HARIANJA",
    "alamat": "JL PELABUHAN 44 ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "SIO WANTI GULTOM",
    "alamat": "BATU ILIK",
    "kecamatan": "Simanindo",
    "desa": "Unjur"
  },
  {
    "nama_usaha": "NURAINI SIMBOLON",
    "alamat": "SIGAOL MARBUN",
    "kecamatan": "Palipi",
    "desa": "Sigaol Marbun"
  },
  {
    "nama_usaha": "MARIA DANESTI SITUNGKIR",
    "alamat": "SIHUSAPI",
    "kecamatan": "Simanindo",
    "desa": "Sihusapi"
  },
  {
    "nama_usaha": "Nelly sitinjak",
    "alamat": "Hariara",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "CORNELYA SINAGA",
    "alamat": "BUNTU PASIR",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "RATNA SURIANI HABEAHAN",
    "alamat": "Sitanggang Bau",
    "kecamatan": "Pangururan",
    "desa": "Parsaoran I"
  },
  {
    "nama_usaha": "SUMANRO PARHUSIP",
    "alamat": "PASAR NAINGGOLAN",
    "kecamatan": "Nainggolan",
    "desa": "Parhusip"
  },
  {
    "nama_usaha": "TOGA marudut SIAHAAN",
    "alamat": "SIALLAGAN",
    "kecamatan": "Simanindo",
    "desa": "Siallagan Pindaraya"
  },
  {
    "nama_usaha": "JUAL SEMBAKO <HELEN VINTAULI>",
    "alamat": "JL. SISINGAMANGARAJA NO 34",
    "kecamatan": "Pangururan",
    "desa": "Pasar Pangururan"
  },
  {
    "nama_usaha": "TAHI SILALAHI",
    "alamat": "SOSOR GALUNG",
    "kecamatan": "Simanindo",
    "desa": "Tuk-Tuk Siadong"
  },
  {
    "nama_usaha": "Sondang parhusip",
    "alamat": "Hariara Pintu",
    "kecamatan": "Harian",
    "desa": "Hariara Pintu"
  },
  {
    "nama_usaha": "RAMAYANTI SIRINGORINGO",
    "alamat": "ONAN RUNGGU",
    "kecamatan": "Onan Runggu",
    "desa": "Onanrunggu"
  },
  {
    "nama_usaha": "ROHANI VERONIKA SINAGA",
    "alamat": "SIBONOR OMPURATUS",
    "kecamatan": "Nainggolan",
    "desa": "Sibonor Ompu Ratus"
  },
  {
    "nama_usaha": "REPINNA PURBA",
    "alamat": "SIANTARANTAR PANDIANGAN",
    "kecamatan": "Palipi",
    "desa": "Huta Dame"
  },
  {
    "nama_usaha": "JEKIMAN SITANGGANG",
    "alamat": "LUMBAN SITANGGANG",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "MARDAME SITUMORANG",
    "alamat": "SIGARANTUNG",
    "kecamatan": "Simanindo",
    "desa": "Hutaginjang"
  },
  {
    "nama_usaha": "OIDAMORA TAMBA",
    "alamat": "PEKAN INPRES",
    "kecamatan": "Pangururan",
    "desa": "Pardomuan I"
  },
  {
    "nama_usaha": "LENTA PARHUSIP",
    "alamat": "DAGAL BARU",
    "kecamatan": "Nainggolan",
    "desa": "Siruma Hombar"
  },
  {
    "nama_usaha": "WARUNG KELONTONG <HISAR SITINJAK>",
    "alamat": "SAITNIHUTA, DUSUN 2",
    "kecamatan": "Sitio-tio",
    "desa": "Parsaoran"
  },
  {
    "nama_usaha": "Warung Makan <NDK>",
    "alamat": "Siopat Sosor, Pangururan",
    "kecamatan": "",
    "desa": ""
  },
  {
    "nama_usaha": "SMAN 1 SITIOTIO",
    "alamat": "SABULAN DUSUN III",
    "kecamatan": "Sitio-tio",
    "desa": "Sabulan"
  },
  {
    "nama_usaha": "RIKARDO HUTAJULU",
    "alamat": "Jl. Raya Simanindo, Buhit Simpang Wisata Bagot",
    "kecamatan": "Pangururan",
    "desa": "Parlondut"
  },
  {
    "nama_usaha": "MG EINSTEIN RUMAHORBO",
    "alamat": "SOSOR GAMBIR",
    "kecamatan": "Simanindo",
    "desa": "Garoga"
  },
  {
    "nama_usaha": "FINA ANSISFA PANGGABEAN",
    "alamat": "Jl. dr. Hadrianus Sinaga",
    "kecamatan": "Pangururan",
    "desa": "Pintusona"
  },
  {
    "nama_usaha": "ONAN BATU TANI, CV",
    "alamat": "Sijurjur Jalan Ringroud",
    "kecamatan": "Nainggolan",
    "desa": "Pasaran Parsaoran"
  }
];
// URL Google Apps Script Web App
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxQ2JFilll-VMhrVX90-9vReY4U_i6KQTa2yngvZWE6W7RaZP1CeoH46jU732N5CPTi/exec";

console.log('data.js dimuat, total data:', dataUsaha.length);
