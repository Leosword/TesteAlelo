package br.com.netservicos.mti.util;

import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;

/**
 * @author Leandro Celestino 2 de out de 2019
 */
public class EncryptionUtil {
	
	private static PooledPBEStringEncryptor encryptor = null;

	private static String chaveDeCriptografia = "PBEWITHMD5ANDDES";
	private static String password = "parasha";

	static {
		encryptor = new PooledPBEStringEncryptor();
		encryptor.setPoolSize(4);
		encryptor.setPassword(password);
		encryptor.setAlgorithm(chaveDeCriptografia);
	}

	public static String encrypt(String input) {
		return encryptor.encrypt(input);
	}

	public static String decrypt(String encryptedMessage) {
		return encryptor.decrypt(encryptedMessage);
	}
}
