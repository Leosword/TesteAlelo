package br.com.netservicos.mti.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbDominioLdap;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@Repository
public interface DominioLdapRepository extends PagingAndSortingRepository<TbDominioLdap, Long>{
	
	@Query("SELECT c FROM TbDominioLdap c WHERE c.excluido = :status")
	Page<TbDominioLdap> obterPorStatus(Pageable pageable, @Param("status") String status);
	
	@Query("SELECT c FROM TbDominioLdap c WHERE c.nome = :nome ")
	TbDominioLdap obterPorNome(@Param("nome") String nome);
}
