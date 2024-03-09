import getForecast from "./api/getForecast";
import handleForecastData from "./api/handleForecastData";

(async function testing() {
  const forecastData = await getForecast("kiev");
  if (forecastData) {
    const handledFCData = handleForecastData(forecastData);
    console.log(handledFCData);
  }
})();
