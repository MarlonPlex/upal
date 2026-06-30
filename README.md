# Note:
Project development currently paused.
# UPal
Official repository of the MPlex a Maps web app, UPal.

## MVP Goal
MVP - Basic Interface with searching for location and various pathfinding algorithms.

## Tasks- updated as I go along
- [x] Basic Pan with Mouse Click and Drag
    - [x] Draw/pan in one arbitrary direction
    - [x] Pan according to mouse coords
- [ ] Basic Zoom with Mouse wheel
    - [x] Casic Zoom implemented
    - [ ] Adjust panning sensitivity with scale
    - [ ] Min-max cap zoom/scale values.
- [ ] Local testing of Drawing map content from PostGre DB
- [ ] Connect to Remote DB with simple API once local testing complete
- [ ] Basic UI 
    - [x] Full screen Canvas and Unskewed vector Drawings
- [ ] Search functionality
- [ ] Pathfinding functionality


## Temp Psuedo
Draw map content from Pastgre DB

Create Map SVG and embed in canvas
    Make sure map layout aligns with lat-long coordinate grid
Test zoom and panning and max/min zoom scales

Populate Postgres db with coordinate calues (1 for now, first pixels, then coords and convert)
Model State Fetches coords and stores that state intnerally
Contrroller models (App, Events) retreives state and passes it to view renderer.draw (rename to renderer.drawMap) when called 



