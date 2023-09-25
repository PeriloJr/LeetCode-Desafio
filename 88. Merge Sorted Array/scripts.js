//Desafio: mesclar dois arrays de maneira ordenada crescente, onde o array 1 terá espaços para o preenchimento do array 2
/*Lógica elaborada: como m representa a posição dos elementos do array 1 diferentes de "0", será realizado uma validação do valor da posição de m no array 1 e posição n no array 2.
Como o tamanho do array 1 será a posição de m somada as posições do array 2, ou seja, n, então m + n - 1 (-1 pois m e n consideram o tamanho e não posições) maior elemento será preenchido na última posição do array 1 (m+n-1)
*/
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