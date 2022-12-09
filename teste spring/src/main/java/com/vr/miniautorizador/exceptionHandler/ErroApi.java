
package com.vr.miniautorizador.exceptionHandler;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author ghandi
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
public class ErroApi {
    
    private Integer status;
    private LocalDateTime datahora;
    private String msg;
    private List<Campo> campos;
    
    @AllArgsConstructor
    @Getter
    public static class Campo{
        private String campo;
        private String mensagem;
    }
}
