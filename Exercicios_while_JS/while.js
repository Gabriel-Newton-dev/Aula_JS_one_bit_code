
const nome = prompt("E aí turista ! Digite o seu nome por favor: ")
let cidades = ""
let contagem = 0
let continuar = prompt("você visitou alguma cidade? (Sim/Não) ")

while(continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada? ")
    // vai concatenar cidades com cidade
    cidades += " - "+ cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade ? (Sim/Não)")
}
alert (
    "Nome: "+ nome + 
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitaras:\n" + cidades
)








