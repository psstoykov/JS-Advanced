function solve(matrix) {

    let primary = 0;
    let secondary = 0;

    for (let row = 0; row < matrix.length; row++) {

        primary += matrix[row][row]
        secondary += matrix[row][matrix.length - 1 - row]
    }
    let result = [];
    result.push(primary, secondary);
    console.log(result.join(" "))
};

solve([[20, 40],
[10, 60]]);

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);