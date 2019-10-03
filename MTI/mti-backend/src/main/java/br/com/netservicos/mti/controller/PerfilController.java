package br.com.netservicos.mti.controller;

import java.util.List;

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

import br.com.netservicos.mti.model.TbPerfil;
import br.com.netservicos.mti.service.PerfilService;
import br.com.netservicos.mti.util.ValidationResponse;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@RestController
@RequestMapping(value = "/perfil")
public class PerfilController {

	@Autowired
	private PerfilService perfilService;


	@RequestMapping(value = "/carregarPerfis", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> carregarPerfis(Pageable pageable) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Page<TbPerfil>>(perfilService.obterTodos(null), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}
	
	@RequestMapping(value = "/carregaPerfil/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> carregaPerfil(@PathVariable("id") Long id) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<TbPerfil>(perfilService.obterPorId(id), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	}
	
	@RequestMapping(value = "/carregarPerfisDisponiveis", method = RequestMethod.POST)
	public ResponseEntity<?> carregarPerfisDisponiveis(@RequestBody List<Long> listaIdsAssociados, BindingResult result, Pageable pageable) {
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<Page<TbPerfil>>(perfilService.obterPerfisDisponiveis(listaIdsAssociados, pageable), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity = new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		return responseEntity;
	} 
	
	@RequestMapping(value = "/salvar", method = RequestMethod.POST)
	public ResponseEntity<ValidationResponse> salvar(@RequestBody TbPerfil perfil, BindingResult result) {	
		perfilService.salvar(perfil);
		return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.OK);
	} 
	
	@RequestMapping(value = "/atualizar/{id}", method = RequestMethod.PUT)
	public ResponseEntity<ValidationResponse> atualizar(@RequestBody TbPerfil perfil, BindingResult result) {
		perfilService.atualizar(perfil);
		return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/desativar", method = RequestMethod.PUT)
	public ResponseEntity<ValidationResponse> atualizarTodos(@RequestBody TbPerfil perfil, BindingResult result) {
		perfilService.desativar(perfil);
		return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.OK);
	} 
}
