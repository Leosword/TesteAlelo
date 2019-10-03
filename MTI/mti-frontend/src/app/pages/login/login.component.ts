import { Funcionalidade } from '../../shared/enum/funcionalidade.enum';
import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../authentication/usuario/usuario.service';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { AuthService } from '../authentication/auth.service';
import { TbUsuario } from '../../shared/model/tb-usuario';
import { AuthStorage } from '../authentication/auth.storage';
import { AppUtil } from '../../shared/app-util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'diario-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    exibeErroLogin = false;
    exibeErroSenha = false;
    user: TbUsuario = new TbUsuario();

    constructor(private userService: UsuarioService, private router: Router, private notificacaoService: NotificacaoService,
        private auth: AuthService, private authStorage: AuthStorage) {
    }

    ngOnInit() {
    }

    login() {
        if (this.validate()) {

            this.auth.autenticaUsuario(this.user).subscribe(
                authTokenDto => {
                    if (authTokenDto && authTokenDto.token) {
                        this.authStorage.saveToken(authTokenDto);
                        this.router.navigate(['/usuario/']);
                    } else {
                        this.exibeErroLogin = true;
                    }
                }
            );
        }

    }


    validate() {
        let retorno = true;
        if (AppUtil.isBlankOrNull(this.user.loginDeRede)) {
            this.exibeErroLogin = true;
            retorno = false;
        } else {
            this.exibeErroLogin = false;
        }

        if (AppUtil.isBlankOrNull(this.user.senha)) {
            this.exibeErroSenha = true;
            retorno = false;
        } else {
            this.exibeErroSenha = false;
        }

        return retorno;
    }

    getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    }

}
