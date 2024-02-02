function solve(input) {

    let result = {};

    let operator = {
        create: (name) => {
            result[name] = {};
        },
        createInherit: (name, inherit, parentName) => {

            result[name] = Object.create(result[parentName])
        },
        set: (name, key, value) => {

            if (!result[name]) {
                result[name] = {};
            }
            result[name][key] = value;
        },
        print: (name) => {
            let entries = Object.entries(result[name]);
            let buff = [];

            for (let [key, value] of entries) {
                buff.push(`${key}:${value}`);
            }

            let parentEntries = Object.entries(result[name].__proto__);
            debugger;
            for (let [key, value] of parentEntries) {
                buff.push(`${key}:${value}`)
            }

            console.log(buff.join(","))
        }
    }

    for (let tokens of input) {
        let dataArr = tokens.split(" ");

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

