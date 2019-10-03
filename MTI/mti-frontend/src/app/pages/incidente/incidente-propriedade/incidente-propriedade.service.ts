import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class IncidentePropriedadeService {

  constructor(private http: HttpClient) { }

  obterDetalhesChamado(idIncidente) {
    return this.http.get(AppSettings.API_ENDPOINT + '/propriedadeIncidente/' + idIncidente).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }
}
