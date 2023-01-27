package com.iae.anotation.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/personagens")
public class IaeController {

	@PostMapping("/")
	public String validaIae(@RequestBody @Validated IaeRequest request) {
		
		
		return "Validação efetuada com sucesso";
	}
}
