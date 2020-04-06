//  ES8:Object.values         /Object.entries


const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.keys(obj))

//melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class

class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'au au'
    }
}

console.log(new Cachorro().latir())