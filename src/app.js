function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = cityInput.value;
}
let searchFrom = document.querySelector("#form");
searchFrom.addEventListener("submit", changeCity);
