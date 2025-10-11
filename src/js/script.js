// window.pageYOffset = posisi viewport atau layar terhadap bagian atas dokumen
// header.offsetTop = posisi elemen terhadap bagian atas dokumen ( harusnya 0 dan tidak berubah)
// jika di scroll posisi viewport terhadap dokumen bertambah dan lebih besar dari posisi elemen terhadap dokumen

// Dokumen itu diam, sedangkan viewport (layar) yang bergerak waktu kamu scroll.

// pageYOffset mengukur seberapa jauh layar turun (discroll) dari atas dokumen.

// offsetTop mengukur posisi elemen di dokumen dari atas dokumen / elemen induknya.

// Maka ketika pageYOffset > offsetTop, layar sudah lewat posisi elemen tersebut → itu yang jadi trigger efek fixed navbar.

// navbar
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if( window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});