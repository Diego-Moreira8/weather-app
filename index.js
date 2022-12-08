async function getWeather(cityName) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f665e17e864ad3ebcceb327ae8c2131a`,
    { mode: "cors" }
  );
  response = await response.json();
  return response;
}

const searchBar = document.querySelector("#city-search-bar");
searchBar.addEventListener("submit", submitSearch);

function submitSearch(e) {
  // Calls API with the input and render content
  e.preventDefault();
  const input = e.target[0].value;
  getWeather(input).then((response) => renderWeather(response));
}

function renderWeather(weatherObj) {
  console.log(weatherObj);

  const weatherContainer = document.querySelector("#weather-container");
  const cityName = weatherContainer.querySelector(".city-name");
  const currentTemperature = weatherContainer.querySelector(
    ".current-temperature"
  );

  cityName.textContent = weatherObj.name;
  currentTemperature.textContent = weatherObj.main.temp;
}
