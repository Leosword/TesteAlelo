package br.com.netservicos.mti.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Component
public class SessionControlUtil {
 
	public void registrarAtributo(HttpServletRequest request, String chave, Object valor) {
		 
		HttpSession session = request.getSession();
		
		session.setAttribute(chave, valor);
	}
 
	public Object obterAtributo(HttpSession session, String chave) {
		
		return session.getAttribute(chave);
	}
	 
	public void removerAtributo(HttpServletRequest request, String chave) {
		
		request.getSession().removeAttribute(chave);
	}
  
	public void removerAtributo(HttpSession session, String chave) {

		session.removeAttribute(chave);
	}
	
}
