package br.com.netservicos.mti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.netservicos.mti.model.TbUsuario;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
public interface UsuarioService {
	
	TbUsuario obterPorId(Long id);
	
	TbUsuario obterUsuarioComPerfis(Long id);

	TbUsuario obterPorNome(String nome);

	Page<TbUsuario> obterTodos(Pageable pageable);

	void excluir(Long id);

	void salva(TbUsuario obj);

	TbUsuario obterPorNomeDeUsuario(String loginDeRede);
	
	Iterable<TbUsuario> obterTodos(Iterable<Long> ids);
	
	void salvarTodos(Iterable<TbUsuario> usuarios);
	
	TbUsuario obterUsuarioComPermissoes(Long idUsuario);
	
	boolean isUsuarioAdminDaAplicacao(TbUsuario tbUsuario);
	
	void verificaPermissoesUsuarioAdminDaAplicacao(TbUsuario tbUsuario);
}
