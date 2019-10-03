import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { AppSettings } from '../app.settings';
import { ErrorHandler } from '../app.error-handler';
import 'rxjs/Rx';

@Injectable()
export class PerfilAcessoService {

  constructor(private http: HttpClient) { }

  obterTodosPerfis() {
    return this.http.get(AppSettings.API_ENDPOINT + '/perfil/carregarPerfis').map((response: any) => {
      return response.content;
    }).catch(ErrorHandler.handleError)
  }

  obterPerfilPorId(id: number) {
    return this.http.get(AppSettings.API_ENDPOINT + '/perfil/carregaPerfil/' + id).map((response: any) => {
      return response;
    })
      .catch(ErrorHandler.handleError)
  }

  obterPerfisDisponiveis(listaIdsPerfisAssociados) {
    return this.http.post(AppSettings.API_ENDPOINT + '/perfil/carregarPerfisDisponiveis/', listaIdsPerfisAssociados).map((response: any) => {
      return response.content;
    });
  }

  obterTodosMenus() {
    return this.http.get(AppSettings.API_ENDPOINT + '/menu/').map((response: any) => {
      return response.content;
    }).catch(ErrorHandler.handleError)
  }

  ativaDesativarPerfil(perfis) {
    return this.http.put(AppSettings.API_ENDPOINT + '/perfil/desativar', perfis).map((response: any) => {
      return response.content;
    });
  }

}
