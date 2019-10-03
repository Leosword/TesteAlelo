import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class DominioLdapService {

    constructor(private http: HttpClient) { }

    dominiosLdap() {
        return this.http.get(AppSettings.API_ENDPOINT + '/dominioldap/').map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }

    dominioLdap(dominioLdap) {
        return this.http.get(AppSettings.API_ENDPOINT + '/dominioldap/' + dominioLdap.id).map((response: any) => {
            return response;
        }).catch(ErrorHandler.handleError)
    }

    deletarTodosLogicamente(dominiosLdap) {
        return this.http.put(AppSettings.API_ENDPOINT + '/dominioldap/', dominiosLdap).map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }
}
