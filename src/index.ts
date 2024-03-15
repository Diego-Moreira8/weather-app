import getReverseGeocoding from "./api/getReverseGeocoding";
import handleSearch from "./components/handleSearch";
import createLoadingScreen from "./components/createLoadingScreen";
import renderNav from "./components/renderNav";
import requestUserLocation from "./components/requestUserLocation";
import "./styles.scss";

const root = document.querySelector("#root");
const main = document.createElement("main");
const nav = document.createElement("nav");

root.appendChild(main);
root.appendChild(nav);

(async function () {
  renderNav();
  createLoadingScreen();

  const userLocation = await requestUserLocation();

  handleSearch(
    userLocation ? await getReverseGeocoding(userLocation) : "Brasília"
  );
})();
