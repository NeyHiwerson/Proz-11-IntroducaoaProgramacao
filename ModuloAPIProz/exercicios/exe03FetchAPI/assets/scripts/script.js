const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-anunciar');
const feedbackUsuario = document.getElementById('feedback-usuario');
const produtosCadastrados = document.getElementById('produtos-cadastrados');
const baseURL = 'https://httpbin.org';
const produtos = [
  {
    produto: 'sabonete',
    valor: '200',
    descricao: 'faz espuma'
  },
  {
    produto: 'sabonete',
    valor: '200',
    descricao: 'faz espuma'
  },
  {
    produto: 'sabonete',
    valor: '200',
    descricao: 'faz espuma'
  },
  {
    produto: 'sabonete',
    valor: '200',
    descricao: 'faz espuma'
  },
];

/* Modelo de produto
  const produto = {
  produto: '',
  valor: '',
  descricao: ''
}; */

/* Função para exibir os produtos na section produto-cadastrado */
function exibeProdutos(){
  produtosCadastrados.innerHTML = '';
  produtos.forEach(produto => {
    const produtoCadastrado = document.createElement('div');
    produtoCadastrado.classList.add('produto-cadastrado');
    produtoCadastrado.innerHTML = `
    <h2>${produto.produto}</h2>
    <p>R$ ${produto.valor} reais.</p>
    <p>${produto.descricao}</p>
    </div>`
    produtosCadastrados.prepend(produtoCadastrado);
  });
};
/* Função para atualizar a lista de produtos cadastrados no array produtos */
function atualizaProdutos(){

};

/* Função para cadastrar um novo produto na API backEnd */
function cadastrarProduto(){

};

/* evento para cadastrar um novo produto  */
btnEnviar.addEventListener('click', () => {
  cadastrarProduto();
  atualizaProdutos();
  exibeProdutos();
});
exibeProdutos();
