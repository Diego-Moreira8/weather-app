import API_KEY from "./key";
import WeatherData from "../interfaces/WeatherData";

export default async function getWeather(
  city: string
): Promise<WeatherData | null> {
  const API_WEATHER: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(API_WEATHER);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    const weatherData: WeatherData = {
      cityName: data.name,
      temperature: data.main.temp,
    };

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
