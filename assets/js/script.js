'use strict';

/** Element Toggle Function */


const toggleFun = (elem) => {elem.classList.toggle("active")};

/** Navbar Variables */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [ navOpenBtn, navCloseBtn, overlay ];

for ( let i = 0; i < navElemArr.length; i++ ) {
    navElemArr[i].addEventListener("click", () => {
        toggleFun(navbar);
        toggleFun(overlay);
        toggleFun(document.body);
        
    })

}
