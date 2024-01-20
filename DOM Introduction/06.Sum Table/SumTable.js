function sumTable() {

    let total = 0;
    let matrix = document.querySelectorAll('table tr');

    for (let i = 1; i < matrix.length - 1; i++) {
        let columns = matrix[i].children;
        let value = columns[columns.length - 1].textContent
        total += Number(value)
    }
    document.getElementById('sum').textContent = total;
}