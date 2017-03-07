package br.mp.mpf.impactoorcamento.sgp.mapper;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import br.mp.mpf.impactoorcamento.sgp.app.json.JSon;
import br.mp.mpf.impactoorcamento.sgp.app.json.Localidade;
import br.mp.mpf.impactoorcamento.sgp.app.json.Rota;

public class JSonToPojo {
	
	private Map<String, List<JSon>> mapaJsonToPojo;
	private List<String> nomesDosArquivos = new ArrayList<>();
	
	public JSonToPojo() {
		nomesDosArquivos.add("rotas");
		nomesDosArquivos.add("localidades");
		nomesDosArquivos.add("hospedeiros");
		nomesDosArquivos.add("armadilhas");
	}

	public void generatePojos() {
//		for (String arquivo : nomesDosArquivos) {
//			List<JSon> lista = this.convertJsonFileToList(arquivo);
//			mapaJsonToPojo.put(arquivo, lista);
//		}
		
		this.convertRotasJsonFileToList();
		this.convertLocalidadesJsonFileToList();
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
		ObjectMapper mapper = new ObjectMapper();
		List<Rota> listaObjetos = null;
		
		URL url = getClass().getResource("rotas.json");
		
		if (null != url) {
			File file = new File(url.getPath());
			System.out.println(" object mapper = " + file.exists());
			
			try {
				listaObjetos =mapper.readValue(file, new TypeReference<List<Rota>>() {});
				System.out.println("listaObjetos = " + listaObjetos);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return listaObjetos;
	}
	
	private List<Localidade> convertLocalidadesJsonFileToList() {
		ObjectMapper mapper = new ObjectMapper();
		List<Localidade> listaObjetos = null;
		
		URL url = getClass().getResource("localidades.json");
		
		if (null != url) {
			File file = new File(url.getPath());
			System.out.println(" object mapper = " + file.exists());
			
			try {
				listaObjetos =mapper.readValue(file, new TypeReference<List<Localidade>>() {});
				System.out.println("listaObjetos = " + listaObjetos);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		return listaObjetos;
	}
}
