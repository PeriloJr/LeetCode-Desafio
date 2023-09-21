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