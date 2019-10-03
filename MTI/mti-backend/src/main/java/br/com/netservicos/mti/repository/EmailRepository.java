package br.com.netservicos.mti.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbEmail;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Repository
public interface EmailRepository extends PagingAndSortingRepository<TbEmail, Long> {

	@Query("SELECT u FROM TbEmail u WHERE u.tbStatusFluxo.id = :idStatusFluxo")
	Page<TbEmail> obterPorStatusFluxo(@Param("idStatusFluxo") Long idStatusFluxo, Pageable pageable);

}
