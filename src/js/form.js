"use strict";

import createTrainTable from './utils/createTrainTable.js'

document.addEventListener("DOMContentLoaded", () => {
  const URL =
    "https://script.google.com/macros/s/AKfycbzFFVNAB0c7W9BRZOp7fyXeelxG-ckea8vbVeEQZjFY_8ggYbJVnn9aPlM5Vqh_P7Vu5Q/exec";
  const modal = document.querySelector("[data-modal]");
  const form = document.querySelector("form");

  const message = {
    successTitle: "Дякуємо!",
    successImg: "img/modal/done-icon.png",
    successDescr:
      "Ваше замовлення невдовзі буде опрацьоване. Очікуйте рахунок для оплати на електронну пошту.",
    failerTitle: "Йой, халепа!",
    failerImg: "img/modal/error-icon.png",
    failerDescr: "Щось пішло не так, спробуйте пізніше",
  };

  const transferCards = [
    {
      title: "Трансфер Київ",
      id: 'book-kiev',
      isTrain: true,
      isBus: false,
      img: "train",
      description: "Проїзд у вагоні купе потягом:",
      trainToTheCamp: {
        toTheCamp: "до табору потяг:",
        trainNumber: "№95",
        trainLink:
          "https://uz.gov.ua/passengers/timetable/?ntrain=70824&by_id=1",
        startCity: "Київ",
        startTime: "19:57",
        endCity: "Татарів-Буковель",
        endTime: "08:12",
        toTrainTable: createTrainTable(
          "Київ - Татарів-Буковель",
          ["Київ-Пас.", "--", "19 : 57", true],
          ["Львів", "02 : 56", "03 : 48", false],
          ["Івано-Франківськ", "05 : 59", "06 : 19", false],
          ["Надвірна", "07 : 01", "07 : 03", false],
          ["Яремче", "07 : 41", "07 : 44", false],
          ["Татарів-Буковель", "08 : 12", "08 : 17", true],
        ),
      },
      trainFromTheCamp: {
        fromTheCamp: "з табору потяг:",
        trainNumber: "№96",
        trainLink:
          "https://uz.gov.ua/passengers/timetable/?ntrain=70824&by_id=1",
        startCity: "Татарів-Буковель",
        startTime: "21:37",
        endCity: "Київ",
        endTime: "10:01",
        fromTrainTable: createTrainTable(
          "Татарів-Буковель - Київ",
          ["Татарів-Буковель", "21 : 32", "21 : 37", true],
          ["Яремче", "22 : 05", "22 : 08", false ],
          ["Надвірна", "22 : 43", "22 : 45", false],
          ["Івано-Франківськ", "23 : 18", "23 : 46", false],
          ["Львів", "02 : 06", "03 : 35", false],
          ["Коростень", "08 : 11", "08 : 13", false],
          ["Київ-Пас.", "10 : 01", "--", true]
        ),
      },
      attention:
        "Номер потяга та станція може змінюватися. При будь-яких змінах ми вас повідомимо завчасно.",
      firstBenefit:
        "Проїзд приватним автобусом з вокзалу до табору та назад (15 км).",
      secondBenefit: "Супровід педагогами-організаторами на всьому шляху.",
      thirdBenefit: "Харчування на зворотному шляху (обід у таборі та вечеря)",
      price: {
        firstPriceDescr: "В дві сторони - ",
        firstPrice: "4 950 грн.",
        secondPriceDescr: "Київ - Буковель - ",
        secondPrice: "2 850 грн.",
        thirdPriceDescr: "Буковель - Київ - ",
        thirdPrice: "2 850 грн.",
      },
      inStock: true,
      message: "Місць немає",
    },
    {
      title: "Трансфер Львів",
      id: "book-lviv",
      isTrain: false,
      isBus: true,
      img: "bus",
      description: "Проїзд автобусом у супроводі педагогів-організаторів.",
      trainToTheCamp: {},
      trainFromTheCamp: {},
      busToTheCamp:
        "Виїзд від центрального залізничного вокзалу м. Львів о 8:00 в день початку табірної зміни.",
      busFromTheCamp:
        "На зворотньому шляху: Виїзд з Буковеля о 9:00 Прибуття у Львів на зд вокзал 14:00 - 15:00 (приблизний час)",
      price: {
        firstPriceDescr: "В дві сторони - ",
        firstPrice: "3 450 грн.",
        secondPriceDescr: "Львів - Буковель - ",
        secondPrice: "1 850 грн.",
        thirdPriceDescr: "Буковель - Львів - ",
        thirdPrice: "1 850 грн.",
      },
      inStock: true,
      message: "Місць немає",
    },
    {
      title: "Трансфер Івано-Франківськ",
      id: "book-if",
      isTrain: false,
      isBus: true,
      img: "bus",
      description: "Проїзд автобусом у супроводі педагогів-організаторів.",
      trainToTheCamp: {},
      trainFromTheCamp: {},
      busToTheCamp:
        "Виїзд від центрального залізничного вокзалу м. Івано-Франківськ о 10:30 в день початку табірної зміни.",
      busFromTheCamp:
        "На зворотньому шляху: Виїзд з Буковеля о 9:00 в Івано-Франківськ на залізничний вокзал 10:30 - 11:00",
      price: {
        firstPriceDescr: "В дві сторони - ",
        firstPrice: "1 500 грн.",
        secondPriceDescr: "Франківськ - Буковель - ",
        secondPrice: "800 грн.",
        thirdPriceDescr: "Буковель - Франківськ - ",
        thirdPrice: "800 грн.",
      },
      inStock: true,
      message: "Місць немає",
    },
  ];

  const notes = [
    {
      note: `Якщо Ви бажаєте щоб Ваша дитина їхала разом з другом, братом, чи сестрою в одному купе, то вкажіть будь ласка його/її прізвище та ім'я тут.  ЗАУВАЖТЕ, ЩО В ОДНОМУ КУПЕ МОЖУТЬ ЇХАТИ ТІЛЬКИ 4 ДИТИНИ, А ТАКОЖ ХЛОПЦІ І ДІВЧАТА ЇДУТЬ В ОКРЕМИХ КУПЕ!`,
    },
    { note: `` },
    { note: `` },
  ];

  const transfersWay = [
    {
      title: "Трансфер Київ",
      input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Київ - Буковель - Київ" name="Напрямок" data-price="4950" data-way >
                <label for="way-both">Київ - Буковель - Київ</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-kyiv-bukovel" value="Київ - Буковель" name="Напрямок" data-price="2850" data-way >
                <label for="way-kyiv-bukovel">Київ - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-kyiv" value="Буковель - Київ" name="Напрямок" data-price="2850" data-way >
                <label for="way-bukovel-kyiv">Буковель - Київ</label>
            </div>
            `,
    },
    {
      title: "Трансфер Львів",
      input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Львів - Буковель - Львів" name="Напрямок" data-price="3450" data-way>
                <label for="way-both">Львів - Буковель - Львів</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-lviv-bukovel" value="Львів - Буковель" name="Напрямок" data-price="1850" data-way>
                <label for="way-lviv-bukovel">Львів - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-lviv" value="Буковель - Львів" name="Напрямок" data-price="1850" data-way>
                <label for="way-bukovel-lviv">Буковель - Львів</label>
            </div>
            `,
    },
    {
      title: "Трансфер Івано-Франківськ",
      input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Франківськ - Буковель - Франківськ" name="Напрямок" data-price="1500" data-way>
                <label for="way-both">Франківськ - Буковель - Франківськ</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-if-bukovel" value="Франківськ - Буковель" name="Напрямок" data-price="800" data-way>
                <label for="way-if-bukovel">Івано-Франківськ - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-if" value="Буковель - Франківськ" name="Напрямок" data-price="800" data-way>
                <label for="way-bukovel-if">Буковель - Івано-Франківськ</label>
            </div>
            `,
    },
  ];

  const createCampDate = (value, id, isInStock) => {
    const camp = document.createElement("div");
    camp.classList.add("form__camp-input");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = value;
    input.id = id;
    input.setAttribute("data-checkbox", true);

    camp.append(input);

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = value;
    label.style = "margin-left: 5px";
    camp.append(label);

    if (!isInStock) {
      input.setAttribute("disabled", true);
      label.classList.add("campDisabled");

      const span = document.createElement("span");
      span.classList.add("campDisabled");
      span.classList.add("campDisabledSpan");
      span.textContent = "(квитки продано)";
      camp.append(span);
    }

    return camp;
  };

  const createCampDateLegend = () => {
    const legend = document.createElement("legend");
    legend.textContent = "Дата заїзду";

    return legend;
  };

  const CAMP_DATES = [
    [
      createCampDateLegend(),
      createCampDate("06.06.2025-19.06.2025", "camp-1", true),
      createCampDate("20.06.2025-03.07.2025", "camp-2", false),
      createCampDate("04.07.2025-17.07.2025", "camp-3", true),
      createCampDate("18.07.2025-31.07.2025", "camp-4", true),
      createCampDate("01.08.2025-14.08.2025", "camp-5", true),
      createCampDate("15.08.2025-28.08.2025", "camp-6", true),
    ],
    [
      createCampDateLegend(),
      createCampDate("06.06.2025-19.06.2025", "camp-1", true),
      createCampDate("20.06.2025-03.07.2025", "camp-2", true),
      createCampDate("04.07.2025-17.07.2025", "camp-3", true),
      createCampDate("18.07.2025-31.07.2025", "camp-4", true),
      createCampDate("01.08.2025-14.08.2025", "camp-5", true),
      createCampDate("15.08.2025-28.08.2025", "camp-6", true),
    ],
    [
      createCampDateLegend(),
      createCampDate("06.06.2025-19.06.2025", "camp-1", true),
      createCampDate("20.06.2025-03.07.2025", "camp-2", true),
      createCampDate("04.07.2025-17.07.2025", "camp-3", true),
      createCampDate("18.07.2025-31.07.2025", "camp-4", true),
      createCampDate("01.08.2025-14.08.2025", "camp-5", true),
      createCampDate("15.08.2025-28.08.2025", "camp-6", true),
    ],
  ];

  class Card {
    constructor(
      title,
      id,
      isTrain,
      isBus,
      image,
      description,
      toTheCamp,
      toTrainNumber,
      toTrainLink,
      toStartCity,
      toStartTime,
      toEndCity,
      toEndTime,
      toTrainTable,
      fromTheCamp,
      fromTrainNumber,
      fromTrainLink,
      fromStartCity,
      fromStartTime,
      fromEndCity,
      fromEndTime,
      fromTrainTable,
      busToTheCamp,
      busFromTheCamp,
      attention,
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
      this.id = id;
      this.img = image;
      this.descr = description;
      this.firstPriceDescr = firstPriceDescr;
      this.firstPrice = firstPrice;
      this.secondPriceDescr = secondPriceDescr;
      this.secondPrice = secondPrice;
      this.thirdPriceDescr = thirdPriceDescr;
      this.thirdPrice = thirdPrice;
      this.inStock = inStock;
      this.message = message;
      this.btn = btn;

      if (isTrain) {
        this.toTheCamp = toTheCamp;
        this.toTrainNumber = toTrainNumber;
        this.toTrainLink = toTrainLink;
        this.toStartCity = toStartCity;
        this.toStartTime = toStartTime;
        this.toEndCity = toEndCity;
        this.toEndTime = toEndTime;
        this.toTrainTable = toTrainTable;
        this.fromTheCamp = fromTheCamp;
        this.fromTrainNumber = fromTrainNumber;
        this.fromTrainLink = fromTrainLink;
        this.fromStartCity = fromStartCity;
        this.fromStartTime = fromStartTime;
        this.fromEndCity = fromEndCity;
        this.fromEndTime = fromEndTime;
        this.fromTrainTable = fromTrainTable;
      } else {
        this.toTheCamp = "";
        this.toTrainNumber = "";
        this.toTrainLink = "#";
        this.toStartCity = "";
        this.toStartTime = "";
        this.toEndCity = "";
        this.toEndTime = "";
        this.toTrainTable = "";
        this.fromTheCamp = "";
        this.fromTrainNumber = "";
        this.fromTrainLink = "#";
        this.fromStartCity = "";
        this.fromStartTime = "";
        this.fromEndCity = "";
        this.fromEndTime = "";
        this.fromTrainTable = "";
      }

      if (isBus) {
        this.busToTheCamp = busToTheCamp;
        this.busFromTheCamp = busFromTheCamp;
      } else {
        this.busToTheCamp = "";
        this.busFromTheCamp = "";
      }

      attention ? (this.attention = attention) : (this.attention = "");

      if (firstBenefit) {
        this.firstBenefit = firstBenefit;
      } else {
        this.firstBenefit = "";
      }

      if (secondBenefit) {
        this.secondBenefit = secondBenefit;
      } else {
        this.secondBenefit = "";
      }

      if (thirdBenefit) {
        this.thirdBenefit = thirdBenefit;
      } else {
        this.thirdBenefit = "";
      }

      if (this.inStock) {
        this.message = "";
      } else {
        this.btn = "";
      }
    }

    render() {
      const btn = document.createElement("a");
      btn.classList.add("btn", "orders__btn");
      btn.setAttribute("href", "#");
      btn.setAttribute("data-order", true);
      btn.textContent = "Забронювати";

      const div = document.createElement("div");
      div.id = this.id;
      div.classList.add("orders__card");
      div.innerHTML = `
                <img src="img/order/${this.img}.jpg" alt="${this.img}" class="orders__card-image">
                <h3 class="orders__card-title">${this.title}</h3>

                <div class="orders__card-descr">${this.descr}</div>
                <div class="divider"></div>
                <div class="orders__card-descr">
                    ${this.toTheCamp}
                    <span class="orders__train-number" id="toTrainNumber">${this.toTrainNumber}</span> <br>
                    ${this.toStartCity} <span class="strong">${this.toStartTime}</span> - ${this.toEndCity} <span class="strong">${this.toEndTime}</span>
                    ${this.busToTheCamp}
                    <div class="orders__card-table_to">${this.toTrainTable}</div>
                </div>
                <div class="orders__card-descr">
                    ${this.fromTheCamp}
                    <span class="orders__train-number" id="fromTrainNumber">${this.fromTrainNumber}</span> <br>
                    ${this.fromStartCity} <span class="strong">${this.fromStartTime}</span> - ${this.fromEndCity} <span class="strong">${this.fromEndTime}</span>
                    ${this.busFromTheCamp}
                    <div class="orders__card-table_from">${this.fromTrainTable}</div>
                </div>
                <div class="orders__card-attention">
                  ${this.attention}
                </div>
                <div class="divider"></div>
                <div class="orders__card-descr">${this.firstBenefit}</div>
                <div class="orders__card-descr">${this.secondBenefit}</div>
                <div class="orders__card-descr">${this.thirdBenefit}</div>
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

      document.querySelector(".orders__wrapper").append(div);
    }
  }

  const createCards = () => {
    transferCards.map((transfer) => {
      new Card(
        transfer.title,
        transfer.id,
        transfer.isTrain,
        transfer.isBus,
        transfer.img,
        transfer.description,
        transfer.trainToTheCamp.toTheCamp,
        transfer.trainToTheCamp.trainNumber,
        transfer.trainToTheCamp.trainLink,
        transfer.trainToTheCamp.startCity,
        transfer.trainToTheCamp.startTime,
        transfer.trainToTheCamp.endCity,
        transfer.trainToTheCamp.endTime,
        transfer.trainToTheCamp.toTrainTable,
        transfer.trainFromTheCamp.fromTheCamp,
        transfer.trainFromTheCamp.trainNumber,
        transfer.trainFromTheCamp.trainLink,
        transfer.trainFromTheCamp.startCity,
        transfer.trainFromTheCamp.startTime,
        transfer.trainFromTheCamp.endCity,
        transfer.trainFromTheCamp.endTime,
        transfer.trainFromTheCamp.fromTrainTable,
        transfer.busToTheCamp,
        transfer.busFromTheCamp,
        transfer?.attention,
        transfer.firstBenefit,
        transfer.secondBenefit,
        transfer.thirdBenefit,
        transfer.price.firstPriceDescr,
        transfer.price.firstPrice,
        transfer.price.secondPriceDescr,
        transfer.price.secondPrice,
        transfer.price.thirdPriceDescr,
        transfer.price.thirdPrice,
        transfer.inStock,
        transfer.message,
        '<a href="#" class="btn orders__btn" data-order>Забронювати</a>'
      ).render();
    });
  };

  const showTrainTable = (
    trainNumber,
    trainTable,
    numberActiveClass,
    tableActiveClass
  ) => {
    const tNumber = document.querySelector(trainNumber);
    const tTable = document.querySelector(trainTable);

    if (tNumber.classList.contains(numberActiveClass)) {
      tNumber.classList.remove(numberActiveClass);
      tTable.classList.remove(tableActiveClass);
    } else {
      tNumber.classList.add(numberActiveClass);
      tTable.classList.add(tableActiveClass);
    }
  };

  const createForms = () => {
    const btns = document.querySelectorAll(".orders__btn");

    btns.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        modal.querySelector(".modal__title").textContent =
          transfersWay[i].title;

        const campDates = [...CAMP_DATES[i]];
        modal.querySelector("#formCamp").innerHTML = "";
        campDates.forEach((camp) =>
          modal.querySelector("#formCamp").append(camp)
        );

        modal.querySelector("#formWay").innerHTML = transfersWay[i].input;
        modal.querySelector("#customNotes").innerHTML = notes[i].note;

        openModal("[data-modal]");
      });
    });
  };

  function changeForm() {
    const dayOfMonth = document.querySelector("#dayOfMonth"),
      month = document.querySelector("#month"),
      year = document.querySelector("#year");
    let transferDate = [];
    let amount = 0;
    let price;

    const handleClick = (e) => {
      if (e.target.getAttribute("data-price")) {
        price = +e.target.getAttribute("data-price");

        calcAmount();
      }

      if (e.target.hasAttribute("data-checkbox")) {
        const checkboxValue = e.target.value;
        if (e.target.checked) {
          if (!transferDate.includes(checkboxValue)) {
            transferDate.push(checkboxValue);
          }
        } else {
          transferDate = transferDate.filter((item) => item !== checkboxValue);
        }

        calcAmount();
      }

      function calcAmount() {
        if (price && transferDate) {
          amount = price * transferDate.length;
        }

        return amount;
      }

      if (amount) {
        document.querySelector("#amount").textContent = amount;
      } else {
        document.querySelector("#amount").textContent = "____";
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      formData.append("Позначка часу", parseDate(new Date()));
      formData.append("Сума", amount);
      formData.append("Дата заїзду", transferDate.join("; "));
      formData.append(
        "Дата народження",
        dayOfMonth.value + "-" + month.value + "-" + year.value
      );

      if (validate() && FormData) {
        postData(URL, formData)
          .then((data) => data.text())
          .then(() =>
            showThanksModal(
              message.successTitle,
              message.successImg,
              message.successDescr
            )
          )
          .catch(() =>
            showThanksModal(
              message.failerTitle,
              message.failerImg,
              message.failerDescr
            )
          )
          .finally(form.reset());
      }
    };

    form.removeEventListener("click", handleClick);
    form.removeEventListener("submit", handleSubmit);

    form.addEventListener("click", handleClick);
    form.addEventListener("submit", handleSubmit);
  }
  /* burger */
  const burger = document.querySelector(".promo__burger");
  const navBurger = document.querySelector(".nav__burger");
  const burgerMenu = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    burger.classList.add("promo__burger_active");
    burgerMenu.classList.add("nav_active");
  });

  navBurger.addEventListener("click", () => {
    burger.classList.remove("promo__burger_active");
    burgerMenu.classList.remove("nav_active");
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Закриваємо мобільне меню
      burger.classList.remove('promo__burger_active');
      burgerMenu.classList.remove('nav_active');

      // Плавна прокрутка
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);

      if (!targetEl) return;

      const headerOffset = 80; // зміни за потреби
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

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
      return `0${num}`;
    }
    return num;
  }

  async function postData(url, data) {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return res;
  }

  /* Modal */
  let close;
  function showThanksModal(title, img, descr) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");

    const thankModal = document.createElement("div");
    thankModal.classList.add("modal__dialog");
    thankModal.innerHTML = `
            <div class="modal-thanks">
                <div class="modal-thanks__header">
                    <div class="close close_thank" data-close>
                        <div class="close__line close__line_left"></div>
                        <div class="close__line close__line_right"></div>
                    </div>
                    <h3 class="modal-thanks__title">${title}</h3>
                </div>
                <img src="${img}" alt="icon">
                <div class="modal-thanks__descr">${descr}</div>
            </div>
        `;
    document.querySelector("[data-modal]").append(thankModal);

    setTimeout(() => {
      closeModal("[data-modal]");
      prevModalDialog.classList.remove("hide");
      thankModal.remove();
    }, 7000);

    close = document.querySelector(".close_thank");
  }

  function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("show");
    modal.classList.remove("hide");

    document.querySelector(".body__wrapper").classList.add("no-scroll");
  }

  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add("hide");
    modal.classList.remove("show");

    document.querySelector(".body__wrapper").classList.remove("no-scroll");
  }

  const closeBtn = document.querySelector("[data-close]"),
    overlay = document.querySelector("[data-modal]"),
    closeLine = document.querySelectorAll(".close__line");

  window.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target) {
      if (
        e.target === close ||
        e.target === closeBtn ||
        e.target === closeLine[0] ||
        e.target === closeLine[1] ||
        e.target === overlay
      ) {
        setTimeout(() => closeModal("[data-modal]"), 400);
      }
    }
  });

  window.addEventListener("touchend", (e) => {
    e.stopPropagation();
    if (e.target) {
      if (
        e.target === close ||
        e.target === closeBtn ||
        e.target === closeLine[0] ||
        e.target === closeLine[1] ||
        e.target === overlay
      ) {
        setTimeout(() => closeModal("[data-modal]"), 400);
      }
    }
  });

  // Validate

  let phones = document.querySelectorAll("[data-phone]");

  phones.forEach((phone) => {
    phone.addEventListener("input", () => {
      if (phone.value.length <= 13) {
        phone.value = phone.value.replace(/[^+\d]/i, "");
      } else {
        phone.value = phone.value.replace(/.$/, "");
      }
    });
  });

  function validate() {
    function validateMessage(message, parentSelector) {
      const span = document.createElement("span");
      span.classList.add("validate");
      span.textContent = message;
      parentSelector.append(span);
      setTimeout(() => {
        span.remove();
      }, 5000);
    }

    const checkboxValidate = ({ selector, message, parentSelector }) => {
      const isChecked = Array.from(selector).some(
        (item) => item.checked == true
      );
      if (!isChecked) {
        validateMessage(message, parentSelector);
        selector[0].focus();
        return false;
      }
      return true;
    };

    const selectValidate = ({ selector, parentSelector, message }) => {
      if (selector.value == "") {
        validateMessage(message, parentSelector);
        selector.focus();
        return false;
      }
      return true;
    };

    const textValidate = ({
      selector,
      message,
      parentSelector,
      secondMessage,
    }) => {
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
    };

    const phoneValidate = ({
      selector,
      message,
      parentSelector,
      secondMessage,
    }) => {
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
    };

    const emailValidate = ({
      selector,
      message,
      parentSelector,
      secondMessage,
    }) => {
      if (selector.value.length == 0) {
        validateMessage(message, parentSelector);
        selector.focus();
        return false;
      } else if (
        !selector.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)
      ) {
        validateMessage(secondMessage, parentSelector);
        selector.focus();
        return false;
      }
      return true;
    };

    const robotValidate = ({ selector, message, parentSelector }) => {
      if (selector.value != "") {
        validateMessage(message, parentSelector);
        return false;
      }
      return true;
    };

    const isRobot = robotValidate({
      selector: document.querySelector("#robot"),
      message: "*Це поле має бути порожнє",
      parentSelector: document.querySelector(".form__robot"),
    });

    const policy = checkboxValidate({
      selector: document.querySelectorAll("#privat-policy"),
      message: "*Потрібна ваша згода",
      parentSelector: document.querySelector(".form__policy"),
    });

    const email = emailValidate({
      selector: document.querySelector("#email"),
      parentSelector: document.querySelector(".form__email"),
      message: "*Електронна пошта обов`язкова",
      secondMessage: "*Некоректна електронна пошта",
    });

    const phone = phoneValidate({
      selector: document.querySelector("#parentsPhone"),
      message: "*Номер телефону обов`язковий",
      parentSelector: document.querySelector(".form__phone_parents"),
      secondMessage: "*Перевірте правильність введення номеру",
    });

    const parentName = textValidate({
      selector: document.querySelector("#parentsName"),
      message: "*Ім`я та прізвище платника обов`язкове",
      secondMessage: "*Надто коротке ім`я та прізвище",
      parentSelector: document.querySelector(".form__name_parents"),
    });

    const birthdayYear = selectValidate({
      selector: document.querySelector("#year"),
      parentSelector: document.querySelector(".form__childBirthday"),
      message: "*Оберіть рік народження вашої дитини",
    });

    const birthdayMonth = selectValidate({
      selector: document.querySelector("#month"),
      parentSelector: document.querySelector(".form__childBirthday"),
      message: "*Оберіть місяць народження вашої дитини",
    });

    const birthdayDay = selectValidate({
      selector: document.querySelector("#dayOfMonth"),
      parentSelector: document.querySelector(".form__childBirthday"),
      message: "*Оберіть число народження вашої дитини",
    });

    const childName = textValidate({
      selector: document.querySelector("#name"),
      message: "*Ім`я та прізвище дитини обов`язкове",
      secondMessage: "*Надто коротке ім`я та прізвище",
      parentSelector: document.querySelector(".form__name"),
    });

    const sex = checkboxValidate({
      selector: document.querySelectorAll("[data-sex]"),
      message: "*Оберіть стать дитини",
      parentSelector: document.querySelector(".form__sex"),
    });

    const way = checkboxValidate({
      selector: document.querySelectorAll("[data-way]"),
      message: "*Оберіть напрям трансферу",
      parentSelector: document.querySelector(".form__way"),
    });

    const dateCamp = checkboxValidate({
      selector: document.querySelectorAll("[data-checkbox]"),
      message: "*Оберіть дату табірної зміни",
      parentSelector: document.querySelector(".form__camp"),
    });

    return (
      isRobot &&
      policy &&
      phone &&
      parentName &&
      email &&
      childName &&
      way &&
      sex &&
      dateCamp &&
      birthdayDay &&
      birthdayMonth &&
      birthdayYear &&
      true
    );
  }
  /* end */
  //dimka bubka pupka

  createCards();
  createForms();
  changeForm();

  document.querySelector("#toTrainNumber").addEventListener("click", () => {
    showTrainTable(
      "#toTrainNumber",
      ".orders__card-table_to",
      "active",
      "showTable"
    );
  });

  document.querySelector("#fromTrainNumber").addEventListener("click", () => {
    showTrainTable(
      "#fromTrainNumber",
      ".orders__card-table_from",
      "active",
      "showTable"
    );
  });
});
