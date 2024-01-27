function focused() {
    let divCollection = document.querySelectorAll('body div div');

    for (let div of divCollection) {
        div.addEventListener('focus', (event) => event.currentTarget.classList.add('focused'));
        div.addEventListener('blur', (event) => event.currentTarget.classList.remove('focused'));

    }
}