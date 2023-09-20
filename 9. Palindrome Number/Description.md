# 9. Palindrome Number

## 📢 Description:
Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## 📢 Descrição:
Dado um inteiro x, retorne "true" se x for um palindromo, e "false" por outro lado

Exemplo 1:
Entrada: x = 121
Saída: true
Explicação: 121 lê-se 121 da esquerda para direita e da direita para esquerda .

Example 2:
Entrada: x = -121
Saída: false
Explicação: Da esquerda para direita, é lido -121. Da direita para esquerda, ise torna 121-. Portanto este não é palindromo.

Example 3:
Entrada: x = 10
Saída: false
Explicação: Lê-se 01 Da direita para esquerda. Portanto ste não é palindromo.

## 💡 Solução

```
    //Desafio: verificar se um número é palíndromo ou não
    //Palindromos podem ser números ou textos que se lidos "ao contrário"
    //formam a mesma palavra

    //Lógica elaborada: converter o número para um array onde pode ser facilmente
    //invertido, após a ação será apenas necessário converter para string novamente
    //e comparar com o input inicial

    var isPalindrome = function(x) {
        /*Validação se o input "x"
        Convertido para String "String(x)" 
        Transformado para array ".split('')"
        Convertido novamente para string ".join('')"
        
        Neste caso é esperado obter o input escrito de maneira reversa
        Assim validando se é um palíndromo ou não
        */
        if(x == String(x).split('').reverse().join(''))
            return true
        return false
    }
```