package br.mp.mpf.impactoorcamento.sgp.app.json;

import org.apache.commons.lang.builder.ToStringBuilder;

public class Localidade implements JSon {
	/**
	 * 
	 */
	private static final long serialVersionUID = -133191300195044947L;
	private Long id;
	private Long idRota;
	private String descricao;
	private String endereco;
//	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	public Long getId() {
	return id;
	}

	public void setId(Long id) {
	this.id = id;
	}

	public Long getIdRota() {
	return idRota;
	}

	public void setIdRota(Long idRota) {
	this.idRota = idRota;
	}

	public String getDescricao() {
	return descricao;
	}

	public void setDescricao(String descricao) {
	this.descricao = descricao;
	}

	public String getEndereco() {
	return endereco;
	}

	public void setEndereco(String endereco) {
	this.endereco = endereco;
	}

	@Override
	public String toString() {
	return ToStringBuilder.reflectionToString(this);
	}

//	public Map<String, Object> getAdditionalProperties() {
//	return this.additionalProperties;
//	}
//
//	public void setAdditionalProperty(String name, Object value) {
//	this.additionalProperties.put(name, value);
//	}
}
