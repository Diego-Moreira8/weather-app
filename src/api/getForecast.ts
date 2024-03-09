import API_KEY from "./key";
import getGeocode from "./getGeocode";

export default async function getForecast(
  city: string
): Promise<Array<object> | null> {
  const geoData = await getGeocode(city);

  if (geoData === null) {
    console.error("Error retrieving geocode. Impossible to request Forecast");
    return null;
  }

  const { lat, lon } = geoData;
  const API_CURRENT_WEATHER: string = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const API_FORECAST: string = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const currWeatherResponse = await fetch(API_CURRENT_WEATHER);
    const forecastResponse = await fetch(API_FORECAST);

    if (!currWeatherResponse.ok && !forecastResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const currWeatherData = await currWeatherResponse.json();
    const forecastData = await forecastResponse.json();

    return [currWeatherData, forecastData];
  } catch (error) {
    console.error(error);
    return null;
  }
}
