import handleSearch from "./components/handleSearch";
import renderNav from "./components/renderNav";
import "./styles.scss";

const root = document.querySelector("#root");
const main = document.createElement("main");
const nav = document.createElement("nav");

root.appendChild(main);
root.appendChild(nav);

(async function () {
  await handleSearch("Catalão");
  renderNav();
})();
