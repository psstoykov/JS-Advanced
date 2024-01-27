function generateReport() {

    let resultArr = [];

    let tHeadRows = document.querySelectorAll('thead th');
    let tableRowData = document.querySelectorAll('tbody tr');

    //cycle each Row
    for (let row = 0; row < tableRowData.length; row++) {
        let currentEmployee = {};

        let tableColData = tableRowData[row].querySelectorAll('td')
        //cycle each collumn
        for (let col = 0; col < tableColData.length; col++) {

            let field = tHeadRows[col].querySelector('input');

            if (field.checked == false) {
                continue;
            }
            currentEmployee[field.name] = tableColData[col].textContent
        }

        resultArr.push(currentEmployee)

    }

    let resultRef = document.querySelector('textarea');

    resultRef.textContent = JSON.stringify(resultArr);
}