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
	
}
