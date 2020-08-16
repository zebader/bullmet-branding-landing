'use strict'

const main = () => {
  const selectors = new function () {
    this.page = document.querySelector('body');
    this.brSwiper = this.page.querySelector('.br-swiper');
    this.brSwiperContainer = this.brSwiper.querySelector('.br-swiper-container');    
    this.brSwiperLeftButton = this.brSwiperContainer.querySelector('.left-button');    
    this.brSwiperRightButton = this.brSwiperContainer.querySelector('.right-button');    
    this.brSwiperWrapper = this.brSwiperContainer.querySelector('.br-swiper-wrapper');
    this.brSwiperProductInfo = this.brSwiperContainer.querySelector('.br-swipe-product-info-title');
    this.brSwiperProductPrize = this.brSwiperContainer.querySelector('.br-swipe-product-info-prize');
    this.brSwiperProductCTA = this.brSwiperContainer.querySelector('.br-swipe-product-info a');
    this.brSwiperFocus; 
    this.brSwiperNext; 
    this.brSwiperPrev;     
  };

  const model = new function(){
    this.swiperMainPosition = 0;
    this.containerWidth = 0;
    this.productWidth = 0;
    this.productsToShow = 3;
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
      let centralPosition;
      let swiperPosition;
      if(model.productList.length%2 === 0) {
        centralPosition = Math.ceil(model.productList.length / 2);
        swiperPosition = Math.ceil((model.productList.length - model.productsToShow) / 2);
      } else {
        centralPosition = Math.floor(model.productList.length / 2);
        swiperPosition = Math.floor((model.productList.length - model.productsToShow) / 2);
      }
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
      const productPrize = selector.getAttribute('data-prize');
      const productLink = selector.querySelector('a').getAttribute('href');
      selectors.brSwiperProductInfo.innerHTML = productInfo;
      selectors.brSwiperProductPrize.innerHTML = productPrize;
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
        model.productsToShow = 3;
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

const mainIe = () => {
  const selectors = new function() {
    this.page = document.querySelector('body');
    this.brSwiperContainer = this.page.querySelectorAll('.br-swiper-container');
    this.brSwiperWrapper = this.page.querySelectorAll('.br-swiper-wrapper');
    this.brSwiperDefault = this.page.querySelectorAll('.default');
    this.brHistoryImgContainer = this.page.querySelectorAll('.br-history-se-ctnt-block-img-container')
    this.brHistoryImg = this.page.querySelectorAll('.br-history-se-ctnt-block-img')
    this.brHistoryTextContainer = this.page.querySelectorAll('.br-history-se-ctnt-block-text')
    this.brHistoryBlock = this.page.querySelectorAll('.br-history-se-ctnt-block');
    this.brSwiperProductInfo = this.page.querySelector('.br-swipe-product-info');
    this.brLeftButton = this.page.querySelector('.left-button');
    this.brRightButton = this.page.querySelector('.right-button');   
  }
  const view = new function() {
    this.addIeTemplate = () => {
      selectors.brLeftButton.style.display = 'none'; 
      selectors.brRightButton.style.display = 'none'; 
      selectors.brSwiperProductInfo.style.display = 'none'; 
      this.toggleIeClasses(selectors.brSwiperContainer, 'br-swiper-container',);
      this.toggleIeClasses(selectors.brSwiperWrapper, 'br-swiper-wrapper', );
      this.toggleIeClasses(selectors.brSwiperDefault, 'default' );
      this.toggleIeClasses(selectors.brHistoryImgContainer, 'br-history-se-ctnt-block-img-container');
      this.toggleIeClasses(selectors.brHistoryImg, 'br-history-se-ctnt-block-img');
      this.toggleIeClasses(selectors.brHistoryTextContainer, 'br-history-se-ctnt-block-text');    
      this.toggleIeClasses(selectors.brHistoryBlock, 'br-history-se-ctnt-block');
      this.addProductCTA();
    }
    this.toggleIeClasses = (selectorsNode, className) => {
      const selectorsListToArray = Array.apply(null, selectorsNode);
      selectorsListToArray.forEach((e) => {
        e.className = "";
        e.classList.add(`${className}-ie`);
      });
    }
    this.addProductCTA = () => {
      const productList = document.querySelectorAll('.default-ie');
      const productListToArray = Array.apply(null, productList);
      productListToArray.forEach((product) => {
        const productContainer = product.querySelector('a');
        var button = document.createElement("button");
        var p = document.createElement("p");
        var pPrize = document.createElement("p");
        pPrize.classList.add('br-swipe-product-info-prize-ie');
        button.innerHTML = "VER YA";
        p.innerHTML = product.getAttribute('data-product');
        pPrize.innerHTML = product.getAttribute('data-prize');
        productContainer.appendChild(p);
        productContainer.appendChild(pPrize);
        productContainer.appendChild(button);
      })
    }
  };
  view.addIeTemplate();
};

const mainNoSwiper = () => {
  const selectors = new function() {
    this.page = document.querySelector('body');
    this.brSwiperContainer = this.page.querySelectorAll('.br-swiper-container');
    this.brSwiperWrapper = this.page.querySelectorAll('.br-swiper-wrapper');
    this.brSwiperDefault = this.page.querySelectorAll('.default');
    this.brSwiperProductInfo = this.page.querySelector('.br-swipe-product-info');
    this.brLeftButton = this.page.querySelector('.left-button');
    this.brRightButton = this.page.querySelector('.right-button');   
  }
  const view = new function() {
    this.addIeTemplate = () => {
      selectors.brLeftButton.style.display = 'none'; 
      selectors.brRightButton.style.display = 'none'; 
      selectors.brSwiperProductInfo.style.display = 'none'; 
      this.toggleIeClasses(selectors.brSwiperContainer, 'br-swiper-container',);
      this.toggleIeClasses(selectors.brSwiperWrapper, 'br-swiper-wrapper', );
      this.toggleIeClasses(selectors.brSwiperDefault, 'default' );
      this.addProductCTA();
    }
    this.toggleIeClasses = (selectorsNode, className) => {
      const selectorsListToArray = Array.apply(null, selectorsNode);
      selectorsListToArray.forEach((e) => {
        e.className = "";
        e.classList.add(`${className}-ie`);
      });
    }
    this.addProductCTA = () => {
      const productList = document.querySelectorAll('.default-ie');
      const productListToArray = Array.apply(null, productList);
      productListToArray.forEach((product) => {
        const productContainer = product.querySelector('a');
        var button = document.createElement("button");
        var p = document.createElement("p");
        var pPrize = document.createElement("p");
        pPrize.classList.add('br-swipe-product-info-prize-ie');
        button.innerHTML = "VER YA";
        p.innerHTML = product.getAttribute('data-product');
        pPrize.innerHTML = product.getAttribute('data-prize');
        productContainer.appendChild(p);
        productContainer.appendChild(pPrize);
        productContainer.appendChild(button);
      })
    }
  };
  view.addIeTemplate();
};

document.addEventListener("DOMContentLoaded", function(e) {
  if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    window.addEventListener('load',mainIe);
  }
  else if (!/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    const swiperElements = document.getElementsByClassName('default').length
    if (swiperElements <= 2) window.addEventListener('load',mainNoSwiper);
    else window.addEventListener('load',main);
    
  }
});