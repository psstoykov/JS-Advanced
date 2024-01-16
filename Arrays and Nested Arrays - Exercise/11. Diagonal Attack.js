function solve(array) {

    let diagonalOne = 0;
    let diagonalTwo = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split(" ").map(Number);
        diagonalOne += array[i][i];
        diagonalTwo += array[i][array.length - 1 - i]
    }
    if (diagonalOne == diagonalTwo) {
        // array = array.join(",").split(",").map(Number);

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (i == j || (i + j == array.length - 1)) {
                    continue;
                }
                array[i][j] = diagonalOne;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(" "))
    }
};