/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.vr.miniautorizador.domain.service.tests;

import com.vr.miniautorizador.domain.Movimento;
import com.vr.miniautorizador.domain.service.BuscarCartaoService;
import com.vr.miniautorizador.domain.service.CartaoService;
import com.vr.miniautorizador.domain.service.MovimentoService;
import com.vr.miniautorizador.model.MovimentoTransacao;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 *
 * @author ghandi
 */
@SpringBootTest
public class MovimentoServiceTest {

    @Autowired
    public MovimentoService movimentoService;

@Test
    public void deveRegistrarUmMovimentoComSucesso() {
        MovimentoTransacao movimentoTransacao = new MovimentoTransacao();
        movimentoTransacao.setNumeroCartao(2L);
        movimentoTransacao.setSenhaCartao("1234");
        movimentoTransacao.setDescricao("teste 1");
        movimentoTransacao.setValor(50.0);
        
        Movimento movimento = movimentoService.registrar(movimentoTransacao);
        
        Assertions.assertNotNull(movimento);

    }

}
