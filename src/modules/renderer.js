/*
* Author: Marlon Cockett
* Purpose: Apart of the View. Contains all logic related to DOM Manipulation and updating the UI. 
*/

import * as state from "./state.js"; 

const renderer = {
    draw(event, ctx) {
        state.setIncrement(1);// Fix this to be sensitivity based instead.
        // console.log(state.getIncrement());
        ctx.save();
        ctx.reset();
        ctx.fillRect(100 + state.getIncrement(), 50, 50, 50);
    },

};

export default renderer;