"use strict";

const header = document.querySelector(".header");
const menu = document.getElementById("nav");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const carousal = document.querySelector(".carousal");
const slider = document.querySelectorAll(".hero-img-container");
let idx = 0;

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  header.style.left = "-16em";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  header.style.left = "1.5em";
});

let interval = setInterval(run, 2000);

function run() {
  idx++;

  changeSlider();
}

function changeSlider() {
  if (idx > slider.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = slider.length - 1;
  }

  carousal.style.transform = `translateX(${-idx * 100}vw)`;
}

function resetInterval() {
  clearInterval(interval);

  interval = setInterval(run, 2000);
}

leftArrow.addEventListener("click", () => {
  idx--;

  changeSlider();
  resetInterval();
});

rightArrow.addEventListener("click", () => {
  idx++;

  changeSlider();
  resetInterval();
});
