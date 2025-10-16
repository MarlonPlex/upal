/*
* Author: Marlon Cockett
* Purpose: Apart fo the Controller. Entry point to the application. 
*/
import * as Events from "./events.js";
import renderer from "./renderer.js";

const App = {
    init(env) {
        Events.bindEvents({env});
        renderer.canvasSetup(env);
    },
};


export default App;
