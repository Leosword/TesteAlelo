package br.com.netservicos.mti.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbPerfil;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Repository
public interface PerfilRepository extends PagingAndSortingRepository<TbPerfil, Long> {
	
	@EntityGraph(value = TbPerfil.TODOS_RELACIONAMENTOS, type = EntityGraphType.FETCH)
	TbPerfil findOne(@Param("id") Long id);

	@Query("SELECT u FROM TbPerfil u WHERE u.id not in(:listaIdsAssociados)")
	Page<TbPerfil> obterPerfisDisponiveis(@Param("listaIdsAssociados") List<Long> listaIdsAssociados, Pageable pageable);
		
}
