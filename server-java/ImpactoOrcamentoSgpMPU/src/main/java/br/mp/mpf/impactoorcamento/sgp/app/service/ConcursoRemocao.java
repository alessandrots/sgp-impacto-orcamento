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
import javax.ws.rs.PathParam;
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
		@Path("/getRemocoesPorDataInicialCompleta")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDataInicialCompleta?dataInicialRemocao=01/01/2015
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDataInicialCompleta?dataInicialRemocao=01/01/2015
		 * 
		 * @param dataInicialRemocao
		 * @return Response
		 */
		public Response getRemocoesPorDataInicialCompleta(@QueryParam("dataInicialRemocao") String dataInicialRemocao) {
			init();
			
			getConcursoRemocaoFacade();
			
			Date dt = Util.newInstance().convertDataStringToDate(dataInicialRemocao);
			
			String output  = this.getConcursoRemocaoFacade().recuperarRemocoesAPartirDataInicialRemocaoParaJson(dt);
			
			return Response.status(200).entity(output).build();
		}
		
		@GET
		@Path("/getRemocoesPorDiaMesAno/{dia}/{mes}/{ano}")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDiaMesAno/01/01/2015
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/getRemocoesPorDiaMesAno/01/01/2015
		 * 
		 * @param dataMaxima
		 * @return Response
		 */
		public Response getRemocoesPorDiaMesAno(@PathParam("dia") String dia, @PathParam("mes") String mes, @PathParam("ano") String ano) {
			init();
			
			getConcursoRemocaoFacade();
			
			String dataMaxima = dia + "/"+ mes + "/"+ ano;
			
			Date dt = Util.newInstance().convertDataStringToDate(dataMaxima);
			
			String output  = this.getConcursoRemocaoFacade().recuperarRemocoesAPartirDataInicialRemocaoParaJson(dt);
			
			return Response.status(200).entity(output).build();
		}
		
		@GET
		@Path("/recuperarRemocoesPorVaga/{numeroVaga}")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/40
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesPorVaga/40
		 * 
		 * @param dataMaxima
		 * @return Response
		 */
		public Response recuperarRemocoesPorVaga(@PathParam("numeroVaga") Long numeroVaga) {
			init();
			
			getConcursoRemocaoFacade();
			
			String output  = this.getConcursoRemocaoFacade().recuperarRemocoesPorVaga(numeroVaga);
			
			return Response.status(200).entity(output).build();
		}
		
		
		@GET
		@Path("/recuperarDatasRemocoes")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarDatasRemocoes
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarDatasRemocoes
		 * 
		 * @return Response
		 */
		public Response recuperarDatasRemocoes() {
			init();
			
			getConcursoRemocaoFacade();
			
			String output  = this.getConcursoRemocaoFacade().recuperarDatasRemocoes();
			
			return Response.status(200).entity(output).build();
		}
		
		
		@GET
		@Path("/recuperarRemocoesEntreDatas")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesEntreDatas?dataInicial=01/01/2014&dataFinal=01/01/2015
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursoRemocaoService/recuperarRemocoesEntreDatas?dataInicial=01/01/2014&dataFinal=01/01/2015
		 * 
		 * @param dataInicialRemocao
		 * @return Response
		 */
		public Response recuperarRemocoesEntreDatas(@QueryParam("dataInicial") String dataInicial, @QueryParam("dataFinal") String dataFinal) {
			init();
			
			getConcursoRemocaoFacade();
			
			Date dtini = Util.newInstance().convertDataStringToDate(dataInicial);
			Date dtfim = Util.newInstance().convertDataStringToDate(dataFinal);
			
			String output  = this.getConcursoRemocaoFacade().recuperarRemocoesEntreDatasJSon(dtini, dtfim);
			
			return Response.status(200).entity(output).build();
		}
		
		
}
