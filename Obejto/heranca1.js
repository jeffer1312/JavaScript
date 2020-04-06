const ferrari = {

    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 240
}


console.log(ferrari.__proto__) //protype padrao de todo objeto
console.log(ferrari.__proto__ === Object.prototype) //__proto__ e igual a Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // Valor Null,


function meuObeto() {

}