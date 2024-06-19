
const images = [
{ src: './img/футболка1ч.png', title: 'Название 1' },
{ src: './img/футболка1ч.png', title: 'Название 2' },
{ src: './img/футболка1ч.png', title: 'Название 3' },
{ src: './img/футболка1ч.png', title: 'Название 4' },
{ src: './img/футболка1ч.png', title: 'Название 5' }
];

const slidesContainer = document.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');

let slideIndex = 0;
const slidesToShow = 3;
const totalSlides = images.length;
let startX, endX;

// Generate slides and dots dynamically
function createSlidesAndDots() {
images.forEach((image, index) => {
    // Create slide
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="caption">
            <h3>${image.title}</h3>
            <button>Заказать</button>
            </div>
    `;
    slidesContainer.appendChild(slide);

    // Create dot
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => currentSlide(index));
    dotsContainer.appendChild(dot);
});
}

createSlidesAndDots();

function updateSlides() {
const offset = slideIndex * -200;
slidesContainer.style.transform = `translateX(${offset}px)`;

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
});
}

function currentSlide(n) {
slideIndex = n;
updateSlides();
}

function nextSlide() {
slideIndex = (slideIndex + 1) % totalSlides;
updateSlides();
}

function prevSlide() {
slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
updateSlides();
}

function handleTouchStart(event) {
startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
if (!startX) {
    return;
}
endX = event.touches[0].clientX;
}

function handleTouchEnd() {
if (!startX || !endX) {
    return;
}
const diffX = startX - endX;
if (diffX > 50) {
    nextSlide();
} else if (diffX < -50) {
    prevSlide();
}
startX = null;
endX = null;
}

// Initialize slider
updateSlides();

// Add touch event listeners
slidesContainer.addEventListener('touchstart', handleTouchStart, false);
slidesContainer.addEventListener('touchmove', handleTouchMove, false);
slidesContainer.addEventListener('touchend', handleTouchEnd, false);
