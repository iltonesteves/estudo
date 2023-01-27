package com.pombocorreio.pcrelacionamentos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.assertj.core.util.Arrays;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.pombocorreio.pcrelacionamentos.model.Cliente;
import com.pombocorreio.pcrelacionamentos.model.Empresa;
import com.pombocorreio.pcrelacionamentos.model.Grupo;

public class ConsultandoRegistrosManyToManyTest {

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

	@Test
	public void incluirGrupo() {
		Empresa empresa = entityManager.find(Empresa.class, 1L);

		Grupo grupo = new Grupo();
		grupo.setName("CURUMIM1");
		grupo.setPeriodicidade("0");

		grupo.setEmpresa(empresa);

		entityManager.getTransaction().begin();
		entityManager.persist(grupo);
		entityManager.refresh(grupo);
		System.out.println("................................. " + grupo.toString());
		entityManager.getTransaction().commit();

		entityManager.clear();

		Grupo grupoVerificacao = entityManager.find(Grupo.class, grupo.getId());
		System.out.println("................................. " + grupoVerificacao.toString());

	}

//	@Test
//	public void incluirClientesNoGrupo() {
//		List<Cliente> list = new ArrayList<>();
//		Cliente cliente = entityManager.find(Cliente.class, 1L);
//		list.add(cliente);
//		cliente = entityManager.find(Cliente.class, 2L);
//		list.add(cliente);
//		Grupo grupo = entityManager.find(Grupo.class, 1L);
//		grupo.setClientes(list);
//
//		entityManager.getTransaction().begin();
//		entityManager.persist(grupo);
//		entityManager.getTransaction().commit();
//
//		entityManager.clear();
//
//		Grupo grupoVerificacao = entityManager.find(Grupo.class, grupo.getId());
//		System.out.println("................................. " + grupoVerificacao.toString());
//
//	}

//	@Test
//	public void listarEmpresa() {
//
//		Grupo empresa = entityManager.find(Grupo.class, 1L);
//		entityManager.refresh(empresa);
//		System.out.println("................................. " + empresa.toString());
//	}

}
