package br.com.netservicos.mti.util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import br.com.netservicos.mti.constantes.Flag;
import br.com.netservicos.mti.constantes.TipoNotificacaoEmTela;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
@Getter
@Setter
@Accessors(chain = true)
public class ValidationResponse implements Serializable {

    private static final long serialVersionUID = 854879902734658567L;

    private List<MessageError> fieldErrors = new ArrayList<>();

    private String status;
    
    private Object resultado;
    
    private TipoNotificacaoEmTela tipo = TipoNotificacaoEmTela.EM_CAMPO;
    
    private String confirmaOperacao = Flag.NAO.getValue();

    public ValidationResponse() {
        // Construtor Padrão
    }

    public ValidationResponse(String status) {
        this.status = status;
    }

    public void addFieldError(String path, String message) {
        MessageError error = new MessageError(path, message);
        fieldErrors.add(error);
    }
    
    public void addFieldError(String path, String message, TipoNotificacaoEmTela tipo) {
        MessageError error = new MessageError(path, message);
        fieldErrors.add(error);
        this.tipo = tipo;
    }

    public void setTipo(String tipo){
    	this.tipo = TipoNotificacaoEmTela.get(tipo);
    }
    
    public String getTipo(){
    	return tipo.getNome();
    }

}
