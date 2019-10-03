package br.com.netservicos.mti.enumerator;

	public  enum StatusFluxo {

	NOVO_INCIDENTE("NOVO_INCIDENTE"), ACIONAMENTO_EPS_EFETIVADO("ACIONAMENTO_EPS_EFETIVADO"), REPROVADO("REPROVADO"), APROVADO("APROVADO"), TEMPO_LIMITE_EXCEDIDO("TEMPO_LIMITE_EXCEDIDO");

	public static StatusFluxo get(String nome) {
		for(StatusFluxo obj : StatusFluxo.values()){
			if(obj.getNome().equalsIgnoreCase(nome))
				return obj;
		}
		return null;
	}
	
	String nome;
	
	public String getNome() {
		return nome;
	}

	StatusFluxo(String nome) {
		this.nome = nome;
	} 
}
