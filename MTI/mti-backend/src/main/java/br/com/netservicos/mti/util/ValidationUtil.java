package br.com.netservicos.mti.util;

import br.com.netservicos.mti.constantes.TipoNotificacaoEmTela;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
public class ValidationUtil {
	
	public static ValidationResponse getValidation(String entidade, String msg, Exception e) {
		
		msg = entidade + " - " + msg + e.getMessage();
		ValidationResponse validationResponse = new ValidationResponse("ERROR");
		validationResponse.addFieldError(entidade, msg, TipoNotificacaoEmTela.POUPUP);
		return validationResponse;
	}

	public static ValidationResponse getValidation(String msg) {
		 
		ValidationResponse validationResponse = new ValidationResponse("ERROR");
		validationResponse.addFieldError(null, msg, TipoNotificacaoEmTela.POUPUP);
		return validationResponse;
	}
	
}
