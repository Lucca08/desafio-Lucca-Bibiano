class CardapioItem {
    constructor(codigo, descricao, valor) {
        
        this._codigo = codigo;       
        this._descricao = descricao; 
        this._valor = valor;         
    }

    // get para obter codigo
    get codigo() {
        return this._codigo;
    }

    // get para obter descrição
    get descricao() {
        return this._descricao;
    }

    // get para obter valor
    get valor() {
        return this._valor;
    }
}

export { CardapioItem };