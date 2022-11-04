//Funções

/*
    function nome(parâmetros){
        bloco de ações
    }
*/

var a = 5
var b = 6

var total = a+b
function soma(a,b){
    var total = a + b
    return console.log(total)
}

soma(7,8)


//crie uma função que ache a área de um retangulo de medidas diferentes.
 

function areaDoRetangulo(ladoA,ladoB){
    var multiplicacao = ladoA * ladoB
    return console.log(multiplicacao)
}

areaDoRetangulo (12,5)

//crie uma função que ache a área de um quadrado.

 
function areaDoQuadrado(ladoC){
    var multiplicacao = ladoC * ladoC
    return console.log(multiplicacao)
}

areaDoQuadrado(4) // argumento

function pi(){
    return 3,1415
}

var total = 5 + pi(); // 8,1415


//Parenteses executa a função

function corFavorita(cor){
if(cor === 'azul'){
    return 'Você gosta do ceu'
}else if (cor == 'verde'){
    return 'Você gosta de mato'
}else{
    return 'Você gosta de nada'
    }

}

corFavorita ("Azul")


function weslei(){
    return console.log ('Cachorro louco')
}

addEventListener('click', weslei())