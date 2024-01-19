function solve(input) {

    input.sort((a, b) => a.localeCompare(b))

    let char = '';
    for (let product of input) {
        if (product[0] != char) {
            console.log(product[0])
            char = product[0];
        }
        let [item, price] = product.split(" : ");
        console.log(`  ${item}: ${price}`)
    }
};

// solve(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']

// );

solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);