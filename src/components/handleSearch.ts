import getGeoCode from "../api/getGeoCode";
import getForecast from "../api/getForecast";
import getCurrentWeather from "../api/getCurrentWeather";
import reduceForecastList from "../api/reduceForecastList";
import renderWeather from "./renderWeather";
import renderErrorMessage from "./renderErrorMessage";
import GeoCode from "../interfaces/GeoCode";

export default async function handleSearch(
  location: string | GeoCode
): Promise<void> {
  const loadingScreen = document.querySelector(".loading-overlay");

  try {
    loadingScreen.classList.remove("hidden");

    if (typeof location === "string") {
      location = await getGeoCode(location);

      if (!location) {
        throw new Error(
          `Houve um erro ao buscar os dados da localização. 
          Verifique se o nome da cidade está correto e 
          se o seu dispositivo está conectado à internet.`
        );
      }
    }

    const currWeather = await getCurrentWeather(location);
    const forecast = await getForecast(location);

    if (!currWeather || !forecast) {
      throw new Error(
        `Houve um erro ao buscar os dados meteorológicos. 
        Verifique se o seu dispositivo está conectado à internet.`
      );
    }

    const reducedForecast = reduceForecastList(forecast.list);
    renderWeather(location, currWeather, reducedForecast);
    loadingScreen.classList.add("hidden");
  } catch (error) {
    renderErrorMessage(error);
    loadingScreen.classList.add("hidden");
    return;
  }
}
