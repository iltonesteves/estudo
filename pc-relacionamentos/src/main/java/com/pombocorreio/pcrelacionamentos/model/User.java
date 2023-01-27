package com.pombocorreio.pcrelacionamentos.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="tb_user")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@Column(unique = true)
	private String email;
	private String senha;
	private LocalDateTime datacadastro; // = LocalDateTime.now()
	private LocalDateTime dataalteracao;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
			name = "tb_user_role",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id")
			)
	private Set<Role> roles =  new HashSet<>(); // não aceita repetição
	

	public User() {

	}

	public User(Long id, String name, String email, String senha, LocalDateTime dataCadastro, LocalDateTime dataAlteracao) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.senha = senha;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	
	
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", senha=" + senha + ", dataCadastro="
				+ datacadastro + ", dataAlteracao=" + dataalteracao + ", roles=" + roles + "]";
	}

}
