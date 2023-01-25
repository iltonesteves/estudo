package com.pombocorreio.pcrelacionamentos.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_template")
public class Template implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String type;
	private String body;
	private LocalDateTime datacadastro; // = LocalDateTime.now()
	private LocalDateTime dataalteracao;

	@ManyToOne
	private Empresa empresa;

	public Template() {

	}

	public Template(Long id, String name, String type, String body, LocalDateTime datacadastro,
			LocalDateTime dataalteracao) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.body = body;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Template other = (Template) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Template [id=" + id + ", name=" + name + ", type=" + type + ", body=" + body + ", datacadastro="
				+ datacadastro + ", dataalteracao=" + dataalteracao + ", empresa=" + empresa + "]";
	}


}
