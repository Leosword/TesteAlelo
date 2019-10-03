/**
 * 
 */
package br.com.netservicos.mti;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.netservicos.mti.model.TbMenu;
import br.com.netservicos.mti.service.MenuService;

/**
 * @author Leandro Celestino 2 de out de 2019
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class MenuServiceTest {

	private Logger LOGGER = LoggerFactory.getLogger(MenuServiceTest.class);

	@Autowired
	private MenuService service;

//	@Test
	public void obterTodos() {
		
		Page<TbMenu> obterTodos = service.obterTodos(null);
		obterTodos.forEach(tbMenu -> {
			LOGGER.info(tbMenu.toString());
		});
	}

	@Test
	public void obterPorId() {
		
		TbMenu obterPorId = service.obterPorId(1l);
		LOGGER.info(obterPorId.toString());
	}

	@Test
	public void obterMenuComFuncionalidadesAssociadas() {
		
		TbMenu obterMenuComFuncionalidadesAssociadas = service.obterMenuComFuncionalidadesAssociadas(1l);
		obterMenuComFuncionalidadesAssociadas.getTbFuncionalidades().forEach(funcionalidade -> {
			LOGGER.info(funcionalidade.toString());
		});
	}
	

}
