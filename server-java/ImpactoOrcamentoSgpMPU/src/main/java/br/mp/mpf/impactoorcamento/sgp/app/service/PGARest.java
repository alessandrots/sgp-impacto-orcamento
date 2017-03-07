package br.mp.mpf.impactoorcamento.sgp.app.service;

import br.mp.mpf.impactoorcamento.sgp.mapper.JSonToPojo;

public class PGARest {

	public PGARest() {
//		ObjectMapper mapper = new ObjectMapper();
//		URL url = getClass().getResource("rotas.json");
//		File file = new File(url.getPath());
//		System.out.println(" object mapper = " + file.exists());
//		List<Rota> lista = new ArrayList<>();
//		
//		try {
////			Rota rota = mapper.readValue(file, Rota.class);
//			lista = mapper.readValue(file, lista.getClass());
//			
//			List<Rota> newMSExp =mapper.readValue(file, new TypeReference<List<Rota>>() {});
//			
////			if (lista instanceof LinkedHashMap) {
////				for (long key : ((LinkedHashMap)lista).keySet()) {
//////					System.out.println(key + ":\t" + lista.get(key));
////				}
////			}
//
//			
//			System.out.println("");
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
		new JSonToPojo().generatePojos();
	}
}
