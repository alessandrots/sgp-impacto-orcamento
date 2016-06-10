package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.app.dao.ConcursoRemocaoDAO;

@Component("concursoRemocaoFacade")
public class ConcursoRemocaoFacade {
	
	@Autowired
	private ConcursoRemocaoDAO concursoRemocaoDAO;
	
//	@Autowired
//	private ConcursoRemocaoDAO concursoRemocaoDAO;
	
	@Autowired
	@Qualifier("impactoOrcProperties")
	private Properties impactoOrcProperties;

//	private Usuario autenticado;
	
	public ConcursoRemocaoFacade() {
		super();
	}
	
	@Transactional
	public String recuperarRemocoesEntreDatas(Date dataMaxima) {
		String tmp  = "";
		System.out.println(" Properties referência = " + impactoOrcProperties);
		this.concursoRemocaoDAO.recuperarRemocoesEntreDatas(dataMaxima);
		return tmp;
	}

	/**
	 * @return the concursoRemocaoDAO
	 */
	public ConcursoRemocaoDAO getConcursoRemocaoDAO() {
		return concursoRemocaoDAO;
	}

	/**
	 * @param concursoRemocaoDAO the concursoRemocaoDAO to set
	 */
	public void setConcursoRemocaoDAO(ConcursoRemocaoDAO concursoRemocaoDAO) {
		this.concursoRemocaoDAO = concursoRemocaoDAO;
	}	
	
	/**
	 * @param autenticado the autenticado to set
	 */
//	public void setAutenticado(Usuario autenticado) {
//		this.autenticado = autenticado;
//	}

	
}
