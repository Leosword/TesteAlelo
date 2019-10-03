import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class ValidaIncidenteService {

  constructor(private http: HttpClient) { }

  salvar(timeLine, incidentesFilhos) {
    return this.http.post(AppSettings.API_ENDPOINT + '/timeLine/salvar?incidentesFilhosSelecionados=' + incidentesFilhos, timeLine)
      .map((response: any) => {
        return response.content;
      }).catch(ErrorHandler.handleError);
  }

}
