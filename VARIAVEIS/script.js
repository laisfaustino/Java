/*Variaveis*/
/*Responsaveis por guarda dados na memoria.Inicia com a palavra 'var', 'let' ou 'const'.*/

var nome = 'Grazi';
console.log(nome)
let idade = 28;
console.log(idade)
let idade2= '28';
console.log(idade2)
const PossuiFaculdade=true;
console.log(PossuiFaculdade)

/*PEQUENOS CALCULOS*/   

var conta = 20 + 5;
console.log(conta)

var preco = 80000
var prestacao = 60
precoMensal = preco / prestacao;
console.log(precoMensal)

/* SINTAXE*/

var idade3 = 19;
var nome1 = 'Gabriel';
var apelido = 'fifinha';

var idade3 = 19,
    nome1 = 'Gabriel',
    apelido = 'fifinha';

/*SEM VALOR*/
var precoAplicativo;
console.log(precoAplicativo)
//retorna undefinid

/*
1-Os nomes das variaveis podem iniciar com '$' , '_' ou letras.Podem conter numeros mais não iniciar com eles.

2-Maiscula ou minuscula , nome é diferente de NOME.

3-Não usar palavras reservadas.EX: var,console.log,const.

4-Caixa de camelo: É comum nomearmos assim: AbrirModal; (não pode ter espaçamento entre as palavras a segunda palavra colocar com letra maiscula para diferenciar)

*/

/*EXEMPLO*/
//Inválido
/*
var #nome;
var function;
var 1possuiFaculdade;
    */

//Válido

var $selecionar;
var _nome;
var Possui1_Faculdade;

//Declarar

//console.log(curso);
//retorna curso is not defined

//Mudar o valor atribuido

var idade4 = 19;
idade4 = 27;
console.log(idade4)
 

let preco2 = 50;
preco2 = 25;
console.log(preco2)

const possuiCarro = true
//possuiCarro = false
console.log(possuiCarro)
//Const- São valores que não podem ser alterados.

//Exercicio

//Declarar uma variavel com o seu nome
var nome = 'Lais';

//Declarar uma variavel com o sua idade
var idade5 = 29;

//Declarar uma variavel com o sua comida favorita e não atribui valor
var comidaFavorita

//Atribui valor a sua comida favorita
var comidaFavorita = 'Lasanha';

//Declarar 5 variavel diferente sem valores
var sobrenome 
var bebidaFavorita 
var nomeFilha 
var apelido 
var comida


//Criar duas variaveis com valores diferentes,faça multiplicação entre elas e imprima no console.log o resultado.

var valor1 = 15;
var valor2 = 30;
var multiplicacao = valor1 * valor2;
console.log(multiplicacao)