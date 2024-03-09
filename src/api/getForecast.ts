import API_KEY from "./key";
import getGeocode from "./getGeocode";

interface WeekForecast {
  day: Date;
  condition: string;
  iconCode: string;
}

interface Forecast {
  cityName: string;
  temp: number;
  max: number;
  min: number;
  icon: string;
  weekForecast: WeekForecast[];
}

export default async function getForecast(
  city: string
): Promise<Forecast | null> {
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

    const generate5DayForecast = (): WeekForecast[] => {
      /*
        Return a WeekForecast array with the most important conditions 
        with its icons for the next 5 days.
      */

      const CONDITIONS: string[] = [
        "clear",
        "clouds",
        "atmosphere",
        "drizzle",
        "rain",
        "snow",
        "thunderstorm",
      ]; // The more severe the condition, the higher its index
      const result: WeekForecast[] = [];
      const today = new Date();

      for (let item of forecastData.list) {
        const itemDate = new Date(item["dt"] * 1000);
        const itemCondition = String(item["weather"][0]["main"]).toLowerCase();
        const itemIconCode = String(item["weather"][0]["icon"]);
        const lastPushedItem = result.length ? result[result.length - 1] : null;

        console.log(itemDate.getDate(), itemCondition);

        if (itemDate.getDate() > today.getDate()) {
          if (
            lastPushedItem &&
            lastPushedItem.day.getDate() === itemDate.getDate()
          ) {
            if (
              CONDITIONS.indexOf(itemCondition) >
              CONDITIONS.indexOf(lastPushedItem.condition)
            ) {
              lastPushedItem.condition = itemCondition;
              lastPushedItem.iconCode = itemIconCode;
            }
          } else {
            result.push({
              day: itemDate,
              condition: itemCondition,
              iconCode: itemIconCode,
            });
          }
        }
      }

      return result;
    };

    const forecast: Forecast = {
      cityName: currWeatherData.name,
      temp: currWeatherData.main.temp,
      max: currWeatherData.main.temp_max,
      min: currWeatherData.main.temp_min,
      icon: currWeatherData.weather[0].icon,
      weekForecast: generate5DayForecast(),
    };

    return forecast;
  } catch (error) {
    console.error(error);
    return null;
  }
}
