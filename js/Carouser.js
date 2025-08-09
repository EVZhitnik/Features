const rootSelector = '[data-js-carousel]';

class Carousel {
    selectors = {
        content: '[data-js-carousel-content]',
        buttonPrev: '[data-js-carousel-button-prev]',
        buttonNext: '[data-js-carousel-button-next]'
    }

    constructor (rootElement) {
        this.rootElement = rootElement;
        this.content = this.rootElement.querySelector(this.selectors.content);
        this.buttonPrev = this.rootElement.querySelector(this.selectors.buttonPrev);
        this.buttonNext = this.rootElement.querySelector(this.selectors.buttonNext);
        this.slides = Array.from(this.content.children);
        this.currentIndex = 0;
        this.init();
    }

    updateCarousel = () => {
        this.content.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    clickButtonPrev = () => {
        this.currentIndex = (this.currentIndex === 0) ?
        this.slides.length - 1 : this.currentIndex - 1;
        this.updateCarousel();
    }

    clickButtonNext = () => {
        this.currentIndex = (this.currentIndex === this.slides.length - 1) ?
        0 : this.currentIndex + 1;
        this.updateCarousel();
    }

    init() {
        this.buttonPrev.addEventListener('click', this.clickButtonPrev); 
        this.buttonNext.addEventListener('click', this.clickButtonNext); 
    }
}

class CarouselCollection {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
          new Carousel(element);
        });
    }
}

export default CarouselCollection;
