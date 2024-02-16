window.addEventListener('load', solve);

function solve() {

    let nameRef = document.getElementById('name');
    let emailRef = document.getElementById('email');
    let contactRef = document.getElementById('contact-number');
    let classTypeRef = document.getElementById('class-type');
    let classTimeRef = document.getElementById('class-time');

    let previewRef = document.querySelector(".class-info");
    let confirmRef = document.querySelector(".confirm-class")

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (nameRef.value == '' ||
            emailRef.value == '' ||
            contactRef.value == '' ||
            classTypeRef.value == '' ||
            classTimeRef.value == '') {
            return;
        }

        let liEl = document.createElement('li');
        liEl.classList.add("info-item");
        previewRef.appendChild(liEl)

        let articleEl = document.createElement('article');
        articleEl.classList.add("personal-info");
        liEl.appendChild(articleEl)

        let name = nameRef.value;
        let email = emailRef.value;
        let contact = contactRef.value;
        let type = classTypeRef.value;
        let time = classTimeRef.value;

        let nameP = document.createElement('p');
        let emailP = document.createElement('p');
        let contactP = document.createElement('p');
        let typeP = document.createElement('p');
        let timeP = document.createElement('p');

        nameP.textContent = name;
        emailP.textContent = email;
        contactP.textContent = contact;
        typeP.textContent = type;
        timeP.textContent = time;

        articleEl.appendChild(nameP);
        articleEl.appendChild(emailP)
        articleEl.appendChild(contactP)
        articleEl.appendChild(typeP)
        articleEl.appendChild(timeP)

        nameRef.value = '';
        emailRef.value = '';
        contactRef.value = '';
        classTypeRef.value = '';
        classTimeRef.value = '';

        nextBtn.disabled = true;

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add("edit-btn");

        let continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add("continue-btn");

        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);
        ///////////////////////////////////////////

        editBtn.addEventListener('click', onEdit);

        function onEdit() {

            nameRef.value = name;
            emailRef.value = email
            contactRef.value = contact
            classTypeRef.value = type;
            classTimeRef.value = time;

            nextBtn.disabled = false;
            liEl.remove();

        }
        /////////////////////////////////////////////////////////////////////////////

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {

            let liElContinue = document.createElement('li');
            liElContinue.setAttribute("class", "continue-info");

            let articleElContinue = document.createElement('article');
            articleElContinue = articleEl;

            liElContinue.appendChild(articleElContinue);
            confirmRef.appendChild(liElContinue)
            let cancelBtn = document.createElement('button');
            cancelBtn.textContent = "Cancel";
            cancelBtn.classList.add("cancel-btn");

            let confirmBtn = document.createElement('button');
            confirmBtn.textContent = "Confirm";
            confirmBtn.classList.add("confirm-btn");

            liElContinue.appendChild(cancelBtn);
            liElContinue.appendChild(confirmBtn);


            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {

                confirmRef.replaceChildren();
                nextBtn.disabled = false;
            }

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {

                let mainEl = document.getElementById("main");
                mainEl.remove();
                let titleEl = document.createElement('h1');
                titleEl.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"
                titleEl.setAttribute("id", "thank-you")
                let bodyEl = document.getElementById("body");
                bodyEl.appendChild(titleEl);

                let doneBtn = document.createElement('button');
                doneBtn.textContent = "Done";
                doneBtn.setAttribute("id", "done-btn");

                bodyEl.appendChild(doneBtn);
            }
        }
    }
}




