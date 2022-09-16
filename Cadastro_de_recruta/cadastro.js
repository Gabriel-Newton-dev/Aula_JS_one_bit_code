let primeiroNome = "Nome" 
let sobrenome = "Sobrenome"
let campoDeEstudo = "Tecnologia da Informação."
let anoDeNascimento

primeiroNome = window.prompt("Digite o seu primento nome: ")
sobrenome = window.prompt("Digite o seu sobrenome:")
campoDeEstudo = window.prompt("Digite seu campo de estudo:")
anoDeNascimento = window.prompt("Digite o ano do seu nascimento")

let idade = 2022 - anoDeNascimento

console.log("Nome:",primeiroNome, sobrenome,"- Campo de estudo:", campoDeEstudo,"-", idade, "anos de idade")

