//import ParentService from './service-parent';
import {OrcamentoService} from './orcamento-service';
import {ConcursadoService} from './concursado-service';
import {ConcursoRemocaoService} from './concurso-remocao-service';
import {ImpactoService} from './impacto-service';

export const ONLINE_IMPACTO_SERVICES = [
  OrcamentoService,
  ConcursadoService,
  ConcursoRemocaoService,
  ImpactoService
];
