package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.mp.mpf.impactoorcamento.sgp.app.domain.ConcursoRemocao;
import br.mp.mpf.impactoorcamento.sgp.app.domain.Domain;
import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursoRemocaoJSon;
import br.mp.mpf.impactoorcamento.sgp.core.infra.Facade;
import br.mp.mpf.impactoorcamento.sgp.util.EngineJson;
import br.mp.mpf.impactoorcamento.sgp.util.Util;

@Component("concursoRemocaoFacade")
public class ConcursoRemocaoFacade extends Facade {
	
	public ConcursoRemocaoFacade() {
		super();
	}
	
	@Transactional
	public String recuperarRemocoesEntreDatas(Date dataMaxima) {
		String tmp  = "";
		List<ConcursoRemocaoJSon> lista = new ArrayList<ConcursoRemocaoJSon>();
		
		this.getConcursoRemocaoDAO().recuperarRemocoesEntreDatas(dataMaxima).forEach((concursoR)->{
			lista.add((ConcursoRemocaoJSon)convertJson(concursoR));
		});
		
		tmp = EngineJson.getInstancia().serializarLista(lista);
		
		return tmp;
	}
	
	@Transactional
	public String recuperarRemocoesPorVaga(Long numeroVaga) {
		String tmp  = "";
		List<ConcursoRemocaoJSon> lista = new ArrayList<ConcursoRemocaoJSon>();
		
		this.getConcursoRemocaoDAO().recuperarRemocoesPorVaga(numeroVaga).forEach((concursoR)->{
			lista.add((ConcursoRemocaoJSon)convertJson(concursoR));
		});
		
		tmp = EngineJson.getInstancia().serializarLista(lista);
		
		return tmp;
	}
	
	@Transactional
	public String recuperarDatasRemocoes() {
		String tmp  = "";
		List<ConcursoRemocaoJSon> lista = new ArrayList<ConcursoRemocaoJSon>();
		
		this.getConcursoRemocaoDAO().recuperarDatasRemocoes().forEach((arrayGroupCount)->{
			ConcursoRemocaoJSon objeto = new ConcursoRemocaoJSon();
			for (int i = 0; i< arrayGroupCount.length; i ++ ){
				if (i == 0){
					objeto.setDataRemocaoGravacao(Util.newInstance().gerarDataHoraFormatada((Date)arrayGroupCount[0]));
				} else {
					objeto.setTotalRemocao((Long)arrayGroupCount[1]);
				}
			}
			lista.add(objeto);
		});
		
		tmp = EngineJson.getInstancia().serializarLista(lista);
		
		return tmp;
	}
	
	public ConcursoRemocaoJSon copyProperties(Domain d) {
		ConcursoRemocao domain = (ConcursoRemocao)d;
		ConcursoRemocaoJSon to = new ConcursoRemocaoJSon();
		
		to.setNumeroVaga(domain.getNumeroVaga());
		to.setCargoDescricao(domain.getCargoDescricao());
		to.setRamoOrigem(domain.getRamoOrigem());
		to.setUfOrigem(domain.getUfOrigem());
		to.setUnidadeOrigem(domain.getUnidadeOrigem());
		to.setNumeroVagaNomeacao(domain.getNumeroVagaNomeacao());
		to.setRamoDestino(domain.getRamoDestino());
		to.setUfDestino(domain.getUfDestino());
		to.setUnidadeDestino(domain.getUnidadeDestino());
		to.setLei(domain.getLei());
		to.setMotivo(domain.getMotivo());
		to.setDataDesprovimento(Util.newInstance().gerarDataHoraFormatada(domain.getDataDesprovimento(), null));
		to.setDataPublicacao(Util.newInstance().gerarDataHoraFormatada(domain.getDataPublicacao(), null));
		to.setUltimoOcupante(domain.getUltimoOcupante());
//		to.setDataRemocaoGravacao(Util.newInstance().gerarDataHoraFormatada(domain.getDataRemocaoGravacao(), null));
		
		return to;
	}
	
}
