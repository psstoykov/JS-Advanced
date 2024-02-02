function solution() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1

        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    let operator = {
        prepare: (product, qty) => {
            let required = {}
            required[product] = Object.assign(recipies[product])
            let neededArr = Object.entries(required[product])
            for (let ingr of neededArr) {
                ingr[1] *= qty
                if (ingr[1] > stock[ingr[0]]) {
                    return `Error: not enough ${ingr[0]} in stock`
                }
                stock[ingr[0]] -= ingr[1]

            }
            return "Success"
        },
        restock: (product, qty) => {
            stock[product] += Number(qty)
            return "Success"

        },
        report: () => {

            return `protein=${stock["protein"]} carbohydrate=${stock["carbohydrate"]} fat=${stock["fat"]} flavour=${stock["flavour"]}`
        }
    }
    return function (input) {

        let [op, product, qty] = input.split(" ");
        return operator[op](product, qty)
    }
}


let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

