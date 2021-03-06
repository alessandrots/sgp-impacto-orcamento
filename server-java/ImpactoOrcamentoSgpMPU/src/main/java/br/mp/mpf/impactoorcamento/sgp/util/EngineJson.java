package br.mp.mpf.impactoorcamento.sgp.util;

import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import br.mp.mpf.impactoorcamento.sgp.app.domain.Domain;

public class EngineJson {

	private static Gson gson;
	private static EngineJson engJson;
	
	private EngineJson() {
		super();
		if (gson == null){
			gson = new Gson();
		}
	}
	
	public static EngineJson getInstancia() {
		if (engJson == null){
			engJson = new EngineJson();
		}
		
		return engJson;
	}
	
	public String serializarObjeto(Object objeto) {
		return gson.toJson(objeto);
	}
	
//	public String serializarColecaoDomain(Collection<Domain> colecao) {
//		return gson.toJson(colecao);
//	}
//	
//	public String serializarListaDomain(List<Domain> lista) {
//		return gson.toJson(lista);
//	}
//	
//	public String serializarColecaoTo(Collection<JSon> colecao) {
//		return gson.toJson(colecao);
//	}
//	
//	public String serializarListaTo(List<JSon> lista) {
//		return gson.toJson(lista);
//	}
	
	public String serializarColecao(Collection colecao) {
		return gson.toJson(colecao);
	}
	
	public String serializarLista(List lista) {
		return gson.toJson(lista);
	}
	
	public Collection<Domain> deserializarColecao(String json) {
		Type collectionType = new TypeToken<Collection<Domain>>(){}.getType();
		Collection<Domain> colecao = gson.fromJson(json, collectionType);
		return colecao;
	}

	
//	
//	Collections Examples
//	Collection<Integer> ints = Lists.immutableList(1,2,3,4,5);
//	(Serialization)
//	String json = gson.toJson(ints); ==> json is [1,2,3,4,5]
//	(Deserialization)
//	Gson User Guide - gson https://sites.google.com/site/gson/gson-user-guide
//	6 de 17 19/11/2012 16:00
//	Type collectionType = new TypeToken<Collection<Integer>>(){}.getType();
//	Collection<Integer> ints2 = gson.fromJson(json, collectionType);
//	ints2 is same as ints
//	Fairly hideous: note how we define the type of collection
//	Unfortunately, no way to get around this in Java
}
