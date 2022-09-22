alert("Sejam bem-vindos a página de Teste de Velocidade dos carros")

const carro1 =  prompt("Digite o nome do carro número 1: ")
const velocidade1 = prompt("Qual a velocidade máxima desse carro ? ")
const carro2 = prompt("Digite o nome do carro número 2: ")
const velocidade2 = prompt("Qual a velocidade máxima desse carro ? ")

if(velocidade1 > velocidade2 ){
    alert("Carro 1 é mais rápido que o carro2")
}else if(velocidade1 < velocidade2){
    alert("O Carro 2 é mais rápido que o carro2")
}else if(velocidade1 === velocidade2){
    alert("Ambos carros correm a mesma velocidade -- empataram. ")
}