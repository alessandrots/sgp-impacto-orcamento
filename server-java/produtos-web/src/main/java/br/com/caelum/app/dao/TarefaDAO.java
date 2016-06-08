package br.com.caelum.app.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import br.com.caelum.app.domain.Concursado;
import br.com.caelum.app.domain.ConcursoRemocao;
import br.com.caelum.app.domain.Tarefa;
import br.com.caelum.core.db.HibernateDAOImpl;

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
	
//	public List prepararParaRealizar(String nomeTarefa) {
//		System.out.println("DAO ==> Preparando para Realizar!!!");
//		StringBuilder hql = new StringBuilder();
//		hql.append("select d from Pessoa d");
//		
//		Query query = getSession().createQuery(hql.toString());
//		
//		List listaTarefa = query.list();
//		
//		if (listaTarefa != null && listaTarefa.size() > 0){
//			System.out.println("Tamanho da lista = " + listaTarefa.size());
//		} else {
//			System.out.println(" lista vazia ");
//		}
//		
//		return listaTarefa;
//	}

	@SuppressWarnings("unchecked")
	public List<Concursado> recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
		System.out.println("DAO ==> recuperarNomeacoesEntreDatas !!!");
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM Concursado d ");
		hql.append("WHERE d.numeroPortaria is not null ");
		hql.append("AND d.dataNomeacao BETWEEN :dataInicio AND :dataFinal");
		
		Query query = getSession().createQuery(hql.toString());
		query.setParameter("dataInicio", dataInicio);
		query.setParameter("dataFinal", dataFinal);
		
		List<Concursado> lista = query.list();
		
		if (lista != null && lista.size() > 0){
			System.out.println("recuperarNomeacoesEntreDatas ==> Tamanho da lista = " + lista.size());
		} else {
			System.out.println("recuperarNomeacoesEntreDatas ==>  lista vazia ");
		}
		
		return lista;
		
	}
	
	@SuppressWarnings("unchecked")
	public List<ConcursoRemocao> recuperarRemocoesEntreDatas(Date dataMaxima) {
		System.out.println("DAO ==> recuperarRemocoesEntreDatas !!!");
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM ConcursoRemocao d ");
		hql.append("WHERE d.dataRemocaoGravacao >:dataMaxima ");
		hql.append("ORDER BY d.dataRemocaoGravacao desc ");
		
		Query query = getSession().createQuery(hql.toString());
		query.setParameter("dataMaxima", dataMaxima);
		
		List<ConcursoRemocao> lista = query.list();
		
		if (lista != null && lista.size() > 0){
			System.out.println("recuperarNomeacoesEntreDatas ==> Tamanho da lista = " + lista.size());
		} else {
			System.out.println("recuperarNomeacoesEntreDatas ==>  lista vazia ");
		}
		
		return lista;
		
	}

	

}
