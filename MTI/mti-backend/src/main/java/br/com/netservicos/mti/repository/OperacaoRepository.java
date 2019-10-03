package br.com.netservicos.mti.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.netservicos.mti.model.TbOperacao;

/**
 * @author Leandro Celestino 31 de jul de 2018
 */
@Repository
public interface OperacaoRepository extends PagingAndSortingRepository<TbOperacao, Long> {
	
		
}
