/*
* Author: Marlon Cockett
* Purpose: Apart of the Controller. Controls all event and handler logic. 
*/
import * as state from "./state.js";
import renderer from "./renderer.js";

/*EVENTS*/
function bindEvents({env}) {
    env.canvas.addEventListener("pointermove", (event) => {
        state.setIsPointerMoving(true);
        handlePanning({event, env});
    });
    env.canvas.addEventListener("pointerdown", (event) => {
        state.setIsPointerDown(true);
    });
    env.canvas.addEventListener("pointerup", handlePointerUp); 
    env.canvas.addEventListener("pointerout", handlePointerUp);

    env.window.addEventListener("resize", (event) => {
        renderer.canvasSetup(env);
    });
}

/*HANDLERS*/

/* 
* This handlePanning function will only run when the pointer coordinates change event is fired, .i.e,
* i.e. the pointer moves, hence all we need to do is check if pointer down flag is true as well for panning to be valid.
*/
async function handlePanning({event, env: {ctx, canvas}}) {
    if (state.getIsPointerDown() && state.getIsPointerMoving()) {
        state.setPointerPosPrevious(state.getPointerPosCurrent().x, state.getPointerPosCurrent().y);
        state.setPointerPosCurrent(event.offsetX, event.offsetY);
        state.calcAndSetPointerPosDelta();

        // A panning action is when the pointer is moving and and engaged (down), 
        // if the pointer is lifted and re-engaged, that's the beginning of a new panning action.
        // On the first run of such actions, we do not want to pass PointerPosdelta to the translate function
        // because that will make the origin jump to the pointer coordinates rather than where they were
        // at the end of the last panning action. hence this flag check below. 
        if (!state.getIsNewPanningAction()) {
            ctx.translate(state.getPointerPosDelta().x, state.getPointerPosDelta().y);
            renderer.clearCanvas({ctx, canvas});
            renderer.draw({ctx});
        }
        state.setIsNewPanningAction(false);
        await new Promise ((resolve) => {setTimeout(resolve, 0)});
    }
}

function handlePointerUp(event) {
    state.setIsPointerDown(false);
    state.setIsNewPanningAction(true); 
}

export { bindEvents };
