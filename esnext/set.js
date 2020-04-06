//nao aceita repetição e nao e indexada


const time = new Set()
time.add('vasco')
time.add('Sao paulo').add('Flamengo').add('corinthians')
time.add('vasco')

time.delete('Sao Paulo')

const nome = ['raquel', 'lucas', 'julia', 'lucas']

const nomes = new Set(nome)
console.log(nomes)