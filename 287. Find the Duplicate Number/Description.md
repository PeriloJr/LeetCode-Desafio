# 9. Palindrome Number

## 📢 Description:
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

## 📢 Descrição:
Dada uma matriz de números inteiros contendo n + 1 inteiros, onde cada inteiro está no intervalo [1, n] inclusive. Existe apenas um número repetido em nums, retorne esse número repetido. Você deve resolver o problema sem modificar o array nums e usar apenas espaço extra constante.

Exemplo 1:
Entrada: nums = [1,3,4,2,2]
Saída: 2

Exemplo 2:
Entrada: nums = [3,1,3,4,2]
Saída: 3

## 💡 Solução 

```
//Desafio: encontrar através de um array qual número esta sendo repetido
//De acordo com a descrição deverá ter apenas um único número repetido
//Lógica elaborada: criar um objeto vazio que terá seus atributos inseridos
//através da iteração do array, onde os atributos serão nomeados com os números do array

/*
Exemplo da estrutura imaginada:
let repeat: {
	1: 1,
	2: 2
	.
	.
	.
	Com todos os números contidos no array
}
*/

var  findDuplicate  =  function(nums) {
	//Criado um objeto para armazenar todos os números iterados
	let  repeat  = {}
	//Iteração do array
	//Neste caso, utilizado for...of por ser necessário buscar o número
	//de cada posição do array
	for(num  of  nums){
		//Nesta linha de raciocínio, é verificado se o objeto possui
		//o atributo nomeado com o número da iteração atual do array
		if(repeat[num]){
		//Caso possua este atributo, é verificado que o numero é repetido
		//ou seja, encontramos o número repetido solicitado no desafio
		return  num
	}else{
		//Caso não exista, é criado o atributo com um valor qualquer
		repeat[num] =  1
		}
	}
};
```