import myFooter from "./my-footer.js";

const getWeather = async (cityName) =>
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units.getCurrentUnit()}&appid=f665e17e864ad3ebcceb327ae8c2131a`,
    { mode: "cors" }
  );

const loadingOverlay = (() => {
  const overlay = document.querySelector(".loading-overlay");
  const enable = () => overlay.classList.add("active");
  const disable = () => overlay.classList.remove("active");
  return { enable, disable };
})();

const searchBar = document.querySelector("#city-search-bar");
searchBar.addEventListener("submit", submitSearch);

function submitSearch(e) {
  // Calls the API with the input and render content or throw an error

  e.preventDefault();
  loadingOverlay.enable();

  const input = e.target[0].value;

  getWeather(input)
    .then((response) => {
      if (!response.ok) throw new Error("Error on fetch");
      else return response.json();
    })
    .then((response) => renderWeather(response))
    .catch((error) => showError(error));
}

function showError(error) {
  console.error(error);
  loadingOverlay.disable();
  const errorMsgElement = document.querySelector(".error-message");
  errorMsgElement.classList.add("active");
  setTimeout(() => {
    errorMsgElement.classList.remove("active");
  }, 5000);
}

function renderWeather(weatherObj) {
  // console.log(weatherObj);

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
  /* Tracks the current temperature unit and
  return functions for get and switch units */

  let currentUnit;
  if (currentUnit === undefined) currentUnit = "metric";
  const getCurrentUnit = () => currentUnit;

  const tempUnits = document.querySelectorAll(".temp-unit");
  const temperatures = document.querySelectorAll(".temperature");

  const switchUnits = () => {
    // Convert the temperatures and changes the temperature units

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

  return { getCurrentUnit, switchUnits };
})();

switchUnitsBtn.addEventListener("click", units.switchUnits);

(function init() {
  // Fetch São Paulo weather on page load

  loadingOverlay.enable();

  getWeather("Catalão")
    .then((response) => {
      if (!response.ok) throw new Error("Error on fetch");
      else return response.json();
    })
    .then((response) => renderWeather(response))
    .catch((error) => showError(error));

  myFooter("#fff", "#ffffff47");
})();
