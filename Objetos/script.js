//Objetos
//Conjuntos de variaveis e funções, que são chamadas de propriedades e metados.

var pessoa = {
    nome: 'Grazi',
    idade: 20,
    profissao: 'Monitora do professor Bonitão',
    MaiordeIdade: true,

}
console.log(pessoa)
console.table(pessoa)

pessoa.nome //Grazi


//Metodo
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
    lados: 4,
    area: function (lado){
    return lado*lado;
    },


perimetro: function(lado){
    return quadrado.lados* lado;
    }

}
quadrado.area(5)

// Acesse propriedades de um objeto utilizando o ponto.

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

var bg = menu.backgroundColor

//crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome.

var dadosPessoais = {
    nome: 'Lais',
    sobrenome:'Rodrigues',
    idade:'29anos',

}

console.table(dadosPessoais)

//Crie um objeto de um cachorro que representa um labrador, preto com 10anos,que late ao ver um homem.

var cachorro ={
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    lateAoVerUmHomem:true,
    
}
console.table(cachorro)

//Arrays

//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma unica variavel.

var videoGames = [ 'PS4','Switch', 'XBox'];

videoGames [0]
var numero = [1,2,3]
var soma = numero [0]+numero[1]
console.log(soma)

//Metodos e propriedades de uma array
videoGames.pop(); // Remove o ultimo item e retorna da Array
videoGames.push('3DS'); // Adiciona ao final da Array
videoGames.length //Retorna a quantidade de valores.

// While
var i = 0;
while(i<10){
console.log(i)
i = i + 1

}

//for
for(var numero = 0; numero <=10; numero = numero + 1){
    console.log(numero)
}

/*var videoGames = ['Switch','PS4', 'XBox'];
for (var b = 0; b < 3; b = b + 1){
    console.log(videoGames[b])
}*/

var videoGames = ['Switch','PS4', 'XBox'];
for (var b = 0; b < videoGames.length; b = b + 1){
    console.log(videoGames[b])
}

// forEach
//forEach é um metodo que executa uma função para cada item da Array.É uma forma mais simples de utilizarmos um loop com arrays

var videoGames = ['Switch','PS4', 'XBox'];
videoGames.forEach(function(b,c,d){
    console.log(b,c,d)

})

//Crie uma array com os anos que o Brasil ganhou a copa
//1959,1962,1970,1994,2002
//Interaja com a array utilizando um loop, para mostar no console a seguinte mensagem, 'O brasil ganhou a copa de $(ano)'
 var copa =[1959,1970,1994,2002]
 copa.forEach(function(ano){
    console.log(`O brasil ganhou a copa de ${ano}`)
})





//Metodos e propriedades de uma array

//console.log(videoGames.length);

