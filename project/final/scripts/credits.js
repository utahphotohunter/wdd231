const body = document.getElementById("credits");
const url = "https://utahphotohunter.github.io/wdd231/project/final/data/hikes.json";

function displayCredits(list) {
    list.forEach(photo => {
        const name = document.createElement("p");
        name.textContent = photo.name;
        body.appendChild(name);

        const imageLink = document.createElement("a");
        imageLink.textContent = photo.imageLink;
        imageLink.setAttribute("href", photo.imageLink);
        body.appendChild(imageLink)

        const creator = document.createElement("p");
        creator.textContent = photo.imageCreator;
        body.appendChild(creator)

        const creatorLink = document.createElement("a");
        creatorLink.textContent = photo.creatorLink;
        creatorLink.setAttribute("href", photo.creatorLink);
        body.appendChild(creatorLink);

        const sectionBreak = document.createElement("p");
        sectionBreak.textContent = "--------------------------------------------";
        body.appendChild(sectionBreak);
    });
}

async function logData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCredits(data.hikes);
}

logData();