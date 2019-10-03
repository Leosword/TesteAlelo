import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioService } from '../usuario.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';
import { SelectItem } from 'primeng/api';
import { TbUsuario } from '../../../../shared/model/tb-usuario';
import { PerfilAcessoService } from '../../../perfil-acesso/perfil-acesso.service';
import { TbPerfil } from '../../../../shared/model/tb-perfil';
import { OperacaoService } from '../../../operacao/operacao.service';
import { TbOperacao } from '../../../../shared/model/tb-operacao';
import { ProfileEnum } from '../../../../shared/enum/profile.enum';
import { validadeCampoSenha } from './novo-usuario-custom-validation';

@Component({
    selector: 'diario-novo-usuario',
    templateUrl: './novo-usuario.component.html',
    styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

    @Input() displayDialog: boolean = false;

    @Input() usuario: TbUsuario;

    @Output() salvarUsuarioNotificacao = new EventEmitter<TbUsuario>();
    @Output() salvarUsuarioNotificacaoAlteraSenha = new EventEmitter<TbUsuario>();
    @Output() salvarUsuarioNotificacaoAlteraSenhaErro = new EventEmitter<TbUsuario>();

    userform: FormGroup;

    @Input() tituloModal: string;

    @Input() acao: string;

    @Input() modoVisualizacao: boolean;

    @Input()
    listaPerfisAssociados: any;

    tituloModalNovoContato: string = 'Novo Contato';
    displayDialogNovoContato: boolean = false;

    roleList: SelectItem[];
    perfis = new Array() as Array<TbPerfil>;
    operacoes: TbOperacao[];
    profiles = [];
    listaProfiles = [];
    campoSenha: Boolean = false;
    listaPerfis = new Array() as Array<TbPerfil>;

    constructor(private novoUsuarioService: NovoUsuarioService, private usuarioService: UsuarioService,
        private fb: FormBuilder, private notificacaoService: NotificacaoService,
        private perfilAcessoService: PerfilAcessoService,
        private operacaoService: OperacaoService) {
    }

    ngOnInit() {
        this.userform = this.fb.group({
            'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'login': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
            'email': new FormControl('', Validators.email),
            'operacao': new FormControl('', Validators.required),
            formSenha: new FormGroup({
                profile: new FormControl('', Validators.required),
                senha: new FormControl(''),
            }, validadeCampoSenha),
            'telefoneFixo': new FormControl(''),
            'rdbStatus': new FormControl(''),
            'descricao': new FormControl(''),
            'celular': new FormControl('')
        });

        this.listaPerfis = new Array() as Array<TbPerfil>;

        if (this.usuario.profile == ProfileEnum.Local) {
            this.campoSenha = true
        }

        this.obterPerfis();
        this.obterTodasOperacoes();
        this.obterProfile();
    }
    ngAfterViewInit() {
        $("div.ui-dialog-content").scrollTop(0);
    }

    // obterTodosPerfis() {
    //     this.perfis = new Array() as Array<TbPerfil>
    //     this.perfilAcessoService.obterTodosPerfis().subscribe(data => {
    //         this.perfis = data;
    //     }, error => {
    //         this.notificacaoService.erro(error);
    //     });
    // }

    obterPerfis() {
        let listaIdsPerfis: any[] = new Array();
        
        this.listaPerfisAssociados.forEach(data => {
            listaIdsPerfis.push(data.id);
        });

        this.perfilAcessoService.obterPerfisDisponiveis(listaIdsPerfis).subscribe(data => {
            this.listaPerfis = data;
        })
    }

    obterTodasOperacoes() {
        this.operacoes = [];
        this.operacaoService.obterOperacoes().subscribe(data => {
            this.operacoes = data;
        }, error => {
            this.notificacaoService.erro(error);
        });
    }

    obterProfile() {
        this.profiles = Object.keys(ProfileEnum);
        this.profiles = this.profiles.slice(this.profiles.length / 3);
        this.profiles.forEach(data => {
            if (data == "Local") {
                this.listaProfiles.push({ label: data, value: ProfileEnum.Local })
            } else {
                this.listaProfiles.push({ label: data, value: ProfileEnum.LDAP })
            }
        });
    }

    tipoAutenticacaoChanged(selectedValue) {
        if (selectedValue.value == 'LOCAL') {
            this.campoSenha = true
        } else {
            this.campoSenha = false
        }
    }

    salvar() {
        this.usuario.dataCadastro = new Date();
        
        this.novoUsuarioService.salvar(this.usuario).subscribe(() => {
            this.closeModal();
            this.notificacaoService.sucesso();
            this.salvarUsuarioNotificacao.emit();
            this.salvarUsuarioNotificacaoAlteraSenha.emit();
        }, error => {
            this.notificacaoService.erro(error);
        });
    }
    closeModal() {
        this.displayDialog = false;
        this.userform.reset();
        this.salvarUsuarioNotificacao.emit();
    }

}
