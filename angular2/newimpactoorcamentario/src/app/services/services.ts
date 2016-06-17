//import ParentService from './service-parent';
import {OrcamentoService} from './orcamento-service';
import {ConcursadoService} from './concursado-service';
import {ConcursoRemocaoService} from './concurso-remocao-service';

export const ONLINE_AUCTION_SERVICES = [
  OrcamentoService,
  ConcursadoService,
  ConcursoRemocaoService
];
