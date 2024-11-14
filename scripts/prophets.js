const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        const card = document.createElement("div");
        card.classList.add("prophet-card", "container");

        const fullName = document.createElement("h2");
        fullName.classList.add("name", "secondary-text", "container");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const dob = document.createElement("span");
        dob.textContent = `DOB: ${prophet.birthdate}`;

        const dobP = document.createElement("p");
        dobP.classList.add("accent-text");
        dobP.appendChild(dob);

        const birthplace = document.createElement("p");
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

        const birthplaceP = document.createElement("p");
        birthplaceP.classList.add("accent-text");
        birthplaceP.appendChild(birthplace);

        const portrait = document.createElement("img");
        portrait.classList.add("portrait", "container");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("alt", `The prophet ${prophet.name} ${prophet.lastname}`)

        card.appendChild(fullName);
        card.appendChild(dobP);
        card.appendChild(birthplaceP);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();