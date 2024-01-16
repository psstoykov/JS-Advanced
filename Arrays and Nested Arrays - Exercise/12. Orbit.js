function solve(input) {

    let width = input.shift();
    let height = input.shift();
    let x = input.shift();
    let y = input.shift();

    let obrit = new Array(width);

    for (let row = 0; row < height; row++) {
        obrit[row] = new Array(height);

    }
    obrit[x][y] = 1;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (obrit[i][j] == 1) {
                continue;
            }
            obrit[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }
    for (let row of obrit) {
        console.log(row.join(" "));
    }
}