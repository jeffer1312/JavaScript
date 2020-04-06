//arrow function


const soma = (a, b) => a + b
console.log(soma(2, 3))

//arrow function(this)

const lexico = () => console.log(this === exports)
const lexico1 = lexico.bind({})
lexico()
lexico1()


//parametro default 


function log(texto = 'node') {
    console.log(texto)
}

log()
log('passando parametro')


//operador rest e spread

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 5, 8, 9))