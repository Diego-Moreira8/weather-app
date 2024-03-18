/*
  Renders an error message on the DOM for a specified duration, 
  then removes it. 

  @param error The Error object containing the error message to display.
  @returns A Promise that resolves when the error message is removed.
*/

export default function renderErrorMessage(error: Error): Promise<void> {
  return new Promise((resolve) => {
    const root = document.querySelector("#root");
    const container = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = error.message;
    container.classList.add("error-msg-container");

    container.appendChild(p);
    root.appendChild(container);

    setTimeout(() => {
      container.classList.add("hidden");
    }, 5000);

    setTimeout(() => {
      root.removeChild(container);
      resolve();
    }, 6000);
  });
}
