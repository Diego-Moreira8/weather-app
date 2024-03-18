/*
  Creates a loading screen to be dynamically retained in the DOM. 
  It is initially hidden and can be displayed by removing the 'hidden' class.
*/

export default function createLoadingScreen(): void {
  const root = document.querySelector("#root");
  const loadingOverlay = document.createElement("div");
  const loadingText = document.createElement("p");

  loadingText.textContent = "Carregando...";

  loadingOverlay.classList.add("loading-overlay");
  loadingOverlay.classList.add("hidden");
  loadingText.classList.add("loading-text");

  loadingOverlay.appendChild(loadingText);
  root.appendChild(loadingOverlay);
}
