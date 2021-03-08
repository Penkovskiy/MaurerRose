
// let n = 7;
// let d = 71;

// let n = 0;
// let d = 0;

let n = 6;
let d = 79;



const amplitude = 300;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    // frameRate(1);
}

function draw() {
    background(22);
    // background('rgba(115, 77, 91, 1)');
    translate(width / 2, height / 2);
    stroke('rgba(242, 202, 153, 1)');

    noFill();
    beginShape();
    strokeWeight(1);
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = amplitude * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x, y);
    }

    endShape();

    // beginShape();
    // stroke(255, 0, 0);
    // strokeWeight(4);
    // for (let i = 0; i < 361; i++) {
    //     let k = i;
    //     let r = 150 * sin(n * k);
    //     let x = r * cos(k);
    //     let y = r * sin(k);
    //     vertex(x, y);
    // }


    // endShape();
    noLoop();
    // n++;
    if (n < 4) {
        n += .01;
        d += .01;
    } else {
        frameRate(1);
        // n ++;
        n = random(7, 100);
        d ++;
    }

}



