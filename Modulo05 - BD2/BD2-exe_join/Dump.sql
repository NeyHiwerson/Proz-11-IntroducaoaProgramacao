create database programeja;
use programeja;

create table disciplinas (
	id_disciplina int auto_increment Primary KEY,
  nome_disciplina varchar(50) not null,
  nome_professor varchar(50) not null
);
