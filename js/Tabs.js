const rootSelector = '[data-js-tabs]';

class Tabs {
    stateClasses = {
        isVisible: 'is-visible',
        isForward: 'is-forward',
        isBack: 'is-back',
    }

    constructor(rootSelector) {
        this.rootSelector = rootSelector;
        this.init();
    }

    onAnimationEnd = (event) => {
        const el = event.currentTarget;

        if (event.animationName === 'tab-back') {
            el.classList.remove(this.stateClasses.isBack, this.stateClasses.isVisible);
            el.removeEventListener('animationend', this.onAnimationEnd);
        }
    };

    removeForward = (event) => {
        const el = event.currentTarget;

        if (event.animationName === 'tab-forward') {
            el.classList.remove(this.stateClasses.isForward);
            el.removeEventListener('animationend', this.removeForward);
        }
    };

    showTab = (event) => {
        const buttonElement = event.target.closest('[data-tab]');
        if (!buttonElement) return;

        const targetId = buttonElement.dataset.tab;

        const targetContent = document.getElementById(targetId);
        if (!targetContent) return;

        const currentTarget = document.querySelector('.tabs__content.is-visible');

        if (currentTarget === targetContent) return;

        if (currentTarget) {
            currentTarget.classList.remove(this.stateClasses.isForward);
            currentTarget.classList.add(this.stateClasses.isBack);

            currentTarget.addEventListener('animationend', this.onAnimationEnd);
        }

        targetContent.classList.remove(this.stateClasses.isBack); 
        targetContent.classList.add(this.stateClasses.isVisible, this.stateClasses.isForward);

        targetContent.addEventListener('animationend', this.removeForward);
    }

    init() {
        this.rootSelector.addEventListener('click', this.showTab);
    }
}

class TabsCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Tabs(element);
        });
    }
}

export default TabsCollection;