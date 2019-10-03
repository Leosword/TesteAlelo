package br.com.netservicos.mti.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import br.com.netservicos.mti.model.TbUsuario;
import br.com.netservicos.mti.service.UsuarioService;

@Component
public class UsuarioValidator implements Validator{
	
	@Autowired
	private UsuarioService service;
	 
	@Override
	public boolean supports(Class<?> arg0) {
		return TbUsuario.class.isAssignableFrom(arg0);
	}

	@Override
	public void validate(Object objeto, Errors erros) {
		TbUsuario usuario = (TbUsuario) objeto;
		
		if (usuario == null){
			erros.reject("NotNull.usuario");
			return;
		}
		
		if (usuario.getNome() == null){
			erros.rejectValue("nome", "NotNull.usuario.nome");
			return;
		}
		
		if (usuario.getLoginDeRede() == null){
			erros.rejectValue("loginDeRede", "NotNull.usuario.loginDeRede");
			return;
		}
		
		if (usuario.getEmail() == null){
			erros.rejectValue("nome", "NotNull.usuario.email");
			return;
		}
		
		TbUsuario usuarioRetorno = service.obterPorNomeDeUsuario(usuario.getLoginDeRede());
		if (usuarioRetorno != null && usuarioRetorno.getId() != usuario.getId()){
			erros.rejectValue("loginDeRede", "duplicidade.usuario");
			return;
		}
	}
}