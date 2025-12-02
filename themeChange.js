document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('themeButton');
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    const cards = document.querySelectorAll('.card');
    const logo = document.getElementById('logo');

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
        themeButton.classList.remove('btn-dark');
        themeButton.classList.add('btn-light');
        document.querySelector('#themeButton').innerHTML = 'Light Mode';

        document.body.classList.remove('light');
        document.body.classList.add('dark');

        navbar.classList.remove('light');
        navbar.classList.add('navbar-dark', 'dark');
        
        logo.src = "images/logoDark.svg";

        cards.forEach(card => {
            card.classList.remove('light');
            card.classList.add('dark');
        });

    }

    function setLight() {
        themeButton.classList.remove('btn-light');
        themeButton.classList.add('btn-dark');
        document.querySelector('#themeButton').innerHTML = 'Dark Mode';

        document.body.classList.remove('dark');
        document.body.classList.add('light');

        navbar.classList.remove('navbar-dark', 'dark');
        navbar.classList.add('light');
        
        logo.src = "images/logoLight.svg";

        cards.forEach(card => {
            card.classList.remove('dark');
            card.classList.add('light');
        });
    }

});