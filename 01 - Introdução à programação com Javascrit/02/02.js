/* RESPOSTA AQUI 👇 */


/* Questão 01 
Faça uma código que recebe três lados de um triângulo(a,b,c) e retorne o tipo de triângulo
a) A >= B  + C não existe o triângulo
b) A² = B² + C² é um triângulo retângulo
c) A > B + C é formado um triângulo obtusângulo
d) A < B + C formando um acutângulo

Exceções: 
O lado A sempre deverá ser o maior de todos(Criar um mecânismo para tratar isso)
Caso sejam fornecidos valores negativos, retornar erro para o usuário.
*/
<<<<<<< HEAD
/* entrada */

    function calculaTriangulo(_A = 0, _B = 0, _C = 0) {
    var tipo = ""
    /*Processamento*/
    if (_A <= 0) {
        tipo = "Informe lado maior que zero"
    }
    if (_B <= 0) {
        tipo = "Informe lado maior que zero"
    }
    if (_C <= 0) {
        tipo = "Informe lado maior que zero"
    }
    if (_A > _B + _C) {
        tipo = "Não existe triângulo"
    }
    if (_A ** 2 == _B ** 2 + _C ** 2) {
        tipo = "Triângulo Retângulo"
    }
    if (_A ** 2 > _B ** 2 + _C ** 2) {
        tipo = "Triângulo obtusângulo"
    }
    if (_A ** 2 < _B ** 2 + _C ** 2) {
        tipo = "Triângulo acutângulo"
    }

    /* saída */
    return tipo
} 


=======
>>>>>>> 306afa382f6d9a03f671e2ddbd65d35c2771a327

function calculaMedia(A, B, C) {

    if (A >= B + C) {
        return 'Não existe triângulo'
    }
    if(A**2 == B**2 + C **2){
        return 'Triangulo Retangulo'
    }
    if(A > B + C){
        return 'obtusângulo'
    }
    if(A < B + C){
        return 'acutângulo'
    }
}


/* Questão 02
 
Uma empresa quer aumentar o salário dos funcionários dada a seguinte tábela
-> Até R$400,00 --------------------------- 15%
-> Entre R$400,01 e R$700 ----------------- 12%
-> Entre R$700,01 e R$1000,00 ------------- 10%
-> Entre R$1000,01 e $2000,00 ------------- 7%
-> Entre R$2000,01 e R$3500,00 ------------ 4%
-> Acima de $3500,01 ---------------------- 0%
 
Crie um código que recebe o salario do funcionário(apenas numérico) e retorne o salario atual, a porcentagem de correção e o valor corrigido
*/

<<<<<<< HEAD
function corrigirsalario(_c1 = 0.15, _c2 = 0.12, _c3 = 0.1, _c4 = 0.07, _c5 = 0.04, _c6 = 0, salariocorrigido) {
    var salario = 0
    if (salario <= 400) {
        salariocorrigido = salario + _c1 * salario
    }
    if (salario > 400 && salario <= 700) {
        salariocorrigido = salario + _c2 * salario
    }
    if (salario > 700 && salario <= 1000) {
        salariocorrigido = salario + _c3 * salario
    }
    if (salario > 1000 && salario <= 2000) {
        salariocorrigido = salario + _c4 * salario
    }
    if (salario > 2000 && salario <= 3500) {
        salariocorrigido = salario + _c5 * salario
    }
    if {
        salariocorrigido = salario + _c6 * salario
    }

    return salariocorrigido
}
=======
function corrigiSalario(salario) {

    if(salario < 400.00){
        return salario * 1.15
    }if(salario >= 400.00 && salario < 700){
        return salario * 1.12
    }if(salario >= 700 && salario < 1000.00){
        return salario * 1.10
    }if(salario >= 1000.00 && salario < 2000.00){
        return salario * 1.07
    }if(salario >= 2000.00 && salario < 3500.00){
        return (salario * 1.04).toFixed(2)
    }if(salario > 3500.00){
    }        return salario.toFixed(2) 



}



/*

*/

>>>>>>> 306afa382f6d9a03f671e2ddbd65d35c2771a327
