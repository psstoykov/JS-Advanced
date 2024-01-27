function solve() {

   let addBtns = document.querySelectorAll('.add-product');
   for (let btn of addBtns) {
      btn.addEventListener('click', addArticle);
   }

   let checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', checkOut)

   let checkoutObj = {};

   function addArticle(event) {
      let parentDiv = event.target.parentElement.parentElement;
      let productName = parentDiv.querySelector('.product-title').textContent;
      let price = parentDiv.querySelector('.product-line-price').textContent;
      price = Number(price)

      if (checkoutObj.hasOwnProperty(productName)) {
         checkoutObj[productName] += price;
      } else {
         checkoutObj[productName] = price;
      }

      let textArea = document.querySelector('textarea')
      textArea.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
   }


   function checkOut(event) {
      let textArea = document.querySelector('textarea');

      let products = Object.keys(checkoutObj)
      let priceArr = Object.values(checkoutObj);
      let totalPrice = 0;
      for (let price of priceArr) {
         totalPrice += price;
      }
      textArea.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`

      //remove both event listeners
      checkoutBtn.removeEventListener('click', checkOut)
      for (let btn of addBtns) {
         btn.removeEventListener('click', addArticle);
      }
   }
}