/*
* Author: Marlon Cockett
* Purpose: Apart of the Model. Contains application internal state and methods for manipulating said state, so data remains encapsulated. 
*/

let state = {
    isNewPanningAction: true,
    isPointerDown: false,
    isPointerMoving: false,
    pointerPosCurrent: {x: 0, y: 0},
    pointerPosPrevious:{ x: 0, y: 0},
    pointerPosDelta: {x: 0, y:0},
};

export function getIsNewPanningAction () {
    return state.isNewPanningAction;
}
export function setIsNewPanningAction (value) {
    state.isNewPanningAction = value;
}
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
export function getPointerPosCurrent () {
    return state.pointerPosCurrent;
}
export function setPointerPosCurrent (valueX, valueY) {
    state.pointerPosCurrent.x = valueX;
    state.pointerPosCurrent.y = valueY;
}
export function getPointerPosPrevious () {
    return state.pointerPosPrevious;
}
export function setPointerPosPrevious (valueX, valueY) {
    state.pointerPosPrevious.x = valueX;
    state.pointerPosPrevious.y = valueY;
}
export function getPointerPosDelta () {
    return state.pointerPosDelta;
}
export function setPointerPosDelta (valueX, valueY) {
    state.pointerPosDelta.x = valueX;
    state.pointerPosDelta.y = valueY;
}
export function calcAndSetPointerPosDelta (){
    setPointerPosDelta(getPointerPosCurrent().x - getPointerPosPrevious().x, getPointerPosCurrent().y - getPointerPosPrevious().y);
    // console.log(getPointerPosDelta());
}

