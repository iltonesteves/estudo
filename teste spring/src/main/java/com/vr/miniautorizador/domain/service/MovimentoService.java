package com.vr.miniautorizador.domain.service;

import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.domain.Movimento;
import com.vr.miniautorizador.model.MovimentoTransacao;
import com.vr.miniautorizador.model.MovimentoModel;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ghandi
 */
@AllArgsConstructor
@Service
public class MovimentoService {

    public CartaoService cartaoService;
    public BuscarCartaoService buscarCartaoService;

    @Transactional
    public Movimento registrar(MovimentoTransacao movimentoTransacao) {
        Optional<Cartao> cartaoObj = cartaoService.verificaCartaoSeExistente(movimentoTransacao.getNumeroCartao());
        cartaoObj = (cartaoObj != null ? cartaoService.validaSenha(movimentoTransacao.getSenhaCartao(), cartaoObj) : cartaoObj);
        cartaoObj = (cartaoObj != null ? cartaoService.validaSaldo(movimentoTransacao.getValor(), cartaoObj) : cartaoObj);

        Cartao cartao = cartaoObj.get();
        cartao.setSaldo_final(cartao.getSaldo_final() - movimentoTransacao.getValor());
        return cartao.adicionarMovimento(movimentoTransacao.getDescricao(), movimentoTransacao.getValor());
    }
}
