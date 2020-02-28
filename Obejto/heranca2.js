//cadeia de prototipos(prototype chain)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}:${super.status()}`
    }

}

//Object.setPrototypeOf(Objeto , prototype)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerMais(100);
ferrari.acelerMais(300);
console.log(volvo.status())
console.log(ferrari.status())