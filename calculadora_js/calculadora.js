const number1 = prompt("Digite o primeiro número: ")
const number2 = prompt("Digite o segundo número: ")

// o prompt retorna pra gt uma string então tive que converter para float64

const x = parseFloat(number1)
const y = parseFloat(number2)



const soma = x + y
const adicao =  x - y 
const multiplicacao = x * y
const divisao = x / y

alert("Veja o resultado das 4 operações abaixo: "+
"\nSoma :" + soma +
"\nAdicao:" + adicao +
"\nMultiplicação:" + multiplicacao +
"\nDivisão" + divisao
)