package br.com.netservicos.mti.enumerator;

/**
 * 
 * @author Leandro Celestino 10 de ago de 2018
 */
public enum ParametroSistema {

	MINUTOS_LIMITE_SLA_INCIDENTE("MINUTOS_LIMITE_SLA_INCIDENTE"),
	MINUTOS_RETENTATIVA_ABERTURA_EVENTO_DIARIO_BORDO("MINUTOS_RETENTATIVA_ABERTURA_EVENTO_DIARIO_BORDO"),
	MINUTOS_RETENTATIVA_ENCERRAMENTO_EVENTO_DIARIO_BORDO("MINUTOS_RETENTATIVA_ENCERRAMENTO_EVENTO_DIARIO_BORDO"),
	;

	public static ParametroSistema get(String nome) {
		for (ParametroSistema obj : ParametroSistema.values()) {
			if (obj.getNome().equalsIgnoreCase(nome))
				return obj;
		}
		return null;
	}

	String nome;

	public String getNome() {
		return nome;
	}

	ParametroSistema( String nome) {
		this.nome = nome;
	}
}
