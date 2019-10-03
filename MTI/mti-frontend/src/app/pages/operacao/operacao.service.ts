import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { AppSettings } from '../app.settings';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class OperacaoService {

  constructor(private http: HttpClient) { }

    obterOperacoes() {
        return this.http.get(AppSettings.API_ENDPOINT + '/operacao/').map((response: any) => {
            return response.content;
        }).catch(ErrorHandler.handleError)
    }
}
