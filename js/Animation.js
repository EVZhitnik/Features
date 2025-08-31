class Notice {
    selectors = {
        root: '[data-js-container]',
        button: '[data-js-notice-button]',
        notice: '[data-js-notice]',
    }

    stateClasses = {
        isVisible: 'is-visible',
        isForward: 'is-forward',
        isBack: 'is-back',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.buttonElement = this.rootElement.querySelector(this.selectors.button);
        this.noticeElement = this.rootElement.querySelector(this.selectors.notice);
        this.init();
    }

    showNotification = () => {
        if (this.noticeElement.classList.contains(this.stateClasses.isVisible)) {

            this.buttonElement.textContent = 'Показать уведомление';

            this.noticeElement.classList.remove(this.stateClasses.isForward);
            this.noticeElement.classList.add(this.stateClasses.isBack);

            setTimeout(() => {
                this.noticeElement.classList.remove(this.stateClasses.isVisible, this.stateClasses.isBack);
            }, 1000);

        } else {

            this.buttonElement.textContent = 'Скрыть уведомление';

            this.noticeElement.classList.add(this.stateClasses.isVisible);

            requestAnimationFrame(() => {
                this.noticeElement.classList.add(this.stateClasses.isForward);
            });

        }
    }

    init() {
        this.buttonElement.addEventListener('click', this.showNotification);
    }
}

export default Notice;