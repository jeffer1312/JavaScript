console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
    //criar funçoes dentro do prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Jefferson Felizardo'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())