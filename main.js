import "./src/styles/index.css";
import "./src/assets/jalali-date-picker/jalalidatepicker.min.css";
import "./src/assets/jalali-date-picker/jalalidatepicker.min.js";
import { App } from "./src/app";

document.querySelector("#app").append(App());
