import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../app.settings';

@Injectable()
export class NovaConfiguracaoLdapService {

    constructor(private http: HttpClient) { }

    atualizar(configuracaoLdap) {
        return this.http.put(AppSettings.API_ENDPOINT + '/configuracaoldap/' + configuracaoLdap.id, configuracaoLdap).map((response: any) => {
            return response.content;
        });
    }

    incluir(configuracaoLdap) {
        return this.http.post(AppSettings.API_ENDPOINT + '/configuracaoldap/', configuracaoLdap).map((response: any) => {
            return response.content;
        });
    }

}
