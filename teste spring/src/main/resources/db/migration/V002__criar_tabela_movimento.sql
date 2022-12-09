create table movimento(
id int(10) not null auto_increment,
cartao_id int not null ,
descricao varchar(60) not null,
valor double not null,
data_criacao datetime,
primary key (id)
);

alter table movimento add constraint fk_movimento_cartao 
foreign key (cartao_id) references cartao(id);