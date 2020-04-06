const sequencia = {
    _valor: 1, // _ e usado para mostrar que essa variavel so deve acessada apenas dentro desse objeto
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }

};

console.log(sequencia.valor, sequencia.valor)