package br.mp.mpf.impactoorcamento.sgp.app.rest;
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

import br.mp.mpf.impactoorcamento.sgp.core.app.PrincipalRestful;
import br.mp.mpf.impactoorcamento.sgp.util.Util;

@Path("/concursadoService")
@Component("concursadoService")
public class ConcursadoService extends PrincipalRestful {
		
		@GET
		@Path("/getConcursadoPorDatas")
		@Produces("text/json;charset=UTF-8")
		/**
		 * TOMCAT: http://localhost:8080/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015
		 * JETTY : http://localhost:9090/impactorcamentosgpmpu/ns/rest/concursadoService/getConcursadoPorDatas?dataInicial=01/01/2015&dataFinal=31/05/2015
		 * 
		 * @param dataInicial
		 * @param dataFinal
		 * @return Response
		 */
		public Response getConcursadoPorDatas(@QueryParam("dataInicial") String dataInicial, @QueryParam("dataFinal") String dataFinal) {
			init();
			
			getConcursadoFacade();
			
			Date dtini = Util.newInstance().convertDataStringToDate(dataInicial);
			Date dtfim = Util.newInstance().convertDataStringToDate(dataFinal);
			
			this.getConcursadoFacade().recuperarNomeacoesEntreDatas(dtini, dtfim);
			
			String output = "Jersey say : " + " dataInicial : " + dataInicial + " - dataFinal : " + dataFinal;
			
			return Response.status(200).entity(output).build();
		}
		
		
		
}
