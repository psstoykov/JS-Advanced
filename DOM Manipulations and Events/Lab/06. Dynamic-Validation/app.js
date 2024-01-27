function validate() {

    let pattern = /\w+\@\w+\.\w+/gm

    let inputRef = document.getElementById('email');

    inputRef.addEventListener('change', onChange);


    function onChange() {
        if (pattern.test(inputRef.value)) {
            inputRef.classList.remove('error');
        } else {
            inputRef.classList.add('error');
        }
    }
}