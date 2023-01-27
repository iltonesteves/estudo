package com.pombocorreio.pcrelacionamentos.services.anotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = BodyValidator.class)
@Target({ ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)

public @interface BodyValid {
	String message() default "Validation error";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}
