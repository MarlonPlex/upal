/*
* Author: Marlon Cockett
* Purpose: Apart fo the Controller. Entry point to the application. 
*/
import CONFIG from "./config.js"
import * as Events from "./events.js";

const App = {
    init(canvas) {
        const ctx = canvas.getContext(CONFIG.contextType);
        Events.bindEvents(ctx);
    },
};


export default App;
