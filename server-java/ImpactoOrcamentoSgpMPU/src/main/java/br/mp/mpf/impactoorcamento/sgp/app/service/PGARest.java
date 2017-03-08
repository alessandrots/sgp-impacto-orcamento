package br.mp.mpf.impactoorcamento.sgp.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

import br.mp.mpf.impactoorcamento.sgp.app.json.Rota;
import br.mp.mpf.impactoorcamento.sgp.util.EngineJson;

@Path("/pga")

/**
 * Classe para objetos do tipo Rota.
 * 
 * @author developer@mbamobi.com.br
 * 
 * @version 1.00
 * @since 07/03/2017
 * 
 */
@Component("pgaService")
public class PGARest extends ParentRest {
	
//	private JSonToPojo jSonToPojo;
//	private List<Rota> listaRotas;
	
	public PGARest() {
		super();
		
//		if (null == this.listaRotas) {
//			jSonToPojo = new JSonToPojo();
//			jSonToPojo.generatePojos();
//			listaRotas = jSonToPojo.getMapaJsonToPojo().get(Constantes.MAPA_CHAVE_POJO_FILE_ROTAS);
//		}
	}

	@GET
	@Path("/rotas/completa/{codigoAgenteCampo}/{idMunicipio}")
	@Produces(MediaType.APPLICATION_JSON)
	/**
	 * http://localhost:8080/impactorcamentosgpmpu/ns/rest/pga/rotas/completa/:codigoAgenteCampo/:idMunicipio
	 * 
	 * @param codigoAgenteCampo
	 * @param idMunicipio
	 * @return Response
	 */
	public Response recuperarRotasPorAgenteCampo(@PathParam("codigoAgenteCampo") Long codigoAgenteCampo, @PathParam("idMunicipio") Long idMunicipio) {
		
		List<Rota> listaFiltrado = null;
		
		System.out.println("codigoAgenteCampo = "+ codigoAgenteCampo);
		System.out.println("idMunicipio = "+ idMunicipio);
				
//		List<Rota> listaRotas = jSonToPojo.getMapaJsonToPojo().get(Constantes.MAPA_CHAVE_POJO_FILE_ROTAS);
//		System.out.println("Listagem de Rotas = " + listaRotas);
		
		if (null != listaRotas && listaRotas.size() > 0) {
			listaFiltrado = new ArrayList<>();
			
			for (Rota rota : listaRotas) {
				if (rota.getIdAgenteCampo() == codigoAgenteCampo && rota.getIdMunicipio() == idMunicipio) {
					listaFiltrado.add(rota);
				}
			}
		}
		
		System.out.println("Listagem de Rotas Filtrados = " + listaFiltrado);
		
		String output = EngineJson.getInstancia().serializarLista(listaFiltrado);

		return Response.status(200).entity(output).build();
	}
	
	@GET
	@Path("/rotas/detalhe/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	/**
	 * http://localhost:8080/impactorcamentosgpmpu/ns/rest/pga/rotas/detalhe/:id
	 * 
	 * @param id
	 * @return Response
	 */
	public Response recuperarRotasPorId(@PathParam("id") Long id) {
		
		Rota rotaFiltrada = null;
		
		System.out.println("id = "+ id);
				
		if (null != listaRotas && listaRotas.size() > 0) {
			for (Rota rota : listaRotas) {
				if (rota.getId() == id) {
					rotaFiltrada = rota;
				}
			}
		}
		
		System.out.println("Rota Encontrada = " + rotaFiltrada);
		
		String output = EngineJson.getInstancia().serializarObjeto(rotaFiltrada);

		return Response.status(200).entity(output).build();
	}

}
