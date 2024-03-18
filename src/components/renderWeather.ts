/*
  Renders weather information for a specified location.
  It takes in geoInfo, currWeather, and forecast parameters
  to display the current weather conditions and a forecast 
  for upcoming days.
*/

import CurrentWeather from "../interfaces/CurrentWeather";
import GeoCode from "../interfaces/GeoCode";
import ReducedForecast from "../interfaces/ReducedForecast";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import getIconByCode from "../utils/getIconByCode";

export default function renderWeather(
  geoInfo: GeoCode,
  currWeather: CurrentWeather,
  forecast: ReducedForecast[]
): void {
  const root = document.querySelector("#root");
  const main = document.querySelector("main");
  const cityName = document.createElement("h1");
  const currentTempsGroup = document.createElement("div");
  const maxTempGroup = document.createElement("div");
  const maxTempText = document.createElement("p");
  const maxTemp = document.createElement("p");
  const currentTemp = document.createElement("p");
  const minTempGroup = document.createElement("div");
  const minTempText = document.createElement("p");
  const minTemp = document.createElement("p");
  const currentTempIconContainer = document.createElement("div");
  const currentTempIcon = document.createElement("img");
  const forecastGroup = document.createElement("ul");
  const descriptionText = capitalizeFirstLetter(
    currWeather.weather[0].description
  );

  main.innerHTML = "";

  const itsNight = currWeather.weather[0].icon.endsWith("n");
  root.classList[itsNight ? "add" : "remove"]("night");

  cityName.textContent = geoInfo.name;
  maxTempText.textContent = "Máx.";
  maxTemp.textContent = `${currWeather.main.temp_max.toFixed(0)}º`;
  currentTemp.textContent = `${currWeather.main.temp.toFixed(0)}º`;
  minTempText.textContent = "Mín.";
  minTemp.textContent = `${currWeather.main.temp_min.toFixed(0)}º`;

  currentTempsGroup.classList.add("current-temps-group");
  cityName.classList.add("city-name");
  maxTempGroup.classList.add("max-temp-group");
  maxTempText.classList.add("max-temp-text");
  maxTemp.classList.add("max-temp");
  currentTemp.classList.add("current-temp");
  minTempGroup.classList.add("min-temp-group");
  minTempText.classList.add("min-temp-text");
  minTemp.classList.add("min-temp");
  currentTempIconContainer.classList.add("current-temp-icon-container");
  currentTempIcon.classList.add("current-temp-icon");
  forecastGroup.classList.add("forecast");

  currentTempIcon.src = getIconByCode(currWeather.weather[0].icon);
  currentTempIcon.title = descriptionText;
  currentTempIcon.alt = descriptionText;

  for (let item of forecast) {
    const dayGroup = document.createElement("li");
    const weekday = document.createElement("p");
    const dayIconContainer = document.createElement("div");
    const dayIcon = document.createElement("img");
    const weekDayText = new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
    }).format(item.day);
    const conditionText = capitalizeFirstLetter(item.condition);

    weekday.textContent = capitalizeFirstLetter(weekDayText);

    dayIcon.src = getIconByCode(item.iconCode.replace("n", "d"));
    dayIcon.title = conditionText;
    dayIcon.alt = conditionText;

    dayIconContainer.classList.add("day-icon-container");
    dayGroup.classList.add("day-group");
    weekday.classList.add("weekday");
    dayIcon.classList.add("day-icon");

    dayGroup.appendChild(weekday);
    dayIconContainer.appendChild(dayIcon);
    dayGroup.appendChild(dayIconContainer);
    forecastGroup.appendChild(dayGroup);
  }

  main.appendChild(cityName);
  maxTempGroup.appendChild(maxTempText);
  maxTempGroup.appendChild(maxTemp);
  currentTempsGroup.appendChild(maxTempGroup);
  currentTempsGroup.appendChild(currentTemp);
  minTempGroup.appendChild(minTempText);
  minTempGroup.appendChild(minTemp);
  currentTempsGroup.appendChild(minTempGroup);
  main.appendChild(currentTempsGroup);
  currentTempIconContainer.appendChild(currentTempIcon);
  main.appendChild(currentTempIconContainer);
  main.appendChild(forecastGroup);
}
