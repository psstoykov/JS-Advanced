function solve(input) {

    let result = {}

    let operator = {
        create: (name) => {
            result[name] = {};
        },
        createInherit: (name, inherit, parentName) => {
            // result[name] = {}
            result[name].Object.create(parentName)
        },
        set: (name, key, value) => {
            result[name][key] = value;
        },
        print: (name) => {
            let entries = Object.entries(result[name]);
            let buff = [];

            for (let [key, value] of entries) {
                buff.push(`${key}:${value}`);
            }

            let parentObj = Object.getPrototypeOf(result[name])
            let parentEntries = Object.entries(parentObj)

            for (let [key, value] of parentEntries) {
                buff.push(`${key}:${value}`);
            }
            console.log(buff.join(","))
        }
    }

    for (let tokens of input) {
        let dataArr = tokens.split(" ")

        if (dataArr.length == 2) {
            let [op, name] = dataArr;
            operator[op](name);
        } else {
            if (dataArr[0] == "create") {
                let [op, name, inherit, parent] = dataArr
                operator[op](name, inherit, parent)
            } else {
                let [op, name, type, style] = dataArr
                operator[op](name, type, style)
            }
        }
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

