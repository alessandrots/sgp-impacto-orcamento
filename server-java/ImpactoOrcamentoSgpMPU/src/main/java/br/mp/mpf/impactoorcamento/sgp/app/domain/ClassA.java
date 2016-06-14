package br.mp.mpf.impactoorcamento.sgp.app.domain;

public class ClassA {
	private String stringField;
	private Long longField;
	private boolean booleanField;
	private ClassA1 classA1;

	public String getStringField() {
		return stringField;
	}

	public void setStringField(String stringField) {
		this.stringField = stringField;
	}

	public Long getLongField() {
		return longField;
	}

	public void setLongField(Long longField) {
		this.longField = longField;
	}

	public boolean isBooleanField() {
		return booleanField;
	}

	public void setBooleanField(boolean booleanField) {
		this.booleanField = booleanField;
	}

	public ClassA1 getClassA1() {
		return classA1;
	}

	public void setClassA1(ClassA1 classA1) {
		this.classA1 = classA1;
	}
	
	public String toString(){
		StringBuilder sb = new StringBuilder();
		sb.append("\nstringField =" + stringField);
		sb.append("\nlongField = " + longField);
		sb.append("\nbooleanField =" +booleanField);
		sb.append("\nclassA1 =" +classA1);
		return sb.toString();
	}
}
