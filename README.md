# upal-src
Official repository of the MPlex UTech Maps web app, UPal.

## MVP Goal
MVP - Basic Interface with searching for location
No Live position, no path finder.

## Tasks
- [ ] Basic Pan with Mouse Click and Drag
    - [x] Draw/pan in one arbitrary direction
    - [ ] Pan according to mouse coords
- [ ] Basic Zoom with Mouse wheel
- [ ] Drawing map content from local PostGre DB
- [ ] Connect to Remote DB with simple API once local testing complete
- [ ] Basic UI 
    - [x] Full screen Canvas and Unskewed Drawing
- [ ] Search functionality


## Temp Psuedo
Get the viewport dimensions in js
Set the canvas to viewport dimensions in js with setAttribute
redraw/draw content
set an event listener for viewport size change
repeat steps 1-3

move canvas size setup to renderer
when handle window resize event fired on controller, 
save canvas state
call renderer canvas resize
draw saved canvas state
