import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class AssociarPermissaoService {

  constructor(private http: HttpClient) { }

  atualizar(perfil) {

    return this.http.put(AppSettings.API_ENDPOINT + '/perfil/atualizar/' + perfil.id, perfil)

      .map((response: any) => {

        return response.content;
      })
      .catch(ErrorHandler.handleError)
  }

}
