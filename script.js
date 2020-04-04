'use strict'

const myImages = [
  'img/bullmet.png',
  'img/header.jpg',
  'img/history-c1.jpg',
  'img/history-c2.jpg',
  'img/history-c3.jpg',
  'img/history-c1.jpg',
  'img/history-header.jpg',
  'img/next.svg',
];

const buildProducts = {
  allProducts:[
    'img/product-1.png',
    'img/product-2.png',
    'img/product-3.png',
    'img/product-4.png',
    'img/product-5.png',
    'img/product-6.png',
  ],
  productUrls:[
    'https://dribbble.com/shots/10881367-Monster-Kids-Sketch-WIP',
    'https://dribbble.com/shots/10880032-Mixology-Animated-II',
    'https://dribbble.com/shots/10866250-Spectre-Pizza-Cult-Leader',
    'https://dribbble.com/shots/10863887-Playstation-5-User-Interface-Concept',
    'https://dribbble.com/shots/10842002-Squatchin-Character-Design',
    'https://dribbble.com/shots/10821781-Ruckus-Racoon-is-Back',
  ],
  productInfo:[
    'Chivas product 1',
    'Chivas product 2',
    'Chivas product 3',
    'Chivas product 4',
    'Chivas product 5',
    'Chivas product 6',
  ],
}


const loadImages =  async function(imageUrlArray) {
  const promiseArray = [];
  const imageArray = [];

  for (let imageUrl of imageUrlArray) {

      promiseArray.push(new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.src = imageUrl;
          imageArray.push(img);
      }));
  }
  await Promise.all(promiseArray);
  return imageArray;
};

const main = () => {
  const components = new function() {
    this.sectionBrHeader = 
    `
    <section class="br-header animation-start-app">
      <img src="img/bullmet.png" alt="">
    </section>
    `;
    this.sectionBrSwiperControllers = 
    `
      <div class="left-button"></div>
      <div class="right-button"></div>
    `;
    this.sectionBrSwiper = 
    `
    <section class="br-swiper animation-start-app">
      <h1>Descubre nuestros productos</h1>
      <article class="br-swiper-container">
        ${this.sectionBrSwiperControllers}
        <article class="br-swiper-wrapper"></article>
        <article class="br-swipe-product-info">
          <p></p>
          <a target="_blank">
            <button>COMPRAR</button>
          </a>
        </article>
      </article>
    </section>
    `;
    this.sectionBrHystoryMainContent = 
    `
    <article class="br-history-full-img"></article>
    <article class="br-history-ctnt animation-start-app">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula dolor, mattis ut ornare vel,
        commodo sed tortor. Ut sed sapien dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Vestibulum augue magna, feugiat sit amet metus nec, ullamcorper pharetra orci. Curabitur at fringilla ex,
        aliquam vulputate nibh. Quisque eget est leo. Aliquam iaculis, est ac volutpat ultrices, massa nibh volutpat
        lectus, vel bibendum mi eros vel velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eget
        eleifend justo. Curabitur non lectus eget felis porta ultricies. Morbi ultricies nulla convallis nulla
        pharetra, nec vehicula magna consectetur. Vestibulum luctus tempus mi sit amet pretium. Aliquam feugiat
        venenatis est, a porta dui varius vitae. Praesent dapibus neque magna, a venenatis ante ornare a.
        Curabitur ac tempor est. In nec mi non lectus pretium congue a vel justo.
      </p>
      <p>
        Phasellus imperdiet tempus
        odio, non venenatis est molestie et. Nunc metus purus, volutpat ac ligula et, porta posuere risus. Curabitur
        fringilla leo porta metus lobortis accumsan. Pellentesque facilisis mi vel odio aliquet lacinia. Proin eu erat 
        eget quam auctor lobortis. Fusce non nisi vitae erat mollis viverra. Phasellus tempor egestas lectus.
        Aliquam in convallis libero. Sed elit est, pretium sed volutpat ac, interdum dictum nisl.
        Suspendisse auctor lectus ante, sit amet maximus magna lobortis in. Aenean sagittis condimentum euismod.
        Aliquam neque lacus, mollis nec est a, luctus mollis augue. Nullam dapibus nec diam ac pulvinar.
      </p>
    </article>
    `;
    this.sectionBrHystorySecondaryImages = 
    `
    <article class="br-history-se-ctnt-block-img-container">
      <article class="br-history-se-ctnt-block-img">
        <img src="img/history-c1.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-img">
        <img src="img/history-c2.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-img">
        <img src="img/history-c3.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-img">
        <img src="img/history-c4.jpg" alt="">
      </article>
    </article>
    `;
    this.sectionBrHystorySecondaryTexts = 
    `
    <article class="br-history-se-ctnt-block">
      <article class="br-history-se-ctnt-block-text">
        <h2>
          Title column 1
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo neque, non ullamcorper arcu.
          Aliquam erat volutpat. Fusce elementum bibendum ipsum, vitae lobortis risus aliquam et.
          Nulla tempus nisl at urna lacinia tempus. Fusce bibendum, elit id laoreet scelerisque, nisl ex eleifend velit,
          in maximus nulla magna ac libero. In hac habitasse platea dictumst. Phasellus dictum sollicitudin mi et sodales.
        </p>
      </article>
      <article class="br-history-se-ctnt-block-text">
        <h2>
          Title column 2
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo neque, non ullamcorper arcu.
          Aliquam erat volutpat. Fusce elementum bibendum ipsum, vitae lobortis risus aliquam et.
          Nulla tempus nisl at urna lacinia tempus. Fusce bibendum, elit id laoreet scelerisque, nisl ex eleifend velit,
          in maximus nulla magna ac libero. In hac habitasse platea dictumst. Phasellus dictum sollicitudin mi et sodales.
        </p>
      </article>
    </article>
    `;
    this.sectionBrHystorySecondaryContent = 
    `
    <article class="br-history-se-ctnt">
    ${this.sectionBrHystorySecondaryImages}
    ${this.sectionBrHystorySecondaryTexts}
    </article>
    `;
    this.sectionBrHistory = 
    `
    <section class="br-history animation-start-app">
      <h1>Conoce nuestra historia</h1>
      ${this.sectionBrHystoryMainContent}
      ${this.sectionBrHystorySecondaryContent}
    </section>
    `;
  }

  const templates = new function() {

    this.main =
    `
    ${components.sectionBrHeader}
    ${components.sectionBrSwiper}
    ${components.sectionBrHistory}
    `;
    
    this.initMainTemplate = () => {
      document.querySelector('main').innerHTML = this.main;
    };

    this.initAllTemplates = () => {
      this.initMainTemplate();
    };
  };

  templates.initAllTemplates();

  const selectors = new function () {
    this.page = document.querySelector('body');
    this.brSwiper = this.page.querySelector('.br-swiper');
    this.brSwiperContainer = this.brSwiper.querySelector('.br-swiper-container');    
    this.brSwiperLeftButton = this.brSwiperContainer.querySelector('.left-button');    
    this.brSwiperRightButton = this.brSwiperContainer.querySelector('.right-button');    
    this.brSwiperWrapper = this.brSwiperContainer.querySelector('.br-swiper-wrapper');
    this.brSwiperProductInfo = this.brSwiperContainer.querySelector('.br-swipe-product-info p');
    this.brSwiperProductCTA = this.brSwiperContainer.querySelector('.br-swipe-product-info a');
    this.brSwiperFocus; 
    this.brSwiperNext; 
    this.brSwiperPrev;     
  };

  const model = new function(){
    this.swiperMainPosition = 0;
    this.containerWidth = 0;
    this.productWidth = 0;
    this.productsToShow = 5;
    this.productList = [];
    this.lockPosition = 0;
  };

  const view = new function() {
    this.createProduct = (img, position, productLink, productInfo) => {
      const product = document.createElement("div");
      product.classList.add('default');
      product.setAttribute('data-list', position);
      product.setAttribute('data-product', productInfo);
      const link = document.createElement("a");
      link.setAttribute('href', productLink);
      link.setAttribute('target', "_blank");
      product.appendChild(link);
      link.appendChild(img);
      return product
    };
    this.createProductList = () => {
      buildProducts.allProducts.forEach((product, index) => {
        const newImg = new Image();
        newImg.setAttribute('src', product);
        const newProduct = this.createProduct(newImg, index, buildProducts.productUrls[index], buildProducts.productInfo[index]);
        selectors.brSwiperWrapper.appendChild(newProduct);
      });
      this.setProductElements();
      this.setProductWidth();
    };
    this.setProductElements = () => {
      model.productList = [...document.querySelectorAll('.default')];
    }
    this.setProductWidth = () => {
      model.containerWidth = selectors.brSwiperContainer.offsetWidth
      model.productWidth = model.containerWidth / model.productsToShow;
      model.productList.forEach((product) => {
        product.style.width = `${model.productWidth}px`
      });
    };
    this.setStartingPosition = () => {
      const centralPosition = Math.ceil(model.productList.length / 2);
      const swiperPosition = Math.ceil((model.productList.length - model.productsToShow) / 2);
      selectors.brSwiperFocus = model.productList[centralPosition];
      selectors.brSwiperPrev = model.productList[centralPosition - 1];
      selectors.brSwiperPrev.addEventListener('click', events.onPrevious);
      selectors.brSwiperNext = model.productList[centralPosition + 1];
      selectors.brSwiperNext.addEventListener('click', events.onNext);
      selectors.brSwiperFocus.classList.add('focus');
      selectors.brSwiperPrev.classList.add('prev');      
      selectors.brSwiperNext.classList.add('next');
      selectors.brSwiperWrapper.style.left = `-${model.productWidth * swiperPosition}px`;
      this.createProductCTA(selectors.brSwiperFocus)
    };
    this.createProductCTA = (selector) => {
      const productInfo = selector.getAttribute('data-product');
      const productLink = selector.querySelector('a').getAttribute('href');
      selectors.brSwiperProductInfo.innerHTML = productInfo;
      selectors.brSwiperProductCTA.setAttribute('href', productLink );
    };
    this.cleanClassAndEvents = () => {
      selectors.brSwiperNext.removeEventListener('click', events.onNext);
      selectors.brSwiperPrev.removeEventListener('click', events.onPrevious);
      selectors.brSwiperNext.classList.remove('next');
      selectors.brSwiperPrev.classList.remove('prev');
      selectors.brSwiperFocus.classList.remove('focus');
    };
    this.swipeOne = (direction) => {
      const previousLeft = parseFloat(selectors.brSwiperWrapper.style.left);
      direction === 'left' && (selectors.brSwiperWrapper.style.left = `${ previousLeft - model.productWidth}px`);
      direction === 'right' && (selectors.brSwiperWrapper.style.left = `${ previousLeft + model.productWidth}px`);
    };
    this.resetClasses = () => {
      model.productList.forEach((product) => {
        product.removeEventListener('click', events.onNext);
        product.removeEventListener('click', events.onPrevious);
        product.classList.remove('focus');
        product.classList.remove('prev');
        product.classList.remove('next');
      });
    };
  };

  const events = new function() {
    this.resizeProductAndPosition = (e) => {
      const previousWidth = model.productWidth;
      const previousLeft = parseFloat(selectors.brSwiperWrapper.style.left);
      view.setProductWidth();
      const reducctionFactor = previousWidth / model.productWidth;
      selectors.brSwiperWrapper.style.left = `${ previousLeft / reducctionFactor}px`;
      if(e.target.innerWidth < 750) {
        view.resetClasses();
        model.productsToShow = 3;
        view.setStartingPosition()
      } else if ((e.target.innerWidth > 750)) {
        view.resetClasses();
        model.productsToShow = 5;
        view.setStartingPosition()
      };
    };
    this.onPrevious = () => {
      if(selectors.brSwiperFocus.previousSibling){
        view.cleanClassAndEvents();
        selectors.brSwiperNext = selectors.brSwiperFocus;
        selectors.brSwiperNext.classList.add('next');
        selectors.brSwiperNext.addEventListener('click', events.onNext);
        
        selectors.brSwiperFocus = selectors.brSwiperPrev;
        selectors.brSwiperFocus.classList.add('focus');
        view.createProductCTA(selectors.brSwiperFocus);
  
        if(selectors.brSwiperPrev.previousSibling) {
          selectors.brSwiperPrev = selectors.brSwiperPrev.previousSibling;
          selectors.brSwiperPrev.classList.add('prev');
          selectors.brSwiperPrev.addEventListener('click', events.onPrevious);
        }
        view.swipeOne('right');
      }
    };
    this.onNext = () => {
      if(selectors.brSwiperFocus.nextSibling){
      view.cleanClassAndEvents();
      selectors.brSwiperPrev = selectors.brSwiperFocus;
      selectors.brSwiperPrev.classList.add('prev');
      selectors.brSwiperPrev.addEventListener('click', events.onPrevious);
      
      selectors.brSwiperFocus = selectors.brSwiperNext;
      selectors.brSwiperFocus.classList.add('focus');
      view.createProductCTA(selectors.brSwiperFocus)

      if(selectors.brSwiperNext.nextSibling) {
        selectors.brSwiperNext = selectors.brSwiperNext.nextSibling;
        selectors.brSwiperNext.classList.add('next');
        selectors.brSwiperNext.addEventListener('click', events.onNext);
      }
      view.swipeOne('left');
    }
    };
    this.lock = (e) => {
      model.lockPosition = this.unify(e).clientX;
    };
    this.move = (e) => {
      if(model.lockPosition > this.unify(e).clientX) {
        this.onNext();
      } else if (model.lockPosition < this.unify(e).clientX) {
        this.onPrevious();
      }
    };
    this.unify = (e) => { return e.changedTouches ? e.changedTouches[0] : e };
  };

  if ((window.innerWidth < 750)) {
    view.resetClasses();
    model.productsToShow = 3;
  };
  view.createProductList();
  view.setStartingPosition();
  window.addEventListener('resize', events.resizeProductAndPosition);
  selectors.brSwiperContainer.addEventListener('mousedown', events.lock);
  selectors.brSwiperContainer.addEventListener('touchstart', events.lock);
  selectors.brSwiperContainer.addEventListener('mouseup', events.move);
  selectors.brSwiperContainer.addEventListener('touchend', events.move);
  selectors.brSwiperLeftButton.addEventListener('click', events.onPrevious);
  selectors.brSwiperRightButton.addEventListener('click', events.onNext);

};

loadImages([...myImages,...buildProducts.allProducts]).then((images) => {
  window.addEventListener('load',main);
});