import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../app.settings';

@Injectable()
export class NovoDominioLdapService {

    constructor(private http: HttpClient) { }

    atualizar(dominioLdap) {
        return this.http.put(AppSettings.API_ENDPOINT + '/dominioldap/' + dominioLdap.id, dominioLdap).map((response: any) => {
            return response.content;
        });
    }

    incluir(dominioLdap) {
        return this.http.post(AppSettings.API_ENDPOINT + '/dominioldap/', dominioLdap).map((response: any) => {
            return response.content;
        });
    }

}
