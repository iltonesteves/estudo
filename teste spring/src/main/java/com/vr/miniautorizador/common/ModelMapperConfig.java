
package com.vr.miniautorizador.common;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author ghandi
 */
@Configuration
public class ModelMapperConfig {
    
    @Bean
    public ModelMapper modelmapper(){
        return new ModelMapper();
    }
    
}
