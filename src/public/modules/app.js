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

        fetch("/example/route")
            .then((response) => {return response.json()})
            .then((data) => {console.log(data)})
            .catch((error) => {console.error(error)});
    },
};



export default App;
