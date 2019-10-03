package br.com.netservicos.mti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.model.TbStatusRetornoDiarioBordo;
import br.com.netservicos.mti.repository.StatusRetornoDiarioBordoRepository;

/**
 * @author Leandro Celestino 24 de ago de 2018
 */
@Service
public class StatusRetornoDiarioBordoServiceBean implements StatusRetornoDiarioBordoService {

	@Autowired
	private StatusRetornoDiarioBordoRepository repository;	

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbStatusRetornoDiarioBordo> obterTodos(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbStatusRetornoDiarioBordo obterPorId(Long id) {
		return repository.findOne(id);
	}
	
	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbStatusRetornoDiarioBordo obterPorNome(String nome) {
		return repository.obterPorNome(nome);
	}

}
