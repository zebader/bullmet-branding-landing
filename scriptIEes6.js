"use strict";

const myImages = [
  "img/bullmet.png",
  "img/header.jpg",
  "img/history-c1.jpg",
  "img/history-c2.jpg",
  "img/history-c3.jpg",
  "img/history-c1.jpg",
  "img/history-header.jpg",
  "img/next.svg"
];
const buildProducts = {
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

const main = () => {
  const components = new function() {
    this.sectionBrHeader = `
    <section class="br-header animation-start-app">
      <img src="img/bullmet.png" alt="">
    </section>
    `;
    this.sectionBrSwiper = `
    <section class="br-swiper animation-start-app">
      <h1>Descubre nuestros productos</h1>
      <article class="br-swiper-container-ie">
        <article class="br-swiper-wrapper-ie"></article>
      </article>
    </section>
    `;
    this.sectionBrHystoryMainContent = `
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
    this.sectionBrHystorySecondaryImages = `
    <article class="br-history-se-ctnt-block-img-container-ie">
      <article class="br-history-se-ctnt-block-img-ie">
        <img src="img/history-c1.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-img-ie">
        <img src="img/history-c2.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-img-ie">
        <img src="img/history-c3.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-img-ie">
        <img src="img/history-c4.jpg" alt="">
      </article>
    </article>
    `;
    this.sectionBrHystorySecondaryTexts = `
    <article class="br-history-se-ctnt-block-ie">
      <article class="br-history-se-ctnt-block-text-ie">
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
      <article class="br-history-se-ctnt-block-text-ie">
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
    this.sectionBrHystorySecondaryMobile = `
    <article class="br-history-se-ctnt-block-img-container-ie">
      <article class="br-history-se-ctnt-block-img-ie">
        <img src="img/history-c1.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-text-ie">
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
      <article class="br-history-se-ctnt-block-img-ie">
        <img src="img/history-c2.jpg" alt="">
      </article>
      <article class="br-history-se-ctnt-block-text-ie">
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
    this.sectionBrHystorySecondaryContentDesktop = `
    ${this.sectionBrHystorySecondaryImages}
    ${this.sectionBrHystorySecondaryTexts}
    `;
    this.sectionBrHystorySecondaryContentMobile = `
    ${this.sectionBrHystorySecondaryMobile}
    `;
    this.sectionBrHystorySecondaryContent = `
    <article class="br-history-se-ctnt">
    ${
      window.innerWidth < 750
        ? this.sectionBrHystorySecondaryContentMobile
        : this.sectionBrHystorySecondaryContentDesktop
    }

    </article>
    `;
    this.sectionBrHistory = `
    <section class="br-history animation-start-app">
      <h1>Conoce nuestra historia</h1>
      ${this.sectionBrHystoryMainContent}
      ${this.sectionBrHystorySecondaryContent}
    </section>
    `;
    window.addEventListener("resize", e => {
      if (window.innerWidth < 750) {
        document.querySelector(
          ".br-history-se-ctnt"
        ).innerHTML = this.sectionBrHystorySecondaryContentMobile;
      } else {
        document.querySelector(
          ".br-history-se-ctnt"
        ).innerHTML = this.sectionBrHystorySecondaryContentDesktop;
      }
    });
  }();
  const templates = new function() {
    this.main = `
    ${components.sectionBrHeader}
    ${components.sectionBrSwiper}
    ${components.sectionBrHistory}
    `;

    this.initMainTemplate = () => {
      document.querySelector("main").innerHTML = this.main;
    };

    this.initAllTemplates = () => {
      this.initMainTemplate();
    };
  }();
  templates.initAllTemplates();
  const selectors = new function() {
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
  const model = new function() {
    this.swiperMainPosition = 0;
    this.containerWidth = 0;
    this.productWidth = 0;
    this.productsToShow = 5;
    this.productList = [];
    this.lockPosition = 0;
  }();
  const view = new function() {
    this.createProduct = (img, position, productLink, productInfo) => {
      const product = document.createElement("div");
      product.classList.add("default-ie");
      product.setAttribute("data-list", position);
      product.setAttribute("data-product", productInfo);
      const link = document.createElement("a");
      const button = document.createElement("button");
      const p = document.createElement("p");
      button.innerHTML = 'VER YA';
      p.innerHTML = productInfo;
      link.setAttribute("href", productLink);
      link.setAttribute("target", "_blank");
      product.appendChild(link);
      link.appendChild(img);
      link.appendChild(p);
      link.appendChild(button);
      return product;
    };

    this.createProductList = () => {
      buildProducts.allProducts.forEach((product, index) => {
        const newImg = new Image();
        newImg.setAttribute("src", product);
        const newProduct = this.createProduct(
          newImg,
          index,
          buildProducts.productUrls[index],
          buildProducts.productInfo[index]
        );
        selectors.brSwiperWrapper.appendChild(newProduct);
      });
      this.setProductElements();
      this.setProductWidth();
    };

    this.setProductElements = () => {
      model.productList = [...document.querySelectorAll(".default")];
    };

    this.setProductWidth = () => {
      model.containerWidth = selectors.brSwiperContainer.offsetWidth;
      model.productWidth = model.containerWidth / model.productsToShow;
      model.productList.forEach(product => {
        product.style.width = `${model.productWidth}px`;
      });
    };

    this.setStartingPosition = () => {
      const centralPosition = Math.ceil(model.productList.length / 2);
      const swiperPosition = Math.ceil(
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
      selectors.brSwiperWrapper.style.left = `-${model.productWidth *
        swiperPosition}px`;
    };
  }();
  const events = new function() {
    this.resizeProductAndPosition = e => {
      if (e.target.innerWidth < 750) {
        view.resetClasses();
        model.productsToShow = 3;
        view.setStartingPosition();
      } else if (e.target.innerWidth > 750) {
        view.resetClasses();
        model.productsToShow = 5;
        view.setStartingPosition();
      }
      const previousWidth = model.productWidth;
      const previousLeft = parseFloat(selectors.brSwiperWrapper.style.left);
      view.setProductWidth();
      const reducctionFactor = previousWidth / model.productWidth;
      selectors.brSwiperWrapper.style.left = `${previousLeft /
        reducctionFactor}px`;
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

preload([...myImages, ...buildProducts.allProducts]);
