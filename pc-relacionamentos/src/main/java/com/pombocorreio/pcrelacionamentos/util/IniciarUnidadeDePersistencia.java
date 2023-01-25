package com.pombocorreio.pcrelacionamentos.util;

import com.pombocorreio.pcrelacionamentos.model.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class IniciarUnidadeDePersistencia {

	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("pombocorreio");
		EntityManager entityManager = entityManagerFactory.createEntityManager();

		User user = entityManager.find(User.class, 2L);
		System.out.println(user.toString());

		entityManager.close();
		entityManagerFactory.close();
	}
}
