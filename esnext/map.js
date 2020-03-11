const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

//console.log(tecnologias.react)
//console.log(tecnologias.get('react'))
const chavesVariadas = new Map([
    [function() {}, 'funcao'],
    [{}, 'objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(vl, ch)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))