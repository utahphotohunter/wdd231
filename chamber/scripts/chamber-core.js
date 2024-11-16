// core javascript for chamber of commerce website

// mobile menu

const toggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu-nav");
const body = document.getElementById("body");
const html = document.getElementById("html");

toggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
    body.classList.toggle("hide-y");
    html.classList.toggle("hide-y");
});


// footer

let lastModified = document.lastModified;
let modificationDate = new Date(lastModified);
let year = modificationDate.getFullYear();
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = year;
lastModifiedSpan.textContent = modificationDate;