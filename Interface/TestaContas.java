/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Interface;

/**
 *
 * @author ghandi
 */
public class TestaContas {

	public static void main(String[] args) {

		ContaCorrente cc = new ContaCorrente();
		cc.depositar(1200.20);
		cc.sacar(300);

		ContaPoupanca cp = new ContaPoupanca();
		cp.depositar(500.50);
		cp.sacar(25);


		GeradorExtratos gerador = new GeradorExtratos();
		gerador.geradorConta(cc);
		gerador.geradorConta(cp);
	}

}