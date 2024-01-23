function extract(elementId) {

    let text = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(text);

    while (match) {
        result.push(match[1])
        match = pattern.exec(text)
    }
    return result.join('; ');
}



