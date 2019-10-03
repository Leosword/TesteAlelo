import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfiguracaoLdapModel } from '../../../shared/model/configuracao-ldap.model';
import { NovaConfiguracaoLdapComponent } from './nova-configuracao-ldap/nova-configuracao-ldap.component';
import { ConfiguracaoLdapService } from './configuracao-ldap.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { AppUtil } from '../../../shared/app-util';
import { Flag } from '../../../shared/constants/flag';

@Component({
    selector: 'app-configuracao-ldap',
    templateUrl: './configuracao-ldap.component.html',
    styleUrls: ['./configuracao-ldap.component.css']
})
export class ConfiguracaoLdapComponent implements OnInit {

    displayDialog: boolean = false;

    configuracoesLdap: ConfiguracaoLdapModel[];
    configuracoesLdapSelecionados: ConfiguracaoLdapModel[];
    configuracaoLdapSelecionado: ConfiguracaoLdapModel;

    @ViewChild(NovaConfiguracaoLdapComponent)
    novaConfiguracaoLdapReferencia: NovaConfiguracaoLdapComponent;

    tituloModal: string;
    colunas: any[];

    constructor(private configuracaoLdapService: ConfiguracaoLdapService, private notificacaoService: NotificacaoService) { }

    ngOnInit() {
        this.obterTodos();
    }

    obterTodos() {
        this.colunas = [
            { field: 'id', header: '#' },
            { field: 'nome', header: 'Nome' },
            { field: 'enderecoProvedor', header: 'Endereço' },
            { field: 'excluido', header: 'Status' },
            { field: 'nomeAtributoLogin', header: 'Nome Atributo do Login' }
        ];
        this.displayDialog = false
        this.configuracaoLdapService.configuracoesLdap().subscribe(
            data => {
                this.configuracoesLdap = data;
            }
        );
    }

    editar(configuracaoLdap: ConfiguracaoLdapModel) {
        if (this.novaConfiguracaoLdapReferencia) {
            this.configuracaoLdapService.configuracaoLdap(configuracaoLdap).subscribe(data => {
                this.novaConfiguracaoLdapReferencia.configuracaoLdap = data;
                this.novaConfiguracaoLdapReferencia.displayDialog = true;
                this.novaConfiguracaoLdapReferencia.tituloModal = "Editar Configuração Ldap";
            }, error => {
                this.notificacaoService.erro(error);
            });
        } else {
            this.configuracaoLdapService.configuracaoLdap(configuracaoLdap).subscribe(data => {
                this.displayDialog = true;
                this.configuracaoLdapSelecionado = data;
                this.tituloModal = "Editar Configuração Ldap";
            }, error => {
                this.notificacaoService.erro(error);
            });
        }
    }

    adicionar() {
        if (this.novaConfiguracaoLdapReferencia) {
            this.novaConfiguracaoLdapReferencia.displayDialog = true;
            this.novaConfiguracaoLdapReferencia.configuracaoLdap = new ConfiguracaoLdapModel();
            this.novaConfiguracaoLdapReferencia.tituloModal = "Nova Configuração Ldap";
        } else {
            this.displayDialog = true;
            this.configuracaoLdapSelecionado = new ConfiguracaoLdapModel();
            this.tituloModal = "Nova Configuração Ldap";
        }
    }

    // desativaUsuario(configuracao: ConfiguracaoLdapModel) {
    //     if (!AppUtil.isBlankOrNull(configuracao)) {
    //         this.notificacaoService.alertConfirm("Atenção", "Deseja desativar o usuário "+configuracao.nome+"?", "warning").then(retorno => {
    //             if (retorno.value) {
    //                 configuracao.excluido = Status.INATIVO;
    //                 this.usuarioService.ativaDesativarUsuario(usuario).subscribe(() => {
    //                     this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
    //                     this.obterTodos();
    //                 }, error => {
    //                     this.displayDialog = false;
    //                     this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar desativar o usuário "+usuario.nome+".", error);
    //                 });
    //             }
    //         });
    //     }
    // }

    deletarTodosLogicamente() {
        if (!AppUtil.isBlankOrNull(this.configuracoesLdapSelecionados)) {
            this.notificacaoService.alertConfirm("Atenção", "Deseja excluir o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
                if (retorno.value) {
                    this.configuracoesLdapSelecionados.forEach(configuracaoLdap => {
                        configuracaoLdap.excluido = Flag.SIM;
                        configuracaoLdap.dataExclusao = new Date();
                    });

                    this.configuracaoLdapService.deletarTodosLogicamente(this.configuracoesLdapSelecionados).subscribe(() => {
                        this.configuracoesLdapSelecionados.forEach(configuracaoLdap => {
                            let index = this.configuracoesLdap.indexOf(configuracaoLdap);
                            this.configuracoesLdap = this.configuracoesLdap.filter((val, i) => i != index);
                        });
                        this.notificacaoService.sucesso();
                    }, error => {
                        this.notificacaoService.erro(error);
                    });
                }
            });
        }
    }

}
