package br.com.netservicos.mti.util;

import java.io.Serializable;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
public class MessageError implements Serializable {

    private static final long serialVersionUID = -108723144812827720L;

    private String field;

    private String message;

    public MessageError() { }

    public MessageError(String field, String message) {
        this.field = field;
        this.message = message;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
