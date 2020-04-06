//let e const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//template string
const produto = 'ipad'

console.log(`${produto}
e
caro!`)


//destructuring   operador rest (   ,...)
const [l, e, ...resto] = "Cod3r"
console.log(l, e, resto)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome, idade: i } = { nome: 'ana', idade: 50 }
console.log(i, nome)