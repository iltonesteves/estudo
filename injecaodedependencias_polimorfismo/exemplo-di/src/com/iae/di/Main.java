package com.iae.di;

import com.iae.di.modelo.Cliente;
import com.iae.di.notificacao.Notificador;
import com.iae.di.notificacao.NotificadorEmail;
import com.iae.di.notificacao.NotificadorSMS;
import com.iae.di.service.AtivacaoClienteService;

public class Main {

	public static void main(String[] args) {
		Cliente joao = new Cliente("João", "joao@xyz.com", "3499998888");
		Cliente maria = new Cliente("Maria", "maria@xyz.com", "1177772222");
		
		Notificador notificador = new NotificadorEmail();
		
		AtivacaoClienteService ativacaoCliente = new AtivacaoClienteService(notificador);
		ativacaoCliente.ativar(joao);
		ativacaoCliente.ativar(maria);
	}
	
}
