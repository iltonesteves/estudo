package com.iae.anotation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ValidadorString  implements ConstraintValidator<ValidaString, String>{

	@Override
	public boolean isValid(String string, ConstraintValidatorContext context) {


		return string.equalsIgnoreCase("IAE");
	}

}
