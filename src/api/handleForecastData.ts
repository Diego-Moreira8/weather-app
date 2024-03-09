import Forecast from "../interfaces/Forecast";
import WeekForecast from "../interfaces/WeekForecast";

// TODO: CREATE INTERFACES FOR THE API DATA

export default function handleForecastData(data: any): Forecast {
  const [currWeatherData, forecastData] = data;

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

      //console.log(itemDate.getDate(), itemCondition);

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
}
