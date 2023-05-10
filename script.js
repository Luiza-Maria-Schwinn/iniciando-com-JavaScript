// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

let helloWorld = [
    alert("Hello World")
]


// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let number1 = 17
let number2 = 1

alert("O resultado da soma de " + number1 + " e " + number2 + " é " + (Number(number1) + Number(number2)) + "!")


// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let result = Number(number1) + Number(number2)

if(typeof result === "number") {
    alert(result + " é um número!")
} else {
    alert(result + " não é um número!")
}


// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let word = "lua"

if(typeof word === "string") {
    alert("A palavra " + word + " é uma string!")
} else {
    alert(word + " não é uma string!")
}


// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let boolean = true

if(typeof boolean === "boolean") {
    alert(boolean + " é um booleano!")
} else {
    alert("Não é um booleano!")
}


// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberOne = 20
let numberTwo = 2
let resultSub = Number(numberOne) - Number(numberTwo)
alert("A subtração de " + numberOne + " e " + numberTwo + " é " + resultSub)


// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let firstNumber = 7
let secondNumber = 10
let resultMulti = Number(firstNumber) * Number(secondNumber)
alert("A multiplicação de " + firstNumber + " e " + secondNumber + " é " + resultMulti)

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let oneNumber = 20
let twoNumber = 2
let resultDiv = Number(oneNumber) / Number(twoNumber)
alert("A divisão de " + oneNumber + " e " + twoNumber + " é " + resultDiv)


// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numberFirst = 18
//se o número for par ele vai ser dívisivel por 2, então o resto da divisão será 0
if(numberFirst % 2 === 0) {
    alert(numberFirst + " é um número par")
} else {
    alert(numberFirst + " não é um número par")
}


// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let number = 17
//se o número for par ele vai ser dívisivel por 2, então o resto da divisão será 0
if(number % 2 !== 0) {
    alert(number + " é um número ímpar")
} else {
    alert(number + " não é um número ímpar")
}