class CardapioItem {
    // Construtor da classe CardapioItem
    constructor(codigo, descricao, valor) {
        // Atributos do CardapioItem
        this._codigo = codigo;       // Código do item no cardápio
        this._descricao = descricao; // Descrição do item
        this._valor = valor;         // Valor do item
    }

    // Getter para obter o código do item
    get codigo() {
        return this._codigo;
    }

    // Getter para obter a descrição do item
    get descricao() {
        return this._descricao;
    }

    // Getter para obter o valor do item
    get valor() {
        return this._valor;
    }
}

// Exporta a classe CardapioItem para ser usada em outros módulos
export { CardapioItem };