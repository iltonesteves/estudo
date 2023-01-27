package com.pombocorreio.pcrelacionamentos.services.anotation;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;



public class BodyValidator implements ConstraintValidator<BodyValid, String> {
	
	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		System.out.println("value= "+value);
		return value.equalsIgnoreCase("iae");
	}

}