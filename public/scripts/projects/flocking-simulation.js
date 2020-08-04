const perceptionRadius = 100;
let boundary;
let alignSlider, cohesionSlider, separationSlider;
let alignText, cohesionText, separationText;

/*global
  setup
  draw
  width
  height
  createCanvas
  createSlider
  createSpan
  background
  createVector
  random
  stroke
  strokeWeight
  point
  fill
  noStroke
  noFill
  dist
  p5
  triangle
  textSize
  text
  frameRate
  rect
  rectMode
*/
/*exported
  setup
  draw
*/

function setup() {
  createCanvas(785, 355);
  rectMode(CENTER);

  alignSlider = createSlider(0, 2, 1, 0.1);
  alignText = createSpan("Alignment");
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  cohesionText = createSpan("Cohesion");
  separationSlider = createSlider(0, 2, 1, 0.1);
  separationText = createSpan("Separation");

  boundary = new Rect(width / 2, height / 2, width, height);

  textSize(15);
}

function draw() {
  background(51);

  let qTree = new QuadTree(boundary, 4);

  updateBoids(qTree);
  // drawTree(qTree);

  fill("red");
  noStroke();
  text(Math.round(frameRate()), 10, 20);
}

function updateBoids(qTree) {
  qTree.items.forEach((boid) => {
    const range = new Rect(
      boid.x(),
      boid.y(),
      perceptionRadius,
      perceptionRadius
    );
    noFill();
    strokeWeight(1);
    stroke("green");
    rect(range.x, range.y, range.hw * 2, range.hh * 2);
    const neighbors = qTree.query(range);
    boid.flock(neighbors);
    boid.draw();
    qTree.children.forEach((c) => updateBoids(c));
  });
}

function drawTree(t) {
  strokeWeight(1);
  noFill();
  stroke(255);
  rect(t.box.x, t.box.y, t.box.hw * 2, t.box.hh * 2);
  t.children.forEach((c) => drawTree(c));
}

class Boid {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2, 4));
    this.acc = createVector(0, 0);
    this.maxForce = 1;
    this.maxSpeed = 4;
  }

  x() {
    return this.pos.x;
  }

  y() {
    return this.pos.y;
  }

  flock(boids) {
    // Wrap around
    this.checkBoundaries();

    // Flock
    const alignment = createVector(0, 0);
    const cohesion = createVector(0, 0);
    const separation = createVector(0, 0);
    let encounteredBoids = 0;
    for (const other of boids) {
      if (this === other) continue;

      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (d < perceptionRadius) {
        alignment.add(other.vel);
        cohesion.add(other.pos);
        const diff = p5.Vector.sub(this.pos, other.pos);
        diff.div(d * d);
        separation.add(diff);
        encounteredBoids++;
      }
    }
    if (encounteredBoids > 0) {
      alignment.div(encounteredBoids);
      alignment.setMag(this.maxSpeed);
      alignment.sub(this.vel);
      alignment.limit(this.maxForce);

      cohesion.div(encounteredBoids);
      cohesion.sub(this.pos);
      cohesion.setMag(this.maxSpeed);
      cohesion.sub(this.vel);
      cohesion.limit(this.maxForce);

      separation.div(encounteredBoids);
      separation.setMag(this.maxSpeed);
      separation.sub(this.vel);
      separation.limit(this.maxForce);
    }

    alignment.mult(alignSlider.value());
    cohesion.mult(cohesionSlider.value());
    separation.mult(separationSlider.value());

    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(separation);
    this.acc.limit(this.maxForce);

    // Update physics
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.acc.mult(0);
  }

  checkBoundaries() {
    this.pos.x = this.pos.x > width ? 0 : this.pos.x < 0 ? width : this.pos.x;
    this.pos.y = this.pos.y > height ? 0 : this.pos.y < 0 ? height : this.pos.y;
  }

  draw() {
    strokeWeight(8);
    stroke(255);
    point(this.pos);
  }
}

class QuadTree {
  constructor(box, n) {
    this.box = box;
    this.capacity = n;
    this.items = [];
    this.children = [];
  }

  insert(item) {
    if (!this.box.contains(item)) return false;

    if (this.items.length < this.capacity) {
      this.items.push(item);
      return true;
    }

    if (this.children.length === 0) this.subdivide();

    for (const child of this.children) if (child.insert(item)) return true;

    return false;
  }

  subdivide() {
    const x = this.box.x;
    const y = this.box.y;
    const hw = this.box.hw;
    const hh = this.box.hh;
    const w = hw / 2;
    const h = hh / 2;
    // NW
    const nw = new Rect(x - w, y - h, hw, hh);
    this.children.push(new QuadTree(nw, this.capacity));
    // NE
    const ne = new Rect(x + w, y - h, hw, hh);
    this.children.push(new QuadTree(ne, this.capacity));
    // SW
    const sw = new Rect(x - w, y + h, hw, hh);
    this.children.push(new QuadTree(sw, this.capacity));
    // SE
    const se = new Rect(x + w, y + h, hw, hh);
    this.children.push(new QuadTree(se, this.capacity));
  }

  query(range) {
    let foundItems = [];

    if (!this.box.intersects(range)) return foundItems;

    for (const item of this.items)
      if (range.contains(item)) foundItems.push(item);

    if (this.children.length === 0) return foundItems;

    for (const children of this.children)
      foundItems = foundItems.concat(children.query(range));

    return foundItems;
  }
}

class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.hw = w / 2;
    this.hh = h / 2;
  }

  left() {
    return this.x - this.hw;
  }

  right() {
    return this.x + this.hw;
  }

  top() {
    return this.y - this.hh;
  }

  bottom() {
    return this.y + this.hh;
  }

  contains(item) {
    return (
      item.x() >= this.left() &&
      item.x() < this.right() &&
      item.y() >= this.top() &&
      item.y() < this.bottom()
    );
  }

  intersects(box) {
    return !(
      box.left() > this.right() ||
      box.right() < this.left() ||
      box.top() > this.bottom() ||
      box.bottom() < this.top()
    );
  }
}
