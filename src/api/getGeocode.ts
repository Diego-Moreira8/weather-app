import API_KEY from "./key";
import GeoCode from "../interfaces/GeoCode";

export default async function getGeoCode(
  city: string
): Promise<GeoCode | null> {
  const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;

  try {
    const response = await fetch(geoCode);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    let data: GeoCode[] = await response.json();

    if (data.length === 0) {
      throw new Error("City name not found");
    }

    return data[0];
  } catch (error) {
    console.error(error);

    return null;
  }
}
