function addItem() {

    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let addBtn = document.querySelector('input[type="button"]');

    let optionEl = document.createElement('option');
    optionEl.textContent = text;
    optionEl.value = value;
    let dropMenuRef = document.getElementById('menu');
    dropMenuRef.appendChild(optionEl);

    document.getElementById('newItemText').value = '';
    value = document.getElementById('newItemValue').value = '';
}