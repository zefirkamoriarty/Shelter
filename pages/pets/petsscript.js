const menuBurger = document.querySelector('.burger_menu');
menuBurger.addEventListener("click" , function(e) {
    if (menuBurger) {
        menuBurger.classList.toggle('open');
        
    } if (headerNavigation) {
       headerNavigation.classList.toggle('active')
    }

}
);

const headerNavigation = document.querySelector('.header_nav');