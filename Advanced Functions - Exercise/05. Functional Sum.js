function add(num) {

    let accumulator = num;

    let newFunc = function (num) {
        let newAcc = accumulator += num
        return add(newAcc);
    }
    newFunc.toString = () => accumulator;
    return newFunc;

};

console.log(add(1)(2)(3).toString());
// console.log(add(2)(3));
console.log(add(1)(6)(-3).toString());