//pessoa aponta para um endereço de memoria Ex:123 que aponta par a o objeto{} e o objeto e que e alterado e nao o endereço de memoria
const pessoa = { nome: 'Jefferson' }
pessoa.nome = 'pedro'
console.log(pessoa);

//isso so esta alterando o nome e nao a constante pessoa

pessoa = { nome: 'Lhais' }

//isso vai dar erro pois esta tentando criar um novo objeto em uma constante ja definida