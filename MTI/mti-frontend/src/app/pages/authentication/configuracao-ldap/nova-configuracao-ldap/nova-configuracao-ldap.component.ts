import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ConfiguracaoLdapModel } from '../../../../shared/model/configuracao-ldap.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NovaConfiguracaoLdapService } from './nova-configuracao-ldap.service';
import { ConfiguracaoLdapService } from '../configuracao-ldap.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';
import { DominioLdapModel } from '../../../../shared/model/dominio-ldap.model';
import { DominioLdapService } from '../../dominio-ldap/dominio-ldap.service';
import { NovoDominioLdapComponent } from '../../dominio-ldap/novo-dominio-ldap/novo-dominio-ldap.component';

@Component({
    selector: 'diario-nova-configuracao-ldap',
    templateUrl: './nova-configuracao-ldap.component.html',
    styleUrls: ['./nova-configuracao-ldap.component.css']
})
export class NovaConfiguracaoLdapComponent implements OnInit {

    @Input() displayDialog: boolean = false;

    @Input() configuracaoLdap: ConfiguracaoLdapModel;

    @Output() salvarConfiguracaoLdapNotificacao = new EventEmitter<ConfiguracaoLdapModel>();

    userform: FormGroup;

    @Input() tituloModal: string;

    dominioLdapList: DominioLdapModel[];

    dadosComunsRef: any;

    @ViewChild(NovoDominioLdapComponent)
    novoDominioLdapComponent: NovoDominioLdapComponent;

    tituloModalNovoDominioLdap : string = 'Novo Domínio Ldap';
    displayDialogNovoDominioLdap: boolean = false;
    dominioLdapSelecionado: DominioLdapModel;

    constructor(private novaConfiguracaoLdapService: NovaConfiguracaoLdapService, private configuracaoLdapService: ConfiguracaoLdapService,
        private fb: FormBuilder, private notificacaoService: NotificacaoService, private dominioLdapService: DominioLdapService) { }

    ngOnInit() {

        this.userform = this.fb.group({
            'txtNome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'txtEnderecoProvedor': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'txtBase': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'txtNomeAtributoLogin': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'ddlDominioLdap': new FormControl('', Validators.required),
            'txtUsuario': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'txtSenha': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)]))
        });

        //this.obterTodosDominiosLdap();
    }

    obterTodosDominiosLdap() {
        this.dominioLdapList = [];
        this.dominioLdapService.dominiosLdap().subscribe(
            data => {
                this.dominioLdapList = data;
            }
        );
    }

    salvar() {
        if (this.configuracaoLdap.id) {
            this.novaConfiguracaoLdapService.atualizar(this.configuracaoLdap).subscribe(() => {
                this.closeModal();
                this.notificacaoService.sucesso();
                this.salvarConfiguracaoLdapNotificacao.emit();
            }, error => {
                this.closeModal();
                this.notificacaoService.erro(error);
                this.salvarConfiguracaoLdapNotificacao.emit();
            });
        } else {
            this.novaConfiguracaoLdapService.incluir(this.configuracaoLdap).subscribe(
                data => {
                    this.closeModal();
                    this.notificacaoService.sucesso();
                    this.salvarConfiguracaoLdapNotificacao.emit();
                }, error => {
                    this.closeModal();
                    this.notificacaoService.erro(error);
                    this.salvarConfiguracaoLdapNotificacao.emit();
                });
        }
    }

    closeModal() {
        this.displayDialog = false;
        this.userform.reset();
        this.salvarConfiguracaoLdapNotificacao.emit();
    }

    adicionarNovoDominioLdap(){
        if (this.novoDominioLdapComponent) {
            this.novoDominioLdapComponent.displayDialog = true;
            this.novoDominioLdapComponent.dominioLdap = new DominioLdapModel();
            this.novoDominioLdapComponent.tituloModal = this.tituloModalNovoDominioLdap;
        } else {
            this.displayDialogNovoDominioLdap = true;
            this.dominioLdapSelecionado = new DominioLdapModel();
        }
    }

}
