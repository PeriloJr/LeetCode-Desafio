# 560. Subarray Sum Equals K

## 📢 Description:
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

## 📢 Descrição:
Dado um array de inteiros "nums" e um inteiro "k", retorne o total de numberos de subarrays cuja a soma seja k.
Um subarray é uma sequência contígua e não vazio de elementos dentro de uma matriz.

Exemplo 1:
Entrada: nums = [1,1,1], k = 2
Saída: 2

Exemplo 2:
Entrada: nums = [1,2,3], k = 3
Saída: 2

## 💡 Solução 

```
//Desafio: calcular a quantidade de subarrays que em sua somatória sejam iguais a entrada K
//Lógica elaborada: criar um Map que armazenará todos os resultados de soma contínua no array em sua chave
//caso exista a chave para o número gerado pela soma - k, é pq encontramos um subarray que iguala a entrada

var subarraySum = function(nums, k) {
    // Criação do Map
    const sumFrequency = new Map();
    let count = 0;
    let sum = 0;
    sumFrequency.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        // Cálculo da soma acumulativa
        sum += nums[i];

        // Se a soma dos valores do array subtraído de K existir no Map, será contabilizado um subarray
        if (sumFrequency.has(sum - k)) {
            count += sumFrequency.get(sum - k);
        }

        // Inserção da soma no Map
        if (sumFrequency.has(sum)) {
            sumFrequency.set(sum, sumFrequency.get(sum) + 1);
        } else {
            sumFrequency.set(sum, 1);
        }
    }
    return count;
}
```

- :computer: [Script](https://github.com/PeriloJr/LeetCode-Desafio/blob/main/560.%20Subarray%20Sum%20Equals%20K/script.js) 
- :rewind: [Voltar ao início](https://github.com/PeriloJr/LeetCode-Desafio/tree/main) 