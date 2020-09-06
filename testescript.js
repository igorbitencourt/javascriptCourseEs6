console.log("-------- Constructor Function -------- ");
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
