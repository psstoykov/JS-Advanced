window.addEventListener('load', solution);

function solution() {

  let employeeRef = document.getElementById('employee');
  let categoryRef = document.getElementById('category');
  let urgencyRef = document.getElementById('urgency');
  let assignedTeamRef = document.getElementById('team');
  let descriptionRef = document.getElementById('description');

  let previewRef = document.querySelector(".preview-list")
  let pendingRef = document.querySelector(".pending-list")
  let resolvedRef = document.querySelector(".resolved-list");

  let addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', add);

  function add(e) {
    e.preventDefault();

    if (employeeRef.value == '' ||
      categoryRef.value == '' ||
      urgencyRef.value == '' ||
      assignedTeamRef.value == '' ||
      descriptionRef.value == '') {
      return;
    }


    let liElement = document.createElement('li');
    liElement.classList.add("problem-content");

    let articleEl = document.createElement('article');

    let employeeEl = document.createElement('p');
    employeeEl.textContent = `From: ${employeeRef.value}`

    let categoryEl = document.createElement('p');
    categoryEl.textContent = `Category: ${categoryRef.value}`

    let urgencyEl = document.createElement('p');
    urgencyEl.textContent = `Urgency: ${urgencyRef.value}`

    let assignedTeamEl = document.createElement('p');
    assignedTeamEl.textContent = `Assigned to:${assignedTeamRef.value}`

    let descriptionEl = document.createElement('p');
    descriptionEl.textContent = `Description: ${descriptionRef.value}`;

    let editBtn = document.createElement("button");
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement("button");
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    articleEl.appendChild(employeeEl);
    articleEl.appendChild(categoryEl);
    articleEl.appendChild(urgencyEl);
    articleEl.appendChild(assignedTeamEl);
    articleEl.appendChild(descriptionEl);

    liElement.appendChild(articleEl);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);


    previewRef.appendChild(liElement);


    let employeeValue = employeeRef.value;
    let categoryValue = categoryRef.value;
    let urgencyValue = urgencyRef.value;
    let assignedValue = assignedTeamRef.value;
    let descriptionValue = assignedTeamRef.value;

    employeeRef.value = '';
    categoryRef.value = '';
    urgencyRef.value = '';
    assignedTeamRef.value = '';
    descriptionRef.value = '';

    addBtn.disabled = true;
    editBtn.addEventListener('click', onEdit)

    function onEdit() {
      employeeRef.value = employeeValue;
      categoryRef.value = categoryValue;
      urgencyRef.value = urgencyValue;
      assignedTeamRef.value = assignedValue;
      descriptionRef.value = descriptionValue;

      previewRef.replaceChildren();
      addBtn.disabled = false;

    }

    continueBtn.addEventListener('click', onContinue);
    function onContinue() {

      editBtn.remove();
      continueBtn.remove();

      let resolvedBtn = document.createElement('button');
      resolvedBtn.classList.add("resolve-btn");
      resolvedBtn.textContent = 'Resolved';

      liElement.appendChild(resolvedBtn)
      pendingRef.appendChild(liElement);
      previewRef.replaceChildren();


      resolvedBtn.addEventListener('click', onResolved);


      function onResolved() {

        resolvedBtn.remove();

        let clearBtn = document.createElement('button');
        clearBtn.classList.add("clear-btn");
        clearBtn.textContent = "Clear";

        liElement.appendChild(clearBtn);
        resolvedRef.appendChild(liElement)

        clearBtn.addEventListener('click', onClear);

        function onClear() {

          resolvedRef.replaceChildren();
          addBtn.disabled = false;
        }
      }
    }
  }
}

