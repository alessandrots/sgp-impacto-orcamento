package br.mp.mpf.impactoorcamento.sgp.app.json;

public class Entrada {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2571122414715090598L;
	String nuCpf;
	String coAditamento;
	String senha;
	
	public String getNuCpf() {
		return nuCpf;
	}
	public void setNuCpf(String nuCpf) {
		this.nuCpf = nuCpf;
	}
	public String getCoAditamento() {
		return coAditamento;
	}
	public void setCoAditamento(String coAditamento) {
		this.coAditamento = coAditamento;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	@Override
	public String toString() {
	    return "Track [nuCpf=" + nuCpf + ", coAditamento=" + coAditamento + ", senha=" + senha + "]";
	}

}
