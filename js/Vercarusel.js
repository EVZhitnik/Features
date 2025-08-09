const rootSelector = '[data-js-vercarusel]';

class Carousel {
    selectors = {
        hero: '[data-js-vercarusel-hero]',
    }

    constructor (rootElement) {
        this.rootElement = rootElement;
        this.heroElement = this.rootElement.querySelector(this.selectors.hero);
        this.items = [
            {title: 'HTML', unicode: 'U+1F433'},
            {title: 'CSS', unicode: 'U+1F40B'},
            {title: 'JavaScript', unicode: 'U+1F423C'},
            {title: 'React JS', unicode: 'U+1F41F'},
            {title: 'Node JS', unicode: 'U+1F420'},
        ];
        this.init();
    }

    init() {
        this.items.forEach((item, index) => {
            const vercaruselItem = document.createElement('div');
            vercaruselItem.classList.add('vercarusel__item');
            vercaruselItem.style.setProperty('--index', index + 1);
            vercaruselItem.innerHTML = `
                <div class="vercarusel__item-body">
                <p class="vercarusel__text">${item.title}</p>
                <p>Unicode: ${item.unicode}</p>
                </div>`;
            this.heroElement.appendChild(vercaruselItem);
        });
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