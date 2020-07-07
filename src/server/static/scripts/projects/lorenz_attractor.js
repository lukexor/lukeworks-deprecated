let x = 0.01;
let y = 0;
let z = 0;

let sig = 10; // a
let rho = 28; // b
let beta = 8/3.0; // c

let points = [];

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 20, WEBGL);
    colorMode(HSB);
    noFill();
    strokeWeight(2);
}

function draw() {
    background(0);

    if (points.length >= 4000) {
        points.splice(0);
    }

    let dt = 0.01;
    let dx = (sig * (y - x)) * dt;
    let dy = (x*(rho - z) - y) * dt;
    let dz = (x*y - beta*z) * dt;
    x += dx;
    y += dy;
    z += dz;

    points.push(createVector(x, y, z));

    translate(0, 0, -80);
    scale(5);
    stroke(255);

    rotateX(millis() / 2000);
    rotateY(millis() / 4000);

    let hu = 0;
    let increase = true;
    beginShape(QUAD_STRIP);
    points.forEach(p => {
        stroke(hu, 255, 255);
        vertex(p.x, p.y, p.z);
        if (increase) {
            hu += 0.1
        } else {
            hu -= 0.1
        }
        if (hu > 255) {
            increase = false;
        } else if (hu < 0) {
            increase = true;
        }
    });
    endShape();
}
