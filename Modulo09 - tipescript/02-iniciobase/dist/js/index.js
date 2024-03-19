"use strict";
const nome = "João Paulo Bernadino";
const idade = 30;
let ativo = true;
const data = new Date();
function obterStatusMatricula(ativo) {
    return ativo ? "está matriculado" : "não está matriculado";
}
const mensagem = `O aluno ${nome}, idade ${idade} anos,
na data ${data.toLocaleDateString("pt-BR")} ${obterStatusMatricula(ativo)} nesta academia.`;
console.log(mensagem);
const btnVerificaAluno = document.querySelector("#btnVerificaAluno");
btnVerificaAluno === null || btnVerificaAluno === void 0 ? void 0 : btnVerificaAluno.addEventListener("click", () => {
    const inputNomeCompleto = document.querySelector("#inputNomeCompleto");
    verificaAluno((inputNomeCompleto === null || inputNomeCompleto === void 0 ? void 0 : inputNomeCompleto.value) || null);
});
function verificaAluno(inputNome) {
    if (inputNome === nome) {
        ativo = true;
        alert(`O aluno ${inputNome}, na data ${data.toLocaleDateString("pt-BR")}
         ${obterStatusMatricula(ativo)} nesta academia.`);
    }
    else {
        ativo = false;
        alert(`O aluno ${inputNome}, na data ${data.toLocaleDateString("pt-BR")}
      ${obterStatusMatricula(ativo)} nesta academia.`);
    }
}
//***********************
const titulo = document.querySelector('h1');
// na expressão abaixo bem genérica esse é o retorno: Element | null
const link = document.querySelector('#linkId');
//porem se vc for usar algum metodo do elemento ele vai acusar erro
//por isso usamos o cast: (link as HTMLAnchorElement).href;
//podemos usar o typeof para verificar o tipo de dado
//console.log(typeof link);
//podemos usar o any para receber qualquer tipo de dado
//o any faz a variavel se comportar como javascript
let tudo = "teste";
console.log(typeof tudo);
console.log(tudo);
tudo = 10;
console.log(typeof tudo);
console.log(tudo);
tudo = true;
console.log(typeof tudo);
console.log(tudo);
