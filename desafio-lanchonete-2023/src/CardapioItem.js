class CardapioItem {
    constructor(codigo, descricao, valor) {
        
        this._codigo = codigo;       
        this._descricao = descricao; 
        this._valor = valor;         
    }

    // get do codigo
    get codigo() {
        return this._codigo;
    }

    // get da descrição
    get descricao() {
        return this._descricao;
    }

    // get do valor
    get valor() {
        return this._valor;
    }
}

export { CardapioItem };