function solve(array) {

    let magicSum = 0;
    let isMagical = true;
    let size = array.length;

    for (let c = 0; c < array.length; c++) {
        magicSum += array[0][c];
    }

    for (let row = 0; row < size; row++) {
        let sumR = 0;
        for (let col = 0; col < size; col++) {
            sumR += array[row][col]
        }
        if (sumR != magicSum) {
            isMagical = false
        }
    }

    for (let col = 0; col < size; col++) {
        let sumC = 0;
        for (let row = 0; row < size; row++) {
            sumC += array[col][row]
        }
        if (sumC != magicSum) {
            isMagical = false
        }
    }
    console.log(isMagical)

};

