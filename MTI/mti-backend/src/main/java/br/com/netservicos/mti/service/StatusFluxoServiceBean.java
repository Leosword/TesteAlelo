package br.com.netservicos.mti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.model.TbStatusFluxo;
import br.com.netservicos.mti.repository.StatusFluxoRepository;

/**
 * @author Leandro Celestino 13 de ago de 2018
 */
@Service
public class StatusFluxoServiceBean implements StatusFluxoService {

	@Autowired
	private StatusFluxoRepository repository;	

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbStatusFluxo> obterTodos(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbStatusFluxo obterPorId(Long id) {
		return repository.findOne(id);
	}
	
	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbStatusFluxo obterPorNome(String nome) {
		return repository.obterPorNome(nome);
	}

}
