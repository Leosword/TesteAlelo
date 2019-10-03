package br.com.netservicos.mti.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.netservicos.mti.enumerator.Funcionalidade;
import br.com.netservicos.mti.model.TbFuncionalidade;
import br.com.netservicos.mti.model.TbPerfil;
import br.com.netservicos.mti.model.TbUsuario;
import br.com.netservicos.mti.service.UsuarioService;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@Service(value = "usuarioServiceImpl")
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioService usuarioService;

	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		
		TbUsuario tbUsuario = usuarioService.obterPorNomeDeUsuario(login);
		if (tbUsuario == null || tbUsuario.getId() == null || tbUsuario.getId().compareTo(0l) < 1) {
			throw new UsernameNotFoundException("Login não cadastrado na base de dados.");
		}
		
		//Se for admin sempre carrega todas as permissões
		if(usuarioService.isUsuarioAdminDaAplicacao(tbUsuario)){
			ArrayList<SimpleGrantedAuthority> listaComTodasPermissoes = new ArrayList<SimpleGrantedAuthority>();
			for(Funcionalidade roleFuncionalidade : Funcionalidade.values()){
				listaComTodasPermissoes.add(new SimpleGrantedAuthority(roleFuncionalidade.getNome()));
			}
			
			return new User(tbUsuario.getLoginDeRede(), tbUsuario.getSenha(), listaComTodasPermissoes);
		}

		return new User(tbUsuario.getLoginDeRede(), tbUsuario.getSenha(), getAuthority(tbUsuario.getId()));
	}

	private List<SimpleGrantedAuthority> getAuthority(Long idUsuario) {

		ArrayList<SimpleGrantedAuthority> listaComPermissoes = new ArrayList<SimpleGrantedAuthority>();
		TbUsuario usuarioComPermissoes = usuarioService.obterUsuarioComPermissoes(idUsuario);
		if (usuarioComPermissoes != null && usuarioComPermissoes.getId() != null
				&& usuarioComPermissoes.getId().compareTo(0l) > 0) {

			for(TbPerfil tbPerfil : usuarioComPermissoes.getTbPerfils()){
				if(tbPerfil != null && tbPerfil.getNome() != null && !tbPerfil.getNome().isEmpty()){
					
					for(TbFuncionalidade tbFuncionalidade : tbPerfil.getTbFuncionalidades()){
						
						Funcionalidade roleFuncionalidade = Funcionalidade.get(tbFuncionalidade.getNome());
						if(roleFuncionalidade != null)
							listaComPermissoes.add(new SimpleGrantedAuthority(roleFuncionalidade.getNome()));
					}
				}
			}
		}

		if(listaComPermissoes == null || listaComPermissoes.size() ==0){
			listaComPermissoes = new ArrayList<SimpleGrantedAuthority>();
			listaComPermissoes.add(new SimpleGrantedAuthority("VAZIO"));
		}
		
		return listaComPermissoes;
	}

}
