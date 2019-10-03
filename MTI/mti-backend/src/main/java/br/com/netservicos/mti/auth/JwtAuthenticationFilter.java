package br.com.netservicos.mti.auth;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import br.com.netservicos.mti.controller.UsuarioController;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 *
 */
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	public static final String HEADER_STRING = "Authorization";
	public static final String TOKEN_PREFIX = "Bearer ";

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {

		boolean isObterToken = isRequestObterToken(req);
		if(!isObterToken){
			String header = req.getHeader(HEADER_STRING);
			String login = null;
			String authToken = null;
			
			if (header != null && header.startsWith(TOKEN_PREFIX)) {
				authToken = header.replace(TOKEN_PREFIX, "");
				try {
					login = jwtTokenUtil.obterLoginDoToken(authToken);
				} catch (IllegalArgumentException e) {
					logger.error("Erro inesperador ao obter usuário do token, favor contate o administrador", e);
				} catch (ExpiredJwtException e) {
					logger.warn("Sessão expirou, favor efetuar novo login");
				} catch (SignatureException e) {
					logger.error("Usuário ou senha inválido");
				}
			} else {
				logger.warn("Token de autenticação não está presente no Header da mensagem");
			}
			if (login != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				
				UserDetails userDetails = userDetailsService.loadUserByUsername(login.toUpperCase());
				
				if (jwtTokenUtil.validaToken(authToken, userDetails)) {
					
					UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities()); 
					
					authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
					logger.info("Login '" + login + "' autenticado com sucesso");
					SecurityContextHolder.getContext().setAuthentication(authentication);
				}
			}
			
//			jwtTokenUtil.renovaToken(authToken);
		}
		

		chain.doFilter(req, res);
	}

	private boolean isRequestObterToken(HttpServletRequest req) {
		return req != null && req.getServletPath() != null && req.getServletPath().contains(UsuarioController.USUARIO_GERAR_TOKEN_MAPPING);
	}
}