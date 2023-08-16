
//interface de linha de comando


import readline from 'readline';
import { CaixaDaLanchonete } from './caixa-da-lanchonete.js';

const caixa = new CaixaDaLanchonete();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo à Lanchonete CLIENTE!');
console.log('--------------------------');

function promptForItems() {
  rl.question('Digite os itens no formato "item,quantidade" separados por ponto e vírgula (ex: cafe,2;salgado,1): ', (itemsStr) => {
    const itemsArray = itemsStr.split(';');
    const items = itemsArray.map(item => item.trim());
    rl.question('Digite o método de pagamento (dinheiro, debito, credito): ', (metodoDePagamento) => {
      const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, items);    
      console.log('Valor total:', valorTotal);
      rl.close();
    });
  });
}

promptForItems();

//////////////////////////////////////////////
//1.vá para o diretorio src                 //
//2.use node cli.js                         //
//3.coloque item,quantidade;item,quantidade //
//4.coloque metodo de pagamento             //
//////////////////////////////////////////////
