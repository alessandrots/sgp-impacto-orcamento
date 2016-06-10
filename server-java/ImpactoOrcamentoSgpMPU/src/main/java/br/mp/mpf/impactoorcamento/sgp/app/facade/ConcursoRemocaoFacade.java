package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.core.app.PrincipalFacade;

@Component("concursoRemocaoFacade")
public class ConcursoRemocaoFacade extends PrincipalFacade{
	
//	@Autowired
//	private ConcursoRemocaoDAO concursoRemocaoDAO;
	
//	@Autowired
//	@Qualifier("impactoOrcProperties")
//	private Properties impactoOrcProperties;

//	private Usuario autenticado;
	
	public ConcursoRemocaoFacade() {
		super();
	}
	
	@Transactional
	public String recuperarRemocoesEntreDatas(Date dataMaxima) {
		String tmp  = "";
		System.out.println(" Properties referência = " + this.getOrcamentoProperties());
		this.getConcursoRemocaoDAO().recuperarRemocoesEntreDatas(dataMaxima);
		return tmp;
	}

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
	
	/**
	 * @param autenticado the autenticado to set
	 */
//	public void setAutenticado(Usuario autenticado) {
//		this.autenticado = autenticado;
//	}

	
}
