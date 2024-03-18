/*
  Renders a navigation bar with a search functionality.
  It creates a button to open the search overlay, which contains
  an input field and a search button. The search functionality
  triggers a search operation when the user inputs a value and 
  presses Enter or clicks the search button. The container can 
  be closed by clicking outside of it. The search functionality
  is handled by the 'handleSearch' module.
*/

import handleSearch from "./handleSearch";
import searchIcon from "../images/search.svg";

const HIDDEN = "hidden";

export default function renderNav(): void {
  const nav = document.querySelector("nav");
  const openSearchBtn = document.createElement("button");
  const searchIconElement = document.createElement("img");
  const searchOverlay = document.createElement("div");
  const searchContainer = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const searchBtn = document.createElement("button");

  const openSearch = () => {
    searchOverlay.classList.remove(HIDDEN);
    input.focus();
    input.select();
  };

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === searchOverlay) {
      searchOverlay.classList.add(HIDDEN);
    }
  };

  const search = () => {
    if (input.value) {
      handleSearch(input.value);
      searchOverlay.classList.add(HIDDEN);
    }
  };

  const getEnterPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") search();
  };

  const handleSearchBtn = () => {
    search();
    input.focus(); // Focus returns if there is no input
  };

  label.textContent = "Digite o nome da cidade:";
  searchBtn.textContent = "Buscar";

  searchIconElement.src = searchIcon;
  searchIconElement.alt = "Abrir janela de pesquisa";
  openSearchBtn.title = "Abrir janela de pesquisa";
  openSearchBtn.type = "button";
  label.setAttribute("for", "search");
  input.id = "search";
  searchBtn.type = "button";

  openSearchBtn.classList.add("open-search-btn");
  searchIconElement.classList.add("search-icon");
  searchOverlay.classList.add("search-overlay");
  searchOverlay.classList.add(HIDDEN);
  searchContainer.classList.add("search-container");
  searchBtn.classList.add("search-btn");

  openSearchBtn.addEventListener("click", openSearch);
  searchOverlay.addEventListener("click", handleOverlayClick);
  input.addEventListener("keyup", getEnterPress);
  searchBtn.addEventListener("click", handleSearchBtn);

  searchContainer.appendChild(label);
  searchContainer.appendChild(input);
  searchContainer.appendChild(searchBtn);
  searchOverlay.appendChild(searchContainer);
  openSearchBtn.appendChild(searchIconElement);
  nav.appendChild(openSearchBtn);
  nav.appendChild(searchOverlay);
}
