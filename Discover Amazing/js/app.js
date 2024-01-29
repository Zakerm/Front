(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.scrollY > 50){
            header.classList.add('header__active');
        }else{
            header.classList.remove('header__active');
        }
    };
}());

// Burger hendler
(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());

// menu change
(function() {
    const scrollToElement = (elementId) => {
        document.querySelectorAll('.header__nav_active').forEach(el => el.classList.remove('header__nav_active'));

        const element = document.getElementById(elementId);
        const offset = -71;
        const targetScrollPosition = element.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    };

    const addClickListener = (linkId, sectionId) => {
        const link = document.getElementById(linkId);
        link.addEventListener('click', () => {
            scrollToElement(sectionId);
            link.classList.add('header__nav_active');
        });
    };

    addClickListener('sign_link', 'Sign-in');
    addClickListener('Articles_link', 'Articles');
    addClickListener('Locations_link', 'Locations');
    addClickListener('Videos_link', 'Videos');
}());





