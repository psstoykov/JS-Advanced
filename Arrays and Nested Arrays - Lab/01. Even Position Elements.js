function solve(array) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            newArray.push(array[i])
        }
    }
    console.log(newArray.join(" "))
};

solve(['20', '30', '40', '50', '60']);

solve(['5', '10']);