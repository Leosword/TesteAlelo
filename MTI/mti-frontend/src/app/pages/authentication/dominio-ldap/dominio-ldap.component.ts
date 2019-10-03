import { Component, OnInit, ViewChild } from '@angular/core';
import { DominioLdapModel } from '../../../shared/model/dominio-ldap.model';
import { NovoDominioLdapComponent } from './novo-dominio-ldap/novo-dominio-ldap.component';
import { DominioLdapService } from './dominio-ldap.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { AppUtil } from '../../../shared/app-util';
import { Flag } from '../../../shared/constants/flag';

@Component({
    selector: 'diario-dominio-ldap',
    templateUrl: './dominio-ldap.component.html',
    styleUrls: ['./dominio-ldap.component.css']
})
export class DominioLdapComponent implements OnInit {

    displayDialog: boolean = false;

    dominiosLdap: DominioLdapModel[];
    dominiosLdapSelecionados: DominioLdapModel[];
    dominioLdapSelecionado: DominioLdapModel;

    @ViewChild(NovoDominioLdapComponent)
    novoDominioLdapReferencia: NovoDominioLdapComponent;

    tituloModal: string;

    constructor(private dominioLdapService: DominioLdapService, private notificacaoService: NotificacaoService) { }

    ngOnInit() {
        //this.obterTodos();
    }
    ngAfterViewInit() {
        $('tbody').append('<tr><td colspan="12" style="text-align: center; font-size: 1.2rem; font-weight: bold;' +
            'color: red; padding: 10px 0 0 0"><i class="fa fa-asterisk"></i><span style="color: black"> Nenhum registro encontrado </span><i class="fa fa-asterisk"></i></td></tr>')
    }

    obterTodos() {
        this.displayDialog = false;
        this.dominioLdapService.dominiosLdap().subscribe(
            data => {
                this.dominiosLdap = data;
            }
        );
    }

    editar(dominioLdap: DominioLdapModel) {

        if (this.novoDominioLdapReferencia) {
            this.dominioLdapService.dominioLdap(dominioLdap).subscribe(data => {
                this.novoDominioLdapReferencia.dominioLdap = data;
                this.novoDominioLdapReferencia.displayDialog = true;
                this.novoDominioLdapReferencia.tituloModal = "Editar Domínio Ldap";
            }, error => {
                this.notificacaoService.erro(error);
            });
        } else {
            this.dominioLdapService.dominioLdap(dominioLdap).subscribe(data => {
                this.displayDialog = true;
                this.dominioLdapSelecionado = data;
                this.tituloModal = "Editar Domínio Ldap";
            }, error => {
                this.notificacaoService.erro(error);
            });
        }
    }

    adicionar() {
        if (this.novoDominioLdapReferencia) {
            this.novoDominioLdapReferencia.displayDialog = true;
            this.novoDominioLdapReferencia.dominioLdap = new DominioLdapModel();
            this.novoDominioLdapReferencia.tituloModal = "Novo Domínio Ldap";
        } else {
            this.displayDialog = true;
            this.dominioLdapSelecionado = new DominioLdapModel();
            this.tituloModal = "Novo Domínio Ldap";
        }
    }

    deletarTodosLogicamente() {
        if (!AppUtil.isBlankOrNull(this.dominiosLdapSelecionados)) {
            this.notificacaoService.alertConfirm("Atenção", "Deseja excluir o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
                if (retorno.value) {
                    this.dominiosLdapSelecionados.forEach(dominioLdap => {
                        dominioLdap.excluido = Flag.SIM;
                        dominioLdap.dataExclusao = new Date();
                    });

                    this.dominioLdapService.deletarTodosLogicamente(this.dominiosLdapSelecionados).subscribe(() => {
                        this.dominiosLdapSelecionados.forEach(dominioLdap => {
                            let index = this.dominiosLdap.indexOf(dominioLdap);
                            this.dominiosLdap = this.dominiosLdap.filter((val, i) => i != index);
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
