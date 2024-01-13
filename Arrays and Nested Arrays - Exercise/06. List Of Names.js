function solve(array) {

    array.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    for (let name of array) {
        console.log(`${counter}.${name}`);
        counter++
    }
};

solve(["John", "Bob", "Christina", "Ema"]);

