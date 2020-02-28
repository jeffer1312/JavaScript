const pessoa = {
    nome: 'Jefferson',
    peso: 95,
    idade: 28
}

console.log(Object.keys(pessoa)) //pegar as chaves de um objeto
console.log(Object.values(pessoa)) //pegar so os valores
console.log(Object.entries(pessoa)) // pegar chave e valor com formato de array

//percorrer o array usando o forEach ou map 
Object.entries(pessoa).forEach(([keys, values]) => {
    console.log(`${keys}:${values}`)
})

//defineProperties usado para dar algumas propriedades para alguma chave 
Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

//ECMAScript 2015, Object.assign(Destino, objeto1, objeto2)
//concatena os objetos e junta se tiverem chaves identicas sera substituido

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj);