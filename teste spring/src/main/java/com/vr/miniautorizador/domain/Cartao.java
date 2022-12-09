package com.vr.miniautorizador.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author ghandi
 */
@Entity
@Table(name = "cartao")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cartao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Size(max = 6)
    private String senha;
    private Double saldo_inicial;
    private Double saldo_final;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime dataCadastro;
    @Enumerated(EnumType.STRING)
    private TipoCartao tipoCartao;

    @JsonIgnore
    @OneToMany(mappedBy = "cartao", cascade = CascadeType.ALL)
    private List<Movimento> movimentos = new ArrayList<>();



    public Movimento adicionarMovimento(String descricao, double valor) {
        Movimento movimento = new Movimento();
        movimento.setDescricao(descricao);
        movimento.setValor(valor);
        movimento.setDataRegistro(LocalDateTime.now());
        movimento.setCartao(this);
        this.getMovimentos().add(movimento);
        return movimento;
    }
}
