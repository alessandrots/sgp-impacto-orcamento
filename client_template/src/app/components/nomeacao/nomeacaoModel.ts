export default class Nomeacao {
/**
  se tiver varias classes num arquivo, uma tem q ser default
*/
  constructor(
    public edital: string,
	public ramo: string,
	public uf: string,
	public cargo: string,
	public cargoDescricao: string,
	public nome: string,
	public port: string,
	public nomeacaoData: string,
	public dataExercicio: string,
	public vaga: string,
	public origemVaga: string,
	public desprovimento: string,
	public leiVaga: string,
	public dataPortariaSemEfeito: string,
	public numeroPortariaSemEfeito: string,
	public field16: string) { 
  	console.log('Model Hero');
   }

}