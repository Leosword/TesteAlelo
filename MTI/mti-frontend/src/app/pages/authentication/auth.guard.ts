import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Funcionalidade } from '../../shared/enum/funcionalidade.enum';
import { NotificacaoService } from './../../shared/notificacao/notificacao.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { AuthStorage } from './auth.storage';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {


  constructor(
    private authStorage: AuthStorage,
    private router: Router,
    private notificacaoService: NotificacaoService,
    private authService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (state.url !== '/home' && this.authStorage.usuarioEstaLogado()) {
      const rotaAcessada =  route.data['auth'];
      if(rotaAcessada && !AuthStorage.usuarioTemPermissaoRole(rotaAcessada) ) {
        this.notificacaoService.showAlert("Autorização negada", "Operação não autorizada, seu perfil não possui permissão para essa operação", "warning");
        //this.authService.logout();
        //this.router.navigate(['/login']);  
        return false;
      }
    }

    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authStorage.usuarioEstaLogado()) {
      return true;
    }

    this.authService.logout();
    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

}
