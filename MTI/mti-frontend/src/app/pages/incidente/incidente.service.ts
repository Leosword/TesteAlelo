import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { ErrorHandler } from '../app.error-handler';
import { ChamadoDto } from '../../shared/model/chamado-dto';

@Injectable()
export class IncidenteService {

  constructor(private http: HttpClient) { }

  obterTodosIncidentes(parametroBackend, flagIncidentePai, numeroIncidente) {
    return this.http.get(AppSettings.API_ENDPOINT + parametroBackend + "?flagChamadoPai="+ flagIncidentePai + "&numeroIncidente="+ numeroIncidente).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

  obterDataUltimaAtualizacao(tpIncidente) {
    return this.http.get(AppSettings.API_ENDPOINT + '/chamado/obterDataUltimaAtualizacao/' + tpIncidente).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

  obterPorNumeroIncidente(numeroIncidente) {
    return this.http.get(AppSettings.API_ENDPOINT + '/chamado/' + numeroIncidente).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

  obterDetalhesChamado(chamado: ChamadoDto, parametroBackend) {
    return this.http.get(AppSettings.API_ENDPOINT + parametroBackend + chamado.id).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

  obterStatusFluxoPorNome(statusFluxo){
    return this.http.get(AppSettings.API_ENDPOINT + '/chamado/obterStatusFluxo/' + statusFluxo).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }
}
