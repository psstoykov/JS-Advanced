function solve() {

  let text = document.getElementById('text').value;
  let nameConv = document.getElementById('naming-convention').value;

  text = text.split(" ");
  text = text.map((a) => a.toLowerCase());

  let result = '';

  if (nameConv == 'Camel Case') {
    result += text[0];
    for (let i = 1; i < text.length; i++) {
      text[i] = `${text[i][0].toUpperCase()}${text[i].slice(1)}`
      result += text[i];
    }
    document.getElementById('result').textContent = result;
  } else if (nameConv == 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      text[i] = `${text[i][0].toUpperCase()}${text[i].slice(1)}`
      result += text[i];
    }
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = "Error!"
  }
}