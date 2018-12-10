/**
 * Ethan Sinica
 * Planet class for the Planets
 * Handles creation and all aspects of movement (excluding camera). Lots of parameters, would have been fun to make it customizable but spent too much time wrangling WEBGL stuff
 */
class Planet {
    
    constructor(nameTexture, radius, planetTexture, ringRadius, ringThickness, ringR, ringG, ringB, revRadius, revSpeed, axisTilt, rotationSpeed) {
        //dont mind me, just declaring here
        this.nameTexture = nameTexture;
        this.radius = radius;
        this.planetTexture = planetTexture;
        this.ringRadius = ringRadius;
        this.ringThickness = ringThickness;
        this.ringR = ringR;
        this.ringG = ringG;
        this.ringB = ringB;
        this.revRadius = revRadius;
        this.revSpeed = revSpeed;
        this.axisTilt = axisTilt;
        this.rotationSpeed = rotationSpeed;
    }

    //this is what makes the planets viseable
    display() {

        //variables and math for the orbiting
        let c;
        let s;
        let x;
        let y;
        A = A + .001; // Increase angle adding revSpeed each time.
        c = Math.cos(A * this.revSpeed * doms.speedSlider.value());
        s = Math.sin(A * this.revSpeed * doms.speedSlider.value());
        x = (this.revRadius * c); // new x coordinates
        y = (this.revRadius * s); // new y coordinates


        push();

        //uses above calculations to translate
        translate(x, y);

        
        //name plate creation and toggle
        push();
        texture(this.nameTexture);
        translate(0, 0, 0 - this.radius - 100);//above the planet(/sun... yes I know the sun isn't a planet)
        rotateX(radians(90));
        rotateY(radians(180));
        if (doms.nameCheckbox.checked()) {
            plane(300, 75);
        } else {};

        pop();

        //ellipse(x, y, 20);


        //PLANET creation and movement (rotation, axis tilt, revolution)
        push();
        specularMaterial(250);
        rotateZ(radians(45));
        rotateX(radians(90 + this.axisTilt));
        //frame count constantly increases, keeps moving, multiplied by rotationSpeed and slider
        rotateY(frameCount * 0.05 * this.rotationSpeed * doms.speedSlider.value());
        texture(this.planetTexture);
        sphere(this.radius);
        pop();

        //RINGS creation and movement (rotation, axis tilt, revolution)
        push();
        rotateZ(radians(45));
        rotateX(radians(90 + this.axisTilt));
        rotateY(frameCount * 0.05 * this.rotationSpeed * doms.speedSlider.value());
        rotateX(PI / 2);
        ambientMaterial(this.ringR, this.ringG, this.ringB, 200);
        torus(this.ringRadius, this.ringThickness);

        pop();

        pop();

        //orbit path creation and toggle
        if (doms.trailCheckbox.checked()) {
            ambientMaterial(222, 222, 222, 20);
            torus(this.revRadius, 5);
        }

    }

}
