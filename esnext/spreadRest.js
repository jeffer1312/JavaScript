// operador ..rest(juntar)/spread(espalhar)

//usar rest como parametro de funçao
//usar spread como objeto

const funcionario = { nome: 'maria', salario: 1450 }
const clone = { ativo: true, ...funcionario }
console.log(clone)


//spread com array

const grupoA = ['joao', 'lhais', 'maria']
const grupoFinal = ['joana', ...grupoA, 'ana']
console.log(grupoFinal);