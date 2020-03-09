const contadorA = require('./instanciaUnica'); //cache
const contadorB = require('./instanciaUnica');
const contadorC = require('./instanciaNova')(); //nova instancia
const contadorD = require('./instanciaNova')();

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)