var h;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle;
function setup() {
  createCanvas(1800, 500);
  // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background("Black");

  translate(200, 200);
  h = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(h % 12, 60, 0, 0, 360);
  push();
  rotate(scAngle)
  stroke("Red")
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(mnAngle)
  stroke("Green")
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hrAngle);
  stroke("Blue")
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop();

  noFill()
  stroke("Red")
  strokeWeight(7)
  arc(0, 0, 350, 350, 0, scAngle)

  noFill()
  stroke("Green")
  strokeWeight(7)
  arc(0, 0, 330, 330, 0, mnAngle)

  noFill()
  stroke("blue")
  strokeWeight(7)
  arc(0, 0, 310, 310, 0, hrAngle)


  drawSprites();
  fill("blue");
  textSize(33);
  strokeWeight(2);
  stroke("blue")
  text("The blue fork shows the hour", 350, 10);
  fill("green");
  stroke("Green")
  text("The Green fork shows the minute", 350, 70);
  fill("red");
  stroke("Red")
  text("The Red fork shows the second", 350, 130);
}