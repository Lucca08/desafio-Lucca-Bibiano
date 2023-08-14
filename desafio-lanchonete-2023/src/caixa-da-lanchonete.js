// Importa as classes FormasDePagamento e Cardapio de seus respectivos módulos
import { FormasDePagamento } from './FormasDePagamento.js';
import { Cardapio } from './Cardapio.js';

// Classe que representa o caixa da lanchonete
class CaixaDaLanchonete {
    constructor() {
        // Cria uma instância do Cardapio e FormasDePagamento para uso interno
        this._cardapio = new Cardapio();
        this._formas_de_pagamento = new FormasDePagamento();
    }
    
    // Calcula o valor total da compra com base nos itens e método de pagamento
    calcularValorDaCompra(metodoDePagamento, itens) {
        // Verifica se há itens no carrinho
        if (!itens.length) {
            return "Não há itens no carrinho de compra!";
        }

        // Verifica se os itens são válidos
        if (!this.testaApenasExtra(itens)) {
            return "Item extra não pode ser pedido sem o principal";
        }

        let total = 0;

        // Loop pelos itens no carrinho
        for (const itemStr of itens) {
            const [codigo, quantidade] = itemStr.split(',')
            const itemMenu = this._cardapio.getItens().find(itemMenu => itemMenu.codigo === codigo);

            // Verifica se o item existe no cardápio
            if (!itemMenu) {
                return "Item inválido!"
            }

            const quantidadeNumerica = parseInt(quantidade);

            // Verifica se a quantidade é válida
            if (isNaN(quantidadeNumerica) || quantidadeNumerica <= 0) {
                return "Quantidade inválida!"
            }

            // Calcula o total com base no valor do item e quantidade
            total += itemMenu.valor * quantidadeNumerica
        }

        // Aplica desconto ou acréscimo com base no método de pagamento
        total = this.aplicarDescontoOuAcrescimo(total, metodoDePagamento)

        // Formata o valor total para exibição
        return this.formatarValorTotal(total);
    }

    // Aplica desconto ou acréscimo com base no método de pagamento
    aplicarDescontoOuAcrescimo(valor, metodoDePagamento) {
        switch (metodoDePagamento) {
            case 'dinheiro':
                valor *= 0.95; // Desconto de 5% para pagamento em dinheiro
                break;
            case 'credito':
                valor *= 1.03; // Acréscimo de 3% para pagamento a crédito
                break;
            case 'debito':
                // Nenhuma alteração para pagamento com débito
                break;
            default:
                return 'Forma de pagamento inválida!';
        }

        return valor;
    }
   
    // Formata o valor total para exibição
    formatarValorTotal(valor) {
        if (typeof valor === 'string') {
            return valor; // Retorna a mensagem de erro diretamente
        }
    
        const valorNumerico = parseFloat(valor);
        if (isNaN(valorNumerico)) {
            throw new Error("Valor inválido para formatação")
        }
    
        const valorFormatado = `R$ ${valorNumerico.toFixed(2).replace('.', ',')}`;
        return valorFormatado
    }
    
    // Verifica se os itens contêm apenas extras ou estão corretos
    testaApenasExtra(todosItens = []) {
        const itensCodigos = todosItens.map(item => item.split(',')[0]);
        const temcafe = itensCodigos.includes('cafe');
        const temsanduiche = itensCodigos.includes('sanduiche');

        return !(itensCodigos.includes('chantily') && !temcafe) &&
               !(itensCodigos.includes('queijo') && !temsanduiche);
    }
}

// Exporta a classe CaixaDaLanchonete para uso em outros módulos
export { CaixaDaLanchonete };
