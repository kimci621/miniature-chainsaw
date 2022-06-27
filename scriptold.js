const body = document.querySelector('body');
const cardsWrapper = document.querySelector('.cards');
let cardsInfo = [];
window.addEventListener('DOMContentLoaded', () => {
  console.log(new Date().getTime());

});


window.addEventListener('load', () => {
  console.log(new Date().getTime());
  // getImgForCard().then(res => {
  //   cardsInfo = res.cards.map(i => i);
  //   renderNewCard(cardsInfo, cardsWrapper);
  // }).then(() => {
  //   // cardsRender();
  // })
});



const cardsRender = function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    // сомнительно?
    //data-img of first column in card 
    const firstImgUrl = card.childNodes[1].children[0].children[0].getAttribute('data-img');
    //selector of background-image
    const cardBg = card.childNodes[1];
    //selector of columns 
    const cols = cardBg.children[0];
    let dots = card.querySelectorAll('.card--img--bottom--group--dots--dot');

    //put start background image
    cardBg.style.backgroundImage = `url(${firstImgUrl})`;
    dots[0].classList.add('active');
    //changing backgroundImage
    cols.childNodes.forEach(col => {
      col.addEventListener('mouseover', (e) => {
        cardBg.style.backgroundImage = `url(${col.getAttribute('data-img')})`;
        //dots changing 
        let indexOfCol = [...e.target.parentNode.children].indexOf(e.target);
        dots.forEach(dot => { dot.classList.remove('active') });
        dots[indexOfCol].classList.add('active');
      })
    })
    //reset img on leave
    cols.addEventListener('mouseleave', (e) => {
      cardBg.style.backgroundImage = `url(${firstImgUrl})`;
      dots.forEach(dot => { dot.classList.remove('active') });
      dots[0].classList.add('active');
    })

  })
}

async function getImgForCard() {
  try {
    let newData = await fetch('./db.json');
    let data = await newData.json();
    return data;
  } catch (err) { console.err(new Error(err)); }
}

function renderNewCard(itemsLength, wrapper) {
  for (let i = 0; i < itemsLength.length; i++) {
    let newCard = document.createElement('article');
    newCard.classList.add("card");
    newCard.innerHTML = `
<a href="#" class="card--img">
  <div class="card--img--cols">
    <div class="card--img--cols--col" data-img="https://images.wbstatic.net/big/new/15610000/15615724-1.jpg">
    </div>
    <div class="card--img--cols--col"
      data-img="https://cs2.livemaster.ru/storage/2c/e7/3d8af314c42a9fe106fbac52d4ux--odezhda-dizajnerskij-kardigan-ruchnoj-raboty.jpg">
    </div>
    <div class="card--img--cols--col" data-img="https://images.wbstatic.net/big/new/11530000/11534524-2.jpg">
    </div>
    <div class="card--img--cols--col"
      data-img="https://i.pinimg.com/736x/ad/75/7c/ad757c2c2ee9542e0994c9c14b2d4efd.jpg"></div>

    <div class="card--img--cols--col"
      data-img="https://cs2.livemaster.ru/storage/2c/e7/3d8af314c42a9fe106fbac52d4ux--odezhda-dizajnerskij-kardigan-ruchnoj-raboty.jpg">
    </div>
    <div class="card--img--cols--col" data-img="https://images.wbstatic.net/big/new/11530000/11534524-2.jpg">
    </div>
    <div class="card--img--cols--col"
      data-img="https://i.pinimg.com/736x/ad/75/7c/ad757c2c2ee9542e0994c9c14b2d4efd.jpg"></div>
  </div>
  <div class="card--img--info">
    <div class="card--img--like">(\/)</div>
    <div class="card--img--bottom--group">
      <ul class="card--img--bottom--group--dots">
        <li class="card--img--bottom--group--dots--dot"></li>
        <li class="card--img--bottom--group--dots--dot"></li>
        <li class="card--img--bottom--group--dots--dot"></li>
        <li class="card--img--bottom--group--dots--dot"></li>
        <li class="card--img--bottom--group--dots--dot"></li>
        <li class="card--img--bottom--group--dots--dot"></li>
        <li class="card--img--bottom--group--dots--dot"></li>
      </ul>
      <div class="card--img--discount">10</div>
    </div>
  </div>
</a>
<a class="card--brand">brand</a>
<a class="card--name">name</a>
<div class="card--price">1000</div>
<ul class="card--sizes">
  <li class="card--sizes--item">XS</li>
</ul>
`;
    wrapper.appendChild(newCard);

  }
}
