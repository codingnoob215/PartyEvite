let blink = 0;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("myDrawing");
}

function draw() {
  background(20);

  
  // Blinking 
  blink = frameCount % 120; //  
  let houseBlink = 1;
  let catBlink = 1;

  if (blink > 80 && blink < 95) {
    houseBlink = 0.2; // 
    catBlink = 0.2;
  }

  if (blink >= 95 && blink < 105) {
    houseBlink = 0.05; 
    catBlink = 0.05;
  }


  //PUMPKIN 
  fill(255, 140, 0);
  stroke(0);
  strokeWeight(3);

  ellipse(80, 340, 80, 60);
  ellipse(80, 340, 60, 60);
  ellipse(80, 340, 40, 60);

  fill(80, 40, 0);
  rect(70, 305, 20, 20);


 
  fill(0);
  noStroke();

  // house
  rect(120, 150, 260, 220);

  // roof
  triangle(110, 150, 250, 60, 390, 150);

  // door
  fill(30);
  rect(230, 270, 60, 100);


  
  // EYE WINDOWS 
  fill(255, 230, 0);  

  // left eye
  ellipse(200, 220, 80, 30 * houseBlink);

  // right eye
  ellipse(300, 220, 80, 30 * houseBlink);

  // highlights
  fill(255);
  ellipse(200, 220, 10, 10 * houseBlink);
  ellipse(300, 220, 10, 10 * houseBlink);


  
  // SCARY CAT 
  fill(0);
  stroke(0);

  // body
  ellipse(430, 350, 110, 60);

  // head
  ellipse(420, 310, 65, 65);

  // ears
  triangle(395, 265, 410, 300, 390, 310);
  triangle(445, 265, 430, 300, 450, 310);


  // cat eyes 
  fill(255, 230, 0);
  ellipse(410, 310, 20, 8 * catBlink);
  ellipse(430, 310, 20, 8 * catBlink);

  fill(255);
  ellipse(410, 310, 5, 5 * catBlink);
  ellipse(430, 310, 5, 5 * catBlink);

  // whiskers
  stroke(255);
  strokeWeight(2);
  line(395, 315, 375, 310);
  line(395, 320, 375, 320);
  line(395, 325, 375, 330);

  line(445, 315, 465, 310);
  line(445, 320, 465, 320);
  line(445, 325, 465, 330);
}

