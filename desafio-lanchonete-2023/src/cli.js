
// Importa o módulo readline para lidar com a interação via linha de comando
import readline from 'readline';

// Importa a classe CaixaDaLanchonete do arquivo caixa-da-lanchonete.js
import { CaixaDaLanchonete } from './caixa-da-lanchonete.js';

// Cria uma instância da classe CaixaDaLanchonete
const caixa = new CaixaDaLanchonete();

// Cria uma interface readline para entrada e saída de texto
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Imprime uma mensagem de boas-vindas
console.log('Bem-vindo à Lanchonete CLIENTE!');
console.log('--------------------------');

// Define a função promptForItems para interagir com o usuário
function promptForItems() {
  // Pergunta ao usuário os itens desejados no formato "item,quantidade"
  rl.question('Digite os itens no formato "item,quantidade" separados por ponto e vírgula (ex: cafe,2;salgado,1): ', (itemsStr) => {
    // Divide a entrada em um array de itens usando o ponto e vírgula como separador
    const itemsArray = itemsStr.split(';');
    // Remove espaços em branco dos itens e cria um array de itens formatados
    const items = itemsArray.map(item => item.trim());

    // Pergunta ao usuário o método de pagamento desejado
    rl.question('Digite o método de pagamento (dinheiro, debito, credito): ', (metodoDePagamento) => {
      // Calcula o valor total da compra usando a instância do caixa e os itens informados
      const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, items);
      // Imprime o valor total da compra
      console.log('Valor total:', valorTotal);
      // Fecha a interface readline
      rl.close();
    });
  });
}

// Chama a função promptForItems para iniciar a interação com o usuário
promptForItems();

//////////////////////////////////////////////
//1.use node cli.js                         //
//2.coloque item,quantidade;item,quantidade //
//3.coloque metodo de pagamento             //
//////////////////////////////////////////////
