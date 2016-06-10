package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.app.dao.ConcursadoDAO;

@Component("concursadoFacade")
public class ConcursadoFacade {
	
	@Autowired
	private ConcursadoDAO concursadoDAO;
	
	
	@Autowired
	@Qualifier("impactoOrcProperties")
	private Properties impactoOrcProperties;

//	private Usuario autenticado;
	
	public ConcursadoFacade() {
		super();
	}	
	
	@Transactional
	public String recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
		String tmp  = "";
		this.concursadoDAO.recuperarNomeacoesEntreDatas(dataInicio, dataFinal);
		return tmp;
	}	
	
	/**
	 * @return the concursadoDAO
	 */
	public ConcursadoDAO getConcursadoDAO() {
		return concursadoDAO;
	}

	/**
	 * @param concursadoDAO the concursadoDAO to set
	 */
	public void setConcursadoDAO(ConcursadoDAO concursadoDAO) {
		this.concursadoDAO = concursadoDAO;
	}
	
	/**
	 * @param autenticado the autenticado to set
	 */
//	public void setAutenticado(Usuario autenticado) {
//		this.autenticado = autenticado;
//	}
}
