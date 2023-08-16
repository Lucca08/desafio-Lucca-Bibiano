class FormasDePagamento {
    constructor() {
        //as formas de pagamento
        this._formas = ['dinheiro', 'debito', 'credito'];
    }
    
    isValidForma(forma) {
        return this._formas.includes(forma);
    }
}

export { FormasDePagamento };
