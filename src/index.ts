import getForecast from "./api/getForecast";

(async function testing() {
  const forecastData = await getForecast("sao paulo");
  console.log(forecastData);
})();
