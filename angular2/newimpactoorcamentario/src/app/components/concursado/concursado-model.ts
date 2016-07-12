export default class ConcursadoModel {
/**
  se tiver varias classes num arquivo, uma tem q ser default
  this.formModel._value.dataInicial
  this.formModel._value.dataFinal

*/
  constructor(
    public inscricao:string,
    public numeroEdital:string,
    public ufNomeacao:string,
    public cargo:string,
    public cargoDescricao: string,
    public nome:string,
    public numeroPortaria: string,
    public dataNomeacao: string,
    public dataExercicio: string,
    public numeroVaga: string,
    public origemVaga: string,
    public dataDesprovimento: string,
    public leiVaga: string,
    public dataInicial : string,
    public dataFinal: string,
    public page:number) {
  		console.log('ConcursadoModel Hero');
   }

}
