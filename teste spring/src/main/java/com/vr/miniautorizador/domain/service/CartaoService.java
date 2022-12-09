package com.vr.miniautorizador.domain.service;

import com.vr.miniautorizador.assembler.CartaoAssembler;
import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.domain.TipoCartao;
import com.vr.miniautorizador.domain.domain.repository.CartaoRepository;
import com.vr.miniautorizador.domain.exception.CartaoException;
import com.vr.miniautorizador.model.CartaoModel;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ghandi
 */
@AllArgsConstructor
@Service
public class CartaoService {

    private CartaoRepository cartaoRepository;
    private CartaoAssembler cartaoConvert;

    @Transactional
    public CartaoModel cadastrar(Cartao cartao) {
        cartao.setTipoCartao(TipoCartao.VR);
        cartao.setDataCadastro(LocalDateTime.now());
        return cartaoConvert.convert(cartaoRepository.save(cartao));
    }

    @Transactional
    public List<CartaoModel> Listar() {

        return cartaoConvert.convertLista(cartaoRepository.findAll());
    }

    @Transactional
    public ResponseEntity<CartaoModel> buscar(Long id) {
        return cartaoRepository.findById(id)
                .map(cartao -> ResponseEntity.ok(cartaoConvert.convert(cartao)))
                .orElse(ResponseEntity.notFound().build());
    }

    @Transactional
    public ResponseEntity<CartaoModel> atualizar(Long id, String senha, Cartao cartao) {
        Optional<Cartao> cartaoObj = verificaCartaoSeExistente(id);
                
      cartaoObj=(cartaoObj!=null?validaSenha(senha,cartaoObj):cartaoObj);     
      
        cartao.setId(id);
        cartao.setTipoCartao(TipoCartao.VR);
        cartao.setDataCadastro(LocalDateTime.now());
        cartao = cartaoRepository.save(cartao);
        return ResponseEntity.ok(cartaoConvert.convert(cartao));
    }

   	public Optional<Cartao> verificaCartaoSeExistente(Long numeroCartao) {
		Optional<Cartao> obj = cartaoRepository.findById(numeroCartao);                       
                obj.orElseThrow(() -> new CartaoException("Cartão inexistente"));                
		return obj;

	}
        public Double consultarSaldo(Long numeroCartao) {
		Optional<Cartao> entity = cartaoRepository.findById(numeroCartao);
		Cartao cartao = entity.orElseThrow(() -> new CartaoException("Cartão inexistente"));
		return cartao.getSaldo_final();
	}
        
       public Optional<Cartao> validaSenha(String senha,Optional<Cartao> cartaoObj){
                cartaoObj
                        .filter(o -> o.getSenha().equals(senha))
                .orElseThrow(() -> new CartaoException("senha inválida"));         
           return cartaoObj;
       }
 
       public Optional<Cartao> validaSaldo(Double valor,Optional<Cartao> cartaoObj){
                cartaoObj
                        .filter(o -> o.getSaldo_final()>=valor)
                .orElseThrow(() -> new CartaoException("saldo insuficiente"));         
           return cartaoObj;
       }
}
