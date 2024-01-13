function solve(array, rotations) {


    for (let i = 1; i <= rotations; i++) {
        let temp = array.pop(array[array.length - 1])
        array.unshift(temp);
    }
    let result = array.join(" ");
    console.log(result)
};