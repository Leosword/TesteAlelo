import { TbUsuario } from './../../../shared/model/tb-usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioService } from './usuario.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { AppUtil } from '../../../shared/app-util';
import { Flag } from '../../../shared/constants/flag';
import { StatusEnum } from '../../../shared/enum/status.enum';
import { Status } from '../../../shared/constants/status';
import { TbPerfil } from '../../../shared/model/tb-perfil';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { AuthStorage } from '../auth.storage';
import { Funcionalidade } from '../../../shared/enum/funcionalidade.enum';

@Component({
    selector: 'diario-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    displayDialog: boolean = false;
    displayDialogSenha: boolean = false;

    usuarios: TbUsuario[];
    usuariosSelecionados: TbUsuario[];
    usuarioSelecionado: TbUsuario;
    colunas: any[];
    listaPerfisAssociados;
    acao: string;
    modoVisualizacao: boolean;

    permissaoBtnNovo;
    permissaoBtnEditar;
    permissaoBtnDesativar;
    permissaoBtnAtivar;
    permissaoBtnAlteraSenha;
    permissaoBtnVisualizar;

    @ViewChild(NovoUsuarioComponent)
    novoUsuarioReferencia: NovoUsuarioComponent;

    @ViewChild(AlterarSenhaComponent)
    alteraSenhaReferencia: AlterarSenhaComponent;

    tituloModal: string;
    StatusEnum: typeof StatusEnum = StatusEnum;

    constructor(private usuarioService: UsuarioService, private notificacaoService: NotificacaoService) { }

    ngOnInit() {
        this.colunas = [
            { field: 'id', header: '#' },
            { field: 'loginDeRede', header: 'Login' },
            { field: 'nome', header: 'Nome' },
            { field: 'iconStatus', header: 'Status' },
            { field: 'tbPerfils', header: 'Perfil' },
            { field: 'profile', header: 'Tipo de Acesso' },
            { field: 'tbOperacao', header: 'Operação' },
            { field: 'dataCadastro', header: 'Data de Criação' }
        ];

        this.permissaoBtnNovo = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_USUARIO_BTN_INCLUIR);
        this.permissaoBtnEditar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_USUARIO_BTN_EDITAR);
        this.permissaoBtnDesativar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_USUARIO_BTN_DESATIVAR);
        this.permissaoBtnAtivar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_USUARIO_BTN_ATIVAR);
        this.permissaoBtnAlteraSenha = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_USUARIO_BTN_ALTERAR_SENHA);
        this.permissaoBtnVisualizar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_PERFIL_BTN_VISUALIZAR);

        this.obterTodos();
    }

    obterTodos() {
        this.displayDialog = false;
        this.displayDialogSenha = false;
        this.usuarioService.usuarios().subscribe(data => {
            this.usuarios = data;
            this.carregarStatus(this.usuarios);
        }
        );
    }

    getValor(rowData, column) {
        if (column == "tbPerfils") {
            rowData.forEach(data => {
                rowData = data.nome
                return rowData
            });
        }
        if (column == "tbOperacao") {
            return rowData.nome
        }
        return rowData;
    }

    carregarStatus(usuarios: TbUsuario[]) {
        usuarios.forEach(usuario => {
            if (usuario.status == StatusEnum.Ativo) {
                usuario.iconStatus = "<i class='fa fa-lg fa-check-circle text-green'></i>";
            } else {
                usuario.iconStatus = "<i class='fa fa-lg fa-times-circle text-red'></i>";
            }
        })
    }

    editar(usuario: TbUsuario, modoVisualizacao) {
        this.acao = "editar"
        this.usuarioService.usuario(usuario).subscribe(data => {
            modoVisualizacao ? this.tituloModal = "Visualizar Usuário" : this.tituloModal = "Editar Usuário";
            this.displayDialog = true;
            this.usuarioSelecionado = data;
            this.listaPerfisAssociados = data.tbPerfils;
            this.modoVisualizacao = modoVisualizacao;
        }, error => {
            this.notificacaoService.erro(error);
        });
    }

    alterarSenha(usuario: TbUsuario) {

        if (usuario.profile == "LDAP") {
            this.notificacaoService.showAlert("Atenção", "Esta operação só é valida para usuários com Acesso Local.", "warning");
        } else if (usuario.id == 1) {
            this.notificacaoService.showAlert("Atenção", "Não é possivel alterar a senha do usuário Administrador.", "warning");
        } else {
            this.usuarioService.usuario(usuario).subscribe(data => {
                this.displayDialogSenha = true;
                this.usuarioSelecionado = data;
                this.tituloModal = "Alterar Senha";
            }, error => {
                this.notificacaoService.erro(error);
            });
        }
    }

    desativaUsuario(usuario: TbUsuario) {
        if (!AppUtil.isBlankOrNull(usuario)) {
            this.notificacaoService.alertConfirm("Atenção", "Deseja desativar o usuário " + usuario.nome + "?", "warning").then(retorno => {
                if (retorno.value) {
                    usuario.status = Status.INATIVO;
                    this.usuarioService.ativaDesativarUsuario(usuario).subscribe(() => {
                        this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
                        this.obterTodos();
                    }, error => {
                        this.displayDialog = false;
                        this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar desativar o usuário " + usuario.nome + ".", "error");
                    });
                }
            });
        }
    }
    ativaUsuario(usuario: TbUsuario) {
        if (!AppUtil.isBlankOrNull(usuario)) {
            this.notificacaoService.alertConfirm("Atenção", "Deseja ativar o usuário " + usuario.nome + "?", "warning").then(retorno => {
                if (retorno.value) {
                    usuario.status = Status.ATIVO;
                    this.usuarioService.ativaDesativarUsuario(usuario).subscribe(() => {
                        this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
                        this.obterTodos();
                    }, error => {
                        this.displayDialog = false;
                        this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar ativar o usuário " + usuario.nome + ".", "error");
                    });
                }
            });
        }
    }

    adicionar() {
        this.acao = "novo";
        if (this.novoUsuarioReferencia) {
            this.novoUsuarioReferencia.displayDialog = true;
            this.novoUsuarioReferencia.usuario = new TbUsuario();
            this.novoUsuarioReferencia.tituloModal = "Novo Usuário";
            this.listaPerfisAssociados = new Array() as Array<TbPerfil>;
        } else {
            this.displayDialog = true;
            this.usuarioSelecionado = new TbUsuario();
            this.tituloModal = "Novo Usuário";
            this.listaPerfisAssociados = new Array() as Array<TbPerfil>;
        }
    }

    deletarTodosLogicamente() {
        if (!AppUtil.isBlankOrNull(this.usuariosSelecionados)) {
            this.notificacaoService.alertConfirm("Atenção", "Deseja excluir o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
                if (retorno.value) {
                    this.usuariosSelecionados.forEach(usuario => {
                        usuario.dataExclusao = new Date();
                    });

                    this.usuarioService.deletarTodosLogicamente(this.usuariosSelecionados).subscribe(() => {
                        this.usuariosSelecionados.forEach(usuario => {
                            let index = this.usuarios.indexOf(usuario);
                            this.usuarios = this.usuarios.filter((val, i) => i != index);
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
