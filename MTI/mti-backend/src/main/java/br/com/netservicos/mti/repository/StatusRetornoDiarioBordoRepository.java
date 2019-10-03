package br.com.netservicos.mti.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbStatusRetornoDiarioBordo;

/**
 * @author Leandro Celestino 24 de ago de 2018
 */
@Repository
public interface StatusRetornoDiarioBordoRepository extends PagingAndSortingRepository<TbStatusRetornoDiarioBordo, Long> {

	@Query("SELECT u FROM TbStatusRetornoDiarioBordo u WHERE u.nome = :nome")
	TbStatusRetornoDiarioBordo obterPorNome(@Param("nome") String nome);
		
}
