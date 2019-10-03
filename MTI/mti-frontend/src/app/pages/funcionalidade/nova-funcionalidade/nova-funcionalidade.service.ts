import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class NovaFuncionalidadeService {

  constructor(private http: HttpClient) { }

  incluir(funcionalidade) {
    return this.http.post(AppSettings.API_ENDPOINT + '/perfil/funcionalidade/salvar', funcionalidade)
      .map((response: any) => {
        return response.content;
      }).catch(ErrorHandler.handleError)
  }

  atualizar(funcionalidade) {
    return this.http.put(AppSettings.API_ENDPOINT + '/perfil/funcionalidade/atualizar/' + funcionalidade.id, funcionalidade)
      .map((response: any) => {
        return response.content;
      }).catch(ErrorHandler.handleError)
  }

}
