/*
  In observer function we have delay for most visible result
*/

// cart html
const cartItem = `<a href="#">
          <div class="card--wrapper">
            <div class="card--cols">
              <div class="card--cols--col" data-img-url="./images/1.jpg"></div>
              <div class="card--cols--col" data-img-url="./images/2.jpg"></div>
              <div class="card--cols--col" data-img-url="./images/3.jpg"></div>
              <div class="card--cols--col" data-img-url="./images/4.jpg"></div>
              <div class="card--cols--col" data-img-url="./images/5.jpg"></div>
              <div class="card--cols--col" data-img-url="./images/6.jpg"></div>
              <div class="card--cols--col" data-img-url="./images/7.jpg"></div>
            </div>
            <div class="card--dots">
              <div class="card--dots--dot"></div>
              <div class="card--dots--dot"></div>
              <div class="card--dots--dot"></div>
              <div class="card--dots--dot"></div>
              <div class="card--dots--dot"></div>
              <div class="card--dots--dot"></div>
              <div class="card--dots--dot"></div>
            </div>
            <img class="card--img" src="" alt="">
          </div>
        </a>
        <div class="info--wrapper">
          <a class="card--brand info--wrapper--item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, aperiam.</a>
          <a class="card--name info--wrapper--item">name</a>
          <div class="card--price info--wrapper--item">1000</div>
          <ul class="card--sizes">
            <li class="card--sizes--item">XS</li>
          </ul></div>`;
const cardsWrapper = document.querySelector('.cards');
// creating cards
const generateCards = function (length) {
  for (let i = 0; i < length; i++) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = cartItem;
    cardsWrapper.appendChild(newCard);
  }
}
// returns img url from data attribute of first col
const getFirstImg = function (parent) {
  return parent.querySelectorAll('.card--cols--col')[0].getAttribute('data-img-url')
}
// changes img url to data attribute of first col
const setFirstImg = function (parent) {
  parent.querySelector('.card--img').src = parent.querySelectorAll('.card--cols--col')[0].getAttribute('data-img-url');
}
// changes (delete url) img url to ''/null
const setFirstImgToNull = function (parent) {
  parent.querySelector('.card--img').src = "";
}
// observer function with delay
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        setFirstImg(entry.target);
      }, 1000)
      return;
    };
    setFirstImgToNull(entry.target);
  })
})
// after dom creating
window.addEventListener('DOMContentLoaded', () => {
  generateCards(100);
})
// after dom and elements creating
window.addEventListener('load', () => {
  // getting all card from rendered documnet
  const allCards = document.querySelectorAll('.card');
  // all work with cards (hover effect and lazy load)
  allCards.forEach(card => {
    let columns = card.querySelectorAll('.card--cols--col');
    columns.forEach(column => {
      column.addEventListener('mouseover', function () {
        card.querySelector('.card--img').src = column.getAttribute('data-img-url')
      })
    })
    card.addEventListener('mouseleave', function () {
      card.querySelector('.card--img').src = getFirstImg(card);
    })
    observer.observe(card);
  })
})