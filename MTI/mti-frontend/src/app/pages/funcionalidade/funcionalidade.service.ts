import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class FuncionalidadeService {

  constructor(private http: HttpClient) { }

  obterTodasFuncionalidades() {
    return this.http.get(AppSettings.API_ENDPOINT + '/funcionalidade/carregarFuncionalidades').map((response: any) => {
      return response.content;
    }).catch(ErrorHandler.handleError)
  }

  obterFuncionalidadePorId(id: number) {
    return this.http.get(AppSettings.API_ENDPOINT + '/funcionalidade/carregarFuncionalidades/' + id).map((response: any) => {
      return response;
    })
      .catch(ErrorHandler.handleError)
  }

  desativarFuncionalidade(funcionalidades) {
    return this.http.put(AppSettings.API_ENDPOINT + '/funcionalidade/ativaDesativa', funcionalidades).map((response: any) => {
      return response.content;
    });
  }

}
