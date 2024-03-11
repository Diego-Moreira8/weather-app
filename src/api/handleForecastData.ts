import { List as ForecastList } from "../interfaces/Forecast";

interface ReducedForecast {
  day: Date;
  condition: string;
  iconCode: string;
}

export default function reduceForecastList(
  list: ForecastList[]
): ReducedForecast[] {
  /*
    Return an array with the most important conditions 
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

  const result: ReducedForecast[] = [];
  const today = new Date();

  for (let item of list) {
    const itemDate = new Date(item.dt * 1000);
    const itemCondition = item.weather[0].main.toLowerCase();
    const itemIconCode = item.weather[0].icon;
    const lastPushedItem: ReducedForecast = result.length
      ? result[result.length - 1]
      : null;

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
}
