/**
 * Ethan Sinica
 * Doms class for the Doms
 * Makes the Doms, does the Doms, Doms the Doms
 */

class Doms {
    //(Sprite Manager)
    constructor() {

        //textFont(solarSystem.sunText);
        createElement("p");
        this.cameraRadio = createRadio();
        this.cameraRadio.style('font-family', 'Microsoft Sans Serif');
        this.cameraRadio.style('border', '2px solid powderblue');
        this.cameraRadio.style('padding', '20px');
        this.cameraRadio.position(1230, 50);
        //this.cameraRadio.style('background-color', '#f0f');
        createElement("p");
        this.sliderLabel = createP("Speed");
        this.sliderLabel.style('font-family', 'Microsoft Sans Serif');
        this.sliderLabel.position(1250, 350);
        this.speedSlider = createSlider(1, 23.5, 1, .05); //max slider value is approximately 1 ear per second! (time accurately portrayed for inner 4 planets, outer ones waaay too slow... cycles take centuries)
        this.speedSlider.position(1350, 360);
        this.speedSlider.style('font-family', 'Microsoft Sans Serif');
        this.speedSlider.style('opacity', '1');
        createElement("p");
        this.nameCheckbox = createCheckbox("Planet Names", false);
        this.nameCheckbox.style('font-family', 'Microsoft Sans Serif');
        this.nameCheckbox.position(1250, 410);
        this.trailCheckbox = createCheckbox("Display Orbit Paths", false);
        this.trailCheckbox.style('font-family', 'Microsoft Sans Serif');
        this.trailCheckbox.position(1250, 440);
        createElement("p");

    }

    makeDoms() {

        //camera options
        this.cameraRadio.option('Standard', 1);
        this.cameraRadio.option('Mouse Pan', 2);
        this.cameraRadio.option('Mouse Zoom', 3);
        this.cameraRadio.option('Zoom-Pan', 4);

                this.cameraRadio.option('The Sun', 5);
                this.cameraRadio.option('Mercury', 6);
                this.cameraRadio.option('Venus', 7);
                this.cameraRadio.option('Earth', 8);
                this.cameraRadio.option('Mars', 9);
                this.cameraRadio.option('Jupiter', 10);
                this.cameraRadio.option('Saturn', 11);
                this.cameraRadio.option('Uranus', 12);
                this.cameraRadio.option('Neptune', 13);
this.cameraRadio.value("1"); //set initial value

    }
}
