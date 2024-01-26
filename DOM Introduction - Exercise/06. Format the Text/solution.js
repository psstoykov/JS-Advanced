function solve() {

  const dataField = document.getElementById('input');
  let inputText = dataField.value;

  let inputArr = inputText.split(".")
  let spacePattern = /[^\ ]+/gm;

  let formattedArr = []
  for (let sent of inputArr) {
    if (spacePattern.test(sent)) {
      formattedArr.push(sent);
    }
  }

  let paraArr = [];
  let buff = ''
  let count = 1;

  for (let i = 0; i < formattedArr.length; i++) {
    if (count % 3 == 0) {
      buff += `${formattedArr[i]}.`
      paraArr.push(buff)
      buff = '';
      count++;
      continue;
    }
    buff += `${formattedArr[i]}.`
    count++;
  }
  if (buff != '') {
    paraArr.push(buff);
  }

  const output = document.getElementById('output');

  for (let para of paraArr) {
    const p = document.createElement('p');
    p.textContent = para;
    output.appendChild(p);

  }
}


