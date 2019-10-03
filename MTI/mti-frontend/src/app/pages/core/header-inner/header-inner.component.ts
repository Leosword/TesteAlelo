import { AuthTokenDto } from './../../../shared/model/auth-token-dto';
import { TbUsuario } from './../../../shared/model/tb-usuario';
import { AuthStorage } from './../../authentication/auth.storage';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../authentication/usuario/usuario.service';
import { Router } from '@angular/router';
import { ProfileEnum } from '../../../shared/enum/profile.enum';
import { AuthService } from '../../authentication/auth.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
@Component({
    selector: 'app-header-inner',
    templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

    public usuario: TbUsuario;
    ProfileEnum: typeof ProfileEnum = ProfileEnum;

    displayDialogSenha = false;
    tituloModal: string;
    isAdmin: boolean = false;
    isLdap : boolean = false;
    usuarioAlteraSenha: TbUsuario;

    constructor(private userService: UsuarioService,
        private router: Router, private auth: AuthService, private authStorage: AuthStorage, private notificacaoService: NotificacaoService) {
        const authTokenDto: AuthTokenDto = AuthStorage.getObjetoSessao();

        if(authTokenDto){
            if(authTokenDto.tbUsuario){
                this.usuario = authTokenDto.tbUsuario;
                this.carregaUsuarioParaAlteracaoDeSenha(this.usuario);
                this.usuario.id == 1 ? this.isAdmin = true : this.isAdmin = false;
                this.usuario.profile == "LDAP" ? this.isLdap = true : this.isLdap = false;
            }
        }
    }

    logout(): void {        
        this.auth.logout();
        window.location.reload();
    }

    alterarSenha(){
        this.displayDialogSenha = true;
        this.tituloModal = "AlterarSenha";
    }

    confirmacaoAlteraSenha(){
        this.notificacaoService.showAlert("Sucesso", "Sua senha foi alterada com sucesso, favor utilizar a mesma no próximo Login.", "success");
    }

    erroAlteraSenha(){
        this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao alterar a senha. Favor entrar em contato com o Administrador", "error");
    }

    carregaUsuarioParaAlteracaoDeSenha(usuario){
        this.userService.usuario(usuario).subscribe(data => {
            this.usuarioAlteraSenha = data;
        }, error => {
            this.notificacaoService.erro(error);
        });
    }
}
