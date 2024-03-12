import getCurrentWeather from "./api/getCurrentWeather";
import getForecast from "./api/getForecast";
import getGeoCode from "./api/getGeoCode";
import reduceForecastList from "./api/reduceForecastList";
import renderWeather from "./components/renderWeather";
import "./styles/styles.scss";

const root = document.querySelector("#root");
const main = document.createElement("main");

root.appendChild(main);

(async function () {
  const geoCode = await getGeoCode("las vegas");
  const currWeather = await getCurrentWeather(geoCode);
  const forecast = await getForecast(geoCode);
  const reducedForecast = reduceForecastList(forecast.list);
  renderWeather(currWeather, reducedForecast);
})();
