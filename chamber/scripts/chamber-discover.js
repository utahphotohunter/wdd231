// current unix time
const currentEpoch = Date.now();

// unix time of last visit
const lastVisit = localStorage.getItem("lastVisit");

// time since last visit in milliseconds
const elapsedTime = currentEpoch - lastVisit;

// welcome message p element
const messageP = document.getElementById("visit-message");

// displays different message based on how long since last visit
function displayWelcome() {
if (lastVisit == null) {
    messageP.textContent = "Welcome! Let us know if you have any questions.";
} else if (elapsedTime <= 86400) {
    messageP.textContent = "Back so soon! Awesome!";
} else if (elapsedTime > 86400000 && elapsedTime < 172800000) {
    messageP.textContent = "You last visited 1 day ago.";
} else if (elapsedTime > 172800000) {
    const daysSince = Math.floor(elapsedTime / 86400000);
    messageP.textContent = `You last visited ${daysSince} days ago.`;
}
}

displayWelcome();

// sets local storeage with current time for next visit
localStorage.setItem(lastVisit, currentEpoch);