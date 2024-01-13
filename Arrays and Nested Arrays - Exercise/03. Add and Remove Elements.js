function solve(array) {

    //create empty array
    //initial num = 1;
    //each index increases the number 
    //when "add" => add num to the end of result array
    //when remove => remove last element from result array
    //join result array with a " ";

    let resultArray = [];
    let num = 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            resultArray.push(num)
        } else {
            resultArray.pop(num)
        }
        num++
    }

    if (resultArray.length == 0) {
        console.log("Empty")
    } else {
        console.log(resultArray.join("\n"));
    }
};