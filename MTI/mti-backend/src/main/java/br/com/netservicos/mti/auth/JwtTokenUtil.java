package br.com.netservicos.mti.auth;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;
import java.util.function.Function;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 *
 */
@Component
public class JwtTokenUtil implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final long TEMPO_EXPIRACAO_MINUTOS = 10000;
	public static final String SIGNING_KEY = "C0TiNet@2013";

	public String obterLoginDoToken(String token) {
		return obterClaimDoToken(token, Claims::getSubject);
	}

	public Date obterDataExpiracaoDoToken(String token) {
		return obterClaimDoToken(token, Claims::getExpiration);
	}

	public <T> T obterClaimDoToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = obterTodosClaimsDoToken(token);
		return claimsResolver.apply(claims);
	}

	public void renovaToken(String token) {
		final Claims claims = obterTodosClaimsDoToken(token);
//		claims.setExpiration( Timestamp.valueOf(LocalDateTime.now().plusMinutes(TEMPO_EXPIRACAO_MINUTOS)) );
		
		String jwt = Jwts.builder().setClaims(claims)
				.setExpiration(new Date(System.currentTimeMillis() + (TEMPO_EXPIRACAO_MINUTOS* 60 *1000))).compact();
		System.out.println(jwt);
	}
	
	private Claims obterTodosClaimsDoToken(String token) {
		return Jwts.parser().setSigningKey(SIGNING_KEY).parseClaimsJws(token).getBody();
	}

	private Boolean tokenExpirado(String token) {
		final Date expiration = obterDataExpiracaoDoToken(token);
		return expiration.before(new Date());
	}

	/**
	 * 
	 * Gera uma chave hash(HMAC) usando SHA256
	 * 
	 * @param nomeDeUsuario
	 * @return
	 */
	public String geraToken(String nomeDeUsuario) {

		Claims claims = Jwts.claims().setSubject(nomeDeUsuario);
		claims.put("scopes", Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN")));

		return Jwts.builder().setClaims(claims).setIssuer("http://integrador-coti.com")
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + TEMPO_EXPIRACAO_MINUTOS * 60 * 1000))
				.signWith(SignatureAlgorithm.HS256, SIGNING_KEY).compact();
	}

	public Boolean validaToken(String token, UserDetails userDetails) {
		final String login = obterLoginDoToken(token);
		return (login.equals(userDetails.getUsername()) && !tokenExpirado(token));
	}

}
