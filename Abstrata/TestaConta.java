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
public class TestaConta {
	public static void main(String[] args) {
		Conta cp = new ContaPoupanca();
		cp.setSaldo(2100);
		cp.setSaldo(21);
		cp.imprimeExtrato();

	}
}