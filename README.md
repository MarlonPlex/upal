# upal-src
Official repository of the MPlex UTech Maps web app, UPal.

## MVP Goal
MVP - Basic Interface with searching for location
No Live position, no path finder.

## Tasks
- [ ] Basic Pan with Mouse Click and Drag
    - [x] Draw/pan in one arbitrary direction
    - [x] Pan according to mouse coords
- [ ] Basic Zoom with Mouse wheel
- [ ] Drawing map content from local PostGre DB
- [ ] Connect to Remote DB with simple API once local testing complete
- [ ] Basic UI 
    - [x] Full screen Canvas and Unskewed Drawing
- [ ] Search functionality


## Temp Psuedo
Redraw shapes by moving origin relative to cursor coordinates delta

offset transform origin using difference between between current and last pointer position (curr-last: right move = positive, left move = negative)  

save before handle panning is called
in Handle panning
obtain coords delta and add to state, add relevant getter and setter
translate canvas transformation matrix using the coords delta
call draw
restore of handle planning

Solve jumping to cursor issue

IF PUp OR POut THEN
    SET NewAction = True

IF PMove THEN
    CALL HandlePanning
        IF PDown && PMove THEN
            IF NewAction == False THEN
                SET Prev, Current
                CALL CalcDelta
                CALL DRAW
            SET NewAction = False



