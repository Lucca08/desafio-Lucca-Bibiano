import { Cardapio } from './Cardapio.js';
const cardapio = new Cardapio();
const listaDeItens = cardapio.getItens();

const menu = document.getElementById('menu');
const itensCarrinho = document.getElementById('itens-carrinho');
const total = document.getElementById('total');
const realizarPedidoButton = document.getElementById('realizar-pedido');
function criarItemCardapio(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
      <h2>${item.nome}</h2>
      <img class="item-image" src="${item.imagem}" alt="${item.nome}">
      <p>Preço: R$ ${item.valor.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho('${item.nome}', ${item.valor})">Adicionar ao Carrinho</button>
    `;
    menu.appendChild(itemDiv);
  }

listaDeItens.forEach(criarItemCardapio);

let carrinho = [];
let totalCompra = 0;

function adicionarAoCarrinho(nome, preco) {
    const itemCarrinho = document.createElement("li");
    itemCarrinho.textContent = `${nome} - R$ ${preco}`;
    itensCarrinho.appendChild(itemCarrinho);

    const precoItem = parseFloat(preco);
    totalCarrinho += precoItem;
    totalElement.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
}

// Ao clicar no botão "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");

botoesAdicionar.forEach(botao => {
    botao.addEventListener("click", () => {
        const item = botao.parentElement;
        const nome = item.dataset.nome;
        const preco = item.dataset.preco;

        // Chame a função para adicionar o item ao carrinho
        adicionarAoCarrinho(nome, preco);
    });
});

function renderizarCarrinho() {
    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });
    total.textContent = `Total: R$ ${totalCompra.toFixed(2)}`;
}

realizarPedidoButton.addEventListener('click', () => {
    alert('Pedido realizado com sucesso!');
    carrinho = [];
    totalCompra = 0;
    renderizarCarrinho();
});
