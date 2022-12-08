async function getWeather(cityName) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units.getCurrentUnit()}&appid=f665e17e864ad3ebcceb327ae8c2131a`,
    { mode: "cors" }
  );
  response = await response.json();
  return response;
}

const loadingOverlay = (() => {
  const overlay = document.querySelector(".loading-overlay");
  const enable = () => overlay.classList.add("active");
  const disable = () => overlay.classList.remove("active");
  return { enable, disable };
})();

const searchBar = document.querySelector("#city-search-bar");
searchBar.addEventListener("submit", submitSearch);

function submitSearch(e) {
  // Calls API with the input and render content
  e.preventDefault();
  const input = e.target[0].value;
  loadingOverlay.enable();
  getWeather(input).then((response) => renderWeather(response));
}

function renderWeather(weatherObj) {
  console.log(weatherObj);

  loadingOverlay.disable();

  const weatherContainer = document.querySelector("#weather-container");
  const cityName = weatherContainer.querySelector(".city-name");
  const currentTemperature = weatherContainer.querySelector(
    ".current-temperature"
  );
  const maxTemp = weatherContainer.querySelector(".max-temperature");
  const minTemp = weatherContainer.querySelector(".min-temperature");
  const humidity = weatherContainer.querySelector(".humidity");

  cityName.textContent = weatherObj.name;
  currentTemperature.textContent = weatherObj.main.temp.toFixed(1);
  maxTemp.textContent = weatherObj.main.temp_max.toFixed(1);
  minTemp.textContent = weatherObj.main.temp_min.toFixed(1);
  humidity.textContent = weatherObj.main.humidity;
}

const switchUnitsBtn = document.querySelector(".switch-units");

const cToF = (temp) => (temp * 9) / 5 + 32;
const fToC = (temp) => ((temp - 32) * 5) / 9;

const units = (() => {
  const tempUnits = document.querySelectorAll(".temp-unit");
  const temperatures = document.querySelectorAll(".temperature");
  let currentUnit;

  if (currentUnit === undefined) {
    currentUnit = "metric";
  }

  const getCurrentUnit = () => currentUnit;

  const switchUnits = () => {
    if (currentUnit === "metric") {
      currentUnit = "imperial";
      temperatures.forEach((element) => {
        element.textContent = cToF(element.innerText).toFixed(1);
      });
      tempUnits.forEach((element) => {
        element.textContent = "ºF";
      });
      switchUnitsBtn.textContent = "Mostrar em ºC";
    } else if (currentUnit === "imperial") {
      currentUnit = "metric";
      temperatures.forEach((element) => {
        element.textContent = fToC(element.innerText).toFixed(1);
      });
      tempUnits.forEach((element) => {
        element.textContent = "ºC";
      });
      switchUnitsBtn.textContent = "Mostrar em ºF";
    }
  };

  return { switchUnits, getCurrentUnit };
})();

switchUnitsBtn.addEventListener("click", units.switchUnits);
