package br.com.netservicos.mti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbStatusFluxo;

/**
 * @author Leandro Celestino 13 de ago de 2018
 */
public interface StatusFluxoService {

	Page<TbStatusFluxo> obterTodos(Pageable pageable);
	
	TbStatusFluxo obterPorId(Long id);
	
	TbStatusFluxo obterPorNome(String nome);

}
