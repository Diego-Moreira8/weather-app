import API_KEY from "./key";
import getGeocode from "./getGeocode";

export default async function getForecast(
  city: string
): Promise<Object | null> {
  const { lat, lon } = await getGeocode(city);
  const API_FORECAST: string = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(API_FORECAST);

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}