// Crie uma função matematica que retorne o perimetro de um quadrado
//lembrando:perimetro é a soma dos quatro lados do quadrado

function areaDoPerimetro(ladoA){
    var soma = ladoA + ladoA + ladoA + ladoA
    return console.log(soma)
}

areaDoPerimetro (10)
/*function areaDoPerimetro(ladoA){
    var total = 4*ladoA 
    return console.log(total)
}

areaDoPerimetro (10)

*/

//Crie uma função que retorne o seu nome completo
//ela deve possuir os parametros:nome e sobrenome

function nomeCompleto(nome,sobrenome){   

return console.log(nome + sobrenome)

}
 nomeCompleto('Lais',' Rodrigues')

 /*function nomeCompleto(nome,sobrenome){ 
    var nomeCidadao = nome+"" +sobrenome
    console.log(nomeCidadao)
 }
nomeCompleto('Lais', 'Rodrigues')

    */

//Crie uma função que verifica se um numero é par

function numeroPar(numero){
    if(num%2 == 0){
        return console.log('Par')
    }else{
        return console.log ('Impar')
    }
}


//var conta = numero % 2 == 0;
