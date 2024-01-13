function solve(array) {

    array = array.map(Number);

    let sum = array[0] + array[array.length - 1];
    return sum;
};

solve(['20', '30', '40']);

solve(['5', '10']);