package br.com.netservicos.mti.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.netservicos.mti.model.TbFuncionalidade;
import br.com.netservicos.mti.service.FuncionalidadeService;
import br.com.netservicos.mti.util.ValidationResponse;

/**
 * 
 * @author Leandro Celestino 24 de jul de 2018
 */
@RestController
@RequestMapping(value = "/funcionalidade")
public class FuncionalidadeController {

	@Autowired
	private FuncionalidadeService funcionalidadeService;

	@RequestMapping(value = "/carregarFuncionalidade/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> carregaPerfil(@PathVariable("id") Long id) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Set<TbFuncionalidade>>(funcionalidadeService.obterPorTipo(id), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}

	@RequestMapping(value = "/carregarFuncionalidades", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> carregarFuncionalidades(Pageable pageable) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Page<TbFuncionalidade>>(funcionalidadeService.obterTodos(null), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}
	
	@RequestMapping(value = "/ativaDesativa", method = RequestMethod.PUT)
	public ResponseEntity<ValidationResponse> atualizarTodos(@RequestBody List<TbFuncionalidade> funcionalidades, BindingResult result) {
		funcionalidadeService.desativar(funcionalidades);
		return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.OK);
	} 
	
	@RequestMapping(value = "/carregarFuncionalidadesDisponiveis", method = RequestMethod.POST)
	public ResponseEntity<?> carregaFuncionalidadesDiponiveis(@RequestBody List<Long> listaIdsAssociados, BindingResult result, Pageable pageable) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Page<TbFuncionalidade>>(funcionalidadeService.obterFuncionlidadesDisponiveis(listaIdsAssociados, pageable), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	} 
}
