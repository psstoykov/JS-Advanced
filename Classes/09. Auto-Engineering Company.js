function solve(input) {

    let inventory = {};

    for (let token of input) {

        let [brand, model, qty] = token.split(" | ")

        if (!inventory.hasOwnProperty(brand)) {
            inventory[brand] = {}
            inventory[brand][model] = Number(qty);
        } else {
            if (!inventory[brand].hasOwnProperty(model)) {
                inventory[brand][model] = Number(qty);
            } else {
                inventory[brand][model] += Number(qty);
            }
        }
    }
    for (let brand in inventory) {
        console.log(brand)
        for (let model in inventory[brand]) {
            console.log(`###${model} -> ${inventory[brand][model]}`)
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
