package br.mp.mpf.impactoorcamento.sgp.app.domain;

public class ClassB1 {
	private String stringField1;
	private Long longField1;
	private boolean booleanField1;
	
	public String getStringField1() {
		return stringField1;
	}

	public void setStringField1(String stringField1) {
		this.stringField1 = stringField1;
	}

	public Long getLongField1() {
		return longField1;
	}

	public void setLongField1(Long longField1) {
		this.longField1 = longField1;
	}

	public boolean isBooleanField1() {
		return booleanField1;
	}

	public void setBooleanField1(boolean booleanField1) {
		this.booleanField1 = booleanField1;
	}

	public String toString(){
		StringBuilder sb = new StringBuilder();
		sb.append("\n stringField =" + stringField1);
		sb.append("\n longField = " + longField1);
		sb.append("\n booleanField =" +booleanField1);
		return sb.toString();
	}
	
}
