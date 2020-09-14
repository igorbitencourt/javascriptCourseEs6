console.log("Exercícios do Curso");
console.log("-------- Constructor Function -------- ");
//Para selecionar algum objeto da DOM usar document.querySelector

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const igor = new Pessoa("Igor", "Bitencourt", 27);
console.log(igor.nomeCompleto());

console.log("-------- Prototype -------- ");
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

console.log("-------- Object (Native, Host and User) -------- ");
// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;
// Liste 5 objetos do browser
NodeList;
HTMLCollection;
Element;
Document;
Window;
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
// WebKitPoint;
// webkitURL;

console.log("-------- String -------- ");
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes2 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes2.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlnovo = html.replace(/["span"]+/g, "a");
const htmlnovo2 = html.split("span").join("a");
console.log(htmlnovo);
console.log(htmlnovo2);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));

console.log("-------- Number and Math -------- ");

// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.random() * (2000 - 1050 + 1) + 1050;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparNome(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparNome(preco);
});

console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
limparNome(listaPrecos[1]);

console.log("-------- Array -------- ");

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável~
let pizzaVar = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
let macarraoVar = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
// Adicione 'Peixe' e 'Batata' ao início da array
let peixeBatata = comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
let contemJoana = estudantes.includes("Joana");
// Verifique se Juliana faz parte dos estudantes
let contemJuliana = estudantes.includes("Juliana");

console.log(estudantes);
console.log(contemJoana);
console.log(contemJuliana);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosBackup = carros.slice();
carros.pop();

console.log(carros);
console.log(carrosBackup);

console.log("--------------- Array e Iteração (---------------");

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricaoo,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((item) => {
  const titulo = item.querySelector("h1").innerText;
  const descricaoo = item.querySelector("p").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;
  return {
    titulo,
    descricaoo,
    aulas,
    horas,
  };
});

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros1 = [3, 44, 333, 23, 122, 322, 33];

const numerosMaiores = numeros1.filter((item) => {
  return item > 100;
});

console.log(numerosMaiores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const verificarBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});

console.log(verificarBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const totalCompras = compras.reduce((acumulador, item) => {
  const limpaCompra = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + limpaCompra;
}, 0);

console.log(totalCompras);

console.log("--------------- Function ---------------");

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;

  return elemento;
}
console.log(criarElemento("li", "ativo", "Esse é o conteudo"));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "Titulo");

console.log(h1Titulo("Curso de Javascript"));
