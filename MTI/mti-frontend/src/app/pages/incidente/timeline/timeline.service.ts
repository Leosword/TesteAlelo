import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class TimelineService {

  constructor(private http: HttpClient) { }

  obterTimeLine(idIncidente) {
    return this.http.get(AppSettings.API_ENDPOINT + '/timeLine/carregarPorIdIncidente/' + idIncidente).map((response: any) => {
      return response.content;
    }).catch(ErrorHandler.handleError)
  }
  
  download(filename): any {

    const fileUrl: string = AppSettings.API_ENDPOINT + '/timeLine/download/' + filename;
    const arquivo = this.http.get(fileUrl, {
      responseType: 'blob' as 'json'
    }).map((data: any) => {
      return new Blob([data], { type: data.type })
    }).catch(err => {
      // tslint:disable-next-line:no-string-throw
      throw 'Erro inesperado ao efetuar download do arquivo: ' + err;
    } );


    return arquivo;
  }

}
