const nome: string = "João Paulo";
const idade: number = 30;
const ativo: boolean = false;
const data: Date = new Date();
const matriculado: string = ativo? "está matriculado": "não está matriculado";
const mensagem: string = `O aluno ${nome}, idade ${idade} anos, ${matriculado} nesta academia.`;
 console.log(mensagem);
