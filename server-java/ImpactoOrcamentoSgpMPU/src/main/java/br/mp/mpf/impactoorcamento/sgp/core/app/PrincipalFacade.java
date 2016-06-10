package br.mp.mpf.impactoorcamento.sgp.core.app;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import br.mp.mpf.impactoorcamento.sgp.app.dao.ConcursadoDAO;
import br.mp.mpf.impactoorcamento.sgp.app.dao.ConcursoRemocaoDAO;
import br.mp.mpf.impactoorcamento.sgp.app.domain.Usuario;

public class PrincipalFacade {

	@Autowired
	private ConcursoRemocaoDAO concursoRemocaoDAO;
	
	@Autowired
	private ConcursadoDAO concursadoDAO;
	
	private Usuario autenticado;
	
	@Autowired
	@Qualifier("impactoOrcamentoProperties")
	private Properties orcamentoProperties;

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
	 * @return the autenticado
	 */
	public Usuario getAutenticado() {
		return autenticado;
	}

	/**
	 * @param autenticado the autenticado to set
	 */
	public void setAutenticado(Usuario autenticado) {
		this.autenticado = autenticado;
	}

	/**
	 * @return the impactoOrcProperties
	 */
	public Properties getOrcamentoProperties() {
		return orcamentoProperties;
	}

	/**
	 * @param impactoOrcProperties the impactoOrcProperties to set
	 */
	public void setImpactoOrcProperties(Properties impactoOrcProperties) {
		this.orcamentoProperties = impactoOrcProperties;
	}
	
	
}
