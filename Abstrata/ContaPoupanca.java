/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Abstrata;

/**
 *
 * @author ghandi
 */
import java.text.SimpleDateFormat;
import java.util.Date;

public class ContaPoupanca extends Conta {

	@Override
	public void imprimeExtrato() {
		System.out.println("### Extrato da Conta ###");

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/aaaa HH:mm:ss");
		Date date = new Date();

		System.out.println("Saldo: "+this.getSaldo());
		System.out.println("Data: "+sdf.format(date));

	}
}
