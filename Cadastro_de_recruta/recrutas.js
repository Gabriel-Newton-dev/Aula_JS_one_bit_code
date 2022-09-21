const primeiroNome =  prompt("Informe o seu primeiro nome: ")
const segundoNome =  prompt("Informe o seu sobrenome: ")
const campoDeEstudo = prompt("Qual seu campo de estudo ?")
const anoNascimento =  prompt("Informe o ano do nascimento: ")

let idade = 2022 - anoNascimento

alert("Recruta cadastrado com sucesso!\n"+
"Nome completo: " + primeiroNome + " " + segundoNome + "\n"+
"Campo de estudo: " + campoDeEstudo+ "\n"+
"Idade: " + idade
)