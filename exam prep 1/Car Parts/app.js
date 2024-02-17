window.addEventListener('load', solve);

function solve() {

        let carModelRef = document.getElementById('car-model');
        let carYearRef = document.getElementById('car-year');
        let partNameRef = document.getElementById('part-name');
        let partNumberRef = document.getElementById('part-number');
        let conditionRef = document.getElementById('condition');
        let nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', onNext);

        let partInfoRef = document.querySelector(".info-list");
        let confirmOrderRef = document.querySelector(".confirm-list");

        function onNext(e) {

                e.preventDefault();

                if (carModelRef.value == '' ||
                        carYearRef.value == '' ||
                        partNameRef.value == '' ||
                        partNumberRef.value == '' ||
                        conditionRef.value == '') {
                        return;
                }

                let Year = Number(carYearRef.value);

                if (Year < 1980 || Year > 2023) {
                        return;
                }

                let carModelValue = carModelRef.value;
                let carYearValue = carYearRef.value;
                let partNameValue = partNameRef.value;
                let partNumberValue = partNumberRef.value;
                let conditionValue = conditionRef.value;

                let liElement = createElement('li')
                liElement.classList.add("part-content");

                let articleElement = createElement('article');
                ////////////////////////////////////////////////////////////////////////
                let carModelElement = createElement('p')
                carModelElement.textContent = `Car Model: ${carModelValue}`;

                let carYearElement = createElement('p');
                carYearElement.textContent = `Car Year: ${carYearValue}`;

                let partNameElement = createElement('p');
                partNameElement.textContent = `Part Name: ${partNameValue}`;

                let partNumberElement = createElement('p');
                partNumberElement.textContent = `Part Number: ${partNumberValue}`;

                let conditionElement = createElement('p');
                conditionElement.textContent = `Condition: ${conditionValue}`;
                ///////////////////////////////////////////////////////////////////////////
                let editBtn = createElement('button');
                editBtn.textContent = "Edit";
                editBtn.classList.add("edit-btn");

                let continueBtn = createElement('button');
                continueBtn.textContent = "Continue";
                continueBtn.classList.add("continue-btn");
                //////////////////////////////////////////////////////////////////////////
                articleElement.appendChild(carModelElement);
                articleElement.appendChild(carYearElement);
                articleElement.appendChild(partNameElement);
                articleElement.appendChild(partNumberElement);
                articleElement.appendChild(conditionElement);

                liElement.appendChild(articleElement);
                liElement.appendChild(editBtn);
                liElement.appendChild(continueBtn);
                partInfoRef.appendChild(liElement);

                let completeImg = document.getElementById('complete-img');
                completeImg.style.visibility = "hidden";

                let completeTextP = document.getElementById('complete-text');
                completeTextP.textContent = '';
                //////////////////////////////////////////////////////////////////////////////////
                carModelRef.value = ''
                carYearRef.value = ''
                partNameRef.value = ''
                partNumberRef.value = ''
                conditionRef.value = ''

                nextBtn.disabled = true;

                editBtn.addEventListener('click', onEdit);

                function onEdit() {

                        carModelRef.value = carModelValue
                        carYearRef.value = carYearValue
                        partNameRef.value = partNameValue
                        partNumberRef.value = partNumberValue
                        conditionRef.value = conditionValue
                        liElement.remove();

                        nextBtn.disabled = false;
                }
                continueBtn.addEventListener('click', onContinue);

                function onContinue() {

                        let liElContinue = createElement('li');
                        liElContinue.classList.add("part-content");

                        let articleElContinue = createElement('article');
                        articleElContinue = articleElement;

                        let confirmBtn = createElement('button');
                        confirmBtn.textContent = "Confirm";
                        confirmBtn.classList.add("confirm-btn");

                        let cancelBtn = createElement("button");
                        cancelBtn.textContent = "Cancel";
                        cancelBtn.classList.add("cancel-btn");

                        liElContinue.appendChild(articleElContinue)
                        liElContinue.appendChild(confirmBtn);
                        liElContinue.appendChild(cancelBtn);
                        confirmOrderRef.appendChild(liElContinue);

                        liElement.remove();

                        confirmBtn.addEventListener('click', onConfirm);

                        function onConfirm() {
                                liElContinue.remove()
                                nextBtn.disabled = false;
                                completeImg.style.visibility = "visible";
                                completeTextP.textContent = "Part is Ordered!"
                        }

                        cancelBtn.addEventListener('click', onCancel);

                        function onCancel() {
                                liElContinue.remove()
                                nextBtn.disabled = false;
                        }
                }
        }

        function createElement(type) {
                let element = document.createElement(type);
                return element
        }
};




