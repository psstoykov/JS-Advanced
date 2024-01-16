function solve(num1, num2) {

    //the desired number, which we will decrease
    let num = num1 * num2;
    let counter = 1;

    //create the 2 dimensional array
    let spiral = [];
    for (let i = 0; i < num1; i++) {
        spiral[i] = [];
    }

    let x = 0;
    let y = 0;
    let highIndex = num1;
    let lowIndex = 0;

    while (counter <= num) {

        for (y; y < highIndex; y++) {
            spiral[x][y] = counter;
            counter++;
        }
        y--;
        x++;
        for (x; x < highIndex; x++) {
            spiral[x][y] = counter;
            counter++
        }
        x--;
        y--;
        for (y; y >= lowIndex; y--) {
            spiral[x][y] = counter;
            counter++;
        }
        y++;
        x--;
        lowIndex++;
        highIndex--;
        for (x; x >= lowIndex; x--) {
            spiral[x][y] = counter;
            counter++;
        }
        x++
        y++


    }

    let matrix = [];
    for (let el of spiral) {
        let buff = "";
        for (let num of el) {
            buff += `${num} `;


        }
        console.log(buff)
    }

}