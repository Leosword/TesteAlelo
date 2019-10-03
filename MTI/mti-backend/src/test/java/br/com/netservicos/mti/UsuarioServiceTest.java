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
import org.springframework.test.context.junit4.SpringRunner;

import br.com.netservicos.mti.model.TbUsuario;
import br.com.netservicos.mti.service.UsuarioService;

/**
 * @author Leandro Celestino 2 de out de 2019
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UsuarioServiceTest {

	private Logger LOGGER = LoggerFactory.getLogger(UsuarioServiceTest.class);

	@Autowired
	private UsuarioService service;

	@Test
	public void obterUsuarioComPermissoes() {
		
		LOGGER.info("Testando busca de usuario com suas permissões");
		
		TbUsuario usuarioComPermissoes = service.obterUsuarioComPermissoes(1l);
		
		LOGGER.info(usuarioComPermissoes.toString());
	}
	

}
