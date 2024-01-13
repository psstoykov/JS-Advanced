function solve(n, k) {

    let array = [];
    array.push(1);

    for (let i = 1; i < n; i++) {
        let current = array.slice(-k, i);
        let sum = 0;
        for (let num of current) {
            sum += num;
        }
        array.push(sum)

    }
    return array;
};

solve(6, 3);

solve(8, 2);