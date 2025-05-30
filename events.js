import { handleSettingsFormSubmit } from "./settings.js";
import { timer } from "./timer.js";

const modes = document.querySelectorAll(".mode");
const settingsModalPopover = document.querySelector("#settings-modal");
const information = document.querySelector(".info");
const settingsModalApplyButton = document.querySelector(".settings-modal__btn");

export function setupEventListeners() {
  modes.forEach((mode) => mode.addEventListener("click", switchModes));

  document.addEventListener("keyup", (event) => {
    if (event.target.localName === "input") return;
    if (event.key === "s") settingsModalPopover.togglePopover();
  });
  settingsModalApplyButton.addEventListener("click", handleSettingsFormSubmit);
}

function switchModes(event) {
  const secondsForMode = parseInt(event.target.dataset.time, 10);
  modes.forEach((mode) => mode.classList.remove("active"));
  event.target.classList.add("active");
  information.style.display = "none";
  timer(secondsForMode);
}

function setupActiveToggleEvents(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      buttons.forEach((button) => button.classList.remove("active"));
      event.target.classList.add("active");
    });
  });
}