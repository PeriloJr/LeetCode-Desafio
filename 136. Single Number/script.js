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