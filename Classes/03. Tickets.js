function solve(array, sorter) {

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let resultArr = [];

    for (let el of array) {
        let [destination, price, status] = el.split("|")
        let ticket = new Ticket(destination, price, status);
        resultArr.push(ticket)
    }

    let sortedArr = []
    if (sorter == 'price') {
        sortedArr = resultArr.sort((a, b) => a[sorter] - b[sorter]);
    } else {
        sortedArr = resultArr.sort((a, b) => a[sorter].localeCompare(b[sorter]))
    }
    return sortedArr;

}


solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|available',
    'Philadelphia|132.20|departed',
    'Chicago|140.20|available',
    'Dallas|144.60|sold',
    'New York City|206.20|sold',
    'New York City|240.20|departed',
    'New York City|305.20|departed'],
    'price');

// solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination');

// solve(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status');
