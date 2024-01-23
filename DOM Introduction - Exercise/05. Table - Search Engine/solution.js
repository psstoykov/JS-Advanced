function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let collection = document.querySelectorAll('tbody tr');
      for (let i = 0; i < collection.length; i++) {
         let row = collection[i];
         for (let j = 0; j < row.length; j++) {
            let el = row.children[j].textContent
            console.log(el)
         }


      }
   }
}