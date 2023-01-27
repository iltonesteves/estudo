package com.pombocorreio.pcrelacionamentos;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.pombocorreio.pcrelacionamentos.model.Cliente;
import com.pombocorreio.pcrelacionamentos.model.Empresa;
import com.pombocorreio.pcrelacionamentos.model.Grupo;
import com.pombocorreio.pcrelacionamentos.model.Template;
import com.pombocorreio.pcrelacionamentos.model.User;

import java.time.LocalDateTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ConsultandoRegistrosTest {

	private static EntityManagerFactory entityManagerFactory;

	private EntityManager entityManager;

	@BeforeClass
	public static void setUpBeforeClass() {
		entityManagerFactory = Persistence.createEntityManagerFactory("pombocorreio");
	}

	@AfterClass
	public static void tearDownAfterClass() {
		entityManagerFactory.close();
	}

	@Before
	public void setUp() {
		entityManager = entityManagerFactory.createEntityManager();
	}

	@After
	public void tearDown() {
		entityManager.close();
	}

//	@Test
//	public void busarPorIdentificador() {
//		User user = entityManager.find(User.class, 1L);
//		System.out.println("................................. " + user.toString());
//		Assert.assertNotNull(user);
//		Assert.assertEquals("Nina Brown", user.getName());
//	}
//
//	@Test
//	public void atualizarAReferencia() {
//		User user = entityManager.find(User.class, 1L);
//		user.setName("NINA");
//
//		entityManager.refresh(user);
//		System.out.println("................................. " + user.getName());
//
//		Assert.assertEquals("Nina Brown", user.getName());
//	}
//	
//	@Test
//	public void incluirEmpresa() {
//		User user = entityManager.find(User.class, 1L);
//
//		Empresa empresa = new Empresa();
//		empresa.setEmail("curumim1@gmail.com");
//		empresa.setName("CURUMIM1");
//		empresa.setInscricao("22222222232");
//		empresa.setTelefone("2199977744");
//		
//		empresa.setUser(user);
//		
//		entityManager.getTransaction().begin();
//		entityManager.persist(empresa);
//		entityManager.refresh(empresa);
//		System.out.println("................................. " + empresa.toString());
//		entityManager.getTransaction().commit();
//		
//
//		entityManager.clear();
//	
//	Empresa empresaVerificacao = entityManager.find(Empresa.class, empresa.getId());
//	System.out.println("................................. " + empresaVerificacao.toString());
//	
//	}
//	@Test
//	public void listarEmpresa() {
//
//		Empresa empresa = entityManager.find(Empresa.class, 1L);
//		entityManager.refresh(empresa);
//		System.out.println("................................. " + empresa.toString());
//	}
	
//	@Test
//	public void incluirCliente() {
//		Empresa empresa = entityManager.find(Empresa.class, 1L);
//
//		Cliente cliente = new Cliente();
//		cliente.setEmail("aluno1@gmail.com");
//		cliente.setName("ALUNO1");
//		cliente.setEnvio("whatsapp");
//		cliente.setTelefone("2199977745");
//		cliente.setDatacadastro(LocalDateTime.now());
//		
//		cliente.setEmpresa(empresa);
//		
//		entityManager.getTransaction().begin();
//		entityManager.persist(cliente);
//		entityManager.refresh(cliente);
//		entityManager.getTransaction().commit();
//		
//
//		entityManager.clear();
//	
//		Cliente clienteVerificacao = entityManager.find(Cliente.class, cliente.getId());
//	System.out.println("................................. " + clienteVerificacao.toString());
//	
//	}
//
//	@Test
//	public void incluirGrupo() {
//		Empresa empresa = entityManager.find(Empresa.class, 1L);
//
//		Grupo grupo = new Grupo();
//		grupo.setName("Data de vencimento");
//		grupo.setDatainicio("24/01/2023");
//		grupo.setPeriodicidade("0");
//		grupo.setDatacadastro(LocalDateTime.now());
//		
//		grupo.setEmpresa(empresa);
//		
//		entityManager.getTransaction().begin();
//		entityManager.persist(grupo);
//		entityManager.refresh(grupo);
//		entityManager.getTransaction().commit();
//		
//
//		entityManager.clear();
//	
//		Grupo grupoVerificacao = entityManager.find(Grupo.class, grupo.getId());
//	System.out.println("................................. " + grupoVerificacao.toString());
//	
//	}

	@Test
	public void incluirTemplate() {
		Empresa empresa = entityManager.find(Empresa.class, 1L);

		Template template = new Template();
		template.setName("Data de vencimento");
		template.setType("WhatsApp");
		template.setBody("texto a ser impresso");
//		template.setDatacadastro(LocalDateTime.now());
		
		template.setEmpresa(empresa);
		
		entityManager.getTransaction().begin();
		entityManager.persist(template);
		entityManager.refresh(template);
		entityManager.getTransaction().commit();
		

		entityManager.clear();
	
		Template templateVerificacao = entityManager.find(Template.class, template.getId());
	System.out.println("................................. " + templateVerificacao.toString());
	
	}

}
