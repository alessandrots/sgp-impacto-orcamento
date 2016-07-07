package br.mp.mpf.impactoorcamento.sgp.app.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import br.mp.mpf.impactoorcamento.sgp.app.domain.Concursado;
import br.mp.mpf.impactoorcamento.sgp.core.infra.db.HibernateDAOImpl;

@Repository
public class ConcursadoDAO extends HibernateDAOImpl<Concursado> {
	
	@Override
	protected Class<Concursado> getEntityClass() {
		return Concursado.class;
	}	
	
	@SuppressWarnings("unchecked")
	public List<Concursado> recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM Concursado d ");
		hql.append("WHERE d.numeroPortaria is not null ");
		
		if (dataInicio != null && dataFinal != null) {
			hql.append("AND d.dataNomeacao BETWEEN :dataInicio AND :dataFinal");
		}
		
		Query query = getSession().createQuery(hql.toString());
		
		if (dataInicio != null && dataFinal != null) {
			query.setParameter("dataInicio", dataInicio);
			query.setParameter("dataFinal", dataFinal);
		}
		
		List<Concursado> lista = query.list();

		return lista;
	}
	
	@SuppressWarnings("unchecked")
	public List<Concursado> recuperarNomeacaoPorInscricao(Long inscricao) {
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM Concursado d ");
		hql.append("WHERE d.inscricao = :inscricao ");
		hql.append("ORDER by d.dataNomeacao DESC ");
		
		Query query = getSession().createQuery(hql.toString());
		query.setParameter("inscricao", inscricao);
		
		List<Concursado> lista = query.list();

		return lista;
	}

}
