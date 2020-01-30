// Global Constants
const BG_COLOR = [0, 0, 0, 175];

// Glyph Constants
const GLYPH_FONT = "Courier New";
const GLYPH_SIZE_DEFAULT = 16;
const GLYPH_SIZES = [12, 14, GLYPH_SIZE_DEFAULT];
const GLYPH_COLOR_DEFAULT = [0, 255, 70];
const GLYPH_COLORS = [
    [0, 75, 0],
    [0, 175, 35],
    GLYPH_COLOR_DEFAULT,
];
const GLYPH_HIGHLIGHT = [230, 255, 230];
const GLYPH_HIGHLIGHT_PROBABILITY = 10;
const MORPH_PROBABILITY = 10;
const MORPH_INTERVAL_MIN = 2;
const MORPH_INTERVAL_MAX = 20;

// Stream Constants
const START_Y_MIN = -2000;
const START_Y_MAX = -200;
const SPAWN_Y_MIN = -500;
const SPAWN_Y_MAX = -100;
const SPEED_MIN = 5;
const SPEED_MAX = 20;
const SPEED_THRESHOLDS = [6, 12];
const STREAM_EMPTY_PROBABILITY = 10;
const STREAM_MIN = 3;
const STREAM_MAX = 30;

// Global variables
let streams = [];

function setup() {
    createCanvas(windowWidth-10, windowHeight-20);
    background(BG_COLOR);
    textStyle(BOLD);
    textFont(GLYPH_FONT);
    frameRate(30);

    let x = 0;
    for (let i = 0; i < floor(width / GLYPH_SIZE_DEFAULT) - 1; ++i) {
        let y = random(START_Y_MIN, START_Y_MAX);
        let stream = new Stream(x, y);
        streams.push(stream);
        x += GLYPH_SIZE_DEFAULT;
    }
    stream = new Stream(0, width / 2);
}

function draw() {
    background(BG_COLOR);
    for (let i = streams.length - 1; i >= 0; --i) {
        let stream = streams[i];
        if (stream.y >= (height + stream.height)) {
            streams.splice(i, 1);
        } else {
            stream.draw();
        }
    }
}

class Glyph {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = "";
        this.size = GLYPH_SIZE_DEFAULT;
        this.color = GLYPH_COLOR_DEFAULT;
        this.morphInterval = round(random(MORPH_INTERVAL_MIN, MORPH_INTERVAL_MAX));
        this.randomizeGlyph();
    }
    randomizeGlyph() {
        this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
    }
    draw() {
        fill(this.color);
        textSize(this.size);
        text(this.value, this.x, this.y);
    }
    rain(speed) {
        // this.y = (this.y >= height) ? 0 : this.y + speed;
        this.y += speed;
        let morphRoll = random(0, 100);
        if ((frameCount % this.morphInterval) == 0 && morphRoll <= MORPH_PROBABILITY) {
            this.randomizeGlyph();
        }
    }
}

class Stream {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 0;
        this.glyphs = [];
        this.speed = 0;
        this.spawned = false;
        this.randomizeStream();
    }
    randomizeStream() {
        this.glyphs = [];
        this.speed = round(random(SPEED_MIN, SPEED_MAX));
        if (this.speed <= SPEED_THRESHOLDS[0]) {
            this.glyphSize = GLYPH_SIZES[0];
            this.glyphColor = GLYPH_COLORS[0];
        } else if (this.speed <= SPEED_THRESHOLDS[1]) {
            this.glyphSize = GLYPH_SIZES[1];
            this.glyphColor = GLYPH_COLORS[1];
        } else {
            this.glyphSize = GLYPH_SIZES[2];
            this.glyphColor = GLYPH_COLORS[2];
        }

        let emptyProb = round(random(0, 100)) <= STREAM_EMPTY_PROBABILITY;
        if (!emptyProb) {
            const numGlyphs = round(random(STREAM_MIN, STREAM_MAX));
            let y = this.y;
            for (let i = 0; i < numGlyphs; ++i) {
                let glyph = new Glyph(this.x, y);
                glyph.size = this.glyphSize;
                glyph.color = this.glyphColor;
                if (i === 0 && round(random(0, 100)) <= GLYPH_HIGHLIGHT_PROBABILITY) {
                    glyph.color = GLYPH_HIGHLIGHT;
                }
                this.glyphs.push(glyph);
                y -= glyph.size;
                this.height += glyph.size;
            }
        }
    }
    draw() {
        this.glyphs.forEach(glyph => {
            glyph.draw();
            glyph.rain(this.speed);
        });
        this.y += this.speed;
        if (!this.spawned && this.y >= height / 2) {
            let y = random(SPAWN_Y_MIN, SPAWN_Y_MAX);
            let stream = new Stream(this.x, y);
            streams.push(stream);
            this.spawned = true;
        }
    }
}
