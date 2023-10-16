const formMessage = document.getElementById('message');
const hamburger = document.querySelector('.burger__card__btn');
const chickenBurger = document.querySelector('.chicken-burger__card__btn');
const cheeseBurger = document.querySelector('.cheeseburger__card__btn');
const donerBurger = document.querySelector('.doner-burger__card__btn');
const turkeyBurger = document.querySelector('.turkeyburger__card__btn');
const fishBurger = document.querySelector('.fish-burger__card__btn');
const doubleBurger = document.querySelector('.double__burger__card__btn');
const mushroomBurger = document.querySelector('.mushroom-burger__card__btn');
const bbqBurger = document.querySelector('.bbq__burger__card__btn');

let price = 0;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;





hamburger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 30000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Hamburger ----- 30.000 UZS';
  }
)
chickenBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 25000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Chicken burger ----- 25.000 UZS';
  }
)
fishBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 35000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.append(orderList)
    orderList.textContent = 'Fishburger ----- 35.000 UZS';
  }
)
cheeseBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 30000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Cheeseburger ----- 30.000 UZS';
  }
)
doubleBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 40000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Doubleburger ----- 40.000 UZS';
  }
)
bbqBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 35000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'BBQburger ----- 35.000 UZS';
  }
)
donerBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 30000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Donerburger ----- 30.000 UZS';
  }
)
turkeyBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 35000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Turkeyburger ----- 35.000 UZS';
  }
)
mushroomBurger.addEventListener("click", function(e) {
  e.preventDefault("");
  price += 45000;
  document.querySelector(".price__title").textContent = `Narx : ${price} UZS`;
    let orderList = document.createElement("P");
    orderList.classList.add("order-list")
    formMessage.appendChild(orderList)
    orderList.textContent = 'Mushroomburger ----- 45.000 UZS';
  }
)