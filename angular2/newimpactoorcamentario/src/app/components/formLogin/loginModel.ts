export class Login {
/**
  se tiver varias classes num arquivo, uma tem q ser default
*/
  constructor(
    public username: number,
    public ssn: string,
    public password: string,
    public pconfirm?: string
  ) { 
  	console.log('Model Login');
   }

}
