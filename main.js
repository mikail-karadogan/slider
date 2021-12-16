const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next-btn');
const prev = document.querySelector('#prev-btn');
const auto = true;
const intervalTime = 5000;
let slideInterval;
const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for previous slide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length -1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'));
}

// button events

next.addEventListener('click', () => {
    nextSlide();
});
prev.addEventListener('click', () => {
    prevSlide();
});

// auto slide
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}