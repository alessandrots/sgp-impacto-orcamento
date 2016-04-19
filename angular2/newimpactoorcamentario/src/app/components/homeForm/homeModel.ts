export class Hero {
/**
  se tiver varias classes num arquivo, uma tem q ser default
*/
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { 
  	console.log('Model Hero');
   }

}
