import getCurrentWeather from "./api/getCurrentWeather";
import getForecast from "./api/getForecast";
import getReverseGeocoding from "./api/getReverseGeocoding";
import reduceForecastList from "./api/reduceForecastList";
import handleSearch from "./components/handleSearch";
import renderLoadingScreen from "./components/renderLoadingScreen";
import renderNav from "./components/renderNav";
import renderWeather from "./components/renderWeather";
import requestUserLocation from "./components/requestUserLocation";
import "./styles.scss";

const root = document.querySelector("#root");
const main = document.createElement("main");
const nav = document.createElement("nav");

root.appendChild(main);
root.appendChild(nav);

(async function () {
  renderNav();
  renderLoadingScreen();

  const userLocation = await requestUserLocation();

  if (userLocation) {
    const geoCode = await getReverseGeocoding(userLocation);
    const currWeather = await getCurrentWeather(geoCode);
    const forecast = await getForecast(geoCode);
    const reducedForecast = reduceForecastList(forecast.list);
    renderWeather(geoCode, currWeather, reducedForecast);
  } else {
    await handleSearch("Brasília");
  }
})();
