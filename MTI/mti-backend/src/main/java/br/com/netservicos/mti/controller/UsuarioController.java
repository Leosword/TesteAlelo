package br.com.netservicos.mti.controller;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.netservicos.mti.auth.JwtTokenUtil;
import br.com.netservicos.mti.constantes.TipoNotificacaoEmTela;
import br.com.netservicos.mti.dto.AuthTokenDto;
import br.com.netservicos.mti.model.TbUsuario;
import br.com.netservicos.mti.service.UsuarioService;
import br.com.netservicos.mti.util.UsuarioValidator;
import br.com.netservicos.mti.util.ValidationResponse;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@RestController
@RequestMapping(value = UsuarioController.USUARIO_MAPPING)
public class UsuarioController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UsuarioController.class);
	
	public static final String USUARIO_MAPPING = "/usuario";
	public static final String GERAR_TOKEN_MAPPING = "/gerar-token";
	public static final String USUARIO_GERAR_TOKEN_MAPPING = USUARIO_MAPPING + GERAR_TOKEN_MAPPING;
	private final String MSG_LOGIN_OU_SENHA_INVALIDO = "Login ou senha inválido.";
	private final String SENHA_FAKE_DE_COMPARACAO_LDAP = "123456";

	@Autowired
	private BCryptPasswordEncoder bcryptEncoder;

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private UsuarioValidator validator;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<TbUsuario>> carregar(Pageable pageable) {
		Page<TbUsuario> obterTodos = usuarioService.obterTodos(pageable);
		return new ResponseEntity<Page<TbUsuario>>(obterTodos, HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public TbUsuario obterPorId(@PathVariable("id") Long id) {
		TbUsuario usuario = usuarioService.obterPorId(id);
		return usuario;
	}
	
	@RequestMapping(value = "/obterUsuarioComPerfis/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public TbUsuario obterUsuarioComPerfis(@PathVariable("id") Long id) {
		TbUsuario usuario = usuarioService.obterUsuarioComPerfis(id);
		return usuario;
	}

	@RequestMapping(value = "/", method = RequestMethod.PUT)
	public ResponseEntity<ValidationResponse> atualizarTodos(@RequestBody List<TbUsuario> usuarios) {
		usuarioService.salvarTodos(usuarios);
		return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.OK);
	}

	@RequestMapping(value = "/salvar", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ValidationResponse> salvar(@Valid @RequestBody TbUsuario usuario, BindingResult result) {
		validator.validate(usuario, result);
		
		/*
		 * Usuario usuarioPorLogin =
		 * ldapService.getUsuarioPorLogin(configuracaoLdapService.getDadosLdap(),
		 * usuario.getLoginDeRede());
		 */

		/*
		 * ValidationResponse validationResponse = new ValidationResponse(); if(usuario
		 * != null && usuario.getProfile() != null && !usuario.getProfile().isEmpty()){
		 * if (usuarioPorLogin == null &&
		 * usuario.getProfile().equals(ProfileEnum.USUARIO_LDAP.getValue())) {
		 * 
		 * validationResponse.addFieldError("", "Usuário não cadastrado no Dominio.",
		 * TipoNotificacaoEmTela.POUPUP); return new
		 * ResponseEntity<ValidationResponse>(validationResponse, HttpStatus.CONFLICT);
		 * } }
		 */

		if (usuario.getStatus() == 1) {
			usuario.setDataExclusao(null);
		} else {
			usuario.setDataExclusao(new Date());
		}

		try {
			encodeSenhaUsuario(usuario);
			usuarioService.salva(usuario);
		} catch (Exception e) {
			return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.CONFLICT);
		}
		
		return new ResponseEntity<ValidationResponse>(new ValidationResponse(), HttpStatus.OK);
	}

	@RequestMapping(value = "/nome-usuario/{nomeDeUsuario}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public TbUsuario obterPorNomeDeUsuario(@PathVariable("nomeDeUsuario") String nomeDeUsuario) {
		TbUsuario usuarioRetorno = usuarioService.obterPorNomeDeUsuario(nomeDeUsuario);

		if (usuarioRetorno != null) {
			return usuarioRetorno;
		}

		/*
		 * Usuario usuarioPorLogin =
		 * ldapService.getUsuarioPorLogin(configuracaoLdapService.getDadosLdap(),
		 * nomeDeUsuario);
		 */

		/*
		 * if (usuarioPorLogin != null) { usuarioRetorno = new TbUsuario();
		 * usuarioRetorno.setNome(usuarioPorLogin.getNome());
		 * usuarioRetorno.setEmail(usuarioPorLogin.getEmail()); }
		 */
		return usuarioRetorno;
	}

	@RequestMapping(value = GERAR_TOKEN_MAPPING, method = RequestMethod.POST)
	public ResponseEntity<ValidationResponse> gerarToken(@RequestBody TbUsuario tbUsuario)
			throws Exception {

		ValidationResponse validationResponse = new ValidationResponse();
		HttpStatus status = HttpStatus.OK;

		try {

			TbUsuario tbUsuarioRecuperado = usuarioService
					.obterPorNomeDeUsuario(tbUsuario.getLoginDeRede());
			if (tbUsuarioRecuperado != null) {
				
				if(tbUsuarioRecuperado.getStatus() != null && tbUsuarioRecuperado.getStatus().compareTo(1)!=0){
					validationResponse.addFieldError("", "Usuário inativo", TipoNotificacaoEmTela.POUPUP);
					status = HttpStatus.CONFLICT;
					return new ResponseEntity<ValidationResponse>(validationResponse, status);
				}
				
				/*
				 * if (tbUsuarioRecuperado.isUsuarioLDAP()) {
				 * 
				 * boolean autenticaLdap =
				 * ldapService.autenticaLdap(configuracaoLdapService.getDadosLdap(),
				 * tbUsuario.getLoginDeRede(), tbUsuario.getSenha()); if (!autenticaLdap) {
				 * 
				 * validationResponse.addFieldError("", MSG_LOGIN_OU_SENHA_INVALIDO,
				 * TipoNotificacaoEmTela.POUPUP); status = HttpStatus.CONFLICT; return new
				 * ResponseEntity<ValidationResponse>(validationResponse, status); }
				 * 
				 * tbUsuario.setSenha(SENHA_FAKE_DE_COMPARACAO_LDAP); }
				 */
			}

			final Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(tbUsuario.getLoginDeRede().toUpperCase(),
							tbUsuario.getSenha()));

			tbUsuarioRecuperado.setSenha(null);

			SecurityContextHolder.getContext().setAuthentication(authentication);

			String token = jwtTokenUtil.geraToken(tbUsuarioRecuperado.getLoginDeRede());
			
			usuarioService.verificaPermissoesUsuarioAdminDaAplicacao(tbUsuarioRecuperado);
			
			AuthTokenDto authTokenDto  = new AuthTokenDto();
			authTokenDto.setToken(token);
			authTokenDto.setTbUsuario(tbUsuarioRecuperado);
			
			validationResponse.setResultado(authTokenDto);

		} catch (BadCredentialsException e) {

			validationResponse.addFieldError("", "Usuário ou senha inválido", TipoNotificacaoEmTela.POUPUP);
			status = HttpStatus.CONFLICT;

		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error(e.getMessage());
		}

		return new ResponseEntity<ValidationResponse>(validationResponse, status);
	}

	private void encodeSenhaUsuario(TbUsuario tbUsuario) {
		if (tbUsuario.isUsuarioLDAP()) {

			// É um login no LDAP então coloca a senha de comparação default para a autenticação(Automática do SpringSecurity)
			tbUsuario.setSenha(bcryptEncoder.encode(SENHA_FAKE_DE_COMPARACAO_LDAP));
		} else {

			// É um login interno da aplicação

			if (tbUsuario.getSenha() != null) {
				tbUsuario.setSenha(bcryptEncoder.encode(tbUsuario.getSenha()));
			}
		}
	}
}
