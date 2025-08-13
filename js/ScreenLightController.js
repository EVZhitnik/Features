const rootSelector = '[data-js-screen-light-controller]';

class ScreenLightController {
    selectors = {
        rangeController: '[data-js-screen-light-controller-range]',
        valueController: '[data-js-screen-light-controller-value]',
        buttonReset: '[data-js-screen-light-controller-button-reset]'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.rangeControllerElement = this.rootElement.querySelector(this.selectors.rangeController);
        this.valueControllerElement = this.rootElement.querySelector(this.selectors.valueController);
        this.buttonResetElement = this.rootElement.querySelector(this.selectors.buttonReset);
        this.init();
    }

    changeScreenBacklight = () => {
        let brightness = this.rangeControllerElement.value;
        document.body.style.background = `
            rgb(${brightness * 2.55}, ${brightness * 2.55}, ${brightness * 2.55})`
        ;
        this.valueControllerElement.textContent = `${brightness}%`;
    }

    resetBrightness = () => {
        this.rangeControllerElement.value = 100;
        document.body.style.background = `#FFFFFF`;
        this.valueControllerElement.textContent = '100%';
    }

    init() {
        this.rangeControllerElement.addEventListener('input', this.changeScreenBacklight);
        this.buttonResetElement.addEventListener('click', this.resetBrightness);
    }
}

class ScreenLightControllerCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ScreenLightController(element);
        })
    }
}

export default ScreenLightControllerCollection;