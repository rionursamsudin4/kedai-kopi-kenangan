const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.getElementById('hamburger-menu');
// ketika tombol hamburger ditekan
hamburger.addEventListener('click', function (e) {
    navbarNav.classList.toggle('active');
    e.preventDefault()
});

// ketika tombol search ditekan 
const searchForm = document.querySelector('.search-form');
const searchBox = document.getElementById('search-box');
document.getElementById('search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus()
    e.preventDefault()
}
// ketika tombol shopping cart ditekan
const shoppingCart = document.querySelector('.shopping-cart');
document.getElementById('shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault()
}

// ketika diluar tombol hamburger ditekan
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    };
});
// ketika diluar tombol search form ditekan
const searchButton = document.getElementById('search-button');
document.addEventListener('click', function (e) {
    if (!searchButton.contains(e.target) && !searchBox.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
});
// ketika diluar tombol shopping cart ditekan
const shoppingCartButton = document.getElementById('shopping-cart-button');
document.addEventListener('click', function (e) {
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// modal box 
const modalDetailButton = document.querySelectorAll('.modal-detail-button');
const closeButton = document.querySelector('.close-button');
const modalDetail = document.getElementById('modal-detail');

modalDetailButton.forEach((btn) => {
    btn.addEventListener('click', function () {
        modalDetail.style.display = 'flex';
    })
})

closeButton.addEventListener('click', function (e) {
    modalDetail.style.display = 'none';
    e.preventDefault()
})


// GSAP animation
gsap.from('.container-nav', { duration: 1, ease: "power4.out", y: -500 });
gsap.from('.heading-hero', { duration: 2.5, ease: "power4.out", x: -500 });
gsap.from('.text-hero', { duration: 3.5, ease: "power4.out", x: -500 });
gsap.from('.button', { duration: 4, ease: "power4.out", x: -500 });