createCanvas(800, 700);

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

// sun
push();
noStroke();
fill(253, 184, 19);
push();
fill(255, 77, 0);
ellipse(640, 125, 120, 120);
pop();
ellipse(640, 125, 100, 100);
pop();

// moon
fill(246, 241, 213);
ellipse(382, 800, 800, 700);

// craters
push();
noStroke();
fill(48, 59, 69);
ellipse(110, 650, 110, 40);
ellipse(180, 560, 120, 40);
ellipse(300, 645, 110, 45);
ellipse(350, 500, 110, 40);
ellipse(475, 600, 130, 50);
ellipse(510, 510, 80, 20);
ellipse(644, 634, 100, 40);
pop();

// landing platforms
push();
noStroke();
fill(0, 0, 0);
rect(70, 590, 100, 20);
rect(70, 610, 10, 10);
rect(160, 610, 10, 10);

rect(560, 550, 100, 20);
rect(560, 570, 10, 10);
rect(650, 570, 10, 10);
pop();
