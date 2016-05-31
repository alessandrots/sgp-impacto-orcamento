package br.com.caelum.app.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.com.caelum.app.dao.TarefaDAO;

@Component("myFacade")
public class MyFacade {
	
	@Autowired
	private TarefaDAO tarefaDAO;

//	private Usuario autenticado;
	
	public MyFacade() {
		super();
	}	
	
	@Transactional
	public String prepararParaRealizar(Integer param1, Integer param3) {
		String tmp  = "";
		
		this.tarefaDAO.prepararParaRealizar("teste");
		
		return tmp;
	}
	
	public TarefaDAO getTarefaDAO() {
		return tarefaDAO;
	}

	public void setTarefaDAO(TarefaDAO tarefaDAO) {
		this.tarefaDAO = tarefaDAO;
	}
	
	/**
	 * @param autenticado the autenticado to set
	 */
//	public void setAutenticado(Usuario autenticado) {
//		this.autenticado = autenticado;
//	}

	
}
