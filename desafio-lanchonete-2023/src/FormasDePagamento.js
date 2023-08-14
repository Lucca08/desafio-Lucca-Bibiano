class FormasDePagamento {
    // Construtor da classe FormasDePagamento
    constructor() {
        // Lista de formas de pagamento válidas
        this._formas = ['dinheiro', 'debito', 'credito'];
    }
    
    // Verifica se uma forma de pagamento é válida
    isValidForma(forma) {
        // Usa o método includes() para verificar se a forma está na lista
        return this._formas.includes(forma);
    }
}

// Exporta a classe FormasDePagamento para ser usada em outros módulos
export { FormasDePagamento };
