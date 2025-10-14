/*
* Author: Marlon Cockett
* Purpose: Initializes the entry point to the application. 
* Note: I have opted to follow a design that passes the environemnt resources the application from here. 
*/
import App from "./modules/app.js";
import CONFIG from "./modules/config.js";

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById(CONFIG.canvasSelector);
    App.init(canvas);
});