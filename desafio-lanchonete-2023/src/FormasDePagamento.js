class FormasDePagamento {
    constructor() {
        this._formas = ['dinheiro', 'debito', 'credito'];
    }
    
    isValidForma(forma) {
        return this._formas.includes(forma);
    }
}

export { FormasDePagamento };
