document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.getElementById("burgerBtn");
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.querySelectorAll(".nav_link");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Показываем или скрываем кнопку быстрой прокрутки
    function toggleScrollTopBtn() {
        const sectionOne = document.getElementById("section_one");
        if (sectionOne) {
            scrollTopBtn.style.display = (window.scrollY >= sectionOne.offsetTop) ? "block" : "none";
        }
    }

    // Обработчик события для скролла страницы
    window.addEventListener("scroll", toggleScrollTopBtn);

    // Функция для скролла к верху страницы
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Обработчик события для кнопки быстрой прокрутки
    scrollTopBtn.addEventListener("click", scrollToTop);

    // Остальной код скрипта, который вы уже имеете
    burgerBtn.addEventListener("click", function () {
        burgerMenu.classList.toggle("burger-menu-visible");
        if (burgerBtn.textContent === 'menu') {
            burgerBtn.textContent = "close";
        } else if (burgerBtn.textContent === 'close') {
            burgerBtn.textContent = "menu";
        }
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            scrollToSection(sectionId);
            if (burgerMenu.classList.contains("burger-menu-visible")) {
                burgerMenu.classList.remove("burger-menu-visible");
                burgerBtn.textContent = "menu";
            }
        });
    });

    document.querySelectorAll(".burger-menu-link").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            scrollToSection(sectionId);
            burgerMenu.classList.remove("burger-menu-visible");
            burgerBtn.textContent = "menu";
        });
    });
});