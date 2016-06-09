package br.com.caelum.app.domain;

/**
 * SELECT * FROM GPSC_VW_19486_0030
 *
 * VAGA_REF                       NUMBER(10,0)
 * CARGO                          VARCHAR2(71 BYTE)
 * RAMO_ORIGEM                    VARCHAR2(10 BYTE)
 * UF_ORIGEM                      VARCHAR2(2 BYTE)      NOT NULL
 * UNIDADE_ORIGEM                 VARCHAR2(76 BYTE)
 * VAGA_NOMEACAO                  NUMBER(5,0)
 * RAMO_DESTINO                   VARCHAR2(10 BYTE)
 * UF_DESTINO                     VARCHAR2(2 BYTE)
 * UNIDADE_DESTINO                VARCHAR2(76 BYTE)
 * LEI                            NUMBER(10,0)
 * MOTIVO                         VARCHAR2(50 BYTE)     NOT NULL
 * DT_DESPR                       DATE
 * DT_PUBLICACAO                  DATE
 * ULT_OCUPANTE                   VARCHAR2(500 BYTE)
 * GVAG_REMO_DT                   DATE                  NOT NULL

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
@Table(name="sp.GPSC_VW_19486_0030")
public class ConcursoRemocao implements Comparable<ConcursoRemocao>, Serializable, Domain {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5928347849363214882L;

	@Id @Generated(GenerationTime.NEVER) 
	@Column(name="VAGA_REF") 
	private Long numeroVaga;
	@Column(name="CARGO", length=71)
	private String cargoDescricao;
	@Column(name="RAMO_ORIGEM",  length=10)
	private String ramoOrigem;
	@Column(name="UF_ORIGEM", nullable=false, length=2)
	private String ufOrigem;
	@Column(name="UNIDADE_ORIGEM", length=76)
	private String unidadeOrigem;
	@Column(name="VAGA_NOMEACAO")
	private Long numeroVagaNomeacao;
	@Column(name="RAMO_DESTINO",  length=10)
	private String ramoDestino;
	@Column(name="UF_DESTINO", length=2)
	private String ufDestino;
	@Column(name="UNIDADE_DESTINO", length=76)
	private String unidadeDestino;
	@Column(name="LEI")
	private Long lei;
	@Column(name="MOTIVO", length=50)
	private String motivo;
	@Column(name="DT_DESPR")
	private Date dataDesprovimento;
	@Column(name="DT_PUBLICACAO")
	private Date dataPublicacao;
	@Column(name="ULT_OCUPANTE")
	private String ultimoOcupante;
	@Column(name="gvag_remo_dt", nullable=false)
	private Date dataRemocaoGravacao;
	
	
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
	 * @return the ramoOrigem
	 */
	public String getRamoOrigem() {
		return ramoOrigem;
	}


	/**
	 * @param ramoOrigem the ramoOrigem to set
	 */
	public void setRamoOrigem(String ramoOrigem) {
		this.ramoOrigem = ramoOrigem;
	}


	/**
	 * @return the ufOrigem
	 */
	public String getUfOrigem() {
		return ufOrigem;
	}


	/**
	 * @param ufOrigem the ufOrigem to set
	 */
	public void setUfOrigem(String ufOrigem) {
		this.ufOrigem = ufOrigem;
	}


	/**
	 * @return the unidadeOrigem
	 */
	public String getUnidadeOrigem() {
		return unidadeOrigem;
	}


	/**
	 * @param unidadeOrigem the unidadeOrigem to set
	 */
	public void setUnidadeOrigem(String unidadeOrigem) {
		this.unidadeOrigem = unidadeOrigem;
	}


	/**
	 * @return the numeroVagaNomeacao
	 */
	public Long getNumeroVagaNomeacao() {
		return numeroVagaNomeacao;
	}


	/**
	 * @param numeroVagaNomeacao the numeroVagaNomeacao to set
	 */
	public void setNumeroVagaNomeacao(Long numeroVagaNomeacao) {
		this.numeroVagaNomeacao = numeroVagaNomeacao;
	}


	/**
	 * @return the ramoDestino
	 */
	public String getRamoDestino() {
		return ramoDestino;
	}


	/**
	 * @param ramoDestino the ramoDestino to set
	 */
	public void setRamoDestino(String ramoDestino) {
		this.ramoDestino = ramoDestino;
	}


	/**
	 * @return the ufDestino
	 */
	public String getUfDestino() {
		return ufDestino;
	}


	/**
	 * @param ufDestino the ufDestino to set
	 */
	public void setUfDestino(String ufDestino) {
		this.ufDestino = ufDestino;
	}


	/**
	 * @return the unidadeDestino
	 */
	public String getUnidadeDestino() {
		return unidadeDestino;
	}


	/**
	 * @param unidadeDestino the unidadeDestino to set
	 */
	public void setUnidadeDestino(String unidadeDestino) {
		this.unidadeDestino = unidadeDestino;
	}


	/**
	 * @return the lei
	 */
	public Long getLei() {
		return lei;
	}


	/**
	 * @param lei the lei to set
	 */
	public void setLei(Long lei) {
		this.lei = lei;
	}


	/**
	 * @return the motivo
	 */
	public String getMotivo() {
		return motivo;
	}


	/**
	 * @param motivo the motivo to set
	 */
	public void setMotivo(String motivo) {
		this.motivo = motivo;
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
	 * @return the dataPublicacao
	 */
	public Date getDataPublicacao() {
		return dataPublicacao;
	}


	/**
	 * @param dataPublicacao the dataPublicacao to set
	 */
	public void setDataPublicacao(Date dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}


	/**
	 * @return the ultimoOcupante
	 */
	public String getUltimoOcupante() {
		return ultimoOcupante;
	}


	/**
	 * @param ultimoOcupante the ultimoOcupante to set
	 */
	public void setUltimoOcupante(String ultimoOcupante) {
		this.ultimoOcupante = ultimoOcupante;
	}


	@Override
	public int compareTo(ConcursoRemocao o) {
		if (o instanceof ConcursoRemocao) {
			return getNumeroVaga().compareTo(o.getNumeroVaga());
		} else {
			return 0;
		}
	}
}