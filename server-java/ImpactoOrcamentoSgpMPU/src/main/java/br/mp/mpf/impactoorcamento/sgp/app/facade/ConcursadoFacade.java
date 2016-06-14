package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.app.domain.Concursado;
import br.mp.mpf.impactoorcamento.sgp.app.domain.Domain;
import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursadoJSon;
import br.mp.mpf.impactoorcamento.sgp.core.infra.Facade;
import br.mp.mpf.impactoorcamento.sgp.util.EngineJson;
import br.mp.mpf.impactoorcamento.sgp.util.Util;

@Component("concursadoFacade")
public class ConcursadoFacade extends Facade {
	
	public ConcursadoFacade() {
		super();
	}	
	
	@Transactional
	public String recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
		String tmp  = "";
		List<ConcursadoJSon> lista = new ArrayList<ConcursadoJSon>();
//		System.out.println(" ConcursadoFacade Properties referência = " + this.getOrcamentoProperties());
		
		this.getConcursadoDAO().recuperarNomeacoesEntreDatas(dataInicio, dataFinal).forEach((concursado)->{
//			System.out.println("concursoRemocao: " + ToStringBuilder.reflectionToString(concursado, ToStringStyle.SHORT_PREFIX_STYLE));
			lista.add((ConcursadoJSon)convertJson(concursado));
		});
		
		tmp = EngineJson.getInstancia().serializarLista(lista);
		
		return tmp;
	}	
	
	public ConcursadoJSon copyProperties(Domain d) {
		Concursado domain = (Concursado)d;
		ConcursadoJSon to = new ConcursadoJSon();
		
		to.setInscricao(domain.getInscricao());
		to.setNumeroEdital(domain.getNumeroEdital());
		to.setUfNomeacao(domain.getUfNomeacao());
		to.setCargo(domain.getCargo());
		to.setCargoDescricao(domain.getCargoDescricao());
		to.setNome(domain.getNome());
		to.setNumeroPortaria(domain.getNumeroPortaria());
		to.setDataNomeacao(Util.newInstance().gerarDataHoraFormatada(domain.getDataNomeacao(), null));
		to.setDataExercicio(Util.newInstance().gerarDataHoraFormatada(domain.getDataExercicio(), null));
		to.setNumeroVaga(domain.getNumeroVaga());	
		to.setOrigemVaga(domain.getOrigemVaga());
		to.setDataDesprovimento(Util.newInstance().gerarDataHoraFormatada(domain.getDataDesprovimento(), null));
		to.setLeiVaga(domain.getLeiVaga());
		to.setDataPortariaSemEfeito(domain.getDataPortariaSemEfeito());
		to.setNrPortariaSemEfeito(domain.getNrPortariaSemEfeito());
		
		return to;
	}

}
