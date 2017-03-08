package br.mp.mpf.impactoorcamento.sgp.app.json;

import org.apache.commons.lang.builder.ToStringBuilder;

public class Armadilha implements JSon {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3473082181850061670L;
	
	private Long id;
	private Long idLocalidade;
	private String codigoArmadilha;
	private Long codigoTipoArmadilha;
	private Long codigoSituacao;
	private String localEndereco;
	private Long codigoObjetivo;
	private Long codigoEspecime;
	private Long idHospedeiro;
	private Long dataUltimaVisita;
	private Boolean offline;
//	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

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

	public String getCodigoArmadilha() {
	return codigoArmadilha;
	}

	public void setCodigoArmadilha(String codigoArmadilha) {
	this.codigoArmadilha = codigoArmadilha;
	}

	public Long getCodigoTipoArmadilha() {
	return codigoTipoArmadilha;
	}

	public void setCodigoTipoArmadilha(Long codigoTipoArmadilha) {
	this.codigoTipoArmadilha = codigoTipoArmadilha;
	}

	public Long getCodigoSituacao() {
	return codigoSituacao;
	}

	public void setCodigoSituacao(Long codigoSituacao) {
	this.codigoSituacao = codigoSituacao;
	}

	public String getLocalEndereco() {
	return localEndereco;
	}

	public void setLocalEndereco(String localEndereco) {
	this.localEndereco = localEndereco;
	}

	public Long getCodigoObjetivo() {
	return codigoObjetivo;
	}

	public void setCodigoObjetivo(Long codigoObjetivo) {
	this.codigoObjetivo = codigoObjetivo;
	}

	public Long getCodigoEspecime() {
	return codigoEspecime;
	}

	public void setCodigoEspecime(Long codigoEspecime) {
	this.codigoEspecime = codigoEspecime;
	}

	public Long getIdHospedeiro() {
	return idHospedeiro;
	}

	public void setIdHospedeiro(Long idHospedeiro) {
	this.idHospedeiro = idHospedeiro;
	}

	public Long getDataUltimaVisita() {
	return dataUltimaVisita;
	}

	public void setDataUltimaVisita(Long dataUltimaVisita) {
	this.dataUltimaVisita = dataUltimaVisita;
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

//	public Map<String, Object> getAdditionalProperties() {
//	return this.additionalProperties;
//	}
//
//	public void setAdditionalProperty(String name, Object value) {
//	this.additionalProperties.put(name, value);
//	}
}
