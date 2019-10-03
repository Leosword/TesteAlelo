/**
 * 
 */
package br.com.netservicos.mti.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * @author Leandro Celestino 2 de out de 2019
 *
 */
@Getter
@Setter
@Accessors(chain=true)
public class JobDto implements Serializable{

	private static final long serialVersionUID = 1L;

	private Date dataDisparoTrigger;
	private String nomeJob;
	private String nomeTrigger;
	private String group;
	private HashMap<String, Object> jobDataAsMap;
}
