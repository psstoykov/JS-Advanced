function solve(string) {

    let array = [];
    string = string.split(" ")
    let pattern = /[\w]+/gm;
    let match = pattern.exec(string)

    while (match != null) {
        let word = match[0].toUpperCase();
        array.push(word)
        match = pattern.exec(string)
    }
    console.log(array.join(", "))
};


solve('Hi, how are you?');

solve(' aa,, a5 a a    ');