
const number1 = prompt("Digite o primeiro número: ")

const number2 = prompt("Digite o segundo número: ")

const resultado = prompt("Digite a opereção que deseja efetuar( + , - , * , / , % ) : ")

const x = parseFloat(number1)
const y = parseFloat(number2) 

switch(resultado){
    case "+": 
    alert(x + y)
    break
    case "-": 
    alert(x - y)
    break
    case "*": 
    alert(x * y)
    break
    case "/": 
    alert(x / y)
    break
    case "%": 
    alert(x % y)
    break
    default:
        alert("Entrada inválida")
}

// number1+"+"+number2+"= "+
