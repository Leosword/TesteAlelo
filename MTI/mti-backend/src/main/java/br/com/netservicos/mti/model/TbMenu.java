package br.com.netservicos.mti.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

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
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
@ToString(of = {"id", "nome", "descricao"})
@Entity
public class TbMenu implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String nome;

	private String descricao;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade=CascadeType.REFRESH)
	@JoinTable(name="tb_menu_funcionalidade",joinColumns={@JoinColumn(name="idMenu")}, inverseJoinColumns={@JoinColumn(name="idFuncionalidade")})
	private Set<TbFuncionalidade> tbFuncionalidades;
		
}