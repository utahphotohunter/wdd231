// javascript for chamber of commerce home page

// businesses grid/list view buttons

const gridIcon = document.getElementById("grid-icon");
const listIcon = document.getElementById("list-icon");
const viewDisplay = document.getElementById("view-selector");

gridIcon.addEventListener("click", function() {
    viewDisplay.classList.add("grid-view");
    viewDisplay.classList.remove("list-view");
});

listIcon.addEventListener("click", function() {
    viewDisplay.classList.remove("grid-view");
    viewDisplay.classList.add("list-view");
});


// business preview card population from json

const url = "https://utahphotohunter.github.io/wdd231/chamber/data/members.json";
const cards = document.getElementById("view-selector");

async function logData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

logData();


function displayBusinesses(data) {
    data.forEach(business => {

        // make card
        const card = document.createElement("article");
        card.setAttribute("id", business.id);
        card.classList.add("simple-card");

        // make card header
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("container", "simple-header");
        card.appendChild(cardHeader);

        // make h3
        const businessName = document.createElement("h3");
        businessName.classList.add("secondary-text");
        businessName.textContent = business.name;
        cardHeader.appendChild(businessName);

        // make tag line
        const businessTagLine = document.createElement("p");
        businessTagLine.classList.add("tag-line");
        businessTagLine.textContent = business.tagLine;
        cardHeader.appendChild(businessTagLine);

        // make details button
        const detailsButton = document.createElement("button");
        detailsButton.classList.add("details", "btn");
        detailsButton.setAttribute("id", `${business.id}-details`);
        detailsButton.textContent = "Details";
        cardHeader.appendChild(detailsButton);

        // make business info div
        const businessInfo = document.createElement("div");
        businessInfo.classList.add("container", "simple-info");
        card.appendChild(businessInfo);

        // make business image
        const businessImage = document.createElement("img");
        businessImage.classList.add("simple-image");
        businessImage.setAttribute("src", business.img);
        businessImage.setAttribute("alt", business.name);
        businessImage.setAttribute("loading", "lazy");
        businessInfo.appendChild(businessImage);

        // make business info text
        const businessText = document.createElement("div");
        businessText.classList.add("container", "simple-text");
        businessInfo.appendChild(businessText);

        const infoList = document.createElement("ul");
        businessText.appendChild(infoList);

        // make email
        const businessEmail = document.createElement("li");
        const emailSpan = document.createElement("span");
        emailSpan.classList.add("bold");
        emailSpan.textContent = "Email: ";
        businessEmail.appendChild(emailSpan);
        businessEmail.append(business.email);
        infoList.appendChild(businessEmail);

        // make phone
        const businessPhone = document.createElement("li");
        const phoneSpan = document.createElement("span");
        phoneSpan.classList.add("bold");
        phoneSpan.textContent = "Phone: ";
        businessPhone.appendChild(phoneSpan);
        businessPhone.append(business.phoneNumber);
        infoList.appendChild(businessPhone);

        // make email
        const businessUrl = document.createElement("li");
        const urlSpan = document.createElement("span");
        urlSpan.classList.add("bold");
        urlSpan.textContent = "Url: ";
        businessUrl.appendChild(urlSpan);
        businessUrl.append(business.url);
        infoList.appendChild(businessUrl);

        cards.appendChild(card);

        // make card expand on detail button click
        detailsButton.addEventListener("click", function() {
            card.classList.toggle("grid-detail");
        });
    });
}

