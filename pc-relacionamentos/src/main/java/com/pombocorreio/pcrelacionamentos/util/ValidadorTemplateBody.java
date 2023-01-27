package com.pombocorreio.pcrelacionamentos.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.Period;
import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.pombocorreio.pcrelacionamentos.model.ClienteIae;
import com.pombocorreio.pcrelacionamentos.model.Template;
import com.pombocorreio.pcrelacionamentos.services.anotation.IdadeMinima;
import com.pombocorreio.pcrelacionamentos.services.anotation.Mostrar;

public class ValidadorTemplateBody {

	public static void main(String[] args) {
		Template template =  new Template();
		template.setDatacadastro(LocalDate.of(1900, Month.MARCH, 14));
//		System.out.println(template.toString());
		System.out.println(validador(template));
	}
	
//	public static void main(String[] args) {
//		   ClienteIae cliente = new ClienteIae();
//		   cliente.setCodigo(1010);
//		   cliente.setDataNascimento(new Date());
//		    cliente.setEnderecoCompleto("Rua ABC, Bairro YHU nº 190");
//		   cliente.setNome("Antonio da Silva Nunes");
//		   cliente.setNomeMae("Maria da Silva Nunes");
//		   cliente.setNomePai("Joao da Silva Nunes");
//
//		   mostrarValores(cliente);
//		}
    public static void mostrarValores(Object obj) {
	    try {
	       Class clazz = obj.getClass();
	       for (Method m : clazz.getDeclaredMethods()) {
	          if (m.isAnnotationPresent(Mostrar.class)){
	             if (m.getParameterTypes().length > 0){
	                 System.err.println(" "+m.getName()+" anotado com  @Mostrar de forma errada, ignorando ...");
	                 continue;
	             }
	             System.out.println(m.getAnnotation(Mostrar.class).valor());
	             System.out.println(m.getTypeParameters().length + "  ->" + m.getName()+": "+m.invoke(obj));
	          }
	       }
	    } catch (IllegalAccessException | IllegalArgumentException
	                  | InvocationTargetException e) {
	           // TODO Auto-generated catch block
	           e.printStackTrace();
	    }
	}

    public static <T> String validador(T objeto) {
    	   Class<?> classe = objeto.getClass();
    	   for (Field field : classe.getDeclaredFields()) {
    	      if (field.isAnnotationPresent(IdadeMinima.class)) {
    	         IdadeMinima idadeMinima = field.getAnnotation(IdadeMinima.class);
    	         try{
    	            field.setAccessible(true);
    	            System.out.println(field.getName() + "   tipo= " + field.getType());
    	            LocalDate dataNascimento = (LocalDate) field.get(objeto);
    	            return Period.between(dataNascimento, LocalDate.now()).getYears() >= idadeMinima.valor()
    	            		?String.valueOf(LocalDate.now().getYear()) + " : "+dataNascimento:"nok";
    	         } catch (IllegalAccessException e) {
    	              e.printStackTrace();
    	         }
    	      }
    	   }
    	   return "nok";
    	}
}
