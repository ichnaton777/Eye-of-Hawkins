let h;
// let fillColor;
// let h1000, h900, h850, h800, h700, h670, h600, h540, h500, h400, h350, h310, h250, h200, h175, h150, h125, h100, h75, h50, h30, h20lh0;
let hData24; 
let sdData;
let objects = {}; // This will hold all of your objects
let buttonHawk24;
let buttonSD;




function preload() {

    hData24 = loadTable('/data/hsb-hawkins-24.csv', 'csv', 'header');
    sdData = loadTable('/data/spiraldynamics.csv', 'csv', 'header');
}

function setup() {
    fillColor = "purple"
    createCanvas(1200, 800);
    background(180);
    colorMode(HSB)
    angleMode(DEGREES)
    
    buttonHawk24 = createButton('Hawkins (24)');
    buttonHawk24.position(1100, 50);
    buttonSD = createButton('Spiral Dynamics')
    buttonSD.position(1100, 100);
    buttonSD.mousePressed(SD);
    buttonHawk24.mousePressed(Hawk24);
    buttonReset = createButton('Reset');
    buttonReset.position(1100, 300);
    buttonReset.mousePressed(resetIt);
}


function draw() {

}
function Hawk24() {
    
    
    let allRows = hData24.getRows();
    for (let r = 0; r < allRows.length; r++) {
        let consciousnessLevel = hData24.get(r, "Level of Consciousness");
        let hNumber = hData24.get(r, "Energetic Frequency");
        let objectName = hData24.get(r, "ObjectName"); // Get the ObjectName from the CSV
        objects[objectName] = new Hawkins(hNumber, consciousnessLevel);
        objects[objectName].drawMainSpot();
        objects[objectName].drawPie();
        objects[objectName].drawResponseSpot(objects[objectName].angle,objects[objectName].hue);
    }
    
}
function SD() {
   
    let allRows = sdData.getRows();
    for (let r = 0; r < allRows.length; r++) {
        let consciousnessLevel = sdData.get(r, "Level of Consciousness");
        let hNumber = sdData.get(r, "Energetic Frequency");
        let objectName = sdData.get(r, "ObjectName"); // Get the ObjectName from the CSV
        objects[objectName] = new Hawkins(hNumber, consciousnessLevel);
        objects[objectName].drawMainSpot();
        objects[objectName].drawPie();
        // objects[objectName].drawResponseSpots();
        objects[objectName].drawResponseSpot(objects[objectName].angle,objects[objectName].hue);
    }
}

function resetIt() {
    background(180);
    objects = {};
}