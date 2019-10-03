package br.com.netservicos.mti.model;

import java.io.Serializable;
import java.util.Date;

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
 * @author Leandro Celestino 19 de jul de 2018
 */
@Getter
@Setter
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
@ToString(of = {"id"})
@Entity
public class TbOperacao implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String nome;

	private String descricao;
	
	private Date dataCriacao;
		
	private String flAtivo;
		
}