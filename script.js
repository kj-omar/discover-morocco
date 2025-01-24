// JavaScript pour des fonctionnalités interactives à venir
console.log("Bienvenue sur Discover Morocco !");
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}