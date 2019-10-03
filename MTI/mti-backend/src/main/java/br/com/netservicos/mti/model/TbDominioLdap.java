package br.com.netservicos.mti.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import br.com.netservicos.mti.constantes.Flag;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * @author Leandro Celestino 2 de out de 2019
 *
 */
@Getter
@Setter
@EqualsAndHashCode
@Accessors(chain=true)
@Entity
@ToString 
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@tbDominioLdapId", scope=TbDominioLdap.class)
public class TbDominioLdap implements Serializable{
	private static final long serialVersionUID = -7479638075846935897L;
		
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique=true, nullable=false)
	private String nome;
	
	@Column(nullable = false)
	private String excluido = Flag.NAO.getValue();
	
	private Date dataExclusao;
}