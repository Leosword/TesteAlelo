/**
 * 
 */
package br.com.netservicos.mti.dto;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * @author Leandro Celestino 21 de ago de 2018
 *
 */
@Getter
@Setter
@Accessors(chain=true)
public class RetornoDiarioBordoDto implements Serializable{

	private static final long serialVersionUID = 1L;

	private String cd_retorno;
	private String ds_message;
}
