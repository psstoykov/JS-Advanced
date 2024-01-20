function colorize() {

    const collection = document.querySelectorAll('tr:nth-child(even)');

    for (let el of collection) {
        el.style.background = 'teal';
    }
}

