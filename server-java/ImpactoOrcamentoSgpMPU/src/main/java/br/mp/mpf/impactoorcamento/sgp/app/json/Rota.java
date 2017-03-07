package br.mp.mpf.impactoorcamento.sgp.app.json;

import org.apache.commons.lang.builder.ToStringBuilder;

public class Rota implements JSon {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String limite;
	private String descricao;
	private Long codigoIBGE;
	private String municipio;
	private Long totalArea;
	private Long totalAreaTrabalhada;
	private Long hospedesCadastrados;
	private Long hospedesContabilizados;
	private Long armadilhaMcphail;
	private Long armadilhaJackson;
	private Long idAgenteCampo;
	private Long idMunicipio;
	// private Map<String, Object> additionalProperties = new HashMap<String,
	// Object>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLimite() {
		return limite;
	}

	public void setLimite(String limite) {
		this.limite = limite;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getCodigoIBGE() {
		return codigoIBGE;
	}

	public void setCodigoIBGE(Long codigoIBGE) {
		this.codigoIBGE = codigoIBGE;
	}

	public String getMunicipio() {
		return municipio;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public Long getTotalArea() {
		return totalArea;
	}

	public void setTotalArea(Long totalArea) {
		this.totalArea = totalArea;
	}

	public Long getTotalAreaTrabalhada() {
		return totalAreaTrabalhada;
	}

	public void setTotalAreaTrabalhada(Long totalAreaTrabalhada) {
		this.totalAreaTrabalhada = totalAreaTrabalhada;
	}

	public Long getHospedesCadastrados() {
		return hospedesCadastrados;
	}

	public void setHospedesCadastrados(Long hospedesCadastrados) {
		this.hospedesCadastrados = hospedesCadastrados;
	}

	public Long getHospedesContabilizados() {
		return hospedesContabilizados;
	}

	public void setHospedesContabilizados(Long hospedesContabilizados) {
		this.hospedesContabilizados = hospedesContabilizados;
	}

	public Long getArmadilhaMcphail() {
		return armadilhaMcphail;
	}

	public void setArmadilhaMcphail(Long armadilhaMcphail) {
		this.armadilhaMcphail = armadilhaMcphail;
	}

	public Long getArmadilhaJackson() {
		return armadilhaJackson;
	}

	public void setArmadilhaJackson(Long armadilhaJackson) {
		this.armadilhaJackson = armadilhaJackson;
	}

	public Long getIdAgenteCampo() {
		return idAgenteCampo;
	}

	public void setIdAgenteCampo(Long idAgenteCampo) {
		this.idAgenteCampo = idAgenteCampo;
	}

	public Long getIdMunicipio() {
		return idMunicipio;
	}

	public void setIdMunicipio(Long idMunicipio) {
		this.idMunicipio = idMunicipio;
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