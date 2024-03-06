// https://openweathermap.org/api/geocoding-api#direct_name_how

import API_KEY from "./key";
import GeoInfo from "../interfaces/GeoInfo";

export default async function getGeocode(
  city: string
): Promise<GeoInfo | null> {
  const API_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;

  try {
    const response = await fetch(API_GEOCODING);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = await response.json();

    if (data.length === 0) {
      throw new Error("City name not found");
    }

    const geoData: GeoInfo = {
      city: data[0].name,
      state: data[0].state,
      country: data[0].country,
      lat: data[0].lat,
      lon: data[0].lon,
    };

    return geoData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
