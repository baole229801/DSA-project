const operate = () => {
    row = slide(row);
    row = combine(row);
    row = slide(row);

    return row;
}

// make new array
const slide = row => {
    let arr = row.filter(val => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);

    return arr;
}

// operate on array itself
const combine = row => {
    for (let i = 3; i >= 1; i--) {
        let a = row[i];
        let b = row[i - 1];
        if (a == b) {
            row[i] = a + b;
            score += row[i];
            row[i - 1] = 0;
        }
    }
    return row;
}
