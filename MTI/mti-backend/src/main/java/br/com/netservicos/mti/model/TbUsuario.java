package br.com.netservicos.mti.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

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
import javax.persistence.ManyToOne;
import javax.persistence.NamedAttributeNode;
import javax.persistence.NamedEntityGraph;

import br.com.netservicos.mti.constantes.ProfileEnum;
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
@Accessors(chain = true)
@ToString(of = { "id", "nome", "email", "loginDeRede", "status" })
@Entity
@NamedEntityGraph(name = TbUsuario.TODOS_RELACIONAMENTOS, attributeNodes = {
		@NamedAttributeNode("tbOperacao"),
		@NamedAttributeNode("tbPerfils"),
})
public class TbUsuario implements Serializable {

	private static final long serialVersionUID = 1L;
	
	public static final String TODOS_RELACIONAMENTOS = "TbUsuario.todosRelacionamentos";

	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String nome;

	@Column(unique = true, nullable = false)
	private String loginDeRede;
	
	@Column(nullable = true)
	private String senha;
	
	private String email;
	
	private Integer status;

	private Date dataCadastro;
	
	private Date dataExclusao;
	
	private String descricao;
	
	@Column(nullable = false)
	private String profile;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "idOperacao", nullable = false)
	private TbOperacao tbOperacao;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade=CascadeType.DETACH)
	@JoinTable(name="tb_usuario_tb_perfil",joinColumns={@JoinColumn(name="idUsuario")}, inverseJoinColumns={@JoinColumn(name="idPerfil")})
	private List<TbPerfil> tbPerfils;

	public Boolean isUsuarioLDAP() {
		if (ProfileEnum.USUARIO_LDAP.getValue().equalsIgnoreCase(this.profile)) {
			return true;
		} else {
			return false;
		}
	}
}