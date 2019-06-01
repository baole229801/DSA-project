
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

const drawGrid = () => {
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
        }
    }
}