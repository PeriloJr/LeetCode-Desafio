# 15. 3Sum

## 📢 Description:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]

Explanation: 

nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.

nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.

nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.

The distinct triplets are [-1,0,1] and [-1,-1,2].

Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]

Output: []

Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]

Output: [[0,0,0]]

Explanation: The only possible triplet sums up to 0.

## 📢 Descrição:
Dado um array de números interios, retorne todas os trios [nums[i], nums[j], nums[k]] tal que i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Perceba que a solução define que não deve conter trios duplicados.

Exemplo 1:

Entrada: nums = [-1,0,1,2,-1,-4]

Saída: [[-1,-1,2],[-1,0,1]]

Explicação: 

nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.

nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.

nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.

Os trios distintos são [-1,0,1] and [-1,-1,2].

Note que a ordem da saída e a ordem dos trios não importa.

Exemplo 2:

Entrada: nums = [0,1,1]

Saída: []

Explicação: O único trio possível não soma 0.

Exemplo 3:

Entrada: nums = [0,0,0]

Saída: [[0,0,0]]

Explicação: O unico trio possível soma 0.

## 💡 Solução 

```
//Desafio: encontrar através de um array de inteiros, quais três números somados, não repetidos, resultam em 0
//Lógica elaborada: utilização de 2 ponteiros para verificar se a soma necessária será com números maiores ou menores

var threeSum = function(nums) {
    // Se o array for menor que 3 elementos então nos não teremos os 3 números para resultar em 0
    if(nums.length < 3) return []
        const output = []

        // Ordenar o array de forma descrescente. 
        nums.sort((a,b) => a - b)

        for(let i = 0; i < nums.length - 2;i++) {
        // como não devemos repetir, então os números já iterados serão pulados
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i+1
        let right = nums.length-1

        // O número atual sera somado. Neste momento vamos verificar se os dois ponteiros "left" e "right" conseguem somar o número e resultar em 0
        while (left < right) {
            const sum = nums[i] + nums[right] + nums[left]
            // Se atinger 0 então vamos adicionar todos os números na saída e mover os dois ponteiros para procurar mais números que resultam em 0
            if(sum===0) {
                output.push([nums[i], nums[left], nums[right]])
                // Os números serão percorridos até achar um número que não é 0
                while(nums[left]===nums[left+1]) left++
                while(nums[right]===nums[right-1]) right--
                left++
                right--
            } else if (sum > 0) {
                // se a soma maior que 0 então procuraremos numeros menores
            right--
            } else {
                // e a menor maior que 0 então procuraremos numeros maior
                left++
            }
        }
    }
}
```

:computer: [Script](https://github.com/PeriloJr/LeetCode-Desafio/blob/main/15.%203Sum/script.js) 
:rewind: [Voltar ao início](https://github.com/PeriloJr/LeetCode-Desafio/tree/main) 