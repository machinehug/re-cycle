const hamburgerOpen = document.querySelector(".hamburger-open");
const hamburgerClose = document.querySelector(".hamburger-close");
const nav = document.querySelector("nav");
const hiddenClass = "hidden";

hamburgerOpen.addEventListener("click", openNav);

function openNav() {

    nav.classList.toggle(hiddenClass);
    hamburgerOpen.classList.add(hiddenClass);
};

hamburgerClose.addEventListener("click", closeNav);

function closeNav() {

    nav.classList.toggle(hiddenClass);
    hamburgerOpen.classList.remove(hiddenClass);
};