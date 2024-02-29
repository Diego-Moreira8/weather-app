import renderHeader from "./renderHeader";
import renderWeather from "./renderWeather";

function renderUI(): void {
  renderHeader();
  renderWeather("São Paulo");
}

export default renderUI;
