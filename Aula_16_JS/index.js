alert(
    "Sejam bem-vindos ao curso OneBitCode Full Stack!")

const nome = prompt("Digite seu nome:")
const idade= prompt("informe a sua idade:")

if (idade >= 18 ){
    alert("Você é maior de idade")
} else if(idade > 12){
    alert("Você é menor de idade")
} else if(idade < 12){
    alert("Você é criança")
}

// operador ternário: forma abreviada de fazer a estrutura de condição 
// Sintaxe: const resultado = condição ? resultado_verdadeiro : resultado_falso
// ou seja, criamos uma constante e damos um nome para ela ( resultado ) colocamos a condição
//(6 === 6 ) o que ela vai dizer string "Verdadeiro" e depois o dois ponto : que será a falsa


const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

console.log(resultado)