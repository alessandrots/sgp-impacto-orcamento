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
	/**
	 * 
	 * @param dataMaxima
	 * @return List<ConcursoRemocao>
	 */
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
	/**
	 * 
	 * @param numeroVaga
	 * @return List<ConcursoRemocao>
	 */
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
	/**
	 * http://stackoverflow.com/questions/8491796/hibernate-group-by-criteria-object
	 * @return List<Object[]>
	 */
	public List<Object[]> recuperarDatasRemocoes() {
		List<Object[]> lista = getSession().createCriteria(ConcursoRemocao.class)
			.setProjection(Projections.projectionList()
			.add(Projections.groupProperty("dataRemocaoGravacao"))
			.add(Projections.count("dataRemocaoGravacao"))).list();
		
		return lista;
	}

}
