let fireworks = [];
let stars = [];
let starCount = 100;
let gravity;

function setup() {
    createCanvas(windowWidth-15, windowHeight-20);
    background(25);
    for (let i = 0; i < starCount; ++i) {
        stars.push(new Star());
    }
    gravity = createVector(0, 0.2);
}

function draw() {
    background(0, 25);
    if (random(1) < 0.05) {
        fireworks.push(new Firework());
    }
    stars.forEach(s => s.draw());
    for (let i = fireworks.length - 1; i >= 0; --i) {
        let f = fireworks[i];
        if (f.done()) {
            fireworks.splice(i, 1);
        }
        f.update();
        f.draw();
    }
}

class Star {
    constructor() {
        this.alpha = random(5, 30);
        this.size = random(4);
        this.pos = createVector(random(width), random(height));
    }
    draw() {
        stroke(255, this.alpha);
        strokeWeight(this.size);
        point(this.pos);
    }
}

class Firework {
    constructor() {
        this.color = color(random(255), random(255), random(255));
        let firework = new Particle(random(width), height, this.color);
        firework.vel = createVector(0, random(-17, -10));
        this.particles = [firework];
        this.particleCount = random(50, 200);
        this.explodeDelay = random(0, 6);
        this.exploded = false;
    }
    update() {
        for (let i = this.particles.length - 1; i >= 0; --i) {
            let p = this.particles[i];

            p.applyForce(gravity);
            p.update();
            if (this.exploded) {
                p.vel.mult(0.90);
                p.lifespan -= 3;
                if (p.done()) {
                    this.particles.splice(i, 1);
                }
            }
            else if (p.vel.y >= 0) {
                this.explode();
            }
        }
    }
    done() {
        if (this.exploded && this.particles.length === 0) {
            return true;
        }
        return false;
    }
    explode() {
        this.exploded = true;
        let firework = this.particles.pop();
        for (let i = 0; i < this.particleCount; ++i) {
            let p = new Particle(firework.pos.x, firework.pos.y, this.color);
            p.vel = p5.Vector.random2D();
            p.vel.mult(random(2, 10));
            this.particles.push(p);
        }
    }
    draw() {
        if (this.exploded) {
            strokeWeight(2);
        } else {
            strokeWeight(4);
        }
        this.particles.forEach(p => p.draw());
    }
}

class Particle {
    constructor(x, y, color) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.color = color;
        this.lifespan = 255;
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    done() {
        if (this.lifespan <= 0) {
            return true;
        }
        return false;
    }
    applyForce(force) {
        this.acc.add(force);
    }
    draw() {
        if (this.lifespan > 0) {
            stroke(red(this.color), green(this.color), blue(this.color), this.lifespan);
            point(this.pos);
        }
    }
}
