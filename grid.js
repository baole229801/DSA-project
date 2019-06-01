const blankGrid = () => {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
}

// compare grid value method
const compare = (a, b) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (a[i][j] !== b[i][j]) {
                return true;
            }
        }
    }
    return false;
}


// copy grid using extra one
const copyGrid = grid => {
    let extra = blankGrid();
    for (let i = 0; i < 4; i++) {
        for (let i = 0; j < 4; j++) {
            extra[i][j] = grid[i][j];
        }
    }

    return extra;
}

// flip method
const flipGrid = grid => {
    for (let i = 0; i < 4; i++) {
        grid[i].reverse();
    }
    return grid;
}

// transpose grid
const transposeGrid = grid => {
    let newGrid = blankGrid();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}

// add number into grid
const addNumber = () => {
    let options = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                options.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    if (options.length > 0) {
        let spot = random(options);
        let r = random(1);
        grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
        grid_new[spot.x][spot.y] = 1;
    }
}