import handleSearch from "./components/handleSearch";
import renderLoadingScreen from "./components/renderLoadingScreen";
import renderNav from "./components/renderNav";
import "./styles.scss";

const root = document.querySelector("#root");
const main = document.createElement("main");
const nav = document.createElement("nav");

root.appendChild(main);
root.appendChild(nav);

(async function () {
  renderNav();
  renderLoadingScreen();
  await handleSearch("Catalão");
})();
