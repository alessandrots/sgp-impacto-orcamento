package br.mp.mpf.impactoorcamento.sgp.core.infra;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;

import org.springframework.beans.factory.annotation.Autowired;

import br.mp.mpf.impactoorcamento.sgp.app.facade.ConcursadoFacade;
import br.mp.mpf.impactoorcamento.sgp.app.facade.ConcursoRemocaoFacade;
import br.mp.mpf.impactoorcamento.sgp.core.server.SpringManager;

public class ManagerBean {
	
	@Autowired	 
	private ConcursadoFacade concursadoFacade;
	
	@Autowired	 
	private ConcursoRemocaoFacade concursoRemocaoFacade;
	
	@Context
	HttpServletRequest request;

	public void init() {
		SpringManager.getInstancia().setServletContext(request.getSession().getServletContext());
	}

	public ConcursoRemocaoFacade getConcursoRemocaoFacade() {
		if (this.concursoRemocaoFacade == null) {
			this.concursoRemocaoFacade = SpringManager.getInstancia().getBean("concursoRemocaoFacade");
		}
		return this.concursoRemocaoFacade;
	}
	
	public ConcursadoFacade getConcursadoFacade() {
		if (this.concursadoFacade == null) {
			this.concursadoFacade = SpringManager.getInstancia().getBean("concursadoFacade");
		}
		return this.concursadoFacade;
	}
}
