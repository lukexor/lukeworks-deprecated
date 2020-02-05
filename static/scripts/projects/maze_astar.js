// TODO
// - Add settings to specify start/end points and change canvas size
// - Break out into individual files/classes
// - Move globals into a class
// - Add option to generate maze without draw loop
// - Add option to solve A* without draw loop
// - Rename functions to better names

let cellSize;
let framerate = 60;
let connectChance;

let cols;
let rows;
let grid = [];
let stack = [];
let current;
let cellsVisited;
let mazeGenerated = false;

// A*
let openSet;
let closedSet;
let start;
let end;
let path;
let pathSet;

let backtracking = false;
let pause = false;
let startTime = new Date();

var draw = function() {};

function setup() {
    try {
        cellSize = parseInt(document.getElementById("cellSize").value);
    } catch {
        cellSize = 50;
    }
    try {
        connectChance = parseInt(document.getElementById("connectChance").value);
    } catch {
        connectChance = 10;
    }

    let c = floor((windowWidth - 10) / cellSize);
    let r = floor(c / 2);
    createCanvas(c * cellSize, r * cellSize);
    createGrid();
}

function mouseDragged() {
    loop();
    let pCell = grid[index(floor(pmouseX/cellSize), floor(pmouseY/cellSize))];
    let cell = grid[index(floor(mouseX/cellSize), floor(mouseY/cellSize))];
    if (pCell && cell) {
        let xdiff = abs(pCell.col - cell.col) > 0 ? 1 : 0;
        let ydiff = abs(pCell.row - cell.row) > 0 ? 1 : 0;
        if (xdiff ^ ydiff) {
            pCell.removeWallTo(cell);
            pCell.visited = true;
            cell.visited = true;
        }
    }
    grid.forEach(cell => cell.draw());
    mazeGenerated = true;
}

function createGrid() {
    grid = [];
    stack = [];
    cellsVisited = 0;
    cols = Math.floor(width / cellSize);
    rows = Math.floor(height / cellSize);
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            grid.push(new Cell(col, row));
        }
    }
    background(51);
    grid.forEach(cell => cell.draw());
}

function emptyMaze() {
    grid.forEach(cell => {
        cell.visited = true;

        let neighbors = [];
        let top = grid[index(cell.col, cell.row - 1)];
        let right = grid[index(cell.col + 1, cell.row)];
        let bottom = grid[index(cell.col, cell.row + 1)];
        let left = grid[index(cell.col - 1, cell.row)];
        if (top && !top.visited)
            neighbors.push(top)
        if (right && !right.visited)
            neighbors.push(right)
        if (bottom && !bottom.visited)
            neighbors.push(bottom)
        if (left && !left.visited)
            neighbors.push(left)

        neighbors.forEach(n => cell.removeWallTo(n));
    });
    mazeGenerated = true;
    document.getElementById("endCol").value = cols - 1;
    document.getElementById("endRow").value = rows - 1;
    background(51);
    grid.forEach(cell => cell.draw());
}

function createMaze() {
    message("Creating a maze using a <a href='https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker'>Recursive Backtracking</a> algorithm...");
    legend("Green: Current Position\n"
        + "Gray: Unvisited Cell\n"
        + "Blue: Visited Cell"
    );

    mazeGenerated = false;
    createGrid();
    let r = Math.floor(Math.random() * grid.length);
    current = grid[r];
    stack.push(current);
    startTime = Date.now();
    draw = makeMaze;
    loop();
}

function makeMaze() {
    background(51);
    grid.forEach(cell => cell.draw());

    if (!current.visited)
        cellsVisited += 1;
    current.visited = true;
    current.highlight();
    let next = current.getRandomNeighbor();
    if (next) {
        stack.push(next);
        current.removeWallTo(next);
        current = next;
        backtracking = false;
    } else if (stack.length > 0) {
        if (!backtracking)
            current.connectRandomNeighbor();
        backtracking = true;
        current = stack.pop();
    } else if (cellsVisited === grid.length) {
        let elapsedStr = elapsed();
        message(`Finished in ${ elapsedStr }. Click <em><strong>Solve Maze</strong></em> to generate random start/exit points and solve using an <a href='https://en.wikipedia.org/wiki/A*_search_algorithm'>A* search algorithm</a>.`);
        mazeGenerated = true;
        document.getElementById("endCol").value = cols - 1;
        document.getElementById("endRow").value = rows - 1;
        current = grid[0];
        grid.forEach(cell => cell.draw());
        addSaveMazeLink();
        noLoop();
    }
}

function makeMazeNoLoop() {
    message("Creating a maze using a <a href='https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker'>Recursive Backtracking</a> algorithm...");
    legend("Green: Current Position\n"
        + "Gray: Unvisited Cell\n"
        + "Blue: Visited Cell"
    );

    createGrid();

    let r = Math.floor(Math.random() * grid.length);

    startTime = Date.now();
    current = grid[r];
    stack.push(current);
    mazeGenerated = false;

    while (!mazeGenerated) {
        if (!current.visited)
            cellsVisited += 1;
        current.visited = true;
        let next = current.getRandomNeighbor();
        if (next) {
            stack.push(next);
            current.removeWallTo(next);
            current = next;
            backtracking = false;
        } else if (stack.length > 0) {
            if (!backtracking)
                current.connectRandomNeighbor();
            backtracking = true;
            current = stack.pop();
        } else if (cellsVisited === grid.length) {
            let elapsedStr = elapsed();
            message(`Finished in ${ elapsedStr }. Click <em><strong>Solve Maze</strong></em> to generate random start/exit points and solve using an <a href='https://en.wikipedia.org/wiki/A*_search_algorithm'>A* search algorithm</a>.`);
            mazeGenerated = true;
            document.getElementById("endCol").value = cols - 1;
            document.getElementById("endRow").value = rows - 1;
            current = grid[0];
            addSaveMazeLink();
        }
    }
    draw = function() {
        background(51);
        grid.forEach(cell => cell.draw());
        setTimeout(function() {
            noLoop();
        },100);
    }
    loop();
}

function solveAstar() {
    if (!mazeGenerated) {
        message("No maze generated yet. Click <em><strong>Create Maze</strong></em> first.");
        return;
    }
    message("Solving the maze using an <a href='https://en.wikipedia.org/wiki/A*_search_algorithm'>A*</a> algorithm...");
    legend("Green: Start\n"
        + "Yellow: Goal\n"
        + "Orange: Possible Paths\n"
        + "Red: Explored Paths\n"
        + "Cyan: Shortest Path"
    );
    openSet = new minHeap();
    closedSet = {};
    path = [];
    pathSet = {};
    grid.forEach(cell => {
        cell.previous = undefined;
        cell.f = cell.g = cell.h = Number.MAX_VALUE;
    });
    if (document.getElementById("randomizeStart").checked) {
        let s = Math.floor(Math.random() * grid.length);
        start = grid[s];
        document.getElementById("startCol").value = start.col;
        document.getElementById("startRow").value = start.row;
    } else {
        let startCol = parseInt(document.getElementById("startCol").value);
        let startRow = parseInt(document.getElementById("startRow").value);
        start = grid[index(startCol, startRow)];
    }
    if (document.getElementById("randomizeEnd").checked) {
        let e = Math.floor(Math.random() * grid.length);
        end = grid[e];
        document.getElementById("endCol").value = end.col;
        document.getElementById("endRow").value = end.row;
    } else {
        let endCol = parseInt(document.getElementById("endCol").value);
        let endRow = parseInt(document.getElementById("endRow").value);
        end = grid[index(endCol, endRow)];
    }
    current = start;
    start.g = 0;
    start.h = start.heuristic(end);
    start.f = start.h;
    openSet.insert(start);
    startTime = new Date();
    draw = astar;
    loop();
}

function astar() {
    background(51);

    path = [];
    pathSet = {};
    var temp = current;
    path.push(temp);
    while (temp.previous) {
        path.push(temp.previous);
        pathSet[temp.id] = temp;
        temp = temp.previous;
    }

    grid.forEach(cell => {
        if (pathSet[cell.id]) {
            cell.draw([0, 125, 125]);
        } else if (closedSet[cell.id]) {
            cell.draw([125, 0, 0]);
        } else if (openSet.contains(cell)) {
            cell.draw([225, 125, 0]);
        } else {
            cell.draw();
        }
    });

    start.highlight();
    end.draw([255, 255, 0]);

    if (!openSet.isEmpty()) {
        current = openSet.extractMin();

        if (current === end) {
            let elapsedStr = elapsed();
            message(`Finished in ${ elapsedStr }. Click <em><strong>Solve Maze</strong></em> to choose different starting/exit points, or <em><strong>Create Maze</strong></em> to generate a new maze.`);
            openSet.clear();
            astar();
            noLoop();
            return;
        }

        closedSet[current.id] = true;

        current.neighbors.forEach(neighborId => {
            if (neighborId) {
                let neighbor = grid[neighborId];
                if (!closedSet[neighbor.id]) {
                    let tempG = current.g + 1;
                    if (tempG < neighbor.g) {
                        neighbor.previous = current;
                        neighbor.g = tempG;
                        neighbor.h = neighbor.heuristic(end);
                        neighbor.f = neighbor.g + neighbor.h;
                        if (!openSet.contains(neighbor)) {
                            openSet.insert(neighbor);
                        }
                    }
                }
            }
        });
    } else {
        noLoop();
    }
}

function astarNoLoop() {
    if (!mazeGenerated) {
        makeMazeNoLoop();
    }

    openSet = new minHeap();
    closedSet = {};
    path = [];
    pathSet = {};
    grid.forEach(cell => {
        cell.previous = undefined;
        cell.f = cell.g = cell.h = Number.MAX_VALUE;
    });
    if (document.getElementById("randomizeStart").checked) {
        let s = Math.floor(Math.random() * grid.length);
        start = grid[s];
        document.getElementById("startCol").value = start.col;
        document.getElementById("startRow").value = start.row;
    } else {
        let startCol = parseInt(document.getElementById("startCol").value);
        let startRow = parseInt(document.getElementById("startRow").value);
        start = grid[index(startCol, startRow)];
    }
    if (document.getElementById("randomizeEnd").checked) {
        let e = Math.floor(Math.random() * grid.length);
        end = grid[e];
        document.getElementById("endCol").value = end.col;
        document.getElementById("endRow").value = end.row;
    } else {
        let endCol = parseInt(document.getElementById("endCol").value);
        let endRow = parseInt(document.getElementById("endRow").value);
        end = grid[index(endCol, endRow)];
    }

    startTime = new Date();
    current = start;
    start.g = 0;
    start.h = start.heuristic(end);
    start.f = start.h;
    openSet.insert(start);

    while (!openSet.isEmpty()) {
        current = openSet.getMin();

        if (current === end) {
            path = [];
            pathSet = {};
            var temp = current;
            path.push(temp);
            while (temp.previous) {
                path.push(temp.previous);
                pathSet[temp.id] = temp;
                temp = temp.previous;
            }
            let elapsedStr = elapsed();
            message(`Finished in ${ elapsedStr }. Click <em><strong>Solve Maze</strong></em> to choose different starting/exit points, or <em><strong>Create Maze</strong></em> to generate a new maze.`);
            break;
        }

        openSet.extractMin();
        closedSet[current.id] = true;

        current.neighbors.forEach(neighborId => {
            if (neighborId) {
                let neighbor = grid[neighborId];
                if (!closedSet[neighbor.id]) {
                    let tempG = current.g + 1;
                    if (tempG < neighbor.g) {
                        neighbor.previous = current;
                        neighbor.g = tempG;
                        neighbor.h = neighbor.heuristic(end);
                        neighbor.f = neighbor.g + neighbor.h;
                        if (!openSet.contains(neighbor)) {
                            openSet.insert(neighbor);
                        }
                    }
                }
            }
        });
    }

    draw = function() {
        background(51);
        grid.forEach(cell => cell.draw());
        grid.forEach(cell => {
            if (pathSet[cell.id]) {
                cell.draw([0, 125, 125]);
            } else if (closedSet[cell.id]) {
                cell.draw([125, 0, 0]);
            } else if (openSet.contains(cell)) {
                cell.draw([225, 125, 0]);
            } else {
                cell.draw();
            }
        });
        start.highlight();
        end.draw([255, 255, 0]);
        setTimeout(function() {
            noLoop();
        },100);
    }
    loop();
}

function index(x, y) {
    if (x < 0 || x > cols - 1 || y < 0 || y > rows -1)
        return -1;
    return x + y * cols;
}

function Cell(col, row) {
    this.id = grid.length;
    this.col = col;
    this.row = row;
    this.visited = false;
    this.neighbors = [null, null, null, null];
    this.previous;

    // A*
    this.f = Number.MAX_VALUE;
    this.g = Number.MAX_VALUE;
    this.h = Number.MAX_VALUE;

    this.draw = function(color) {
        if (!color) {
            color = [000, 50, 75];
        }
        let top = this.row * cellSize;
        let left = this.col * cellSize;
        let right = left + cellSize;
        let bottom = top + cellSize;

        if (this.visited) {
            fill(color);
            noStroke();
            rect(left, top, cellSize, cellSize);
        }
        noFill();
        stroke(255);
        if (this.neighbors[0] === null)
            line(left, top, right, top); // Top
        if (this.neighbors[1] === null)
            line(right, top, right, bottom); // Right
        if (this.neighbors[2] === null)
            line(right, bottom, left, bottom); // Bottom
        if (this.neighbors[3] === null)
            line(left, bottom, left, top); // Left
    };

    this.getRandomNeighbor = function() {
        let neighbors = [];
        let top = grid[index(this.col, this.row - 1)];
        let right = grid[index(this.col + 1, this.row)];
        let bottom = grid[index(this.col, this.row + 1)];
        let left = grid[index(this.col - 1, this.row)];
        if (top && !top.visited)
            neighbors.push(top)
        if (right && !right.visited)
            neighbors.push(right)
        if (bottom && !bottom.visited)
            neighbors.push(bottom)
        if (left && !left.visited)
            neighbors.push(left)

        if (neighbors.length > 0) {
            let r = Math.floor(Math.random() * neighbors.length);
            return neighbors[r];
        } else {
            return undefined;
        }
    };

    this.connectRandomNeighbor = function() {
        let chance = Math.floor(Math.random() * 100);
        if (chance < connectChance) {
            let newNeighbors = [];
            let top = grid[index(this.col, this.row - 1)];
            let right = grid[index(this.col + 1, this.row)];
            let bottom = grid[index(this.col, this.row + 1)];
            let left = grid[index(this.col - 1, this.row)];
            if (top && !this.neighbors.includes(top))
                newNeighbors.push(top)
            if (right && !this.neighbors.includes(right))
                newNeighbors.push(right)
            if (bottom && !this.neighbors.includes(bottom))
                newNeighbors.push(bottom)
            if (left && !this.neighbors.includes(left))
                newNeighbors.push(left)

            if (newNeighbors.length > 0) {
                let n = Math.floor(Math.random() * newNeighbors.length);
                this.removeWallTo(newNeighbors[n]);
            }
        }
    };

    this.removeWallTo = function(cell) {
        let x = this.col - cell.col;
        if (x === 1) {
            this.neighbors[3] = grid[index(this.col - 1, this.row)].id; // Left
            cell.neighbors[1] = this.id;
        } else if (x === -1) {
            this.neighbors[1] = grid[index(this.col + 1, this.row)].id; // Right
            cell.neighbors[3] = this.id;
        }

        let y = this.row - cell.row;
        if (y === 1) {
            this.neighbors[0] = grid[index(this.col, this.row - 1)].id; // Top
            cell.neighbors[2] = this.id;
        } else if (y === -1) {
            this.neighbors[2] = grid[index(this.col, this.row + 1)].id; // Bottom
            cell.neighbors[0] = this.id;
        }
    };

    this.heuristic = function(cell) {
        let a = this.col - cell.col;
        let b = this.row - cell.row;
        return Math.hypot(a, b);
    };

    this.highlight = function() {
        let left = this.col * cellSize;
        let top = this.row * cellSize;
        fill(0, 155, 0);
        noStroke();
        rect(left, top, cellSize, cellSize);
    }
}

// TODO make this generic
function minHeap() {
    this.heap = [];
    this.set = {};
    this.parent = function(i) {
        return Math.floor((i - 1) / 2);
    };
    this.left = function(i) {
        return 2*i + 1;
    };
    this.right = function(i) {
        return 2*i + 2;
    };

    this.swap = function(i, j) {
        let t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }

    this.isEmpty = function() {
        return this.heap.length === 0;
    };
    this.clear = function(cell) {
        this.heap = [];
        this.set = {};
    };
    this.getMin = function() {
        return this.heap[0];
    };
    this.contains = function(cell) {
        return this.set[cell.id];
    };

    this.insert = function(cell) {
        this.heap.push(cell);
        this.set[cell.id] = true;
        let i = this.heap.length - 1;
        while (i != 0 && this.heap[this.parent(i)].f > this.heap[i].f) {
            i <= 0 ? console.log("error") : "";
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    };

    this.heapify = function(i) {
        let l = this.left(i);
        let r = this.right(i);
        let min = i;
        let size = this.heap.length;
        if (l < size && this.heap[l].f < this.heap[min].f)
            min = l;
        if (r < size && this.heap[r].f < this.heap[min].f)
            min = r;
        if (min != i) {
            this.swap(i, min);
            this.heapify(min);
        }
    };

    this.extractMin = function() {
        let size = this.heap.length;
        if (size == 0) {
            return null;
        }
        else if (size == 1) {
            this.set = {};
            return this.heap.pop();
        }
        let root = this.heap[0];
        delete this.set[root.id];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return root;
    };
}

function updateFps() {
    error("");
    try {
        let fps = parseInt(document.getElementById("framerate").value);
        if (!isNaN(fps) && fps > 0 && fps <= 60) {
            framerate = fps;
            frameRate(fps);
        } else {
            document.getElementById("framerate").value = framerate;
            error("Invalid Frame Rate");
        }
    } catch(e) {
        error("Invalid Frame Rate: " + e.message);
    }
}
function updateCellSize() {
    error("");
    try {
        let size = parseInt(document.getElementById("cellSize").value);
        if (!isNaN(size) && size >= 3 && size <= width && size <= height) {
            cellSize = size;
        } else {
            document.getElementById("cellSize").value = cellSize;
            error("Invalid Cell Size");
        }
    } catch(e) {
        error("Invalid Cell Size: " + e.message);
    }
}
function updateConnectChance() {
    error("");
    try {
        let chance = parseInt(document.getElementById("connectChance").value);
        if (!isNaN(chance) && chance >= 0 && chance <= 100) {
            connectChance = chance;
        } else {
            document.getElementById("connectChance").value = connectChance;
            error("Invalid Percent");
        }
    } catch (e) {
        error("Invalid Percent: " + e.message);
    }
}
function togglePause() {
    if (pause) {
        document.getElementById("pause").innerHTML = "Pause";
        loop();
    } else {
        document.getElementById("pause").innerHTML = "Unpause";
        noLoop();
    }
    pause = !pause;
}
function addSaveMazeLink() {
    let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        'size': cellSize,
        'grid': grid,
    }));
    let link = document.createElement("a");
    let linkText = document.createTextNode("Download Maze");
    link.appendChild(linkText);
    link.href = "data:" + data;
    link.download = "maze.json";
    let dl = document.getElementById("download");
    if (dl.firstChild)
        dl.replaceChild(link, dl.firstChild);
    else
        dl.appendChild(link);
}

function loadMaze() {
    let files = document.getElementById('loaded-maze').files;
    if (files.length <= 0) {
        error("Choose a JSON file to load first.");
        return false;
    }

    let fr = new FileReader();
    fr.onload = function(e) {
        let data = JSON.parse(e.target.result);
        cellSize = data.size;
        document.getElementById("cellSize").value = cellSize;

        grid = [];
        data.grid.forEach(item => {
            let cell = new Cell(item.col, item.row);
            Object.keys(item).forEach(key => {
                cell[key] = item[key];
            });
            grid.push(cell);
        });
        background(51);
        grid.forEach(cell => cell.draw());
        mazeGenerated = true;
        if (pause) updatePause();
    };
    fr.readAsText(files.item(0));
}
function message(msg) {
    document.getElementById("message").innerHTML = msg;
}
function error(msg) {
    document.getElementById("error").innerHTML = msg;
}
function legend(msg) {
    document.getElementById("legend").title = msg;
}
function elapsed() {
    let time = (new Date()) - startTime;
    let ms = ("00" + (time % 1000)).slice(-3);
    let sec = ("0" + round(time / 1000)).slice(-2);
    let min = ("0" +round(time / (60 * 1000))).slice(-2);
    let hours = ("0" + round(time / (60 * 60 * 1000))).slice(-2);
    return `${hours}:${min}:${sec}:${ms}`;
}
