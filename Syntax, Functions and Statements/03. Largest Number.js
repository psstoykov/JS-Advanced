//using the spread operator
function nums(...params) {
    let biggest = Math.max(...params);
    console.log(`The largest number is ${biggest}.`);
};

nums(5, -3, 16);
nums(-3, -5, -22.5)