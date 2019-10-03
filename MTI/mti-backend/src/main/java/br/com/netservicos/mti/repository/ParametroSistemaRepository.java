package br.com.netservicos.mti.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbParametroSistema;

/**
 * @author Leandro Celestino 10 de ago de 2018
 */
@Repository
public interface ParametroSistemaRepository extends PagingAndSortingRepository<TbParametroSistema, Long> {
	
	@Query("SELECT u FROM TbParametroSistema u WHERE u.nome = :nome")
	TbParametroSistema obterPorNome(@Param("nome") String nome);
		
}
