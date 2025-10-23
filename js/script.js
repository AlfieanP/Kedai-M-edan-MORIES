// Ambil elemen dengan class 'navbar-nav' dan elemen dengan id 'hamburger-menu' 
// dan simpan dalam variabel
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Ketika tombol hamburger diklik
hamburger.onclick = (e) => {
    e.preventDefault(); // Mencegah perilaku default (misalnya scroll ke atas jika <a href="#">)
    navbarNav.classList.toggle('active'); // Toggle class 'active' untuk menampilkan atau menyembunyikan menu
};

// Ketika pengguna mengklik di mana saja di dokumen
document.addEventListener('click', function(e) {
    // Jika klik terjadi di luar tombol hamburger dan di luar menu navigasi
    if (!hamburger.contains(e.target) & !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active'); // Hapus class 'active' agar menu disembunyikan
    }
});