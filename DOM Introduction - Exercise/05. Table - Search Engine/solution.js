function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchBox = document.getElementById('searchField');
      let searchWord = searchBox.value;
      let tRows = document.querySelectorAll('tbody tr');

      for (let row of tRows) {
         if (row.textContent.includes(searchWord)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }

      }
      searchBox.value = '';
   }
}