function updateTemprature(response) {
  let tempEle = Math.round(response.data.temperature.current);
  let degrees = document.querySelector(".degrees");
  degrees.innerHTML = `${tempEle}`;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
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
