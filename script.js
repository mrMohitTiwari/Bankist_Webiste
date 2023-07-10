"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  // because in html when a tag is used it makes the page to come at top
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// implementing smooth scrolling
const learnMorebtnScroll = document.querySelector(".btn--scroll-to");
const scroll1 = document.querySelector("#section--1");
learnMorebtnScroll.addEventListener("click", function (e) {
  // some cordinates charcha
  // 1.We need to know the co-ordinates of the element we want to scroll to

  // const S1cordinates = scroll1.getBoundingClientRect(); //it is hard to understand
  // so let know the rectangle of button we clicked
  // console.log(e.target.getBoundingClientRect());
  // x is the distance of the element from the browser border or viewPort and same from top for y
  // top and bottom left and right do not change while x and y are relative to scrolling
  // we can also get the current scroll position
  // console.log(
  //   `current scroll x and y :`,
  //   window.pageXOffset,
  //   window.pageYOffset
  // );
  // we are also adding current so that it scrolls relatively to viewPort
  // console.log(S1cordinates);
  // window.scrollTo(
  //   S1cordinates.left + window.pageXOffset,
  //   S1cordinates.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: S1cordinates.left + window.pageXOffset,

  //   top: S1cordinates.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  // new method
  scroll1.scrollIntoView({ behavior: "smooth" });
});
// implementing tabs
// when we click on any tab it has it's own content and own area like in our websites
// we here in our webistes named as operations
// selecting the elements
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
// tabs.forEach((t) => t.addEventListener("click", () => console.log("yup")));

// uisng event delegaation
// console.log(tabContainer);

tabContainer.addEventListener("click", function (e) {
  // const clicked = e.target;//it will also give the span tag
  const clicked = e.target.closest(".operations__tab"); //now if we click on the span it will go high in dom and will find button with that class and we get null if hit contianer
  //  if null clicked then simple return
  if (!clicked) return;
  console.log(clicked);
  // active tab to unactive  if any tab has active tab removing it
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  // removing content

  // adding active class to clicked tab
  clicked.classList.add("operations__tab--active");
  // activating current tab content area
  // using data attribute already set for each tab in html so that we can get numbers
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
// SELECTING ELEMENTS
// console.log(document.documentElement); //gives the complete html document
// console.log(document.head); gives head
// console.log(document.body); //gives body
// console.log();
// const allSections = document.querySelectorAll(".section");
// console.log(allSections); querySelectorAll gives a nodelist which is not change on deleting the element dynamicalyy
// const htmlcoll = document.getElementsByTagName("button");
// console.log(htmlcoll); //getElementsByTagName gives html collection which can change dynamically
// CREATING ELEMENT
// const message = document.createElement("div");
// // message.innerText = `we use cookies for improved functionality and analytics.`;
// message.innerHTML = `we use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;
// console.log();

// const header = document.querySelector(".header");
// message.classList.add("cookie-message");
// // it is prepend means before the element
// // header.prepend(message);
// // it is append after the element
// // header.append(message);
// // ONLY INSERTED AT ONCE
// // but it they both willl not work at the same time..because they are html collection and in html collection an element is treated as life.a life cannot exists at two places at the same time but it can move so message is moved from top to bottom in html page
// // but if we want the same element two exsits twice we have to clone it
// // header.append(message.cloneNode(true));
// // header and append will create a child element or node
// // BEFORE AND AFTER THEY WILL CREATE SIBLING
// // header.before(message);
// // header.after(message);
// // DELETING ELEMENT
// //let's delete the cookie message when user clicks on that button
// // const closeCookie = document.querySelector(".btn--close-cookie");
// // closeCookie.addEventListener("click", () => message.remove());
// // // STYLES ,ATTRIBUTES AND CLASSES
// // message.style.backgroundColor = "red";
// // console.log(message.style); //it only returns the inline style

// // console.log(getComputedStyle(message)); //it will give all styles
// // console.log(getComputedStyle(message).height); //return a string of number and unit like 49px if we want to increase that we have to extract number and then add for ex
// // const msgHeight = Number.parseInt(getComputedStyle(message).height);
// // console.log(msgHeight);
// // message.style.height = msgHeight + 40 + "px";
// // MORE EVENT LISTNER
// // 1.MOUSEENTER SAME AS HOWE EFFECT IN CSS
// const heading = document.querySelector("h1");
// const alerth1 = function (e) {
//   // console.log("aa");
//   alert("aaa");
// };

// heading.addEventListener("mouseenter", alerth1);
// we can simply do this using this using a property directly using OnmouseEnter on heading
// WE CAN USE ANY EVENT USING ON AND THEN EVENT NAME
// heading.onmouseenter = function (e) {
// alert("hdhssd");
// };
// THE BENEFIT OF PREVIOUS METHOD WE CAN ALSO REMOVE THEM AFTER USING THEM
// setTimeout(() => {
//   heading.removeEventListener("mouseenter", alerth1);
// }, 2000);
//  CAPTURING AND BUBBLING PHASE
// learn from video too much theory
// EVENT DELEGATION
// implementing page scrolling on navigation bar
// before scolling happened becasue we pas href='section--1',we use this method
// // but we use href to select the element we want to scroll to

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     // taking the selector id we want to scroll to
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// ABOVE USE CAN CAUSE PERFORMANCE ISSUE WHILE USING IT ON 100'S OF EVENTS because of forEach will run 1000's time and create 1000s copies
// we will use event delegation
// when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.
// 1.add event  listner to common parent element
// 2.determine what element originated the element that is stored in e.target
// we also see if have clicked between the element spaces we want to target edge case
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // matching streatgy
  if (e.target.classList.contains("nav__link")) {
    //     // taking the selector id we want to scroll to
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//  DOM TRAVERSING IN DETAIL
// going down
const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));
// sometimes we need direct children
// console.log(h1.childNodes);
// to get only elements
// console.log(h1.children); //it will give html collection
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "white";
// going upwards
// suppose we want parent element
// console.log(h1.parentElement);
// console.log(h1.parentNode);/
// new method closet it takes string and goes upward in the dom tree and finds the parent of the element having that class or id or element
// h1.closest(".header").style.backgroundColor = "red"; //this method is used in event delegation

// GOING SIDEWAYS :SELECTING SIBLINGS
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.previousSibling);
// what if we want to get all the siblings
// we will call the parent of that element and then all the child of that parent
// console.log(h1.parentElement.children); //it is a html collection we can spread it in an array and iterate it
// FADDING OF ALL OTHER NAVIGATION ITEM WHEN WE HOVER ON ANY OF ONE EFFECT IMPLEMENTATION
// MENU FADE ANIMATION
// USING EVENT DELIGATION
// selecting the parent element
// DRY principal
const fadeInOutNav = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const clickedLink = e.target;
    // searching for parents and fadding out all other siblings
    const siblings = clickedLink.closest(".nav").querySelectorAll(".nav__link");

    // selecting the logo img
    const logo = clickedLink.closest(".nav").querySelector("img");
    // fadding
    siblings.forEach((sib) => {
      if (sib !== clickedLink) {
        sib.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};
const nav = document.querySelector(".nav");
// nav.addEventListener("mouseover", function (e) {
//   fadeInOutNav(e, 0.5);
// });
// nav.addEventListener("mouseout", function (e) {
//   fadeInOutNav(e, 1);
// });
// passing arg into handler function
nav.addEventListener("mouseover", fadeInOutNav.bind(0.5));
nav.addEventListener("mouseout", fadeInOutNav.bind(1));
// making navigation sticky
// we wan to make navigation sticky as as soon as we scroll to first section
// taking the initial co-ordinates of section 1

const initialCor = scroll1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCor.top) {
//     nav.classList.add("sticky");
//     console.log("m chalu hu ");
//   } else nav.classList.remove("sticky");
// });
// doing with intersection api
//The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
//callback function for intersection api
// // this callback function will be called each time whrn we hit the target element using the threshold defined earlier
// const obsCallBack = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// // options for intersection api
// const obsOptions = {
//   // The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target
//   root: null, //it is the root element we want to target by to target element in this case scroll1 for section1
//   // threshold: 0.2, //which is 10%
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(scroll1);
// we wan over nav to be stikcy when our header moves completely out of the view
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
};
const header = document.querySelector(".header");
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: "-90px",//not a good idea to specify use reactBound rectangular to calculate height of navbar
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
// reveal sections
// taking all the sections
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////REVEAL SECTION
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, Observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  // unobserving it after observing it
  Observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add("section--hidden");
});
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// LAZY LOADING IMAGES
// it is used to increse the performaance of our web page
// we display low quality image has an html componenet and Data-set the high quality image and when we load the page we use that image to be diplay so that it's performance increases
const imgTarget = document.querySelectorAll("img[data-src]");
// console.log(imgTarget);
const loadImg = function (entries, Observer) {
  const [entry] = entries;
  if (!entry.target) return;
  // replace src of image to data-src src
  entry.target.src = entry.target.dataset.src;
  // if we remove blurr class from all of this here we will not get effect becasue itnwill load image immediently so we can use load img event given by observer
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });
  // unobserving it
  Observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px", //we dont want user to know that we are lazy loading image
});
// ataching this observer to all the img target
imgTarget.forEach((img) => imgObserver.observe(img));
//////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////BUILDING A SLIDER
let currentSlide = 0;

const dotContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
const sliderBtnLeft = document.querySelector(".slider__btn--left");
const sliderBtnRight = document.querySelector(".slider__btn--right");
// selecting slider to see this continer clearly
const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4) translateX(-800px)";
slider.style.overflow = "visible";

// at first there are all in top of each other
const goto = function (slider) {
  slides.forEach((slide, i) => {
    console.log(slider);
    // console.log(i);

    slide.style.transform = `translateX(${120 * (i - slider)}%)`; //0% ,100,200,300
  });
};
goto(0);
// sliderBtnLeft.addEventListener("click", nextSlide);

// moving to next slide when click on right button
const prevSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlide;
  else {
    currentSlide--;
    // slides.forEach((slide, i) => {
    //   // console.log(i);

    //   slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`; //-100%,0,100,
    // });
    goto(currentSlide);
  }
  activateDot(currentSlide);
};
sliderBtnLeft.addEventListener("click", prevSlide);
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) currentSlide = 0;
  else currentSlide++;
  // slides.forEach((slide, i) => {
  //   // console.log(i);

  //   slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`; //-100%,0,100,
  // });
  goto(currentSlide);
  activateDot(currentSlide);
};
sliderBtnRight.addEventListener("click", nextSlide);

// handling keyboard event of left and right
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////CREATING DOTS
// using inovked function
(function createDots() {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
})();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);
// event delegation
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slideNO = e.target.dataset.slide;

    // slides.forEach((slide, i) => {
    //   // console.log(i);

    //   slide.style.transform = `translateX(${100 * (i - slideNO)}%)`; //-100%,0,100,
    // });
    goto(slideNO);
    activateDot(slideNO);
  }
});
