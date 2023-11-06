// variáveis e tipos de dados
// declaração or declaration
var name

// assignment or atribuiç~~ao de vaçlores
  name = "Luiz"

// que tipo de dado foi colocado na variável
  console.log(typeof name)

// argumento de declaração
  let age, isHuman

  age = 25
  isHuman = true

// multiplos argumentos na função
  console.log(name, age, isHuman)

// escrita de texto + variáveis

// concatenando os valores
  console.log('o ' + name + ' tem ' + age + ' anos.')

// interpolando valores com tamplate literals or template strings
console.log(`o ${name} tem ${age} anos.`)

// Object
const person = {
  name: 'Luiz',
  age: '25',
  weight: 59.5,
  isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

// array

const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]

// acessar valores dentrodo Array
console.log(animals)

//Exercícios sobre o conteúdo trabalhado até agora.

//1. Declare um variável de nome weight
let weight

//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

//3. Declare uma variável e atribua valores para cada um dos dados
let name = 'Luiz'
let age = 25
let stars = 2.5
let isSubscribed = true

//4. A variável student abaixo é de que tipo de dado?

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

//4.2 Mostre no console as seguintes mensagens
/*
<name> de idade <age> pesa <weight> pelos valores de cada objeto
*/

let student = {
  name: 'Luiz',
  age: 25,
  weight:59,
  isSubscribed: true,
};

console.log(`${student.name} de idade ${student.age} e ${student.weight} kg`)

console.log(typeof student)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students = [
  student
]

console.log(students)

//7. Coloque no console o valor da posição zero do array acima

console.log(students[0])

//8. Crie um novo student e coloque ele na posição 1 do Array students

const John = {
  name:'John',
  age: 25,
  weight: 59.5,
  isSubscribed: true,
}

students[1] = john
console.log(students)

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
/*
console.log(a)
var a = 1
*/
console.log(a)
var a = 1