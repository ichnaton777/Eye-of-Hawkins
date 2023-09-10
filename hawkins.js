class Hawkins {
    hue;         // hawkins number 1-1000
    emotion;     // text we set in any language possible
    fillColor;   // tricked a bit to make it nice
    strokeColor; // opposite of fillColor - average for quadrant
    quadrant;    // 1,2,3,4
    minutes;     // 0-60 in an hour
    angle;       // number 0-360, angel starting at 12h 
    number;      // in the list, lower start at 1 - 24
    minutes;     // same as angle but now in clock terms 1-60
    state;       // associated emotional state
    life;        // view of life
    key;         // key to transcend to next level
    experience;  // what we experience
    location;    // where we are
    icon;        // emoticon, actually a character like 🦁


    drawResponseSpot(angel, radius) {
        // we have already swapped angel and radius
        fill(this.fillColor);
        noStroke();
        push();
        translate(width/2,height/2);
        rotate(angel);
        radius = (radius / 6) + 200
        circle(radius,0,10);
        pop();
        
    }
    

    
    drawMainSpot() {
        // no longer in use now we put the icon there
        fill(this.fillColor);
       // fill("purple")
        noStroke();
        push();
        translate(width/2,height/2);
        rotate(this.angle);
        console.log("ja")
        circle(180,0,20);
        pop();
        
    }
    drawMainIcon() {
        noFill();
        stroke(this.fillColor)
        strokeWeight(1)
        push();
        translate(width/2,height/2);
        rotate(this.angle);   // this is our wheel trick
        textSize(sliderIconSize.value());
        textFont(noto);
        push();
        translate(180,0)
        circle(0,0,sliderIconSize.value() + 8); // not exactly sharply surrounding actually
        rotate(-this.angle);  // rotate the icon itself back
        fill(this.fillColor);
        text(this.icon, -12, 6);        
        pop(); // icon rotation
        pop(); // wheel rotation
    }
    
    drawPie() {
        fill(this.fillColor);
       // strokeWeight(1)
       //  stroke("grey");
        noStroke();
        arc(width/2, height/2, 320,320 ,this.angle -2 , this.angle + 2  ,PIE);
    }

     drawBigPie() {
        fill(this.fillColor);
        strokeWeight(5)
        stroke("white");
        arc(200, 200, 200,200 ,this.angle -6 , this.angle + 6  ,PIE);
    }
    
    getAngle() {
        // based on this.hue
        // this is a non-linear mapping
        // first quadrant 0-49
        // second quadrant 50 - 200
        // 3rd quadrant    200 - 500
        // 4th quadrant 500 - 1000 ;
        // in earch quadrant linear mapping
        // 12h is 0 hue and 270 degrees.
        // 3h is 0 degrees.

      //  const quadrant = this.getQuadrant(this.hue);
        console.log("q=" + this.quadrant)
        switch(this.quadrant) {
            case 1:
                return (round( 270+ 90* this.hue/50))
                break;
            case 2:
                return (round(90 * (this.hue-50) /150));
                break;
            case 3:
                        
                return(90 +  90 * (this.hue - 200)/300)
                break;
            case 4:
                return(180 + 90 * (this.hue - 500)/ 500)
                break;
            default:
                return;
                break;
        }
    }
    
    setHue(hue) {
        // just return hue as is
        return hue
    }

    getQuadrant(h) {
        const hue = round(h) // 
        switch(true){    // note: not switch (hue)
            case (hue> 0 && hue < 50):
                return 1;
                break;
            case (hue > 49 && hue < 201):
                return 2;
                break;
            case (hue > 199 && hue < 500):
                return 3;
                break;
            case (hue > 499 && hue < 1001):
                return 4;
                break;
            default:
                return ;
                break;
        }
    }
    setRealHue(hue) {
        // hue is number 0-1000. 
        // by quadrant, we stretch colors for human use
       
        switch(this.quadrant) {
            case 1:
                // red zone
                // 0-30 Hue
                // 0-49 Hawkins Hue
                return (map (this.hue,0, 49,0,30))
                break;
            case 2:
                // yellow zone
                // 30 - 90 Hue
                // 50 - 200 Hawkins Hue
                return (map(this.hue,50,200,30,90))
                break;
            case 3:
                // green - blue zone
                // 90 - 270 Hue
                // 200 - 500 Hawkins Hue
                const val = map(this.hue,200,500,90,270)
                console.log("3: val=" + val)
                return val;
                break;
            case 4:
                // purple zone
                // 270 - 330 Hue - not too red!
                // 500 - 1000 Hawkins hue
                console.log("here")
                return (map(this.hue,500,1000,270,330))
                break;
            default:
                return ;
                break;
                
        }
    }
    
    hit() {
    //  arc(200, 200, 200,200 ,this.angle -2 , this.angle + 2  ,PIE);
        return collidePointArc (mouseX,mouseY,200,200,200,200, this.angle,3)
        
    }
    
     constructor (H,E,icon) {
        this.hue = H;
        this.emotion = E;
       
        this.strokeColor = "white"
        this.quadrant = this.getQuadrant(this.hue)
        this.angle = this.getAngle();
        this.fillColor = color(this.setRealHue(this.hue), 100,100)
         this.icon = icon;
        console.log("created: " + this.emotion + " " + this.icon + "\nhue:" + this.hue + " angle:" + this.angle + " fillColor:" + this.fillColor.toString('hsb') + "\n\n")
    }
    
    
    
}