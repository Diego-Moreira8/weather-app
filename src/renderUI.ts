function renderUI(): void {
  const content = document.querySelector("#content");
  const searchBar = document.createElement("div");
  const input = document.createElement("input");
  const searchBtn = document.createElement("button");
  let cityName: string;

  const renderWeather = () => {
    // To-do
    console.log(cityName);
  };

  input.setAttribute("type", "text");
  input.id = "city";
  searchBtn.textContent = "Buscar";

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") renderWeather();
    cityName = input.value;
  });

  searchBtn.addEventListener("click", renderWeather);

  searchBar.appendChild(input);
  searchBar.appendChild(searchBtn);
  content.appendChild(searchBar);
}

export default renderUI;
