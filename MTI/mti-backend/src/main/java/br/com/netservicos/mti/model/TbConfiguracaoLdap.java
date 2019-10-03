package br.com.netservicos.mti.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import br.com.netservicos.mti.constantes.Flag;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
@Getter
@Setter
@EqualsAndHashCode
@Accessors(chain=true)
@Entity
@ToString 
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@tbConfiguracaoLdapId", scope=TbConfiguracaoLdap.class)
public class TbConfiguracaoLdap implements Serializable{

	private static final long serialVersionUID = 7913441023679329170L;
	
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable=false)
	private String nome;
	
	@Column(nullable=false)
	private String enderecoProvedor;
	
	@Column(nullable=false)
	private String base;
	
	@Column(nullable=false)
	private String nomeAtributoLogin;
	
	@Column(nullable=false)
	private String usuario;
	
	@Column(nullable=false)
	private String senha;
	
	@Column(nullable = false)
	private String excluido = Flag.NAO.getValue();
	
	private Date dtExclusaoLogica;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.DETACH)
	@JoinColumn(name = "idDominioLdap")
	private TbDominioLdap tbDominioLdap;	
	
}
