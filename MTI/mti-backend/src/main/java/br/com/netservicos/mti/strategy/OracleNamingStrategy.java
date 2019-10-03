/**
 * 
 */
package br.com.netservicos.mti.strategy;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

/**
 * @author Leandro Celestino 2 de out de 2019
 *
 */
public class OracleNamingStrategy extends PhysicalNamingStrategyStandardImpl {

	private static final long serialVersionUID = 1L;

	@Override
    public Identifier toPhysicalColumnName(Identifier name, JdbcEnvironment context) {
        Identifier original = super.toPhysicalColumnName(name, context);
        if(original.getText().length() > 30) {
            return Identifier.toIdentifier(original.getText().substring(0, 30), original.isQuoted());
        }
        return original;
    }
	
	@Override
	public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment context) {
        Identifier original = super.toPhysicalTableName(name, context);
        if(original.getText().length() > 30) {
            return Identifier.toIdentifier(original.getText().substring(0, 30), original.isQuoted());
        }
        return original;
	}
	
	@Override
	public Identifier toPhysicalSequenceName(Identifier name, JdbcEnvironment context) {
        Identifier original = super.toPhysicalSequenceName(name, context);
        if(original.getText().length() > 30) {
            return Identifier.toIdentifier(original.getText().substring(0, 30), original.isQuoted());
        }
        return original;
	}
	
}