package com.iae.di;

import java.math.BigDecimal;

import com.iae.di.modelo.Cliente;
import com.iae.di.modelo.Produto;
import com.iae.di.notificacao.Notificador;
import com.iae.di.notificacao.NotificadorEmail;
import com.iae.di.notificacao.NotificadorSMS;
import com.iae.di.service.AtivacaoClienteService;
import com.iae.di.service.EmissaoNotaFiscalService;

public class Main {

	public static void main(String[] args) {
		Cliente joao = new Cliente("João", "joao@xyz.com", "3499998888");
		Cliente maria = new Cliente("Maria", "maria@xyz.com", "1177772222");
		
		Produto p1 = new Produto("café", new BigDecimal(10.00));
		Notificador notificador = new NotificadorSMS();
		
		AtivacaoClienteService ativacaoCliente = new AtivacaoClienteService(notificador);
		ativacaoCliente.ativar(joao);
		ativacaoCliente.ativar(maria);
		
		EmissaoNotaFiscalService emissaoNotaFiscalService = new EmissaoNotaFiscalService(notificador);
		emissaoNotaFiscalService.emitir(maria, p1);
	}
	
}
