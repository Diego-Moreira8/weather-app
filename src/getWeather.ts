interface WeatherData {
  cityName: string;
  temperature: number;
}

async function getWeather(city: string): Promise<WeatherData | null> {
  const API_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f665e17e864ad3ebcceb327ae8c2131a`;

  try {
    const response = await fetch(API_URL);
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

export default getWeather;
