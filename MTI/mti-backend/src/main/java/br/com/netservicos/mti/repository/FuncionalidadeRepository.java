package br.com.netservicos.mti.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbFuncionalidade;

/**
 * @author Leandro Celestino 24 de jul de 2018
 */
@Repository
public interface FuncionalidadeRepository extends PagingAndSortingRepository<TbFuncionalidade, Long> {
		
	@Query("SELECT u FROM TbFuncionalidade u")
	Page<TbFuncionalidade> obterTodos(Pageable pageable);
	
	/*@Query("SELECT u FROM TbFuncionalidade u   "
			+ " JOIN FETCH u.tbTipoFuncionalidade p")
	Page<TbFuncionalidade> obterTodos(Pageable pageable);*/
	
	@Query("SELECT c FROM TbFuncionalidade c WHERE c.tbTipoFuncionalidade.id = :id")
	Set<TbFuncionalidade> obterPorTipo(@Param("id") Long id);

	@Query("SELECT u FROM TbFuncionalidade u WHERE u.id not in(:listaIdsAssociados)")
	Page<TbFuncionalidade> obterFuncionalidadesDisponiveis(@Param("listaIdsAssociados") List<Long> listaIdsAssociados, Pageable pageable);
}
