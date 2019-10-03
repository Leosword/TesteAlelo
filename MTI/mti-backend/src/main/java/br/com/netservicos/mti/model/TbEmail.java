/**
 * 
 */
package br.com.netservicos.mti.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
@ToString(of = {"id"})
@Entity
public class TbEmail implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(precision = 8, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private String endereco;
	
	@NotNull
	private String nome;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "idStatusFluxo", nullable = false)
	private TbStatusFluxo tbStatusFluxo;
	
	public String getItemName() {
		return this.endereco;
	}

}
