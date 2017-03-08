package br.mp.mpf.impactoorcamento.sgp.app.json;

import org.apache.commons.lang.builder.ToStringBuilder;

public class Hospedeiro implements JSon {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6510922663255147278L;

	private Long id;
	private Long idLocalidade;
	private Long codigoNomeCientifico;
	private Long codigoNomeComum;
	private Long codigoSituacao;
	private String detalhes;
	private Long codigoEstadoVegetativo;
	private Double latitude;
	private Double longitude;
	private Boolean offline;
	// private Map<String, Object> additionalProperties = new HashMap<String,
	// Object>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdLocalidade() {
		return idLocalidade;
	}

	public void setIdLocalidade(Long idLocalidade) {
		this.idLocalidade = idLocalidade;
	}

	public Long getCodigoNomeCientifico() {
		return codigoNomeCientifico;
	}

	public void setCodigoNomeCientifico(Long codigoNomeCientifico) {
		this.codigoNomeCientifico = codigoNomeCientifico;
	}

	public Long getCodigoNomeComum() {
		return codigoNomeComum;
	}

	public void setCodigoNomeComum(Long codigoNomeComum) {
		this.codigoNomeComum = codigoNomeComum;
	}

	public Long getCodigoSituacao() {
		return codigoSituacao;
	}

	public void setCodigoSituacao(Long codigoSituacao) {
		this.codigoSituacao = codigoSituacao;
	}

	public String getDetalhes() {
		return detalhes;
	}

	public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}

	public Long getCodigoEstadoVegetativo() {
		return codigoEstadoVegetativo;
	}

	public void setCodigoEstadoVegetativo(Long codigoEstadoVegetativo) {
		this.codigoEstadoVegetativo = codigoEstadoVegetativo;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Boolean getOffline() {
		return offline;
	}

	public void setOffline(Boolean offline) {
		this.offline = offline;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

	// public Map<String, Object> getAdditionalProperties() {
	// return this.additionalProperties;
	// }
	//
	// public void setAdditionalProperty(String name, Object value) {
	// this.additionalProperties.put(name, value);
	// }

}