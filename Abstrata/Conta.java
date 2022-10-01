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
abstract class Conta {

	private double saldo;

	public void setSaldo(double saldo) {
		this.saldo =  this.saldo + saldo;
	}

	public double getSaldo() {
		return saldo;
	}

	public abstract void imprimeExtrato();

}