"use strict";
const nome = "João Paulo";
const idade = 30;
const ativo = false;
const data = new Date();
const matriculado = ativo ? "está matriculado" : "não está matriculado";
const mensagem = `O aluno ${nome}, idade ${idade} anos, ${matriculado} nesta academia.`;
console.log(mensagem);
