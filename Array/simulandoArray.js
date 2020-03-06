const quaseArray = { 0: 'rafael', 1: 'Jefferson', 2: 'lhais' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['rafael', 'jefferson', 'lhais']

console.log(quaseArray.toString(), meuArray)