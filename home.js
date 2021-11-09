let scale = [];
var noiseData;
var data;
var trans;
var tablenum;

function preload(){
  noiseData = loadJSON('noise.json');
  tablenum = loadTable('NumberOfEachType.csv', 'header');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  b1 = createButton('Music');
  b1.mousePressed(moveToMusic);
  b1.size(100,50);
  b1.position(100,120);
  b1.style("font-size", "18px");

  b2 = createButton('Shouting');
  b2.mousePressed(moveToShouting);
  b2.size(130,50);
  b2.position(220,120);
  b2.style("font-size", "18px");

  b3 = createButton('Party');
  b3.mousePressed(moveToParty);
  b3.size(100,50);
  b3.position(370,120);
  b3.style("font-size", "18px");

  b4 = createButton('Banging');
  b4.mousePressed(moveToBanging);
  b4.size(120,50);
  b4.position(490,120);
  b4.style("font-size", "18px");

  createCanvas(1440, 900);
  background(0);
  textAlign(CENTER, TOP);

  for (var i = 0; i < tablenum.getRowCount(); i++) {
    const noise = tablenum.getString(i, 'Type');
    const numbers = tablenum.getNum(i, 'Number');
    const x = random(100, width-200);
    const y = random(400, height-200);
    const size = map(numbers, 0, 3500, 0, 500);
    const fillcolorR = random(50, 255);
    const fillcolorG = random(50, 255);
    const fillcolorB = random(50, 555);
    fill(fillcolorR, fillcolorG, fillcolorB);
    noStroke();
    ellipse(x, y, size);
    textSize(16);
    text(noise, x, y + size / 2 + 10);
  }

  fill(222);
  textAlign(CENTER,CENTER);
  textSize(22);
  text('All instances of 2021 noise nuisance reports between 18:00 - 03:30 in Leeds City Council, England',width/2,50);


}

function moveToMusic (){
  window.open("music.html","_self");
}

function moveToShouting (){
  window.open("shouting.html","_self");
}

function moveToParty (){
  window.open("party.html","_self");
}

function moveToBanging (){
  window.open("banging.html","_self");
}

function draw() {

}
