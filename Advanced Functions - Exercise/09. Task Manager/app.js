function solve() {

    let formRef = document.querySelector('form')
    formRef.addEventListener('submit', onSubmit)



    function onSubmit(e) {

        e.preventDefault();

        let taskRef = document.getElementById('task');
        let descriptionRef = document.getElementById('description');
        let dateRef = document.getElementById('date');

        let sectionsRef = document.querySelectorAll('section')
        if (taskRef.value == '' || descriptionRef.value == '' || dateRef.value == '') {
            return;
        }






    }

}