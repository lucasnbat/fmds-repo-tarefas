/* VARIAVEIS */

/*
VAR - escopo global
LET - escopo local
CONST - constante

Resumo: vamos usar const para quase tudo e o que for variavel, usamos let.
*/

/*
console.log(nome);
if (true) {
    var nome = 'Lucas';
}

nome = "ivan";
nome = "gabriel";
console.log(nome);

const usuario = {}
usuario.nome = "ivan";
usuario.nome = "gabriel";
console.log(usuario.nome);

*/
/* ***** TIPOS DE DADOS ***** */

// Number
const a = 8;
// String
const b = 'Lucas';
// Boolean
const c = true;
// Undefined
let d;
// Null
const e = null;
// Object
const f = {};
// Array
const g = [];

/* ***** OBJETO ***** */
/*
const pessoa = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'São Paulo'
}
const calculadora = {
    num1: 0,
    num2: 0,
    result: 0,
    calc: function () {
        this.result = this.num1 + this.num2;
    },
    print: function () {
        this.calc();
        console.log(this.result);
    }
}
calculadora.num1 = 15;
calculadora.num2 = 25;
calculadora.print();

class Aluno {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    print() {
        console.log(this.nome, this.idade, this.cidade);
    }
}

const aluno1 = new Aluno('Lucas', 25, 'São Paulo');

fetch('https://yesno.wtf/api')
    .then(
        response => response.json()
    ).then(
        data => {
            const resultado = data
            console.log(resultado.answer);
            document.write('<img  src=' + resultado.image + '>');
        }
    ).catch(
        error => console.error(error)
    );
*/
/* ***** VETOR ***** */

const frutas = [];

frutas.push('banana');
frutas.push('maçã');
frutas.push('bergamota');
frutas.push('');
frutas.pop();
frutas.push('jaca');
frutas.push('bacupari');
frutas.push('Abacaxi');

// como percorrer o vetor
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// como percorrer o vetor com foreach e arrow function
frutas.forEach(fruta => console.log(fruta));
console.log('-------------------');
//frutas.sort().forEach( fruta => console.log(fruta));
//console.log('-------------------');

// como filtar o elementos do vetor
//frutas.filter( fruta => fruta.startsWith('b')).forEach( fruta => console.log(fruta));

// como mapear o vetor


const frutasUppercase = frutas.map(fruta => fruta.toUpperCase())

frutasUppercase.forEach(fruta => console.log(fruta));
console.log('-------------------');

let frutasComA = [];
frutas.forEach(fruta => {
    if (fruta.startsWith('A'))
        frutasComA.push(fruta);
})
frutasComA.forEach(fruta => console.log(fruta));

frutas.filter( fruta => fruta.startsWith('A')).forEach( fruta => console.log(fruta));

console.log('-------------------');
frutas.forEach(fruta => console.log(fruta));

// como reduzir o vetor
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((total, numero) => total + numero, 0);
console.log(soma);

// como concatenar o vetor
const nomes = ['Lucas', 'Ivan', 'Gabriel'];
const nomesConcatenados = nomes.reduce((total, nome) => total + nome, '');  
console.log(nomesConcatenados);

// como encontrar um elemento no vetor
const pesquisa = prompt('Digite o nome da fruta');

// (condicao) ? true : false

console.log( frutas.find( fruta => fruta === pesquisa) ? 'Achei' : 'Não achei');