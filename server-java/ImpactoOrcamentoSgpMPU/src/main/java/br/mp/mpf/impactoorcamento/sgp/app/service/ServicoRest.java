package br.mp.mpf.impactoorcamento.sgp.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursadoJSon;
import br.mp.mpf.impactoorcamento.sgp.app.json.Entrada;
import br.mp.mpf.impactoorcamento.sgp.core.infra.SpringManager;
import br.mp.mpf.impactoorcamento.sgp.util.EngineJson;

@Path("/servicos")

/**
 * Classe para objetos do tipo Funcionários, onde serão contidos, valores e
 * métodos para o mesmo.
 * 
 * @author alessandroteixeira@mpf.mp.br
 * 
 * @version 1.00
 * @since Release 01 da aplicação
 * 
 */
@Component("serviceTest")
public class ServicoRest {

	// @Autowired
	// private ConcursoRemocaoFacade concursoRemocaoFacade;
	//
	// @Autowired
	// private ConcursadoFacade concursadoFacade;

	@Context
	HttpServletRequest request;

	@GET
	@Path("/getMsg/{param}")
	/**
	 * http://localhost:8080/produtos/ns/rest/servicos/getMsg/alessandro
	 * 
	 * @param msg
	 * @return
	 */
	public Response getMsg(@PathParam("param") String msg) {
		String output = "Jersey say : " + msg;
		return Response.status(200).entity(output).build();
	}

	@GET
	@Path("/getAllByPath/{param1}/{param2}/{param3}")
	@Produces("application/json;charset=UTF-8")
	/**
	 * http://localhost:8080/produtos/ns/rest/servicos/getAllByPath/1/2/3
	 * 
	 * @param param1
	 * @param param2
	 * @param param3
	 * @return
	 */
	public Response getAllByPath(@PathParam("param1") Integer param1, @PathParam("param2") Integer param2,
			@PathParam("param3") Integer param3) {
		// Integer matricula = 4566;

		init();

		// this.myFacade = getMyFacade();
		////
		// if (matricula == null) {// testar
		// throw new RestException("Parametro matricula informado nulo.");
		// }

		System.out.println(" param1 : " + param1 + " - param2 : " + param2 + " - param3 : " + param3);

		// this.myFacade.prepararParaRealizar(param1, param3);

		List<ConcursadoJSon> lista = new ArrayList<>();
		ConcursadoJSon json = new ConcursadoJSon();
		
		json.setInscricao(1L);
		json.setNumeroEdital("AJEUEE");
		json.setUfNomeacao("DF");
		json.setCargo("Ana123");
		json.setCargoDescricao("Analista");
		json.setNome("Ats Santos");
		json.setNumeroPortaria("2828A");
		json.setDataNomeacao("28/10/2015");
		json.setDataExercicio("28/11/2015");
		json.setNumeroVaga(10L);
		json.setOrigemVaga("EIEIu");
		json.setDataDesprovimento("28/01/2015");
		json.setLeiVaga(828282828L);
		json.setDataPortariaSemEfeito("-");
		json.setNrPortariaSemEfeito(1818L);
		lista.add(json);

		json.setInscricao(2L);
		json.setNumeroEdital("A2JEUEE");
		json.setUfNomeacao("DF");
		json.setCargo("TEC345");
		json.setCargoDescricao("Tecnico");
		json.setNome("Ats Santos");
		json.setNumeroPortaria("2828A");
		json.setDataNomeacao("28/10/2015");
		json.setDataExercicio("28/11/2015");
		json.setNumeroVaga(10L);
		json.setOrigemVaga("EIEIu");
		json.setDataDesprovimento("28/01/2015");
		json.setLeiVaga(828282828L);
		json.setDataPortariaSemEfeito("-");
		json.setNrPortariaSemEfeito(1818L);
		lista.add(json);

		// String output = "Jersey say : " + " param1 : " + param1 + " - param2
		// : " + param2 + " - param3 : " + param3;

		String output = EngineJson.getInstancia().serializarLista(lista);

		return Response.status(200).entity(output).build();
	}
	
	@Path("/aditamento/disponivel")
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	/**
	 * http://localhost:8080/impactorcamentosgpmpu/ns/rest/servicos/aditamento/disponivel
	 * @return Response
	 */
	public Response recuperarAditamentoDisponivelGet(@FormParam("nuCpf") String nuCpf,
            @FormParam("coAditamento") String coAditamento, @FormParam("senha") String senha){
//		System.out.println("objeto ENTRADA = " + entrada);
		List<ConcursadoJSon> lista = new ArrayList<>();
		ConcursadoJSon json = new ConcursadoJSon();
		
		json.setInscricao(1L);
		json.setNumeroEdital("OUTRO2");
		json.setUfNomeacao("DF");
		json.setCargo("Ana123");
		json.setCargoDescricao("Analista");
		json.setNome("Ats Santos");
		json.setNumeroPortaria("2828A");
		json.setDataNomeacao("28/10/2015");
		json.setDataExercicio("28/11/2015");
		json.setNumeroVaga(10L);
		json.setOrigemVaga("EIEIu");
		json.setDataDesprovimento("28/01/2015");
		json.setLeiVaga(828282828L);
		json.setDataPortariaSemEfeito("-");
		json.setNrPortariaSemEfeito(1818L);
		lista.add(json);

		json.setInscricao(2L);
		json.setNumeroEdital("NOVO2");
		json.setUfNomeacao("DF");
		json.setCargo("TEC345");
		json.setCargoDescricao("Tecnico");
		json.setNome("Ats Santos");
		json.setNumeroPortaria("2828A");
		json.setDataNomeacao("28/10/2015");
		json.setDataExercicio("28/11/2015");
		json.setNumeroVaga(10L);
		json.setOrigemVaga("EIEIu");
		json.setDataDesprovimento("28/01/2015");
		json.setLeiVaga(828282828L);
		json.setDataPortariaSemEfeito("-");
		json.setNrPortariaSemEfeito(1818L);
		lista.add(json);

		// String output = "Jersey say : " + " param1 : " + param1 + " - param2
		// : " + param2 + " - param3 : " + param3;

		String output = EngineJson.getInstancia().serializarLista(lista);

		return Response.status(200).entity(output).build();
	}
	
	@Path("/aditamento/confirmarreabertura")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	/**
	 * http://localhost:8080/impactorcamentosgpmpu/ns/rest/servicos/aditamento/confirmarreabertura
	 * @return Response
	 */
	public Response confirmarAditamentoDisponivel(@RequestParam Entrada entrada){
		System.out.println("objeto ENTRADA = " + entrada);
		List<ConcursadoJSon> lista = new ArrayList<>();
		ConcursadoJSon json = new ConcursadoJSon();
		
		PGARest pgaRest = new PGARest();
		
		json.setInscricao(1L);
		json.setNumeroEdital("OUTRO");
		json.setUfNomeacao("DF");
		json.setCargo("Ana123");
		json.setCargoDescricao("Analista");
		json.setNome("Ats Santos");
		json.setNumeroPortaria("2828A");
		json.setDataNomeacao("28/10/2015");
		json.setDataExercicio("28/11/2015");
		json.setNumeroVaga(10L);
		json.setOrigemVaga("EIEIu");
		json.setDataDesprovimento("28/01/2015");
		json.setLeiVaga(828282828L);
		json.setDataPortariaSemEfeito("-");
		json.setNrPortariaSemEfeito(1818L);
		lista.add(json);

		json.setInscricao(2L);
		json.setNumeroEdital("NOVO");
		json.setUfNomeacao("DF");
		json.setCargo("TEC345");
		json.setCargoDescricao("Tecnico");
		json.setNome("Ats Santos");
		json.setNumeroPortaria("2828A");
		json.setDataNomeacao("28/10/2015");
		json.setDataExercicio("28/11/2015");
		json.setNumeroVaga(10L);
		json.setOrigemVaga("EIEIu");
		json.setDataDesprovimento("28/01/2015");
		json.setLeiVaga(828282828L);
		json.setDataPortariaSemEfeito("-");
		json.setNrPortariaSemEfeito(1818L);
		lista.add(json);

		// String output = "Jersey say : " + " param1 : " + param1 + " - param2
		// : " + param2 + " - param3 : " + param3;

		String output = EngineJson.getInstancia().serializarLista(lista);

		return Response.status(200).entity(output).build();
	}

	// @GET
	// @Path("/getAllByQuery")
	// @Produces("text/json;charset=UTF-8")
	// /**
	// *
	// http://localhost:8080/produtos/ns/rest/servicos/getAllByQuery?param1=4&param2=5&param3=6
	// *
	// * @param param1
	// * @param param2
	// * @param param3
	// * @return
	// */
	// public Response getAllByQuery(@QueryParam("param1") Integer param1,
	// @QueryParam("param2") Integer param2, @QueryParam("param3") Integer
	// param3) {
	//// Integer matricula = 4566;
	//
	// init();
	//
	// this.myFacade = getMyFacade();
	////
	//// if (matricula == null) {// testar
	//// throw new RestException("Parametro matricula informado nulo.");
	//// }
	//
	// System.out.println(" param1 : " + param1 + " - param2 : " + param2 + " -
	// param3 : " + param3);
	//
	// this.myFacade.prepararParaRealizar(param1, param3);
	//
	// String output = "Jersey say : " + " param1 : " + param1 + " - param2 : "
	// + param2 + " - param3 : " + param3;
	// return Response.status(200).entity(output).build();
	// }

	// @GET
	// @Path("/getConcursadoByQuery")
	// @Produces("text/json;charset=UTF-8")
	// /**
	// * TOMCAT:
	// *
	// http://localhost:8080/produtos/ns/rest/servicos/getConcursadoByQuery?dataInicial=01/01/2015&dataFinal=31/05/2015
	// *
	// * JETTY:
	// *
	// http://localhost:9090/produtos/ns/rest/servicos/getConcursadoByQuery?dataInicial=01/01/2015&dataFinal=31/05/2015
	// *
	// * @param dataInicial
	// * @param param2
	// * @return Response
	// */
	// public Response getConcursadoByQuery(@QueryParam("dataInicial") String
	// dataInicial, @QueryParam("dataFinal") String dataFinal) {
	// init();
	//
	// this.concursadoFacade = getConcursadoFacade();
	//
	// Date dtini = Util.newInstance().convertDataStringToDate(dataInicial);
	// Date dtfim = Util.newInstance().convertDataStringToDate(dataFinal);
	//
	// this.concursadoFacade.recuperarNomeacoesEntreDatas(dtini, dtfim);
	//
	// String output = "Jersey say : " + " dataInicial : " + dataInicial + " -
	// dataFinal : " + dataFinal;
	//
	// return Response.status(200).entity(output).build();
	// }
	//
	// @GET
	// @Path("/getRemocoesByQuery")
	// @Produces("text/json;charset=UTF-8")
	// /**
	// * TOMCAT:
	// *
	// http://localhost:8080/produtos/ns/rest/servicos/getRemocoesByQuery?dataMaxima=01/01/2015
	// *
	// * JETTY:
	// *
	// http://localhost:9090/produtos/ns/rest/servicos/getRemocoesByQuery?dataMaxima=01/01/2015
	// *
	// * @param dataInicial
	// * @param param2
	// * @return Response
	// */
	// public Response getRemocoesByQuery(@QueryParam("dataMaxima") String
	// dataMaxima) {
	// init();
	//
	// this.concursoRemocaoFacade = getConcursoRemocaoFacade();
	//
	// Date dt = Util.newInstance().convertDataStringToDate(dataMaxima);
	//
	// this.concursoRemocaoFacade.recuperarRemocoesEntreDatas(dt);
	//
	// String output = "Jersey say : " + " dataInicial : " + dataMaxima;
	//
	// return Response.status(200).entity(output).build();
	// }
	//
	public void init() {
		SpringManager.getInstancia().setServletContext(request.getSession().getServletContext());
	}
	//
	// public ConcursoRemocaoFacade getConcursoRemocaoFacade() {
	// return SpringManager.getInstancia().getBean("concursoRemocaoFacade");
	// }
	//
	// public ConcursadoFacade getConcursadoFacade() {
	// return SpringManager.getInstancia().getBean("concursadoFacade");
	// }

}
