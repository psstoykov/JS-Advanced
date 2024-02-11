class Sorted {

    constructor(el) {
        this.arr = []
        this.size = 0
    }
    add(element) {
        this.arr.push(element)
        this.size++
        this.arr.sort((a, b) => a - b)
    }
    remove(index) {
        if (index < 0 ||
            index >= this.arr.length) {
            return;
        }
        this.arr.splice(index, 1);
        this.size--
        this.arr.sort((a, b) => a - b)
    }
    get(index) {
        if (index < 0 ||
            index >= this.arr.length) {
            return;
        }
        return this.arr[index];
    }
}

let newList = new Sorted;


console.log(newList)
newList.add(1)
newList.add(2)
newList.add(3)
newList.add(4)
newList.add(5)
console.log(newList)
console.log(newList.get(2))