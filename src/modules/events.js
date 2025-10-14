/*
* Author: Marlon Cockett
* Purpose: Apart of the Controller. Controls all event and handler logic. 
*/
import * as state from "./state.js";
import renderer from "./renderer.js";

/*EVENTS*/
function bindEvents(ctx) {
    canvas.addEventListener("pointermove", (event) => {
        state.setIsPointerMoving(true);
        handlePanning(event, ctx);
    });
    canvas.addEventListener("pointerdown", (event) => {
        state.setIsPointerDown(true);
    });
    canvas.addEventListener("pointerup", handlePointerUp); 
    canvas.addEventListener("pointerout", handlePointerUp);
}

/*HANDLERS*/

/* 
* This handlePanning function will only run when the mouse coordinates change event is fired,
* Once it enters the loop below the event object's X and Y values will remain the same,
* and in that case the "if" statement check inside will set isPointerMoving to false and the loop will terminate.
*/
async function handlePanning(event, ctx) {
    while (state.getIsPointerDown() && state.getIsPointerMoving()) {
        state.setPreviousPointerPos(state.getCurrentPointerPos().x, state.getCurrentPointerPos().y);
        state.setCurrentPointerPos(event.offsetX, event.offsetY);
        if(state.getPreviousPointerPos().x === state.getCurrentPointerPos().x && state.getPreviousPointerPos().y === state.getCurrentPointerPos().y) {
            state.setIsPointerMoving(false);
        }
        renderer.draw(event, ctx);
        await new Promise ((resolve) => {setTimeout(resolve, 0)});
    }

}

function handlePointerUp(event) {
    state.setIsPointerDown(false);
}

export { bindEvents };
