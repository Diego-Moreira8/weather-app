import getGeoCode from "../api/getGeoCode";
import getForecast from "../api/getForecast";
import getCurrentWeather from "../api/getCurrentWeather";
import reduceForecastList from "../api/reduceForecastList";
import renderWeather from "./renderWeather";

export default async function handleSearch(cityName: string): Promise<void> {
  const loadingScreen = document.querySelector(".loading-overlay");

  try {
    loadingScreen.classList.remove("hidden");

    const geoCode = await getGeoCode(cityName);

    if (!geoCode) {
      throw new Error("Failed fetching geo data");
    }

    const currWeather = await getCurrentWeather(geoCode);
    const forecast = await getForecast(geoCode);

    if (!currWeather || !forecast) {
      throw new Error("Failed fetching weather data");
    }

    const reducedForecast = reduceForecastList(forecast.list);
    renderWeather(geoCode, currWeather, reducedForecast);
    loadingScreen.classList.add("hidden");
  } catch (error) {
    console.error(error);
    loadingScreen.classList.add("hidden");
    return;
  }
}
