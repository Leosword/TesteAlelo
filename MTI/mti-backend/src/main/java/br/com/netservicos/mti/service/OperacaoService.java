package br.com.netservicos.mti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbOperacao;

/**
 * @author Leandro Celestino 31 de jul de 2018
 */
public interface OperacaoService {

	Page<TbOperacao> obterTodos(Pageable pageable);
	
	TbOperacao obterPorId(Long id);
	
	void salvar(TbOperacao perfil);
	
	void atualizar(TbOperacao perfil);

	void desativar(TbOperacao perfil);

}
