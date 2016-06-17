export default class ParentService {

  private _urlBase:string;
  private _server:string;
  private _port:string;
  private _contextPath:string;

  constructor(private env:string) { 
      if (env == 'dev') {
        console.log('ServiceBase Desenvolvimento');
        this._server = 'http://10.224.126.253';
        this._port = '8080';
        this._contextPath='impactorcamentosgpmpu';  
      } else if (env == 'test') {
        console.log('ServiceBase Teste');
        this._server = 'http://10.224.126.253';
        this._port = '8080';
        this._contextPath='impactorcamentosgpmpu';  
      } else if (env == 'hom') {
        console.log('ServiceBase Homologa');
        this._server = 'http://10.224.126.253';
        this._port = '8080';
        this._contextPath='impactorcamentosgpmpu';  
      } else if (env == 'prod') {
        console.log('ServiceBase Producao');
        this._server = 'http://10.224.126.253';
        this._port = '8080';
        this._contextPath='impactorcamentosgpmpu';  
      }

      this._urlBase = this._server + ":" + this._port + this._contextPath;
  }

  get urlBase() :string {
    return this._urlBase;
  }
  
}