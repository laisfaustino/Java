 //Escreva um programa que leia dois numeros e que pergunte qual operação você deseja realizar. Você deve poder calcular soma(+) subtração (-) e multiplicação(*).Exiba o resultado da operação solicitado.

 const valor1 = Number(prompt('Digite um valor:'))
 const valor2 = Number(prompt('Digite um outro valor:'))
 const operador = prompt('Qual operção você deseja')

 if(operador == "+"){
    alert(valor1 + valor2)
 }else if(operador == "-"){
    alert(valor1 - valor2)
 }else if(operador == "*"){
    alert(valor1 * valor2)
 }else if(operador == "/"){
    alert(valor1 / valor2)
 }else {
    alert("Digite um operador valido!")
 }

