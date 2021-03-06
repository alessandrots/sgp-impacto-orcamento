package br.com.caelum.app.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import br.com.caelum.app.domain.Concursado;
import br.com.caelum.core.db.HibernateDAOImpl;

@Repository
public class ConcursadoDAO extends HibernateDAOImpl<Concursado> {
	
	@Override
	protected Class<Concursado> getEntityClass() {
		return Concursado.class;
	}	
	
	@SuppressWarnings("unchecked")
	public List<Concursado> recuperarNomeacoesEntreDatas(Date dataInicio, Date dataFinal) {
//		System.out.println("DAO ==> recuperarNomeacoesEntreDatas !!!");
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

}
