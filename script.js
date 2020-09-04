// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);

console.log("________________________________________________");
// Mostre o texto dos parágrafos no console
paragrafo.forEach(function (item) {
  console.log(item);
});

console.log("________________________________________________");

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
