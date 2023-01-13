package com.iae.di.service;

import com.iae.di.modelo.Cliente;
import com.iae.di.modelo.Produto;
import com.iae.di.notificacao.Notificador;

public class EmissaoNotaFiscalService {

	private Notificador notificador;
	
	public EmissaoNotaFiscalService(Notificador notificador) {
		this.notificador = notificador;
	}
	
	public void emitir(Cliente cliente, Produto produto) {
		
		this.notificador.notificar(cliente, "Nota fiscal do produto "
				+ produto.getNome() + " foi emitida!");
	}
	
}
