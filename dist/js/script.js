window.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://script.google.com/macros/s/AKfycbzCFVPE48nCaLfiRYJjKXTrUlAo5pM39bNJSraIklb15sqNkNlAeeWLImkiYzWgVr5L/exec'
    const modal = document.querySelector('[data-modal]');
    const form = document.querySelector('form');

    const message = {
        successTitle: 'Дякуємо!',
        successImg: 'img/modal/done-icon.png',
        successDescr: 'Найближчим часом з вами зв`яжеться менеджер',
        failerTitle: 'Йой, халепа!',
        failerImg: 'img/modal/error-icon.png',
        failerDescr: 'Щось пішло не так, спробуйте пізніше',
    }

    const transfers = [
        {
            title: 'Трансфер Київ',
            input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Київ - Буковель - Київ" name="Трансфер" data-price="3450" data-way >
                <label for="way-both">Київ - Буковель - Київ</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-kyiv-bukovel" value="Київ - Буковель" name="Трансфер" data-price="2150" data-way >
                <label for="way-kyiv-bukovel">Київ - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-kyiv" value="Буковель - Київ" name="Трансфер" data-price="2150" data-way >
                <label for="way-bukovel-kyiv">Буковель - Київ</label>
            </div>
            `
        }, {
            title: 'Трансфер Львів',
            input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Львів - Буковель - Львів" name="Трансфер" data-price="2200" data-way>
                <label for="way-both">Львів - Буковель - Львів</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-lviv-bukovel" value="Львів - Буковель" name="Трансфер" data-price="1300" data-way>
                <label for="way-lviv-bukovel">Львів - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-lviv" value="Буковель - Львів" name="Трансфер" data-price="1300" data-way>
                <label for="way-bukovel-lviv">Буковель - Львів</label>
            </div>
            `
        }, {
            title: 'Трансфер Івано-Франківськ',
            input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Франківськ - Буковель - Франківськ" name="Трансфер" data-price="1000" data-way>
                <label for="way-both">Франківськ - Буковель - Франківськ</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-if-bukovel" value="Франківськ - Буковель" name="Трансфер" data-price="400" data-way>
                <label for="way-if-bukovel">Франківськ - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-if" value="Буковель - Франківськ" name="Трансфер" data-price="600" data-way>
                <label for="way-bukovel-if">Буковель - Франківськ</label>
            </div>
            `
        }
    ];

    const getResourse = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        } else {
            return res.json();
        }
    }


    class Card {
        constructor(
            title,
            image,
            description,
            toTrainNumber,
            toTrainLink,
            toStartCity,
            toStartTime,
            toEndCity,
            toEndTime,
            fromTrainNumber,
            fromTrainLink,
            fromStartCity,
            fromStartTime,
            fromEndCity,
            fromEndTime,
            firstBenefit,
            secondBenefit,
            thirdBenefit,
            firstPriceDescr,
            firstPrice,
            secondPriceDescr,
            secondPrice,
            thirdPriceDescr,
            thirdPrice,
            inStock,
            message,
            btn

            ) {
                this.title = title;
                this.img = image;
                this.descr = description;
                this.toTrainNumber = toTrainNumber;
                this.toTrainLink = toTrainLink;
                this.toStartCity = toStartCity;
                this.toStartTime = toStartTime;
                this.toEndCity = toEndCity;
                this.toEndTime = toEndTime;
                this.fromTrainNumber = fromTrainNumber;
                this.fromTrainLink = fromTrainLink;
                this.fromStartCity = fromStartCity;
                this.fromStartTime = fromStartTime;
                this.fromEndCity = fromEndCity;
                this.fromEndTime = fromEndTime;
                this.firstBenefit = firstBenefit;
                this.secondBenefit = secondBenefit;
                this.thirdBenefit = thirdBenefit;
                this.firstPriceDescr = firstPriceDescr;
                this.firstPrice = firstPrice;
                this.secondPriceDescr = secondPriceDescr;
                this.secondPrice = secondPrice;
                this.thirdPriceDescr = thirdPriceDescr;
                this.thirdPrice = thirdPrice;
                this.inStock = inStock;
                this.message = message;
                this.btn = btn;

                if (this.inStock) {
                    this.message = '';
                } else {
                    this.btn = '';
                }
            }

            render() {
                const btn = document.createElement('a');
                btn.classList.add('btn', 'orders__btn');
                btn.setAttribute('href', '#');
                btn.setAttribute('data-order', true);
                btn.textContent = 'Забронювати';

                const div = document.createElement('div');
                div.classList.add('orders__card');
                div.innerHTML = `
                <img src="img/order/${this.img}.jpg" alt="${this.img}" class="orders__card-image">
                <h3 class="orders__card-title">${this.title}</h3>
                <div class="orders__card-descr">${this.descr}</div>
                <div class="divider"></div>
                <div class="orders__card-descr">
                    до табору потяг:
                    <a href="${this.toTrainLink}" target="_blank">${this.toTrainNumber}</a> <br>
                    ${this.toStartCity} <span class="strong">${this.toStartTime}</span> - ${this.toEndCity} <span class="strong">${this.toEndTime}</span>
                </div>
                <div class="orders__card-descr">
                    з табору потяг:
                    <a href="${this.fromTrainLink}" target="_blank">${this.fromTrainNumber}</a> <br>
                    ${this.fromStartCity} <span class="strong">${this.fromStartTime}</span> - ${this.fromEndCity} <span class="strong">${this.fromEndTime}</span>
                </div>
                <div class="divider"></div>
                <div class="orders__card-descr">- ${this.firstBenefit}</div>
                <div class="orders__card-descr">- ${this.secondBenefit}</div>
                <div class="orders__card-descr">- ${this.thirdBenefit}</div>
                <div class="divider"></div>
                <div class="orders__card-descr">
                    <div class="orders__card-price-title">Вартість:</div>
                    <div class="orders__card-price-item">
                        ${this.firstPriceDescr}<span class="strong">${this.firstPrice}</span>
                    </div>
                    <div class="orders__card-price-item">
                        ${this.secondPriceDescr}<span class="strong">${this.secondPrice}</span>
                    </div>
                    <div class="orders__card-price-item">
                        ${this.thirdPriceDescr}<span class="strong">${this.thirdPrice}</span>
                    </div>
                </div>
                <div class="orders__card-message">${this.message}</div>
                ${this.btn}
                `;

                document.querySelector('.orders__wrapper').append(div);
            }
    }

    getResourse('db/db.json')
    .then(data => data.transfer.forEach((obj) => {
        new Card(
            obj.title,
            obj.img,
            obj.description,
            obj.toTheCamp.trainNumber,
            obj.toTheCamp.trainLink,
            obj.toTheCamp.startCity,
            obj.toTheCamp.startTime,
            obj.toTheCamp.endCity,
            obj.toTheCamp.endTime,
            obj.fromTheCamp.trainNumber,
            obj.fromTheCamp.trainLink,
            obj.fromTheCamp.startCity,
            obj.fromTheCamp.startTime,
            obj.fromTheCamp.endCity,
            obj.fromTheCamp.endTime,
            obj.firstBenefit,
            obj.secondBenefit,
            obj.thirdBenefit,
            obj.price.firstPriceDescr,
            obj.price.firstPrice,
            obj.price.secondPriceDescr,
            obj.price.secondPrice,
            obj.price.thirdPriceDescr,
            obj.price.thirdPrice,
            obj.inStock,
            obj.message,
            '<a href="#" class="btn orders__btn" data-order>Забронювати</a>'
            ).render();
    }))
    .then(() => {
        const btns = document.querySelectorAll('.orders__btn');
        btns.forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                modal.querySelector('.modal__title').textContent = transfers[i].title;
                modal.querySelector('#formWay').innerHTML = transfers[i].input;

                openModal('[data-modal]');
            })
        })
    })
    ;

    /* burger */
    const burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.nav__mobile');

        burger.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            burgerMenu.classList.toggle('nav__mobile_active');
        })

    /* form */
    function parseDate(date) {
        const day = getZero(date.getDate()),
            month = getZero(date.getMonth()),
            year = getZero(date.getFullYear()),
            hours = getZero(date.getHours()),
            minutes = getZero(date.getMinutes());
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        }
        return num;
    }

    async function postData (url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: data,
        });
        return res;
    }
  
    
        const checkboxes = document.querySelectorAll('[data-checkbox]');
        let amount;
        let price;
        let transferDate;
        let quantity;

        form.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-price')) {
                price = +e.target.getAttribute('data-price');
            }

            transferDate = [];

            checkboxes.forEach((item, i) => {

                if (item.checked) {
                    transferDate.push(checkboxes[i].getAttribute('value'));
                } ;

            })
            quantity = transferDate.length;
            amount = price * quantity; 

            if (amount) {
                document.querySelector('#amount').textContent = amount;
            } else {
                document.querySelector('#amount').textContent = '____';
            }

        })
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form);
            
            formData.append('Дата заявки', parseDate(new Date()));
            formData.append('Сума', amount);
            formData.append('Дата заїзду', transferDate.join('; '));
            console.log(formData);


            if (validate()) {
                postData(URL, formData)
                .then(data => data.text())
                .then(data => console.log(data))
                .then(() => showThanksModal(message.successTitle, message.successImg, message.successDescr))
                .catch(() => showThanksModal(message.failerTitle, message.failerImg, message.failerDescr))
                .finally(form.reset());
            }

        })
        form.addEventListener('reset', () => {
            document.querySelector('#amount').textContent = '____';
        })


    function openModal(modalSelector) {
        const modal = document.querySelector(modalSelector);

        modal.classList.add('show');
        modal.classList.remove('hide');

        document.querySelector('.body__wrapper').classList.add('no-scroll');
        
    }

    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);

            modal.classList.add('hide');
            modal.classList.remove('show');

            document.querySelector('.body__wrapper').classList.remove('no-scroll');
            
    }

    const closeBtn = document.querySelector('[data-close]'),
          overlay = document.querySelector('[data-modal]');

    window.addEventListener('click', (e) => {

        if (e.target) {
            if (e.target === closeBtn || e.target === overlay) {
                closeModal('[data-modal]');
            }
        }
    })

    function showThanksModal(title, img, descr) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');

        const thankModal = document.createElement('div');
        thankModal.classList.add('modal__dialog');
        thankModal.innerHTML = `
            <div class="modal-thanks">
                <div class="modal-thanks__header">
                    <div class="close" data-close>&times;</div>
                    <h3 class="modal-thanks__title">${title}</h3>
                </div>
                <img src="${img}" alt="icon">
                <div class="modal-thanks__descr">${descr}</div>
            </div>
        `;
        document.querySelector('[data-modal]').append(thankModal);

        setTimeout(() => {
            closeModal('[data-modal]');
            prevModalDialog.classList.remove('hide');
            thankModal.remove();
        }, 3000)
    }
     // Validate

     let phones = document.querySelectorAll('[data-phone]');

     phones.forEach(phone => {
        console.log(phone);
        phone.addEventListener('input', () => {
            if (phone.value.length <= 13) {
                phone.value = phone.value.replace(/[^+\d]/i, '');
            } else {
                phone.value = phone.value.replace(/.$/, '');
            }
       })
     })

    function validate() {
        function validateMessage(message, parentSelector) {
            const span = document.createElement('span');
            span.classList.add('validate');
            span.textContent = message;
            parentSelector.append(span);
            setTimeout(() => {
                span.remove();
            }, 5000)
        }

        const checkboxValidate = ({selector, message, parentSelector}) => {
            const isChecked = Array.from(selector).some(item => item.checked == true);
            if (!isChecked) {
                validateMessage(message, parentSelector);
                console.log(selector);
                selector[0].focus();
                return false;
            }
            return true;
        }

        const dateValidate = ({selector, message, parentSelector}) => {
            if (!(selector.value)) {
                validateMessage(message, parentSelector);
                console.log(selector);
                selector.focus();
                return false;
            } 
            return true;
        }

        const textValidate = ({selector, message, parentSelector, secondMessage}) => {
            if (selector.value.length == 0) {
                validateMessage(message, parentSelector);
                selector.focus();
                return false;
            } else if (selector.value.length <= 5) {
                validateMessage(secondMessage, parentSelector);
                selector.focus();
                return false;
            }
            return true;
        }

        const phoneValidate = ({selector, message, parentSelector, secondMessage}) => {
            if (selector.value.length == 0) {
                validateMessage(message, parentSelector);
                selector.focus();
                return false;
            } else if (selector.value.length < 12) {
                validateMessage(secondMessage, parentSelector);
                selector.focus();
                return false;
            }
            return true;
        }

        const emailValidate = ({selector, message, parentSelector, secondMessage}) => {
            if (selector.value.length == 0) {
                validateMessage(message, parentSelector);
                selector.focus();
                return false;
            } else if (!selector.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/i)) {
                validateMessage(secondMessage, parentSelector);
                selector.focus();
                return false;
            }
            return true;
        }

        const robotValidate = ({selector, message, parentSelector}) => {
            if (selector.value != '') {
                validateMessage(message, parentSelector);
                return false;
            }
            return true;
        }

        const isRobot = robotValidate({
            selector: document.querySelector('#robot'),
            message: '*Це поле має бути порожнє',
            parentSelector: document.querySelector('.form__robot'),
        })

        const policy = checkboxValidate({
            selector: document.querySelectorAll('#privat-policy'),
            message: '*Потрібна ваша згода',
            parentSelector: document.querySelector('.form__policy'),
        })

        const email = emailValidate({
            selector: document.querySelector('#email'),
            parentSelector: document.querySelector('.form__email'),
            message: '*Електронна пошта обов`язкова',
            secondMessage: '*Некоректна електронна пошта'
        })

        const phone = phoneValidate({
            selector: document.querySelector('#parentsPhone'),
            message: '*Номер телефону обов`язковий',
            parentSelector: document.querySelector('.form__phone_parents'),
            secondMessage: '*Перевірте правильність введення номеру',
        })

        const parentName = textValidate({
            selector: document.querySelector('#parentsName'),
            message: '*Ім`я та прізвище платника обов`язкове',
            secondMessage: '*Надто коротке ім`я та прізвище',
            parentSelector: document.querySelector('.form__name_parents'),
        })

        const age = dateValidate({
            selector: document.querySelector('[data-birthday]'),
            message: '*Оберіть вік дитини',
            parentSelector: document.querySelector('.form__childBirthday'),
        })

        const childName = textValidate({
            selector: document.querySelector('#name'),
            message: '*Ім`я та прізвище дитини обов`язкове',
            secondMessage: '*Надто коротке ім`я та прізвище',
            parentSelector: document.querySelector('.form__name'),
        })

        const sex = checkboxValidate({
            selector: document.querySelectorAll('[data-sex]'),
            message: '*Оберіть стать дитини',
            parentSelector: document.querySelector('.form__sex'),
        })

        const way = checkboxValidate({
            selector: document.querySelectorAll('[data-way]'),
            message: '*Оберіть напрям трансферу',
            parentSelector: document.querySelector('.form__way'),
        })

        const dateCamp = checkboxValidate({
            selector: document.querySelectorAll('[data-checkbox]'),
            message: '*Оберіть дату табірної зміни',
            parentSelector: document.querySelector('.form__camp'),
        })

        return isRobot && policy && phone && parentName && email && childName && way && sex && age && dateCamp && true;  
    }
});
