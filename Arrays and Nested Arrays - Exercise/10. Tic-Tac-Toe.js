function solve(commands) {

    let matrix = [];

    for (let i = 0; i < 3; i++) {
        matrix.push(["false", "false", "false"]);
    }

    let playerOne = [];
    let playerTwo = [];

    for (let i = 0; i < commands.length; i++) {
        let moves = commands[i].split(" ")
        if (i % 2 == 0) {
            playerOne.push(moves.map(Number))
        } else {
            playerTwo.push(moves.map(Number))
        }
    }
    let length = playerOne.length
    for (let i = 0; i < length; i++) {

        let first = playerOne.shift();
        while (matrix[first[0]][first[1]] != 'false') {
            console.log("This place is already taken. Please choose another!");
            first = playerOne.shift();
            continue;
        }
        matrix[first[0]][first[1]] = 'X'

        //check if we have a winner and terminate the game


        let second = playerTwo.shift();
        while (matrix[second[0]][second[1]] != 'false') {
            console.log("This place is already taken. Please choose another!");
            second = playerTwo.shift();
            continue;
        }
        matrix[second[0]][second[1]] = 'O';

        //check if we have a winner and terminate the game
    }
    console.log(matrix)
};

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);

// solve(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]);

// solve(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]);