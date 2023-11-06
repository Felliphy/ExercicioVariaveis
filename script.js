/*
-   A soma dos dois números;
-   A subtração dos dois números;
-   A multiplicação dos dois números;
-   A divisão dos dois números;
-   O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

-   Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
-   Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let n1 = prompt('Digite o primeiro número:')
let n2 = prompt('Digite o segundo número:')
let resultSum = (Number(n1) + Number(n2))
let resultSub = (Number(n1) - Number(n2))
let resultMult = (Number(n1) * Number(n2))
let resultDiv = (Number(n1) / Number(n2))
let resultRestDiv = (Number(n1) % Number(n2))

alert (`A soma dos dois números è: ` + resultSum)
alert (`A subtação dos dois números è: ` + resultSub)
alert (`A multiplicação dos dois números è: ` + resultMult)
alert (`A divisão dos dois números è: ` + resultDiv)
alert (`O resto da divisão dos dois números è: ` + resultRestDiv)

if (resultSum % 2 == 0) {
  alert('A soma dos dois números são Par. ')
}
 else {
  alert('A soma dos dois números são Impar. ');
}

if((Number(n1) === Number(n2))) {
  alert('Os números inseridos são iguais. ')
}
else{
  alert('Os números inseridos são diferentes.')
}



