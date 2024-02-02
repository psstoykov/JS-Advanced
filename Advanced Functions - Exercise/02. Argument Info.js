function solve(...input) {

    let res = {};
    for (let el of input) {
        let type = typeof (el)
        console.log(`${type}: ${el} `)
        if (!res.hasOwnProperty(type)) {
            res[type] = 0
        }
        res[type] += 1
    }
    let sortedRes = Object.entries(res).sort((a, b) => b[1] - a[1])
    for (let [key, value] of sortedRes) {
        console.log(`${key} = ${value}`)
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });