/**
 * Ethan Sinica
 * IGME-102: Project 3, 4/13/18
 * Solar system model. 
 * Multiple camera movement options, toggle different aspects of the display, learn about the solar system maybe.
 */




"use strict";

//my no more than 3 global variables... 2 for storage/creation classes, other for rotation.
let solarSystem;
let doms;
let A = 0;

function preload() {
    let bg;
    //links to the SolarSystem class for Images 
    solarSystem = new SolarSystem();

    
    
    //looping stars video
    bg = createVideo("media/backgroundLoop.mp4");
    bg.loop();
    bg.hide();

    //loading of font
    
    loadFont('media/fonts/micross.ttf');
}


function setup() {
    imageMode(CENTER);
    let canvas = createCanvas(1200, 800, WEBGL);
    frameRate(30);

    //handles creation of dom fields
    doms = new Doms();
    doms.makeDoms();




}

function draw() {
    background(50, 50, 50);

    //camera creation (with perspective)
    let cameraZ = ((height / 2) / tan(PI / 6));
    perspective(PI / 3, width / height, cameraZ / 10, cameraZ * 1000)

    //variables for mouse controlled camera movement
    let camX = map(mouseX, 0, width, -2000, 2000);
    let camY = map(mouseY, 0, width, -3000, 1000);
    let camY2 = map(mouseY, 0, width, -500, 3500);
    //    camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);

    //switch states for camera options
    switch (doms.cameraRadio.value()) {
        case "1":
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            break;
        case "2":
            camera(0, 4000, -800, 0, 0, 0, 0, 1, 0);
            translate(-camX, camY2);
            break;
        case "3":
            camera(0 + camX, 4000 + camY, -1000, 0, 0, 0, 0, 1, 0);
            break;
        case "4":
            camera(0, 4000 + camY, -1000, 0, 0, 0, 0, 1, 0);
            translate(-camX, 0, camY / 5);
            break;

            //last resort paragraphing... Tried to get it in there using DOM but the dom paragraph and element fields didn't like the external variables (the resulting text field would always be a string of code)
        case "5":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.sunText);
            plane(400, 1000);
            pop();
            break;
        case "6":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.mercuryText);
            plane(400, 1000);
            pop();
            break;
        case "7":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.venusText);
            plane(400, 1000);
            pop();
            break;
        case "8":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.earthText);
            plane(400, 1000);
            pop();
            break;
        case "9":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.marsText);
            plane(400, 1000);
            pop();
            break;
        case "10":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.jupiterText);
            plane(400, 1000);
            pop();
            break;
        case "11":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.saturnText);
            plane(400, 1000);
            pop();
            break;
        case "12":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.uranusText);
            plane(400, 1000);
            pop();
            break;
        case "13":
            //camera reset, angle change
            camera(0, 4000, -1000, 0, 0, 0, 0, 1, 0);
            rotateX(radians(90));
            rotateY(radians(180));

            push();
            rotateX(radians(14));
            translate(-340, -190, 3500);
            texture(solarSystem.neptuneText);
            plane(400, 1000);
            pop();
            break;




    }

    //base texture
    normalMaterial();
    ambientLight(255, 255, 255);


    //Background Video... we are inside a sphere!
    push();
    rotateX(radians(90));
    rotateY(radians(90));
    texture(solarSystem.backgroundVid);
    sphere(50000);
    pop()


    //PLANET CALLING/CREATION
    //nameTexture, radius, planetTexture, ringRadius, ringThickness, ringR, ringG, ringB, revRadius, revSpeed, axisTilt, rotationSpeed
    var sun = new Planet(solarSystem.sunName, 260, solarSystem.sunTex, 0, 0, 0, 80, 120, 0, 45, 0, 1 / 10);
    sun.display();

    var mercury = new Planet(solarSystem.mercuryName, 20, solarSystem.mercuryTex, 0, 0, 0, 80, 120, 500, 4, 0, 1 / 10);
    mercury.display();

    var venus = new Planet(solarSystem.venusName, 26, solarSystem.venusTex, 0, 0, 0, 80, 120, 700, 12 / 7, 0, -1 / 50);
    venus.display();

    var earth = new Planet(solarSystem.earthName, 35, solarSystem.earthTex, 0, 0, 0, 80, 120, 900, 1, 23, 1);
    earth.display();

    var mars = new Planet(solarSystem.marsName, 25, solarSystem.marsTex, 0, 0, 0, 80, 120, 1100, 12 / 23, 25, 1);
    mars.display();

    var jupiter = new Planet(solarSystem.jupiterName, 85, solarSystem.jupiterTex, 0, 0, 0, 80, 120, 1400, 12 / 40, 0, 1.5);
    jupiter.display();

    var saturn = new Planet(solarSystem.saturnName, 70, solarSystem.saturnTex, 110, 12, 110, 110, 70, 1700, 12 / 50, 27, 1.5);
    saturn.display();

    var uranus = new Planet(solarSystem.uranusName, 50, solarSystem.uranusTex, 100, 8, 40, 100, 120, 2000, 12 / 70, 82, -1.3);
    uranus.display();

    var neptune = new Planet(solarSystem.neptuneName, 45, solarSystem.neptuneTex, 0, 0, 0, 80, 120, 2300, 12 / 100, 28, 1);
    neptune.display();

    if(mouseIsPressed){
        var c = get(mouseX, mouseY);
        //fill(c);
        torus(20, 3);
        translate(mouseX, mouseY, 0);
        console.log("PRESSED!");
    }
}
function setMyFont(theFont) {
    textFont(theFont);
}
//function mousePressed() {
//    //var c = get(mouseX, mouseY);
//    fill(200);
//    noStroke();
//    torus(20, 3);
//    ellipse(mouseX, mouseY, 10, 10);
//    console.log("PRESSED!")
//}
