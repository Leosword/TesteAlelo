import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../app.settings';
import { TbUsuario } from '../../../../shared/model/tb-usuario';
import { TbPerfil } from '../../../../shared/model/tb-perfil';
import { ErrorHandler } from '../../../app.error-handler';

@Injectable()
export class NovoUsuarioService {

    constructor(private http: HttpClient) { }

    salvar(usuario) {
        return this.http.post(AppSettings.API_ENDPOINT + '/usuario/salvar', usuario).map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }

}
