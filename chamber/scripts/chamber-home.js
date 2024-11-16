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