import API_KEY from "./key";
import GeoCode from "../interfaces/GeoCode";
import CurrentWeather from "../interfaces/CurrentWeather";

export default async function getCurrentWeather(
  geoCode: GeoCode
): Promise<CurrentWeather | null> {
  const { lat, lon } = geoCode;
  const currentWeather: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const reponse = await fetch(currentWeather);

    if (!reponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: CurrentWeather = await reponse.json();

    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
}
