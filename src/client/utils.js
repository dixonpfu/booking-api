import { court_settings } from "./settings.js";

const court_item_width = 60;

const { beginWork, endWork } = court_settings;
function getWorkingHours() {
  let hours = [];

  for (let h = 0; h < 24; h++) {
    if (h >= beginWork && h <= endWork) {
      hours.push(h);
    }
  }

  return hours;
}

export { court_item_width, getWorkingHours };
