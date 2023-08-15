
import { CardapioItem } from './CardapioItem.js';

class Cardapio {
    constructor() {
        this._itensMap = new Map([
        ['cafe', new CardapioItem('cafe', 'Café', 3.00)],
        ['chantily', new CardapioItem('chantily', 'Chantily (extra do Café)', 1.50)],
        ['suco', new CardapioItem('suco', 'Suco Natural', 6.20)],
        ['sanduiche', new CardapioItem('sanduiche', 'Sanduíche', 6.50)],
        ['queijo', new CardapioItem('queijo', 'Queijo (extra do Sanduíche)', 2.00)],
        ['salgado', new CardapioItem('salgado', 'Salgado', 7.25)],
        ['combo1', new CardapioItem('combo1', '1 Suco e 1 Sanduíche', 9.50)],
        ['combo2', new CardapioItem('combo2', '1 Café e 1 Sanduíche', 7.50)],
        ]);
    }

    getItem(codigo) {
        return this._itensMap.get(codigo);
    }
    
    // Retorna um array com todos os itens do cardápio
    getItens() {
        return Array.from(this._itensMap.values());
    }
}

export { Cardapio };


