/*
* Author: Marlon Cockett
* Purpose: Apart of the View. Contains all logic related to DOM Manipulation and updating the UI. 
*/

import * as state from "./state.js"; 

const renderer = {
    draw({ctx}) {
        state.setIncrement(1);// This is temporary
        // console.log(state.getIncrement());
        // + state.getIncrement()
        ctx.save();
        ctx.reset();
        ctx.fillRect(100, 50, 50, 50);
    },

    canvasSetup({ctx, htmlElement, canvas}) {
        canvas.setAttribute("width", htmlElement.clientWidth);
        canvas.setAttribute("height", htmlElement.clientHeight);
        renderer.draw({ctx});
    },

};

export default renderer;