function search() {

   let arr = document.querySelectorAll('article li')
   let guess = document.getElementById('searchText').value;

   for (let el of arr) {
      el.style.textDecoration = 'none'
      el.style.fontWeight = 'normal';
   }
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {

      if (arr[i].textContent.includes(guess)) {
         counter++
         arr[i].style.fontWeight = 'bold'
         arr[i].style.textDecoration = 'underline'
      }
   }

   let message = `${counter} matches found`;
   document.getElementById('result').textContent = message
   document.getElementById('searchText').value = ''
}
