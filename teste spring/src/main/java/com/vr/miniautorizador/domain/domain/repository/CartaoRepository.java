package com.vr.miniautorizador.domain.domain.repository;

import com.vr.miniautorizador.domain.Cartao;
import javax.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ghandi
 */
@Repository
public interface CartaoRepository extends JpaRepository<Cartao,Long>
{
    	@Query("SELECT u.saldo_final FROM Cartao u WHERE u.id = :numeroCartao")
	public Double consultaSaldo(Long numeroCartao);
        
        @Lock(LockModeType.PESSIMISTIC_WRITE)
       public Cartao save(Cartao cartao);

  }
