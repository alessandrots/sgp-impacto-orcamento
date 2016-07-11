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
		/**
		 * 	Query base:(Recuperando somente o último concursado, ou seja o mais recente que entrou e assumiu a vaga (exercicio preenchido)) 
		 * 
		 select conc.vaga_sq, conc.nomeacao_dt, conc.cargo_ds, conc.nome, conc.uf_nomeacao, conc.dt_port_nomeacao_assinatura, conc.inscricao, conc.nome
		 from sp.gps_vw_concursado conc
		 where conc.vaga_sq = 11708
		  AND conc.nomeacao_dt = (
		        select max(conc1.nomeacao_dt)
		        from sp.gps_vw_concursado conc1
		        where conc.vaga_sq = conc1.vaga_sq
		  )
		  order by conc.nomeacao_dt desc 
		 */
		
		StringBuilder hql = new StringBuilder();
		hql.append("SELECT d ");
		hql.append("FROM Concursado d ");
		hql.append("WHERE d.numeroPortaria is not null ");
		hql.append(" AND d.dataExercicio is not null ");
		
		if (dataInicio != null && dataFinal != null) {
			hql.append(" AND d.dataNomeacao BETWEEN :dataInicio AND :dataFinal");
		}
		
		hql.append(" AND d.dataNomeacao = ");
		hql.append(" (SELECT max(d.dataNomeacao) ");
		hql.append("  FROM Concursado d1 ");
		hql.append("  WHERE d1.numeroVaga = d.numeroVaga) ");
		
		hql.append("ORDER BY d.dataNomeacao DESC ");
		
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
