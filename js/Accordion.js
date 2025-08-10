const rootSelector = '[data-js-accordion]';

class Accordion {
    selectors = {
        section: '[data-js-accordion-section]',
        content: '[data-js-accordion-content]',
        heading: '[data-js-accordion-heading]'
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.sectionElements = this.rootElement.querySelectorAll(this.selectors.section);
        this.init();
    }

    closeAllSections() {
        this.sectionElements.forEach(section => {
            const content = section.querySelector(this.selectors.content);
            const heading = section.querySelector(this.selectors.heading);

            section.classList.remove(this.stateClasses.isActive);
            content.classList.remove(this.stateClasses.isActive);
            heading.classList.remove(this.stateClasses.isActive);
        });
    }

    init() {
        this.sectionElements.forEach(section => {
            const content = section.querySelector(this.selectors.content);
            const heading = section.querySelector(this.selectors.heading);
            
            section.addEventListener('click', () => {
                const wasActive = section.classList.contains(this.stateClasses.isActive);

                this.closeAllSections();
                
                if (!wasActive) {
                    section.classList.add(this.stateClasses.isActive);
                    content.classList.add(this.stateClasses.isActive);
                    heading.classList.add(this.stateClasses.isActive);
                }
            });
        });
    }
}

class AccordionCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Accordion(element);
        });
    }
}

export default AccordionCollection;