var map, noiseData, ear, demaged;
function preload(){
  noiseData = loadJSON('asset/noise.json');
  map = loadImage('asset/Leeds.png');
  ear = loadImage('asset/ear.png');
  demaged = loadImage('asset/earhurts.png');
  outside = loadImage('asset/out.png');
}

function setup() {
  createCanvas(1920,1080);

  b1 = createButton('Music');
  b1.mousePressed(moveToMusic);
  b1.size(80,40);
  b1.position(30,90);
  b1.style("font-size", "16px");

  b2 = createButton('Shouting');
  b2.mousePressed(moveToShouting);
  b2.size(100,40);
  b2.position(30,140);
  b2.style("font-size", "16px");

  b3 = createButton('Party');
  b3.mousePressed(moveToParty);
  b3.size(80,40);
  b3.position(30,190);
  b3.style("font-size", "16px");

  b4 = createButton('Banging');
  b4.mousePressed(moveToBanging);
  b4.size(100,40);
  b4.position(30,240);
  b4.style("font-size", "16px");

  b5 = createButton('TV');
  b5.mousePressed(moveToTV);
  b5.size(100,40);
  b5.position(30,290);
  b5.style("font-size", "16px");

  b6 = createButton('Barking');
  b6.mousePressed(moveToBarking);
  b6.size(100,40);
  b6.position(30,340);
  b6.style("font-size", "16px");

  b7 = createButton('Alarm');
  b7.mousePressed(moveToAlarm);
  b7.size(100,40);
  b7.position(30,390);
  b7.style("font-size", "16px");

  b8 = createButton('Diy');
  b8.mousePressed(moveToDiy);
  b8.size(100,40);
  b8.position(30,440);
  b8.style("font-size", "16px");

  b9 = createButton('Building');
  b9.mousePressed(moveToBuilding);
  b9.size(100,40);
  b9.position(30,490);
  b9.style("font-size", "16px");

  b10 = createButton('Licensed');
  b10.mousePressed(moveToLicensed);
  b10.size(100,40);
  b10.position(30,540);
  b10.style("font-size", "16px");

}

var around = [];
function draw() {
  //background(0);
  clear();

  image(map,0,0, map.width*0.45, map.height*0.45);

  if(mouseIsPressed){
    image(demaged, mouseX-100, mouseY-150, demaged.width/10, demaged.height/10);
    for (var i = 0; i < 2; i++) {
      var a = new Movers();
      around.push(a);
    }
    for (var i = around.length - 1; i >= 0; i--) {
      around[i].update();
      around[i].show();
    }
  }else{
    image(ear, mouseX-100, mouseY-150, ear.width/10, ear.height/10);
  }

  image(outside, 0,0, outside.width*0.45, outside.height*0.45);

  fill(0);
  textAlign(CENTER,CENTER);
  textSize(18);
  text('All instances of 2021 (Jan.1 - June.30) noise nuisance reports between 18:00 - 03:30 in Leeds City Council, England.',550,50);

}


class Movers{
  constructor() {
    this.x = mouseX-50;
    this.y = mouseY-50;
    this.vx = random(-1,1);
    this.vy = random(-1,3);
    this.d = random(20, 40);
    this.acc = 0.05;
  }

  update() {
    this.vy = this.vy - this.acc;
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    colorMode(RGB);
    fill(47,39,255,50);
    noStroke();
    ellipse(this.x, this.y, this.d)
  }

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

function moveToTV (){
  window.open("tv.html","_self");
}

function moveToBarking (){
  window.open("barking.html","_self");
}

function moveToAlarm (){
  window.open("alarm.html","_self");
}

function moveToDiy (){
  window.open("diy.html","_self");
}

function moveToBuilding (){
  window.open("building.html","_self");
}

function moveToLicensed (){
  window.open("licensed.html","_self");
}
