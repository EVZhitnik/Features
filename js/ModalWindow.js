const rootSelector = '[data-js-modal]';

class ModalWindow {
    selectors = {
        buttonOpenModal: '[data-js-modal-button-open]',
        modalOverlay: '[data-js-modal-overlay]',
        modalWindow: '[data-js-modal-body]',
        buttonCloseModal: '[data-js-modal-button-close]'
    }

    stateClasses = {
        isActive: 'is-active',
        isOpen: 'is-open'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.buttonOpenModalElement = this.rootElement.querySelector(this.selectors.buttonOpenModal);
        this.modalOverlayElement = this.rootElement.querySelector(this.selectors.modalOverlay);
        this.modalWindowElement = this.rootElement.querySelector(this.selectors.modalWindow);
        this.buttonCloseModalElement = this.modalWindowElement.querySelector(this.selectors.buttonCloseModal);
        this.isOpen = false;
        this.init();
    }

    openModal = () => {
        if (this.isOpen) return;

        document.body.classList.add(this.stateClasses.isOpen);
        this.modalOverlayElement.classList.add(this.stateClasses.isActive);
        this.modalWindowElement.classList.add(this.stateClasses.isActive);
        this.isOpen = true;
    }

    closeModal = () => {
        if (!this.isOpen) return;

        this.modalWindowElement.classList.remove(this.stateClasses.isActive);
        this.modalOverlayElement.classList.remove(this.stateClasses.isActive);
        document.body.classList.remove(this.stateClasses.isOpen);
        this.isOpen = false;
    }

    handleOverlayClick = (element) => {
        if (element.target === this.modalOverlayElement) {
            this.closeModal();
        }
    }

    handleKeyDown = (element) => {
        if (element.key === 'Escape' && this.isOpen) {
            this.closeModal();
        }
    }

    init() {
        this.buttonOpenModalElement.addEventListener('click', this.openModal);
        this.buttonCloseModalElement.addEventListener('click', this.closeModal);
        this.modalOverlayElement.addEventListener('click', this.closeModal);
        document.addEventListener('keydown', this.handleKeyDown);
    }
}

class ModalWindowCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ModalWindow(element);
        });
    }
}

export default ModalWindowCollection;