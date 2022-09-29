const valor = prompt("Por favor entre com um valor em metros: ")

const tipo = prompt("Informe qual tipo de medidade que deseja realizar a conversão : \na) Milimetro(mm)\nb) Centímetro(cm)\nc) Decímetro(dm)\nd) Decâmetro(dam)\ne) Hectometro(hm)\nf) Quilômetro(km)")

switch (tipo) {
    case "a":
        alert(valor * 1000)
        break
    case "b":
        alert(valor * 100)
        break
    case "c":
        alert(valor * 10)
        break
    case "d":
        alert(valor / 10)
        break
    case "e":
        alert(valor / 100)
        break
    case "f":
        alert(valor / 1000)
        break
    default:
        alert("Opção inválida")
}