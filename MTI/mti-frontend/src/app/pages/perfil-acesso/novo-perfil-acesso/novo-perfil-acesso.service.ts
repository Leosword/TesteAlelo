import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class NovoPerfilAcessoService {

  constructor(private http: HttpClient) { }

  incluir(perfil) {
    return this.http.post(AppSettings.API_ENDPOINT + '/perfil/salvar', perfil)
      .map((response: any) => {
        return response.content;
      })
      .catch(ErrorHandler.handleError)
  }

  atualizar(perfil) {
    return this.http.put(AppSettings.API_ENDPOINT + '/perfil/atualizar/' + perfil.id, perfil)
      .map((response: any) => {
        return response.content;
      })
      .catch(ErrorHandler.handleError)
  }

  obterFuncionalidadePorTipo(idTipoFuncionalidade) {
    return this.http.get(AppSettings.API_ENDPOINT + '/funcionalidade/carregarFuncionalidade/' + idTipoFuncionalidade).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

  obterFuncionalidades() {
    return this.http.get(AppSettings.API_ENDPOINT + '/funcionalidade/carregarFuncionalidades/').map((response: any) => {
      return response.content;
    }).catch(ErrorHandler.handleError)
  }

  obterFuncionalidesDisponiveis(listaIdsFuncionlidades) {
    return this.http.post(AppSettings.API_ENDPOINT + '/funcionalidade/carregarFuncionalidadesDisponiveis/', listaIdsFuncionlidades).map((response: any) => {
      return response.content;
    });
  }

  obterMenuComFuncionalidadesAssociadas(idMenu) {
    return this.http.get(AppSettings.API_ENDPOINT + '/menu/funcionalidades-associadas/' + idMenu).map((response: any) => {
      return response;
    }).catch(ErrorHandler.handleError)
  }

}
