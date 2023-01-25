package com.pombocorreio.pcrelacionamentos.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_grupo")
public class Grupo implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String datainicio;
	private String periodicidade;
	private LocalDateTime datacadastro; // = LocalDateTime.now()
	private LocalDateTime dataalteracao;
	
	@ManyToMany
	@JoinTable(name="tb_grupo_cliente", joinColumns = @JoinColumn(name = "grupo_id"), 
	                                 inverseJoinColumns = @JoinColumn(name = "cliente_id"))
	private List<Cliente> clientes;

	@ManyToOne
	private Empresa empresa;

	public Grupo() {

	}

	public Grupo(Long id, String name, String datainicio, String periodicidade, LocalDateTime datacadastro,
			LocalDateTime dataalteracao) {
		super();
		this.id = id;
		this.name = name;
		this.datainicio = datainicio;
		this.periodicidade = periodicidade;
		this.datacadastro = datacadastro;
		this.dataalteracao = dataalteracao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDateTime getDatacadastro() {
		return datacadastro;
	}

	public void setDatacadastro(LocalDateTime datacadastro) {
		this.datacadastro = datacadastro;
	}

	public LocalDateTime getDataalteracao() {
		return dataalteracao;
	}

	public void setDataalteracao(LocalDateTime dataalteracao) {
		this.dataalteracao = dataalteracao;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public List<Cliente> getClientes() {
		return clientes;
	}

	public void setClientes(List<Cliente> list) {
		this.clientes = list;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	public String getDatainicio() {
		return datainicio;
	}

	public void setDatainicio(String datainicio) {
		this.datainicio = datainicio;
	}

	public String getPeriodicidade() {
		return periodicidade;
	}

	public void setPeriodicidade(String periodicidade) {
		this.periodicidade = periodicidade;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Grupo other = (Grupo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Grupo [id=" + id + ", name=" + name + ", datainicio=" + datainicio + ", periodicidade=" + periodicidade
				+ ", datacadastro=" + datacadastro + ", dataalteracao=" + dataalteracao + ", clientes=" + clientes
				+ ", empresa=" + empresa + "]";
	}


}
