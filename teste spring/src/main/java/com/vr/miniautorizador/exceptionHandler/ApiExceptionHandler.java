package com.vr.miniautorizador.exceptionHandler;

import com.vr.miniautorizador.domain.exception.CartaoException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 *
 * @author ghandi
 */
@ControllerAdvice
@AllArgsConstructor
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    private MessageSource mensagens;

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<ErroApi.Campo> campos = new ArrayList<>();

        for (ObjectError er : ex.getBindingResult().getAllErrors()) {
            campos.add(new ErroApi.Campo(((FieldError) er).getField(),
                    mensagens.getMessage(er, LocaleContextHolder.getLocale())));
        }

        ErroApi erroApi = new ErroApi();
        erroApi.setStatus(status.value());
        erroApi.setMsg("campos invalidos! reentre!");
        erroApi.setDatahora(LocalDateTime.now());
        erroApi.setCampos(campos);
        return handleExceptionInternal(ex, erroApi, headers, status, request);
    }

    @ExceptionHandler(CartaoException.class)
    public ResponseEntity<Object> cartaoNegocio(CartaoException ex, WebRequest request) {

        ErroApi erroApi = new ErroApi();
        erroApi.setStatus(HttpStatus.BAD_REQUEST.value());
        erroApi.setMsg(ex.getMessage());
        erroApi.setDatahora(LocalDateTime.now());

        return handleExceptionInternal(ex, erroApi, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);

    }

}
