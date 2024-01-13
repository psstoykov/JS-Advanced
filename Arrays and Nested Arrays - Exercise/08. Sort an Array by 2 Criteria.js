function solve(array) {

    array.sort();
    array.sort(((a, b) => a.length - b.length) || ((a, b) => a.localeCompare(b)));

    console.log(array.join("\n"))

};

solve(['alpha',
    'beta',
    'gamma']);

// solve(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// );

// solve(['test',
//     'Deny',
//     'omen',
//     'Default']);

