// ===== DATA DUMMY =====
const dataKatalogBuku = [
  {id:1, judul:"Sang Alkemis", penulis:"Paulo Coelho", stok:50, harga:55250},
  {id:2, judul:"Seporsi Mie Ayam Sebelum Mati", penulis:"Brian Khrisna", stok:30, harga:79050},
  {id:3, judul:"Misteri Kota Tua", penulis:"Yovita Siswati", stok:20, harga:41250},
  {id:4, judul:"Atomic Habits", penulis:"James Clear", stok:80, harga:91800},
  {id:5, judul:"Laut Bercerita", penulis:"Leila S. Chudori", stok:60, harga:97750}
];

const dataPemesanan = [
  {id:1, nama:"Andi", buku:"Sang Alkemis", jumlah:2, total:110500, status:"Belum Bayar"},
  {id:2, nama:"Sari", buku:"Atomic Habits", jumlah:1, total:91800, status:"Lunas"},
  {id:3, nama:"Budi", buku:"Laut Bercerita", jumlah:3, total:293250, status:"Proses Kirim"}
];

const dataTracking = [
  {noDO:"DO001", nama:"Andi", status:"Dikirim", ekspedisi:"JNE", tglKirim:"2025-11-07", paket:"Reguler", total:110500},
  {noDO:"DO002", nama:"Sari", status:"Sampai", ekspedisi:"J&T", tglKirim:"2025-11-05", paket:"Express", total:91800},
  {noDO:"DO003", nama:"Budi", status:"Proses", ekspedisi:"SiCepat", tglKirim:"2025-11-06", paket:"Reguler", total:293250}
];

const dataHistory = [
  {id:1, nama:"Andi", buku:"Sang Alkemis", jumlah:2, total:110500, tanggal:"2025-11-06"},
  {id:2, nama:"Sari", buku:"Atomic Habits", jumlah:1, total:91800, tanggal:"2025-11-05"},
  {id:3, nama:"Budi", buku:"Laut Bercerita", jumlah:3, total:293250, tanggal:"2025-11-06"}
];
