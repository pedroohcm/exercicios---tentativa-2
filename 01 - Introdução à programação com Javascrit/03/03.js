/* RESPOSTA AQUI 👇 */

/* Questão 01
Cria uma função que leia o mês do aniversário da pessoa(01 ~ 12) e retorne seu signo:
01 - Capricornio
02 - Aquario
03 - Peixes
04 - Aries
05 - Touro
06 - Gêmeos
07 - Cancer
08 - Leão
09 - Virgem
10 - Libra
11 - Escorpião
12 - Sagitário

*/
/*
function leSigno(mes) {
    var signo = ""
    var mes = 0
    if (mes==1)
        signo = "Capricornio"}
    if (mes==2)
        signo = "aquario"}
    if (mes==3)
        signo = "peixes"}
    if (mes==4)
        signo = "aries"}
    if (mes==5)
        signo = "touro"}
    if (mes==6)
        signo = "gemeos"}
    if (mes==7)
        signo = "cancer"}
    if (mes==8)
        signo = "leao"}
    if (mes==9)
        signo = "virgem"}
    if (mes==10)
        signo = "libra"}
    if (mes=11)
        signo = "escorpiao"}
    if (mes==12)
        signo = "Sagitario"}
    return (signo)

}
*/
/* Questão 02

Cria uma função que leia dois números e retorne como resultado os seguintes valores:
a) a multiplicação entre eles
b) a divisão entre eles eles
c) a soma entre eles
d) a subtração entre eles
*/
function calculaTudo(n1, n2) {
    var mult = n1*n2
    var div = n1/n2
    var soma = n1+n2
    var sub = n1-n2
    var resultado = ["multiplicaçao =" + mult, "divisao =" +div, "soma =" +soma, "subtração =" +sub ]
    return resultado

}
/* Questão 03

Carlos deseja fazer um omelete. Na receita que leu na internet, um omelete sempre deve levar
2 ovos. 

Cria uma função que retorne para Carlos quantos omeletes ele consegue fazer com a quantidade 
de ovos que ele possue

exemplo: 
entrada 5 ovos
saída 2 omeletes

Entrada 4 ovos
saída 2 omeletes

*/

function retornaOmelete(quantiovo=0) {

    if (quantiovo <2) {
        receita = "nao da pra fazer omelete"}
    var divisao = parseInt (quantiovo / 2)
    var receita = ["a quantidade que da pra fazer de omelete é:" + divisao]
    return receita
    }
/*
Questão 04

Crie um programa que funciona como um calculadora. O usuário entrara com
3 inputs(Tipo de operação,número 01, número 02)

O seu programa deve receber o tipo de operação entrada pelo usuário e garantir que
os dois números entrados serão calculados de acordo.

Exemplo:
Chamada : functionCalculadora("Multiplicação", 2, 2)
Saída : "A calculadora executou a operação de Multiplicação e retornou o valor 4"

Será necessário criar pelo menos as quatro operações básicas da matemática(
    multiplicação,
    divisão,
    subtração e
    adição
)

Pontuação bônus: Criar mais operações matemáticas
Pontuação bônus: Criar uma função separada para cada operação matemática.

*/

function functionCalculadora(operacao, n1, n2) {
    var valor = 0
    if (operacao == "mult") {
        valor = n1*n2}
    if (operacao == "div") {
        valor = n1/n2}
    if (operacao == "soma") {
        valor = n1+n2}
    if (operacao == "sub") {
        valor = n1-n2}
    if (operacao == "elevar") {
        valor = n1**n2}
    if (operacao == "juntar") {
        valor = [n1&&n2]}   
    
   return `A calculadora executou a operação ${operacao} e o valor deu : ${valor}`
}





/* Questão 02 (Valendo uma pontuação maior)


Questão OBI(Olimpíada Brasileira de Informática - 2012, Fase 2, Nível Junior)

João Deseja fazer bolos para seus amigos usando uma receita que indica que devem ser
usadas 2 xícaras de farinha de trigo, 3 ovos e 5 colheres de sopa de leite. Em casa
ele tem A xícaras de trigo, B ovos e C colheres de sopa de leite. João não tem muita
prática com a cozinha e portanto ele só se arriscará a fazer medidas exatas da receita
de bolo (por exemplo, se ele tiver material suficiente para
fazer mais do que 2 e menos do que 3 bolos, ele far´a somente 2 bolos). Sabendo disso,
ajude João escrevendo uma função que determine qual a quantidade máxima de bolos que 
ele consegue fazer
Entrada: Os Parâmetros de entrada da função são três números Inteiros A, B e C, indicando
respectivamente o número de xícaras de farinha de trigo, o núimero de ovos e o número de 
colheres de sopa de leite que João tem em Casa

Saída: Retornar a quantidade máxima de bolos
entrada : 4,6,10 saída: 2
entrada : 4, 6, 9 saída : 1
*/

function calculaBolo(far, ovo, leite) {
    var qtfarinha = parseInt(far/2)
    var qtovo = parseInt(ovo/3)
    var qtleite = parseInt(leite/5)
    var mensagembolo = ''
    

    if (qtleite<5 | qtovo<3 | qtfarinha <2){
        mensagembolo = "releia os ingredientes, devemos no mínimo: 5 leites, 3 ovos, e 2 farinhas"}
    else 
        if (qtfarinha == qtovo == qtleite){
        mensagembolo = "o número possível de bolos a serem feitos é=" +qtleite}
    
        if (qtleite<= qtovo && qtleite <=qtfarinha){
        mensagembolo = "o número possível de bolos a serem feitos é=" +qtleite}

        if (qtfarinha<= qtovo && qtfarinha <=qtleite){
        mensagembolo = "o número possível de bolos a serem feitos é=" +qtfarinha}

        if (qtovo<= qtfarinha && qtovo <=qtleite){
            mensagembolo = "o número possível de bolos a serem feitos é=" +qtovo}   

  

    console.log(`Total de bolos ${mensagembolo}`)


    /* for(var i = 1; i <= 10; i++){
        if(farinhaDeTrigo%2 == 0 && ovos%3 == 0 && leite%5 == 0){
            var bolo = 0 
            bolo = bolo + 1   
        }
        
    }   */


}