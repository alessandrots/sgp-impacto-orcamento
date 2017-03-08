package br.mp.mpf.impactoorcamento.sgp.app.service;

import java.util.List;

import br.mp.mpf.impactoorcamento.sgp.app.json.Armadilha;
import br.mp.mpf.impactoorcamento.sgp.app.json.Hospedeiro;
import br.mp.mpf.impactoorcamento.sgp.app.json.Localidade;
import br.mp.mpf.impactoorcamento.sgp.app.json.Rota;
import br.mp.mpf.impactoorcamento.sgp.mapper.JSonToPojo;
import br.mp.mpf.impactoorcamento.sgp.util.Constantes;

public class ParentRest {
	
	protected JSonToPojo jSonToPojo;
	protected List<Rota> listaRotas;
	protected List<Localidade> listaLocalidades;
	protected List<Hospedeiro> listaHospedeiros;
	protected List<Armadilha> listaArmadilha;

	public ParentRest() {
		super();
		
		if (null == this.jSonToPojo) {
			jSonToPojo = new JSonToPojo();
			jSonToPojo.generatePojos();
			
			listaRotas = jSonToPojo.getMapaJsonToPojo().get(Constantes.MAPA_CHAVE_POJO_FILE_ROTAS);
			listaLocalidades = jSonToPojo.getMapaJsonToPojo().get(Constantes.MAPA_CHAVE_POJO_FILE_LOCALIDADES);
			listaHospedeiros = jSonToPojo.getMapaJsonToPojo().get(Constantes.MAPA_CHAVE_POJO_FILE_HOSPEDEIROS);
			listaArmadilha = jSonToPojo.getMapaJsonToPojo().get(Constantes.MAPA_CHAVE_POJO_FILE_ARMADILHAS);
			
			System.out.println("Listagem de Rotas = " 		+ listaRotas);
			System.out.println("Listagem de Localidades = " + listaLocalidades);
			System.out.println("Listagem de Hospedeiros = " + listaHospedeiros);
			System.out.println("Listagem de Armadilhas = " 	+ listaArmadilha);
		}
	}

}
