"use strict";

const h1 = document.querySelector("h1");
h1.style.fontFamily = 'Arial';
h1.style.backgroundColor = '#000';
h1.style.color = '#fff';

const p = document.querySelectorAll("p");
p.forEach(element => {
    element.style.fontFamily = "Arial";
    element.style.fontSize = "23px"
})
