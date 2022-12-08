async function getWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f665e17e864ad3ebcceb327ae8c2131a`,
    { mode: "cors" }
  );

  const cityWeather = await response.json();

  console.log(cityWeather.name);
}

getWeather("catalao");
