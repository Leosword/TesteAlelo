import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DominioLdapModel } from '../../../../shared/model/dominio-ldap.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NovoDominioLdapService } from './novo-dominio-ldap.service';
import { DominioLdapService } from '../dominio-ldap.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';

@Component({
    selector: 'diario-novo-dominio-ldap',
    templateUrl: './novo-dominio-ldap.component.html',
    styleUrls: ['./novo-dominio-ldap.component.css']
})
export class NovoDominioLdapComponent implements OnInit {

    @Input() displayDialog: boolean = false;

    @Input() dominioLdap: DominioLdapModel;

    @Output() salvarDominioLdapNotificacao = new EventEmitter<DominioLdapModel>();

    userform: FormGroup;

    dadosComunsRef: any;

    @Input() tituloModal: string;

    constructor(private novoDominioLdapService: NovoDominioLdapService, private dominioLdapService: DominioLdapService,
        private fb: FormBuilder, private notificacaoService: NotificacaoService) { }

    ngOnInit() {
        this.userform = this.fb.group({
            'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'descricao': new FormControl(''),
            'rdbStatus': new FormControl('')
        });
    }

    salvar() {
        if (this.dominioLdap.id) {
            this.novoDominioLdapService.atualizar(this.dominioLdap).subscribe(() => {
                this.closeModal();
                this.notificacaoService.sucesso();
                this.salvarDominioLdapNotificacao.emit();
            }, error => {
                this.closeModal();
                this.notificacaoService.erro(error);
                this.salvarDominioLdapNotificacao.emit();
            });
        } else {
            this.novoDominioLdapService.incluir(this.dominioLdap).subscribe(
                data => {
                    this.closeModal();
                    this.notificacaoService.sucesso();
                    this.salvarDominioLdapNotificacao.emit();
                }, error => {
                    this.closeModal();
                    this.notificacaoService.erro(error);
                    this.salvarDominioLdapNotificacao.emit();
                });
        }
    }

    closeModal() {
        this.displayDialog = false;
        this.userform.reset();
        this.salvarDominioLdapNotificacao.emit();
    }
}
