//Object.preventExtensions    impede de extender a quantidade de produtos dentro desse objeto/pode ser modificado os atributos ja existentes e excluir so nao pode ser adicionado

const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar'
delete produto.tag
console.log(produto)


//Objet.seal  impede de adicionar ou excluir, mas posso modificar os ja existentes
const pessoa = { nome: 'Jefferson', idade: 28 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'felizardo'
pessoa.idade = 29

console.log(pessoa)


//Object.freeze congela os dados do objeto