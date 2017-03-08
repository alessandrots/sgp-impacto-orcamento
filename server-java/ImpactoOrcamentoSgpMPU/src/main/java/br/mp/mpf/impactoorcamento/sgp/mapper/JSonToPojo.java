package br.mp.mpf.impactoorcamento.sgp.mapper;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import br.mp.mpf.impactoorcamento.sgp.app.json.Armadilha;
import br.mp.mpf.impactoorcamento.sgp.app.json.Hospedeiro;
import br.mp.mpf.impactoorcamento.sgp.app.json.Localidade;
import br.mp.mpf.impactoorcamento.sgp.app.json.Rota;

public class JSonToPojo {
	
	private Map<String, List> mapaJsonToPojo;
	private List<String> nomesDosArquivos = new ArrayList<>();
	private ObjectMapper mapper = new ObjectMapper();
	String sufixo = ".json";
	
	public JSonToPojo() {
		nomesDosArquivos.add("rotas");
		nomesDosArquivos.add("localidades");
		nomesDosArquivos.add("hospedeiros");
		nomesDosArquivos.add("armadilhas");
		mapaJsonToPojo = new HashMap<>();
	}

	public void generatePojos() {
//		for (String arquivo : nomesDosArquivos) {
//			List<JSon> lista = this.convertJsonFileToList(arquivo);
//			mapaJsonToPojo.put(arquivo, lista);
//		}
		
		this.convertRotasJsonFileToList();
		this.convertLocalidadesJsonFileToList();
		this.convertHospedeirosJsonFileToList();
		this.convertArmadilhasJsonFileToList();
		
		URL url = getClass().getResource(".");
		
		System.out.println("url = " + url);
		
		
		System.out.println("mapaJsonToPojo = " + mapaJsonToPojo);
	}
	
//	private List<JSon> convertJsonFileToList(String arquivo) {
//		ObjectMapper mapper = new ObjectMapper();
//		List<JSon> listaObjetos = null;
//		
//		URL url = getClass().getResource(arquivo + ".json");//"rotas.json");
//		
//		if (null != url) {
//			File file = new File(url.getPath());
//			System.out.println(" object mapper = " + file.exists());
//			
//			try {
//				listaObjetos =mapper.readValue(file, new TypeReference<List<JSon>>() {});
//				System.out.println("listaObjetos = " + listaObjetos);
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//		
//		return listaObjetos;
//	}
	
	private List<Rota> convertRotasJsonFileToList() {
		List<Rota> listaObjetos = null;
		
		String nome = nomesDosArquivos.get(0);	
		
		URL url = getClass().getResource(nome + sufixo);
		
		if (null != url) {
			File file = new File(url.getPath());
			System.out.println(" object mapper = " + file.exists());
			
			try {
				listaObjetos = mapper.readValue(file, new TypeReference<List<Rota>>() {});
				
				if (null != listaObjetos && listaObjetos.size() > 0) {
					this.mapaJsonToPojo.put(nome, listaObjetos);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return listaObjetos;
	}
	
	private List<Localidade> convertLocalidadesJsonFileToList() {
		List<Localidade> listaObjetos = null;
		String nome = nomesDosArquivos.get(1);	
				
		URL url = getClass().getResource(nome + sufixo);
		
		if (null != url) {
			File file = new File(url.getPath());
			System.out.println(" object mapper = " + file.exists());
			
			try {
				listaObjetos = mapper.readValue(file, new TypeReference<List<Localidade>>() {});
				
				if (null != listaObjetos && listaObjetos.size() > 0) {
					this.mapaJsonToPojo.put(nome, listaObjetos);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return listaObjetos;
	}
	
	private List<Hospedeiro> convertHospedeirosJsonFileToList() {
		List<Hospedeiro> listaObjetos = null;
		
		String nome = nomesDosArquivos.get(2);	
		
		URL url = getClass().getResource(nome + sufixo);
		
		if (null != url) {
			File file = new File(url.getPath());
			System.out.println(" object mapper = " + file.exists());
			
			try {
				listaObjetos = mapper.readValue(file, new TypeReference<List<Hospedeiro>>() {});
				
				if (null != listaObjetos && listaObjetos.size() > 0) {
					this.mapaJsonToPojo.put(nome, listaObjetos);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return listaObjetos;
	}
	
	private List<Armadilha> convertArmadilhasJsonFileToList() {
		List<Armadilha> listaObjetos = null;
		
		String nome = nomesDosArquivos.get(3);	
		
		URL url = getClass().getResource(nome + sufixo);
		
		if (null != url) {
			File file = new File(url.getPath());
			System.out.println(" object mapper = " + file.exists());
			
			try {
				listaObjetos = mapper.readValue(file, new TypeReference<List<Armadilha>>() {});
				
				if (null != listaObjetos && listaObjetos.size() > 0) {
					this.mapaJsonToPojo.put(nome, listaObjetos);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return listaObjetos;
	}
	
}
