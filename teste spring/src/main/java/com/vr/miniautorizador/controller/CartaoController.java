package com.vr.miniautorizador.controller;

import com.vr.miniautorizador.assembler.CartaoAssembler;
import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.domain.domain.repository.CartaoRepository;
import com.vr.miniautorizador.domain.service.CartaoService;
import com.vr.miniautorizador.model.CartaoModel;
import java.util.List;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
@RequestMapping("/cartao")
public class CartaoController {

    private CartaoRepository cartaoRepository;
    private CartaoService cartaoService;
    private CartaoAssembler cartaoConvert;

    @GetMapping
    public List<CartaoModel> Listar() {

        return cartaoService.Listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CartaoModel> buscar(@PathVariable Long id) {
        return cartaoService.buscar(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CartaoModel cadastrar(@Valid @RequestBody Cartao cartao) {
        return cartaoService.cadastrar(cartao);
    }

    @PutMapping("/{id}/{senha}")
    public ResponseEntity<CartaoModel> atualizar(@PathVariable Long id, @PathVariable String senha, @Valid @RequestBody Cartao cartao) {
        ResponseEntity<CartaoModel> cartaoRetorno = cartaoService.atualizar(id, senha, cartao);
        return cartaoRetorno.ok(cartaoConvert.convert(cartao));
    }
}
