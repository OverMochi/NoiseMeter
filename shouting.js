let scale = [];
var noiseData;
var data;
var trans;

function preload(){
  noiseData = loadJSON('noise.json');
}

function getData(){
  data = noiseData.noise[0].shouting;
  return data;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  getData();

  button = createButton('back');
  button.mousePressed(moveToHome);
  button.position(40,28);
  button.style("font-size", "18px");

  for (let i = 0; i < data; i++){
    scale.push(new Scale());
  }
}

function moveToHome (){
  window.open("home.html","_self");
}

function draw() {
  background(0);

  fill(222);
  textAlign(CENTER,CENTER);
  textSize(22);
  text('Shouting noise nuisance report',width/2,40);

  for (let i = 0; i < data; i++){
    trans = 100;
    scale[i].move();
    scale[i].show();
  }

}

class Scale{
  constructor(){
  	this.x = random(0, width);
  	this.y = random(0, height);
  	this.d = 10;
  	this.speed = 0.7;
  }

  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  show(){
    fill(220, trans);
    //fill("#cc4037");
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }

}
