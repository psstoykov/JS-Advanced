function solve(num) {

    let numArray = num.toString().split("").map(Number)
    let target = numArray[0];
    let sameNumber = true;
    let sum = 0;

    for (let value of numArray) {
        if (value != target) {
            sameNumber = false;
        }
        sum += value;
    }
    console.log(sameNumber);
    console.log(sum)
};

solve(2222222);

solve(1234);