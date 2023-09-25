# 88. Merge Sorted Array

## 📢 Description:
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

Output: [1,2,2,3,5,6]

Explanation: The arrays we are merging are [1,2,3] and [2,5,6].

The result of the merge is [1,2,2,3,5,6] with the underlined elements 
coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0

Output: [1]

Explanation: The arrays we are merging are [1] and [].

The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1

Output: [1]

Explanation: The arrays we are merging are [] and [1].

The result of the merge is [1].

Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

## 📢 Descrição:
Você recebe dois arrays de inteiros nums1 e nums2, classificados em ordem não decrescente, e dois inteiros m e n, representando o número de elementos em nums1 e nums2 respectivamente.

Deve-se mesclar nums1 e nums2 em um unico array classificada em ordem não decrescente.

O array classificado final não deve ser retornado pela função, mas sim armazenado dentro do array nums1. Para acomodar isso, nums1 tem um comprimento de m + n, onde os primeiros m elementos denotam os elementos que devem ser mesclados e os últimos n elementos são definidos como 0 e devem ser ignorados. nums2 tem um comprimento de n.

Exemplo 1:
Entrada: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

Saída: [1,2,2,3,5,6]

Explicação: The arrays we are merging are [1,2,3] and [2,5,6].

O resultado da mescla é [1,2,2,3,5,6] com os elementos sublinhados
vindo de nums1.

Exemplo 2:

Entrada: nums1 = [1], m = 1, nums2 = [], n = 0

Saída: [1]

Explicação: Os array que foram mescalados [1] e [].
O resultado da mescla é [1].

Exemplo 3:

Entrada: nums1 = [0], m = 0, nums2 = [1], n = 1

Saída: [1]

Explicação: Os arrays mesclados são [] e [1].
O resultado da mescla é [1].

Observe que como m = 0, não há elementos em nums1. O 0 existe apenas para garantir que o resultado da mesclagem caiba em nums1.

## 💡 Solução

```
var merge = function(nums1, m, nums2, n) {
    //Definição da ultima posição de num1
    let pos = m + n-1

    //iteração das posições do array2
    while(n - 1 >= 0){

        //Verifica se m já foi totalmente iterado e verifica qual elemento da ultima posição preenchida entre os arrays é maior
        if(m >= 0 && nums1[m-1] > nums2[n-1]){
            //Caso o elemento do array 1 for maior, então é alocado a ultima posição do array1 não iterada
            nums1[pos] = nums1[m-1]
            
            //Subtrai-se a posição do array 1
            m--
        }else{
            //Caso o elemento do array 2 for maior, então é alocado a ultima posição do array1 não iterada
            nums1[pos] = nums2[n-1]

            //Subtrai-se a posição do array 2
            n--
        }
        //Como a cada repetição um numero é alocado na ultima posição do array 1, então subtrai-se uma posição para a proxima preenchida
        pos--
    }

    //Retorno array 1
    return nums1  
};
```

- :computer: [Script](https://github.com/PeriloJr/LeetCode-Desafio/blob/main/14.%20Longest%20Common%20Prefix/script.js) 
- :rewind: [Voltar ao início](https://github.com/PeriloJr/LeetCode-Desafio/tree/main) 