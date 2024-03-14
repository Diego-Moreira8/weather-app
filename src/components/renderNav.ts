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

  const getEnterPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && input.value) {
      handleSearch(input.value);
      searchOverlay.classList.add(HIDDEN);
    }
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
  searchContainer.classList.add("search-container");
  searchBtn.classList.add("search-btn");

  searchOverlay.classList.add(HIDDEN);

  openSearchBtn.addEventListener("click", openSearch);
  searchOverlay.addEventListener("click", handleOverlayClick);
  input.addEventListener("keyup", getEnterPress);
  searchBtn.addEventListener("click", () => {
    if (input.value) {
      handleSearch(input.value);
      searchOverlay.classList.add(HIDDEN);
    }
    input.focus();
  });

  searchContainer.appendChild(label);
  searchContainer.appendChild(input);
  searchContainer.appendChild(searchBtn);
  searchOverlay.appendChild(searchContainer);
  openSearchBtn.appendChild(searchIconElement);
  nav.appendChild(openSearchBtn);
  nav.appendChild(searchOverlay);
}
