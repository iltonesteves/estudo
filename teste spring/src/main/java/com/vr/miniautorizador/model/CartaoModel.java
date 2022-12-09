package com.vr.miniautorizador.model;

import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.domain.Movimento;
import com.vr.miniautorizador.domain.TipoCartao;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author ghandi
 */
@Getter
@Setter
public class CartaoModel {

    private Long id;
    private Double saldo_inicial;
    private Double saldo_final;
    private LocalDateTime dataCadastro;
    private TipoCartao tipoCartao;
    private List<Movimento> movimentos;
}
