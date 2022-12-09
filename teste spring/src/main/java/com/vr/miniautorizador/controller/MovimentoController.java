package com.vr.miniautorizador.controller;

import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.domain.Movimento;
import com.vr.miniautorizador.model.MovimentoTransacao;
import com.vr.miniautorizador.domain.service.MovimentoService;
import com.vr.miniautorizador.model.CartaoModel;
import com.vr.miniautorizador.model.MovimentoModel;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ghandi
 */
@AllArgsConstructor
@RestController
@RequestMapping("/transacoes")
public class MovimentoController {

    
    private MovimentoService movimentoService;
    
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Movimento registrar(@Valid @RequestBody MovimentoTransacao movimentoTransacao) {
        System.out.println("...................... " + movimentoTransacao.getValor());
        return movimentoService.registrar(movimentoTransacao);
    }
}
