const SPACE = 32;
const R = 82;

let game;
p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 20);
    game = new Game();
    textFont("Courier");
    fill(255);
}

function draw() {
    background(0);
    let textX = width / 2;
    let textY = 150;
    if (game.gameover) {
        textAlign(CENTER);
        textSize(70);
        text("GAME OVER", textX, textY);
        textSize(20);
        text("PRESS ENTER TO RESTART", textX, textY + 40);
        noLoop();
    } else if (game.started) {
        game.update();
        game.draw();
    } else {
        textAlign(CENTER);
        textSize(70);
        text("ASTEROIDS", textX, textY);
        textSize(20);
        text("PRESS ENTER TO PLAY", textX, textY + 40);
        textSize(15);
        text("INSTRUCTIONS:\n\n" +
            "LEFT / RIGHT: STEER SHIP\n" +
            "UP: ACCELERATE\n" +
            "SPACE: FIRE\n" +
            "ESCAPE: TOGGLE PAUSE\n" +
            "R: START NEW GAME\n",
            textX,
            textY + 80
        );
        noLoop();
    }
}

function keyPressed() {
    game.keyPressed(keyCode);
    return false;
}
function keyReleased() {
    game.keyReleased(keyCode);
    return false;
}

class Game {
    constructor() {
        this.ship = new Ship();
        this.asteroids = [];
        this.bullets = [];
        this.level = 1;
        this.lives = 4;
        this.score = 0;
        this.paused = false;
        this.started = false;
        this.gameover = false;
        this.spawnShip();
    }

    update() {
        this.ship.update();
        this.updateBullets();
        this.updateAsteroids();
        this.handleInputs();

        if (this.asteroids.length === 0) {
            this.level += 1;
            this.score += 1000;
            this.bullets.length = 0;
            for (let i = 0; i < this.level + 2; ++i) {
                this.asteroids.push(new Asteroid(this.ship));
            }
        }
    }

    handleInputs() {
        if (keyIsDown(LEFT_ARROW)) {
            this.ship.angle = (this.ship.angle - 0.1) % 360;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.ship.angle = (this.ship.angle + 0.1) % 360;
        }
        if (keyIsDown(UP_ARROW)) {
            this.ship.vel.x += sin(this.ship.angle) * this.ship.speed;
            this.ship.vel.y += -cos(this.ship.angle) * this.ship.speed;
        }
    }

    updateBullets() {
        for (let i = this.bullets.length - 1; i >= 0; --i) {
            let b = this.bullets[i];
            b.update();
            // Check for bullet hits
            for (let i = this.asteroids.length - 1; i >= 0; --i) {
                let a = this.asteroids[i];
                if (b.hits(a)) {
                    b.destroyed = true;
                    if (a.size > 16) {
                        let a1 = random(1) * 2.0 * PI;
                        let a2 = random(1) * 2.0 * PI;

                        let ast1 = new Asteroid();
                        ast1.size = a.size >> 1;
                        ast1.pos = a.pos.copy();
                        ast1.vel = p5.Vector.random2D();
                        ast1.angle = random(360);

                        let ast2 = new Asteroid();
                        ast2.size = a.size >> 1;
                        ast2.pos = a.pos.copy();
                        ast2.vel = p5.Vector.random2D();
                        ast2.angle = random(360);

                        this.asteroids.push(ast1);
                        this.asteroids.push(ast2);
                    }
                    a.destroyed = true;
                    this.score += 100;
                }
            }
            if (b.destroyed) {
                this.bullets.splice(i, 1);
            }
        }
    }

    updateAsteroids() {
        // Update asteroids
        for (let i = this.asteroids.length - 1; i >= 0; --i) {
            let a = this.asteroids[i];
            a.update();
            if (a.destroyed) {
                this.asteroids.splice(i, 1);
            } else if (this.ship.hits(a)) {
                this.shipExploded();
                break;
            }
        }
    }

    draw() {
        // Draw board
        textAlign(RIGHT);
        textSize(40);
        text(`${this.score}`, 195, textSize());
        for(let i = 0; i < this.lives; ++i) {
            let shape = new Ship();
            shape.pos.y = 60;
            shape.pos.x = 120 + i * 20;
            shape.vel = createVector(0, 0);
            shape.angle = 0;
            shape.size = 3;
            shape.draw();
        }

        this.ship.draw();
        this.bullets.forEach(b => b.draw());
        this.asteroids.forEach(a => a.draw());
    }

    spawnShip() {
        this.ship.pos = createVector(width / 2, height / 2);
        this.ship.vel = createVector(0, 0);
        this.asteroids.forEach(a => {
            if (this.ship.hits(a)) {
                a.pos.x += a.vel.x * 140;
                a.pos.y += a.vel.y * 140;
            }
        });
    }

    shipExploded() {
        this.lives -= 1;
        this.score -= 500;
        if (this.lives <= 0) {
            this.gameover = true;
        } else {
            this.spawnShip();
        }
    }

    start() {
        this.started = true;
        this.paused = false;
        this.gameover = false;
        this.level = 1;
        this.lives = 4;
        this.score = 0;

        this.spawnShip();

        // Spawn initial asteroids
        const asteroidCount = this.asteroids.length > 0
            ? min(this.level + 2, this.asteroids.length)
            : this.level + 2;
        this.asteroids.length = 0;
        this.bullets.length = 0;
        for (let i = 0; i < asteroidCount; ++i) {
            this.asteroids.push(new Asteroid(this.ship));
        }

        loop();
    }
    stop() {
        this.started = false;
        noLoop();
    }
    togglePause() {
        this.paused ? loop() : noLoop();
        this.paused = !this.paused;
    }

    fire() {
        this.bullets.push(new Bullet(this.ship));
    }

    keyPressed(keyCode) {
        switch (keyCode) {
            case ENTER: {
                if (!this.started || this.gameover) {
                    this.start();
                }
                break;
            }
            case ESCAPE: this.togglePause(); break;
            case R: this.start(); break;
        }
    }
    keyReleased(keyCode) {
        if (!this.started) return;

        switch (keyCode) {
            // TODO add delay since starting here
            case SPACE: this.fire(); break;
        }
    }
}

class SpaceObj {
    constructor(ship) {
        this.pos = p5.Vector.random2D();
        this.vel = createVector(0, 0);
        this.angle = 0;
        this.size = 1;
        this.speed = 0;
        this.color = 255;
        this.destroyed = false;
        this.wraps = true;
        this.model = [];
    }

    update() {
        this.pos.add(this.vel);
        if (this.wraps) {
            if (this.pos.x < 0) {
                this.pos.x = width;
            } else if (this.pos.x > width) {
                this.pos.x = 0;
            }
            if (this.pos.y < 0) {
                this.pos.y = height;
            } else if (this.pos.y > height) {
                this.pos.y = 0;
            }
        } else if (this.pos.x < 0 || this.pos.x > width
            || this.pos.y < 0 || this.pos.y > height
        ) {
            this.destroyed = true;
        }
    }

    draw() {
        push();
        translate(this.pos);
        rotate(this.angle);
        scale(this.size);
        strokeWeight(1 / this.size);
        noFill();
        stroke(this.color);
        beginShape();
        this.model.forEach(v => vertex(v[0], v[1]));
        endShape(CLOSE);
        pop();
    }

    hits(obj) {
        let x = this.pos.x;
        let y = this.pos.y;
        let cx = obj.pos.x;
        let cy = obj.pos.y;
        let r = obj.size;
        return pow((x - cx), 2) + pow((y - cy), 2) < pow(r, 2);
    }
}

class Ship extends SpaceObj {
    constructor() {
        super();
        this.size = 5;
        this.speed = 0.15;
        this.model = [
            [ 0.0, -5.0],
            [-2.5,  2.5],
            [ 2.5,  2.5],
        ];
        this.pos = createVector(width / 2, height / 2);
    }
}

class Bullet extends SpaceObj {
    constructor(ship) {
        super(ship);
        // TODO - see if we can move this to the tip of the ship
        const shipSin = sin(ship.angle);
        const shipCos = -cos(ship.angle);
        this.pos = createVector(
            ship.pos.x + ship.size*5 * shipSin,
            ship.pos.y + ship.size*5 * shipCos,
        );
        this.speed = 6;
        this.vel = createVector(
            this.speed * shipSin,
            this.speed * shipCos,
        ).add(ship.vel);
        this.angle = 100;
        this.size = 2;
        this.wraps = false;
        this.model = [[0, 0], [0, 1], [1, 1], [1, 0]];
    }
}

class Asteroid extends SpaceObj {
    constructor(ship) {
        super(ship);
        this.size = 64;
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.angle = random(360);
        this.color = 'yellow';
        this.rotation = random(-0.02, 0.02);

        // Create model
        for (let i = 0; i < 20; ++i) {
            let noise = random(1) * 0.4 + 0.8;
            let angle = (i / 20.0) * 2.0 * PI;
            let x = noise * sin(angle);
            let y = noise * cos(angle);
            this.model.push([x, y]);
        }

        // Ensure spawn is far enough from ship
        if (ship && this.inSafeZone(ship)) {
            this.pos.x += this.vel.x * 140;
            this.pos.y += this.vel.y * 140;
        }
    }
    update() {
        super.update();
        this.angle += this.rotation;
    }
    inSafeZone(ship) {
        let x = this.pos.x;
        let y = this.pos.y;
        let cx = ship.pos.x;
        let cy = ship.pos.y;
        let r = ship.size + 20;
        return sqrt(pow((x - cx), 2) + pow((y - cy), 2)) < r;
    }
}
