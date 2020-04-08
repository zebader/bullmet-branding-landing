'use strict'

const main = () => {
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
      this.setProductElements()
      this.setProductWidth();
      const centralPosition = Math.ceil(model.productList.length / 2);
      const swiperPosition = Math.ceil((model.productList.length - model.productsToShow) / 2);
      selectors.brSwiperFocus = model.productList[centralPosition];
      selectors.brSwiperPrev = model.productList[centralPosition - 1];
      selectors.brSwiperPrev.addEventListener('click', events.onPrevious, false);
      selectors.brSwiperNext = model.productList[centralPosition + 1];
      selectors.brSwiperNext.addEventListener('click', events.onNext, false);
      selectors.brSwiperFocus.classList.add('focus');
      selectors.brSwiperPrev.classList.add('prev');      
      selectors.brSwiperNext.classList.add('next');
      selectors.brSwiperWrapper.style.left = `-${model.productWidth * swiperPosition}px`;
      this.createProductCTA(selectors.brSwiperFocus);
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
      if(e.target.innerWidth < 750) {
        view.resetClasses();
        model.productsToShow = 3;
        view.setStartingPosition()
      } else if ((e.target.innerWidth > 750)) {
        view.resetClasses();
        model.productsToShow = 5;
        view.setStartingPosition()
      };
      const previousWidth = model.productWidth;
      const previousLeft = parseFloat(selectors.brSwiperWrapper.style.left);
      view.setProductWidth();
      const reducctionFactor = previousWidth / model.productWidth;
      selectors.brSwiperWrapper.style.left = `${ previousLeft / reducctionFactor}px`;
    };
    this.onPrevious = () => {
      if(selectors.brSwiperFocus.previousElementSibling){
        view.cleanClassAndEvents();
        selectors.brSwiperNext = selectors.brSwiperFocus;
        selectors.brSwiperNext.classList.add('next');
        selectors.brSwiperNext.addEventListener('click', events.onNext, false);
        
        selectors.brSwiperFocus = selectors.brSwiperPrev;
        selectors.brSwiperFocus.classList.add('focus');
        view.createProductCTA(selectors.brSwiperFocus);
  
        if(selectors.brSwiperPrev.previousElementSibling) {
          selectors.brSwiperPrev = selectors.brSwiperPrev.previousElementSibling;
          selectors.brSwiperPrev.classList.add('prev');
          selectors.brSwiperPrev.addEventListener('click', events.onPrevious, false);
        }
        view.swipeOne('right');
      }
    };
    this.onNext = () => {
      if(selectors.brSwiperFocus.nextElementSibling){
      view.cleanClassAndEvents();
      selectors.brSwiperPrev = selectors.brSwiperFocus;
      selectors.brSwiperPrev.classList.add('prev');
      selectors.brSwiperPrev.addEventListener('click', events.onPrevious, false);
      
      selectors.brSwiperFocus = selectors.brSwiperNext;
      selectors.brSwiperFocus.classList.add('focus');
      view.createProductCTA(selectors.brSwiperFocus)

      if(selectors.brSwiperNext.nextElementSibling) {
        selectors.brSwiperNext = selectors.brSwiperNext.nextElementSibling;
        selectors.brSwiperNext.classList.add('next');
        selectors.brSwiperNext.addEventListener('click', events.onNext, false);
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
  view.setStartingPosition();
  window.addEventListener('resize', events.resizeProductAndPosition, true);
  selectors.brSwiperWrapper.addEventListener('mousedown', events.lock, true);
  selectors.brSwiperWrapper.addEventListener('touchstart', events.lock, true);
  selectors.brSwiperWrapper.addEventListener('mouseup', events.move, true);
  selectors.brSwiperWrapper.addEventListener('touchend', events.move, true);
  selectors.brSwiperLeftButton.addEventListener('click', events.onPrevious, true);
  selectors.brSwiperRightButton.addEventListener('click', events.onNext, true);

};

window.addEventListener('load',main);
