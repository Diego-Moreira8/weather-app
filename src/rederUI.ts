function renderUI(): void {
  const content = document.querySelector("#content");
  const searchBar = document.createElement("div");
  const input = document.createElement("input");
  const searchBtn = document.createElement("button");
  let cityName: string = "";

  input.setAttribute("type", "text");
  input.id = "city";
  searchBtn.textContent = "Buscar";

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") console.log(cityName);
    cityName = input.value;
  });

  searchBtn.addEventListener("click", () => console.log(cityName));

  searchBar.appendChild(input);
  searchBar.appendChild(searchBtn);
  content.appendChild(searchBar);
}

export default renderUI;
