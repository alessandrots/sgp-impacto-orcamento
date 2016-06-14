package br.mp.mpf.impactoorcamento.sgp.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.InputMismatchException;

public class Util {
	
	private static Util instancia;
//	private static ArrayList<String> listaUUID;
	private static final String DATE_FORMAT = "dd/MM/yyyy";
	private static final String TIME_FORMAT = "kk:mm:ssssss";
	
	private static final String DATE_TIME_FORMAT = "dd/MM/yyyy kk:mm:ss";
	
	public static Util newInstance() {
		if (instancia == null) {
			instancia = new Util();
		}
		
		return instancia;
	}
	
	public String gerarDataHoraFormatada(Date data) {
		String dataHoraFmt = null;
		
		if (data != null) {
			SimpleDateFormat fmt = new SimpleDateFormat(DATE_TIME_FORMAT);
			dataHoraFmt = fmt.format(data);
		}
		
		return dataHoraFmt;
	}
	
	public String gerarDataHoraFormatada(Date data, String formato) {
		char formatoCh = 'D';
		
		if (formato == null || formato.equalsIgnoreCase("")) {
			formatoCh = '\u0000';
		} else {
			formatoCh = formato.charAt(0);
		}
		
		return this.gerarDataHoraFormatada(data, formatoCh);
	}
	
	public String gerarDataHoraFormatada(Date data, char formato) {
		String dataHoraFmt = null;
		
		if (formato == '\u0000') {
			formato ='D';
		}
		
		if (data != null) {
			SimpleDateFormat fmt = new SimpleDateFormat(Character.toUpperCase(formato) == 'T' ? TIME_FORMAT : DATE_FORMAT);
			dataHoraFmt = fmt.format(data);
		}
		
		return dataHoraFmt;
	}
	
	/**
	 * Método que adiciona 0 (zeros) ao valor passado, vai adicionar o total de zeros que faltar para complementar o valor
	 * passado no segundo parâmetro.
	 * 
	 * @param value
	 * @param posicoes
	 * @return String
	 */
	public String completarZerosAEsquerda(String value, int posicoes) {
		StringBuffer stb = new StringBuffer();
		int totalPrefixo = posicoes - value.length();
		
		for (int i = 0; i < totalPrefixo; i++) {
			stb.append("0");
		}
		
		stb.append(value);
		
		return stb.toString();
	}
	
	/**
	 * Métodos que valida o CPF informado
	 * @param CPF
	 * @return true Se válido
	 * @return false Se inválido
	 */
	public boolean validaCpf(String Cpf) {
		
		Cpf = Cpf.replaceAll("[\\.-]", "");

		// considera-se erro CPF's formados por uma sequencia de numeros iguais
		if (Cpf.equals("00000000000") || Cpf.equals("11111111111")
				|| Cpf.equals("22222222222") || Cpf.equals("33333333333")
				|| Cpf.equals("44444444444") || Cpf.equals("55555555555")
				|| Cpf.equals("66666666666") || Cpf.equals("77777777777")
				|| Cpf.equals("88888888888") || Cpf.equals("99999999999")
				|| (Cpf.length() != 11))
			return (false);

		char dig10, dig11;
		int sm, i, r, num, peso;

		// "try" - protege o codigo para eventuais erros de conversao de tipo
		// (int)
		try {
			// Calculo do 1o. Digito Verificador
			sm = 0;
			peso = 10;
			for (i = 0; i < 9; i++) {
				// converte o i-esimo caractere do CPF em um numero:
				// por exemplo, transforma o caractere '0' no inteiro 0
				// (48 eh a posicao de '0' na tabela ASCII)
				num = (int) (Cpf.charAt(i) - 48);
				sm = sm + (num * peso);
				peso = peso - 1;
			}

			r = 11 - (sm % 11);
			if ((r == 10) || (r == 11))
				dig10 = '0';
			else
				dig10 = (char) (r + 48); // converte no respectivo caractere
											// numerico

			// Calculo do 2o. Digito Verificador
			sm = 0;
			peso = 11;
			for (i = 0; i < 10; i++) {
				num = (int) (Cpf.charAt(i) - 48);
				sm = sm + (num * peso);
				peso = peso - 1;
			}

			r = 11 - (sm % 11);
			if ((r == 10) || (r == 11))
				dig11 = '0';
			else
				dig11 = (char) (r + 48);

			// Verifica se os digitos calculados conferem com os digitos
			// informados.
			if ((dig10 == Cpf.charAt(9)) && (dig11 == Cpf.charAt(10)))
				return (true);
			else
				return (false);
		} catch (InputMismatchException erro) {
			return (false);
		}
	}
	
	public Date convertDataStringToDate(String data) {
		String[] params = data.split("/");
		
		int dia, mes, ano;
		
		dia = Integer.parseInt(params[0]);
		mes = Integer.parseInt(params[1]);
		ano = Integer.parseInt(params[2]);
		
		Calendar c = Calendar.getInstance();
		c.set(Calendar.DATE, dia);
		c.set(Calendar.MONTH, mes-1);
		c.set(Calendar.YEAR, ano);
		
		return c.getTime();
	}
	
	public Calendar getActualDate() {
		Calendar c = Calendar.getInstance();
		return c;
	}
	
	public Calendar getMaxDate() {
		Calendar c = Calendar.getInstance();
		c.set(Calendar.HOUR, 23);
		c.set(Calendar.MINUTE, 59);
		c.set(Calendar.SECOND, 59);
		return c;
	}

	public Calendar getMinDate() {
		Calendar d = Calendar.getInstance();
		d.add(Calendar.DATE, -3);
		d.set(Calendar.HOUR, 0);
		d.set(Calendar.MINUTE, 0);
		d.set(Calendar.SECOND, 0);
		return d;
	}
	
	public Calendar getCalendarByDate(Date data) {
		Calendar c = Calendar.getInstance();
		c.setTime(data);		
		return c;
	}

	
}