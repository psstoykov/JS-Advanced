function solve(nums) {

    let sum = 0;
    let inverseSum = 0;
    let concat = "";

    for (let num of nums) {
        sum += num;
        inverseSum += 1 / num
        concat += num
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat)
};

// solve([1, 2, 3]);

solve([2, 4, 8, 16]);