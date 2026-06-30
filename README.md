# Note
Development paused for a few months.
# upal-src
Open canvas maps web app, UPal.

## MVP Goal
MVP - Basic Interface with searching for location and pathfinding.

## Tasks
- [] Basic Pan with Mouse Click and Drag
    - [x] Draw/pan in one arbitrary direction
    - [x] Pan according to mouse coords
- [ ] Basic Zoom with Mouse wheel
    - [x] Classic Zoom implemented
    - [x] Redraw shapes by moving origin relative to cursor coordinates delta
    - [x] offset transform origin using difference between between current and last pointer
    - [ ] Adjust panning sensitivity with scale
    - [ ] Min-max cap zoom/scale values.position (curr-last: right move = positive, left move = negative).
    - [ ] Task 1.0 below
    - [ ] Solve jumping to cursor issue
- [ ] Drawing map content from local PostGre DB
- [ ] Connect to Remote DB with simple API once local testing complete
- [ ] Basic UI 
    - [x] Full screen Canvas and Unskewed Drawing
- [ ] Search functionality
- [ ] Pathfinding functionality

## Task 1.0 Psuedo
save before handle panning is called
in Handle panning
obtain coords delta and add to state, add relevant getter and setter
translate canvas transformation matrix using the coords delta
call draw
restore of handle planning









