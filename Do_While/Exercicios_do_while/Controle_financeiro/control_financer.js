let saldo= prompt("Digite por favor a quantidade inicial de dinheiro disponível: ")
saldo = parseFloat(saldo)
let opcao_desejada = ""

// opcao_desejada = prompt("R$"+saldo+" Reais" + "\n1. Para Depósito" + "\n2. Para retirada." + "\n3.Sair")
// deposito = prompt(parseint("Digite a quantidade a ser depositada: "))
// remocao = prompt("Digite a quantidade a ser retirada: ")
// totalRemocao = parseInt(saldo- remocao)
// totalDeposito = parseInt(quantidadeDeDinheiro) + parseInt(deposito)

do{
    opcao_desejada = prompt(
        "Saldo disponível: R$ " + saldo +
        "\n1. Adicionar dinheiro " + 
        "\n2. Retirar dinheiro " +
        "\n3. Sair"
        )

    switch(opcao_desejada){
        case "1": 
        saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
        break
        case "2":
        saldo -= parseFloat(prompt("Informe o valor ser retirado: "))
        break 
        default:
        alert("Opção Inválida!")
        } 
    } while (opcao_desejada !== "3"){
        alert("Saido do programa controle financeiro.")
    }