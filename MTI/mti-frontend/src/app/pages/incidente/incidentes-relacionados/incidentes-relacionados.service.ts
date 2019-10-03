import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class IncidentesRelacionadosService {

  constructor(private http: HttpClient) { }

  obterIncidentesFilhos(numeroIncidentePai) {
    
    return this.http.get(AppSettings.API_ENDPOINT + '/chamado/incidentesRelacionados?numeroIncidentePai=' + numeroIncidentePai).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

}
