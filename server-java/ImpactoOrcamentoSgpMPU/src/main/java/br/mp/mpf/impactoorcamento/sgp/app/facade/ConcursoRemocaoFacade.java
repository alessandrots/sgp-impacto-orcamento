package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.core.app.PrincipalFacade;

@Component("concursoRemocaoFacade")
public class ConcursoRemocaoFacade extends PrincipalFacade{
	
	public ConcursoRemocaoFacade() {
		super();
	}
	
	@Transactional
	public String recuperarRemocoesEntreDatas(Date dataMaxima) {
		String tmp  = "";
		System.out.println(" ConcursoRemocaoFacade Properties referência = " + this.getOrcamentoProperties());
		this.getConcursoRemocaoDAO().recuperarRemocoesEntreDatas(dataMaxima);
		return tmp;
	}
	
}
