let aprovados = new Array('bia', 'Jefferson', 'lhais') //declarar array usando new

console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana'] //forma literal de declarar array, mais usado

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined pois nao foi definido mas javascript nao da erro 


aprovados[3] = 'Lucas' //alterar um valor sabendo o indice dele
aprovados.push('valdir') //colocar dinamicamente um valor dentro do array
console.log(aprovados.length)

aprovados[9] = 'rafael' //adiciona o emento na posição definida 
console.log(aprovados)
aprovados.sort() //altera ordem do array
console.log(aprovados)


delete aprovados[1] //deleta o array mas nao reordena o array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
    // splice(Indice array,quantidade apos ele,elementos a ser adicionados )
aprovados.splice(2, 1) // ex array.splice(2,1,'elemento1','elemento2' )
console.log(aprovados)