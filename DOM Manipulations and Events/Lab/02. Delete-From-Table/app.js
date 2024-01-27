function deleteByEmail() {

    let inputBoxRef = document.querySelector('input');
    let email = inputBoxRef.value;

    let emailCol = document.querySelectorAll("#customers tr td:nth-child(2)")

    for (let td of emailCol) {
        if (td.textContent == email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
            inputBoxRef.value = "";
            return;
        }
        document.getElementById('result').textContent = "Not found.";
    }
}