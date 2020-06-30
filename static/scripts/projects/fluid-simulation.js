const N = 90;
const SCALE = 4;
const ITER = 4;

let DT = 0.02; // Time Step of Fluid
let DIFFUSE = 0.00002; // Diffusion of Fluid
let VISC = 0.00000001; // Viscosity of Fluid
let VEL = 2.8; // Velocity of fluid from perlin noise
let TIME_INC = 0.02; // Amount to step time for perlin noise each draw

let dtSlider;
let velSlider;

let fluid;
let faucet = true;
let t = 0;
let count = 3;
let w;
let h;
let xs = [];
let ys = [];
let ns = [];

p5.disableFriendlyErrors = true;
function setup() {
    const canvas = createCanvas(N*SCALE, N*SCALE);
    const cx = (windowWidth - width) / 2;
    const cy = (windowHeight - height) / 2;
    canvas.position(cx, cy);
    canvas.style('border', '2px solid #222');

    rectMode(CENTER);
    noStroke();

    fluid = new Fluid(DT, DIFFUSE, VISC);

    w = width / SCALE;
    h = height / SCALE;

    for (let i = 0; i < count; ++i) {
        xs.push(random(20, w-20));
        ys.push(random(h-h/2, h-20));
        ns.push(random(-1000, 1000));
    }
}

function draw() {
    if (faucet) {
        for (let k = 0; k < count; ++k) {
            const nx = 4*noise(ns[k]);
            const ny = 4*noise(ns[k] + 1000);
            xs[k] = constrain(xs[k] + random(-nx, nx), 20, w-20);
            ys[k] = constrain(ys[k] + random(-ny, ny), h-h/2, h-20);
            for (let i = -2; i <= 2; ++i) {
                for (let j = -2; j <= 2; ++j) {
                    fluid.addDensity(xs[k]+i, ys[k]+j, random(50, 100));
                }
            }
        }
    } else if (mouseIsPressed) {
        drag();
    }
    t += TIME_INC;

    fluid.step();
    fluid.draw();
}


function mouseMoved() {
    drag();
}

function touchMoved() {
    drag();
    return false;
}
function touchStarted() {
    faucet = false;
    return false;
}
function touchEnded() {
    faucet = true;
    return false;
}

function drag() {
    if (!faucet) {
        const x = mouseX / SCALE;
        const y = mouseY / SCALE;
        const amtX = mouseX - pmouseX;
        const amtY = mouseY - pmouseY;
        let vel = createVector(amtX, amtY);
        vel.setMag(VEL);
        for (let i = -2; i <= 2; ++i) {
            for (let j = -2; j <= 2; ++j) {
                fluid.addDensity(x + i, y + j, random(50, 100));
                fluid.addVelocity(x + i, y + j, vel.x, vel.y);
            }
        }
    }
    return false;
}

class Fluid {
    constructor(dt, diffusion, viscosity) {
        this.size = N;
        this.dt = dt;
        this.diff = diffusion;
        this.visc = viscosity;

        let count = N * N;
        this.s = new Array(count).fill(0);
        this.density = new Array(count).fill(0);

        this.velx = new Array(count).fill(0);
        this.vely = new Array(count).fill(0);

        this.velx0 = new Array(count).fill(0);
        this.vely0 = new Array(count).fill(0);
    }

    step() {
        diffuse(1, this.velx0, this.velx, this.visc, this.dt);
        diffuse(2, this.vely0, this.vely, this.visc, this.dt);

        project(this.velx0, this.vely0, this.velx, this.vely);

        advect(1, this.velx, this.velx0, this.velx0, this.vely0, this.dt);
        advect(2, this.vely, this.vely0, this.velx0, this.vely0, this.dt);

        project(this.velx, this.vely, this.velx0, this.vely0);

        diffuse(0, this.s, this.density, this.diff, this.dt);
        advect(0, this.density, this.s, this.velx, this.vely, this.dt);
    }

    addDensity(x, y, amount) {
        const idx = IDX(x, y);
        this.density[idx] += amount;
        const vel = createVector(random(-2*VEL, 2*VEL), random(-VEL/2));
        // const vel = createVector(random(-2*VEL, 2*VEL), random(-2*VEL, 2*VEL));
        this.addVelocity(x, y, vel.x, vel.y);
    }

    addVelocity(x, y, amountX, amountY) {
        const idx = IDX(x, y);
        this.velx[idx] += amountX;
        this.vely[idx] += amountY;
    }

    draw() {
        for (let i = 1; i < N-1; ++i) {
            for (let j = 1; j < N-1; ++j) {
                const x = i * SCALE;
                const y = j * SCALE;
                const idx = IDX(i, j);

                // Draw density
                const d = this.density[idx];
                const m = d / 125;
                const f = m*d;
                fill(f, f/3, 0, 150);
                square(x, y, SCALE);
            }
        }
    }
}

function diffuse(b, x, x0, diff, dt) {
    const a = dt * diff * (N - 2) * (N - 2);
    linear_solve(b, x, x0, a, 1 + 6 * a);
}

function linear_solve(b, x, x0, a, c) {
    const cRecip = 1.0 / c;
    const nLen = N - 1;
    for (let t = 0; t < ITER; ++t) {
        for (let j = 1; j < nLen; ++j) {
            for (let i = 1; i < nLen; ++i) {
                const idx = IDX(i, j);
                x[idx] = (
                    x0[idx]
                    + a * ( x[IDX(i+1, j  )]
                          + x[IDX(i-1, j  )]
                          + x[IDX(i  , j+1)]
                          + x[IDX(i  , j-1)])
                ) * cRecip;
            }
        }
    }
    set_bounds(b, x);
}

function project(velx, vely, p, div) {
    const nLen = N - 1;

    for (let j = 1; j < nLen; ++j) {
        for (let i = 1; i < nLen; ++i) {
            const idx = IDX(i, j);
            div[idx] = -0.5 * (
                  velx[IDX(i+1, j  )]
                - velx[IDX(i-1, j  )]
                + vely[IDX(i  , j+1)]
                - vely[IDX(i  , j-1)]
            ) / N;
            p[idx] = 0;
        }
    }
    set_bounds(0, div);
    set_bounds(0, p);
    linear_solve(0, p, div, 1, 6);

    for (let j = 1; j < nLen; ++j) {
        for (let i = 1; i < nLen; ++i) {
            const idx = IDX(i, j);
            velx[idx] -= 0.5 * (p[IDX(i+1, j  )] - p[IDX(i-1, j  )]) * N;
            vely[idx] -= 0.5 * (p[IDX(i  , j+1)] - p[IDX(i  , j-1)]) * N;
        }
    }
    set_bounds(1, velx);
    set_bounds(2, vely);
}

function advect(b, d, d0, velx, vely, dt) {
    let i0, i1, j0, j1;

    const dtx = dt * (N - 2);
    const dty = dt * (N - 2);

    let s0, s1, t0, t1;

    const nLen = N - 1;
    for (let j = 1; j < nLen; ++j) {
        for (let i = 1; i < nLen; ++i) {
            const idx = IDX(i, j);
            let x = i - (dtx * velx[idx]);
            let y = j - (dty * vely[idx]);

            if (x < 0.5) x = 0.5;
            if (x > N + 0.5) x = N + 0.5;
            i0 = floor(x);
            i1 = i0 + 1.0;
            if (y < 0.5) y = 0.5;
            if (y > N + 0.5) y = N + 0.5;
            j0 = floor(y);
            j1 = j0 + 1.0;

            s1 = x - i0;
            s0 = 1.0 - s1;
            t1 = y - j0;
            t0 = 1.0 - t1;

            const pd = d[idx];
            d[idx] = s0 * (t0 * d0[IDX(i0, j0)] + t1 * d0[IDX(i0, j1)])
                   + s1 * (t0 * d0[IDX(i1, j0)] + t1 * d0[IDX(i1, j1)]);
            d[idx] = constrain(d[idx], pd-150, 350);
        }
    }
    set_bounds(b, d);
}

function set_bounds(b, x) {
    const nLen = N - 1;
    // Top and bottom
    for (let i = 1; i < nLen; ++i) {
        x[IDX(i, 0  )] = b == 2 ? -x[IDX(i, 1  )] : x[IDX(i, 1  )];
        x[IDX(i, N-1)] = b == 2 ? -x[IDX(i, N-2)] : x[IDX(i, N-2)];
    }
    // Left and Right
    for (let j = 1; j < nLen; ++j) {
        x[IDX(0  , j)] = b == 1 ? -x[IDX(1  , j)] : x[IDX(1  , j)];
        x[IDX(N-1, j)] = b == 1 ? -x[IDX(N-2, j)] : x[IDX(N-2, j)];
    }

    x[IDX(0  , 0  )] = 0.5 * (x[IDX(1  , 0  )] + x[IDX(0  , 1  )]);
    x[IDX(0  , N-1)] = 0.5 * (x[IDX(1  , N-1)] + x[IDX(0  , N-2)]);
    x[IDX(N-1, 0  )] = 0.5 * (x[IDX(N-2, 0  )] + x[IDX(N-1, 1  )]);
    x[IDX(N-1, N-1)] = 0.5 * (x[IDX(N-2, N-1)] + x[IDX(N-1, N-2)]);
}

function IDX(x, y) {
    x = constrain(x, 0, N-1);
    y = constrain(y, 0, N-1);
    return floor(x) + floor(y) * N;
}
