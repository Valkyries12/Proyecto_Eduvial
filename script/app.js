const menuHamburguesa = document.querySelector(".fa-bars");
const menuMobile = document.querySelector(".navbar_items");

menuHamburguesa.addEventListener("click", function() {
    menuMobile.classList.toggle("show");
});