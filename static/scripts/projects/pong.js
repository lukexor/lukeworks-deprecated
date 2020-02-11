const PADDLE_WIDTH = 15;
const PADDLE_HEIGHT = 90;
const PADDLE_PADDING = 30;

const LIMIT_TOP = 20 + (PADDLE_HEIGHT / 2);
let LIMIT_BOT;

const BALL_SIZE = 15;
const TEXT_SIZE = 80;

const PLAYERS = {
    'CPU': 'CPU',
    'PLAYER_1': 'Player 1',
    'PLAYER_2': 'Player 2',
};

const W = 87;
const S = 83;
const I = 73;
const K = 75;
const F10 = 121;

let game;
p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 20);
    LIMIT_BOT = height - 20 - (PADDLE_HEIGHT / 2);
    textFont("Courier");
    textSize(TEXT_SIZE);
    game = new Game();
    hideCanvas();
}

function draw() {
    background(51);
    game.update();
    game.draw();
}

function keyPressed() {
    game.keyPressed(keyCode);
    return false;
}

function keyReleased() {
    game.keyReleased(keyCode);
    return false;
}

function touchStarted() {
    game.touchStarted();
}

function touchEnded() {
    game.touchEnded();
}

function showCanvas() {
    document.getElementById("defaultCanvas0").style.display = "";
    loop();
}
function hideCanvas() {
    document.getElementById("defaultCanvas0").style.display = "none";
    noLoop();
}

class Game {
    constructor() {
        this.paused = false;
        this.ball = new Ball();
        this.player1 = new Player(PLAYERS.PLAYER_1);
        this.player2 = new Player(PLAYERS.CPU);
        this.touching = false;
    }

    draw() {
        // Draw board
        fill(150);
        // Center line
        let dotted_size = this.ball.size;
        for (let i = 0; i < height; i += 2*dotted_size) {
            square(width / 2, i, dotted_size);
        }

        this.ball.draw();
        this.player1.draw();
        this.player2.draw();
    }

    update() {
        this.ball.update(this.player1, this.player2);
        if (this.touching && this.player1.type === PLAYERS.PLAYER_1) {
            this.player1.pos.y = mouseY;
        }
        this.player1.update(this.ball);
        this.player2.update(this.ball);
    }

    keyPressed(keyCode) {
        switch(keyCode) {
            case ESCAPE: this.togglePause(); return;
            case F10: this.stop(); return;
            case W: this.player1.moveUp(); break;
            case S: this.player1.moveDown(); break;
        }
        if (this.player2.type === PLAYERS.PLAYER_2) {
            switch(keyCode) {
                case I: this.player2.moveUp(); break;
                case K: this.player2.moveDown(); break;
            }
        }
    }

    keyReleased(keyCode) {
        switch (keyCode) {
            case W:
            case S: this.player1.stopMovement(); break;
        }
        if (this.player2.type === PLAYERS.PLAYER_2) {
            switch(keyCode) {
                case I:
                case K: this.player2.stopMovement();
            }
        }
    }

    touchStarted() {
        this.touching = true;
    }
    touchEnded() {
        this.touching = false;
    }

    start() {
        document.getElementById("play-choices").style.display = "none"
        showCanvas();
    }
    stop() {
        document.getElementById("play-choices").style.display = ""
        hideCanvas();
    }
    togglePause() {
        this.paused ? loop() : noLoop();
        this.paused = !this.paused;
    }

    playCpu() {
        this.player1 = new Player(PLAYERS.PLAYER_1);
        this.player2 = new Player(PLAYERS.CPU);
        this.start();
    }
    playPerson() {
        this.player1 = new Player(PLAYERS.PLAYER_1);
        this.player2 = new Player(PLAYERS.PLAYER_2);
        this.start();
    }
}

class Player {
    constructor(type) {
        this.type = type;
        this.w = PADDLE_WIDTH;
        this.h = PADDLE_HEIGHT;
        this.score = 0;
        this.speed = 8;

        let x = PADDLE_PADDING + (this.w / 2);
        if (this.type !== PLAYERS.PLAYER_1) {
            x = width - PADDLE_PADDING - (this.w / 2);
        }
        const y = (height / 2) - (this.h / 2);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
    }

    left() { return this.pos.x - (this.w / 2); }
    right() { return this.pos.x + (this.w / 2); }
    top() { return this.pos.y - (this.h / 2); }
    bottom() { return this.pos.y + (this.h / 2); }

    update(ball) {
        this.pos.add(this.vel);

        if (this.type === PLAYERS.CPU && ball) {
            if (ball.pos.y > (this.pos.y + 1) && ball.vel.y > 0) {
                this.moveDown();
            } else if (ball.pos.y < (this.pos.y - 5) && ball.vel.y < 0) {
                this.moveUp();
            } else {
                this.stopMovement();
            }
        }

        if (this.pos.y < LIMIT_TOP) {
            this.pos.y = LIMIT_TOP;
        } else if (this.pos.y > LIMIT_BOT) {
            this.pos.y = LIMIT_BOT;
        }
    }

    draw() {
        fill(255);
        rect(this.left(), this.top(), this.w, this.h);
        fill(150);
        this.drawScore();
    }

    setVelocity(velocity) {
        this.vel.y = velocity;
    }

    stopMovement() {
        this.vel.y = 0;
    }
    moveUp() {
        this.vel.y = -this.speed;
    }
    moveDown() {
        this.vel.y = this.speed;
    }

    drawScore() {
        let x = width / 2 - TEXT_SIZE + (BALL_SIZE / 2);
        textAlign(RIGHT);
        if (this.type !== PLAYERS.PLAYER_1) {
            textAlign(LEFT);
            x = width / 2 + (BALL_SIZE / 2) + TEXT_SIZE;
        }
        let y = TEXT_SIZE;
        text(this.score, x, y);
    }
}

class Ball {
    constructor() {
        this.size = BALL_SIZE;
        this.radius = this.size / 2;
        this.speed = 8;
        this.resetPos();
    }
    resetPos() {
        this.pos = createVector((width / 2) - this.radius, (height / 2) - this.radius);
        this.vel = createVector(random(0.5, 1), random(0.5, 1));
        if (random(1) < 0.5) {
            this.vel.x *= -1;
        }
        if (random(1) < 0.5) {
            this.vel.y *= -1;
        }
        this.vel.mult(this.speed);
    }
    left() { return this.pos.x - this.radius; }
    right() { return this.pos.x + this.radius; }
    top() { return this.pos.y - this.radius; }
    bottom() { return this.pos.y + this.radius; }
    update(player1, player2) {
        this.pos.add(this.vel);

        // Bounce off paddle
        if (this.hits(player1) && this.vel.x < 0) {
            this.vel.x *= -1;
            this.vel.y += player1.vel.y / 2;
        } else if (this.hits(player2) && this.vel.x > 0) {
            this.vel.x *= -1;
            this.vel.y += player2.vel.y / 2;
        } else  if ((this.top() <= 0 && this.vel.y < 0) || (this.bottom() >= height && this.vel.y > 0)) {
            // Bounce off ceiling/floor
            this.vel.y *= -1;
        } else if (this.right() <= 0) {
            // Player2 won
            player2.score += 1;
            this.resetPos();
        } else if (this.left() >= width) {
            // Player1 won
            player1.score += 1;
            this.resetPos();
        }
    }
    hits(player) {
        let withinRange = this.bottom() >= player.top() && this.top() <= player.bottom();
        let hitPlayer;
        if (player.type === PLAYERS.PLAYER_1) {
            hitPlayer = this.left() <= player.right() && this.right() >= player.right();
        } else {
            hitPlayer = this.right() >= player.left() && this.left() <= player.left();
        }
        return withinRange && hitPlayer;
    }
    draw() {
        fill(255);
        rect(this.left(), this.top(), this.size, this.size);
    }
}
