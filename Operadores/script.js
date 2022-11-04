//Boolean  

//Existem dois valores booleanos false ou true
/*var LulaEleito= false
//var LulaEleito = true

if (LulaEleito){
    console.log('Vamos comer picanha')
}
else{
    console.log ('Bolsonaro vai criar o pix')
}

//operadores relacionais

/*
    == -> igualdade
    >  -> maior que
    <  -> menor que
    != -> diferente
    >= -> maior ou igual
    <= -> menor ou igual
*/
/*
var a = 1,
    b = 5,
    c = 2,
    d = 1;

console.log(a > b)  //false
console.log(a < b)  //true
console.log(a == d) //true
console.log(b >= a) //true
console.log(c <= b) //true
console.log(d != a) //false
console.log(d != b) //true   
*/

//condições

/*
    if e else
    if é condição verdadeira ("Se for verdade...")
    else é a condição falsa ("Se não .... é falsa")

    if (condição){
        bloco verdadeiro
    } else{
        bloco falso
    }
*/
/*
var GraziFazFaculdade = true
if (GraziFazFaculdade){
    console.log("Grazi vai se forma")
} else {
console.log("Grazi não faz faculdade")
}


let valor1 = 5,
    valor2 = 7,
    valor3 = 5,
    valor4 = 2

    if (valor1 > valor2){
        console.log ("Valor1 é maior que Valor2 ")
    }else{
        console.log("Valor1 não é maior que Valor2")
    }


    if (valor3 != valor4){
        console.log ("Valor3 é maior que Valor4 ")
    }else{
        console.log("Valor3 não é maior que Valor4")
    }*/

    // usa o !=
   /* if (valor3 != valor4){
        console.log (´Valor ${valor3} é diferente de $´)
    }else{
        console.log (´Valor ${valor4} é diferente de $´)



        const nome = prompt('Digite o seu nome:')
        console.log(nome)
*/


        //  CONDICIONAIS ELSE IF
/*
    var GraziPossuiGraduacao = true;
    var GraziPossuiDoutorado = true;

    if (GraziPossuiDoutorado){
        console.log('Possui graduação e doutorado')
        }else if (GraziPossuiGraduacao){
            console.log('Possui graduação, mas não possui doutorado')
        }else{
            console.log('Não possui graduação')
        }

*/
/*
    //Categoria x Produto    
    var categoria = prompt("Digite a categoria do produto")

    if( categoria == 1){
        console.log('Preço R$10,00')
    }else if(categoria == 2){
        console.log('Preço é R$ 18,00')
    }else if(categoria == 3){
        console.log('Preço é R$23,00')
    }else if(categoria == 4){
        console.log('Preço é R$26,00')
    }else if( categoria == 5){
        console.log('Preço é R$31,00')
    }else{
        console.log('Categoria invalida, digite um valor entre 1 e 5!')
    }    
        
    */

    //Switch e Case

    /*  var corFavorita = 'Preto'

        switch (corFavorita){
            case "Preto":
                console.log('Yasmin usava calça colorida.')
                break;
            case 'vermelho':
                console.log('Yasmin apaixonada')
                break;
            case 'Amarela':
                console.log('Yasmin gosta de sol')
                break;        
        }
    */

        //Exercicio
        //verifique se a sua idade é maior do que a de algum parente.
        var idade1 = prompt("Digite sua idade:")
        var idade2 = prompt("Digite a idade do seu parente")
        
        if(idade1 > idade2){
            alert("A sua idade é maior do que a do seu parente")
        } else{
            alert("A sua idade é menor do qua a do seu parente")
        }

        //escreva um programa que pergunte a distancia que um passageiro deseja percorer em km.Calcule o preço da passagem, cobrando R$0,50 por km para viagens de ate 200km, e R$0,45 para viagens mais longas
       
        var distanciaPassageiro = prompt('Qual a distância que você deseja percorrer?')
        var distanciaAte200Km = distanciaPassageiro * 0.50;
        var distanciaAcimaDe200Km = distanciaPassageiro * 0.45;
        
        if(distanciaPassageiro <= 200){
            alert(`O preço da passagem é ${distanciaAte200Km}`)
        }else{
            alert (`O preço da passagem é:${distanciaAcimaDe200Km}`)
        }

        var km = parseInt(prompt("Digite a distancia que quer percorer em km"))

        if(km <= 200){
            var custo = km *0.50;
            console.log(cuto)
        }else if(km>200){
            var custo2 = km * 0.45
            console.log(custo2)
        }


        //Operadores logicos &&

        // && = e
        console.log(true && true) // true
        console.log(false && true) // false
       
        
