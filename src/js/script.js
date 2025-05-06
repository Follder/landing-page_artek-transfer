window.addEventListener("DOMContentLoaded", () => {
  //const URL = 'https://script.google.com/macros/s/AKfycbzCFVPE48nCaLfiRYJjKXTrUlAo5pM39bNJSraIklb15sqNkNlAeeWLImkiYzWgVr5L/exec'
  // const URL = 'https://script.google.com/macros/s/AKfycbzqkGNf2Dj0tqo2KExAd_uXLub3pGUj_VuCT26CFXuBvaEnGiGz521ZXcGJXCMAYuxCjQ/exec'
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
                <input type="radio" id="way-both" value="Київ - Буковель - Київ" name="Напрямок" data-price="3950" data-way >
                <label for="way-both">Київ - Буковель - Київ</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-kyiv-bukovel" value="Київ - Буковель" name="Напрямок" data-price="2450" data-way >
                <label for="way-kyiv-bukovel">Київ - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-kyiv" value="Буковель - Київ" name="Напрямок" data-price="2450" data-way >
                <label for="way-bukovel-kyiv">Буковель - Київ</label>
            </div>
            `,
    },
    {
      title: "Трансфер Львів",
      input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Львів - Буковель - Львів" name="Напрямок" data-price="2750" data-way>
                <label for="way-both">Львів - Буковель - Львів</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-lviv-bukovel" value="Львів - Буковель" name="Напрямок" data-price="1550" data-way>
                <label for="way-lviv-bukovel">Львів - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-lviv" value="Буковель - Львів" name="Напрямок" data-price="1550" data-way>
                <label for="way-bukovel-lviv">Буковель - Львів</label>
            </div>
            `,
    },
    {
      title: "Трансфер Івано-Франківськ",
      input: `
            <legend>Напрямок</legend>
            <div class="form__way-input">
                <input type="radio" id="way-both" value="Франківськ - Буковель - Франківськ" name="Напрямок" data-price="1200" data-way>
                <label for="way-both">Франківськ - Буковель - Франківськ</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-if-bukovel" value="Франківськ - Буковель" name="Напрямок" data-price="700" data-way>
                <label for="way-if-bukovel">Івано-Франківськ - Буковель</label>
            </div>
            <div class="form__way-input">
                <input type="radio" id="way-bukovel-if" value="Буковель - Франківськ" name="Напрямок" data-price="700" data-way>
                <label for="way-bukovel-if">Буковель - Івано-Франківськ</label>
            </div>
            `,
    },
  ];

  const transfersCampDate = [
    {
      title: "Київ",
      input: `
      <legend>Дата заїзду</legend>
      <div class="form__camp-input">
        <input type="checkbox" value="07.06.2024-20.06.2024" id="camp-1" data-checkbox> <label
          for="camp-1">07.06.2024-20.06.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="21.06.2024-04.07.2024" id="camp-2" data-checkbox> <label
          for="camp-2">21.06.2024-04.07.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="05.07.2024-18.07.2024" id="camp-3" data-checkbox> <label
          for="camp-3">05.07.2024-18.07.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="19.07.2024-01.08.2024" id="camp-4" data-checkbox> <label
          for="camp-4">19.07.2024-01.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="02.08.2024-15.08.2024" id="camp-5" data-checkbox> <label
          for="camp-5">02.08.2024-15.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="16.08.2024-29.08.2024" id="camp-6" data-checkbox> <label
          for="camp-6">16.08.2024-29.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="30.08.2024-08.09.2024" id="camp-7" data-checkbox> <label
          for="camp-7">30.08.2024-08.09.2024</label>
      </div>
    `,
    },
    {
      title: "Львів",
      input: `
      <legend>Дата заїзду</legend>
      <div class="form__camp-input">
        <input type="checkbox" value="07.06.2024-20.06.2024" id="camp-1" data-checkbox disabled>
          <label
            for="camp-1" class="campDisabled">07.06.2024-20.06.2024
            <span class="campDisabledSpan">(квитки продано)</span>
          </label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="21.06.2024-04.07.2024" id="camp-2" data-checkbox> <label
          for="camp-2">21.06.2024-04.07.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="05.07.2024-18.07.2024" id="camp-3" data-checkbox> <label
          for="camp-3">05.07.2024-18.07.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="19.07.2024-01.08.2024" id="camp-4" data-checkbox> <label
          for="camp-4">19.07.2024-01.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="02.08.2024-15.08.2024" id="camp-5" data-checkbox> <label
          for="camp-5">02.08.2024-15.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="16.08.2024-29.08.2024" id="camp-6" data-checkbox> <label
          for="camp-6">16.08.2024-29.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="30.08.2024-08.09.2024" id="camp-7" data-checkbox> <label
          for="camp-7">30.08.2024-08.09.2024</label>
      </div>
    `,
    },
    {
      title: "Івано-Франківськ",
      input: `
      <legend>Дата заїзду</legend>
      <div class="form__camp-input">
        <input type="checkbox" value="07.06.2024-20.06.2024" id="camp-1" data-checkbox> <label
          for="camp-1">07.06.2024-20.06.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="21.06.2024-04.07.2024" id="camp-2" data-checkbox> <label
          for="camp-2">21.06.2024-04.07.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="05.07.2024-18.07.2024" id="camp-3" data-checkbox> <label
          for="camp-3">05.07.2024-18.07.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="19.07.2024-01.08.2024" id="camp-4" data-checkbox> <label
          for="camp-4">19.07.2024-01.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="02.08.2024-15.08.2024" id="camp-5" data-checkbox> <label
          for="camp-5">02.08.2024-15.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="16.08.2024-29.08.2024" id="camp-6" data-checkbox> <label
          for="camp-6">16.08.2024-29.08.2024</label>
      </div>
      <div class="form__camp-input">
        <input type="checkbox" value="30.08.2024-08.09.2024" id="camp-7" data-checkbox> <label
          for="camp-7">30.08.2024-08.09.2024</label>
      </div>
    `,
    },
  ];

  const transfer = [
    {
      title: "Трансфер Київ",
      isTrain: true,
      isBus: false,
      img: "train",
      description: "Проїзд у вагоні купе потягом:",
      trainToTheCamp: {
        toTheCamp: "до табору потяг:",
        trainNumber: "№95",
        trainLink:
          "https://uz.gov.ua/passengers/timetable/?ntrain=75988&by_id=1",
        startCity: "Київ",
        startTime: "20:28",
        endCity: "Татарів-Буковель",
        endTime: "08:38",
      },
      trainFromTheCamp: {
        fromTheCamp: "з табору потяг:",
        trainNumber: "№96",
        trainLink:
          "https://uz.gov.ua/passengers/timetable/?ntrain=70824&by_id=1",
        startCity: "Татарів-Буковель",
        startTime: "20:10",
        endCity: "Київ",
        endTime: "09:01",
      },
      firstBenefit:
        "Проїзд приватним автобусом з вокзалу до табору та назад (15 км).",
      secondBenefit: "Супровід педагогами-організаторами на всьому шляху.",
      thirdBenefit: "Харчування на зворотному шляху (обід у таборі та вечеря)",
      price: {
        firstPriceDescr: "В дві сторони - ",
        firstPrice: "3 950 грн.",
        secondPriceDescr: "Київ - Буковель - ",
        secondPrice: "2 450 грн.",
        thirdPriceDescr: "Буковель - Київ - ",
        thirdPrice: "2 450 грн.",
      },
      inStock: true,
      message: "Місць немає",
    },
    {
      title: "Трансфер Львів",
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
        firstPrice: "2 750 грн.",
        secondPriceDescr: "Львів - Буковель - ",
        secondPrice: "1 550 грн.",
        thirdPriceDescr: "Буковель - Львів - ",
        thirdPrice: "1 550 грн.",
      },
      inStock: true,
      message: "Місць немає",
    },
    {
      title: "Трансфер Івано-Франківськ",
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
        firstPrice: "1 200 грн.",
        secondPriceDescr: "Франківськ - Буковель - ",
        secondPrice: "700 грн.",
        thirdPriceDescr: "Буковель - Франківськ - ",
        thirdPrice: "700 грн.",
      },
      inStock: true,
      message: "Місць немає",
    },
  ];

  const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    } else {
      return res.json();
    }
  };

  class Card {
    constructor(
      title,
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
      fromTheCamp,
      fromTrainNumber,
      fromTrainLink,
      fromStartCity,
      fromStartTime,
      fromEndCity,
      fromEndTime,
      busToTheCamp,
      busFromTheCamp,
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
        (this.fromTheCamp = fromTheCamp),
          (this.fromTrainNumber = fromTrainNumber);
        this.fromTrainLink = fromTrainLink;
        this.fromStartCity = fromStartCity;
        this.fromStartTime = fromStartTime;
        this.fromEndCity = fromEndCity;
        this.fromEndTime = fromEndTime;
      } else {
        this.toTheCamp = "";
        this.toTrainNumber = "";
        this.toTrainLink = "#";
        this.toStartCity = "";
        this.toStartTime = "";
        this.toEndCity = "";
        this.toEndTime = "";
        (this.fromTheCamp = ""), (this.fromTrainNumber = "");
        this.fromTrainLink = "#";
        this.fromStartCity = "";
        this.fromStartTime = "";
        this.fromEndCity = "";
        this.fromEndTime = "";
      }

      if (isBus) {
        this.busToTheCamp = busToTheCamp;
        this.busFromTheCamp = busFromTheCamp;
      } else {
        this.busToTheCamp = "";
        this.busFromTheCamp = "";
      }

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
      div.classList.add("orders__card");
      div.innerHTML = `
                <img src="img/order/${this.img}.jpg" alt="${this.img}" class="orders__card-image">
                <h3 class="orders__card-title">${this.title}</h3>
                <div class="orders__card-descr">${this.descr}</div>
                <div class="divider"></div>
                <div class="orders__card-descr">
                    ${this.toTheCamp}
                    <a href="${this.toTrainLink}" target="_blank">${this.toTrainNumber}</a> <br>
                    ${this.toStartCity} <span class="strong">${this.toStartTime}</span> - ${this.toEndCity} <span class="strong">${this.toEndTime}</span>
                    ${this.busToTheCamp}
                </div>
                <div class="orders__card-descr">
                    ${this.fromTheCamp}
                    <a href="${this.fromTrainLink}" target="_blank">${this.fromTrainNumber}</a> <br>
                    ${this.fromStartCity} <span class="strong">${this.fromStartTime}</span> - ${this.fromEndCity} <span class="strong">${this.fromEndTime}</span>
                    ${this.busFromTheCamp}
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

  getResourse("db/db.json")
    .then((data) =>
      data.transfer.forEach((obj) => {
        new Card(
          obj.title,
          obj.isTrain,
          obj.isBus,
          obj.img,
          obj.description,
          obj.trainToTheCamp.toTheCamp,
          obj.trainToTheCamp.trainNumber,
          obj.trainToTheCamp.trainLink,
          obj.trainToTheCamp.startCity,
          obj.trainToTheCamp.startTime,
          obj.trainToTheCamp.endCity,
          obj.trainToTheCamp.endTime,
          obj.trainFromTheCamp.fromTheCamp,
          obj.trainFromTheCamp.trainNumber,
          obj.trainFromTheCamp.trainLink,
          obj.trainFromTheCamp.startCity,
          obj.trainFromTheCamp.startTime,
          obj.trainFromTheCamp.endCity,
          obj.trainFromTheCamp.endTime,
          obj.busToTheCamp,
          obj.busFromTheCamp,
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
      })
    )
    .then(() => {
      const btns = document.querySelectorAll(".orders__btn");
      btns.forEach((btn, i) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();

          modal.querySelector(".modal__title").textContent =
            transfersWay[i].title;
          modal.querySelector("#formCamp").innerHTML =
            transfersCampDate[i].input;
          modal.querySelector("#formWay").innerHTML = transfersWay[i].input;
          modal.querySelector("#customNotes").innerHTML = notes[i].note;

          openModal("[data-modal]");
        });
      });

      calculateAmount();
    });

  /* burger */
  const burger = document.querySelector(".burger"),
    burgerMenu = document.querySelector(".nav__mobile");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    burgerMenu.classList.toggle("nav__mobile_active");
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

  function calculateAmount() {
    const dayOfMonth = document.querySelector("#dayOfMonth"),
      month = document.querySelector("#month"),
      year = document.querySelector("#year");
    const checkboxes = document.querySelectorAll("[data-checkbox]");
    let amount;
    let price;
    let transferDate;
    let quantity;

    form.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-price")) {
        price = +e.target.getAttribute("data-price");
      }

      console.log(checkboxes);

      transferDate = [];

      checkboxes.forEach((item, i) => {
        if (item.checked) {
          transferDate.push(checkboxes[i].getAttribute("value"));
        }
      });
      quantity = transferDate.length;
      amount = price * quantity;

      if (amount) {
        document.querySelector("#amount").textContent = amount;
      } else {
        document.querySelector("#amount").textContent = "____";
      }
    });
  }

  const dayOfMonth = document.querySelector("#dayOfMonth"),
    month = document.querySelector("#month"),
    year = document.querySelector("#year");
  const checkboxes = document.querySelectorAll("[data-checkbox]");
  let amount;
  let price;
  let transferDate;
  let quantity;

  form.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-price")) {
      price = +e.target.getAttribute("data-price");
    }

    console.log(checkboxes);

    transferDate = [];

    checkboxes.forEach((item, i) => {
      if (item.checked) {
        transferDate.push(checkboxes[i].getAttribute("value"));
      }
    });
    quantity = transferDate.length;
    amount = price * quantity;

    if (amount) {
      document.querySelector("#amount").textContent = amount;
    } else {
      document.querySelector("#amount").textContent = "____";
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    formData.append("Позначка часу", parseDate(new Date()));
    formData.append("Сума", amount);
    formData.append("Дата заїзду", transferDate.join("; "));
    formData.append(
      "Дата народження",
      dayOfMonth.value + "-" + month.value + "-" + year.value
    );

    if (validate()) {
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
  });
  form.addEventListener("reset", () => {
    document.querySelector("#amount").textContent = "____";
  });

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
    if (e.target) {
      if (
        e.target === close ||
        e.target === closeBtn ||
        e.target === closeLine[0] ||
        e.target === closeLine[1] ||
        e.target === overlay
      ) {
        closeModal("[data-modal]");
      }
    }
  });

  window.addEventListener("touchend", (e) => {
    if (e.target) {
      if (
        e.target === close ||
        e.target === closeBtn ||
        e.target === closeLine[0] ||
        e.target === closeLine[1] ||
        e.target === overlay
      ) {
        closeModal("[data-modal]");
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
        console.log(selector);
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
        !selector.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/i)
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
});
