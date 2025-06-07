function searchCity(city) {
  let apiKey = "603213a20od31054bbtafc903709b865";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(updateTemperature);
}

function updateTemperature(response) {
  let tempElement = Math.round(response.data.temperature.current);
  let degrees = document.querySelector(".degrees");
  let cityElement = document.querySelector("#city");
  let weatherDescription = document.querySelector(".weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed * 10) / 10;
  let icon = document.querySelector("#icon");
  let iconImage = `<img src="${response.data.condition.icon_url}" class="weather-icon" id="weather-icon" />`;
  degrees.innerHTML = `${tempElement}°`;
  cityElement.innerHTML = response.data.city;
  weatherDescription.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${wind}km/h`;
  icon.innerHTML = iconImage;
  getForecast(response.data.city);
}

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  searchCity(cityInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "603213a20od31054bbtafc903709b865";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
    if (index > 0 && index < 6) {
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
              <div class="forecast-date">${formatDay(day.time)}</div>
              <div class="forecast-icon">
              <img src =" ${day.condition.icon_url}"/>
              </div>
              <div class="forecast-temps">
                <div class="forecast-temp">
                  <span class="forecast-tems-high">${Math.round(
                    day.temperature.maximum
                  )}°</span>
                  <span class="forecast-tems-low"> /${Math.round(
                    day.temperature.minimum
                  )}°</span>
                </div>
              </div>
            </div>`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
searchCity("Paris");

let searchFrom = document.querySelector("#form");
searchFrom.addEventListener("submit", changeCity);

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
let today = weekday[now.getDay()];
let day = now.getDate();
let month = months[now.getMonth()];
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
if (hour < 10) {
  hour = `0${hour}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let formattedTime = `${hour}:${minutes}`;
let fromattedDate = `${today}, ${day} ${month} ${now.getFullYear()}`;
let time = document.querySelector(".time");
let date = document.querySelector(".date");
time.innerHTML = formattedTime;
date.innerHTML = fromattedDate;
