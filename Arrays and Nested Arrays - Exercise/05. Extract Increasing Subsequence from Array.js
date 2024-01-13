function solve(array) {

    let result = [];
    let current = array.shift();
    result.push(current)

    for (let num of array) {
        if (num >= current) {
            current = num;
            result.push(current);
        }
    }
    return result;
};

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);

solve([1,
    2,
    3,
    4]);

solve([20,
    3,
    2,
    15,
    6,
    1]);