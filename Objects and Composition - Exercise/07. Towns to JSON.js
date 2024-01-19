function solve(input) {

    let matrix = new Array(input.length);

    let table = input.shift().slice(2, -2)
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let row = input[i].slice(2, -2);
        let [town, latitude, longitude] = row.split(" | ")

        latitude = Number(latitude)
        longitude = Number(longitude)
        latitude = Math.round(latitude * 100) / 100
        longitude = Math.round(longitude * 100) / 100
        let newTown = {
            'Town': town,
            'Latitude': latitude,
            'Longitude': longitude
        }

        result.push(newTown);
    }

    console.log(JSON.stringify(result))

};

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

// solve(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']);