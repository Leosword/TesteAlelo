package br.com.netservicos.mti.constantes;

import java.util.HashMap;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
public enum TipoNotificacaoEmTela {

	EM_CAMPO("EmCampo"), POUPUP("PopUp");

	static HashMap<String, TipoNotificacaoEmTela> values = new HashMap<String, TipoNotificacaoEmTela>();

	static {
		for (TipoNotificacaoEmTela status : values()) {
			values.put(status.nome, status);
		}
	}

	public static TipoNotificacaoEmTela get(String nome) {
		for (TipoNotificacaoEmTela obj : TipoNotificacaoEmTela.values()) {
			if (obj.getNome().equalsIgnoreCase(nome))
				return obj;
		}
		return null;
	}

	String nome;

	public String getNome() {
		return this.nome;
	}

	TipoNotificacaoEmTela(String nome) {
		this.nome = nome;
	}
}