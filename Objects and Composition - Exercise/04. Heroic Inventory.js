function solve(input) {

    let result = [];

    for (let hero of input) {
        let tokens = hero.split(" / ");
        let name = tokens.shift();
        let level = Number(tokens.shift());
        let items = tokens.shift();
        let current = {};
        current['name'] = name;
        current['level'] = Number(level);
        if (items != undefined) {
            items = items.split(", ")
            current['items'] = items;
        } else {
            current['items'] = [];
        }
        result.push(current);
    }
    console.log(JSON.stringify(result))
};

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

// solve(['Jake / 1000 / Gauss, HolidayGrenade']);