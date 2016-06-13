package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.core.infra.Facade;

@Component("concursoRemocaoFacade")
public class ConcursoRemocaoFacade extends Facade {
	
	public ConcursoRemocaoFacade() {
		super();
	}
	
	@Transactional
	public String recuperarRemocoesEntreDatas(Date dataMaxima) {
		String tmp  = "";
		System.out.println(" ConcursoRemocaoFacade Properties referência = " + this.getOrcamentoProperties());
//		this.getConcursoRemocaoDAO().recuperarRemocoesEntreDatas(dataMaxima);
		this.getConcursoRemocaoDAO().recuperarRemocoesEntreDatas(dataMaxima).forEach((concursoR)->{
			System.out.println("concursoRemocao: " + ToStringBuilder.reflectionToString(concursoR, ToStringStyle.SHORT_PREFIX_STYLE));
		});
		return tmp;
	}
	
	
//	@Autowired
//	private ConcursoRemocaoDAO concursoRemocaoDAO;
//	
//	@Autowired
//	private ConcursadoDAO concursadoDAO;
//	
//	private Usuario autenticado;
//	
//	@Autowired
//	@Qualifier("impactoOrcamentoProperties")
//	private Properties orcamentoProperties;
//
//	/**
//	 * @return the concursoRemocaoDAO
//	 */
//	public ConcursoRemocaoDAO getConcursoRemocaoDAO() {
//		return concursoRemocaoDAO;
//	}
//
//	/**
//	 * @param concursoRemocaoDAO the concursoRemocaoDAO to set
//	 */
//	public void setConcursoRemocaoDAO(ConcursoRemocaoDAO concursoRemocaoDAO) {
//		this.concursoRemocaoDAO = concursoRemocaoDAO;
//	}
//
//	/**
//	 * @return the concursadoDAO
//	 */
//	public ConcursadoDAO getConcursadoDAO() {
//		return concursadoDAO;
//	}
//
//	/**
//	 * @param concursadoDAO the concursadoDAO to set
//	 */
//	public void setConcursadoDAO(ConcursadoDAO concursadoDAO) {
//		this.concursadoDAO = concursadoDAO;
//	}
//
//	/**
//	 * @return the autenticado
//	 */
//	public Usuario getAutenticado() {
//		return autenticado;
//	}
//
//	/**
//	 * @param autenticado the autenticado to set
//	 */
//	public void setAutenticado(Usuario autenticado) {
//		this.autenticado = autenticado;
//	}
//
//	/**
//	 * @return the impactoOrcProperties
//	 */
//	public Properties getOrcamentoProperties() {
//		return orcamentoProperties;
//	}
//
//	/**
//	 * @param impactoOrcProperties the impactoOrcProperties to set
//	 */
//	public void setImpactoOrcProperties(Properties impactoOrcProperties) {
//		this.orcamentoProperties = impactoOrcProperties;
//	}
	
}
