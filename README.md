# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Learned to make carousal using javascript

```html
<h1>Some HTML code I'm proud of</h1>
```

```js
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
```

## Author

- Frontend Mentor - [@drajnish](https://www.frontendmentor.io/profile/drajnish)
- Twitter - [@DeshmukhRajnish](https://www.twitter.com/DeshmukhRajnish)
