/*
  Handles the search operation for weather information based on a location.
  It accepts either a string with the location name or a GeoCode object.
  
  This function fetches the geocode and weather information, then reduces the 
  forecast data to a manageable list using 'reduceForecastList' function.
  
  If any error occurs during the search process, it renders an error message
  using the 'renderErrorMessage' function. 
  
  Additionally, it manages the loading screen by showing it while fetching 
  data and hiding it when the data is received or an error occurs.
*/

import getGeoCode from "../api/getGeocode";
import getForecast from "../api/getForecast";
import getCurrentWeather from "../api/getCurrentWeather";
import reduceForecastList from "../utils/reduceForecastList";
import renderWeather from "./renderWeather";
import renderErrorMessage from "./renderErrorMessage";
import GeoCode from "../interfaces/GeoCode";

export default async function handleSearch(
  location: string | GeoCode
): Promise<void> {
  const loadingScreen = document.querySelector(".loading-overlay");
  loadingScreen.classList.remove("hidden");

  try {
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
