//Desafio: encontrar o maior prefixo entre todos os elementos de um array de strings

//Lógica elaborada: tomar como base a primeira string e verificar se os demais delementos se iniciam com a string
//porém, nesta lógica a cada repetição que não é encontrada será "cortado" o último caractere da string

/*
    EXEMPLO:
    
    1º repetição
    flower
    
    2º repetição
    flowe

    3º repetição
    flow

    e assim sucessivamente até encontrar um mínimo de string que se encaixe no elemento iterado
*/

var longestCommonPrefix = function(strs) {
    //Armazenar o primeiro elemento do array
    let firstWord = strs[0];

    //Posição de início da iteração, esta posição representará a posição do array
    let i = 1;
    
    while(i < strs.length){
        
        //valida se o elemento iterado começa com o primeiro elemento
        /*em sua primeira repetição se trata do primeiro elemento inteiro
        porem nas demais repetições será o primeiro elemento com o corte em sua ultima posição*/
        if(!strs[i].startsWith(firstWord)){
            //Caso o elemento iterado não comece com a primeira palavra, será cortado o último elemento do mesmo
            firstWord = firstWord.slice(0,-1)
        }else{
            /*Caso encontre, significa que chegamos no prefixo máximo entre o primeiro elemento e o iterado
            então será verificada a próxima posição*/
            i++
        }
    }

    //Como o primeiro elemento foi cortado até encontrar o prefixo minimo, o mesmo será retornado na função
    return firstWord
};