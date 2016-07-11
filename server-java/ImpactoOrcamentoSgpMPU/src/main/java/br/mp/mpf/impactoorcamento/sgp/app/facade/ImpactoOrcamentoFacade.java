package br.mp.mpf.impactoorcamento.sgp.app.facade;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import br.mp.mpf.impactoorcamento.sgp.app.domain.Domain;
import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursadoJSon;
import br.mp.mpf.impactoorcamento.sgp.app.json.ConcursoRemocaoJSon;
import br.mp.mpf.impactoorcamento.sgp.app.json.JSon;
import br.mp.mpf.impactoorcamento.sgp.core.infra.Facade;
import br.mp.mpf.impactoorcamento.sgp.util.Util;


/**
 * 
 * REGRA:
 * 
 * Trazer uma lista de concursados a partir de uma faixa entre datas (data ini  - data fim).
 * 
 * A partir de uma vaga de um nomeado procuro nos concurso de remoção anterior a esta data de exercício aonde se encontra esta vaga no concurso de remoção mais recente antes dessa data.
 * Datas de remoção dessa vaga anterior a data de Exercicio do Nomeado.. quando encontrar a primeira é com essa que faz o encaixe da comparação.
 * 
 * @author alessandroteixeira
 *
 */
@Component("impactoOrcamentoFacade")
public class ImpactoOrcamentoFacade extends Facade {
	
	@Autowired
	@Qualifier("impactoOrcamentoProperties")
	private Properties impactoOrcamentoProperties;
	
	private HashMap<String, String> mapaCargos = new HashMap<String, String>();
	
	private HashMap<Long, ConcursoRemocaoJSon> mapaConcursoRemocaoPorVaga;
	
	//a referência da própria classe
	private ImpactoOrcamentoFacade me = this;

	@Override
	public JSon copyProperties(Domain domain) {
		return null;
	}

	public List<ConcursadoJSon> processarImpactoNomeacoesComRemocoes(List<ConcursadoJSon> listaConcursado, List<ConcursoRemocaoJSon> listaConcursoRemocao) {
		List<ConcursadoJSon> lista = new ArrayList<ConcursadoJSon>();
		List<ConcursadoJSon> listaNaoParticipantes = new ArrayList<ConcursadoJSon>();
		this.mapaConcursoRemocaoPorVaga = new HashMap<Long, ConcursoRemocaoJSon>();
		
		//Recupera os cargos que devem ser filtrados no processamento das regras
		Util.newInstance().recuperarCargosASerFiltradosFromProperties(impactoOrcamentoProperties, me.mapaCargos);

		//Gerar a lista de remoção
		//Esse filtro pode ser feito no banco.
		this.transformarListaRemocaoParaMapa(listaConcursoRemocao);
		
		//a lista de concursado vai comparar o número da vaga com a vaga de remoção existente neste mapa
		this.gerarListaConcursadoJSon(listaConcursado, lista, listaNaoParticipantes);
		
		this.atualizarListaComNaoParticipantes(lista, listaNaoParticipantes);
		
		return lista;
	}

	/**
	 * Atualizando a lista após filtro, comparação de datas com os Não Participantes das Regras.
	 * 
	 * @param lista
	 * @param listaNaoParticipantes
	 */
	private void atualizarListaComNaoParticipantes(List<ConcursadoJSon> lista, List<ConcursadoJSon> listaNaoParticipantes) {
		if (listaNaoParticipantes != null && listaNaoParticipantes.size() > 0) {
			if (lista != null && lista.size() > 0) {
				lista.addAll(listaNaoParticipantes);
			}
		}
	}

	/**
	 * Comparando Número do Vaga do Concursado com o Número de Vaga do Concurso de Remoção.
	 * Atualizando data de Desprovimento com a data de remoção se as mesmas forem diferentes.
	 * 
	 * @param listaConcursado
	 * @param listaFinal
	 * @param listaNaoParticipantes
	 */
	private void gerarListaConcursadoJSon(List<ConcursadoJSon> listaConcursado, List<ConcursadoJSon> listaFinal, List<ConcursadoJSon> listaNaoParticipantes) {
		listaConcursado.forEach((concursadoJSon)->{
			if (Util.newInstance().verificarChaveASerFiltradoNoMapa(concursadoJSon.getCargo(), me.mapaCargos)) {
				listaNaoParticipantes.add(concursadoJSon);
			} else {
				//Aplicar Regras
				if (me.mapaConcursoRemocaoPorVaga.containsKey(concursadoJSon.getNumeroVaga())){
					ConcursoRemocaoJSon concursoRemocaoJSon = me.mapaConcursoRemocaoPorVaga.get(concursadoJSon.getNumeroVaga());
					Date dtDesprovimento 	 = Util.newInstance().convertDataStringToDate(concursadoJSon.getDataDesprovimento());
					Date dataRemocaoGravacao = Util.newInstance().convertDataStringToDate(concursoRemocaoJSon.getDataRemocaoGravacao());
					
					//Se a data de desprovimento for diferente da data de remoção, o sistema deve trazer a data de remoção.
					if(dtDesprovimento.compareTo(dataRemocaoGravacao) != 0){
						concursadoJSon.setDataDesprovimento(concursoRemocaoJSon.getDataRemocaoGravacao());
					}
				}
				listaFinal.add(concursadoJSon);
			}
		});
	}
	
	/**
	 * Considerar a data de remocao gravacao como a mais atual para o caso da vaga. Já vem ordenado do banco. Aqui é uma garantia a mais e para reduzir a lista.
	 * 
	 * Esse mapa populado neste método, a lista de concursado vai comparar o número da vaga com a vaga de remoção existente neste mapa
	 * 
	 * @param listaConcursoRemocao
	 */
	private void transformarListaRemocaoParaMapa(List<ConcursoRemocaoJSon> listaConcursoRemocao) {
		listaConcursoRemocao.forEach((concursoRemocao)->{
			if (me.mapaConcursoRemocaoPorVaga.containsKey(concursoRemocao.getNumeroVaga())) {
				ConcursoRemocaoJSon tmp = me.mapaConcursoRemocaoPorVaga.get(concursoRemocao.getNumeroVaga());
				Date dtRemocaoExistente = Util.newInstance().convertDataStringToDate(tmp.getDataRemocaoGravacao());
				Date dtRemocaoNova      = Util.newInstance().convertDataStringToDate(concursoRemocao.getDataRemocaoGravacao());
				
				//dtRemocaoNova is after dtRemocaoExistente ==> atualiza com o Concurso de Remoção mais recente
				if(dtRemocaoNova.compareTo(dtRemocaoExistente)>0){
					me.mapaConcursoRemocaoPorVaga.remove(concursoRemocao.getNumeroVaga());
					me.mapaConcursoRemocaoPorVaga.put(concursoRemocao.getNumeroVaga(), concursoRemocao);
				}
			} else {
				me.mapaConcursoRemocaoPorVaga.put(concursoRemocao.getNumeroVaga(), concursoRemocao);
			}
		});
	}
	
}
