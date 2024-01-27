function lockedProfile() {

    let btns = Array.from(document.querySelectorAll('button'));

    btns.forEach(btn => btn.addEventListener('click', showMore));

    function showMore(event) {

        let target = event.target.parentElement.querySelector('div')
        let btnRef = target.parentElement.querySelector('input[type="radio"]');
        let btnTextRef = target.parentElement.querySelector('button')
        console.log(btnTextRef)
        if (btnRef.checked == false) {

            if (target.style.display == 'block') {
                target.style.display = 'none'
                btnTextRef.textContent = "Show more"
            } else {
                target.style.display = 'block'
                btnTextRef.textContent = "Hide it"
            }
        }
    }
}