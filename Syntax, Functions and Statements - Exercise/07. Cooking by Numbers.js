function solve(num, ...params) {

    num = Number(num);

    for (let operator of params) {
        switch (operator) {
            case "chop": num /= 2
                console.log(num)
                break;
            case "dice": num = Math.sqrt(num)
                console.log(num)
                break;
            case "spice": num += 1;
                console.log(num)
                break;
            case "bake": num *= 3;
                console.log(num)
                break;
            case "fillet": num *= 0.8;
                console.log(num.toFixed(1))
                break;
        }
    }
};

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');