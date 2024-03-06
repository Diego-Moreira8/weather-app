import WeatherData from "../interfaces/WeatherData";
import getWeather from "../api/getForecast";

async function renderWeather(cityName: string) {
  const main: HTMLElement = document.querySelector("main");
  const h1: HTMLElement = document.createElement("h1");

  main.innerHTML = "";
  h1.textContent = "...";

  const weatherData: WeatherData | null = await getWeather(cityName);

  if (weatherData === null) {
    h1.textContent = "Erro";
  } else {
    h1.textContent = weatherData.cityName;
  }

  main.appendChild(h1);
}

export default renderWeather;
