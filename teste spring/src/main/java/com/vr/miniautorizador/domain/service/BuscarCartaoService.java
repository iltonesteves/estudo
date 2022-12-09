package com.vr.miniautorizador.domain.service;

import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.domain.domain.repository.CartaoRepository;
import com.vr.miniautorizador.domain.exception.CartaoException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

/**
 *
 * @author ghandi
 */
@AllArgsConstructor
@Service
public class BuscarCartaoService {

    public CartaoRepository cartaoRepository;

    public Cartao buscar(Long cartaoId) {
        return cartaoRepository.findById(cartaoId)
                .orElseThrow(() -> new CartaoException("cartão não encontrato"));

    }
}
