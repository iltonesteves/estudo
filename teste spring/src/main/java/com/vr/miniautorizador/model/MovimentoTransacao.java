package com.vr.miniautorizador.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovimentoTransacao {

    @NotNull 
    private Long numeroCartao;
    
    @NotNull
    private Double valor;
    @NotNull
    private String senhaCartao;
    @NotNull
    private String descricao;

 }
