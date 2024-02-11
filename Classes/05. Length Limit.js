class Stringer {

    constructor(string, length) {
        this.string = string;
        this.length = length
    }

    increase(num) {
        this.length += num;
        if (this.length < 0) {
            this.length = 0
        }
    }
    decrease(num) {
        this.length -= num;
        if (this.length < 0) {
            this.length = 0
        }
    }
    toString() {
        if (this.length == 0) {
            return '...'
        }
        if (this.string.length > this.length) {
            let resultStr = this.string.substring(0, this.length);
            return `${resultStr}...`
        } else {
            return this.string
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

