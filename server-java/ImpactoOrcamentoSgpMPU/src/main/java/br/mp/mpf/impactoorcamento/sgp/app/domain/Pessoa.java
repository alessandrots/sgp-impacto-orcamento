package br.mp.mpf.impactoorcamento.sgp.app.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

@Entity 
@Table(name="sp.pessoa")
public class Pessoa implements Comparable<Pessoa>, Serializable ,Domain {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3130512886433688882L;

	@Id @Generated(GenerationTime.INSERT) 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pess_cd_mat", nullable=false) 
	private Long codigo;
	
	@Column(name="pess_nm", nullable=false, length=80)
	private String nome;
	
	@Column(name="pess_nr_pront")
	private String nrPront;
	
	@Column(name="pess_tl_res")
	private String telResidencial;
	
	
	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNrPront() {
		return nrPront;
	}

	public void setNrPront(String nrPront) {
		this.nrPront = nrPront;
	}

	public String getTelResidencial() {
		return telResidencial;
	}

	public void setTelResidencial(String telResidencial) {
		this.telResidencial = telResidencial;
	}

	@Override
	public int compareTo(Pessoa o) {
		if (o instanceof Pessoa) {
			return getNome().compareTo(o.getNome());
		} else {
			return 0;
		}
	}
}
