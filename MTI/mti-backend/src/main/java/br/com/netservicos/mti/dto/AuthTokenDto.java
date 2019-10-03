package br.com.netservicos.mti.dto;

import java.io.Serializable;

import br.com.netservicos.mti.model.TbUsuario;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@Getter
@Setter
@EqualsAndHashCode
@Accessors(chain = true)
public class AuthTokenDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String token;
	private TbUsuario tbUsuario;


}
