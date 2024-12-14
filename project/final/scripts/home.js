// mobile menu toggle
const toggle = document.querySelector(".nav-bars");
const mobileMenu = document.querySelector(".mobile-menu");

toggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});

// desktop nav buttons
const allBtn = document.querySelector("#all-desktop");
const longBtn = document.querySelector("#long-desktop");
const hardBtn = document.querySelector("#hard-desktop");
const quietBtn = document.querySelector("#quiet-desktop");
const beautifulBtn = document.querySelector("#beautiful-desktop");

// mobile nav buttons
const allBtnMobile = document.querySelector("#all-mobile");
const longBtnMobile = document.querySelector("#long-mobile");
const hardBtnMobile = document.querySelector("#hard-mobile");
const quietBtnMobile = document.querySelector("#quiet-mobile");
const beautifulBtnMobile = document.querySelector("#beautiful-mobile");

const url = "https://utahphotohunter.github.io/wdd231/project/final/data/hikes.json";

// create hike card
function createHikeCard(list) {
    list.forEach(hike => {
        let card = document.createElement("div");
        card.classList.add("container", "hike");
        let hikeName = document.createElement("h3");
        let img = document.createElement("img");
        let stats = document.createElement("div");
        stats.classList.add("stats");
        let lengthP = document.createElement("p");
        let difficultyP = document.createElement("p");
        let crowdsP = document.createElement("p");
        let viewsP = document.createElement("p");

        hikeName.textContent = hike.name;
        img.setAttribute("src", hike.image);
        img.setAttribute("alt", `${hike.name} hike`);
        img.setAttribute("loading", "lazy");
        lengthP.innerHTML = `<span class="bold">Length:</span> ${hike.length}mi`;
        difficultyP.innerHTML = `<span class = "bold">Difficulty: </span> ${hike.difficulty}`;
        crowdsP.innerHTML = `<span class = "bold">Crowds: </span> ${hike.crowds}`;
        viewsP.innerHTML = `<span class = "bold">Views: </span> ${hike.views}`;

        stats.appendChild(lengthP);
        stats.appendChild(difficultyP);
        stats.appendChild(crowdsP);
        stats.appendChild(viewsP);
        card.appendChild(hikeName);
        card.appendChild(img);
        card.appendChild(stats);

        document.querySelector(".hikes").appendChild(card);
    });
}

// fetch json file and populate page
async function logData() {
    const response = await fetch(url);
    const data = await response.json();

    // populate all hikes at page load
    createHikeCard(data.hikes);

    // load all hikes desktop 
    allBtn.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        createHikeCard(data.hikes);
    });
    // load all hikes mobile
    allBtnMobile.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        mobileMenu.classList.toggle("active");
        createHikeCard(data.hikes);
    });

    // load long hikes desktop
    longBtn.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        createHikeCard(data.hikes.filter(hike => hike.length > 4));
    });

    // load long hikes mobile
    longBtnMobile.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        mobileMenu.classList.toggle("active");
        createHikeCard(data.hikes.filter(hike => hike.length > 4));
    });

    // load hard hikes desktop
    hardBtn.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        createHikeCard(data.hikes.filter(hike => hike.difficulty == "hard"));
    });

    // load hard hikes mobile
    hardBtnMobile.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        mobileMenu.classList.toggle("active");
        createHikeCard(data.hikes.filter(hike => hike.difficulty == "hard"));
    });

    // load quiet hikes desktop
    quietBtn.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        createHikeCard(data.hikes.filter(hike => hike.crowds == "low"));
    });

    // load quiet hikes mobile
    quietBtnMobile.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        mobileMenu.classList.toggle("active");
        createHikeCard(data.hikes.filter(hike => hike.crowds == "low"));
    });

    // load beautiful hikes desktop
    beautifulBtn.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        createHikeCard(data.hikes.filter(hike => hike.views == "good"));
    });

    // load beautiful hikes mobile
    beautifulBtnMobile.addEventListener("click", () => {
        document.querySelector(".hikes").innerHTML = "";
        mobileMenu.classList.toggle("active");
        createHikeCard(data.hikes.filter(hike => hike.views == "good"));
    });
}

logData();