package br.com.netservicos.mti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.model.TbPerfil;
import br.com.netservicos.mti.repository.PerfilRepository;

/**
 * @author Leandro Celestino 29 de mai de 2018
 */
@Service
public class PerfilServiceBean implements PerfilService {

	@Autowired
	private PerfilRepository repository;	

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbPerfil> obterTodos(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbPerfil obterPorId(Long id) {
		return repository.findOne(id);
	}

	@Transactional
	public void salvar(TbPerfil perfil) {
		repository.save(perfil);
	}

	@Transactional
	public void desativar(TbPerfil perfil) {
		repository.save(perfil);
	}

	@Transactional
	public void atualizar(TbPerfil perfil) {
		repository.save(perfil);
	}
	
	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbPerfil> obterPerfisDisponiveis(List<Long> listaIdsAssociados, Pageable pageable) {
		if(listaIdsAssociados == null || listaIdsAssociados.size() == 0){
			return this.obterTodos(pageable);
		}
		return repository.obterPerfisDisponiveis(listaIdsAssociados, pageable);
	}
}
