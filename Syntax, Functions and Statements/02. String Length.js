function solve(str1, str2, str3) {

    let length = str1.length + str2.length + str3.length
    let average = Math.floor(length / 3);

    console.log(length)
    console.log(average)
};

solve('chocolate', 'ice cream', 'cake');

solve('pasta', '5', '22.3');