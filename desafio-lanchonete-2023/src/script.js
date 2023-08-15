import { Cardapio } from './Cardapio.js';
const cardapio = new Cardapio();
const listaDeItens = cardapio.getItens();

const menu = document.getElementById('menu');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalElement = document.getElementById('total');
const realizarPedidoButton = document.getElementById('realizar-pedido');

// Ao clicar no botão "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");

let carrinho = []; // Defina a variável carrinho como uma array vazia
let totalCompra = 0;

botoesAdicionar.forEach(botao => {
    botao.addEventListener("click", () => {
        const nome = botao.getAttribute("data-nome");
        const preco = botao.getAttribute("data-preco");

        // Chame a função para adicionar o item ao carrinho
        adicionarAoCarrinho(nome, preco);
    });
});

function adicionarAoCarrinho(nome, preco) {
    const itemCarrinho = document.createElement("li");
    itemCarrinho.textContent = `${nome} - R$ ${preco}`;
    itensCarrinho.appendChild(itemCarrinho);

    const precoItem = parseFloat(preco);
    totalCompra += precoItem;
    totalElement.textContent = `Total: R$ ${totalCompra.toFixed(2)}`;
}


realizarPedidoButton.addEventListener('click', () => {
    alert('Pedido realizado com sucesso!');
    carrinho = [];
    totalCompra = 0;
    renderizarCarrinho();
});
