console.log('foo');
const cardsWrapper = document.querySelector('.cards');


function renderCard() {
  return `
  <article class="card">
    <a href="#" class="card--img">
      <div class="card--img--cols">
        <div class="card--img--cols--col" data-img="1"></div>
      </div>
      <div class="card--img--info">
        <div class="card--img--like">(\/)</div>
        <div class="card--img--bottom--group">
          <ul class="card--img--bottom--group--dots">
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
  </article>
  `
}

// cardsWrapper.append(renderCard());
