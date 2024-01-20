function extractText() {
    // TODO
    const collection = document.getElementById('items');
    const textArea = document.getElementById('result');
    const items = Array.from(collection.children);

    for (let el of items) {
        textArea.value += el.textContent + "\n"
    }
}
