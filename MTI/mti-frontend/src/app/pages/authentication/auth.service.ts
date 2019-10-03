import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { AuthStorage } from './auth.storage';
import { TbUsuario } from '../../shared/model/tb-usuario';
import { AppSettings } from '../app.settings';

@Injectable()
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private notificacaoService: NotificacaoService, private http: HttpClient,
    private authStorage: AuthStorage) { }

  autenticaUsuario(usuario: TbUsuario): Observable<any> {

    return this.http.post(AppSettings.API_ENDPOINT + this.urlAutenticaUsuario(), usuario)
      .map( (response: any) => {
        return response.resultado;
      }
      ).catch((e: any) => Observable.throw(this.errorHandler(e)));

  }

  errorHandler(error: any): void {
    this.logout();
    this.notificacaoService.erro(error.error.fieldErrors[0].message);
  }

  private urlAutenticaUsuario() {
    return '/usuario/gerar-token';
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  logout() {
    //Lembrar de fazer o posto de logout no server
    this.authStorage.signOut();
  }
}
