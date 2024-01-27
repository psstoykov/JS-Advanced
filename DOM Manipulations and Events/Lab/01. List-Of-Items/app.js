function addItem() {
    let inputTextRef = document.getElementById('newItemText');
    let inputText = inputTextRef.value;
    let newEl = document.createElement('li');
    newEl.textContent = inputText;
    document.getElementById('items').appendChild(newEl);
    inputTextRef.value = '';
}