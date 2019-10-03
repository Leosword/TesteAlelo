package br.com.netservicos.mti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.model.TbOperacao;
import br.com.netservicos.mti.repository.OperacaoRepository;

/**
 * @author Leandro Celestino 31 de jul de 2018
 */
@Service
public class OperacaoServiceBean implements OperacaoService {

	@Autowired
	private OperacaoRepository repository;	

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbOperacao> obterTodos(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbOperacao obterPorId(Long id) {
		return repository.findOne(id);
	}

	@Transactional
	public void salvar(TbOperacao perfil) {
		repository.save(perfil);
	}

	@Transactional
	public void desativar(TbOperacao perfil) {
		repository.save(perfil);
	}

	@Transactional
	public void atualizar(TbOperacao perfil) {
		repository.save(perfil);
	}
}
