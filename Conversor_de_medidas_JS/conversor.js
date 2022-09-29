const valor = prompt("Por favor entre com um valor em metros: ")

const tipo = prompt("Informe qual tipo de medidade que deseja realizar a conversão : \na) Milimetro(mm)\nb) Centímetro(cm)\nc) Decímetro(dm)\nd) Decâmetro(dam)\ne) Hectometro(hm)\nf) Quilômetro(km)")

switch (tipo) {
    case "a":
        alert("O valor de "+ valor+ " metros"+" convertido em milimetros é "+ valor * 1000 + " mm")
        break
    case "b":
        alert("O valor de "+ valor+ " metros"+" convertido em centímetros é "+ valor * 100 + " cm")
        break
    case "c":
        alert("O valor de "+ valor+ " metros"+" convertido em decímetro é "+ valor * 10 + " dm")
        break
    case "d":
        alert("O valor de "+ valor+ " metros"+" convertido em decâmetro é "+ valor / 10+ " dam")
        break
    case "e":
        alert("O valor de "+ valor+ " metros"+" convertido em hectometro é "+ valor / 100 + " hm")
        break
    case "f":
        alert("O valor de "+ valor+ " metros"+" convertido em quilômetro é "+ valor / 1000 +" Km")
        break
    default:
        alert("Opção inválida")
}