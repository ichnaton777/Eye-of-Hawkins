let h;
// let fillColor;
let h1000, h900, h850, h800, h700, h670, h600, h540, h500, h400, h350, h310, h250, h200, h175, h150, h125, h100, h75, h50, h30, h20lh0;
let hData;



function preload() {

    hData = loadTable('https://eye-of-hawkins.eloquent161.repl.co/data/hsb-hawkins-24.csv', 'csv', 'header');
}

function setup() {
    

    fillColor = "purple"
    createCanvas(800, 800);
    h = 0;
    background(180);
    // circle(200, 200, 200)
    colorMode(HSB)
    angleMode(DEGREES)
    for (let r = 0; r < hData.getRowCount(); r++) {
        for (let c = 0; c < hData.getRowCount(); c++) {
            print(hData.get(r, c))
        }
    }

    h1000 = new Hawkins(1000, "Full Consciousness")
    h1000.drawPie();

    h900 = new Hawkins(900, "Supra Casual Truth");
    h900.drawPie();

    h850 = new Hawkins(850, "Divine Grace & Love");
    h850.drawPie();

    h800 = new Hawkins(800, "The Great Void")
    h800.drawPie()


    h700 = new Hawkins(700, "Enlightenment");
    h700.drawPie();

    h670 = new Hawkins(670, "Non-Duality")
    h670.drawPie()


    h600 = new Hawkins(600, "Peace");
    h600.drawPie();

    h540 = new Hawkins(540, "Oneness / Joy")
    h540.drawPie()

    h500 = new Hawkins(500, "Inner Love")
    h500.drawPie()

    h440 = new Hawkins(440, "Inner Wisdom")
    h440.drawPie()

    h400 = new Hawkins(400, "Reason")
    h400.drawPie();

    h350 = new Hawkins(350, "Acceptance")
    h350.drawPie();

    h310 = new Hawkins(310, "Willingness")
    h310.drawPie();

    h250 = new Hawkins(250, "Neutrality")
    h250.drawPie();

    h200 = new Hawkins(200, "Courage")
    h200.drawPie();

    h175 = new Hawkins(175, "Pride");
    h175.drawPie();

    h150 = new Hawkins(150, "Anger")
    h150.drawPie();

    h125 = new Hawkins(125, "Desire")
    h125.drawPie();

    h100 = new Hawkins(100, "Fear")
    h100.drawPie();

    h75 = new Hawkins(75, "Grief")
    h75.drawPie();

    h50 = new Hawkins(50, "Apathy");
    h50.drawPie();

    h30 = new Hawkins(30, "Guilt")
    h30.drawPie();

    h20 = new Hawkins(20, "Shame")
    h20.drawPie()

    h0 = new Hawkins(1, "Death")
    h0.drawPie()


}

function draw() {
    /*  if(h0.hit()) {
         //background(180)
       //  h0.drawBigPie() 
         console.log("hit")
       } else {
          h0.drawPie()
       // console.log("nohit")
     }   
     */
}

