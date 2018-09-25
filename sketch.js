//background transitions, the cube



"use strict";

//let solarSystem;

var faceImg;
var exercisesImg;
var projectsImg;
var titleImg
var r;
var b;

function preload() {

    //solarSystem = new SolarSystem();

}


function setup() {
    imageMode(CENTER);
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    background(100, 100, 100);
    //canvas.position(50, 80);
    frameRate(30);

    titleImg = loadImage("media/title.png");
    faceImg = loadImage("media/facePinkBG.png");
    exercisesImg = loadImage("media/exercises.png");
    projectsImg = loadImage("media/projects.png");

}

function draw() {
    
    //maps mouse position to relative red or blue values
    let r = map(mouseX, 0, windowWidth, 245, 100);
    let b = map(mouseX, 0, windowWidth, 100, 245);


    background(r, 100, b);
    noStroke();

    
    //3 individual cubes offset by a couple units because individually texturing cube faces is not yet posible in P5.JS
    //push and pop used so rotate and translate functions do not add onto each other
    
    push();
    //maps mouseX to rotational value (in radians)
    rotateY(map(mouseX, 0, windowWidth, -PI, PI) * .5);
    texture(faceImg);
    box(windowWidth / 5);
    pop();

    push();
    rotateY(map(mouseX, 0, windowWidth, -PI, PI) * .5);
    translate(-2, 0, 0);
    texture(projectsImg);
    box(windowWidth / 5 - windowWidth * .0001);
    pop();

    push();
    rotateY(map(mouseX, 0, windowWidth, -PI, PI) * .5);
    translate(2, 0, 0);
    texture(exercisesImg);
    box(windowWidth / 5 - windowWidth * .0001);
    pop();

    
    //rotating title... not really ok
//    push();
//    rotateY(map(mouseX, 0, windowWidth, -PI, PI) * .5);
//    translate(0, -windowWidth/100, windowWidth/10);
//    texture(titleImg);
//    plane(windowWidth / 3.8);
//    pop();


}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


