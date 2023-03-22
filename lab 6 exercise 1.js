//define variables
let luffyX, luffyY;
let meatX, meatY;
let notEaten;
let distance;

function setup() {
  createCanvas(400, 400);
  //luffy sprite size and X and Y position
  size = 0.7;
  luffyX = 0;
  luffyY = 0;
  //syntax for the meat that allows it to be eaten and position itself randomly
  meatX = random(width);
  meatY = random(height);
  notEaten = true;
}

function draw() {
  background("skyblue");

  //calling in the function for luffy and the meat
  luffy(luffyX, luffyY, size);
  meat(meatX,meatY);
}

//function that draws luffy
function luffy(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //draw the hat
  fill("goldenrod");
  noStroke();
  rect(50, 20, 10);
  rect(50, 30, 10);
  rect(40, 30, 10);
  rect(60, 20, 10);
  rect(70, 20, 10);
  rect(80, 30, 10);
  rect(60, 30, 10);
  rect(70, 30, 10);
  rect(55, 15, 5);
  rect(60, 15, 5);
  rect(65, 15, 5);
  rect(70, 15, 5);
  noFill();
  fill("maroon");
  rect(50, 25, 5);
  rect(55, 25, 5);
  rect(60, 25, 5);
  rect(65, 25, 5);
  rect(70, 25, 5);
  rect(75, 25, 5);
  //draw the head
  fill("peachpuff");
  rect(45, 40, 10);
  rect(50, 40, 10);
  rect(60, 40, 10);
  rect(70, 40, 10);
  rect(60, 50, 10);
  rect(50, 50, 10);
  rect(70, 50, 10);
  rect(60, 60, 10);
  noFill();
  fill("black");
  rect(40, 40, 5);
  rect(40, 45, 5);
  rect(45, 50, 5);
  rect(50, 40, 5);
  rect(55, 40, 5);
  rect(60, 40, 5);
  rect(65, 40, 5);
  rect(70, 40, 5);
  rect(75, 40, 5);
  rect(80, 40, 5);
  rect(85, 40, 5);
  rect(80, 45, 5);
  rect(65, 40, 5);
  rect(50, 45, 5);
  //draw torso
  fill("peachpuff");
  rect(60, 70, 10);
  rect(40, 80, 10);
  rect(45, 75, 5);
  rect(80, 75, 5);
  rect(80, 80, 10);
  rect(40, 90, 10);
  rect(80, 90, 10);
  rect(35, 100, 15);
  rect(80, 100, 15);
  fill("maroon");
  rect(70, 70, 10);
  rect(50, 70, 10);
  rect(70, 80, 10);
  rect(50, 80, 10);
  rect(60, 80, 10);
  rect(50, 90, 10);
  rect(60, 90, 10);
  rect(70, 90, 10);
  rect(50, 100, 10);
  rect(60, 100, 10);
  rect(70, 100, 10);
  noFill();
  //draw the legs
  fill("dodgerblue");
  rect(50, 110, 10);
  rect(60, 110, 10);
  rect(70, 110, 10);
  rect(50, 120, 10);
  rect(60, 120, 10);
  rect(70, 120, 10);
  rect(50, 130, 10);
  rect(60, 130, 10);
  rect(70, 130, 10);
  rect(45, 115, 5);
  rect(45, 120, 5);
  rect(45, 125, 5);
  rect(45, 130, 7);
  rect(80, 115, 5);
  rect(80, 120, 5);
  rect(80, 125, 5);
  rect(78, 130, 7);
  noFill();
  fill("black");
  rect(63, 120, 4);
  rect(63, 124, 4);
  rect(63, 128, 4);
  rect(63, 132, 4);
  rect(63, 136, 4);
  noFill();
  fill("white");
  rect(67, 136, 4);
  rect(71, 136, 4);
  rect(75, 136, 4);
  rect(79, 136, 4);
  rect(59, 136, 4);
  rect(55, 136, 4);
  rect(51, 136, 4);
  rect(48, 136, 4);
  rect(44, 136, 4);
  rect(83, 136, 4);
  noFill();
  fill("peachpuff");
  rect(50, 140, 10);
  rect(70, 140, 10);
  rect(50, 150, 10);
  rect(70, 150, 10);
  rect(55, 160, 5);
  rect(50, 160, 5);
  rect(45, 160, 5);
  rect(40, 160, 5);
  rect(70, 160, 5);
  rect(75, 160, 5);
  rect(80, 160, 5);
  rect(85, 160, 5);
  noFill();
  fill("chocolate");
  rect(39, 165, 3);
  rect(42, 165, 3);
  rect(45, 165, 3);
  rect(48, 165, 3);
  rect(51, 165, 3);
  rect(54, 165, 3);
  rect(57, 165, 3);
  rect(70, 165, 3);
  rect(73, 165, 3);
  rect(76, 165, 3);
  rect(79, 165, 3);
  rect(82, 165, 3);
  rect(85, 165, 3);
  rect(88, 165, 3);
  pop();
}
//function for the meat
function meat(x, y, size) {
  if(notEaten==true);
  push();
  fill("maroon");
  noStroke();
  ellipse(100, 100, 40, 20);
}

//this function allows luffy to move around with arrow keys
function keyPressed() {
  if (keyCode == UP_ARROW);{
  
    luffyY = luffyY - 10;
  
  } if (keyCode == DOWN_ARROW) {
  
    luffyY = luffyY + 10; 
 
  } if (keyCode == LEFT_ARROW) {
    
    luffyX = luffyX - 10;
   
  } if (keyCode == RIGHT_ARROW) {
    
    luffyX = luffyX + 10;
  }

}
