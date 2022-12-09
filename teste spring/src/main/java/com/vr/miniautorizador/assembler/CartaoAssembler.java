package com.vr.miniautorizador.assembler;

import com.vr.miniautorizador.domain.Cartao;
import com.vr.miniautorizador.model.CartaoModel;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

/**
 *
 * @author ghandi
 */
@AllArgsConstructor
@Component
public class CartaoAssembler {

    private ModelMapper modelMapper;

    public CartaoModel convert(Cartao cartao) {
        return modelMapper.map(cartao, CartaoModel.class);
    }
    
    public List<CartaoModel> convertLista(List<Cartao> cartaos){
        return cartaos.stream()
                .map(this::convert)
                .collect(Collectors.toList());
    }
}
