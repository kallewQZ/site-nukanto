function toggleMenu() {
    const menuMobile = document.getElementById("menu-mobile");
    menuMobile.classList.toggle("menu-mobile-active");
}


function toggleMenu() {
    const menuMobile = document.getElementById("menu-mobile");

    if (menuMobile.classList.contains("menu-mobile-active")) {
        menuMobile.classList.remove("menu-mobile-active");
        menuMobile.classList.add("menu-mobile");
    } else {
        menuMobile.classList.remove("menu-mobile");
        menuMobile.classList.add("menu-mobile-active");
    }
}


const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const trackWidth = track.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
}

prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});
