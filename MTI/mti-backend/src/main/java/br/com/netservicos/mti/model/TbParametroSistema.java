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
 * @author Leandro Celestino 10 de ago de 2018
 */
@Getter
@Setter
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
@ToString(of = {"id", "nome"})
@Entity
public class TbParametroSistema implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;
	
	private Integer valor;
	
	private Date dataCriacao;
}