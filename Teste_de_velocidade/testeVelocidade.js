alert("Sejam bem-vindos a página de Teste de Velocidade dos carros")

const carro1 =  prompt("Digite o nome do carro número 1: ")
const velocidade1 = prompt("Qual a velocidade máxima desse carro ? ")
const carro2 = prompt("Digite o nome do carro número 2: ")
const velocidade2 = prompt("Qual a velocidade máxima desse carro ? ")

if(velocidade1 > velocidade2 ){
    alert("O " + carro1 + " é mais rápido que o "+carro2 +" e a sua velocidade máxima é "+velocidade1+" KM/h")
}else if(velocidade1 < velocidade2){
    alert("O " + carro2 + " é mais rápido que o "+carro1 +" e a sua velocidade máxima é "+velocidade2+ " KM/h")
}else if(velocidade1 === velocidade2){
    alert("Ambos carros correm a mesma velocidade(empate).")
}