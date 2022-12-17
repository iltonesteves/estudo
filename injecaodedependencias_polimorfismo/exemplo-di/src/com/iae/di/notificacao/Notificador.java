package com.iae.di.notificacao;

import com.iae.di.modelo.Cliente;

public interface Notificador {

	void notificar(Cliente cliente, String mensagem);
	
}
