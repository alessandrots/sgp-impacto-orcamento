package br.mp.mpf.impactoorcamento.sgp.app.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import br.mp.mpf.impactoorcamento.sgp.app.domain.ConcursoRemocao;
import br.mp.mpf.impactoorcamento.sgp.core.infra.db.HibernateDAOImpl;

@Repository
public class ConcursoRemocaoDAO extends HibernateDAOImpl<ConcursoRemocao> {
	
	@Override
	protected Class<ConcursoRemocao> getEntityClass() {
		return ConcursoRemocao.class;
	}
	
	@SuppressWarnings("unchecked")
	public List<ConcursoRemocao> recuperarRemocoesEntreDatas(Date dataMaxima) {
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM ConcursoRemocao d ");
		hql.append("WHERE d.dataRemocaoGravacao >:dataMaxima ");
		hql.append("ORDER BY d.dataRemocaoGravacao desc ");
		
		Query query = getSession().createQuery(hql.toString());
		query.setParameter("dataMaxima", dataMaxima);
		
		List<ConcursoRemocao> lista = query.list();
		
//		if (lista != null && lista.size() > 0){
//			System.out.println("recuperarNomeacoesEntreDatas ==> Tamanho da lista = " + lista.size());
//		} else {
//			System.out.println("recuperarNomeacoesEntreDatas ==>  lista vazia ");
//		}
		
		return lista;
	}
	
	@SuppressWarnings("unchecked")
	public List<ConcursoRemocao> recuperarRemocoesPorVaga(Long numeroVaga) {
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM ConcursoRemocao d ");
		hql.append("WHERE d.numeroVaga = :numeroVaga ");
		hql.append("ORDER BY d.dataRemocaoGravacao desc ");
		
		Query query = getSession().createQuery(hql.toString());
		query.setParameter("numeroVaga", numeroVaga);
		
		List<ConcursoRemocao> lista = query.list();
		
//		if (lista != null && lista.size() > 0){
//			System.out.println("recuperarNomeacoesEntreDatas ==> Tamanho da lista = " + lista.size());
//		} else {
//			System.out.println("recuperarNomeacoesEntreDatas ==>  lista vazia ");
//		}
		
		return lista;
	}

}
