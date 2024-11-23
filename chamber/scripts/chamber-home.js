// api url
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=16.76&lon=-3.00&units=imperial&appid=f9e50fde67107e72150b984b2ef85827";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=16.76&lon=-3.00&units=imperial&appid=f9e50fde67107e72150b984b2ef85827";
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

function translateTime(epoch) {
    let date = new Date(epoch * 1000);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let meridian;

    if (hour > 11) {
        hour = hour - 12;
        meridian = "pm";
    } else if (hour == 0) {
        hour = 12;
        meridian = "am";
    } else if (hour == 12) {
        hour = 12;
        meridian = "pm";
    } else {
        meridian = "am";
    }

    console.log(`${hour}:${minute}${meridian}`);
    return `${hour}:${minute}${meridian}`;

}

function displayForecast(forecast) {
    let forecastNoonTimes = [forecast.list[3], forecast.list[11], forecast.list[19]];
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
        weatherIcon.setAttribute("loading", "lazy");
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
        weatherHumidity.innerHTML = `<span class="bold">Humidity:</span> ${Math.round(dataSet.main.humidity)}%`;
        weatherList.appendChild(weatherHumidity);

        weatherInfo.appendChild(weatherList);

        card.appendChild(weatherInfoSection);
    });
}

function displayCurrent(data) {
    const currentWeatherContent = document.querySelector(".current-weather-content");

    const currentWeatherDate = document.createElement("h3");
    currentWeatherDate.classList.add("current-weather-date", "bold");
    currentWeatherDate.textContent = trasnlateDate(data.dt);
    currentWeatherContent.appendChild(currentWeatherDate);

    const currentWeatherIcon = document.createElement("img");
    currentWeatherIcon.classList.add("current-weather-icon");
    currentWeatherIcon.setAttribute("src", `${iconUrl}${data.weather[0].icon}@2x.png`);
    currentWeatherIcon.setAttribute("alt", data.weather[0].description);
    currentWeatherIcon.setAttribute("loading", "lazy");
    currentWeatherContent.appendChild(currentWeatherIcon);

    const currentWeatherInfo = document.createElement("ul");
    currentWeatherContent.appendChild(currentWeatherInfo);

    const currentWeatherTemp = document.createElement("li");
    currentWeatherTemp.classList.add("current-weather-temp");
    currentWeatherTemp.innerHTML = `<span class="bold">${Math.round(data.main.temp)}</span>&deg;F`;
    currentWeatherInfo.appendChild(currentWeatherTemp);

    const currentWeatherCondition = document.createElement("li");
    currentWeatherCondition.classList.add("current-weather-conditions");
    currentWeatherCondition.innerHTML = `<span class="bold">Conditions: </span>${data.weather[0].description}`;
    currentWeatherInfo.appendChild(currentWeatherCondition);

    const currentWeatherHigh = document.createElement("li");
    currentWeatherHigh.classList.add("current-weather-high");
    currentWeatherHigh.innerHTML = `<span class="bold">High: </span>${Math.round(data.main.temp_max)}&deg;F`;
    currentWeatherInfo.appendChild(currentWeatherHigh);

    const currentWeatherLow = document.createElement("li");
    currentWeatherLow.classList.add("current-weather-low");
    currentWeatherLow.innerHTML = `<span class="bold">Low: </span>${Math.round(data.main.temp_min)}&deg;F`;
    currentWeatherInfo.appendChild(currentWeatherLow);

    const currentWeatherHumidity = document.createElement("li");
    currentWeatherHumidity.classList.add("current-weather-humidity");
    currentWeatherHumidity.innerHTML = `<span class="bold">Humidity: </span>${Math.round(data.main.humidity)}%`;
    currentWeatherInfo.appendChild(currentWeatherHumidity);
}

async function main() {
    let forecastData = await fetchApi(forecastUrl);
    // console.log(forecastData);
    let currentWeather = await fetchApi(weatherUrl);
    // console.log(currentWeather);

    displayForecast(forecastData);
    displayCurrent(currentWeather);
}

main();