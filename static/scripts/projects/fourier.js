const MODES = Object.freeze({
    COLLECT: 'COLLECT',
    DEMO: 'DEMO',
    DFT: 'DFT',
});
let mode = MODES.DEMO;
let border;
let drawing;
let waveSlider;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 50);
    border = width / 2;
    mode = MODES.DEMO;
    drawing = new Drawing();
    waveSlider = createSlider(1, 10, 5);
}

function draw() {
    background(0);

    // Draw border
    stroke(255);
    line(border, 0, border, height);
    noStroke();
    fill(10);
    rect(0, 0, border, height);

    switch (mode) {
        case MODES.COLLECT: drawing.collect(); break;
        case MODES.DEMO: drawing.demo(); break;
        case MODES.DFT: {
            drawing.update();
            drawing.draw();
            break;
        }
    }
}

function keyPressed() {
    if (keyCode === ESCAPE) {
        mode = MODES.DEMO;
    }
}

function mousePressed() {
    drawing.mousePressed();
}
function mouseReleased() {
    drawing.mouseReleased();
}
function touchStarted() {
    if (drawing.mousePressed()) {
        drawing.touching = true;
    }
}
function touchEnded() {
    if (drawing.mouseReleased()) {
        drawing.touching = false;
    }
}

class Complex {
    constructor(a, b) {
        this.re = a;
        this.im = b;
    }
    addEq(c) {
        this.re += c.re;
        this.im += c.im;
    }
    mult(c) {
        // (a + bi)(c + di)
        // (ac - bd) + (ad + bc)i
        return new Complex(
            this.re*c.re - this.im*c.im,
            this.re*c.im + this.im*c.re,
        );
    }
    avg(N) {
        this.re /= N;
        this.im /= N;
    }
    amp() {
        return sqrt(this.re*this.re + this.im*this.im);
    }
    phase() {
        return atan2(this.im, this.re);
    }
}

class Drawing {
    constructor() {
        this.time = 0;
        this.data = [];
        this.fourier = [];
        this.path = [];
    }

    clear() {
        this.data.length = 0;
        this.fourier.length = 0;
    }
    reset() {
        this.time = 0;
        this.path.length = 0;
    }

    mousePressed() {
        if (mouseY < height) {
            mode = MODES.COLLECT;
            drawing.clear();
            drawing.reset();
            return true;
        }
        return false;
    }

    mouseReleased() {
        if (mouseY < height && this.data.length > 0) {
            mode = MODES.DFT;
            drawing.dft();
            return true;
        }
        return false;
    }

    collect() {
        let offsetX = width / 2 + width / 4;
        let offsetY = height / 2;
        if (mouseX > width / 2) {
            this.data.push(new Complex(mouseX - offsetX, mouseY - offsetY));
        }
        stroke(255);
        noFill();
        beginShape();
        this.data.forEach(p => vertex(p.re + offsetX, p.im + offsetY));
        endShape();
    }

    update() {
        this.time += TWO_PI / this.fourier.length;
        if (this.time > TWO_PI) {
            this.reset();
        }
    }

    draw() {
        let v = this.epicycles();
        this.path.unshift(v);

        translate(width / 2, 0);
        line(v.x - width / 2, v.y, this.path[0].x, this.path[0].y);
        beginShape();
        noFill();
        this.path.forEach(p => {
            vertex(p.x, p.y);
        });
        endShape();
    }

    epicycles() {
        // Position of epicycle circle center
        let x = width / 4;
        let y = height / 2;
        const rot = 0;
        this.fourier.forEach(f => {
            const prevX = x;
            const prevY = y;
            x += f.amp * cos(f.freq * this.time + f.phase + rot);
            y += f.amp * sin(f.freq * this.time + f.phase + rot);

            stroke(255, 100);
            noFill();
            circle(prevX, prevY, 2*f.amp);
            stroke(255);
            line(prevX, prevY, x, y);
            circle(x, y, 3);
        });
        return createVector(x, y);
    }

    demo() {
        let x = width / 4;
        let y = height / 2;
        for (let i = 0; i < waveSlider.value(); i++) {
            const prevX = x;
            const prevY = y;

            const n = i * 2 + 1;
            const radius = 75 * (4 / (n * PI));
            x += radius * cos(n * this.time);
            y += radius * sin(n * this.time);

            stroke(255, 100);
            noFill();
            circle(prevX, prevY, 2*radius);

            stroke(255);
            line(prevX, prevY, x, y);
            circle(x, y, 3);
        }
        this.path.unshift(new Complex(0, y));

        let offsetX = 100;
        translate(width / 2, 0);
        line(x - width / 2, y, offsetX, this.path[0].im);
        beginShape();
        noFill();
        this.path.forEach((p, i) => {
            vertex(i + offsetX, p.im);
        });
        endShape();

        this.time += 0.05;

        if (this.path.length > 500) {
            this.path.pop();
        }
    }

    dft() {
        if (this.data.length === 0) return;
        const N = this.data.length;
        this.fourier.length = N;
        for (let k = 0; k < N; ++k) {
            let sum = new Complex(0, 0);
            for (let n = 0; n < N; ++n) {
                // X[k] = xys[n] * [cos(2*pi*k*n / N) - i * sin(2*pi*k*n / N)]
                const phi = (TWO_PI * k * n) / N;

                sum.addEq(
                    this.data[n].mult(
                        new Complex(cos(phi), -sin(phi))
                    )
                );
            }
            sum.avg(N);
            let re = sum.re;
            let im = sum.im;
            let freq = k;
            let amp = sum.amp();
            let phase = sum.phase();
            this.fourier[k] = { re, im, freq, amp, phase };
        }
        this.fourier.sort((a, b) => b.amp - a.amp);
    }
}
