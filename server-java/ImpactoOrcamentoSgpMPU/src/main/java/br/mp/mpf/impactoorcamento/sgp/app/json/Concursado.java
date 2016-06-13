package br.mp.mpf.impactoorcamento.sgp.app.json;

import java.sql.Date;

public class Concursado implements JSon {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -537579588096041329L;
	private Long inscricao;
	private String numeroEdital;
	private String ufNomeacao;
	private String cargo;
	private String cargoDescricao;
	private String nome;
	private String numeroPortaria;
	private String dataNomeacao;
	private String dataExercicio;
	private Long numeroVaga;	
	private String origemVaga;
	private String dataDesprovimento;
	private Long leiVaga;
	private String dataPortariaSemEfeito;
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
	public String getDataNomeacao() {
		return dataNomeacao;
	}
	/**
	 * @param dataNomeacao the dataNomeacao to set
	 */
	public void setDataNomeacao(String dataNomeacao) {
		this.dataNomeacao = dataNomeacao;
	}
	/**
	 * @return the dataExercicio
	 */
	public String getDataExercicio() {
		return dataExercicio;
	}
	/**
	 * @param dataExercicio the dataExercicio to set
	 */
	public void setDataExercicio(String dataExercicio) {
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
	public String getDataDesprovimento() {
		return dataDesprovimento;
	}
	/**
	 * @param dataDesprovimento the dataDesprovimento to set
	 */
	public void setDataDesprovimento(String dataDesprovimento) {
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
	
}
