import { prateleira } from './mockBanco.js';
import PromptSync from 'prompt-sync';

/*
. Adicionar um produto - 1;
		. Remover um produto - 2;
		. Ver o total da compra -3;
		. Fechar o software - 4;
		. Ver a lista de produtos - 5;
		. Terminar a compra - 6;
*/

const readPrompt = PromptSync({});

const shopCart = [];

function showMenu() {
  console.log('==============================================================');

  console.log('1 - Adicionar um produto');
  console.log('2 - Remover um produto');
  console.log('3 - Ver o total da compra');
  console.log('4 - Ver a lista de produtos');
  console.log('5 - Fechar a compra');
  console.log('0 - Fechar o software');

  console.log('==============================================================');
}

// fechar compra
function closeBill() {}

// listar produtos
function listProdutos() {}

// ver total da compra
function totalShop() {}

// remover produto
function removeProduct() {}

// adicionar produto
function addProduct(code) {
  const findedProduct = prateleira.find((item) => item.code === code);

  // validar se achou um produto: se achou, adiciona o produto, senão, console.log numa mensagem para o usuário

  console.log(findedProduct);
}

function init() {
  let option;

  while (option !== 0) {
    showMenu();
    option = parseInt(readPrompt('Digite sua opção: '));
    if (option === 1) {
      let productCode = parseInt(
        readPrompt('Digite o código do produto que voce quer adicionar: ')
      );
      addProduct(productCode);
      productCode = '';
    }
  }
}

init();
