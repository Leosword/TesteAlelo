package br.com.netservicos.mti.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbPerfil;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
public interface PerfilService {

	Page<TbPerfil> obterTodos(Pageable pageable);
	
	TbPerfil obterPorId(Long id);
	
	void salvar(TbPerfil perfil);
	
	void atualizar(TbPerfil perfil);

	void desativar(TbPerfil perfil);

	Page<TbPerfil> obterPerfisDisponiveis(List<Long> listaIdsAssociados, Pageable pageable);

}
