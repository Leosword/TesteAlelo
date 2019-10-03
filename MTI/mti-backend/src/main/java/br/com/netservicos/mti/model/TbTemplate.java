package br.com.netservicos.mti.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 * 
 * Configuração dos templates de email
 *  
 */
@Getter
@Setter
@EqualsAndHashCode
@Accessors(chain=true)
@ToString(of={"id", "nome", "descricao", "caminhoArquivo", "nomeArquivo"})
@Entity
public class TbTemplate implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique=true, nullable=false)
	private String nome;
	private String descricao;
	private String caminhoArquivo;
	private String nomeArquivo;
	 
}