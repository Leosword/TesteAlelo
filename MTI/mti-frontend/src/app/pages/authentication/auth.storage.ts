import { Funcionalidade } from '../../shared/enum/funcionalidade.enum';
import { Flag } from './../../shared/constants/flag';
import { Injectable } from '@angular/core';
import { AuthTokenDto } from '../../shared/model/auth-token-dto';
const TOKEN_KEY = 'AuthToken';
const FL_USUARIO_LOGADO = 'Usuario esta Autenticado - Sim ou Nao';
const USUARIO_LOGADO = 'Objeto usuario em momoria';


@Injectable()
export class AuthStorage {

  constructor() { }

  static getObjetoSessao(): any {
    return JSON.parse(sessionStorage.getItem(USUARIO_LOGADO));
  }

  static usuarioTemPermissaoRole(roleName: string): boolean {

    if(!roleName){
      console.error("O nome da Role deve ser informado para efetuar a verificação de permissão!");
      return false;
    }

    const authTokenDto: AuthTokenDto = this.getObjetoSessao();    
    
    if (authTokenDto) {
      if (authTokenDto.tbUsuario) {
        const usuario = authTokenDto.tbUsuario;
        
        if(!usuario || !usuario.tbPerfils){
          
          
          return false;
        }

        for(let i = 0; i < usuario.tbPerfils.length; i++) { 
          
          const perfil = usuario.tbPerfils[i];

          if(!perfil || !perfil.tbFuncionalidades){
            continue;
          }
  
          for(let x = 0; x < perfil.tbFuncionalidades.length; x++){
            const funcionalidade = perfil.tbFuncionalidades[x];
            
            
            if(funcionalidade && funcionalidade.nome && funcionalidade.nome === roleName){
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  signOut() {
    window.sessionStorage.removeItem(FL_USUARIO_LOGADO);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(authTokenDto: AuthTokenDto) {

    window.sessionStorage.removeItem(FL_USUARIO_LOGADO);
    window.sessionStorage.setItem(FL_USUARIO_LOGADO, Flag.SIM);

    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, authTokenDto.token);
    window.sessionStorage.setItem(USUARIO_LOGADO, JSON.stringify(authTokenDto));
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public usuarioEstaLogado(): string {
    return sessionStorage.getItem(FL_USUARIO_LOGADO);
  }




}
