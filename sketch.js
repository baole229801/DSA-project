
// setup function for canvas
const setup = () => {
    createCanvas(400, 400);
    noLoop();   // freeze canvas
    let grid = blankGrid();
    let grid_new = blankGrid();
}

// draw and update canvas

const updateCanvas = () => {
    background(255);
    drawGrid();
}

const keyPressed = () => {
    let flipped = false;
    let rotated = false;
    let played = true;
    switch (keyCode) {
        case DOWN_ARROW:
            // do nothing
            break;
        case UP_ARROW:
            grid = flipGrid(grid);
            flipped = true;
            break;
        case RIGHT_ARROW:
            grid = transposeGrid(grid);
            rotated = true;
            break;
        case LEFT_ARROW:
            grid = transposeGrid(grid);
            grid = flipGrid(grid);
            rotated = true;
            flipped = true;
            break;
        default:
            played = false;
    }

    const drawGrid = () => {
        let w = 100;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; i++) {
                noFill(); // grid separate not fill
                strokeWeight(2) // thickness of border
                let val = grid[i][j];
                let s = val.toString();

                if (grid_new[i][j] === 1) {
                    stroke(200, 0, 200);
                    strokeWeight(16);
                    grid_new[i][j] = 0;
                } else {
                    strokeWeight(4);
                    stroke(0);
                }

                if (val != 0) {
                    fill(colorSizes[s].color);
                } else {
                    noFill();
                }

                rect(i * w, j * w, w, w, 30);
                if (val !== 0) {
                    textAlign(CENTER, CENTER);
                    noStroke();
                    fill(0);
                    textSize(colorSizes[s].size);
                    text(val, i * w + w / 2, j * w + w / 2);
                }
            }
        }
    }
