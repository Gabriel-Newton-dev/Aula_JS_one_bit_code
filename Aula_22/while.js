let velocidade = 80

while(velocidade > 0){
    alert("O carro está a " + velocidade + "km/h.")
    velocidade -= 20
    alert("Diminuindo 20 km/h")
// podemos ainda combinar as estruras(if, else, switch etc.), irei colocar um IF no while(enquanto)
    if (velocidade === 40){ // quando chegar a 40km a condição acaba e imprimi a linha 12, o carro parou
        break
    }
}
alert("O carro parou")