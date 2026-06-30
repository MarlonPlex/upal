/*
* Author: Marlon Cockett
* Purpose: Apart of the View. Contains all logic related to DOM Manipulation and updating the UI. 
*/

const renderer = {
    draw({ctx, campusMapImg}) {
        // ctx.fillRect(0, 0, 50, 50);
        console.log(campusMapImg);
        // TODO Onload solution
        ctx.drawImage(campusMapImg, 0, 0);
        campusMapImg.onload = () => {ctx.drawImage(campusMapImg, 0, 0)};
    },
    // Pass entire env to canvasSetup so it can be passed to renderer.draw method call.
    canvasSetup(env) {
        const domMatrix = env.ctx.getTransform();
        env.canvas.setAttribute("width", env.htmlElement.clientWidth);
        env.canvas.setAttribute("height", env.htmlElement.clientHeight);
        env.ctx.setTransform(domMatrix);
        renderer.draw(env);
    },
    clearCanvas({ctx, canvas}) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    },
};

export default renderer;