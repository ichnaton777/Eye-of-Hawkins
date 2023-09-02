let h;
// let fillColor;
let h1000, h900, h850, h800, h700, h670, h600, h540, h500, h400, h350, h310, h250, h200, h175, h150, h125, h100, h75, h50, h30, h20lh0;
let hData;
let objects = {}; // This will hold all of your objects




function preload() {

    hData = loadTable('/data/hsb-hawkins-24.csv', 'csv', 'header');
}

function setup() {
    fillColor = "purple"
    createCanvas(800, 800);
     background(180);
      colorMode(HSB)
    angleMode(DEGREES)
let allRows = hData.getRows();
    
    for (let r = 0; r < allRows.length; r++) {
        let consciousnessLevel = hData.get(r, "Level of Consciousness");
        let hNumber = hData.get(r, "Energetic Frequency");
        let objectName = hData.get(r, "ObjectName"); // Get the ObjectName from the CSV
        objects[objectName] = new Hawkins(hNumber, consciousnessLevel); 
        objects[objectName].drawMainSpot();
        objects[objectName].drawPie();
        objects[objectName].drawResponseSpots();
          }    
}

function draw() {
    
}

