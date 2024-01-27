function create(words) {

   for (let word of words) {
      let divEl = document.createElement('div');
      let paraEl = document.createElement('p');
      paraEl.textContent = word;
      paraEl.style.display = 'none';
      divEl.appendChild(paraEl);
      divEl.addEventListener('click', showFunc)
      let mainDiv = document.querySelector('#content');
      mainDiv.appendChild(divEl);
   }

   function showFunc(event) {
      let target = event.currentTarget.querySelector('p');

      if (target.style.display == '') {
         target.style.display = 'none'
      } else {
         target.style.display = '';
      }
   }
}