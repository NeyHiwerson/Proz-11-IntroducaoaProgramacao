const nome: string = "João Paulo Bernadino";
const idade: number = 30;
let ativo: boolean = true;
const data: Date = new Date();

function obterStatusMatricula(ativo: boolean): string {
  return ativo ? "está matriculado" : "não está matriculado";
}

const mensagem: string = `O aluno ${nome}, idade ${idade} anos,
na data ${data.toLocaleDateString("pt-BR")} ${obterStatusMatricula(ativo)} nesta academia.`;

console.log(mensagem);

const btnVerificaAluno: HTMLButtonElement | null = document.querySelector("#btnVerificaAluno");
btnVerificaAluno?.addEventListener("click", () => {
    const inputNomeCompleto: HTMLInputElement | null = document.querySelector("#inputNomeCompleto");
    verificaAluno(inputNomeCompleto?.value || null);
});

function verificaAluno(inputNome: string | null) {
    if (inputNome === nome) {
        ativo = true;
        alert(`O aluno ${inputNome}, na data ${data.toLocaleDateString("pt-BR")}
         ${obterStatusMatricula(ativo)} nesta academia.`);
    } else {
        ativo = false;
        alert(`O aluno ${inputNome}, na data ${data.toLocaleDateString("pt-BR")}
      ${obterStatusMatricula(ativo)} nesta academia.`);
    }
}

//***********************
const titulo: HTMLHeadingElement | null = document.querySelector('h1');

// na expressão abaixo bem genérica esse é o retorno: Element | null
const link = document.querySelector('#linkId');
//porem se vc for usar algum metodo do elemento ele vai acusar erro
//por isso usamos o cast: (link as HTMLAnchorElement).href;

//podemos usar o typeof para verificar o tipo de dado
//console.log(typeof link);

//podemos usar o any para receber qualquer tipo de dado
//o any faz a variavel se comportar como javascript

let tudo: any = "teste";
console.log(typeof tudo);
console.log(tudo);
tudo = 10;
console.log(typeof tudo);
console.log(tudo);
tudo = true;
console.log(typeof tudo);
console.log(tudo);
