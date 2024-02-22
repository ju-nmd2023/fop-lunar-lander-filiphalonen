// saucer
strokeWeight(0.5);
fill(192, 192, 192);
ellipse(200, 200, 120, 55);

// dome
push();
noStroke();
fill(224, 242, 241);
ellipse(200, 173, 45, 55);
pop();

// lights
fill(0, 255, 0);
ellipse(155, 198, 10, 10);
ellipse(175, 210, 10, 10);
ellipse(200, 215, 10, 10);
ellipse(225, 210, 10, 10);
ellipse(247, 198, 10, 10);

//driver
fill(0, 0, 0);
ellipse(200, 175, 20, 20);
push();
strokeWeight(2);
line(200, 185, 200, 200);
line(200, 189, 210, 197);
line(200, 189, 215, 190);
pop();
