# 136. Single Number

## 📢 Description:
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

## 📢 Descrição:
Dado um array de inteiros não vazios, todo o element aparece duas vezes exceto por um. Encontre este único.
Você deve implementar a solução com complexidade de tempo de execução linear e usando apenas um espaço extra constante.

Exemplo 1:
Entrada: nums = [2,2,1]
Saída: 1

Exemplo 2:
Entrada: nums = [4,1,2,1,2]
Saída: 4

Exemplo 3:
Entrada: nums = [1]
Saída: 1

## 💡 Solução 

```
//Desafio: dado um array de inteiros, alguns serão repetidos e um único não. É proposto que seja devolvido este único que não se repete.
/*Lógica elaborada: Criar o objeto Set que verificará se um determinado elemento existe, caso não exista, será adicionado, se existir, será removido.

Exemplo prático:
Entrada: [2,2,1]

1º Repetição:
Verifica se 2 existe no objeto Set, como não existe, será adicionado.
 --Set = [2]

2º Repetição:
Verifica se o 2 existe, como existe, será removido.
 --Set = []

3º Repetição:
Verifica se 1 existe, como não existe, será adicionado.
 --Set = [1]

Fim da repetição, como a descrição do desafio sugere, o array terá apenas 1 único elemento não repetido, logo é esperado que o objeto contenha apenas 1 elemento
Desta forma, será retornada a 1º posição.
*/
    var singleNumber = function(nums) {
        const singleNum = new Set;

        //Iteração do array
        nums.forEach((element) =>{
        
            //Verifica se existe no objeto
            if(singleNum.has(element))

                //Caso exista será removido
                singleNum.delete(element)
            else

                //Caso não exista, será adicionado
                singleNum.add(element)
        })

    //Retornando a primeira posição do objeto Set
    return [...singleNum][0]
};
```

- :computer: [Script](https://github.com/PeriloJr/LeetCode-Desafio/blob/main/15.%203Sum/script.js) 
- :rewind: [Voltar ao início](https://github.com/PeriloJr/LeetCode-Desafio/tree/main) 