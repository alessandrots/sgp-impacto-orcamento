package br.mp.mpf.impactoorcamento.sgp.app.dao;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import br.mp.mpf.impactoorcamento.sgp.app.domain.Tarefa;
import br.mp.mpf.impactoorcamento.sgp.core.db.HibernateDAOImpl;

/**
 * 
 * @author alessandrots
 *
 */
@Repository
public class TarefaDAO extends HibernateDAOImpl<Tarefa> {
	
	@Override
	protected Class<Tarefa> getEntityClass() {
		return Tarefa.class;
	}	
	
	public List prepararParaRealizar(String nomeTarefa) {
		System.out.println("DAO ==> Preparando para Realizar!!!");
		StringBuilder hql = new StringBuilder();
		hql.append("select d from Pessoa d");
		
		Query query = getSession().createQuery(hql.toString());
		
		List listaTarefa = query.list();
		
		if (listaTarefa != null && listaTarefa.size() > 0){
			System.out.println("Tamanho da lista = " + listaTarefa.size());
		} else {
			System.out.println(" lista vazia ");
		}
		
		return listaTarefa;
	}

	
	
	

	

}
