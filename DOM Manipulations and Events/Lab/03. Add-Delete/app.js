function addItem() {

    let newElement = document.querySelector('#newItemText').value;

    if (newElement.length == 0) {
        return;
    }

    let list = document.getElementById('items');

    let newListItem = document.createElement('li');
    newListItem.textContent = newElement;

    //create the remove element "a" hyperlink
    let deleteBtn = document.createElement('a');

    //create the text content for the remove button
    let linkText = document.createTextNode("[Delete]");

    //attach the 'delete' text to the remove hyperlink
    deleteBtn.appendChild(linkText)

    //create a hyperlink href
    deleteBtn.href = "#";

    //add ab evebt listener to the delete button
    deleteBtn.addEventListener("click", deleteItem);

    //attache the "delete button to the newly created list element"
    newListItem.appendChild(deleteBtn);

    //attach the whole new list item with delete button to the page list
    list.appendChild(newListItem);
    document.querySelector('#newItemText').value = ''
    function deleteItem() {
        newListItem.remove();
    }
}