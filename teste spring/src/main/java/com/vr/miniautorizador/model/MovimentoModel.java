package com.vr.miniautorizador.model;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author ghandi
 */
@Getter
@Setter
public class MovimentoModel {

    private Long id;
    private String descricao;
    private Double valor;
    private LocalDateTime dataRegistro;

}
