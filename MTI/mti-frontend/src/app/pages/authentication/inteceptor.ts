import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { AuthStorage } from './auth.storage';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  public showLoading: true;

  constructor(private authStorage: AuthStorage, private router: Router, private notificacaoService: NotificacaoService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
     
    let authReq = req;
    if (this.authStorage.getToken() != null) {
      this.ligarBlockUI();
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.authStorage.getToken()) });
    }

    return next.handle(authReq)
    .do((ev: any) => {   
      if (ev instanceof HttpResponse) {        
        this.desligarBlockUI();
      }else  if (ev instanceof HttpErrorResponse) {
        this.desligarBlockUI();        
        if (ev.status === 401) {
          this.router.navigate(['/login/']);
        }
      }
    }).catch((err) => {
      this.desligarBlockUI(); 
      if (err.status === 401) {
        this.router.navigate(['/login/']);
        const msg = "Sessão expirada, favor efetuar novo login";
        this.notificacaoService.erro(msg);
        return Observable.throw(msg);
      }
      return Observable.throw(err);
  })
  }

  private ligarBlockUI() {
    /*if (this.showLoading){
      this.showLoading = false;    
      $('body').spin("modal", "#FFFFFF", "rgba(51, 51, 51, 0.4)"); 
    } */ 
  }
    
  private desligarBlockUI() {
    /*if (!this.showLoading){
      this.showLoading = true;
      $('body').spin("modal", "#FFFFFF", "rgba(51, 51, 51, 0.4)");  
    } */      
  }
}
