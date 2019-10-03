package br.com.netservicos.mti.model;

import java.io.Serializable;
import java.util.Date;
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
import javax.persistence.NamedAttributeNode;
import javax.persistence.NamedEntityGraph;

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
@ToString(of = {"id", "descricao", "dataCriacao", "flAtivo"})
@Entity
@NamedEntityGraph(name = TbPerfil.TODOS_RELACIONAMENTOS, 
attributeNodes = { 
		@NamedAttributeNode("tbFuncionalidades"),
})
public class TbPerfil implements Serializable {

	private static final long serialVersionUID = 1L;
	
	public static final String TODOS_RELACIONAMENTOS = "TbPerfil.todosRelacionamentos";

	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String nome;

	private String descricao;
	
	private Date dataCriacao;
		
	private String flAtivo;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade=CascadeType.REFRESH)
	@JoinTable(name="tb_perfil_funcionalidade",joinColumns={@JoinColumn(name="idPerfil")}, inverseJoinColumns={@JoinColumn(name="idFuncionalidade")})
	private Set<TbFuncionalidade> tbFuncionalidades;
		
}