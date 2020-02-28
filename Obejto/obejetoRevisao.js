const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'gerenerica' //nao e recomendado usar esse modo
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'corsa',
    valor: 20000,
    proprietario: {
        nome: 'jefferson',
        idade: 27,
        endereco: {
            logradouro: 'rua nv9',
            numero: 0
        },
        condutores: [{
            nome: 'jefferson',
            idade: 27
        }, {
            nome: 'lhais',
            idade: 54
        }],
        calcularValorSeguro: function() {
            //..
        }
    }


}
carro.proprietario.endereco.numero = 5
console.log(carro)