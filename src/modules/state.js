/*
* Author: Marlon Cockett
* Purpose: Apart of the Model. Contains application internal state and methods for manipulating said state, so data remains encapsulated. 
*/

let state = {
    isPointerDown: false,
    isPointerMoving: false,
    increment: 0,
    previousPointerPos:{ x: 0, y: 0},
    currentPointerPos: {x: 0, y: 0},
};

export function getIsPointerDown () {
    return state.isPointerDown;
}
export function setIsPointerDown (value) {
    state.isPointerDown = value;
}
export function getIsPointerMoving () {
    return state.isPointerMoving;
}
export function setIsPointerMoving (value) {
    state.isPointerMoving = value;
}
export function getIncrement () {
    return state.increment;
}
export function setIncrement (value) {
    state.increment = state.increment + value;
}
export function getPreviousPointerPos () {
    return state.previousPointerPos;
}
export function setPreviousPointerPos (valueX, valueY) {
    state.previousPointerPos.x = valueX;
    state.previousPointerPos.y = valueY;
}
export function getCurrentPointerPos () {
    return state.currentPointerPos;
}
export function setCurrentPointerPos (valueX, valueY) {
    state.currentPointerPos.x = valueX;
    state.currentPointerPos.y = valueY;
}

/*Fix getters and setters then update the renderer, app and events logic to use this*/