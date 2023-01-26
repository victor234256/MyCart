let searchform = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () => {
searchform.classList.toggle('active');
    shopping_cart.classList.remove('active');
    login_form.classList.remove('active');
    nav_icon.classList.remove('active');
}

let shopping_cart = document.querySelector('.shopping-cart');


document.querySelector('#cart-btn').onclick = () => {
shopping_cart.classList.toggle('active');
    searchform.classList.remove('active');
    login_form.classList.remove('active');
    nav_icon.classList.remove('active');
}
let login_form = document.querySelector('.login-form');


document.querySelector('#login-btn').onclick = () => {
login_form.classList.toggle('active');
    searchform.classList.remove('active');
    shopping_cart.classList.remove('active');
    nav_icon.classList.remove('active');
}
let nav_icon = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () => {
nav_icon.classList.toggle('active');
    searchform.classList.remove('active');
    shopping_cart.classList.remove('active');
    login_form.classList.remove('active');
}
window.onscroll = () => {
    searchform.classList.remove('active');
    shopping_cart.classList.remove('active');
    login_form.classList.remove('active');
    nav_icon.classList.remove('active');
}
// slider
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });