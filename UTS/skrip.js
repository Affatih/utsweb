// ===== SIDEBAR TOGGLE =====
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");

if(menuBtn) menuBtn.addEventListener("click",()=>sidebar.classList.toggle("active"));
if(closeSidebar) closeSidebar.addEventListener("click",()=>sidebar.classList.remove("active"));

// ===== GREETING =====
const sidebarGreeting = document.getElementById("sidebarGreeting");
if(sidebarGreeting){
  const hours = new Date().getHours();
  let greeting = "";
  if(hours>=5 && hours<11) greeting="Selamat Pagi 🌅";
  else if(hours>=11 && hours<15) greeting="Selamat Siang ☀️";
  else if(hours>=15 && hours<18) greeting="Selamat Sore 🌇";
  else greeting="Selamat Malam 🌙";
  sidebarGreeting.textContent = `${greeting}, Admin BukuKita!`;
}

// ===== STOCK.HTML =====
function tampilkanStok(){
  const tbody = document.getElementById("stockTableBody");
  if(!tbody) return;
  tbody.innerHTML="";
  dataKatalogBuku.forEach(buku=>{
    const row=document.createElement("tr");
    row.innerHTML=`
      <td>${buku.id}</td>
      <td>${buku.judul}</td>
      <td>${buku.penulis}</td>
      <td>${buku.stok}</td>
      <td>Rp${buku.harga.toLocaleString()}</td>
    `;
    tbody.appendChild(row);
  });
}

// ===== TAMBAH STOK BARU =====
function tambahStok(){
  const judul=document.getElementById("newJudul").value;
  const penulis=document.getElementById("newPenulis").value;
  const stok=parseInt(document.getElementById("newStok").value);
  const harga=parseInt(document.getElementById("newHarga").value);

  if(!judul || !penulis || !stok || !harga){ alert("Isi semua data!"); return; }

  dataKatalogBuku.push({id:dataKatalogBuku.length+1,judul,penulis,stok,harga});
  tampilkanStok();
  document.getElementById("newJudul").value="";
  document.getElementById("newPenulis").value="";
  document.getElementById("newStok").value="";
  document.getElementById("newHarga").value="";
}

// ===== CHECKOUT.HTML =====
function tampilkanPesanan(){
  const tbody = document.getElementById("checkoutTableBody");
  if(!tbody) return;
  tbody.innerHTML="";
  dataPemesanan.forEach(p=>{
    const row=document.createElement("tr");
    row.innerHTML=`
      <td>${p.id}</td>
      <td>${p.nama}</td>
      <td>${p.buku}</td>
      <td>${p.jumlah}</td>
      <td>Rp${p.total.toLocaleString()}</td>
      <td>${p.status}</td>
    `;
    tbody.appendChild(row);
  });
}

// ===== TRACKING.HTML =====
function cariTracking(){
  const noDO=document.getElementById("inputDO").value;
  const info=document.getElementById("trackingInfo");
  info.innerHTML="";
  const hasil=dataTracking.find(d=>d.noDO===noDO);
  if(!hasil){ info.innerHTML="<p>Nomor Delivery Order tidak ditemukan.</p>"; return; }
  info.innerHTML=`
    <p><strong>Nama Pemesan:</strong> ${hasil.nama}</p>
    <p><strong>Status Pengiriman:</strong> ${hasil.status}</p>
    <p><strong>Ekspedisi:</strong> ${hasil.ekspedisi}</p>
    <p><strong>Tanggal Kirim:</strong> ${hasil.tglKirim}</p>
    <p><strong>Jenis Paket:</strong> ${hasil.paket}</p>
    <p><strong>Total Pembayaran:</strong> Rp${hasil.total.toLocaleString()}</p>
  `;
}

// ===== HISTORY.HTML =====
function tampilkanHistory(){
  const tbody=document.getElementById("historyTableBody");
  if(!tbody) return;
  tbody.innerHTML="";
  dataHistory.forEach(h=>{
    const row=document.createElement("tr");
    row.innerHTML=`
      <td>${h.id}</td>
      <td>${h.nama}</td>
      <td>${h.buku}</td>
      <td>${h.jumlah}</td>
      <td>Rp${h.total.toLocaleString()}</td>
      <td>${h.tanggal}</td>
    `;
    tbody.appendChild(row);
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded",()=>{
  tampilkanStok();
  tampilkanPesanan();
  tampilkanHistory();
});
