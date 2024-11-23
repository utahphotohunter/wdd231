// api url
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=f9e50fde67107e72150b984b2ef85827";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=imperial&appid=f9e50fde67107e72150b984b2ef85827";
const iconUrl = "https://api.openweathermap.org/img/w/";

async function fetchApi(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function trasnlateDate(epoch) {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date(epoch * 1000);
    let dayOfWeekNumber = date.getDay();
    let dayOfWeekName = daysOfWeek[dayOfWeekNumber];
    let dateNumber = date.getDate();
    let monthNumber = date.getMonth();

    return `${dayOfWeekName} ${months[monthNumber]}, ${dateNumber}`;
}   

function displayForecast(forecast) {
    let forecastNoonTimes = [forecast.list[3], forecast.list[11], forecast.list[19]];
    // console.log(forecastNoonTimes[0]);
    const card = document.querySelector(".forecast");

    forecastNoonTimes.forEach(dataSet => {
        const weatherInfoSection = document.createElement("section");
        weatherInfoSection.classList.add("forecast-content", "container")

        const dateHeader = document.createElement("h3");
        dateHeader.textContent = trasnlateDate(dataSet.dt);
        dateHeader.classList.add("forecast-date", "bold");
        weatherInfoSection.appendChild(dateHeader);

        const weatherInfo = document.createElement("div");
        weatherInfo.classList.add("forecast-weather-info");
        weatherInfoSection.appendChild(weatherInfo);

        const weatherIcon = document.createElement("img");
        weatherIcon.classList.add("forecast-icon");
        weatherIcon.setAttribute("src", `${iconUrl}${dataSet.weather[0].icon}.png`);
        weatherIcon.setAttribute("alt", dataSet.weather[0].description);
        weatherInfo.appendChild(weatherIcon);

        const weatherList = document.createElement("ul");
        
        const weatherConditions = document.createElement("li");
        weatherConditions.classList.add("forecast-conditions");
        weatherConditions.innerHTML = `<span class="bold">Conditions:</span> ${dataSet.weather[0].description}`;
        weatherList.appendChild(weatherConditions);

        const weatherTemp = document.createElement("li");
        weatherTemp.classList.add("forecast-temp");
        weatherTemp.innerHTML = `<span class="bold">Temp:</span> ${Math.round(dataSet.main.temp)}&deg;F`;
        weatherList.appendChild(weatherTemp);

        const weatherHumidity = document.createElement("li");
        weatherHumidity.classList.add("forecast-humidity");
        weatherHumidity.innerHTML = `<span class="bold">Humidity:</span> ${Math.round(dataSet.main.humidity)}`;
        weatherList.appendChild(weatherHumidity);

        weatherInfo.appendChild(weatherList);

        card.appendChild(weatherInfoSection);
    });
}

// function displayCurrent(current, data) {

// }





async function main() {
    let forecastData = await fetchApi(forecastUrl);
    console.log(forecastData);

    displayForecast(forecastData);
}

main();