package br.com.netservicos.mti.service;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.model.TbFuncionalidade;
import br.com.netservicos.mti.repository.FuncionalidadeRepository;

/**
 * @author Leandro Celestino 29 de mai de 2018
 */
@Service
public class FuncionalidadeServiceBean implements FuncionalidadeService {

	@Autowired
	private FuncionalidadeRepository repository;	

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbFuncionalidade> obterTodos(Pageable pageable) {
		return repository.obterTodos(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbFuncionalidade obterPorId(Long id) {
		return repository.findOne(id);
	}
	
	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Set<TbFuncionalidade> obterPorTipo(Long id) {
		return repository.obterPorTipo(id);
	}

	@Transactional
	public void salvar(TbFuncionalidade perfil) {
		perfil.setDataCriacao(new Date());
		repository.save(perfil);
	}

	@Transactional
	public void desativar(List<TbFuncionalidade> perfil) {
		repository.save(perfil);
	}

	@Transactional
	public void atualizar(TbFuncionalidade perfil) {
		repository.save(perfil);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbFuncionalidade> obterFuncionlidadesDisponiveis(List<Long> listaIdsAssociados, Pageable pageable) {
		if(listaIdsAssociados == null || listaIdsAssociados.size() == 0){
			return this.obterTodos(pageable);
		}
		return repository.obterFuncionalidadesDisponiveis(listaIdsAssociados, pageable);
	}
}
