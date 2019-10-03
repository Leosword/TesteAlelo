package br.com.netservicos.mti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.enumerator.ParametroSistema;
import br.com.netservicos.mti.model.TbParametroSistema;

/**
 * @author Leandro Celestino 10 de ago de 2018
 */
public interface ParametroSistemaService {

	Page<TbParametroSistema> obterTodos(Pageable pageable);
	
	TbParametroSistema obterPorId(Long id);
	
	TbParametroSistema obterPorNome(String nome);
	 
	void salvar(TbParametroSistema parametroSistema);

	Integer obterParametroSistema(ParametroSistema parametroSistema) throws Exception;
}
