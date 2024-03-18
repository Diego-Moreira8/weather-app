/*
  Retrieves the corresponding weather icon directory 
  based on the provided weather code.
*/

import brokenClouds from "../images/weather-icons/broken-clouds.svg";
import dayClearSky from "../images/weather-icons/day-clear-sky.svg";
import dayFewClouds from "../images/weather-icons/day-few-clouds.svg";
import dayRain from "../images/weather-icons/day-rain.svg";
import mist from "../images/weather-icons/mist.svg";
import nightClearSky from "../images/weather-icons/night-clear-sky.svg";
import nightFewClouds from "../images/weather-icons/night-few-clouds.svg";
import nightRain from "../images/weather-icons/night-rain.svg";
import scatteredClouds from "../images/weather-icons/scattered-clouds.svg";
import showerRain from "../images/weather-icons/shower-rain.svg";
import snow from "../images/weather-icons/snow.svg";
import thunderstorm from "../images/weather-icons/thunderstorm.svg";

const weatherIcons: Record<string, string> = {
  "01d": dayClearSky,
  "01n": nightClearSky,
  "02d": dayFewClouds,
  "02n": nightFewClouds,
  "03d": scatteredClouds,
  "03n": scatteredClouds,
  "04d": brokenClouds,
  "04n": brokenClouds,
  "09d": showerRain,
  "09n": showerRain,
  "10d": dayRain,
  "10n": nightRain,
  "11d": thunderstorm,
  "11n": thunderstorm,
  "13d": snow,
  "13n": snow,
  "50d": mist,
  "50n": mist,
};

export default function getIconByCode(code: string): string {
  return weatherIcons[code] || "";
}
