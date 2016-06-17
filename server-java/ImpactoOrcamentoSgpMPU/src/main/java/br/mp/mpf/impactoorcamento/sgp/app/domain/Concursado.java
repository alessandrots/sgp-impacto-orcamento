package br.mp.mpf.impactoorcamento.sgp.app.domain;

/**
 * SELECT *
 * FROM gps_vw_concursado
 * WHERE portaria IS NOT NULL
 * AND nomeacao_dt BETWEEN '01/01/2015' AND '31/05/2015'
 * 
 * INSCRICAO                      NUMBER(10,0)          NOT NULL
 * NUMERO_EDITAL                  VARCHAR2(20 BYTE)
 * UF_NOMEACAO                    VARCHAR2(2 BYTE)
 * CARGO                          VARCHAR2(8 BYTE)
 * CARGO_DS                       VARCHAR2(60 BYTE)     NOT NULL
 * NOME                           VARCHAR2(60 BYTE)     NOT NULL
 * PORTARIA                       VARCHAR2(10 BYTE)
 * NOMEACAO_DT                    DATE
 * DT_EXERCICIO                   DATE
 * VAGA_SQ                        NUMBER(5,0)
 * ORIGEM_VAGA                    VARCHAR2(4000 BYTE)
 * CONR_DESPROVIMENTO_DT          DATE
 * LEI_VAGA                       NUMBER
 * DT_PORT_SEM_EFEITO             VARCHAR2(10 BYTE)
 * NR_PORTARIA_SEM_EFEITO         NUMBER(10,0)
 * 
 * RAMO  ???? (não existe na view, trazer num pojo no front-end) <<<<<
 */
import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

@Entity 
@Table(name="sp.gps_vw_concursado")
public class Concursado implements Comparable<Concursado>, Serializable, Domain {

	private static final long serialVersionUID = 9132741694926893005L;
	
	

	@Id @Generated(GenerationTime.NEVER) 
	@Column(name="INSCRICAO", nullable=false) 
	private Long inscricao;
	@Column(name="NUMERO_EDITAL", length=20)
	private String numeroEdital;
	@Column(name="UF_NOMEACAO", length=2)
	private String ufNomeacao;
	@Column(name="CARGO", length=8)
	private String cargo;
	@Column(name="CARGO_DS", nullable=false, length=60)
	private String cargoDescricao;
	@Column(name="NOME", nullable=false, length=60)
	private String nome;
	@Column(name="PORTARIA", length=10)
	private String numeroPortaria;
	@Column(name="NOMEACAO_DT")
	private Date dataNomeacao;
	@Column(name="DT_EXERCICIO")
	private Date dataExercicio;
	@Column(name="VAGA_SQ") 
	private Long numeroVaga;	
	@Column(name="ORIGEM_VAGA", length=4000)
	private String origemVaga;
	@Column(name="CONR_DESPROVIMENTO_DT")
	private Date dataDesprovimento;
	@Column(name="LEI_VAGA") 
	private Long leiVaga;
	@Column(name="DT_PORT_SEM_EFEITO")
	private String dataPortariaSemEfeito;
	@Column(name="NR_PORTARIA_SEM_EFEITO") 
	private Long nrPortariaSemEfeito;
	
	/**
	 * @return the inscricao
	 */
	public Long getInscricao() {
		return inscricao;
	}

	/**
	 * @param inscricao the inscricao to set
	 */
	public void setInscricao(Long inscricao) {
		this.inscricao = inscricao;
	}

	/**
	 * @return the numeroEdital
	 */
	public String getNumeroEdital() {
		return numeroEdital;
	}

	/**
	 * @param numeroEdital the numeroEdital to set
	 */
	public void setNumeroEdital(String numeroEdital) {
		this.numeroEdital = numeroEdital;
	}

	/**
	 * @return the ufNomeacao
	 */
	public String getUfNomeacao() {
		return ufNomeacao;
	}

	/**
	 * @param ufNomeacao the ufNomeacao to set
	 */
	public void setUfNomeacao(String ufNomeacao) {
		this.ufNomeacao = ufNomeacao;
	}

	/**
	 * @return the cargo
	 */
	public String getCargo() {
		return cargo;
	}

	/**
	 * @param cargo the cargo to set
	 */
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	/**
	 * @return the cargoDescricao
	 */
	public String getCargoDescricao() {
		return cargoDescricao;
	}

	/**
	 * @param cargoDescricao the cargoDescricao to set
	 */
	public void setCargoDescricao(String cargoDescricao) {
		this.cargoDescricao = cargoDescricao;
	}

	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}

	/**
	 * @param nome the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}

	/**
	 * @return the numeroPortaria
	 */
	public String getNumeroPortaria() {
		return numeroPortaria;
	}

	/**
	 * @param numeroPortaria the numeroPortaria to set
	 */
	public void setNumeroPortaria(String numeroPortaria) {
		this.numeroPortaria = numeroPortaria;
	}

	/**
	 * @return the dataNomeacao
	 */
	public Date getDataNomeacao() {
		return dataNomeacao;
	}

	/**
	 * @param dataNomeacao the dataNomeacao to set
	 */
	public void setDataNomeacao(Date dataNomeacao) {
		this.dataNomeacao = dataNomeacao;
	}

	/**
	 * @return the dataExercicio
	 */
	public Date getDataExercicio() {
		return dataExercicio;
	}

	/**
	 * @param dataExercicio the dataExercicio to set
	 */
	public void setDataExercicio(Date dataExercicio) {
		this.dataExercicio = dataExercicio;
	}

	/**
	 * @return the numeroVaga
	 */
	public Long getNumeroVaga() {
		return numeroVaga;
	}

	/**
	 * @param numeroVaga the numeroVaga to set
	 */
	public void setNumeroVaga(Long numeroVaga) {
		this.numeroVaga = numeroVaga;
	}

	/**
	 * @return the origemVaga
	 */
	public String getOrigemVaga() {
		return origemVaga;
	}

	/**
	 * @param origemVaga the origemVaga to set
	 */
	public void setOrigemVaga(String origemVaga) {
		this.origemVaga = origemVaga;
	}

	/**
	 * @return the dataDesprovimento
	 */
	public Date getDataDesprovimento() {
		return dataDesprovimento;
	}

	/**
	 * @param dataDesprovimento the dataDesprovimento to set
	 */
	public void setDataDesprovimento(Date dataDesprovimento) {
		this.dataDesprovimento = dataDesprovimento;
	}

	/**
	 * @return the leiVaga
	 */
	public Long getLeiVaga() {
		return leiVaga;
	}

	/**
	 * @param leiVaga the leiVaga to set
	 */
	public void setLeiVaga(Long leiVaga) {
		this.leiVaga = leiVaga;
	}

	/**
	 * @return the dataPortariaSemEfeito
	 */
	public String getDataPortariaSemEfeito() {
		return dataPortariaSemEfeito;
	}

	/**
	 * @param dataPortariaSemEfeito the dataPortariaSemEfeito to set
	 */
	public void setDataPortariaSemEfeito(String dataPortariaSemEfeito) {
		this.dataPortariaSemEfeito = dataPortariaSemEfeito;
	}

	/**
	 * @return the nrPortariaSemEfeito
	 */
	public Long getNrPortariaSemEfeito() {
		return nrPortariaSemEfeito;
	}

	/**
	 * @param nrPortariaSemEfeito the nrPortariaSemEfeito to set
	 */
	public void setNrPortariaSemEfeito(Long nrPortariaSemEfeito) {
		this.nrPortariaSemEfeito = nrPortariaSemEfeito;
	}

	@Override
	public int compareTo(Concursado o) {
		if (o instanceof Concursado) {
			return getNome().compareTo(o.getNome());
		} else {
			return 0;
		}
	}
}
