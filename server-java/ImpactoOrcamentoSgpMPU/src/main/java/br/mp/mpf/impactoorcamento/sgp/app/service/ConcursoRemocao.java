package br.mp.mpf.impactoorcamento.sgp.app.service;
/**
 * Classe para objetos do tipo Funcionários, onde serão contidos, valores e métodos para o mesmo.

 * @author alessandroteixeira@mpf.mp.br

 * @version 1.00

 * @since Release 01 da aplicação

 */

import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

import br.mp.mpf.impactoorcamento.sgp.core.infra.BeanManager;
import br.mp.mpf.impactoorcamento.sgp.util.Util;

@Path("/concursoRemocaoService")
@Component("concursoRemocaoService")
public class ConcursoRemocao extends BeanManager {
		
		@GET
		@Path("/getRemocoesPorDatas")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDatas?dataMaxima=01/01/2015
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDatas?dataMaxima=01/01/2015
		 * 
		 * @param dataMaxima
		 * @return Response
		 */
		public Response getRemocoesPorDatas(@QueryParam("dataMaxima") String dataMaxima) {
			init();
			
			getConcursoRemocaoFacade();
			
			Date dt = Util.newInstance().convertDataStringToDate(dataMaxima);
			
			this.getConcursoRemocaoFacade().recuperarRemocoesEntreDatas(dt);
			
			String output = "Jersey say : " + " dataInicial : " + dataMaxima;
			
			return Response.status(200).entity(output).build();
		}
		
}
