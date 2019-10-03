package br.com.netservicos.mti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbMenu;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
public interface MenuService {

	Page<TbMenu> obterTodos(Pageable pageable);
	
	TbMenu obterPorId(Long id);
	
	void salvar(TbMenu perfil);
	
	TbMenu obterMenuComFuncionalidadesAssociadas(Long idMenu);

}
