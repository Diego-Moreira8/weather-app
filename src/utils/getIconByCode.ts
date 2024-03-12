import WeatherIcon from "../interfaces/WeatherIcon";

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

const weatherIcons: WeatherIcon[] = [
  { url: dayClearSky, code: "01d" },
  { url: nightClearSky, code: "01n" },
  { url: dayFewClouds, code: "02d" },
  { url: nightFewClouds, code: "02n" },
  { url: scatteredClouds, code: "03d" },
  { url: scatteredClouds, code: "03n" },
  { url: brokenClouds, code: "04d" },
  { url: brokenClouds, code: "04n" },
  { url: showerRain, code: "09d" },
  { url: showerRain, code: "09n" },
  { url: dayRain, code: "10d" },
  { url: nightRain, code: "10n" },
  { url: thunderstorm, code: "11d" },
  { url: thunderstorm, code: "11n" },
  { url: snow, code: "13d" },
  { url: snow, code: "13n" },
  { url: mist, code: "50d" },
  { url: mist, code: "50n" },
];

export default function getIconByCode(code: string): string {
  const match = weatherIcons.find((icon) => icon.code === code);
  return match.url;
}
