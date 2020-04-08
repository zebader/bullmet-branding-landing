"use strict";
const main = () => {
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
        button.innerHTML = "VER YA";
        p.innerHTML = product.getAttribute('data-product');
        productContainer.appendChild(p);
        productContainer.appendChild(button);
      })
    }
  };
  view.addIeTemplate();
};
 window.addEventListener("load", main);
