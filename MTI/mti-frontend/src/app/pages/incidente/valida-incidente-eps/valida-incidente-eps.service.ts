import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class ValidaIncidenteEpsService {

  constructor(private http: HttpClient) { }

  salvar(timeLine, incidentesFilhos, files: any[], idIncidente) {

    const formData: FormData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i]['name']);
    }

    formData.append('timeLine', new Blob([JSON.stringify(timeLine)], {
      type: "application/json"
    }));

    return this.http.post(AppSettings.API_ENDPOINT + '/timeLine/envioEps?incidentesFilhosSelecionados='+incidentesFilhos+'&idIncidentePai='+idIncidente, formData).map((response: any) => {
      return response.content;
    }).catch(ErrorHandler.handleError);
  }

}
