let nome = "Gabriel"
const msg_erro = "Erro" // será usado para qq msg de erro

const msg_warn = "Favor verifique os seus dados"

console.log(nome)
console.error(msg_erro)
console.warn(msg_warn)
//window.alert("Alerta esse site está com vírus")
nome = window.prompt("Digite seu nome por favor: ")
console.log(nome)

let confirmacao = window.confirm("Confirma essa ação ?")
console.log(confirmacao)
