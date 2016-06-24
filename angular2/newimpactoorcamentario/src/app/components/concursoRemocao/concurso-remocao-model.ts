export default class ConcursoRemocaoModel {
/**
  se tiver varias classes num arquivo, uma tem q ser default
*/
  // constructor() {
  //
  // }

  public numeroVaga:string;
  public cargoDescricao:string;
  public ramoOrigem:string;
  public ufOrigem:string;
  public unidadeOrigem:string;
  public ramoDestino:string;
  public ufDestino:string;
  public unidadeDestino:string;
  public lei:string;
  public motivo:string;
  public ultimoOcupante:string;
  public dataRemocaoGravacao:string;
  public totalRemocao:string

  constructor() {
  		console.log('ConcursoRemocaoModel');
   }

}
