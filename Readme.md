## Curso de JS do One Bit Code

# Resumo dos tópicos abordados, caso tenha alguma dúvida básica sobre lógica de programação, pode verificar os conceitos nessas anotações

# JAVASCRIPT 

. O que e uma linguagem de programação : Conjunto de códigos que contem instruções para o computador


- Diferente de linguagem de marcação como HTML, CSS, XML YAML, ETC.)
- E de estilização CSS

- Podem ser de alto nível ou de baixo nível.

Alto nível - mais próximo da linguagem humana.

Baixo nível - mais prolixo do nível do hardware da máquina 

- Podem ser compiladas ou interpretadas. 

- Compiladas - escreve um código e ele será transformando em um binário, ele irá criar um executável 

- Interpretadas -  a maioria das linguagens, ela possui um intermediário ( o interpretador, por exemplo o navegador ) vc escreve seu codigo em js.


————————————————————————————————————————————————————

# JAVASCRIPT 

Criado em 1995
Não confundir com Java
Seu nome oficial é ECMASript 
De alto níveil e interpretada 
Multiparadigma - ele aceita diferente paradigmas de programação, uma forma de escrever o seu programa. 

Principal linguagem usada pelos navegadores
- junto com HTML e CSS forma as 3 principais tecnologias da WEB. 

- Também pode ser usada fora dos navegadores, atrase de runtime como Node.js (Back-end )


————————————————————————————————————————————————————

# TIPOS DE DADOS

- no JS dados podem ser representados em diferentes formas 

- tipos primitivos no JS, ou seja, primitivo pq são os mais simples que existem


. Number e bigint
. String 
. boolean, 
. null e undefined 


————————————————————————————————————————————————————

. Number - Funciona tanto para números inteiros quanto para float ( ou seja, pode sair 10 ou 10.5 ) irá reconhecer normalmente 

. Bigint - Pouco usado - para representar números inteiros muito grande. Para usar ele temos que colocar o “ n “ no final do número 


————————————————————————————————————————————————————

. String - texto  - mesmo esquema temos que usar aspas. 

Podemos acessa pedaços	 da string exemplo

Gabriel[0]

Ele irá imprimir apenas o G

"Gabriel".length - irá imprimir a quantidade de letras. 


————————————————————————————————————————————————————

. Boolean - true e false. 


————————————————————————————————————————————————————

. null e undefined 

Null - é um valor vazio que tem um valor. 


Undefined - é o nao definido, vc não atribui valor. 




————————————————————————————————————————————————————

# TIPOS QUE NAO SAO PRIMITIVOS 


OBJETOS E FUNCOES 


OBJETOS - Object


Ex: verificar o tipo typeof window




FUNCOES - a algo que vc vai executar e ele vai fazer isso pra vc 

console.error("Algo deu errado")


window.alert("Seu computador foi infectado com Vírus”).  <——— vai aparecer um alerta na sua máquina 


Ex: typeof console.error



————————————————————————————————————————————————————
# VARIAVEIS 


- Servem para amainar os dados para podermos usá-las no nosso código 


Criando variáveis -

. Var - ex :  var nome = “String”, podemos não atribuir valor nenhum- e: var idade mais não dei valor, posso mudar o valor posteriormente. 


. Let - utilizamos mais o let, porém a mesma funcionalidade do VAR, 


. Cont - Não pode ser modificado, ficara constante com esse valor, nao pode ser atribuído novamente. 



Pratica : 


Camel case - nomeDeUsuario - escrever dessa forma para difenciacao ( esse é o mais utilizado ) 

Snake case = nome_de_usuario =  

————————————————————————————————————————————————————
OPERADORES

Operadores - 

Aritmeticos - +, - , *, / e %

Agrupamento (). - em js para agrupar sempre usará parênteses, nao usa chaves e nem colchetes. 

Atribuição =, +=, -=, *=, /= e %=

Encademento - o operador de encadeamento nada mais é do que esse “.” Que colocamos para ligar as informações	
Ex: console.error(“Erro”)


Incrementar ++ e decrementar — ++ - incrementa ( ou seja soma mais 1 no valor numérico ) 


TUDO ISSO QUE USAMOS É UMA EXPRESSÃO 

Concatenar - é com sinal de + - exemplo :   “João” + “ Júnior”


Se for contaner um numero com string o JS irá transformar o numero em string
