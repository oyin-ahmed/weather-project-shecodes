function updateTemprature(response) {
  let tempEle = Math.round(response.data.temperature.current);
  let degrees = document.querySelector(".degrees");
  let cityElement = document.querySelector("#city");
  let weatherDescription = document.querySelector(".weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed * 10) / 10;
  let icon = document.querySelector("#icon");
  let iconImage = `  <img
          src="${response.data.condition.icon_url}"
          class="weather-icon"
          id="weather-icon"
        />`;
         degrees.innerHTML = `${tempEle}°`;
  cityElement.innerHTML = response.data.city;
  weatherDescription.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${wind}km/h`;
  icon.innerHTML = `${iconImage}`;
}
function searchCity(city) {
  let apiKey = "603213a20od31054bbtafc903709b865";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTemprature);
}
function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  searchCity(cityInput.value);
}
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
let shortDay = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = [
  "January",
  "Febuary",
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
