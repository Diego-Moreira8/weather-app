import CurrentWeather from "../interfaces/CurrentWeather";
import ReducedForecast from "../interfaces/ReducedForecast";

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

  main.innerHTML = "";

  cityName.textContent = currWeather.name;
  maxTempText.textContent = "Máx.:";
  maxTemp.textContent = `${currWeather.main.temp_max}`;
  currentTemp.textContent = `${currWeather.main.temp}`;
  minTempText.textContent = "Mín.:";
  minTemp.textContent = `${currWeather.main.temp_min}`;

  for (let item of forecast) {
    const dayGroup = document.createElement("div");
    const weekday = document.createElement("p");
    const dayIcon = document.createElement("img");

    weekday.textContent = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
    }).format(item.day);

    dayGroup.appendChild(weekday);
    forecastGroup.appendChild(dayGroup);
  }

  main.appendChild(cityName);
  maxTempGroup.appendChild(maxTempText);
  maxTempGroup.appendChild(maxTemp);
  main.appendChild(maxTempGroup);
  main.appendChild(currentTemp);
  minTempGroup.appendChild(minTempText);
  minTempGroup.appendChild(minTemp);
  main.appendChild(minTempGroup);
  main.appendChild(forecastGroup);
}
