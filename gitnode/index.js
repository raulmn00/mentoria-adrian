import { products } from './mockBanco.js';
import prompt from 'prompt-sync';

const readPrompt = prompt({});

const actualStorage = products;

function showMenu() {
  console.log('==================================================');
  console.log('1 - Ver lista de produtos');
  console.log('2 - Remover produto');
  console.log('3 - Adicionar produto');
  console.log('0 - Sair do programa');
  console.log('==================================================');
}

function addProduct(name, code, price, quantity) {
  const parsedObject = { name, code, price, quantity };

  actualStorage.push(parsedObject);
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
  console.log(`O produto ${name} foi adicionado com sucesso.`);
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
}

function removeProduct(code) {
  products.map((item, index) => {
    if (item.code === code) {
      actualStorage.splice(index, 1);
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
      console.log(`O item ${item.name} foi removido com sucesso.`);
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
    }
  });
}

function showListProducts(list) {
  list.forEach((item) => {
    console.log(
      `Nome: ${item.name} - Código: ${item.code} - Preço: R$ ${item.price} - Quantidade: ${item.quantity}`
    );
  });
}

function main() {
  let opt;
  while (opt !== '0') {
    showMenu();
    opt = readPrompt('Digite uma opção: ');

    if (opt === '1') {
      showListProducts(products);
    }
    if (opt === '2') {
      let code = parseInt(
        readPrompt('Qual o código do produto voce deseja remover: ')
      );
      removeProduct(code);
      code = '';
    }
    if (opt === '3') {
      let name = readPrompt('Digite o nome do produto: ');
      let code = parseInt(readPrompt('Digite o código do produto: '));
      let price = parseInt(readPrompt('Digite o preço do produto: '));
      let quantity = parseInt(
        readPrompt('Digite a quantidade de produtos que deseja adicionar: ')
      );

      addProduct(name, code, price, quantity);
    }
  }
}

main();
