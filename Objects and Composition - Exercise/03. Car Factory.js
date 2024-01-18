function solve(orderObj) {

    let engines = {
        'smallEngine': { 'power': 90, 'volume': 1800 },
        'normalEngine': { 'power': 120, 'volume': 2400 },
        'monsterEngine': { 'power': 200, 'volume': 3500 }
    }
    let carObj = {};
    carObj['model'] = orderObj['model'];

    if (orderObj['power'] <= 90) {
        carObj['engine'] = engines['smallEngine'];
    } else if (orderObj['power'] <= 120) {
        carObj['engine'] = engines['normalEngine'];
    } else if (orderObj['power'] <= 200) {
        carObj['engine'] = engines['monsterEngine'];
    } else {
        carObj['engine'] = engines['monsterEngine'];
    }
    carObj['carriage'] = {};
    carObj['wheels'] = [];

    carObj['carriage']['type'] = orderObj['carriage'];
    carObj['carriage']['color'] = orderObj['color'];

    if (orderObj['wheelsize'] % 2 == 0) {
        orderObj['wheelsize']--;
    }
    for (let i = 0; i < 4; i++) {
        carObj['wheels'].push(orderObj['wheelsize'])
    }
    return carObj;
};

// solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// });

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});