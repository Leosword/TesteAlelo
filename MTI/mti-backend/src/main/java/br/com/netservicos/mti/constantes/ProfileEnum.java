package br.com.netservicos.mti.constantes;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
public enum ProfileEnum {

	USUARIO_LOCAL("LOCAL"), USUARIO_LDAP("LDAP");

	private String value;

	ProfileEnum(String value) {
		this.value = value;
	}
	
	public String getValue(){
        return value;
    }

}
