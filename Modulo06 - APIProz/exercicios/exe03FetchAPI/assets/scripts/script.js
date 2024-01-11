const nomeProduto = document.getElementById("nome-produto");
const valorProduto = document.getElementById("valor-produto");
const descricaoProduto = document.getElementById("descricao-produto");
const btnEnviar = document.getElementById("btn-anunciar");
const feedbackUsuario = document.getElementById("feedback-usuario");
const produtosCadastrados = document.getElementById("produtos-cadastrados");
const baseURL = "https://httpbin.org";
const produtos = [];

/* Modelo de produto
  const produto = {
  produto: '',
  valor: '',
  descricao: ''
}; */

function formatarValorEmReais(valor) {
  const valorFormatado = valor.toFixed(2).replace(".", ",");
  return valorFormatado;
}

/* Função para exibir os produtos na section produto-cadastrado */
function exibeProdutos() {
  produtosCadastrados.innerHTML = "";
  produtos.forEach((produto) => {
    console.log(typeof produto.valor);
    const valorFormatado = formatarValorEmReais(Number(produto.valor));
    const produtoCadastrado = document.createElement("div");
    produtoCadastrado.classList.add("produto-cadastrado");
    produtoCadastrado.innerHTML = `
    <h2>${produto.produto}</h2>
    <p>R$ ${valorFormatado} reais.</p>
    <p>${produto.descricao}</p>
    </div>`;
    produtosCadastrados.prepend(produtoCadastrado);
  });
}
/* Função para atualizar a lista de produtos cadastrados no array produtos */
function atualizaProdutos() {}

/* Função para cadastrar um novo produto na API backEnd */
function cadastrarProduto(produto) {
  const prodCadastrado = fetch(`${baseURL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto), //aqui transforma javascript em stringJson
  })
    .then((response) => response.json())
    .then((data) => {
      produtos.push(JSON.parse(data.data)); //aqui transforma stringJson em javascript
      exibeProdutos();
      nomeProduto.value = "";
      valorProduto.value = "";
      descricaoProduto.value = "";
      feedbackUsuario.innerText = "Produto cadastrado com sucesso!";
      setTimeout(() => {
        feedbackUsuario.innerText = "";
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
      feedbackUsuario.innerText = "Erro ao cadastrar produto";
      setTimeout(() => {
        feedbackUsuario.innerText = "";
      }, 3000);
    });
}

/* evento para cadastrar um novo produto  */
btnEnviar.addEventListener("click", async function (evento) {
  evento.preventDefault();
  const regex = /^\d+(\.\d+)?$/;
  if (!regex.test(valorProduto.value)) {
    feedbackUsuario.innerText = "Valor inválido!";
    setTimeout(() => {
      feedbackUsuario.innerText = "";
    }, 3000);
    return;
  }
  if (
    nomeProduto.value == "" ||
    nomeProduto.value == undefined ||
    valorProduto.value == "" ||
    valorProduto.value == undefined ||
    descricaoProduto.value == "" ||
    descricaoProduto.value == undefined
  ) {
    feedbackUsuario.innerText = "Preencha todos os campos!";
    setTimeout(() => {
      feedbackUsuario.innerText = "";
    }, 3000);
  } else {
    const produto = {
      produto: nomeProduto.value,
      valor: valorProduto.value,
      descricao: descricaoProduto.value,
    };
    try {
      cadastrarProduto(produto);
    } catch (error) {
      console.log(error);
    }
  }
});
