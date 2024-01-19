function createSortedList() {

    let sortedList = [];

    let result = {


        add: function (element) {
            sortedList.push(element)

        },
        remove: function (index) {
            sortedList.splice(index, 1);

        },
        get: function (index) {
            return sortedList[index]
        },
        size: sortedList.length
    }

    sortedList.sort((a, b) => a - b);

    return result;
};

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)