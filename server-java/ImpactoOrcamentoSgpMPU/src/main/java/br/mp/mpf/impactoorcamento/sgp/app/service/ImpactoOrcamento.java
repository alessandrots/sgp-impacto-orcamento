package br.mp.mpf.impactoorcamento.sgp.app.service;

import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursadoJSon;
import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursoRemocaoJSon;
import br.mp.mpf.impactoorcamento.sgp.core.infra.BeanManager;
import br.mp.mpf.impactoorcamento.sgp.util.EngineJson;
import br.mp.mpf.impactoorcamento.sgp.util.Util;


@Path("/impactoOrcamentoService")
@Component("impactoOrcamentoService")
public class ImpactoOrcamento extends BeanManager {
	
	@Autowired
	@Qualifier("impactoOrcamentoProperties")
	private Properties impactoOrcamentoProperties;

	@GET
	@Path("/realizarImpactoRemocaoComConcursados/{dia}/{mes}/{ano}")
	@Produces("text/json;charset=UTF-8")
	/**
	 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/impactoOrcamentoService/realizarImpactoRemocaoComConcursados/01/01/2015
	 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/impactoOrcamentoService/realizarImpactoRemocaoComConcursados/01/01/2015
	 * 
	 * @param dataMaxima
	 * @return Response
	 */
	public Response realizarImpactoRemocaoComConcursados(@PathParam("dia") String dia, @PathParam("mes") String mes, @PathParam("ano") String ano) {
		init();
		
		String dataInicialRemocao = dia + "/"+ mes + "/"+ ano;
		
		Date dtInicialRemocao = Util.newInstance().convertDataStringToDate(dataInicialRemocao);
		
		Date dataAtual = Util.newInstance().getActualDate().getTime();
		
		List<ConcursadoJSon> listaConcursado 			= this.getConcursadoFacade().recuperarNomeacoesEntreDataInicialRemocaoEDataAtual(dtInicialRemocao, dataAtual);
		
		List<ConcursoRemocaoJSon> listaConcursoRemocao 	= this.getConcursoRemocaoFacade().recuperarRemocoesAPartirDataInicialRemocao(dtInicialRemocao);
		
		List<ConcursadoJSon> lista  = this.getImpactoOrcamentoFacade().processarImpactoNomeacoesComRemocoes(listaConcursado, listaConcursoRemocao);
		
		String output = EngineJson.getInstancia().serializarLista(lista);
		
		return Response.status(200).entity(output).build();
	}
}
