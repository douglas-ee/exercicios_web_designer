//Meu primeiro Programa Javascript

/*Para comentar tudo, basta escrever assim*/

//Criação de uma variavel, para armazenar uma mensagem
var mensagem = "Olá Mundo, vamos calcular!";
//Função que imprime a mensagem
alert(mensagem);
//Operações matematicas
var a = 3;
var b = 3;

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert(soma);
alert(sub);
alert(mult);
alert(div);

//Estrutura condicionais

if (a%2 == 1) {
	alert("Número Ímpar");
}
else {
	alert("Número Par");
}

//Estruturas de repetição

var i = 0;

// while (enquanto)
while(i < 2){
	alert(i);
	i++;
}

// for (para)
for (var j = 0; j < 2; j++){
	alert(j);
}

// Tipos de Dados

var numero = 6;
var decimal = 4.5;
var texto = "Olá mundo"
var lista = ["laranja", "maçã", "banana", 1234]

// Arrays

//podemos imprimir um so valor, indicando sua posição
alert(lista[3]);
//ou podemos imprimir varios valores através de um laço de repetição
for (i in lista) {
	alert(lista[i]);
}

// Enviando mensagem através do console.log

console.log("Olá Mundo");

//Funções

function soma(a, b){
	console.log(a+b);
}

soma(2, 2);

//podemos declarar e imprimir uma função de uma outra forma, retornando os valores atraves de uma variavel.

function subtracao(a, b){
	return a-b;
}
var sub = subtracao(5, 3);
console.log(sub);

//podemos fazer como se uma coisa fosse incremento de outra.

function multiplicacao(a, b){
	return a*b;
}
console.log(multiplicacao(9, 7));