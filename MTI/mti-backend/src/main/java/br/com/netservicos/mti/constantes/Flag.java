package br.com.netservicos.mti.constantes;

/**
 * 
 * @author Leandro Celestino 2 de out de 2019
 */
public enum Flag {

    SIM("S"),
    NAO("N");
 
    private String value;
 
    Flag(String value) {
        this.value = value;
    }
 
    public String getValue() {
        return value;
    }
}
