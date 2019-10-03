package br.com.netservicos.mti.service;

import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbFuncionalidade;

/**
 * @author Leandro Celestino 24 de jul de 2018
 */
public interface FuncionalidadeService {

	Page<TbFuncionalidade> obterTodos(Pageable pageable);
	
	TbFuncionalidade obterPorId(Long id);
	
	Set<TbFuncionalidade> obterPorTipo(Long id);
	
	void salvar(TbFuncionalidade perfil);
	
	void atualizar(TbFuncionalidade perfil);

	void desativar(List<TbFuncionalidade> perfil);

	Page<TbFuncionalidade> obterFuncionlidadesDisponiveis(List<Long> listaIdsAssociados, Pageable pageable);

}
