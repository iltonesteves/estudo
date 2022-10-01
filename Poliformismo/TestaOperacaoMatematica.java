/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Poliformismo;

/**
 *
 * @author ghandi
 */
public class TestaOperacaoMatematica {

	//EXECUTA A OPERACAO - COM POLIMORFISMO
	public static void calculaOperacao(OperacaoMatematica o, double x, double y){
		System.out.println(o.calcular(x, y));
	}

	public static void main(String[] args) {
		calculaOperacao (new Soma(), 2500, 200);
		calculaOperacao (new Multiplicacao(), 10, 10);
	}
}