class SolarSystem {
    constructor(sunRadius) {

        //ends up being a preload class
        this.sunRadius = sunRadius;
        
        this.sunTex = loadImage("media/sun.png");
        this.mercuryTex = loadImage("media/mercury.png");
        this.venusTex = loadImage("media/venus.png");
        this.earthTex = loadImage("media/earth.png");
        this.marsTex = loadImage("media/mars.png");
        this.jupiterTex = loadImage("media/jupiter.png");
        this.saturnTex = loadImage("media/saturn.png");
        this.uranusTex = loadImage("media/uranus.png");
        this.neptuneTex = loadImage("media/neptune.png");
        
        this.sunName = loadImage("media/names/sun.png");
        this.mercuryName = loadImage("media/names/mercury.png");
        this.venusName = loadImage("media/names/venus.png");
        this.earthName = loadImage("media/names/earth.png");
        this.marsName = loadImage("media/names/mars.png");
        this.jupiterName = loadImage("media/names/jupiter.png");
        this.saturnName = loadImage("media/names/saturn.png");
        this.uranusName = loadImage("media/names/uranus.png");
        this.neptuneName = loadImage("media/names/neptune.png");
        
        this.backgroundVid = createVideo("media/backgroundLoop.mp4");
        this.backgroundVid.hide();
        this.backgroundVid.loop();
        
        this.sunText = loadImage("media/info/sun.png");
        this.mercuryText = loadImage("media/info/mercury.png");
        this.venusText = loadImage("media/info/venus.png");
        this.earthText = loadImage("media/info/earth.png");
        this.marsText = loadImage("media/info/mars.png");
        this.jupiterText = loadImage("media/info/jupiter.png");
        this.saturnText = loadImage("media/info/saturn.png");
        this.uranusText = loadImage("media/info/uranus.png");
        this.neptuneText = loadImage("media/info/neptune.png");
        
    }
    

   
}





