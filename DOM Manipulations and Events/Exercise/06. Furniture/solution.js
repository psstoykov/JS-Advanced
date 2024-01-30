function solve() {

  let generateBtnRef = document.querySelector('button');
  let buyBtnRef = document.querySelectorAll('button')[1];

  generateBtnRef.addEventListener('click', generate);
  buyBtnRef.addEventListener('click', buyFunc)

  //get inital checkbox ref
  let checkBoxesRef = document.querySelectorAll('input[type="checkbox"]');
  let tableRef = Array.from(document.querySelectorAll('tbody tr'));

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  function generate() {

    let inputRef = document.querySelector('textarea');

    let inputArr = JSON.parse(inputRef.value)

    for (let product of inputArr) {

      let productRowEl = document.createElement('tr');

      let photoEl = document.createElement('td');
      let nameEl = document.createElement('td');
      let priceEl = document.createElement('td');
      let decFactorEl = document.createElement('td');
      let markEl = document.createElement('td');

      let photoElImg = document.createElement('img');
      let nameElp = document.createElement('p');
      let priceElp = document.createElement('p');
      let decFactorElp = document.createElement('p');
      let markElp = document.createElement('input');
      markElp.type = "checkbox";

      photoElImg.src = product.img;
      nameElp.textContent = product.name;
      priceElp.textContent = product.price;
      decFactorElp.textContent = product.decFactor;

      photoEl.appendChild(photoElImg);
      nameEl.appendChild(nameElp);
      priceEl.appendChild(priceElp);
      decFactorEl.appendChild(decFactorElp);
      markEl.appendChild(markElp);

      productRowEl.appendChild(photoEl);
      productRowEl.appendChild(nameEl);
      productRowEl.appendChild(priceEl);
      productRowEl.appendChild(decFactorEl);
      productRowEl.appendChild(markEl);

      document.querySelector('tbody').appendChild(productRowEl);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function buyFunc() {

    let outputFieldRef = document.querySelectorAll('textarea')[1];

    //get all the checkboxes after the buy btn is pressed
    checkBoxesRef = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    let names = [];
    let totalPrice = 0;
    let totalDec = 0;
    let count = 0;

    for (let btn of checkBoxesRef) {
      if (btn.checked) {
        count++
        let tableRow = btn.parentElement.parentElement
        names.push(tableRow.children[1].textContent)
        totalPrice += Number(tableRow.children[2].textContent)
        totalDec += Number(tableRow.children[3].textContent)
      }
    }
    let avgDec = totalDec / count;

    outputFieldRef.textContent = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDec}`;

  }

}

/*
Example

[{"name": "Tablet", "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg", "price": 2000, "decFactor": 5.2}, {"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg", "price": 15, "decFactor": 10}]

*/