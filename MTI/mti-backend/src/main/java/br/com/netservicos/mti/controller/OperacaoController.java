package br.com.netservicos.mti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.netservicos.mti.model.TbOperacao;
import br.com.netservicos.mti.service.OperacaoService;
import br.com.netservicos.mti.util.ValidationResponse;

/**
 * 
 * @author Leandro Celestino 31 de jul de 2018
 */
@RestController
@RequestMapping(value = "/operacao")
public class OperacaoController {

	@Autowired
	private OperacaoService operacaoService;


	@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> carregaOperacoes(Pageable pageable) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Page<TbOperacao>>(operacaoService.obterTodos(null), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}
	
}
