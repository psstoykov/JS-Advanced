function attachEventsListeners() {

    //add event listener to all [CONVERT] buttons
    let btns = Array.from(document.querySelectorAll('input[type="button"]'));

    for (let btn of btns) {
        btn.addEventListener('click', convert)
    }

    function convert(event) {
        let parent = event.target.parentElement
        let dataRef = parent.querySelector('input[type="text"]');
        let num = Number(dataRef.value);

        let type = parent.querySelector('label').textContent.split(":")[0];

        let days = 0;

        switch (type) {
            case "Days":
                days = num
                break;
            case "Hours":
                days = num / 24;
                break;
            case "Minutes":
                days = num / 24 / 60;
                break;
            case "Seconds":
                days = num / 24 / 60 / 60;
                break;
        }
        let result = document.querySelectorAll('input[type="text"]')

        result[0].value = days;//days
        result[1].value = days * 24;//hours
        result[2].value = days * 24 * 60;//minutes
        result[3].value = days * 24 * 60 * 60;//seconds
    }

}