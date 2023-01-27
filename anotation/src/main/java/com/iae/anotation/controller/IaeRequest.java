package com.iae.anotation.controller;

import com.iae.anotation.ValidaString;

public class IaeRequest {

	@ValidaString
	private String nome;

	public String getNome() {
		return nome;
	}
	
	
}
