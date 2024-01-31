function solve(input) {

    let result = [];
    let methods = {
        add: (string) => result.push(string),
        remove: (string) => result = result.filter(a => a != string),
        print: () => console.log(result.join(","))
    }


    for (let tokens of input) {
        let [op, string] = tokens.split(" ");
        methods[op](string)
    }
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);