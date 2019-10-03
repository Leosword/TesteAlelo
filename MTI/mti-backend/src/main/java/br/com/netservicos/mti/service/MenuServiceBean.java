package br.com.netservicos.mti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.netservicos.mti.model.TbMenu;
import br.com.netservicos.mti.repository.MenuRepository;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Service
public class MenuServiceBean implements MenuService {

	@Autowired
	private MenuRepository repository;	

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public Page<TbMenu> obterTodos(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbMenu obterPorId(Long id) {
		return repository.findOne(id);
	}

	@Transactional
	public void salvar(TbMenu Menu) {
		repository.save(Menu);
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	public TbMenu obterMenuComFuncionalidadesAssociadas(Long idMenu) {
		if(idMenu == null || idMenu.compareTo(0l) == 0){
			return null;
		}
		
		return repository.obterMenuComFuncionalidadesAssociadas(idMenu);
	}
}
