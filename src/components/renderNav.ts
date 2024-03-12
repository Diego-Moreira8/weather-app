import handleSearch from "./handleSearch";

const HIDDEN = "hidden";

export default function renderNav(): void {
  const nav = document.querySelector("nav");
  const openSearchBtn = document.createElement("button");
  const searchOverlay = document.createElement("div");
  const searchContainer = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const searchBtn = document.createElement("button");

  const openSearch = () => searchOverlay.classList.remove(HIDDEN);
  const closeSearch = () => searchOverlay.classList.add(HIDDEN);
  const getEnterPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") handleSearch(input.value);
  };

  openSearchBtn.textContent = "Open search";
  searchBtn.textContent = "Search";

  openSearchBtn.type = "button";
  searchBtn.type = "button";

  searchOverlay.classList.add(HIDDEN);

  openSearchBtn.addEventListener("click", openSearch);
  searchOverlay.addEventListener("click", closeSearch);
  input.addEventListener("keyup", getEnterPress);
  searchBtn.addEventListener("click", () => handleSearch(input.value));

  searchContainer.appendChild(label);
  searchContainer.appendChild(input);
  searchContainer.appendChild(searchBtn);
  searchOverlay.appendChild(searchContainer);
  nav.appendChild(openSearchBtn);
  nav.appendChild(searchOverlay);
}
