create database programeja;
use programeja;

create table disciplinas (
	id_disciplina int auto_increment Primary KEY,
  nome_disciplina varchar(50) not null,
  nome_professor varchar(50) not null
);

/* create table tipo_cliente (
id int auto_increment Primary KEY,
descricao varchar(50)
);

create table cliente (
id int,
nome varchar(50),
idade int,
tp_cliente int,
endereco varchar(150),
constraint PK_CLIENTE primary key (id),
constraint FK_TP_CLIENTE foreign key (tp_cliente) references tipo_cliente (id));


create table dependente (
id int,
nome varchar(50),
idade int,
id_cliente int,
constraint PK_CLIENTE primary key (id),
constraint FK_CLIENTE foreign key (id_cliente) references cliente (id));

insert into tipo_cliente values (1, 'NOVO');
insert into tipo_cliente values (2, 'FIDELIZADO');
insert into tipo_cliente values (3, 'PROBLEM TICO');


INSERT INTO CLIENTE VALUES (1, 'JO O', 30, 1, 'RUA ABC');

INSERT INTO CLIENTE VALUES (2, 'PAULO', 32, 2, 'RUA 123');
INSERT INTO CLIENTE VALUES (3, 'JOS ', 40, 2, 'RUA HJY');
INSERT INTO CLIENTE VALUES (4, 'MARIA', 27, 1, 'RUA AAA');
INSERT INTO CLIENTE VALUES (5, 'CLAUDIA', 28, 1, 'RUA KKK');
INSERT INTO CLIENTE VALUES (6, 'MARIANA', 22, 2, 'RUA LLL');
INSERT INTO CLIENTE VALUES (7, 'JULIANA', 30, 2, 'RUA OOO');

INSERT INTO DEPENDENTE VALUES (1, 'JO OZINHO', 12, 1);
INSERT INTO DEPENDENTE VALUES (2, 'MARIAZINHA', 10, 1);

INSERT INTO DEPENDENTE VALUES (3, 'PAULINHO', 12, 2);
INSERT INTO DEPENDENTE VALUES (4, 'JOAQUINA', 10, 2);

INSERT INTO DEPENDENTE VALUES (5, 'PAULINHO', 12, 3);

INSERT INTO DEPENDENTE VALUES (6, 'ZEZINHO', 8, 4);

select nome, idade from cliente
right join tipo_cliente
on tipo_cliente.id = cliente.id;

select nome, idade from cliente
left join tipo_cliente
on tipo_cliente.id = cliente.id;

select nome, idade from cliente
left join tipo_cliente
on tipo_cliente.id = cliente.id
union
select nome,idade from cliente
right join tipo_cliente
on tipo_cliente.id = cliente.id; */
