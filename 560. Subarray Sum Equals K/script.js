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