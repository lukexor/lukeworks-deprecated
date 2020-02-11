// Global Constants
const BG_COLOR = [0, 0, 0, 150];

// Glyph Constants
const GLYPH_FONT = "Courier New";
const GLYPH_SIZE = 16;
const GLYPH_COLOR = [00, 255, 70];
const GLYPH_COLOR_DARK = [0, 155, 00];
const GLYPH_HIGHLIGHT = [200, 255, 200];
const GLYPH_HIGHLIGHT_PROBABILITY = 25;
const GLYPH_EMPTY_PROBABILITY = 2;
const MORPH_PROBABILITY = 40;
const MORPH_INTERVAL_MIN = 2;
const MORPH_INTERVAL_MAX = 20;

// Stream Constants
const START_Y_MIN = -2000;
const START_Y_MAX = -200;
const SPAWN_Y_MIN = -500;
const SPAWN_Y_MAX = -100;
const SPEED_MIN = 1;
const SPEED_MAX = 3;
const STREAM_EMPTY_PROBABILITY = 5;
const STREAM_MIN = 3;
const STREAM_MAX = 30;

// Global variables
let streams = [];
let chars = [" ", "$", "@", ":", "-", "+", "*", ";", ".", "<", ">"];

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth-15, windowHeight-20);
    background(BG_COLOR);
    textStyle(BOLD);
    textFont(GLYPH_FONT);
    frameRate(20);

    for (let i = 0; i < 10; ++i) {
        chars.push(i.toString());
    }
    for (let i = 0; i < 96; ++i) {
        chars.push(String.fromCharCode(0x30A0 + i));
    }

    let x = 0;
    for (let i = 0; i < floor(width / GLYPH_SIZE) - 1; ++i) {
        const y = random(START_Y_MIN, START_Y_MAX);
        const stream = new Stream(x, y);
        streams.push(stream);
        x += GLYPH_SIZE;
    }
}

function draw() {
    background(BG_COLOR);
    for (let i = streams.length - 1; i >= 0; --i) {
        const stream = streams[i];
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
        this.size = GLYPH_SIZE;
        this.color = GLYPH_COLOR;
        this.morphInterval = round(random(MORPH_INTERVAL_MIN, MORPH_INTERVAL_MAX));
        this.randomizeGlyph();
    }
    randomizeGlyph() {
        this.value = chars[round(random(0, chars.length))];
    }
    draw() {
        let morphRoll = random(0, 100);
        if ((frameCount % this.morphInterval) === 0 && morphRoll <= MORPH_PROBABILITY) {
            this.randomizeGlyph();
        }
        fill(this.color);
        textSize(this.size);
        text(this.value, this.x, this.y);
    }
}

class Stream {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 0;
        this.highlight = false;
        this.glyphs = [];
        this.glyphSize = GLYPH_SIZE;
        this.glyphColor = GLYPH_COLOR;
        this.speed = 0;
        this.spawned = false;
        this.randomizeStream();
    }
    randomizeStream() {
        this.glyphs = [];
        this.speed = round(random(SPEED_MIN, SPEED_MAX));
        if (this.speed === SPEED_MIN) {
            this.glyphColor = GLYPH_COLOR_DARK;
        }

        if (round(random(0, 100)) <= GLYPH_HIGHLIGHT_PROBABILITY) {
            this.highlight = true;
        }

        const emptyProb = round(random(0, 100)) <= STREAM_EMPTY_PROBABILITY;
        if (!emptyProb) {
            const numGlyphs = round(random(STREAM_MIN, STREAM_MAX));
            let y = this.y;
            for (let i = 0; i < numGlyphs; ++i) {
                let glyph = new Glyph(this.x, y);
                glyph.size = this.glyphSize;
                glyph.color = this.glyphColor;
                this.glyphs.push(glyph);
                y -= glyph.size;
                this.height += glyph.size;
            }
        }
    }
    draw() {
        this.y += this.speed * this.glyphSize;
        for (let i = 0; i < this.glyphs.length; ++i) {
            const glyphIndex = abs(i - floor(this.y / this.glyphSize)) % this.glyphs.length;
            let glyph = this.glyphs[glyphIndex];
            if (i === 0 && this.highlight) {
                glyph.color = GLYPH_HIGHLIGHT;
            } else {
                glyph.color = this.glyphColor;
            }
            glyph.y = floor(this.y) - (i * this.glyphSize);
            glyph.draw();
        }
        if (!this.spawned && this.y >= (3 * height / 4)) {
            const y = random(SPAWN_Y_MIN, SPAWN_Y_MAX);
            const stream = new Stream(this.x, y);
            streams.push(stream);
            this.spawned = true;
        }
    }
}
