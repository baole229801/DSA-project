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

