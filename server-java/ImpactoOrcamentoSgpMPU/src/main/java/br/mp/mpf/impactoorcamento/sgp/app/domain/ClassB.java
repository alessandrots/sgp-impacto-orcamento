package br.mp.mpf.impactoorcamento.sgp.app.domain;

public class ClassB {
	private String stringField;
	private Long longField;
	private boolean booleanField;

	private ClassB1 classB1;

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

	public ClassB1 getClassB1() {
		return classB1;
	}

	public void setClassB1(ClassB1 classB1) {
		this.classB1 = classB1;
	}
	public String toString(){
		StringBuilder sb = new StringBuilder();
		sb.append("\nstringField =" + stringField);
		sb.append("\nlongField = " + longField);
		sb.append("\nbooleanField =" +booleanField);
		sb.append("\nclassB1 =" +classB1);
		return sb.toString();
	}
}
