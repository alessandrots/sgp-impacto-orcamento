package br.mp.mpf.impactoorcamento.sgp.core.server;

public interface IService {

	public void execute(String acao);
	
	public void setParametros(Object[] params);
	
	public Object[] getParametros();
	
	public void setJSon(String json);
	
	public String getJSon();
	
	public String getResposta();
	
	public void setResposta(String resposta);
	
//	public void setUsuarioAutenticado(AuthenticationOutline auth);
	
//	public Usuario getUsuarioAutenticado();
}
