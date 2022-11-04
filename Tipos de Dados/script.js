//Tipo de dados
// 7 tipos de dados
var nome = "grazi"; // String --> conjunto de caracteres representando por " " ( aspas duplas) 1 ( aspas simples) `` (Craze) 

var idade = 20; // number

var AssassnsCreedMelhorJogo = true; // Boolean --> pode ser representdo por true ou false 

var tempo; // Undefinid

var comida = null; // null = nulo 

var novoObjeto = {} // Object 

//  Verificar tipos de dados 

const nome_pessoa = 'john';
const idade1 = 30;
const MediaFaculdade = 4.5;
const legal = true;
const notaDematematica = null;
let notaDedesenho; 

//  Verificar tipos de dados  
//  typeof 

console.log(typeof nome_pessoa);
console.log(typeof idade1);
console.log(typeof MediaFaculdade);
console.log(typeof legal);
console.log(typeof notaDematematica);

//objeto

let FaculdadeAlunos =  {
    nome_pessoa1: 'Andre',
    idade2:28,
    MediaFaculdade1: 7.5,
    legal: true, 
    notaDematematica: 8,
    notaDedesenho: 7,
}
console.log(typeof FaculdadeAlunos);
console.log(FaculdadeAlunos);
console.log(typeof FaculdadeAlunos.nome_pessoa1);

//Concatenar Strings = juntas ambas as informações 
const pessoa = 'irmão do jorel '
const idade3 = 16;
console.log(pessoa + idade3);
console.log(pessoa + '' + idade3);
console.log('meu nome é ' + pessoa + 'e eu tenho ' + idade3);

// concatenas + strings 

const aluno = '20';
const sobreNome = '30';
console.log( aluno + sobreNome);

//template string 

const hello = `meu nome é ${pessoa} e eu tenho ${idade3} anos`
console.log(hello)

//Declare uma variavel contendo uma string
let animal = 'cachorro'

//Declare uma variavel contendo um numero dentro de uma string
let numero = '29'

//Declare uma variavel com sua idade
let idade = 29

//Declare duas variaveis,uma com seu nome e outra com seu sobrenome e some as mesmas
  let nome2 = ' lais'
  let sobrenome = 'Rodrigues'
  let nome_completo = nome2+sobrenome
  console.log (sobrenome)

  //Coloque a seguinte Frase em uma variavel: It's time

  let frase = "It's time"

  //Verifique o tipo de variavel que 
  console.log (typeof nome2)


