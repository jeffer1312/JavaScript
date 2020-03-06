const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Saiu o ultimo elemento

console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento na ultima posição

pilotos.shift() //remove o primeiro elemento do array

console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log(pilotos)


//slice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'massa')
console.log(pilotos)
    //remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(1, 5) // gera um novo array apartir do indice colocado como parametro e vai ate o indice colocado no seguudo parametro
console.log(algunsPilotos1)