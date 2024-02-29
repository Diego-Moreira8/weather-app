import renderWeather from "./renderWeather";

function renderHeader(): void {
  const header = document.querySelector("header");
  const input = document.createElement("input");
  const searchBtn = document.createElement("button");
  let cityName: string;

  input.setAttribute("type", "text");
  input.id = "city";
  searchBtn.textContent = "Buscar";

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") renderWeather(cityName);
    cityName = input.value;
  });

  searchBtn.addEventListener("click", () => renderWeather(cityName));

  header.appendChild(input);
  header.appendChild(searchBtn);
}

export default renderHeader;
