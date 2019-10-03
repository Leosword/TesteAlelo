package br.com.netservicos.mti.enumerator;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
public  enum Funcionalidade {

	MNU_DASHBOARD("MNU_DASHBOARD", TipoFuncionalidade.MENU),
	MNU_INCIDENTE("MNU_INCIDENTE", TipoFuncionalidade.MENU),
	MNU_INCIDENTE_BTN_CRITICOS("MNU_INCIDENTE_BTN_CRITICOS", TipoFuncionalidade.BOTAO),
	MNU_INCIDENTE_BTN_TRATADOS("MNU_INCIDENTE_BTN_TRATADOS", TipoFuncionalidade.BOTAO),
	MNU_INCIDENTE_BTN_SOLICITA_VALIDACAO_EPS("MNU_INCIDENTE_BTN_SOLICITA_VALIDACAO_EPS", TipoFuncionalidade.BOTAO),
	MNU_INCIDENTE_BTN_VALIDAR_INCIDENTE("MNU_INCIDENTE_BTN_VALIDAR_INCIDENTE", TipoFuncionalidade.BOTAO),
	MNU_INCIDENTE_OPR_VISUALIZAR_DETALHE("MNU_INCIDENTE_OPR_VISUALIZAR_DETALHE", TipoFuncionalidade.OPERACAO),
	MNU_USUARIO("MNU_USUARIO", TipoFuncionalidade.MENU),
	MNU_USUARIO_BTN_INCLUIR("MNU_USUARIO_BTN_INCLUIR", TipoFuncionalidade.BOTAO),
	MNU_USUARIO_BTN_EDITAR("MNU_USUARIO_BTN_EDITAR", TipoFuncionalidade.BOTAO),
	MNU_USUARIO_BTN_ATIVAR("MNU_USUARIO_BTN_ATIVAR", TipoFuncionalidade.BOTAO),
	MNU_USUARIO_BTN_DESATIVAR("MNU_USUARIO_BTN_DESATIVAR", TipoFuncionalidade.BOTAO),
	MNU_USUARIO_BTN_VISUALIZAR("MNU_USUARIO_BTN_VISUALIZAR", TipoFuncionalidade.BOTAO),
	MNU_USUARIO_BTN_ALTERAR_SENHA("MNU_USUARIO_BTN_ALTERAR_SENHA", TipoFuncionalidade.BOTAO),
	MNU_PERFIL("MNU_PERFIL", TipoFuncionalidade.MENU),
	MNU_PERFIL_BTN_INCLUIR("MNU_PERFIL_BTN_INCLUIR", TipoFuncionalidade.BOTAO),
	MNU_PERFIL_BTN_EDITAR("MNU_PERFIL_BTN_EDITAR", TipoFuncionalidade.BOTAO),
	MNU_PERFIL_BTN_ATIVAR("MNU_PERFIL_BTN_ATIVAR", TipoFuncionalidade.BOTAO),
	MNU_PERFIL_BTN_DESATIVAR("MNU_PERFIL_BTN_DESATIVAR", TipoFuncionalidade.BOTAO),
	MNU_PERFIL_BTN_VISUALIZAR("MNU_PERFIL_BTN_VISUALIZAR", TipoFuncionalidade.BOTAO),
	MNU_FUNCIONALIDADES("MNU_FUNCIONALIDADES", TipoFuncionalidade.MENU),
	MNU_FUNCIONALIDADES_BTN_ATIVAR("MNU_FUNCIONALIDADES_BTN_ATIVAR", TipoFuncionalidade.BOTAO),
	MNU_FUNCIONALIDADES_BTN_DESATIVAR("MNU_FUNCIONALIDADES_BTN_DESATIVAR", TipoFuncionalidade.BOTAO),
	;

	public static Funcionalidade get(String nome) {
		if(nome == null || nome.isEmpty())
			return null;
		
		for (Funcionalidade obj : Funcionalidade.values()) {
			if (obj.getNome().equalsIgnoreCase(nome))
				return obj;
		}
		return null;
	}

	String nome;
	TipoFuncionalidade tipo;

	public String getNome() {
		return nome;
	}
	
	public TipoFuncionalidade getTipo() {
		return tipo;
	}

	Funcionalidade(String nome, TipoFuncionalidade tipo) {
		this.nome = nome;
		this.tipo = tipo;
	}
}
