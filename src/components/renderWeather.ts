import CurrentWeather from "../interfaces/CurrentWeather";
import ReducedForecast from "../interfaces/ReducedForecast";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import getIconByCode from "../utils/getIconByCode";

export default function renderWeather(
  currWeather: CurrentWeather,
  forecast: ReducedForecast[]
): void {
  const main = document.querySelector("main");
  const cityName = document.createElement("h1");
  const maxTempGroup = document.createElement("div");
  const maxTempText = document.createElement("p");
  const maxTemp = document.createElement("p");
  const currentTemp = document.createElement("p");
  const minTempGroup = document.createElement("div");
  const minTempText = document.createElement("p");
  const minTemp = document.createElement("p");
  const currentTempIcon = document.createElement("img");
  const forecastGroup = document.createElement("div");
  const descriptionText = capitalizeFirstLetter(
    currWeather.weather[0].description
  );

  main.innerHTML = "";

  cityName.textContent = currWeather.name;
  maxTempText.textContent = "Máx.:";
  maxTemp.textContent = `${currWeather.main.temp_max}`;
  currentTemp.textContent = `${currWeather.main.temp}`;
  minTempText.textContent = "Mín.:";
  minTemp.textContent = `${currWeather.main.temp_min}`;

  currentTempIcon.src = getIconByCode(currWeather.weather[0].icon);
  currentTempIcon.title = descriptionText;
  currentTempIcon.alt = descriptionText;

  for (let item of forecast) {
    const dayGroup = document.createElement("div");
    const weekday = document.createElement("p");
    const dayIcon = document.createElement("img");
    const weekDayText = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
    }).format(item.day);
    const conditionText = capitalizeFirstLetter(item.condition);

    weekday.textContent = capitalizeFirstLetter(weekDayText);

    dayIcon.src = getIconByCode(item.iconCode);
    dayIcon.title = conditionText;
    dayIcon.alt = conditionText;

    dayGroup.appendChild(weekday);
    dayGroup.appendChild(dayIcon);
    forecastGroup.appendChild(dayGroup);
  }

  main.appendChild(cityName);
  maxTempGroup.appendChild(maxTempText);
  maxTempGroup.appendChild(maxTemp);
  main.appendChild(maxTempGroup);
  main.appendChild(currentTemp);
  minTempGroup.appendChild(minTempText);
  minTempGroup.appendChild(minTemp);
  main.appendChild(currentTempIcon);
  main.appendChild(minTempGroup);
  main.appendChild(forecastGroup);
}
