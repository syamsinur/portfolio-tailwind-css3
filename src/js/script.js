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
    const toTop = this.document.querySelector('#to-top');

    if( window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

// close navbar
window.addEventListener('click', function(e) {
    if(e.target!= hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
     }
});

// dark toggle move
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove('dark');
}
