package br.com.netservicos.mti.enumerator;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
public  enum TipoFuncionalidade {
	
	MENU(1l, "MENU", "Item de menu"),
	OPERACAO(2l, "OPERACAO", "Operação dentro do sistema"),
	BOTAO(3l, "BOTAO", "Botões de Página")
	;

	public static TipoFuncionalidade get(String nome) {
		if(nome == null || nome.isEmpty())
			return null;
		
		for (TipoFuncionalidade obj : TipoFuncionalidade.values()) {
			if (obj.getNome().equalsIgnoreCase(nome))
				return obj;
		}
		return null;
	}

	Long id;
	String nome;
	String descricao;


	public String getNome() {
		return nome;
	}
	
	public Long getId() {
		return id;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	TipoFuncionalidade(Long id, String nome, String descricao) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
	}
}
