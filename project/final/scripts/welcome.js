// create dialog
const dialog = document.createElement("dialog");
dialog.classList.add("details");

// create dialog header
const welcomeHeader = document.createElement("h3");
welcomeHeader.textContent = "Welcome to the Utah Hiker's Guide!";
dialog.appendChild(welcomeHeader);

//create dialog image
const welcomeImg = document.createElement("img");
welcomeImg.setAttribute("src", "images/welcome-img.webp");
welcomeImg.setAttribute("alt", "man hiking in mountains");
welcomeImg.setAttribute("loading", "lazy");
dialog.appendChild(welcomeImg);

//create dialog message
const welcomeMessage = document.createElement("p");
welcomeMessage.textContent = "We hope you find all your new favorite hikes here. Whether you are from the area or just visiting for a day, there is a new adventure for everybody here. Let's get hiking!";
dialog.appendChild(welcomeMessage);

//create dialog close button
const closeButton = document.createElement("button");
closeButton.classList.add("btn");
closeButton.setAttribute("id", "modal-close");
closeButton.textContent = "Close";
dialog.appendChild(closeButton);

// set dialog display to none for performance
dialog.style.display = "none";

// add dialog to page
document.body.appendChild(dialog);

// set dialog close button function
document.getElementById("modal-close").addEventListener("click", function () {
    dialog.close();
    dialog.style.display = "none";
});

// open dialog after 3 seconds
setTimeout(function(){
    dialog.style.display = "flex";
    dialog.showModal();
}, 3000);