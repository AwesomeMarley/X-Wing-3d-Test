
let xWing;
let car;
var wingRotationX = 4.75;
var wingRotationY = 0.0129;
var wingRotationZ = 0.04;
var xWingX = 0;
var xWingY = 0;
var xWingZ = 0;

var mat = 1;

function preload() {

  xWing = loadModel("X-Wing-Model.obj", true);
  //car = loadModel("Car-Model.obj", true);

}



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  //rotateY(-frameCount * 0.01);
  //camera(200,200,200,xWingX-200,xWingY,xWingZ-200);


  pointLight(255, 255, 255, -100, -100, 1000);
  //pointLight(255, 255, 255, 0, 0, 220);
  
  push(xWingX,xWingY,xWingZ);
  scale(1.6);

  if(keyIsDown(LEFT_ARROW)){
    wingRotationY-=0.02;
  }else
  if(keyIsDown(RIGHT_ARROW)){
    wingRotationY+=0.02;
  }
  if(keyIsDown(UP_ARROW)){
    wingRotationZ-=0.02;
  }else
  if(keyIsDown(DOWN_ARROW)){
    wingRotationZ+=0.02;
  }
  if(keyIsDown(SHIFT)){
    scale(2.6);
  }
  if(keyIsPressed){
    if(keyCode==49){
      wingRotationX+=0.02;
    }
    if(keyCode==50){
      wingRotationX-=0.02;
    }
  }
  console.log(wingRotationX);
  console.log(wingRotationY);
  console.log(wingRotationZ);
  //up down
  rotateY(wingRotationX);
  //turn left right
  rotateX(wingRotationY);
  //forward back
  rotateZ(wingRotationZ);


  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //rotateZ(frameCount * 0.01);
  if(mat == 1){
    fill(255,0,0);
  }else
  if(mat == 2){
    fill(0,255,0);
  }else
  if(mat == 3){
    fill(0,200,255);
  }else
  if(mat == 4){
    specularMaterial(200);
  }else
  if(mat == 5){
    normalMaterial();
  }
  model(xWing);
  pop();
  /*
  push();
  translate(0,0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(252, 194, 3);
  sphere(80, 25);
  pop();
  
  push();
  translate(0,0,400);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("blue");
  sphere(30, 25);
  pop();
  
  push();
  translate(-100,0,200);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("red");
  torus(30, 10,100,100);
  pop();
  
  push();
  translate(200,0,100);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill("green");
  box(30,30,30,100);
  pop();
  */
  
}

function mouseReleased(){
  if(mat <= 5){
    mat++
  }else{
    mat = 1;
  }
}

