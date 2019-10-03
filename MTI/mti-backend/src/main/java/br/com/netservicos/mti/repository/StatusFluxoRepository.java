package br.com.netservicos.mti.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbStatusFluxo;

/**
 * @author Leandro Celestino 13 de ago de 2018
 */
@Repository
public interface StatusFluxoRepository extends PagingAndSortingRepository<TbStatusFluxo, Long> {

	@Query("SELECT u FROM TbStatusFluxo u WHERE u.nome = :nome")
	TbStatusFluxo obterPorNome(@Param("nome") String nome);
		
}
