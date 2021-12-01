function preload(){
  noiseData = loadJSON('asset/noise.json');
  map = loadImage('asset/Leeds.png');
  outside = loadImage('asset/out.png');
  demaged = loadImage('asset/earhurts.png');
}


var noiseData;
var data;
function getData(){
  data = noiseData.noise[0].music;
  return data;
}


let scale = [];
function setup() {
  createCanvas(1920, 1080);

  getData();

  button = createButton('back');
  button.mousePressed(moveToHome);
  button.size(80,40);
  button.position(30,40);
  button.style("font-size", "16px");

  for (var i = 0; i < data; i++){
    scale.push(new Scale());
  }

}


function moveToHome (){
  window.open("home.html","_self");
}


var trans;
var x = 0;
function draw() {
  //background(0);
  image(map,0,0, map.width*0.45, map.height*0.45);

  for (var i = 0; i < data; i++){
    trans = 100;
    scale[i].show();
  }

  image(demaged, mouseX-100, mouseY-150, demaged.width/10, demaged.height/10);

  image(outside, 0,0,map.width*0.45, map.height*0.45);

  fill('#4c4c4c');
  textAlign(CENTER,CENTER);
  textSize(16);
  text('Music noise nuisance report',400,50);

}

class Scale{
  constructor(){
  	this.x = random(250, 1150);
  	this.y = random(40, 780);
  	this.d = random(10,15);
  	this.speed = 0.08;

  }

  show(){
    colorMode(RGB);
    push();
    fill(47,39,255,trans);
    noStroke();
    ellipse(this.x, this.y, this.d);
    //trans += 0.05;
    pop();

    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

}
