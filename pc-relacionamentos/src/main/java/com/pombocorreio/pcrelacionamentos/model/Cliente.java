package com.pombocorreio.pcrelacionamentos.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_cliente")
public class Cliente implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Name;
	private String email;
	private String telefone;
	private String envio;
	private LocalDateTime datacadastro;
	private LocalDateTime dataalteracao;

	@ManyToOne
	private Empresa empresa;

	@ManyToMany(mappedBy = "clientes")
	private Set<Grupo> grupos;

	public Cliente() {

	}

	public Cliente(Long id, String name, String email, String telefone, String envio, LocalDateTime datacadastro,
			LocalDateTime dataalteracao, Empresa empresa) {
		super();
		this.id = id;
		Name = name;
		this.email = email;
		this.telefone = telefone;
		this.envio = envio;
		this.datacadastro = datacadastro;
		this.dataalteracao = dataalteracao;
		this.empresa = empresa;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String Name) {
		this.Name = Name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEnvio() {
		return envio;
	}

	public void setEnvio(String envio) {
		this.envio = envio;
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


	public Set<Grupo> getGrupos() {
		return grupos;
	}

	public void setGrupos(Set<Grupo> grupos) {
		this.grupos = grupos;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Name == null) ? 0 : Name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		if (Name == null) {
			if (other.Name != null)
				return false;
		} else if (!Name.equals(other.Name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", Name=" + Name + ", email=" + email + ", telefone=" + telefone + ", envio="
				+ envio + ", datacadastro=" + datacadastro + ", dataalteracao=" + dataalteracao + ", empresa=" + empresa
				+ "]";
	}

}
