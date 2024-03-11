import getCurrentWeather from "./api/getCurrentWeather";
import getForecast from "./api/getForecast";
import getGeoCode from "./api/getGeoCode";
import reduceForecastList from "./api/handleForecastData";
import Forecast from "./interfaces/Forecast";
import GeoCode from "./interfaces/GeoCode";

(async function testing() {
  const geoCode: GeoCode = await getGeoCode("Catalão");
  const currentWeather = await getCurrentWeather(geoCode);
  const forecast: Forecast = await getForecast(geoCode);
  const reducedForecastList = reduceForecastList(forecast.list);

  console.log(currentWeather);
  console.log(forecast);
  console.table(reducedForecastList);
})();
