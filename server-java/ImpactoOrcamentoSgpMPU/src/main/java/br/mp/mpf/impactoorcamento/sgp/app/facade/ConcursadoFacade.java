package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.core.app.PrincipalFacade;

@Component("concursadoFacade")
public class ConcursadoFacade extends PrincipalFacade {
	
	public ConcursadoFacade() {
		super();
	}	
	
	@Transactional
	public String recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
		String tmp  = "";
		System.out.println(" ConcursadoFacade Properties referência = " + this.getOrcamentoProperties());
		this.getConcursadoDAO().recuperarNomeacoesEntreDatas(dataInicio, dataFinal);
		return tmp;
	}	

}
