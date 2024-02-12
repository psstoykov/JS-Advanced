function solve(input) {

    let inventory = {};
    let bottled = {};

    for (let token of input) {
        let [fruit, qty] = token.split(" => ")

        if (!inventory.hasOwnProperty(fruit)) {
            inventory[fruit] = Number(qty);
        } else {
            inventory[fruit] += Number(qty);
        }

        if (inventory[fruit] >= 1000) {
            let bottles = Math.trunc(inventory[fruit] / 1000)
            inventory[fruit] = inventory[fruit] % 1000

            if (!bottled.hasOwnProperty(fruit)) {
                bottled[fruit] = bottles
            } else {
                bottled[fruit] += bottles
            }
        }

    }
    for (let fruit in bottled) {
        console.log(`${fruit} => ${bottled[fruit]}`)
    }
};

// solve(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);