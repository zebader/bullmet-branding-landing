"use strict";

var main = function main() {
  var selectors = new function() {
    this.page = document.querySelector("body");
    this.brSwiperContainer = this.page.querySelectorAll(".br-swiper-container");
    this.brSwiperWrapper = this.page.querySelectorAll(".br-swiper-wrapper");
    this.brSwiperDefault = this.page.querySelectorAll(".default");
    this.brHistoryImgContainer = this.page.querySelectorAll(
      ".br-history-se-ctnt-block-img-container"
    );
    this.brHistoryImg = this.page.querySelectorAll(
      ".br-history-se-ctnt-block-img"
    );
    this.brHistoryTextContainer = this.page.querySelectorAll(
      ".br-history-se-ctnt-block-text"
    );
    this.brHistoryBlock = this.page.querySelectorAll(
      ".br-history-se-ctnt-block"
    );
    this.brSwiperProductInfo = this.page.querySelector(
      ".br-swipe-product-info"
    );
    this.brLeftButton = this.page.querySelector(".left-button");
    this.brRightButton = this.page.querySelector(".right-button");
  }();
  var view = new function() {
    var _this = this;

    this.addIeTemplate = function() {
      selectors.brLeftButton.style.display = "none";
      selectors.brRightButton.style.display = "none";
      selectors.brSwiperProductInfo.style.display = "none";

      _this.toggleIeClasses(selectors.brSwiperContainer, "br-swiper-container");

      _this.toggleIeClasses(selectors.brSwiperWrapper, "br-swiper-wrapper");

      _this.toggleIeClasses(selectors.brSwiperDefault, "default");

      _this.toggleIeClasses(
        selectors.brHistoryImgContainer,
        "br-history-se-ctnt-block-img-container"
      );

      _this.toggleIeClasses(
        selectors.brHistoryImg,
        "br-history-se-ctnt-block-img"
      );

      _this.toggleIeClasses(
        selectors.brHistoryTextContainer,
        "br-history-se-ctnt-block-text"
      );

      _this.toggleIeClasses(
        selectors.brHistoryBlock,
        "br-history-se-ctnt-block"
      );

      _this.addProductCTA();
    };

    this.toggleIeClasses = function(selectorsNode, className) {
      var selectorsListToArray = Array.apply(null, selectorsNode);
      selectorsListToArray.forEach(function(e) {
        e.className = "";
        e.classList.add("".concat(className, "-ie"));
      });
    };

    this.addProductCTA = function() {
      var productList = document.querySelectorAll(".default-ie");
      var productListToArray = Array.apply(null, productList);
      productListToArray.forEach(function(product) {
        var productContainer = product.querySelector("a");
        var button = document.createElement("button");
        var p = document.createElement("p");
        button.innerHTML = "VER YA";
        p.innerHTML = product.getAttribute("data-product");
        productContainer.appendChild(p);
        productContainer.appendChild(button);
      });
    };
  }();
  view.addIeTemplate();
};

window.addEventListener("load", main);
