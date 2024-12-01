const cards = document.querySelector(".membership-cards");
const membershipLevels = "https://utahphotohunter.github.io/wdd231/chamber/data/membership-levels.json";

async function main() {
    const memberships = await getData(membershipLevels);
    console.log(memberships);
    displayMemberships(memberships);
}

main();

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.levels;
}

function displayMemberships(data) {
    data.forEach(level => {
        // make card
        const card = document.createElement("section");
        card.classList.add("membership-card", "container");

        // make card header
        const cardHeader = document.createElement("h3");
        cardHeader.textContent = level.name;
        card.appendChild(cardHeader);

        // make card image
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", `images/${level.image}`);
        cardImg.setAttribute("alt", level.imageAlt);
        card.appendChild(cardImg);

        // make details button
        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.classList.add("btn");
        card.appendChild(detailsButton);

        // make details dialog
        const cardDialog = document.createElement("dialog");
        cardDialog.classList.add("container", "business-modal");
        card.appendChild(cardDialog);
        
        // make dialog header
        const dialogHeader = document.createElement("h3");
        dialogHeader.textContent = level.name;
        cardDialog.appendChild(dialogHeader);

        // make dialog image
        const dialogImage = document.createElement("img");
        dialogImage.setAttribute("src", `images/${level.image}`);
        dialogImage.setAttribute("alt", level.imageAlt);
        cardDialog.appendChild(dialogImage);

        // make dialog p
        const dialogP = document.createElement("p");
        dialogP.textContent = level.dialog;
        cardDialog.appendChild(dialogP);

        // make dialog close button
        const dialogCloseButton = document.createElement("button");
        dialogCloseButton.classList.add("btn", "modal-close");
        dialogCloseButton.textContent = "close";
        cardDialog.appendChild(dialogCloseButton);

        // open dialog
        detailsButton.addEventListener("click", function() {
            cardDialog.showModal();
        }); // end open dialog

        // close dialog
        dialogCloseButton.addEventListener("click", function() {
            cardDialog.close();
        }); // end close dialog

        
        cards.appendChild(card);
    });







}