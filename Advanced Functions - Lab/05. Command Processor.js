function solution() {

    let result = "";

    return {
        append(str) {
            result += str
            return result
        },
        removeStart(n) {
            result = result.substring(n)
            return result
        },
        removeEnd(n) {
            result = result.substring(0, result.length - n);
            return result
        },
        print() {
            console.log(result)
        }
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();