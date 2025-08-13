const rootSelector = '[data-js-gen-password]';

class GenPassword {
    selectors = {
        inputPassword: '[data-js-gen-password-input]',
        buttonGenPassword: '[data-js-gen-button-get]',
        buttonCopyPassword: '[data-js-gen-button-copy]'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.inputPasswordElement = this.rootElement.querySelector(this.selectors.inputPassword);
        this.buttonGenPassword = this.rootElement.querySelector(this.selectors.buttonGenPassword);
        this.buttonCopyPassword = this.rootElement.querySelector(this.selectors.buttonCopyPassword);
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        this.passwordLenght = 15;
        this.password = '';
        this.init();
    }

    genPassword = () => {
        this.password = '';

        for (let i = 0; i < this.passwordLenght; i++) {
            const randomNumber = Math.floor(Math.random() * this.chars.length);
            this.password += this.chars[randomNumber];
        }

        this.inputPasswordElement.value = this.password;
    }

    copyPassword = () => {
        if (!this.password) {
            alert('Сначала сгенерируйте пароль!');
            return;
        }

        navigator.clipboard.writeText(this.password)
            .then(() => {
                const originalText = this.buttonCopyPassword.textContent;
                this.buttonCopyPassword.textContent = 'Скопировано';

                setTimeout(() => {
                    this.buttonCopyPassword.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
                alert('Не удалось скопировать пароль');
            })
    }

    init() {
        this.buttonGenPassword.addEventListener('click', this.genPassword);
        this.buttonCopyPassword.addEventListener('click', this.copyPassword);
    }
}

class GenPasswordCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new GenPassword(element);
        });
    }
}

export default GenPasswordCollection;