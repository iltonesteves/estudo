create table cartao(
id int(10) not null auto_increment,
senha varchar(6) not null,
saldo_inicial double not null,
saldo_final double not null,
tipo_cartao varchar(2) not null,
data_criacao datetime,

primary key (id)
);


