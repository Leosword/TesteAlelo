import { TbUsuario } from './../../../shared/model/tb-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';
import 'rxjs/Rx';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    usuarios() {
        return this.http.get(AppSettings.API_ENDPOINT + '/usuario/').map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }

    usuario(usuario: TbUsuario) {
        return this.http.get(AppSettings.API_ENDPOINT + '/usuario/' + usuario.id).map((response: any) => {
            return response;
        }).catch(ErrorHandler.handleError)
    }

    obterUsuarioComPerfis(usuario: TbUsuario) {
        return this.http.get(AppSettings.API_ENDPOINT + '/usuario/obterUsuarioComPerfis/' + usuario.id).map((response: any) => {
            return response;
        }).catch(ErrorHandler.handleError)
    }

    ativaDesativarUsuario(usuario) {
        return this.http.post(AppSettings.API_ENDPOINT + '/usuario/salvar', usuario).map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }

    deletarTodosLogicamente(usuarios: TbUsuario[]) {
        return this.http.put(AppSettings.API_ENDPOINT + '/usuario/', usuarios).map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }

    login(usuario: TbUsuario) {
        return this.http.post(AppSettings.API_ENDPOINT + '/usuario/gerar-token', usuario)
    }

}
