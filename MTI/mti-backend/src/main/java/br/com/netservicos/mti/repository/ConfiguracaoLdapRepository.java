package br.com.netservicos.mti.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbConfiguracaoLdap;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@Repository
public interface ConfiguracaoLdapRepository extends PagingAndSortingRepository<TbConfiguracaoLdap, Long> {
	
	@Query("SELECT c FROM TbConfiguracaoLdap c WHERE c.excluido = :status")
	Page<TbConfiguracaoLdap> obterPorStatus(Pageable pageable, @Param("status") String status);

	@Query("SELECT c FROM TbConfiguracaoLdap c WHERE c.excluido = :status and c.tbDominioLdap.id = :idDominio")
	Page<TbConfiguracaoLdap> obterPorDominioStatus(Pageable pageable, @Param("idDominio") Long idDominio,
			@Param("status") String status);
}
