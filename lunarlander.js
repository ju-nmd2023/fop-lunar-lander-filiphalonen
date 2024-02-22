function setup() {
  createCanvas(770, 700);
}

// Gameplay variables
let ufoX = 380;
let ufoY = 50;
let velocityX = 0;
let velocityY = 0;
let accelerationX = 0.1;
let accelerationY = 0.03;
let gravity = 0.1;

//Landing platforms
let platforms = [
  { x: 70, y: 590, width: 100, height: 20 },
  { x: 70, y: 610, width: 10, height: 10 },
  { x: 160, y: 610, width: 10, height: 10 },
  { x: 560, y: 550, width: 100, height: 20 },
  { x: 560, y: 570, width: 10, height: 10 },
  { x: 650, y: 570, width: 10, height: 10 },
];

// UFO
function UFO(x, y) {
  // saucer
  push();
  stroke(255, 0, 0);
  fill(192, 192, 192);
  ellipse(x, y, 130, 55);
  pop();

  // dome
  push();
  strokeWeight(1.5);
  fill(224, 242, 241);
  ellipse(x, y - 27, 45, 55);
  pop();

  // lights
  fill(0, 255, 0);
  ellipse(x - 45, y, 10);
  ellipse(x - 25, y + 10, 10);
  ellipse(x, y + 15, 10);
  ellipse(x + 25, y + 10, 10);
  ellipse(x + 45, y, 10);

  //driver
  fill(0, 0, 0);
  ellipse(x, y - 25, 20);
  push();
  strokeWeight(2);
  line(x, y - 15, x, y);
  line(x, y - 11, x + 10, y - 3);
  line(x, y - 11, x + 15, y - 10);
  pop();
}

// Start screen
let gameState = "start";

// Game result
let landingResult = "result";

function draw() {
  // Start screen
  if (gameState === "start") {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    push();
    fill(0, 255, 0);
    textSize(40);
    text("Welcome to UFO Lander!", width / 2, height / 2 - 120);
    pop();
    textSize(15);
    text(
      "Safely land the UFO on either platform by controlling it with the arrow keys",
      width / 2,
      height / 2 - 90
    );
    textSize(20);
    text("Press ENTER to start", width / 2, height / 2 + 20);

    // UFO movement when playing
  } else if (gameState === "playing") {
    if (keyIsDown(LEFT_ARROW)) {
      velocityX -= accelerationX;
    } else if (keyIsDown(RIGHT_ARROW)) {
      velocityX += accelerationX;
    }

    if (keyIsDown(UP_ARROW)) {
      velocityY -= 0.5 + accelerationY;
    } else {
      velocityY += 0.3 + gravity; // UFO falls down if not pressing arrow up
    }

    // UFO changing position
    ufoX += velocityX;
    ufoY += velocityY;

    // Check for landing on platforms
    for (let platform of platforms) {
      if (
        ufoX > platform.x &&
        ufoX < platform.x + platform.width &&
        ufoY > platform.y &&
        ufoY < platform.y + platform.height
      ) {
        // UFO contact with platform
        if (velocityY < 3) {
          landingResult = "Congratulations, you safely landed the UFO!";
        } else {
          landingResult = "Oops the UFO exploded, better luck next time!";
        }
        gameState = "result";
        break; // Exit loop once landing on a platform is detected
      }
    }

    if (ufoY > 620) {
      // UFO has crashed
      velocityY = 0; // Stop vertical movement
      ufoY = 620; // Set UFO Y position to the crash position
      landingResult = "Oops the UFO exploded, better luck next time!";
      gameState = "result";
    }

    background(0, 0, 0);
    SUN();
    MOON();
    for (let platform of platforms) {
      drawPlatform(platform);
    }
    UFO(ufoX, ufoY);
  } else if (gameState === "result") {
    // Result screen
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text(landingResult, width / 2, height / 2);
    textSize(20);
    text("Press ENTER to play again", width / 2, height / 2 + 40);
  }
}

function keyPressed() {
  // Pressing enter at start och result screen restarts the game
  if (keyCode === ENTER && (gameState === "start" || gameState === "result")) {
    gameState = "playing";

    // Reset game
    landingResult = "";
    ufoX = 380;
    ufoY = 50;
    velocityX = 0;
    velocityY = 0;
  }
}

function SUN() {
  // sun
  push();
  noStroke();
  fill(253, 184, 19);
  push();
  fill(255, 77, 0);
  ellipse(640, 125, 180);
  pop();
  ellipse(640, 125, 140);
  pop();
}

function MOON() {
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
}

function drawPlatform(platform) {
  // Platform
  push();
  noStroke();
  fill(0);
  rect(platform.x, platform.y, platform.width, platform.height);
  pop();
}
