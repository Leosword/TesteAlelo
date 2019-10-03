package br.com.netservicos.mti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.netservicos.mti.model.TbMenu;
import br.com.netservicos.mti.service.MenuService;
import br.com.netservicos.mti.util.ValidationResponse;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@RestController
@RequestMapping(value = "/menu")
public class MenuController {

	@Autowired
	private MenuService menuService;

	@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> obterTodos(Pageable pageable) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Page<TbMenu>>(menuService.obterTodos(null), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> obterPorId(@PathVariable("id") Long id) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<TbMenu>(menuService.obterPorId(id), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}

	@RequestMapping(value = "/funcionalidades-associadas/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> obterMenuComFuncionalidadesAssociadas(@PathVariable("id") Long idMenu) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<TbMenu>(
					menuService.obterMenuComFuncionalidadesAssociadas(idMenu), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}

}
