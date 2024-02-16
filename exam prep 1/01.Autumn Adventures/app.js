window.addEventListener('load', solve);

function solve() {

    let formRef = document.querySelector('form');
    let timeRef = document.getElementById('time');
    let dateRef = document.getElementById('date');
    let placeRef = document.getElementById('place');
    let eventRef = document.getElementById('event-name');
    let contactRef = document.getElementById('email');

    let addBtn = document.getElementById('add-btn');
    let clearBtn = document.getElementById('clear');


    let lastCheckRef = document.getElementById('check-list');
    let upcomingRef = document.getElementById('upcoming-list');
    let finishedRef = document.getElementById('finished-list')

    addBtn.addEventListener('click', newEvent)



    function newEvent(e) {

        e.preventDefault();

        if (!timeRef.value ||
            !dateRef.value ||
            !placeRef.value ||
            !eventRef.value ||
            !contactRef.value) {
            return;
        }
        submitNewEvent(timeRef, dateRef, placeRef, eventRef, contactRef, lastCheckRef);

        let editBtn = lastCheckRef.querySelectorAll('button')[0]
        let continueBtn = lastCheckRef.querySelectorAll('button')[1]

        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);


        addBtn.disabled = true;

        function onEdit() {

            let dataRef = document.querySelectorAll('article p');
            let dateString = dataRef[0].textContent.split(" ");
            let date = dateString[1];
            let time = dateString[3]
            timeRef.value = time;
            dateRef.value = date;

            let placeString = dataRef[1].textContent.split(" ");
            let place = placeString[1];
            placeRef.value = place;

            let eventString = dataRef[2].textContent.split(" ");
            let event = eventString[1]
            eventRef.value = event;

            let emailString = dataRef[3].textContent.split(" ");
            let email = emailString[1];
            contactRef.value = email;

            lastCheckRef.replaceChildren();
            addBtn.disabled = false;

        }

        function onContinue() {

            let btns = lastCheckRef.querySelectorAll('button');
            btns[0].remove();
            btns[1].remove();

            upcomingRef.appendChild(lastCheckRef.querySelector('li'));

            let toFinishBtn = document.createElement('button');
            toFinishBtn.textContent = 'Move to Finised';
            toFinishBtn.classList.add('finished-btn');
            upcomingRef.appendChild(toFinishBtn)
            toFinishBtn.addEventListener('click', toFinish);




            lastCheckRef.replaceChildren();
            addBtn.disabled = false;
        }

        function toFinish() {
            clearBtn.addEventListener('click', clearFunc);

            let finishBtn = upcomingRef.querySelector('button')
            finishBtn.remove();

            let allEventsRef = upcomingRef.querySelectorAll('li');

            for (let event of allEventsRef) {

                finishedRef.appendChild(event)
            }

            upcomingRef.replaceChildren();

            function clearFunc() {

                finishedRef.replaceChildren();
            }
        }
    }

    function submitNewEvent(time, date, place, event, email, fieldRef) {

        let liEl = document.createElement('li');
        liEl.classList.add('event-content');
        let articleEl = document.createElement('article');
        liEl.appendChild(articleEl);

        let dateEl = document.createElement('p');
        let placeEl = document.createElement('p');
        let eventEl = document.createElement('p');
        let emailEl = document.createElement('p');

        dateEl.textContent = `Begins: ${date.value} at ${time.value}`
        placeEl.textContent = `In: ${place.value}`
        eventEl.textContent = `Event: ${event.value}`;
        emailEl.textContent = `Contact: ${email.value}`;

        articleEl.appendChild(dateEl);
        articleEl.appendChild(placeEl);
        articleEl.appendChild(eventEl);
        articleEl.appendChild(emailEl);

        let editBtnEl = document.createElement('button');
        editBtnEl.textContent = 'Edit';
        editBtnEl.classList.add('edit-btn');

        let continueBtnEl = document.createElement('button');
        continueBtnEl.textContent = 'Continue';
        continueBtnEl.classList.add('continue-btn');

        liEl.appendChild(editBtnEl);
        liEl.appendChild(continueBtnEl);
        formRef.reset();

        fieldRef.appendChild(liEl);
    }

}



