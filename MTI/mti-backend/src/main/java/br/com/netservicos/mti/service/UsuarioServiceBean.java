package br.com.netservicos.mti.service;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.constantes.Flag;
import br.com.netservicos.mti.enumerator.Funcionalidade;
import br.com.netservicos.mti.model.TbFuncionalidade;
import br.com.netservicos.mti.model.TbPerfil;
import br.com.netservicos.mti.model.TbTipoFuncionalidade;
import br.com.netservicos.mti.model.TbUsuario;
import br.com.netservicos.mti.repository.UsuarioRepository;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Service
public class UsuarioServiceBean implements UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbUsuario obterPorId(Long id) {
		TbUsuario tbUsuario = repository.findOne(id);
		if (tbUsuario != null && tbUsuario.getId() != null) {
			tbUsuario.setSenha(null);
		}
		return tbUsuario;
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbUsuario obterUsuarioComPerfis(Long id) {
		TbUsuario tbUsuario = repository.obterUsuarioComPerfis(id);
		if (tbUsuario != null && tbUsuario.getId() != null) {
			tbUsuario.setSenha(null);
		}
		return tbUsuario;
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbUsuario obterPorNome(String nome) {
		return repository.obterPorNome(nome);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbUsuario> obterTodos(Pageable pageable) {
		return repository.obterTodos(pageable);
	}

	@Transactional(rollbackFor = Exception.class)
	public void excluir(Long id) {
		repository.delete(id);
	}

	@Transactional(rollbackFor = Exception.class)
	public void salva(TbUsuario tbUsuario) {
		repository.save(tbUsuario);
	}

	public Date obterDataDeHoje() {
		Calendar calendario = Calendar.getInstance();
		calendario.set(Calendar.SECOND, 0);
		return calendario.getTime();
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbUsuario obterPorNomeDeUsuario(String nomeDeUsuario) {
		return repository.obterPorNomeDeUsuario(nomeDeUsuario != null ? nomeDeUsuario.toUpperCase() : null);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Iterable<TbUsuario> obterTodos(Iterable<Long> ids) {
		return repository.findAll(ids);
	}

	@Transactional
	public void salvarTodos(Iterable<TbUsuario> usuarios) {
		repository.save(usuarios);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbUsuario obterUsuarioComPermissoes(Long idUsuario) {
		return repository.obterUsuarioComPermissoes(idUsuario);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public boolean isUsuarioAdminDaAplicacao(TbUsuario tbUsuario) {

		if (tbUsuario != null) {
			String login = tbUsuario.getLoginDeRede();
			if (login != null && !login.isEmpty()) {
				if (login.equalsIgnoreCase("ADMIN")) {
					return true;
				}
			}
		}

		return false;
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public void verificaPermissoesUsuarioAdminDaAplicacao(TbUsuario tbUsuario) {

		if (this.isUsuarioAdminDaAplicacao(tbUsuario)) {

			TbPerfil perfilAdmin = new TbPerfil();
			perfilAdmin.setNome("Admin");
			perfilAdmin.setFlAtivo(Flag.SIM.getValue());

			Set<TbFuncionalidade> listaComTodasPermissoes = new HashSet<TbFuncionalidade>();
			Long id = 1l;
			for (Funcionalidade roleFuncionalidade : Funcionalidade.values()) {
				
				listaComTodasPermissoes.add(new TbFuncionalidade().setId(id).setNome(roleFuncionalidade.getNome())
						.setFlAtivo(Flag.SIM.getValue())
						.setTbTipoFuncionalidade(new TbTipoFuncionalidade().setId(roleFuncionalidade.getTipo().getId())
								.setNome(roleFuncionalidade.getTipo().getNome())
								.setDescricao(roleFuncionalidade.getTipo().getDescricao())));
				id++;
			}
			
			perfilAdmin.setTbFuncionalidades(listaComTodasPermissoes);
			tbUsuario.setTbPerfils(Arrays.asList(new TbPerfil[]{perfilAdmin}));
		}
	}

}
