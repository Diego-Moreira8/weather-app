import getForecast from "./api/getForecast";

(async function testing() {
  const forecastData = await getForecast("kiev");
  console.log(forecastData);
})();
