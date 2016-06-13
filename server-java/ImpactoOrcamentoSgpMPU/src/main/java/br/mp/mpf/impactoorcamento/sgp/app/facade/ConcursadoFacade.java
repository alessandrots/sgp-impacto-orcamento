package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.Date;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.core.infra.Facade;

@Component("concursadoFacade")
public class ConcursadoFacade extends Facade {
	
	public ConcursadoFacade() {
		super();
	}	
	
	@Transactional
	public String recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
		String tmp  = "";
		System.out.println(" ConcursadoFacade Properties referência = " + this.getOrcamentoProperties());
//		List<Concursado> lista = this.getConcursadoDAO().recuperarNomeacoesEntreDatas(dataInicio, dataFinal);
		this.getConcursadoDAO().recuperarNomeacoesEntreDatas(dataInicio, dataFinal).forEach((concursado)->{
			System.out.println("concursoRemocao: " + ToStringBuilder.reflectionToString(concursado, ToStringStyle.SHORT_PREFIX_STYLE));
		});
		
		return tmp;
	}	

}
