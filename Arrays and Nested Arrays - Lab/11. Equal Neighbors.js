function solve(input) {

    let pairs = 0;
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length; y++) {
            if (y < input[x].length - 1) {
                if (input[x][y] == input[x][y + 1]) {
                    pairs++
                }
            }
            if (x < input.length - 1) {
                if (input[x][y] == input[x + 1][y]) {
                    pairs++
                }
            }
        }
    }
    console.log(pairs)
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);