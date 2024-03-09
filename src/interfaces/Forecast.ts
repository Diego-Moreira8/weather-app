import WeekForecast from "./WeekForecast";

export default interface Forecast {
  cityName: string;
  temp: number;
  max: number;
  min: number;
  icon: string;
  weekForecast: WeekForecast[];
}
