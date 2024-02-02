function solve(input) {

    let result = {}

    let operator = {
        create: (name) => {

            result[name] = {};
        },
        createInherit: (name, parentName) => {

            result[name] = {}
            result[name].Object.create(parentName)
        },
        set: (name, key, value) => {

            result[name][key] = value;
        },
        print: (name) => {
            let entries = Object.entries(result[name]);
            for (let [key, value] of entries) {
                console.log(`${key}:${value}`)
            }
        }
    }

    for (let tokens of input) {
        let [op, name, key, value] = tokens.split(" ")

        operator[op](name, key, value)
    }



}

// solve(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

