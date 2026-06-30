/*
* Author: Marlon Cockett
* Purpose: Initializes the entry point to the application. 
* Note: I have opted to follow a design that passes the environemnt resources the application from here. 
*/
import App from "./modules/app.js";
import CONFIG from "./modules/config.js";
import { loadImage } from "./utils/assets.js";

window.addEventListener('DOMContentLoaded', () => {
    const canvas =  document.getElementById(CONFIG.canvasSelector);
    const htmlElement =  document.querySelector("html");
    
    const campusMapImg = new Image();
    campusMapImg.src = "./images/map_bg.svg"

    const env = {
        canvas: canvas,
        ctx: canvas.getContext(CONFIG.contextType),
        htmlElement: htmlElement,
        window: window,
        campusMapImg: campusMapImg
    }
    App.init(env);
});