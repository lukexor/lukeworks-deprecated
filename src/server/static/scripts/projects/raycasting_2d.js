let boundaries = [];
let boundaryCount = 5;
let light;
let mouseMove = false;
let xOffset = 0;
let yOffset = 10000;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth-15, windowHeight-20);
    boundaries.push(new Boundary(0, 0, width, 0)); // Top
    boundaries.push(new Boundary(width, 0, width, height)); // Right
    boundaries.push(new Boundary(0, height, width, height)); // Bottom
    boundaries.push(new Boundary(0, 0, 0, height)); // Left
    for (let i = 0; i < boundaryCount; ++i) {
        const x1 = random(width);
        const y1 = random(height);
        const x2 = random(width);
        const y2 = random(height);
        boundaries.push(new Boundary(x1, y1, x2, y2));
    }
    light = new Light();
}

function draw() {
    background(51);
    light.update(boundaries);
    boundaries.forEach(b => b.draw());
    light.draw();
}

function mouseClicked() {
    mouseMove = !mouseMove;
}

class Light {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let angle = 0; angle < 360; angle += 1) {
            this.rays.push(new Ray(this.pos, radians(angle)));
        }
    }
    draw() {
        fill(255);
        this.rays.forEach(r => r.draw());
    }
    update(boundaries) {
        if (mouseMove) {
            light.pos.x = mouseX;
            light.pos.y = mouseY;
        } else {
            light.pos.x = noise(xOffset) * width;
            light.pos.y = noise(yOffset) * height;
            xOffset += 0.01;
            yOffset += 0.01;
        }
        this.rays.forEach(r => {
            let closest;
            let closestDist = Infinity;
            boundaries.forEach(b => {
                const pt = r.cast(b);
                if (pt) {
                    const dist = p5.Vector.dist(this.pos, pt);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = pt;
                    }
                }
            });
            if (closest) {
                r.lookAt(closest);
            }
        });
    }
}

class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.looking = p5.Vector.fromAngle(angle);
    }
    draw() {
        stroke(255, 100);
        strokeWeight(1);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.looking.x, this.looking.y);
        pop();
    }
    lookAt(pt) {
        this.looking.x = pt.x - this.pos.x;
        this.looking.y = pt.y - this.pos.y;
    }
    cast(boundary) {
        // Formula: https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
        const x1 = boundary.start.x;
        const y1 = boundary.start.y;
        const x2 = boundary.end.x;
        const y2 = boundary.end.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.looking.x;
        const y4 = this.pos.y + this.looking.y;

        const denominator = ((x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4));
        if (denominator == 0) {
            return;
        }
        const t = ((x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)) / denominator;
        const u = -((x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3)) / denominator;

        if (t > 0 && t < 1 && u > 0) {
            return createVector(x1 + t*(x2 - x1), y1 + t*(y2 - y1));
        }
        return;
    }
}

class Boundary {
    constructor(x1, y1, x2, y2) {
        this.start = createVector(x1, y1);
        this.end = createVector(x2, y2);
    }
    draw() {
        stroke(255);
        strokeWeight(2);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}
