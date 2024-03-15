import GeoCode from "../interfaces/GeoCode";
import API_KEY from "./key";

export default async function getReverseGeocoding(
  browserGeolocation: GeolocationPosition
): Promise<GeoCode | null> {
  const { latitude, longitude } = browserGeolocation.coords;
  const revGeocode = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  try {
    const response = await fetch(revGeocode);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: GeoCode[] = await response.json();
    if (data.length === 0) {
      throw new Error("City name not found");
    }

    return data[0];
  } catch (error) {
    console.error(error);

    return null;
  }
}
