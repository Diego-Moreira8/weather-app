import getGeoCode from "../api/getGeoCode";
import getForecast from "../api/getForecast";
import getCurrentWeather from "../api/getCurrentWeather";
import reduceForecastList from "../api/reduceForecastList";
import renderWeather from "./renderWeather";
import renderErrorMessage from "./renderErrorMessage";

export default async function handleSearch(cityName: string): Promise<void> {
  const loadingScreen = document.querySelector(".loading-overlay");

  try {
    loadingScreen.classList.remove("hidden");

    const geoCode = await getGeoCode(cityName);

    if (!geoCode) {
      throw new Error(
        `Houve um erro ao buscar os dados da localização. 
        Verifique se o nome da cidade está correto e 
        se o seu dispositivo está conectado à internet.`
      );
    }

    const currWeather = await getCurrentWeather(geoCode);
    const forecast = await getForecast(geoCode);

    if (!currWeather || !forecast) {
      throw new Error(
        `Houve um erro ao buscar os dados meteorológicos. 
        Verifique se o seu dispositivo está conectado à internet.`
      );
    }

    const reducedForecast = reduceForecastList(forecast.list);
    renderWeather(geoCode, currWeather, reducedForecast);
    loadingScreen.classList.add("hidden");
  } catch (error) {
    renderErrorMessage(error);
    loadingScreen.classList.add("hidden");
    return;
  }
}
