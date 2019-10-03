import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class LogsService {

  constructor(private http: HttpClient) { }

  obterLogPorIncidente(persistentId, idIncidente) {
    
    return this.http.get(AppSettings.API_ENDPOINT + '/log/' + idIncidente).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

}
