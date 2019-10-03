package br.com.netservicos.mti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.enumerator.ParametroSistema;
import br.com.netservicos.mti.model.TbParametroSistema;
import br.com.netservicos.mti.repository.ParametroSistemaRepository;

/**
 * @author Leandro Celestino 29 de mai de 2018
 */
@Service
public class ParametroSistemaServiceBean implements ParametroSistemaService {

	@Autowired
	private ParametroSistemaRepository repository;

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbParametroSistema> obterTodos(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbParametroSistema obterPorId(Long id) {
		return repository.findOne(id);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbParametroSistema obterPorNome(String nome) {
		return repository.obterPorNome(nome);
	}

	@Transactional
	public void salvar(TbParametroSistema parametroSistema) {
		repository.save(parametroSistema);
	}

	public Integer obterParametroSistema(ParametroSistema parametroSistema) throws Exception {
		TbParametroSistema tbParam = this.obterPorNome(parametroSistema.getNome());
		if (tbParam == null || tbParam.getId() == null || tbParam.getValor() < 1)
			throw new Exception("Parâmetro " + parametroSistema.getNome()
					+ " não parametizado, favor contate o administrador do sistema.");

		return tbParam.getValor();
	}

}
