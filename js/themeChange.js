document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('themeButton');
    const themeIcon = document.getElementById('themeIcon');
    const logo = document.getElementById('logo');
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const links = document.querySelectorAll('a');
    const arrows = document.querySelectorAll('.arrow');

    // Set page to current theme
    let currentTheme = localStorage.getItem("currentTheme");

    if (currentTheme === 'dark') {
            setDark();
        }
    else {
            setLight(); //Defaults to light mode
        }

    // Toggle theme
    themeButton.addEventListener('click', function() {

        let currentTheme = localStorage.getItem("currentTheme");

        if (currentTheme === 'dark') {
            setLight();
            localStorage.setItem('currentTheme', 'light');
        }
        else {
            setDark();
            localStorage.setItem('currentTheme', 'dark');
        }

    });

    function setDark() {
        themeButton.classList.remove('btn-light');
        themeButton.classList.add('btn-dark');
        themeIcon.src = "images/lightMode.svg";

        document.body.classList.remove('body-light');
        document.body.classList.add('body-dark');

        header.classList.remove('header-light');
        header.classList.add('header-dark');

        footer.classList.remove('footer-light');
        footer.classList.add('footer-dark');

        // logo.classList.add('fadeout');
        // setTimeout(() => {
        //     logo.src = "images/logoDark.svg";
        //     logo.classList.remove('fadeout');
        // }, 1000);

        logo.src = "images/logoDark.svg";
        
        next.classList.remove('btn-light');
        next.classList.add('btn-dark');
        
        prev.classList.remove('btn-light');
        prev.classList.add('btn-dark');

        links.forEach(link => {
            link.classList.remove('a-light');
            link.classList.add('a-dark');
        });

        arrows.forEach(arrow => {
            arrow.classList.add('fadeout');
            setTimeout(() => {
                arrow.src = "images/arrowDark.svg";
                arrow.classList.remove('fadeout');
            }, 600);
        });
        
    }

    function setLight() {
        themeButton.classList.remove('btn-dark');
        themeButton.classList.add('btn-light');
        themeIcon.src = "images/darkMode.svg";

        document.body.classList.remove('body-dark');
        document.body.classList.add('body-light');

        header.classList.remove('header-dark');
        header.classList.add('header-light');

        footer.classList.remove('footer-dark');
        footer.classList.add('footer-light');

        // logo.classList.add('fadeout');
        // setTimeout(() => {
        //     logo.src = "images/logoLight.svg";
        //     logo.classList.remove('fadeout');
        // }, 1000);

        logo.src = "images/logoLight.svg";

        next.classList.remove('btn-dark');
        next.classList.add('btn-light');
        
        prev.classList.remove('btn-dark');
        prev.classList.add('btn-light');

        links.forEach(link => {
            link.classList.remove('a-dark');
            link.classList.add('a-light');
        });

        arrows.forEach(arrow => {
            arrow.classList.add('fadeout');
            setTimeout(() => {
                arrow.src = "images/arrowLight.svg";
                arrow.classList.remove('fadeout');
            }, 600);
        });

    }

});