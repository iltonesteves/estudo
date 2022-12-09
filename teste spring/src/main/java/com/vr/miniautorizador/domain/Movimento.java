package com.vr.miniautorizador.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Version;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author ghandi
 */
@Getter
@Setter
@Entity
public class Movimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Cartao cartao;
    @NotBlank
    @Size(max = 60)
    private String descricao;

    private Double valor;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime dataRegistro;
}
