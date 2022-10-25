let escolha

let contato

do {
    escolha = prompt("Qual carro você deseja comprar " + "\n1. Cruze" + "\n2. New Civic" + "\n3. Audi" + "\n4. Eclipse" + "\n5. Nenhuma das opções anteriores" )
switch (escolha){
    case "1": 
        alert("Vocé escolheu a opção 1 - Cruze Turbo")
        break
    case "2": 
        alert("Vocé escolheu a opção 2 - New Civic")
        break
    case "3": 
        alert("Vocé escolheu a opção 3 - Audi TT")
        break
    case "4": 
    alert("Vocé escolheu a opção 4 - Mitsubish Eclipse")
        break
        case "5": 
        break
        default:
        alert("Opção inválida !!")
}
}
while(escolha !== "5"){
    contato = prompt("Deixe o seu contato por favor, assim que tivermos mais veículos entraremos em contato" + "\nNome e Telefone abaixo:")
    // alert("Desculpe não temos outros veículos disponiveís !")
}


