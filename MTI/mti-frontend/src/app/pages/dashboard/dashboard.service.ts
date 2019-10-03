import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { ErrorHandler } from '../app.error-handler';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }
  
      obterEventos(tipo, tpIntervalo) {
          return this.http.get(AppSettings.API_ENDPOINT + '/evento/totalizadores/'+tipo+'/'+tpIntervalo).map((response: any) => {            
              return response.content;
          }).catch(ErrorHandler.handleError)

      }

}
