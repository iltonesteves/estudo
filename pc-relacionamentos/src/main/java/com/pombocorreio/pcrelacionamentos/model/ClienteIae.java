package com.pombocorreio.pcrelacionamentos.model;

	import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;

import com.pombocorreio.pcrelacionamentos.services.anotation.Mostrar;


	public class ClienteIae {

	     private String nome;
	     private int codigo;
	     private Date dataNascimento;
	     private String nomePai;
	     private String nomeMae;
	     private String enderecoCompleto;

	     @Mostrar(valor = 5)
	     public String getNome() {
	           return nome;
	     }

	     public void setNome(String nome) {
	           this.nome = nome;
	     }


	     public int getCodigo() {
	           return codigo;
	     }

	     public void setCodigo(int codigo) {
	           this.codigo = codigo;
	     }

	     public Date getDataNascimento() {
	           return dataNascimento;
	     }


	     public void setDataNascimento(Date dataNascimento) {
	           this.dataNascimento = dataNascimento;
	     }

	     public String getNomePai() {
	           return nomePai;
	     }

	     public void setNomePai(String nomePai) {
	           this.nomePai = nomePai;
	     }

	     public String getNomeMae() {
	           return nomeMae;
	     }

	     public void setNomeMae(String nomeMae) {
	           this.nomeMae = nomeMae;
	     }


	     public String getEnderecoCompleto() {
	           return enderecoCompleto;
	     }

	     public void setEnderecoCompleto(String enderecoCompleto) {
	           this.enderecoCompleto = enderecoCompleto;
	     }
	}
