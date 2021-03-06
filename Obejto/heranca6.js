function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
};
//ao usar o operador new o prototipo e apontado para o aula
const aula1 = new Aula('bem vindo', 123);
const aula2 = new Aula('ate breve', 456);

console.log(aula1, aula2);


//simulando o operador new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'bem vindo', 789)

console.log(aula3)