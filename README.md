# Note:
Project development currently paused.
# UPal
MPlex Maps web app, UPal.

## MVP Goal
MVP - Basic Interface with searching for location
No Live position, no path finder.

## Tasks
- [x] Basic Pan with Mouse Click and Drag
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


## Temp Psuedo
Draw map content from Pastgre DB

Create Map SVG and embed in canvas
    Make sure map layout aligns with lat-long coordinate grid
Test zoom and panning and max/min zoom scales

Populate Postgres db with coordinate calues (1 for now, first pixels, then coords and convert)
Model State Fetches coords and stores that state intnerally
Contrroller models (App, Events) retreives state and passes it to view renderer.draw (rename to renderer.drawMap) when called 


