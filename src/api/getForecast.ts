import API_KEY from "./key";
import GeoCode from "../interfaces/GeoCode";
import Forecast from "../interfaces/Forecast";

export default async function getForecast(
  geoCode: GeoCode
): Promise<Forecast | null> {
  const { lat, lon } = geoCode;
  const forecast: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`;

  try {
    const reponse = await fetch(forecast);

    if (!reponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Forecast = await reponse.json();

    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
}
