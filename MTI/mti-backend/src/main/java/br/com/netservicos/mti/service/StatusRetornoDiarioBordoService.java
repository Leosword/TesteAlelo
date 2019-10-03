package br.com.netservicos.mti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbStatusRetornoDiarioBordo;

/**
 * @author Leandro Celestino 24 de ago de 2018
 */
public interface StatusRetornoDiarioBordoService {

	Page<TbStatusRetornoDiarioBordo> obterTodos(Pageable pageable);
	
	TbStatusRetornoDiarioBordo obterPorId(Long id);
	
	TbStatusRetornoDiarioBordo obterPorNome(String nome);

}
