/*
* Author: Marlon Cockett
* Purpose: Apart of the View. Contains all logic related to DOM Manipulation and updating the UI. 
*/
const renderer = {
    draw({ctx}) {
        ctx.fillRect(0, 0, 50, 50);
    },
    canvasSetup({ctx, htmlElement, canvas}) {
        const domMatrix = ctx.getTransform();
        canvas.setAttribute("width", htmlElement.clientWidth);
        canvas.setAttribute("height", htmlElement.clientHeight);
        ctx.setTransform(domMatrix);
        renderer.draw({ctx});
    },
    clearCanvas({ctx, canvas}) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    },
};

export default renderer;