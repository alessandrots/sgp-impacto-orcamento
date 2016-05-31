package br.com.caelum.app.rest;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.caelum.app.facade.MyFacade;
import br.com.caelum.core.server.SpringManager;

@Path("/servicos")

/**Classe para objetos do tipo Funcion�rios, onde ser�o contidos, valores e m�todos para o mesmo.

 * @author alessandrots

 * @version 1.00

 * @since Release 01 da aplica��o

 */

@Component("serviceTest")
public class ServicoRest {
	
	@Autowired	 
	private MyFacade myFacade;
	
	@Context
	HttpServletRequest request;
	
	@GET
	@Path("/{param}")
	public Response getMsg(@PathParam("param") String msg) {
 
		String output = "Jersey say : " + msg;
 
		return Response.status(200).entity(output).build();
	}
	
	@GET
	@Path("/getAll")
	@Produces("text/json;charset=UTF-8")
	public void getAll(@QueryParam("param1") Integer param1, @QueryParam("param2") Integer param2, @QueryParam("param3") Integer param3) {
		Integer matricula = 4566;
		
		init();
		
		this.myFacade = getMyFacade();
//
//		if (matricula == null) {// testar
//			throw new RestException("Parametro matricula informado nulo.");
//		}
		
		System.out.println(" param1 : " + param1 + " - param2 : " + param2 + " - param3 : " + param3);
		
		this.myFacade.prepararParaRealizar(param1, param3);

//		TarefaPresenter presenter = new TarefaPresenter();
//		presenter.setCodigo("1");
//		presenter.setNome("Retornando Dados da Silva");
//		presenter.setDataInicio("15/06/2013");
//		presenter.setDataTermino("17/06/2013");
//		presenter.setDataEntrega("19/06/2013");
//		presenter.setCodigo("6");
//		
//		this.tarefaFacade = getFacade();
////		System.out.println(haMaisDeTantosDiasInt + " - " + haMaisDeTantosDiasExt);
//		this.tarefaFacade.prepararParaRealizar(presenter);
//
//		return presenter;
	}
	
	public void init() {
		SpringManager.getInstancia().setServletContext(request.getSession().getServletContext());
	}

	public MyFacade getMyFacade() {
		return SpringManager.getInstancia().getBean("myFacade");
	}

}
