"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var myImages = [
  "img/bullmet.png",
  "img/header.jpg",
  "img/history-c1.jpg",
  "img/history-c2.jpg",
  "img/history-c3.jpg",
  "img/history-c1.jpg",
  "img/history-header.jpg",
  "img/next.svg"
];
var buildProducts = {
  allProducts: [
    "img/product-1.png",
    "img/product-2.png",
    "img/product-3.png",
    "img/product-4.png",
    "img/product-5.png",
    "img/product-6.png"
  ],
  productUrls: [
    "https://dribbble.com/shots/10881367-Monster-Kids-Sketch-WIP",
    "https://dribbble.com/shots/10880032-Mixology-Animated-II",
    "https://dribbble.com/shots/10866250-Spectre-Pizza-Cult-Leader",
    "https://dribbble.com/shots/10863887-Playstation-5-User-Interface-Concept",
    "https://dribbble.com/shots/10842002-Squatchin-Character-Design",
    "https://dribbble.com/shots/10821781-Ruckus-Racoon-is-Back"
  ],
  productInfo: [
    "Chivas product 1",
    "Chivas product 2",
    "Chivas product 3",
    "Chivas product 4",
    "Chivas product 5",
    "Chivas product 6"
  ]
};

var main = function main() {
  var components = new function() {
    var _this = this;

    this.sectionBrHeader =
      '\n    <section class="br-header animation-start-app">\n      <img src="img/bullmet.png" alt="">\n    </section>\n    ';
    this.sectionBrSwiper =
      '\n    <section class="br-swiper animation-start-app">\n      <h1>Descubre nuestros productos</h1>\n      <article class="br-swiper-container-ie">\n        <article class="br-swiper-wrapper-ie"></article>\n      </article>\n    </section>\n    ';
    this.sectionBrHystoryMainContent =
      '\n    <article class="br-history-full-img"></article>\n    <article class="br-history-ctnt animation-start-app">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula dolor, mattis ut ornare vel,\n        commodo sed tortor. Ut sed sapien dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n        Vestibulum augue magna, feugiat sit amet metus nec, ullamcorper pharetra orci. Curabitur at fringilla ex,\n        aliquam vulputate nibh. Quisque eget est leo. Aliquam iaculis, est ac volutpat ultrices, massa nibh volutpat\n        lectus, vel bibendum mi eros vel velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eget\n        eleifend justo. Curabitur non lectus eget felis porta ultricies. Morbi ultricies nulla convallis nulla\n        pharetra, nec vehicula magna consectetur. Vestibulum luctus tempus mi sit amet pretium. Aliquam feugiat\n        venenatis est, a porta dui varius vitae. Praesent dapibus neque magna, a venenatis ante ornare a.\n        Curabitur ac tempor est. In nec mi non lectus pretium congue a vel justo.\n      </p>\n      <p>\n        Phasellus imperdiet tempus\n        odio, non venenatis est molestie et. Nunc metus purus, volutpat ac ligula et, porta posuere risus. Curabitur\n        fringilla leo porta metus lobortis accumsan. Pellentesque facilisis mi vel odio aliquet lacinia. Proin eu erat \n        eget quam auctor lobortis. Fusce non nisi vitae erat mollis viverra. Phasellus tempor egestas lectus.\n        Aliquam in convallis libero. Sed elit est, pretium sed volutpat ac, interdum dictum nisl.\n        Suspendisse auctor lectus ante, sit amet maximus magna lobortis in. Aenean sagittis condimentum euismod.\n        Aliquam neque lacus, mollis nec est a, luctus mollis augue. Nullam dapibus nec diam ac pulvinar.\n      </p>\n    </article>\n    ';
    this.sectionBrHystorySecondaryImages =
      '\n    <article class="br-history-se-ctnt-block-img-container-ie">\n      <article class="br-history-se-ctnt-block-img-ie">\n        <img src="img/history-c1.jpg" alt="">\n      </article>\n      <article class="br-history-se-ctnt-block-img-ie">\n        <img src="img/history-c2.jpg" alt="">\n      </article>\n      <article class="br-history-se-ctnt-block-img-ie">\n        <img src="img/history-c3.jpg" alt="">\n      </article>\n      <article class="br-history-se-ctnt-block-img-ie">\n        <img src="img/history-c4.jpg" alt="">\n      </article>\n    </article>\n    ';
    this.sectionBrHystorySecondaryTexts =
      '\n    <article class="br-history-se-ctnt-block-ie">\n      <article class="br-history-se-ctnt-block-text-ie">\n        <h2>\n          Title column 1\n        </h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo neque, non ullamcorper arcu.\n          Aliquam erat volutpat. Fusce elementum bibendum ipsum, vitae lobortis risus aliquam et.\n          Nulla tempus nisl at urna lacinia tempus. Fusce bibendum, elit id laoreet scelerisque, nisl ex eleifend velit,\n          in maximus nulla magna ac libero. In hac habitasse platea dictumst. Phasellus dictum sollicitudin mi et sodales.\n        </p>\n      </article>\n      <article class="br-history-se-ctnt-block-text-ie">\n        <h2>\n          Title column 2\n        </h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo neque, non ullamcorper arcu.\n          Aliquam erat volutpat. Fusce elementum bibendum ipsum, vitae lobortis risus aliquam et.\n          Nulla tempus nisl at urna lacinia tempus. Fusce bibendum, elit id laoreet scelerisque, nisl ex eleifend velit,\n          in maximus nulla magna ac libero. In hac habitasse platea dictumst. Phasellus dictum sollicitudin mi et sodales.\n        </p>\n      </article>\n    </article>\n    ';
    this.sectionBrHystorySecondaryMobile =
      '\n    <article class="br-history-se-ctnt-block-img-container-ie">\n      <article class="br-history-se-ctnt-block-img-ie">\n        <img src="img/history-c1.jpg" alt="">\n      </article>\n      <article class="br-history-se-ctnt-block-text-ie">\n        <h2>\n          Title column 1\n        </h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo neque, non ullamcorper arcu.\n          Aliquam erat volutpat. Fusce elementum bibendum ipsum, vitae lobortis risus aliquam et.\n          Nulla tempus nisl at urna lacinia tempus. Fusce bibendum, elit id laoreet scelerisque, nisl ex eleifend velit,\n          in maximus nulla magna ac libero. In hac habitasse platea dictumst. Phasellus dictum sollicitudin mi et sodales.\n        </p>\n      </article>\n      <article class="br-history-se-ctnt-block-img-ie">\n        <img src="img/history-c2.jpg" alt="">\n      </article>\n      <article class="br-history-se-ctnt-block-text-ie">\n        <h2>\n          Title column 2\n        </h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae commodo neque, non ullamcorper arcu.\n          Aliquam erat volutpat. Fusce elementum bibendum ipsum, vitae lobortis risus aliquam et.\n          Nulla tempus nisl at urna lacinia tempus. Fusce bibendum, elit id laoreet scelerisque, nisl ex eleifend velit,\n          in maximus nulla magna ac libero. In hac habitasse platea dictumst. Phasellus dictum sollicitudin mi et sodales.\n        </p>\n      </article>\n    </article>\n    ';
    this.sectionBrHystorySecondaryContentDesktop = "\n    "
      .concat(this.sectionBrHystorySecondaryImages, "\n    ")
      .concat(this.sectionBrHystorySecondaryTexts, "\n    ");
    this.sectionBrHystorySecondaryContentMobile = "\n    ".concat(
      this.sectionBrHystorySecondaryMobile,
      "\n    "
    );
    this.sectionBrHystorySecondaryContent = '\n    <article class="br-history-se-ctnt">\n    '.concat(
      window.innerWidth < 750
        ? this.sectionBrHystorySecondaryContentMobile
        : this.sectionBrHystorySecondaryContentDesktop,
      "\n\n    </article>\n    "
    );
    this.sectionBrHistory = '\n    <section class="br-history animation-start-app">\n      <h1>Conoce nuestra historia</h1>\n      '
      .concat(this.sectionBrHystoryMainContent, "\n      ")
      .concat(this.sectionBrHystorySecondaryContent, "\n    </section>\n    ");
    window.addEventListener("resize", function(e) {
      if (window.innerWidth < 750) {
        document.querySelector(".br-history-se-ctnt").innerHTML =
          _this.sectionBrHystorySecondaryContentMobile;
      } else {
        document.querySelector(".br-history-se-ctnt").innerHTML =
          _this.sectionBrHystorySecondaryContentDesktop;
      }
    });
  }();
  var templates = new function() {
    var _this2 = this;

    this.main = "\n    "
      .concat(components.sectionBrHeader, "\n    ")
      .concat(components.sectionBrSwiper, "\n    ")
      .concat(components.sectionBrHistory, "\n    ");

    this.initMainTemplate = function() {
      document.querySelector("main").innerHTML = _this2.main;
    };

    this.initAllTemplates = function() {
      _this2.initMainTemplate();
    };
  }();
  templates.initAllTemplates();
  var selectors = new function() {
    this.page = document.querySelector("body");
    this.brSwiper = this.page.querySelector(".br-swiper");
    this.brSwiperContainer = this.brSwiper.querySelector(
      ".br-swiper-container-ie"
    );
    this.brSwiperLeftButton = this.brSwiperContainer.querySelector(
      ".left-button"
    );
    this.brSwiperRightButton = this.brSwiperContainer.querySelector(
      ".right-button"
    );
    this.brSwiperWrapper = this.brSwiperContainer.querySelector(
      ".br-swiper-wrapper-ie"
    );
    this.brSwiperFocus;
    this.brSwiperNext;
    this.brSwiperPrev;
  }();
  var model = new function() {
    this.swiperMainPosition = 0;
    this.containerWidth = 0;
    this.productWidth = 0;
    this.productsToShow = 5;
    this.productList = [];
    this.lockPosition = 0;
  }();
  var view = new function() {
    var _this3 = this;

    this.createProduct = function(img, position, productLink, productInfo) {
      var product = document.createElement("div");
      product.classList.add("default-ie");
      product.setAttribute("data-list", position);
      product.setAttribute("data-product", productInfo);
      var link = document.createElement("a");
      var button = document.createElement("button");
      var p = document.createElement("p");
      button.innerHTML = "VER YA";
      p.innerHTML = productInfo;
      link.setAttribute("href", productLink);
      link.setAttribute("target", "_blank");
      product.appendChild(link);
      link.appendChild(img);
      link.appendChild(p);
      link.appendChild(button);
      return product;
    };

    this.createProductList = function() {
      buildProducts.allProducts.forEach(function(product, index) {
        var newImg = new Image();
        newImg.setAttribute("src", product);

        var newProduct = _this3.createProduct(
          newImg,
          index,
          buildProducts.productUrls[index],
          buildProducts.productInfo[index]
        );

        selectors.brSwiperWrapper.appendChild(newProduct);
      });

      _this3.setProductElements();

      _this3.setProductWidth();
    };

    this.setProductElements = function() {
      model.productList = _toConsumableArray(
        document.querySelectorAll(".default")
      );
    };

    this.setProductWidth = function() {
      model.containerWidth = selectors.brSwiperContainer.offsetWidth;
      model.productWidth = model.containerWidth / model.productsToShow;
      model.productList.forEach(function(product) {
        product.style.width = "".concat(model.productWidth, "px");
      });
    };

    this.setStartingPosition = function() {
      var centralPosition = Math.ceil(model.productList.length / 2);
      var swiperPosition = Math.ceil(
        (model.productList.length - model.productsToShow) / 2
      );
      selectors.brSwiperFocus = model.productList[centralPosition];
      selectors.brSwiperPrev = model.productList[centralPosition - 1];
      selectors.brSwiperPrev.addEventListener(
        "click",
        events.onPrevious,
        false
      );
      selectors.brSwiperNext = model.productList[centralPosition + 1];
      selectors.brSwiperNext.addEventListener("click", events.onNext, false);
      selectors.brSwiperFocus.classList.add("focus");
      selectors.brSwiperPrev.classList.add("prev");
      selectors.brSwiperNext.classList.add("next");
      selectors.brSwiperWrapper.style.left = "-".concat(
        model.productWidth * swiperPosition,
        "px"
      );
    };
  }();
  var events = new function() {
    this.resizeProductAndPosition = function(e) {
      if (e.target.innerWidth < 750) {
        view.resetClasses();
        model.productsToShow = 3;
        view.setStartingPosition();
      } else if (e.target.innerWidth > 750) {
        view.resetClasses();
        model.productsToShow = 5;
        view.setStartingPosition();
      }

      var previousWidth = model.productWidth;
      var previousLeft = parseFloat(selectors.brSwiperWrapper.style.left);
      view.setProductWidth();
      var reducctionFactor = previousWidth / model.productWidth;
      selectors.brSwiperWrapper.style.left = "".concat(
        previousLeft / reducctionFactor,
        "px"
      );
    };
  }();

  if (window.innerWidth < 750) {
    view.resetClasses();
    model.productsToShow = 3;
  }

  view.createProductList();
  view.setStartingPosition();
  window.addEventListener("resize", events.resizeProductAndPosition, true);
};

var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
  }

  window.addEventListener("load", main);
}

preload([].concat(myImages, _toConsumableArray(buildProducts.allProducts)));
