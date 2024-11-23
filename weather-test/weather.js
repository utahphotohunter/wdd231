// api url
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=f9e50fde67107e72150b984b2ef85827";
let iconUrl = "https://api.openweathermap.org/img/w/";

// html elements
const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const caption = document.getElementById("weather-caption");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.setAttribute("src", `${iconUrl}${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    caption.textContent = data.weather[0].description;
}