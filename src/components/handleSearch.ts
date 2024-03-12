import getGeoCode from "../api/getGeoCode";
import getForecast from "../api/getForecast";
import getCurrentWeather from "../api/getCurrentWeather";
import reduceForecastList from "../api/reduceForecastList";
import renderWeather from "./renderWeather";

export default async function handleSearch(cityName: string): Promise<void> {
  const geoCode = await getGeoCode(cityName);
  const currWeather = await getCurrentWeather(geoCode);
  const forecast = await getForecast(geoCode);
  const reducedForecast = reduceForecastList(forecast.list);
  renderWeather(currWeather, reducedForecast);
}
