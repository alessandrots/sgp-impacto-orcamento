package br.mp.mpf.impactoorcamento.sgp.app.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.criterion.Projections;
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
		
		return lista;
	}
	
	@SuppressWarnings("unchecked")
	public List<Object[]> recuperarDatasRemocoes() {
		System.out.println("recuperarDatasRemocoes");
//		
//		StringBuilder hql = new StringBuilder();
//		hql.append("SELECT count(*) ");
//		hql.append("FROM  ");
//		hql.append(" (SELECT p.dataRemocaoGravacao ");
//		hql.append("  FROM ConcursoRemocao p  ");
//		hql.append("  GROUP BY p.dataRemocaoGravacao ");
//		hql.append("  ORDER BY p.dataRemocaoGravacao desc ) ");
		List<Object[]> lista = getSession().createCriteria(ConcursoRemocao.class)
			.setProjection(Projections.projectionList()
			.add(Projections.groupProperty("dataRemocaoGravacao"))
			.add(Projections.count("dataRemocaoGravacao"))).list();
			
		
//		Query query = getSession().createQuery(hql.toString());
//		List<ConcursoRemocao> lista = query.list();
		
		return lista;
	}

}
