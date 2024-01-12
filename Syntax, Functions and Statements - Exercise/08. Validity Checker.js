function solve(x1, y1, x2, y2) {

    let result1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2))
    let result2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2))
    let result3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(result1) ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(result2) ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(result3) ? "valid" : "invalid"}`);

};

solve(3, 0, 0, 4);

// solve(2, 1, 1, 1);


//The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
