//using the spread operator
function nums(...params) {
    let biggest = Math.max(...params);
    console.log(biggest);
}

nums(3, -2, 7, 16, -20, 55, 13)